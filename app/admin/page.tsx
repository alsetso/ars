import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import AdminDashboard from './AdminDashboard'

export default async function AdminPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const { data: staff } = await supabase
    .from('staff')
    .select('*')
    .eq('id', user.id)
    .single()

  if (!staff) redirect('/admin/login')

  // ── Real stats ─────────────────────────────────────────────────────────────
  const now            = new Date()
  const monthStart     = new Date(now.getFullYear(), now.getMonth(), 1).toISOString()

  const [
    { count: openEstimates },
    { count: activePeople  },
    { count: jobsThisMonth },
    { count: pendingFollowUps },
  ] = await Promise.all([
    supabase.from('pipeline').select('*', { count: 'exact', head: true }).eq('stage', 'estimate'),
    supabase.from('people').select('*',   { count: 'exact', head: true }),
    supabase.from('pipeline').select('*', { count: 'exact', head: true }).gte('created_at', monthStart),
    supabase.from('pipeline').select('*', { count: 'exact', head: true })
      .lte('next_follow_up', now.toISOString())
      .not('next_follow_up', 'is', null)
      .not('stage', 'in', '("complete","lost","skipped")'),
  ])

  return (
    <AdminDashboard
      staff={staff}
      stats={{
        openEstimates:   openEstimates  ?? 0,
        activePeople:    activePeople   ?? 0,
        jobsThisMonth:   jobsThisMonth  ?? 0,
        pendingFollowUps: pendingFollowUps ?? 0,
      }}
    />
  )
}
