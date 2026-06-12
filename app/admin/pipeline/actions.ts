'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { createPipelineRecord as _createPipelineRecord, type IntakeInput } from '@/lib/admin/intake'

// ── Types ─────────────────────────────────────────────────────────────────────

export type PipelineStage =
  | 'prospect' | 'lead' | 'estimate' | 'contracted'
  | 'active' | 'complete' | 'follow_up' | 'lost' | 'skipped'

export type PipelineSource =
  | 'website' | 'map' | 'referral' | 'door_knock' | 'phone' | 'staff' | 'other'

export interface PipelineRow {
  id:                  string
  created_at:          string
  updated_at:          string
  created_by:          string | null
  property_id:         string | null
  primary_contact_id:  string | null
  assigned_to:         string | null
  stage:               PipelineStage
  stage_updated_at:    string
  source:              PipelineSource
  services:            string[]
  visible_issues:      string[]
  timeline_preference: string | null
  notes:               string | null
  next_follow_up:      string | null
  closed_at:           string | null
  legacy_lead_id:      string | null
  legacy_prospect_id:  string | null
  // Joined fields
  property_street:     string | null
  property_city:       string | null
  property_state:      string | null
  property_zip:        string | null
  property_full_address: string | null
  property_lat:        number | null
  property_lng:        number | null
  property_type:       string | null
  contact_name:        string | null
  contact_phone:       string | null
  contact_email:       string | null
  assigned_name:       string | null
}

// ── Auth helper ───────────────────────────────────────────────────────────────

async function requireStaff() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')
  const { data: staff } = await supabase.from('staff').select('id').eq('id', user.id).single()
  if (!staff) throw new Error('Unauthorized')
  return { supabase, userId: user.id }
}

// ── Fetch pipeline list ───────────────────────────────────────────────────────

export async function fetchPipeline(stage?: PipelineStage | 'all') {
  const { supabase } = await requireStaff()

  let query = supabase
    .from('pipeline')
    .select(`
      *,
      properties!pipeline_property_id_fkey (
        street, city, state, zip, full_address, lat, lng, type
      ),
      people!pipeline_primary_contact_id_fkey (
        name, phone, email
      ),
      staff!pipeline_assigned_to_fkey (
        full_name
      )
    `)
    .order('updated_at', { ascending: false })

  if (stage && stage !== 'all') {
    query = query.eq('stage', stage)
  }

  const { data, error } = await query
  if (error) throw error

  // Flatten joined data
  return (data ?? []).map((row) => ({
    ...row,
    property_street:       row.properties?.street       ?? null,
    property_city:         row.properties?.city         ?? null,
    property_state:        row.properties?.state        ?? null,
    property_zip:          row.properties?.zip          ?? null,
    property_full_address: row.properties?.full_address ?? null,
    property_lat:          row.properties?.lat          ?? null,
    property_lng:          row.properties?.lng          ?? null,
    property_type:         row.properties?.type         ?? null,
    contact_name:          row.people?.name             ?? null,
    contact_phone:         row.people?.phone            ?? null,
    contact_email:         row.people?.email            ?? null,
    assigned_name:         row.staff?.full_name         ?? null,
    properties:            undefined,
    people:                undefined,
    staff:                 undefined,
  })) as PipelineRow[]
}

// ── Update stage ──────────────────────────────────────────────────────────────

export async function updatePipelineStage(id: string, stage: PipelineStage) {
  const { supabase, userId } = await requireStaff()

  const { data: current } = await supabase
    .from('pipeline').select('stage').eq('id', id).single()

  await supabase
    .from('pipeline')
    .update({
      stage,
      stage_updated_at: new Date().toISOString(),
      closed_at: ['complete', 'lost', 'skipped'].includes(stage)
        ? new Date().toISOString() : null,
    })
    .eq('id', id)

  // Log event
  await supabase.from('pipeline_events').insert({
    pipeline_id: id,
    created_by:  userId,
    type:        'stage_change',
    payload:     { from: current?.stage, to: stage },
  })

  // Auto-generate milestones when job completes
  if (stage === 'complete') {
    const now = new Date()
    const milestones = [
      { type: '1yr_checkup', months: 12 },
      { type: '2yr_checkup', months: 24 },
      { type: '5yr_checkup', months: 60 },
    ]
    const { data: pipe } = await supabase
      .from('pipeline').select('property_id').eq('id', id).single()

    await supabase.from('milestones').insert(
      milestones.map(({ type, months }) => ({
        pipeline_id: id,
        property_id: pipe?.property_id ?? null,
        type,
        status:   'scheduled',
        due_date: new Date(now.getFullYear(), now.getMonth() + months, now.getDate()).toISOString(),
      }))
    )
  }

  revalidatePath('/admin/pipeline')
  revalidatePath('/admin/milestones')
}

// ── Update notes ──────────────────────────────────────────────────────────────

export async function updatePipelineNotes(id: string, notes: string) {
  const { supabase, userId } = await requireStaff()
  await supabase.from('pipeline').update({ notes }).eq('id', id)
  await supabase.from('pipeline_events').insert({
    pipeline_id: id,
    created_by:  userId,
    type:        'note',
    payload:     { text: notes },
  })
  revalidatePath('/admin/pipeline')
}

// ── Assign staff ──────────────────────────────────────────────────────────────

export async function assignPipeline(id: string, staffId: string | null) {
  const { supabase } = await requireStaff()
  await supabase.from('pipeline').update({ assigned_to: staffId }).eq('id', id)
  revalidatePath('/admin/pipeline')
}

// ── Delete pipeline record ────────────────────────────────────────────────────

export async function deletePipelineRecord(id: string) {
  const { supabase } = await requireStaff()
  await supabase.from('pipeline').delete().eq('id', id)
  revalidatePath('/admin/pipeline')
}

// ── Fetch staff list (for assign dropdown) ────────────────────────────────────

export async function fetchStaffList() {
  const { supabase } = await requireStaff()
  const { data } = await supabase.from('staff').select('id, full_name').order('full_name')
  return data ?? []
}

// ── Create a new pipeline record (staff manual entry) ─────────────────────────

export async function createPipelineRecord(input: Omit<IntakeInput, 'created_by'>) {
  const { supabase, userId } = await requireStaff()
  const result = await _createPipelineRecord(supabase, { ...input, created_by: userId })
  revalidatePath('/admin/pipeline')
  revalidatePath('/admin/properties')
  return result
}
