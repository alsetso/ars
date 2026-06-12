import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { fetchPipeline, fetchStaffList, type PipelineStage } from './actions'
import { PipelineClient } from './PipelineClient'

export const metadata = { title: 'Pipeline — Admin' }

export default async function PipelinePage({
  searchParams,
}: {
  searchParams: { stage?: string }
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const validStages: (PipelineStage | 'all')[] = [
    'all', 'prospect', 'lead', 'estimate', 'contracted',
    'active', 'complete', 'follow_up', 'lost', 'skipped',
  ]
  const initialStage = (
    validStages.includes(searchParams.stage as PipelineStage | 'all')
      ? searchParams.stage
      : 'all'
  ) as PipelineStage | 'all'

  const [records, staffList] = await Promise.all([
    fetchPipeline(initialStage === 'all' ? undefined : initialStage),
    fetchStaffList(),
  ])

  return <PipelineClient records={records} staffList={staffList} initialStage={initialStage} />
}
