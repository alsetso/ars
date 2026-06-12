'use client'

import { useState, useTransition } from 'react'
import { CalendarClock, CheckCircle2, MapPin, Clock, UserCheck, Loader2, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// ── Types ─────────────────────────────────────────────────────────────────────

type MilestoneStatus = 'scheduled' | 'contacted' | 'completed' | 'skipped'
type MilestoneType   = '1yr_checkup' | '2yr_checkup' | '5yr_checkup' | 'warranty_expiry' | 'custom'

const TYPE_LABEL: Record<MilestoneType, string> = {
  '1yr_checkup':      '1-Year Check-up',
  '2yr_checkup':      '2-Year Check-up',
  '5yr_checkup':      '5-Year Check-up',
  'warranty_expiry':  'Warranty Expiry',
  'custom':           'Custom',
}

const STATUS_CONFIG: Record<MilestoneStatus, { label: string; color: string }> = {
  scheduled: { label: 'Scheduled', color: 'bg-blue-100 text-blue-700'    },
  contacted: { label: 'Contacted', color: 'bg-amber-100 text-amber-700'  },
  completed: { label: 'Completed', color: 'bg-emerald-100 text-emerald-700' },
  skipped:   { label: 'Skipped',   color: 'bg-gray-100 text-gray-400'    },
}

const STATUS_OPTIONS: MilestoneStatus[] = ['scheduled', 'contacted', 'completed', 'skipped']
const FILTER_TABS: (MilestoneStatus | 'all')[] = ['all', 'scheduled', 'contacted', 'completed', 'skipped']

// ── Helpers ───────────────────────────────────────────────────────────────────

function isOverdue(dueDate: string, status: MilestoneStatus) {
  return status === 'scheduled' && new Date(dueDate) < new Date()
}

function isDueSoon(dueDate: string, status: MilestoneStatus) {
  const diff = new Date(dueDate).getTime() - Date.now()
  return status === 'scheduled' && diff > 0 && diff < 30 * 24 * 60 * 60 * 1000
}

// ── Milestone row ─────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MilestoneRow({ milestone, staffList }: { milestone: any; staffList: { id: string; full_name: string }[] }) {
  const [expanded,  setExpanded]  = useState(false)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const supabase = createClient()

  const address = milestone.pipeline?.properties?.full_address
    ?? [milestone.pipeline?.properties?.street, milestone.pipeline?.properties?.city, milestone.pipeline?.properties?.state].filter(Boolean).join(', ')
    ?? '—'

  const dueDate  = new Date(milestone.due_date)
  const overdue  = isOverdue(milestone.due_date, milestone.status)
  const dueSoon  = isDueSoon(milestone.due_date, milestone.status)
  const cfg      = STATUS_CONFIG[milestone.status as MilestoneStatus] ?? STATUS_CONFIG.scheduled

  async function handleStatusChange(status: MilestoneStatus) {
    await supabase.from('milestones').update({
      status,
      completed_at: status === 'completed' ? new Date().toISOString() : null,
    }).eq('id', milestone.id)
    router.refresh()
  }

  async function handleAssign(staffId: string) {
    await supabase.from('milestones').update({ assigned_to: staffId || null }).eq('id', milestone.id)
    router.refresh()
  }

  return (
    <div className={`border-b border-gray-100 last:border-0 ${overdue ? 'bg-red-50/30' : ''}`}>
      <div
        className="grid cursor-pointer grid-cols-[1fr_auto_auto_auto] items-center gap-4 px-5 py-4 hover:bg-gray-50 md:grid-cols-[2fr_1fr_1fr_auto_auto]"
        onClick={() => setExpanded((p) => !p)}
      >
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="truncate font-semibold text-gray-900">
              {TYPE_LABEL[milestone.type as MilestoneType] ?? milestone.type}
            </p>
            {overdue  && <span className="shrink-0 rounded-full bg-red-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-red-600">Overdue</span>}
            {dueSoon  && !overdue && <span className="shrink-0 rounded-full bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-amber-600">Due soon</span>}
          </div>
          <div className="mt-0.5 flex items-center gap-1">
            <MapPin className="h-3 w-3 shrink-0 text-gray-400" />
            {milestone.pipeline?.id ? (
              <Link
                href={`/admin/pipeline/${milestone.pipeline.id}`}
                onClick={(e) => e.stopPropagation()}
                className="truncate text-xs text-gray-400 hover:text-brand-primary hover:underline"
              >
                {address}
              </Link>
            ) : (
              <p className="truncate text-xs text-gray-400">{address}</p>
            )}
          </div>
        </div>

        <div className="hidden flex-col md:flex">
          <span className="text-xs font-medium text-gray-700">
            {dueDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="text-[10px] text-gray-400">
            {milestone.staff?.full_name ?? 'Unassigned'}
          </span>
        </div>

        <span className="hidden text-xs text-gray-500 md:block">
          {milestone.pipeline?.services?.join(', ') || '—'}
        </span>

        <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${cfg.color}`}>
          {cfg.label}
        </span>

        <button className="text-gray-400 hover:text-gray-600">
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      {expanded && (
        <div className="border-t border-gray-50 bg-gray-50 px-5 py-4 space-y-4" onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-wrap gap-4">
            {/* Status */}
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</p>
              <div className="flex flex-wrap gap-1.5">
                {STATUS_OPTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => startTransition(() => handleStatusChange(s))}
                    disabled={isPending || milestone.status === s}
                    className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-opacity disabled:opacity-50 ${STATUS_CONFIG[s].color} ${milestone.status === s ? 'ring-2 ring-offset-1 ring-current' : ''}`}
                  >
                    {s === 'completed' && <CheckCircle2 className="h-3 w-3" />}
                    {isPending ? <Loader2 className="h-3 w-3 animate-spin" /> : null}
                    {STATUS_CONFIG[s].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Assign */}
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <UserCheck className="inline h-3 w-3 mr-0.5" />Assigned
              </p>
              <select
                defaultValue={milestone.assigned_to ?? ''}
                onChange={(e) => handleAssign(e.target.value)}
                disabled={isPending}
                className="rounded-lg border border-gray-200 bg-white py-1.5 pl-2 pr-6 text-xs text-gray-700 focus:border-brand-primary focus:outline-none"
              >
                <option value="">Unassigned</option>
                {staffList.map((s) => (
                  <option key={s.id} value={s.id}>{s.full_name}</option>
                ))}
              </select>
            </div>

            {/* Due date */}
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <Clock className="inline h-3 w-3 mr-0.5" />Due Date
              </p>
              <p className={`text-sm font-semibold ${overdue ? 'text-red-600' : 'text-gray-700'}`}>
                {dueDate.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>

          {milestone.notes && (
            <div className="rounded-lg border border-gray-200 bg-white p-3">
              <p className="text-xs text-gray-600">{milestone.notes}</p>
            </div>
          )}

          {milestone.pipeline?.id && (
            <Link
              href={`/admin/pipeline/${milestone.pipeline.id}`}
              className="flex items-center gap-1.5 text-xs font-medium text-brand-primary hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              View Job in Pipeline
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function MilestonesClient({
  milestones, staffList,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  milestones: any[]
  staffList:  { id: string; full_name: string }[]
}) {
  const [activeFilter, setActiveFilter] = useState<MilestoneStatus | 'all'>('scheduled')

  const filtered = activeFilter === 'all'
    ? milestones
    : milestones.filter((m) => m.status === activeFilter)

  const countFor = (f: MilestoneStatus | 'all') =>
    f === 'all' ? milestones.length : milestones.filter((m) => m.status === f).length

  const overdueCount = milestones.filter((m) => isOverdue(m.due_date, m.status)).length

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-gray-200 bg-white px-6 py-5">
        <div className="flex items-center gap-3">
          <CalendarClock className="h-5 w-5 text-brand-primary" />
          <h1 className="text-xl font-bold text-gray-900">Milestones</h1>
          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-500">
            {milestones.length}
          </span>
          {overdueCount > 0 && (
            <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-bold text-red-600">
              {overdueCount} overdue
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Follow-up checkups auto-generated when a job moves to Complete.
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {FILTER_TABS.map((f) => {
            const count  = countFor(f)
            const active = activeFilter === f
            const label  = f === 'all' ? 'All' : STATUS_CONFIG[f].label
            const color  = f === 'all' ? 'bg-gray-100 text-gray-600' : STATUS_CONFIG[f].color
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  active ? color + ' ring-2 ring-offset-1 ring-current' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {label}
                <span className={`rounded-full px-1.5 py-0.5 text-[10px] tabular-nums ${active ? 'bg-white/60' : 'bg-gray-200 text-gray-500'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="hidden border-b border-gray-100 bg-gray-50 px-5 py-2 md:grid md:grid-cols-[2fr_1fr_1fr_auto_auto]">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Type / Address</p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Due / Assigned</p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Services</p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</p>
        <span />
      </div>

      <div className="flex-1 overflow-auto bg-white">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-20 text-center">
            <CalendarClock className="h-8 w-8 text-gray-200" />
            <p className="text-sm text-gray-400">No milestones in this status.</p>
            <p className="text-xs text-gray-400">They auto-generate when a job moves to Complete.</p>
          </div>
        ) : (
          filtered.map((m) => <MilestoneRow key={m.id} milestone={m} staffList={staffList} />)
        )}
      </div>
    </div>
  )
}
