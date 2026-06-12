'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

async function requireStaff() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')
  const { data: staff } = await supabase.from('staff').select('id').eq('id', user.id).single()
  if (!staff) throw new Error('Unauthorized')
  return { supabase, userId: user.id }
}

// Promote a skip-trace candidate to a confirmed contact role
export async function confirmPropertyContact(
  personId:   string,
  propertyId: string,
  role:       'owner' | 'co-owner' | 'tenant' | 'agent' | 'hoa_rep' | 'contact' = 'owner',
) {
  const { supabase } = await requireStaff()
  await supabase
    .from('property_contacts')
    .update({ role, is_primary: role === 'owner' })
    .eq('person_id', personId)
    .eq('property_id', propertyId)
  revalidatePath(`/admin/people/${personId}`)
  revalidatePath(`/admin/properties/${propertyId}`)
}

// Remove person from a property entirely
export async function removePropertyContact(personId: string, propertyId: string) {
  const { supabase } = await requireStaff()
  await supabase
    .from('property_contacts')
    .delete()
    .eq('person_id', personId)
    .eq('property_id', propertyId)
  revalidatePath(`/admin/people/${personId}`)
  revalidatePath(`/admin/properties/${propertyId}`)
}

// Deletes the person row.
// Cascades:  property_contacts
// SET NULL:  pipeline.primary_contact_id
export async function deletePerson(id: string) {
  const { supabase } = await requireStaff()
  const { error } = await supabase.from('people').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/people')
  revalidatePath('/admin/pipeline')
}
