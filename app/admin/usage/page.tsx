import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { UsageClient } from './UsageClient'

export const metadata = { title: 'API Usage — Admin' }

export interface MonthBucket {
  month:       string  // 'YYYY-MM'
  address:     number
  person:      number
  total:       number
}

export interface UsageData {
  thisMonth:   MonthBucket
  history:     MonthBucket[]
  provider:    string
  tier1Limit:  number  // 100
  tier2Limit:  number  // 2500
}

async function getUsage(): Promise<UsageData> {
  const supabase = await createClient()

  // ── Address-level calls per month (skip_trace_runs) ───────────────────────
  const { data: runRows } = await supabase
    .from('skip_trace_runs')
    .select('created_at')
    .eq('status', 'complete')
    .order('created_at', { ascending: false })

  // ── Person detail calls per month (people with detail_fetched_at in raw) ──
  const { data: peopleRows } = await supabase
    .from('people')
    .select('skip_trace_raw')
    .not('skip_trace_raw', 'is', null)

  // ── Bucket both into YYYY-MM ──────────────────────────────────────────────
  const buckets = new Map<string, MonthBucket>()
  const toBucket = (iso: string) => iso.slice(0, 7)

  for (const row of runRows ?? []) {
    const m = toBucket(row.created_at)
    if (!buckets.has(m)) buckets.set(m, { month: m, address: 0, person: 0, total: 0 })
    const b = buckets.get(m)!
    b.address += 1
    b.total   += 1
  }

  for (const row of peopleRows ?? []) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const detailAt = (row.skip_trace_raw as any)?.detail_fetched_at as string | null
    if (!detailAt) continue
    const m = toBucket(detailAt)
    if (!buckets.has(m)) buckets.set(m, { month: m, address: 0, person: 0, total: 0 })
    const b = buckets.get(m)!
    b.person += 1
    b.total  += 1
  }

  const currentMonth = new Date().toISOString().slice(0, 7)
  const history = [...buckets.values()].sort((a, b) => b.month.localeCompare(a.month))
  const thisMonth = history.find((b) => b.month === currentMonth)
    ?? { month: currentMonth, address: 0, person: 0, total: 0 }

  return {
    thisMonth,
    history,
    provider:   'RapidAPI — TruePeopleSearch',
    tier1Limit: 100,
    tier2Limit: 2500,
  }
}

export default async function UsagePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const usage = await getUsage()
  return <UsageClient usage={usage} />
}
