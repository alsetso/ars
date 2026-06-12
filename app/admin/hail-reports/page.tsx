import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { HailReportsClient } from './HailReportsClient'

export const metadata = { title: 'Hail Reports — Admin' }
export const dynamic = 'force-dynamic'

export default async function HailReportsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  return <HailReportsClient />
}
