import type { SupabaseClient } from '@supabase/supabase-js'

// ── Types ─────────────────────────────────────────────────────────────────────

export interface IntakeInput {
  // Address
  street?:       string | null
  city?:         string | null
  state?:        string | null
  zip?:          string | null
  full_address?: string | null
  lat?:          number | null
  lng?:          number | null
  type?:         'residential' | 'commercial' | 'hoa' | 'municipal' | 'industrial'
  // Contact (all optional)
  name?:         string | null
  phone?:        string | null
  email?:        string | null
  // Pipeline
  stage:         'prospect' | 'lead' | 'estimate'
  source:        'website' | 'map' | 'referral' | 'door_knock' | 'phone' | 'staff' | 'other'
  services?:     string[]
  visible_issues?: string[]
  notes?:        string | null
  timeline_preference?: string | null
  source_url?:   string | null
  created_by?:   string | null
}

export interface IntakeResult {
  propertyId:  string
  personId:    string | null
  pipelineId:  string
}

// ── Core intake function ──────────────────────────────────────────────────────
// Accepts any Supabase client (anon+service-role for public API, or staff client
// for admin actions). Caller is responsible for authentication.
//
// Flow: find-or-create property → find-or-create person → link contact →
//       insert pipeline record.

export async function createPipelineRecord(
  supabase: SupabaseClient,
  input: IntakeInput,
): Promise<IntakeResult> {

  // ── 1. Find or create property ────────────────────────────────────────────
  let propertyId: string

  const fullAddr = input.full_address?.trim() || null
  const street   = input.street?.trim()        || null
  const city     = input.city?.trim()          || null
  const state    = input.state?.trim()         || null

  // Try to find existing property by full_address first, then street+city
  let existingProperty: { id: string } | null = null

  if (fullAddr) {
    const { data } = await supabase
      .from('properties')
      .select('id')
      .eq('full_address', fullAddr)
      .limit(1)
      .maybeSingle()
    existingProperty = data
  }

  if (!existingProperty && street && city) {
    const { data } = await supabase
      .from('properties')
      .select('id')
      .eq('street', street)
      .eq('city', city)
      .limit(1)
      .maybeSingle()
    existingProperty = data
  }

  if (existingProperty) {
    propertyId = existingProperty.id
  } else {
    const { data: newProp, error } = await supabase
      .from('properties')
      .insert({
        street:       street       || null,
        city:         city         || null,
        state:        input.state?.trim() || null,
        zip:          input.zip?.trim()   || null,
        full_address: fullAddr            || null,
        lat:          input.lat           ?? null,
        lng:          input.lng           ?? null,
        type:         input.type          ?? 'residential',
      })
      .select('id')
      .single()

    if (error || !newProp) throw new Error(`Failed to create property: ${error?.message}`)
    propertyId = newProp.id
  }

  // ── 2. Find or create person ──────────────────────────────────────────────
  let personId: string | null = null
  const hasContact = !!(input.name || input.phone || input.email)

  if (hasContact) {
    let existingPerson: { id: string } | null = null

    // Dedup by email first, then phone
    if (input.email?.trim()) {
      const { data } = await supabase
        .from('people')
        .select('id')
        .eq('email', input.email.trim().toLowerCase())
        .limit(1)
        .maybeSingle()
      existingPerson = data
    }

    if (!existingPerson && input.phone?.trim()) {
      const { data } = await supabase
        .from('people')
        .select('id')
        .eq('phone', input.phone.trim())
        .limit(1)
        .maybeSingle()
      existingPerson = data
    }

    if (existingPerson) {
      personId = existingPerson.id
    } else {
      const { data: newPerson, error } = await supabase
        .from('people')
        .insert({
          created_by: input.created_by || null,
          name:       input.name?.trim()  || null,
          phone:      input.phone?.trim() || null,
          email:      input.email?.trim().toLowerCase() || null,
        })
        .select('id')
        .single()

      if (error || !newPerson) throw new Error(`Failed to create person: ${error?.message}`)
      personId = newPerson.id
    }

    // ── 3. Link person to property ──────────────────────────────────────────
    await supabase
      .from('property_contacts')
      .upsert(
        { property_id: propertyId, person_id: personId, role: 'owner', is_primary: true },
        { onConflict: 'property_id,person_id' },
      )
  }

  // ── 4. Insert pipeline record ─────────────────────────────────────────────
  const { data: pipelineRow, error: pipelineErr } = await supabase
    .from('pipeline')
    .insert({
      created_by:          input.created_by   || null,
      property_id:         propertyId,
      primary_contact_id:  personId,
      stage:               input.stage,
      source:              input.source,
      services:            input.services         ?? [],
      visible_issues:      input.visible_issues   ?? [],
      notes:               input.notes            ?? null,
      timeline_preference: input.timeline_preference ?? null,
      source_url:          input.source_url        ?? null,
    })
    .select('id')
    .single()

  if (pipelineErr || !pipelineRow) {
    throw new Error(`Failed to create pipeline record: ${pipelineErr?.message}`)
  }

  return { propertyId, personId, pipelineId: pipelineRow.id }
}
