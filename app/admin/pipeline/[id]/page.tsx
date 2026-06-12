import { createClient } from '@/lib/supabase/server'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { PipelineDetail } from './PipelineDetail'

export default async function PipelineDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const [
    { data: record },
    { data: events },
    { data: staffList },
  ] = await Promise.all([
    supabase
      .from('pipeline')
      .select(`
        *,
        properties ( id, street, city, state, zip, full_address, lat, lng, type ),
        people!pipeline_primary_contact_id_fkey ( id, name, phone, email, extra_phones, extra_emails ),
        staff!pipeline_assigned_to_fkey ( id, full_name ),
        milestones ( id, type, status, due_date, notes )
      `)
      .eq('id', params.id)
      .single(),

    // Fetch events separately (created_by → auth.users, not staff directly)
    supabase
      .from('pipeline_events')
      .select('id, created_at, type, payload, created_by')
      .eq('pipeline_id', params.id)
      .order('created_at', { ascending: true }),

    supabase.from('staff').select('id, full_name').order('full_name'),
  ])

  if (!record) notFound()

  // Attach staff names to events via staffList lookup
  const staffMap = Object.fromEntries((staffList ?? []).map((s) => [s.id, s.full_name]))
  const enrichedEvents = (events ?? []).map((ev) => ({
    ...ev,
    staff: ev.created_by ? { full_name: staffMap[ev.created_by] ?? null } : null,
  }))

  return (
    <div className="mx-auto max-w-2xl px-5 py-8">
      <Link
        href="/admin/pipeline"
        className="mb-6 flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-700"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Pipeline
      </Link>
      <PipelineDetail record={{ ...record, pipeline_events: enrichedEvents }} staffList={staffList ?? []} />
    </div>
  )
}
