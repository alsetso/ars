'use client'

import { useState, useTransition } from 'react'
import {
  MapPin, ChevronDown, ChevronUp, Trash2, ArrowUpRight,
  Loader2, AlertCircle, CheckCircle2, Eye, Fingerprint,
} from 'lucide-react'
import {
  updateProspectStatus, updateProspectNotes, deleteProspect,
  promoteProspectToLead, type ProspectStatus,
} from './actions'
import { ROOFING_ISSUES, SIDING_ISSUES, GENERAL_ISSUES } from './issues'
import { parseSkipTraceAddress } from '@/lib/skip-trace/utils'

// ── Types ─────────────────────────────────────────────────────────────────────

interface Prospect {
  id: string
  created_at: string
  full_address: string | null
  address: string | null
  city: string | null
  state: string | null
  lat: number | null
  lng: number | null
  visible_issues: string[]
  service_type: string | null
  status: ProspectStatus
  notes: string | null
  name: string | null
  phone: string | null
  email: string | null
  source: string
  promoted_at: string | null
  lead_id: string | null
}

// ── Issue label lookup ────────────────────────────────────────────────────────

const ALL_ISSUES = [...ROOFING_ISSUES, ...SIDING_ISSUES, ...GENERAL_ISSUES]
function issueLabel(v: string) {
  return ALL_ISSUES.find((i) => i.value === v)?.label ?? v
}

// ── Status config ─────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<ProspectStatus, { label: string; color: string }> = {
  new:       { label: 'New',       color: 'bg-blue-100 text-blue-700' },
  contacted: { label: 'Contacted', color: 'bg-yellow-100 text-yellow-700' },
  qualified: { label: 'Qualified', color: 'bg-purple-100 text-purple-700' },
  promoted:  { label: 'Promoted',  color: 'bg-green-100 text-green-700' },
  dismissed: { label: 'Dismissed', color: 'bg-gray-100 text-gray-500' },
}

const STATUS_OPTIONS: ProspectStatus[] = ['new', 'contacted', 'qualified', 'dismissed']

// ── Promote modal ─────────────────────────────────────────────────────────────

function PromoteModal({
  prospect,
  onClose,
  onPromoted,
}: {
  prospect: Prospect
  onClose: () => void
  onPromoted: (leadId: string) => void
}) {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [name,  setName]  = useState(prospect.name  ?? '')
  const [phone, setPhone] = useState(prospect.phone ?? '')
  const [email, setEmail] = useState(prospect.email ?? '')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    startTransition(async () => {
      try {
        const { leadId } = await promoteProspectToLead(prospect.id, { name, phone, email })
        onPromoted(leadId)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to promote')
      }
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
        <h2 className="mb-1 text-base font-bold text-gray-900">Promote to Lead</h2>
        <p className="mb-4 text-xs text-gray-500">
          Fill in required contact info to convert this prospect into a lead.
        </p>
        {prospect.full_address && (
          <div className="mb-4 flex items-start gap-2 rounded-lg bg-orange-50 px-3 py-2">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-500" />
            <p className="text-xs text-orange-700">{prospect.full_address.replace(/, United States$/, '')}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-gray-400">Name *</label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
            />
          </div>
          <div>
            <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-gray-400">Phone *</label>
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
            />
          </div>
          <div>
            <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-gray-400">Email *</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
            />
          </div>
          {error && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              {error}
            </div>
          )}
          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-gray-200 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-primary py-2.5 text-sm font-semibold text-white transition-opacity disabled:opacity-60 hover:opacity-90"
            >
              {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowUpRight className="h-4 w-4" />}
              {isPending ? 'Promoting…' : 'Promote'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ── Prospect row ──────────────────────────────────────────────────────────────

function ProspectRow({ prospect }: { prospect: Prospect }) {
  const [expanded,      setExpanded]      = useState(false)
  const [notes,         setNotes]         = useState(prospect.notes ?? '')
  const [notesSaved,    setNotesSaved]    = useState(false)
  const [showPromote,   setShowPromote]   = useState(false)
  const [promoted,      setPromoted]      = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [skipTrace,     setSkipTrace]     = useState(false)
  const [isPending,     startTransition]  = useTransition()

  const skipTraceAddr = parseSkipTraceAddress(prospect.full_address)

  const cfg = STATUS_CONFIG[prospect.status]

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    startTransition(() => updateProspectStatus(prospect.id, e.target.value as ProspectStatus))
  }

  function handleSaveNotes() {
    startTransition(async () => {
      await updateProspectNotes(prospect.id, notes)
      setNotesSaved(true)
      setTimeout(() => setNotesSaved(false), 2000)
    })
  }

  if (promoted) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <p className="text-sm font-medium text-green-700">Promoted to lead</p>
        <a href="/admin/leads" className="ml-auto text-xs text-green-600 underline hover:no-underline">
          View leads →
        </a>
      </div>
    )
  }

  return (
    <>
      {showPromote && (
        <PromoteModal
          prospect={prospect}
          onClose={() => setShowPromote(false)}
          onPromoted={() => { setShowPromote(false); setPromoted(true) }}
        />
      )}

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        {/* Row header */}
        <div className="flex items-start gap-3 px-4 py-3">
          {/* Orange dot */}
          <div className="mt-1 flex h-2.5 w-2.5 shrink-0 items-center justify-center">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-semibold text-gray-900">
              {prospect.full_address
                ? prospect.full_address.replace(/, United States$/, '')
                : [prospect.address, prospect.city, prospect.state].filter(Boolean).join(', ') || 'Unknown address'
              }
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${cfg.color}`}>
                {cfg.label}
              </span>
              {prospect.service_type && (
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium capitalize text-gray-600">
                  {prospect.service_type}
                </span>
              )}
              <span className="text-[10px] text-gray-400">
                {new Date(prospect.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            {/* Issue tags */}
            {prospect.visible_issues?.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {prospect.visible_issues.slice(0, 4).map((v) => (
                  <span key={v} className="rounded bg-orange-50 px-1.5 py-0.5 text-[10px] text-orange-700">
                    {issueLabel(v)}
                  </span>
                ))}
                {prospect.visible_issues.length > 4 && (
                  <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-500">
                    +{prospect.visible_issues.length - 4} more
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-1.5">
            {prospect.status !== 'promoted' && prospect.status !== 'dismissed' && (
              <button
                onClick={() => setShowPromote(true)}
                className="flex items-center gap-1 rounded-lg bg-brand-primary px-2.5 py-1.5 text-[11px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                <ArrowUpRight className="h-3 w-3" />
                Promote
              </button>
            )}
            {prospect.lat && prospect.lng && (
              <a
                href={`/admin/map`}
                className="rounded-lg border border-gray-200 p-1.5 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-700"
                title="View on map"
              >
                <Eye className="h-3.5 w-3.5" />
              </a>
            )}
            <button
              onClick={() => setExpanded((v) => !v)}
              className="rounded-lg border border-gray-200 p-1.5 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-700"
            >
              {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>

        {/* Expanded detail */}
        {expanded && (
          <div className="border-t border-gray-100 px-4 py-4 space-y-4">
            {/* Status */}
            <div className="flex items-center gap-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 w-16 shrink-0">Status</label>
              <select
                defaultValue={prospect.status}
                onChange={handleStatusChange}
                disabled={isPending}
                className="rounded-lg border border-gray-200 px-2 py-1.5 text-xs focus:border-brand-primary focus:outline-none"
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>
                ))}
              </select>
            </div>

            {/* All issues */}
            {prospect.visible_issues?.length > 0 && (
              <div>
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">Observed Issues</p>
                <div className="flex flex-wrap gap-1.5">
                  {prospect.visible_issues.map((v) => (
                    <span key={v} className="rounded-full bg-orange-50 px-2.5 py-1 text-xs text-orange-700">
                      {issueLabel(v)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Contact */}
            {(prospect.name || prospect.phone || prospect.email) && (
              <div>
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">Contact</p>
                <div className="space-y-0.5">
                  {prospect.name  && <p className="text-xs font-medium text-gray-800">{prospect.name}</p>}
                  {prospect.phone && <a href={`tel:${prospect.phone}`} className="block text-xs text-brand-primary hover:underline">{prospect.phone}</a>}
                  {prospect.email && <a href={`mailto:${prospect.email}`} className="block text-xs text-brand-primary hover:underline">{prospect.email}</a>}
                </div>
              </div>
            )}

            {/* Notes */}
            <div>
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">Notes</p>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Add notes…"
                className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-700 placeholder-gray-300 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
              />
              <div className="mt-1.5 flex items-center justify-between">
                <button
                  onClick={handleSaveNotes}
                  disabled={isPending}
                  className="text-[11px] font-medium text-brand-primary transition-opacity disabled:opacity-50 hover:opacity-80"
                >
                  {notesSaved ? 'Saved ✓' : 'Save notes'}
                </button>

                {/* Delete */}
                {confirmDelete ? (
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-gray-500">Delete this prospect?</span>
                    <button
                      onClick={() => startTransition(() => deleteProspect(prospect.id))}
                      className="text-[11px] font-semibold text-red-600 hover:underline"
                    >
                      Yes, delete
                    </button>
                    <button
                      onClick={() => setConfirmDelete(false)}
                      className="text-[11px] text-gray-400 hover:text-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmDelete(true)}
                    className="flex items-center gap-1 text-[11px] text-gray-400 transition-colors hover:text-red-500"
                  >
                    <Trash2 className="h-3 w-3" /> Delete
                  </button>
                )}
              </div>
            </div>

            {/* Skip Trace */}
            {skipTraceAddr && (
              <div className="border-t border-gray-100 pt-4">
                {skipTrace ? (
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Fingerprint className="h-3.5 w-3.5 text-orange-500" />
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                          Skip Trace Results
                        </p>
                      </div>
                      <button
                        onClick={() => setSkipTrace(false)}
                        className="text-[11px] text-gray-400 hover:text-gray-600"
                      >
                        Hide
                      </button>
                    </div>
                    <p className="rounded-xl border border-gray-200 bg-gray-50 py-2.5 text-center text-xs text-gray-400">
                      Skip trace is available on the linked property page.
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={() => setSkipTrace(true)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 py-2.5 text-xs font-semibold text-orange-600 transition-colors hover:bg-orange-100"
                  >
                    <Fingerprint className="h-3.5 w-3.5" />
                    Skip Trace this Address
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

// ── Main client component ─────────────────────────────────────────────────────

export default function ProspectsClient({ prospects }: { prospects: Prospect[] }) {
  const [filter, setFilter] = useState<ProspectStatus | 'all'>('all')

  const filtered = filter === 'all'
    ? prospects
    : prospects.filter((p) => p.status === filter)

  const counts = {
    all:       prospects.length,
    new:       prospects.filter((p) => p.status === 'new').length,
    contacted: prospects.filter((p) => p.status === 'contacted').length,
    qualified: prospects.filter((p) => p.status === 'qualified').length,
    promoted:  prospects.filter((p) => p.status === 'promoted').length,
    dismissed: prospects.filter((p) => p.status === 'dismissed').length,
  }

  return (
    <div className="space-y-4">
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2">
        {(['all', 'new', 'contacted', 'qualified', 'promoted', 'dismissed'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              filter === s
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {s === 'all' ? 'All' : STATUS_CONFIG[s].label}
            <span className={`ml-1.5 tabular-nums ${filter === s ? 'text-gray-300' : 'text-gray-400'}`}>
              {counts[s]}
            </span>
          </button>
        ))}
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-200 py-16 text-center">
          <p className="text-sm text-gray-400">No prospects yet in this view.</p>
          <a href="/admin/map" className="mt-2 block text-xs text-brand-primary hover:underline">
            Add from the map →
          </a>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((p) => (
            <ProspectRow key={p.id} prospect={p} />
          ))}
        </div>
      )}
    </div>
  )
}
