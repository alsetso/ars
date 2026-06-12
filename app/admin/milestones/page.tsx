import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { MilestonesClient } from './MilestonesClient'

export const metadata = { title: 'Milestones — Admin' }

export default async function MilestonesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const [{ data: milestones }, { data: staffList }] = await Promise.all([
    supabase
      .from('milestones')
      .select(`
        *,
        pipeline (
          id, stage, services,
          properties ( full_address, street, city, state )
        ),
        staff!milestones_assigned_to_fkey ( full_name )
      `)
      .order('due_date', { ascending: true }),
    supabase.from('staff').select('id, full_name').order('full_name'),
  ])

  return <MilestonesClient milestones={milestones ?? []} staffList={staffList ?? []} />
}
