import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { PropertiesClient } from './PropertiesClient'

export const metadata = { title: 'Properties — Admin' }

export default async function PropertiesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  // Properties with pipeline count and primary contact
  const { data: properties } = await supabase
    .from('properties')
    .select(`
      *,
      pipeline ( id, stage, services, updated_at ),
      property_contacts (
        role, is_primary,
        people ( id, name, phone, email )
      )
    `)
    .order('created_at', { ascending: false })

  return <PropertiesClient properties={properties ?? []} />
}
