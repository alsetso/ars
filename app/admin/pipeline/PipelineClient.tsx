'use client'

import { useState, useTransition } from 'react'
import {
  MapPin, Phone, Mail, ChevronDown, ChevronUp, Loader2,
  StickyNote, UserCheck, Trash2, Building2, GitPullRequestArrow,
  Fingerprint, Tag, ExternalLink,
} from 'lucide-react'
import Link from 'next/link'
import {
  updatePipelineStage, updatePipelineNotes, assignPipeline,
  deletePipelineRecord, type PipelineRow, type PipelineStage,
} from './actions'

// ── Stage config ──────────────────────────────────────────────────────────────

const STAGES: { value: PipelineStage | 'all'; label: string; color: string }[] = [
  { value: 'all',        label: 'All',        color: 'bg-gray-100 text-gray-600'    },
  { value: 'prospect',   label: 'Prospect',   color: 'bg-sky-100 text-sky-700'      },
  { value: 'lead',       label: 'Lead',       color: 'bg-blue-100 text-blue-700'    },
  { value: 'estimate',   label: 'Estimate',   color: 'bg-violet-100 text-violet-700'},
  { value: 'contracted', label: 'Contracted', color: 'bg-amber-100 text-amber-700'  },
  { value: 'active',     label: 'Active',     color: 'bg-orange-100 text-orange-700'},
  { value: 'complete',   label: 'Complete',   color: 'bg-emerald-100 text-emerald-700'},
  { value: 'follow_up',  label: 'Follow-up',  color: 'bg-teal-100 text-teal-700'   },
  { value: 'lost',       label: 'Lost',       color: 'bg-red-100 text-red-500'      },
  { value: 'skipped',    label: 'Skipped',    color: 'bg-gray-100 text-gray-400'   },
]

function stageCfg(stage: string) {
  return STAGES.find((s) => s.value === stage) ?? STAGES[0]
}

const STAGE_OPTIONS = STAGES.filter((s) => s.value !== 'all') as { value: PipelineStage; label: string; color: string }[]

// ── Source badge ──────────────────────────────────────────────────────────────

const SOURCE_COLOR: Record<string, string> = {
  website:    'bg-blue-50 text-blue-600',
  map:        'bg-emerald-50 text-emerald-700',
  referral:   'bg-purple-50 text-purple-700',
  door_knock: 'bg-orange-50 text-orange-700',
  phone:      'bg-yellow-50 text-yellow-700',
  staff:      'bg-amber-50 text-amber-700',
  other:      'bg-gray-50 text-gray-500',
}

// ── Pipeline row ──────────────────────────────────────────────────────────────

function PipelineRow({
  record, staffList,
}: {
  record: PipelineRow
  staffList: { id: string; full_name: string }[]
}) {
  const [expanded,      setExpanded]      = useState(false)
  const [notes,         setNotes]         = useState(record.notes ?? '')
  const [notesSaved,    setNotesSaved]    = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [isPending,     startTransition]  = useTransition()

  const cfg        = stageCfg(record.stage)
  const address    = record.property_full_address
    ?? [record.property_street, record.property_city, record.property_state].filter(Boolean).join(', ')
    ?? '—'
  const date       = new Date(record.updated_at).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  })

  function handleStageChange(e: React.ChangeEvent<HTMLSelectElement>) {
    startTransition(() => updatePipelineStage(record.id, e.target.value as PipelineStage))
  }
  function handleAssign(e: React.ChangeEvent<HTMLSelectElement>) {
    startTransition(() => assignPipeline(record.id, e.target.value || null))
  }
  function handleSaveNotes() {
    startTransition(async () => {
      await updatePipelineNotes(record.id, notes)
      setNotesSaved(true)
      setTimeout(() => setNotesSaved(false), 2000)
    })
  }

  return (
    <div className="border-b border-gray-100 last:border-0">
      {/* Summary row */}
      <div
        className="grid cursor-pointer grid-cols-[1fr_auto_auto_auto] items-center gap-4 px-5 py-4 hover:bg-gray-50 md:grid-cols-[2fr_1fr_1fr_auto_auto]"
        onClick={() => setExpanded((p) => !p)}
      >
        {/* Address + contact */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Link
              href={`/admin/pipeline/${record.id}`}
              onClick={(e) => e.stopPropagation()}
              className="truncate font-semibold text-gray-900 hover:text-brand-primary hover:underline"
            >
              {address}
            </Link>
            <span className={`hidden shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold sm:inline ${SOURCE_COLOR[record.source] ?? 'bg-gray-50 text-gray-500'}`}>
              {record.source}
            </span>
          </div>
          {record.contact_name && (
            <p className="truncate text-xs text-gray-400">{record.contact_name}
              {record.contact_phone && ` · ${record.contact_phone}`}
            </p>
          )}
          {record.services.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1">
              {record.services.map((s) => (
                <span key={s} className="rounded-full bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-600">{s}</span>
              ))}
            </div>
          )}
        </div>

        {/* Assigned — hidden on mobile */}
        <p className="hidden truncate text-sm text-gray-500 md:block">
          {record.assigned_name ?? '—'}
        </p>

        {/* Date — hidden on mobile */}
        <p className="hidden text-sm text-gray-400 md:block">{date}</p>

        {/* Stage select */}
        <div onClick={(e) => e.stopPropagation()}>
          <select
            defaultValue={record.stage}
            onChange={handleStageChange}
            disabled={isPending}
            className={`rounded-lg border-0 py-1 pl-2 pr-6 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-brand-primary disabled:opacity-60 ${cfg.color}`}
          >
            {STAGE_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        <button className="text-gray-400 hover:text-gray-600">
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      {/* Expanded detail */}
      {expanded && (
        <div className="border-t border-gray-50 bg-gray-50 px-5 py-5 space-y-5">

          {/* Contact + property info grid */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {record.contact_name && (
              <div>
                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400">Contact</p>
                <p className="text-sm font-medium text-gray-800">{record.contact_name}</p>
                {record.contact_phone && (
                  <a href={`tel:${record.contact_phone}`} className="flex items-center gap-1 text-xs text-orange-600 hover:underline mt-0.5">
                    <Phone className="h-3 w-3" />{record.contact_phone}
                  </a>
                )}
                {record.contact_email && (
                  <a href={`mailto:${record.contact_email}`} className="flex items-center gap-1 text-xs text-gray-500 hover:underline mt-0.5">
                    <Mail className="h-3 w-3" />{record.contact_email}
                  </a>
                )}
              </div>
            )}
            <div>
              <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400">Property</p>
              <div className="flex items-start gap-1">
                <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-gray-400" />
                <p className="text-xs text-gray-600">{address}</p>
              </div>
              {record.property_type && (
                <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-500">
                  <Building2 className="h-2.5 w-2.5" />{record.property_type}
                </span>
              )}
            </div>
            {record.visible_issues.length > 0 && (
              <div>
                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400">Visible Issues</p>
                <div className="flex flex-wrap gap-1">
                  {record.visible_issues.map((issue) => (
                    <span key={issue} className="flex items-center gap-0.5 rounded-full bg-red-50 px-1.5 py-0.5 text-[10px] text-red-600">
                      <Tag className="h-2 w-2" />{issue}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {record.timeline_preference && (
              <div>
                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400">Timeline</p>
                <p className="text-xs text-gray-600">{record.timeline_preference}</p>
              </div>
            )}
          </div>

          {/* Assign + stage row */}
          <div className="flex flex-wrap items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">Assigned to</p>
              <select
                defaultValue={record.assigned_to ?? ''}
                onChange={handleAssign}
                disabled={isPending}
                className="rounded-lg border border-gray-200 bg-white py-1.5 pl-2 pr-6 text-xs text-gray-700 focus:border-brand-primary focus:outline-none"
              >
                <option value="">Unassigned</option>
                {staffList.map((s) => (
                  <option key={s.id} value={s.id}>{s.full_name}</option>
                ))}
              </select>
            </div>
            {record.next_follow_up && (
              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">Next Follow-up</p>
                <p className="text-xs text-gray-600">
                  {new Date(record.next_follow_up).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            )}
          </div>

          {/* Notes */}
          <div>
            <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              <StickyNote className="h-3.5 w-3.5" /> Staff Notes
            </p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Add notes…"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary resize-none"
            />
            <div className="mt-2 flex items-center gap-3">
              <button
                onClick={handleSaveNotes}
                disabled={isPending}
                className="flex items-center gap-1.5 rounded-lg bg-brand-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-primary-dark disabled:opacity-60 transition-colors"
              >
                {isPending && <Loader2 className="h-3 w-3 animate-spin" />}
                Save Notes
              </button>
              {notesSaved && <span className="text-xs font-medium text-green-600">Saved</span>}
            </div>
          </div>

          {/* Skip trace → go to property page */}
          {record.property_id && (
            <div className="border-t border-gray-200 pt-4">
              <Link
                href={`/admin/properties/${record.property_id}`}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 py-2.5 text-xs font-semibold text-orange-600 transition-colors hover:bg-orange-100"
              >
                <Fingerprint className="h-3.5 w-3.5" />
                Skip Trace · View Property
              </Link>
            </div>
          )}

          {/* Delete */}
          <div className="border-t border-gray-200 pt-4">
            {!confirmDelete ? (
              <button
                onClick={() => setConfirmDelete(true)}
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 className="h-3.5 w-3.5" /> Delete record
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <p className="text-xs text-gray-500">Delete permanently?</p>
                <button
                  onClick={() => startTransition(() => deletePipelineRecord(record.id))}
                  disabled={isPending}
                  className="flex items-center gap-1 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-60"
                >
                  {isPending ? <Loader2 className="h-3 w-3 animate-spin" /> : <Trash2 className="h-3 w-3" />}
                  Yes, delete
                </button>
                <button onClick={() => setConfirmDelete(false)} className="rounded-lg px-3 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-100">Cancel</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function PipelineClient({
  records, staffList, initialStage = 'all',
}: {
  records:      PipelineRow[]
  staffList:    { id: string; full_name: string }[]
  initialStage?: PipelineStage | 'all'
}) {
  const [activeStage, setActiveStage] = useState<PipelineStage | 'all'>(initialStage)

  const filtered = activeStage === 'all'
    ? records
    : records.filter((r) => r.stage === activeStage)

  const countFor = (stage: PipelineStage | 'all') =>
    stage === 'all' ? records.length : records.filter((r) => r.stage === stage).length

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-6 py-5">
        <div className="flex items-center gap-3">
          <GitPullRequestArrow className="h-5 w-5 text-brand-primary" />
          <h1 className="text-xl font-bold text-gray-900">Pipeline</h1>
          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-500">
            {records.length}
          </span>
        </div>

        {/* Stage tabs */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {STAGES.map((s) => {
            const count = countFor(s.value)
            const active = activeStage === s.value
            return (
              <button
                key={s.value}
                onClick={() => setActiveStage(s.value)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  active ? s.color + ' ring-2 ring-offset-1 ring-current' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {s.label}
                <span className={`rounded-full px-1.5 py-0.5 text-[10px] tabular-nums ${active ? 'bg-white/60' : 'bg-gray-200 text-gray-500'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Table header */}
      <div className="hidden border-b border-gray-100 bg-gray-50 px-5 py-2 md:grid md:grid-cols-[2fr_1fr_1fr_auto_auto]">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Property / Contact</p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Assigned</p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Updated</p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Stage</p>
        <span />
      </div>

      {/* Records */}
      <div className="flex-1 overflow-auto bg-white">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-20 text-center">
            <GitPullRequestArrow className="h-8 w-8 text-gray-200" />
            <p className="text-sm text-gray-400">No pipeline records for this stage.</p>
          </div>
        ) : (
          <div>
            {filtered.map((record) => (
              <PipelineRow key={record.id} record={record} staffList={staffList} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
