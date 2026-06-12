import type { ReactNode } from 'react'
import { createClient } from '@/lib/supabase/server'
import { AdminShell } from '@/components/admin/AdminShell'

export const metadata = {
  title: 'Admin — Advanced Roofing & Siding',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // No session → must be the login page (middleware redirects everything else)
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    )
  }

  const { data: staff } = await supabase
    .from('staff')
    .select('id, full_name, email, role')
    .eq('id', user.id)
    .single()

  // Invalid staff session → render bare (middleware/page will handle redirect)
  if (!staff) {
    return (
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    )
  }

  return (
    <AdminShell staff={staff}>
      {children}
    </AdminShell>
  )
}
