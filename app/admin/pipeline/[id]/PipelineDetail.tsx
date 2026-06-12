'use client'

import { useState, useTransition } from 'react'
import { Phone, Mail, MapPin, Tag, Loader2, CheckCircle2, Trash2, User, Building2, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { updatePipelineStage, updatePipelineNotes, assignPipeline, deletePipelineRecord, type PipelineStage } from '../actions'

// ── Shared style tokens ────────────────────────────────────────────────────────

const LABEL = 'text-[10px] font-bold uppercase tracking-widest text-gray-400'
const VAL   = 'text-sm text-gray-800'
const SEP   = 'border-t border-gray-100 pt-5 mt-5'

// ── Stage config ──────────────────────────────────────────────────────────────

const STAGE_COLOR: Record<string, string> = {
  prospect:   'bg-sky-100 text-sky-700',
  lead:       'bg-blue-100 text-blue-700',
  estimate:   'bg-violet-100 text-violet-700',
  contracted: 'bg-amber-100 text-amber-700',
  active:     'bg-orange-100 text-orange-700',
  complete:   'bg-emerald-100 text-emerald-700',
  follow_up:  'bg-teal-100 text-teal-700',
  lost:       'bg-red-100 text-red-500',
  skipped:    'bg-gray-100 text-gray-400',
}

const STAGE_OPTIONS: PipelineStage[] = [
  'prospect','lead','estimate','contracted','active','complete','follow_up','lost','skipped',
]

// ── Event type label ──────────────────────────────────────────────────────────

const EVENT_LABEL: Record<string, string> = {
  stage_change:    'Stage changed',
  note:            'Note',
  call:            'Call',
  visit:           'Visit',
  estimate:        'Estimate',
  signed:          'Signed',
  payment:         'Payment',
  photo:           'Photo',
  skip_trace:      'Skip trace',
  initial_message: 'Website message',
  milestone:       'Milestone',
}

// ── Milestone type label ──────────────────────────────────────────────────────

const MILESTONE_LABEL: Record<string, string> = {
  '1yr_checkup':     '1-Year Check-up',
  '2yr_checkup':     '2-Year Check-up',
  '5yr_checkup':     '5-Year Check-up',
  'warranty_expiry': 'Warranty Expiry',
  'custom':          'Custom',
}
const MILESTONE_STATUS_COLOR: Record<string, string> = {
  scheduled: 'text-blue-600',
  contacted: 'text-amber-600',
  completed: 'text-emerald-600',
  skipped:   'text-gray-400',
}

// ── Main ──────────────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PipelineDetail({ record, staffList }: { record: any; staffList: { id: string; full_name: string }[] }) {
  const router = useRouter()
  const [notes,         setNotes]         = useState(record.notes ?? '')
  const [notesSaved,    setNotesSaved]    = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [isPending,     startTransition]  = useTransition()

  const property = record.properties
  const contact  = record.people
  const events   = record.pipeline_events ?? []
  const miles    = record.milestones ?? []

  const address = property?.full_address
    ?? [property?.street, property?.city, property?.state, property?.zip].filter(Boolean).join(', ')
    ?? '—'

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
    <div className="space-y-0">

      {/* ── Header ── */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900 leading-snug">{address}</h1>
          <p className="mt-0.5 text-xs text-gray-400">
            {property?.type ?? 'residential'}
            {' · '}
            {record.source}
            {' · '}
            {new Date(record.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        <select
          defaultValue={record.stage}
          onChange={handleStageChange}
          disabled={isPending}
          className={`shrink-0 rounded-full border-0 py-1 pl-2.5 pr-6 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-brand-primary disabled:opacity-60 ${STAGE_COLOR[record.stage] ?? 'bg-gray-100 text-gray-600'}`}
        >
          {STAGE_OPTIONS.map((s) => (
            <option key={s} value={s}>{s.replace('_', ' ')}</option>
          ))}
        </select>
      </div>

      {/* ── Contact + Property cards ── */}
      <div className={`${SEP} grid grid-cols-1 gap-3 sm:grid-cols-2`}>

        {/* Contact card */}
        {contact ? (
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100">
                  <User className="h-3.5 w-3.5 text-gray-500" />
                </span>
                <p className={LABEL}>Contact</p>
              </div>
              <Link
                href={`/admin/people/${contact.id}`}
                className="flex items-center gap-1 rounded-lg bg-white border border-gray-200 px-2.5 py-1 text-[11px] font-medium text-gray-600 hover:border-brand-primary hover:text-brand-primary transition-colors shadow-sm"
              >
                View <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
            <p className="text-sm font-semibold text-gray-900">{contact.name ?? '—'}</p>
            <div className="mt-2 space-y-1.5">
              {contact.phone && (
                <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-xs text-orange-600 hover:underline">
                  <Phone className="h-3 w-3 shrink-0" />{contact.phone}
                </a>
              )}
              {contact.email && (
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-xs text-gray-500 hover:underline">
                  <Mail className="h-3 w-3 shrink-0" />{contact.email}
                </a>
              )}
              {contact.extra_phones?.map((ph: string, i: number) => (
                <a key={i} href={`tel:${ph}`} className="flex items-center gap-2 text-xs text-orange-500 hover:underline">
                  <Phone className="h-3 w-3 shrink-0" />{ph}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 flex items-center justify-center">
            <p className="text-xs text-gray-400">No contact linked</p>
          </div>
        )}

        {/* Property card */}
        {property ? (
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100">
                  <Building2 className="h-3.5 w-3.5 text-gray-500" />
                </span>
                <p className={LABEL}>Property</p>
              </div>
              <Link
                href={`/admin/properties/${property.id}`}
                className="flex items-center gap-1 rounded-lg bg-white border border-gray-200 px-2.5 py-1 text-[11px] font-medium text-gray-600 hover:border-brand-primary hover:text-brand-primary transition-colors shadow-sm"
              >
                View <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
              <div>
                <p className="text-sm font-semibold text-gray-900 leading-snug">{address}</p>
                {property.type && (
                  <span className="mt-1 inline-block rounded-full bg-white border border-gray-200 px-2 py-0.5 text-[10px] font-medium text-gray-500 capitalize">
                    {property.type}
                  </span>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 flex items-center justify-center">
            <p className="text-xs text-gray-400">No property linked</p>
          </div>
        )}

      </div>

      {/* ── Services + issues ── */}
      {(record.services?.length > 0 || record.visible_issues?.length > 0) && (
        <div className={SEP}>
          {record.services?.length > 0 && (
            <div className="mb-3">
              <p className={`${LABEL} mb-1.5`}>Services</p>
              <div className="flex flex-wrap gap-1.5">
                {record.services.map((s: string) => (
                  <span key={s} className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">{s}</span>
                ))}
              </div>
            </div>
          )}
          {record.visible_issues?.length > 0 && (
            <div>
              <p className={`${LABEL} mb-1.5`}>Visible Issues</p>
              <div className="flex flex-wrap gap-1.5">
                {record.visible_issues.map((issue: string) => (
                  <span key={issue} className="flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-600">
                    <Tag className="h-2.5 w-2.5" />{issue}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Assignment + timeline pref ── */}
      <div className={SEP}>
        <p className={`${LABEL} mb-2`}>Assignment</p>
        <div className="flex flex-wrap gap-5">
          <div>
            <p className="mb-1 text-[10px] text-gray-400">Assigned to</p>
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
          {record.timeline_preference && (
            <div>
              <p className="mb-1 text-[10px] text-gray-400">Timeline preference</p>
              <p className={VAL}>{record.timeline_preference}</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Notes ── */}
      <div className={SEP}>
        <p className={`${LABEL} mb-2`}>Notes</p>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
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
            Save
          </button>
          {notesSaved && (
            <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
              <CheckCircle2 className="h-3 w-3" /> Saved
            </span>
          )}
        </div>
      </div>

      {/* ── Timeline ── */}
      {events.length > 0 && (
        <div className={SEP}>
          <p className={`${LABEL} mb-3`}>Timeline</p>
          <div className="relative border-l border-gray-200 pl-4 space-y-4">
            {events.map((ev: { id: string; created_at: string; type: string; payload: Record<string, unknown>; staff: { full_name: string } | null }) => (
              <div key={ev.id} className="relative">
                <div className="absolute -left-[17px] top-1 h-2 w-2 rounded-full bg-gray-300" />
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-gray-700">
                    {EVENT_LABEL[ev.type] ?? ev.type}
                  </span>
                  {ev.type === 'stage_change' && ev.payload && (
                    <span className="text-xs text-gray-400">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {String((ev.payload as any).from ?? '?')} → {String((ev.payload as any).to ?? '?')}
                    </span>
                  )}
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {(ev.type === 'note' || ev.type === 'initial_message') && !!(ev.payload as any)?.text && (
                    <span className="text-xs text-gray-500 italic">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      &ldquo;{String((ev.payload as any).text).slice(0, 120)}{String((ev.payload as any).text).length > 120 ? '…' : ''}&rdquo;
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-[10px] text-gray-400">
                  {new Date(ev.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  {ev.staff?.full_name && ` · ${ev.staff.full_name}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Milestones ── */}
      {miles.length > 0 && (
        <div className={SEP}>
          <p className={`${LABEL} mb-2`}>Milestones</p>
          <div className="space-y-1.5">
            {miles.map((m: { id: string; type: string; due_date: string; status: string }) => (
              <div key={m.id} className="flex items-center justify-between py-1">
                <span className={VAL}>{MILESTONE_LABEL[m.type] ?? m.type}</span>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-400">
                    {new Date(m.due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className={`text-xs font-semibold ${MILESTONE_STATUS_COLOR[m.status] ?? 'text-gray-500'}`}>
                    {m.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Skip trace ── */}
      {property && (
        <div className={SEP}>
          <p className={`${LABEL} mb-1`}>Skip Trace</p>
          <p className="text-xs text-gray-400">
            Run skip trace from the{' '}
            <Link href={`/admin/properties/${property.id}`} className="text-brand-primary hover:underline">
              property page
            </Link>
            .
          </p>
        </div>
      )}

      {/* ── Danger zone ── */}
      <div className={SEP}>
        <p className={`${LABEL} mb-2`}>Danger zone</p>
        {!confirmDelete ? (
          <button
            onClick={() => setConfirmDelete(true)}
            className="flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50 transition-colors"
          >
            <Trash2 className="h-3.5 w-3.5" /> Delete record
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <p className="text-xs text-gray-500">Delete permanently?</p>
            <button
              disabled={isPending}
              onClick={() =>
                startTransition(async () => {
                  await deletePipelineRecord(record.id)
                  router.push('/admin/pipeline')
                })
              }
              className="flex items-center gap-1 rounded-lg bg-red-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-600 disabled:opacity-60 transition-colors"
            >
              {isPending ? <Loader2 className="h-3 w-3 animate-spin" /> : <Trash2 className="h-3 w-3" />}
              Yes, delete
            </button>
            <button
              onClick={() => setConfirmDelete(false)}
              className="rounded-lg px-3 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        )}
        <p className="mt-1.5 text-[10px] text-gray-400">
          Use <span className="font-semibold">Lost</span> or <span className="font-semibold">Skipped</span> stages to close a record without deleting it.
        </p>
      </div>

    </div>
  )
}
