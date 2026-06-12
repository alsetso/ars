import { createClient } from '@/lib/supabase/server'
import { rapidApiProvider } from './providers/rapidapi'
import type { TracedPerson, SkipTraceRawData } from './types'

const PROVIDER  = rapidApiProvider
const CACHE_DAYS = 30

// ── Auth helper ───────────────────────────────────────────────────────────────

async function requireStaff() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')
  const { data: staff } = await supabase.from('staff').select('id').eq('id', user.id).single()
  if (!staff) throw new Error('Unauthorized')
  return { supabase, userId: user.id }
}

// ── getTracedPeopleForProperty ────────────────────────────────────────────────
// Returns all people linked to a property that came from skip trace.

export async function getTracedPeopleForProperty(
  propertyId: string,
): Promise<TracedPerson[]> {
  const { supabase } = await requireStaff()

  const { data } = await supabase
    .from('property_contacts')
    .select('people!inner(id, created_at, name, phone, email, extra_phones, extra_emails, skip_traced_at, skip_trace_provider_id, skip_trace_raw)')
    .eq('property_id', propertyId)
    .not('people.skip_traced_at', 'is', null)
    .order('created_at', { referencedTable: 'people', ascending: false })

  return ((data ?? []).map((row) => (row as unknown as { people: TracedPerson }).people)) as TracedPerson[]
}

// ── traceAddress ──────────────────────────────────────────────────────────────
// Calls the provider for an address, writes each result directly into people +
// property_contacts. Logs the run in skip_trace_runs.
// Returns cached people if a fresh trace already exists.

export async function traceAddress({
  propertyId,
  street,
  citystatezip,
  fullAddress,
  forceRefresh = false,
}: {
  propertyId:    string
  street:        string
  citystatezip:  string
  fullAddress?:  string
  forceRefresh?: boolean
}): Promise<TracedPerson[]> {
  const { supabase, userId } = await requireStaff()

  // ── Return cached people if a fresh run exists ────────────────────────────
  if (!forceRefresh) {
    const cutoff = new Date(Date.now() - CACHE_DAYS * 86_400_000).toISOString()
    const { data: run } = await supabase
      .from('skip_trace_runs')
      .select('id')
      .eq('property_id', propertyId)
      .eq('provider',    PROVIDER.id)
      .eq('status',      'complete')
      .gte('created_at', cutoff)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()

    if (run) return getTracedPeopleForProperty(propertyId)
  }

  // ── Call provider ─────────────────────────────────────────────────────────
  let normalized
  try {
    const result = await PROVIDER.fetchAddressTrace(street, citystatezip)
    normalized = result.normalized
  } catch (err) {
    await supabase.from('skip_trace_runs').insert({
      created_by:  userId,
      property_id: propertyId,
      provider:    PROVIDER.id,
      status:      'failed',
      error_message: String(err),
    })
    throw err
  }

  // ── Log the run ───────────────────────────────────────────────────────────
  await supabase.from('skip_trace_runs').insert({
    created_by:    userId,
    property_id:   propertyId,
    provider:      PROVIDER.id,
    status:        'complete',
    records_found: normalized.recordsFound,
  })

  // ── Write each person directly into people + property_contacts ────────────
  for (const p of normalized.people) {
    const rawData: SkipTraceRawData = {
      age:               p.age,
      born:              null,
      lives_in:          p.livesIn   || null,
      used_to_live_in:   p.usedToLiveIn || null,
      related_to:        p.relatedTo || null,
      profile_link:      p.profileLink || null,
      detail_fetched_at: null,
      current_address:   null,
      all_phones:        null,
      previous_addresses: [],
      relatives:         [],
      associates:        [],
    }

    // Upsert person by provider ID unique constraint
    const { data: person, error: personErr } = await supabase
      .from('people')
      .upsert(
        {
          created_by:             userId,
          name:                   p.name,
          skip_traced_at:         new Date().toISOString(),
          skip_trace_provider_id: p.providerPersonId,
          skip_trace_raw:         rawData,
        },
        { onConflict: 'skip_trace_provider_id' },
      )
      .select('id')
      .single()

    if (personErr || !person) {
      console.error('skip-trace: failed to upsert person', p.name, personErr?.message)
      continue
    }

    // Link to property as unconfirmed candidate — staff confirms role on the person page
    await supabase
      .from('property_contacts')
      .upsert(
        { property_id: propertyId, person_id: person.id, role: 'candidate', is_primary: false },
        { onConflict: 'property_id,person_id' },
      )
  }

  // Fetch address metadata to keep `full_address` on the run if needed
  void fullAddress

  return getTracedPeopleForProperty(propertyId)
}

// ── getPersonFromDb ───────────────────────────────────────────────────────────
// Returns person data from DB only — no API call. Used for initial page load.

export async function getPersonFromDb(personId: string): Promise<TracedPerson | null> {
  const { supabase } = await requireStaff()
  const { data } = await supabase
    .from('people')
    .select('id, created_at, name, phone, email, extra_phones, extra_emails, skip_traced_at, skip_trace_provider_id, skip_trace_raw')
    .eq('id', personId)
    .single()
  return (data as TracedPerson | null)
}

// ── tracePersonDetail ─────────────────────────────────────────────────────────
// Fetches full contact detail from the API for a skip-traced person.
// Only callable when person has a skip_trace_provider_id.
// Returns cached data without an API call if detail was already fetched.

export async function tracePersonDetail(
  personId:      string,
  forceRefresh = false,
): Promise<TracedPerson> {
  const { supabase } = await requireStaff()

  const { data: person, error } = await supabase
    .from('people')
    .select('id, name, phone, email, extra_phones, extra_emails, skip_traced_at, skip_trace_provider_id, skip_trace_raw')
    .eq('id', personId)
    .single()

  if (error || !person) throw new Error('Person not found')
  if (!person.skip_trace_provider_id) throw new Error('Person has no skip trace provider ID — cannot fetch detail')

  const raw = person.skip_trace_raw as SkipTraceRawData | null

  // Return cached detail if already fetched
  if (raw?.detail_fetched_at && !forceRefresh) return person as TracedPerson

  // ── Fetch detail from provider ────────────────────────────────────────────
  const { normalized } = await PROVIDER.fetchPersonDetail(person.skip_trace_provider_id)

  const updatedRaw: SkipTraceRawData = {
    ...(raw ?? {
      age: null, lives_in: null, used_to_live_in: null, related_to: null,
      profile_link: null, previous_addresses: [], relatives: [], associates: [],
    }),
    born:              normalized.born             || null,
    detail_fetched_at: new Date().toISOString(),
    current_address:   normalized.currentAddress,
    all_phones:        normalized.allPhones.length ? normalized.allPhones : null,
    previous_addresses: normalized.previousAddresses,
    relatives:         normalized.relatives,
    associates:        normalized.associates,
  }

  const { data: updated, error: updateErr } = await supabase
    .from('people')
    .update({
      phone:        normalized.primaryPhone       || null,
      extra_phones: normalized.allPhones.length
        ? normalized.allPhones.filter((p) => p.phoneNumber !== normalized.primaryPhone).map((p) => p.phoneNumber)
        : null,
      extra_emails: normalized.emailAddresses.length ? normalized.emailAddresses : null,
      skip_trace_raw: updatedRaw,
    })
    .eq('id', personId)
    .select('id, created_at, name, phone, email, extra_phones, extra_emails, skip_traced_at, skip_trace_provider_id, skip_trace_raw')
    .single()

  if (updateErr || !updated) throw new Error('Failed to store person detail')
  return updated as TracedPerson
}
