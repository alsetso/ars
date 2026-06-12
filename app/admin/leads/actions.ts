'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

type LeadStatus = 'new' | 'contacted' | 'in_progress' | 'closed' | 'lost'

const VALID_STATUSES: LeadStatus[] = ['new', 'contacted', 'in_progress', 'closed', 'lost']

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
function isValidPhone(phone: string) {
  return /^[\d\s\-().+]{7,20}$/.test(phone)
}
function sanitize(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str.trim().slice(0, 1000)
}

export interface CreateLeadInput {
  name: string
  email: string
  phone: string
  service_type: string
  address: string
  city: string
  state: string
  zip: string
  timeline: string
  message: string
  lat: number | null
  lng: number | null
}

export async function createLead(input: CreateLeadInput) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')

  const { data: staff } = await supabase
    .from('staff')
    .select('id')
    .eq('id', user.id)
    .single()
  if (!staff) throw new Error('Unauthorized')

  const name = sanitize(input.name)
  const email = sanitize(input.email).toLowerCase()
  const phone = sanitize(input.phone)

  if (!name || !email || !phone) throw new Error('Name, email, and phone are required.')
  if (!isValidEmail(email)) throw new Error('Invalid email address.')
  if (!isValidPhone(phone)) throw new Error('Invalid phone number.')

  const { error } = await supabase.from('leads').insert({
    name,
    email,
    phone,
    service_type: sanitize(input.service_type) || null,
    address: sanitize(input.address) || null,
    city: sanitize(input.city) || null,
    state: sanitize(input.state) || null,
    zip: sanitize(input.zip) || null,
    timeline: sanitize(input.timeline) || null,
    message: sanitize(input.message) || null,
    lat: input.lat ?? null,
    lng: input.lng ?? null,
    source: 'staff',
    created_by_staff_id: user.id,
    status: 'new',
  })

  if (error) throw new Error(error.message)

  revalidatePath('/admin/leads')
}

export async function insertLeadMedia(
  leadId: string,
  storagePath: string,
  fileName: string,
  fileSize: number,
  mimeType: string
): Promise<{ id: string }> {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')

  const { data, error } = await supabase
    .from('lead_media')
    .insert({
      lead_id: leadId,
      storage_path: storagePath,
      file_name: fileName,
      file_size: fileSize,
      mime_type: mimeType,
      uploaded_by: user.id,
    })
    .select('id')
    .single()

  if (error) throw new Error(error.message)

  revalidatePath('/admin/leads')
  return { id: data.id }
}

export async function deleteLeadMedia(mediaId: string, storagePath: string) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')

  const { error: storageError } = await supabase.storage
    .from('lead-media')
    .remove([storagePath])
  if (storageError) console.error('Storage delete error:', storageError.message)

  const { error } = await supabase.from('lead_media').delete().eq('id', mediaId)
  if (error) throw new Error(error.message)

  revalidatePath('/admin/leads')
}

export async function deleteLead(leadId: string) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')

  const { error } = await supabase.from('leads').delete().eq('id', leadId)
  if (error) throw new Error(error.message)

  revalidatePath('/admin/leads')
}

export async function updateLeadCoords(leadId: string, lat: number, lng: number) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')
  await supabase.from('leads').update({ lat, lng }).eq('id', leadId)
}

export async function updateLeadExtras(
  leadId: string,
  field: 'extra_phones' | 'extra_emails' | 'extra_addresses',
  values: string[]
) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')

  const { error } = await supabase
    .from('leads')
    .update({ [field]: values })
    .eq('id', leadId)

  if (error) throw new Error(error.message)

  revalidatePath('/admin/leads')
}

export async function updateLeadStatus(leadId: string, status: LeadStatus) {
  if (!VALID_STATUSES.includes(status)) {
    throw new Error('Invalid status')
  }

  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')

  const { error } = await supabase
    .from('leads')
    .update({ status })
    .eq('id', leadId)

  if (error) throw new Error(error.message)

  revalidatePath('/admin/leads')
}

export async function updateLeadNotes(leadId: string, notes: string) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')

  const { error } = await supabase
    .from('leads')
    .update({ notes: notes.trim().slice(0, 5000) })
    .eq('id', leadId)

  if (error) throw new Error(error.message)

  revalidatePath('/admin/leads')
}
