'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

async function requireStaff() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')
  const { data: staff } = await supabase.from('staff').select('id').eq('id', user.id).single()
  if (!staff) throw new Error('Unauthorized')
  return { supabase }
}

// Deletes the property row.
// Cascades:  property_contacts, property_media, skip_trace_runs
// SET NULL:  pipeline.property_id, milestones.property_id
export async function deleteProperty(id: string) {
  const { supabase } = await requireStaff()
  const { error } = await supabase.from('properties').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/properties')
  revalidatePath('/admin/pipeline')
}
