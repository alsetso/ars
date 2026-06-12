'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export type ProspectStatus = 'new' | 'contacted' | 'qualified' | 'promoted' | 'dismissed'

export interface CreateProspectInput {
  full_address: string | null
  address: string | null
  city: string | null
  state: string | null
  zip: string | null
  lat: number
  lng: number
  visible_issues: string[]
  service_type: string | null
  notes: string | null
  name: string | null
  phone: string | null
  email: string | null
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function sanitize(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str.trim().slice(0, 2000)
}

async function requireStaff() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')
  const { data: staff } = await supabase.from('staff').select('id').eq('id', user.id).single()
  if (!staff) throw new Error('Unauthorized')
  return { supabase, user }
}

// ── Actions ───────────────────────────────────────────────────────────────────

export async function createProspect(input: CreateProspectInput) {
  const { supabase, user } = await requireStaff()

  const { error } = await supabase.from('prospects').insert({
    full_address:   sanitize(input.full_address),
    address:        sanitize(input.address),
    city:           sanitize(input.city),
    state:          sanitize(input.state),
    zip:            sanitize(input.zip),
    lat:            input.lat,
    lng:            input.lng,
    visible_issues: input.visible_issues.filter(Boolean),
    service_type:   sanitize(input.service_type) || null,
    notes:          sanitize(input.notes) || null,
    name:           sanitize(input.name) || null,
    phone:          sanitize(input.phone) || null,
    email:          sanitize(input.email) || null,
    source:         'map',
    status:         'new',
    added_by:       user.id,
  })

  if (error) throw new Error(error.message)
  revalidatePath('/admin/prospects')
  revalidatePath('/admin/map')
}

export async function updateProspectStatus(id: string, status: ProspectStatus) {
  const { supabase } = await requireStaff()
  const { error } = await supabase.from('prospects').update({ status }).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/prospects')
  revalidatePath('/admin/map')
}

export async function updateProspectNotes(id: string, notes: string) {
  const { supabase } = await requireStaff()
  const { error } = await supabase
    .from('prospects')
    .update({ notes: notes.trim().slice(0, 5000) })
    .eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/prospects')
}

export async function deleteProspect(id: string) {
  const { supabase } = await requireStaff()
  const { error } = await supabase.from('prospects').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/prospects')
  revalidatePath('/admin/map')
}

export async function promoteProspectToLead(
  prospectId: string,
  override: { name: string; phone: string; email: string }
) {
  const { supabase, user } = await requireStaff()

  const { data: prospect, error: fetchErr } = await supabase
    .from('prospects')
    .select('*')
    .eq('id', prospectId)
    .single()

  if (fetchErr || !prospect) throw new Error('Prospect not found')
  if (prospect.status === 'promoted') throw new Error('Already promoted')

  const name  = sanitize(override.name  || prospect.name)
  const phone = sanitize(override.phone || prospect.phone)
  const email = sanitize(override.email || prospect.email)

  if (!name || !phone || !email) {
    throw new Error('Name, phone, and email are required to promote to a lead.')
  }

  // Build a notes string that carries over prospect intelligence
  const issueList = prospect.visible_issues?.length
    ? `Visible issues observed: ${prospect.visible_issues.join(', ')}.`
    : ''
  const combinedNotes = [issueList, prospect.notes].filter(Boolean).join('\n\n')

  const { data: lead, error: leadErr } = await supabase
    .from('leads')
    .insert({
      name,
      phone,
      email,
      address:              prospect.address,
      city:                 prospect.city,
      state:                prospect.state,
      zip:                  prospect.zip,
      lat:                  prospect.lat,
      lng:                  prospect.lng,
      service_type:         prospect.service_type,
      notes:                combinedNotes || null,
      source:               'prospect',
      status:               'new',
      created_by_staff_id:  user.id,
    })
    .select('id')
    .single()

  if (leadErr || !lead) throw new Error(leadErr?.message ?? 'Failed to create lead')

  const { error: updateErr } = await supabase
    .from('prospects')
    .update({ status: 'promoted', promoted_at: new Date().toISOString(), lead_id: lead.id })
    .eq('id', prospectId)

  if (updateErr) throw new Error(updateErr.message)

  revalidatePath('/admin/prospects')
  revalidatePath('/admin/leads')
  revalidatePath('/admin/map')

  return { leadId: lead.id }
}
