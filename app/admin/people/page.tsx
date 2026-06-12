import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { PeopleClient } from './PeopleClient'

export const metadata = { title: 'People — Admin' }

export default async function PeoplePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const { data: people } = await supabase
    .from('people')
    .select(`
      *,
      property_contacts (
        role, is_primary,
        properties ( id, full_address, street, city, state, type )
      )
    `)
    .order('created_at', { ascending: false })

  return <PeopleClient people={people ?? []} />
}
