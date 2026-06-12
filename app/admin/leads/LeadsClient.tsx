'use client'

import { useState, useTransition } from 'react'
import { updateLeadStatus, updateLeadNotes, createLead, updateLeadExtras, deleteLead, type CreateLeadInput } from './actions'
import { LeadMedia } from './LeadMedia'
import { AddressAutocomplete } from '@/components/forms/AddressAutocomplete'
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  StickyNote,
  Loader2,
  Plus,
  X,
  AlertCircle,
  Trash2,
  Fingerprint,
} from 'lucide-react'

type LeadStatus = 'new' | 'contacted' | 'in_progress' | 'closed' | 'lost'

interface Lead {
  id: string
  created_at: string
  name: string
  email: string
  phone: string
  service_type: string | null
  message: string | null
  address: string | null
  city: string | null
  state: string | null
  zip: string | null
  timeline: string | null
  status: LeadStatus
  notes: string | null
  source: string
  created_by_staff_id: string | null
  extra_phones: string[] | null
  extra_emails: string[] | null
  extra_addresses: string[] | null
}

const STATUS_CONFIG: Record<LeadStatus, { label: string; color: string }> = {
  new:         { label: 'New',         color: 'bg-blue-100 text-blue-700' },
  contacted:   { label: 'Contacted',   color: 'bg-yellow-100 text-yellow-700' },
  in_progress: { label: 'In Progress', color: 'bg-purple-100 text-purple-700' },
  closed:      { label: 'Closed',      color: 'bg-green-100 text-green-700' },
  lost:        { label: 'Lost',        color: 'bg-gray-100 text-gray-500' },
}

const STATUS_OPTIONS: LeadStatus[] = ['new', 'contacted', 'in_progress', 'closed', 'lost']

function StatusBadge({ status }: { status: LeadStatus }) {
  const cfg = STATUS_CONFIG[status]
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${cfg.color}`}>
      {cfg.label}
    </span>
  )
}

function LeadRow({ lead }: { lead: Lead }) {
  const [expanded,      setExpanded]      = useState(false)
  const [notes,         setNotes]         = useState(lead.notes ?? '')
  const [isPending,     startTransition]  = useTransition()
  const [notesSaved,    setNotesSaved]    = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [showSkipTrace, setShowSkipTrace] = useState(false)

  // Build address params for skip trace
  const skipTraceStreet = lead.address ?? null
  const skipTraceCsz    = [lead.city, lead.state, lead.zip].filter(Boolean).join(', ') || null
  const canSkipTrace    = !!(skipTraceStreet && skipTraceCsz)

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value as LeadStatus
    startTransition(() => updateLeadStatus(lead.id, newStatus))
  }

  function handleSaveNotes() {
    startTransition(async () => {
      await updateLeadNotes(lead.id, notes)
      setNotesSaved(true)
      setTimeout(() => setNotesSaved(false), 2000)
    })
  }

  const date = new Date(lead.created_at).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  })

  return (
    <div className="border-b border-gray-100 last:border-0">
      {/* Row summary */}
      <div
        className="grid cursor-pointer grid-cols-[1fr_auto_auto_auto] items-center gap-4 px-5 py-4 hover:bg-gray-50 md:grid-cols-[2fr_1fr_1fr_auto_auto]"
        onClick={() => setExpanded((p) => !p)}
      >
        {/* Name + contact */}
        <div className="min-w-0">
          <p className="truncate font-semibold text-gray-900">{lead.name}</p>
          <p className="truncate text-xs text-gray-400">{lead.email}</p>
        </div>

        {/* Service — hidden on mobile */}
        <p className="hidden truncate text-sm text-gray-600 md:block">
          {lead.service_type ?? '—'}
        </p>

        {/* Date — hidden on mobile */}
        <p className="hidden text-sm text-gray-400 md:block">{date}</p>

        {/* Status select */}
        <div onClick={(e) => e.stopPropagation()}>
          <select
            defaultValue={lead.status}
            onChange={handleStatusChange}
            disabled={isPending}
            className="rounded-lg border border-gray-200 bg-white py-1 pl-2 pr-6 text-xs font-medium text-gray-700 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>
            ))}
          </select>
        </div>

        {/* Expand toggle */}
        <button className="text-gray-400 hover:text-gray-600">
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      {/* Expanded detail */}
      {expanded && (
        <div className="border-t border-gray-50 bg-gray-50 px-5 py-4">
          <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <PrimaryWithExtras
              icon={Phone}
              label="Phone"
              primaryValue={lead.phone}
              primaryHref={`tel:${lead.phone}`}
              extras={lead.extra_phones ?? []}
              leadId={lead.id}
              field="extra_phones"
              placeholder="763-555-0100"
              linkPrefix="tel:"
            />
            <PrimaryWithExtras
              icon={Mail}
              label="Email"
              primaryValue={lead.email}
              primaryHref={`mailto:${lead.email}`}
              extras={lead.extra_emails ?? []}
              leadId={lead.id}
              field="extra_emails"
              placeholder="jane@example.com"
              linkPrefix="mailto:"
            />
            <PrimaryWithExtras
              icon={MapPin}
              label="Location"
              primaryValue={[lead.address, lead.city, lead.state].filter(Boolean).join(', ') || '—'}
              extras={lead.extra_addresses ?? []}
              leadId={lead.id}
              field="extra_addresses"
              placeholder="456 Oak Ave, Minneapolis"
            />
            <DetailItem label="Timeline" value={lead.timeline ?? '—'} />
          </div>

          {/* Source badge */}
          <div className="mb-4">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              lead.source === 'staff'
                ? 'bg-amber-100 text-amber-700'
                : 'bg-gray-100 text-gray-500'
            }`}>
              {lead.source === 'staff' ? 'Added by staff' : 'Website'}
            </span>
          </div>

          {lead.message && (
            <div className="mb-4 rounded-lg border border-gray-200 bg-white p-3">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">Message</p>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{lead.message}</p>
            </div>
          )}

          {/* Notes */}
          <div>
            <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">
              <StickyNote className="h-3.5 w-3.5" /> Staff Notes
            </p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Add notes about this lead…"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary resize-none"
            />
            <div className="mt-2 flex items-center gap-3">
              <button
                onClick={handleSaveNotes}
                disabled={isPending}
                className="flex items-center gap-1.5 rounded-lg bg-brand-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-primary-dark disabled:opacity-60 transition-colors"
              >
                {isPending ? <Loader2 className="h-3 w-3 animate-spin" /> : null}
                Save Notes
              </button>
              {notesSaved && <span className="text-xs text-green-600 font-medium">Saved</span>}
            </div>
          </div>

          {/* Media */}
          <LeadMedia leadId={lead.id} />

          {/* Skip Trace */}
          {canSkipTrace && (
            <div className="mt-5 border-t border-gray-100 pt-4">
              {showSkipTrace ? (
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Fingerprint className="h-3.5 w-3.5 text-orange-500" />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        Skip Trace
                      </p>
                    </div>
                    <button
                      onClick={() => setShowSkipTrace(false)}
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
                  onClick={() => setShowSkipTrace(true)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 py-2.5 text-xs font-semibold text-orange-600 transition-colors hover:bg-orange-100"
                >
                  <Fingerprint className="h-3.5 w-3.5" />
                  Skip Trace this Lead
                </button>
              )}
            </div>
          )}

          {/* Delete */}
          <div className="mt-5 border-t border-gray-100 pt-4">
            {!confirmDelete ? (
              <button
                onClick={() => setConfirmDelete(true)}
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Delete lead
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <p className="text-xs text-gray-500">Delete this lead permanently?</p>
                <button
                  onClick={() => startTransition(() => deleteLead(lead.id))}
                  disabled={isPending}
                  className="flex items-center gap-1 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-60"
                >
                  {isPending ? <Loader2 className="h-3 w-3 animate-spin" /> : <Trash2 className="h-3 w-3" />}
                  Yes, delete
                </button>
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function DetailItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon?: React.ElementType
  label: string
  value: string
  href?: string
}) {
  return (
    <div>
      <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">{label}</p>
      {href ? (
        <a href={href} className="flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline">
          {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
          {value}
        </a>
      ) : (
        <p className="text-sm text-gray-700">{value}</p>
      )}
    </div>
  )
}

function FilterTab({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
        active
          ? 'bg-brand-primary text-white'
          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  )
}

function PrimaryWithExtras({
  icon: Icon,
  label,
  primaryValue,
  primaryHref,
  extras,
  leadId,
  field,
  placeholder,
  linkPrefix,
}: {
  icon?: React.ElementType
  label: string
  primaryValue: string
  primaryHref?: string
  extras: string[]
  leadId: string
  field: 'extra_phones' | 'extra_emails' | 'extra_addresses'
  placeholder: string
  linkPrefix?: string
}) {
  const [list, setList] = useState<string[]>(extras)
  const [adding, setAdding] = useState(false)
  const [input, setInput] = useState('')
  const [, startTransition] = useTransition()

  function save(next: string[]) {
    startTransition(() => updateLeadExtras(leadId, field, next))
  }

  function add() {
    const val = input.trim()
    setAdding(false)
    setInput('')
    if (!val || list.includes(val)) return
    const next = [...list, val]
    setList(next)
    save(next)
  }

  function remove(val: string) {
    const next = list.filter((v) => v !== val)
    setList(next)
    save(next)
  }

  return (
    <div>
      <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">{label}</p>

      {/* Primary value */}
      {primaryHref ? (
        <a href={primaryHref} className="flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline">
          {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
          {primaryValue}
        </a>
      ) : (
        <p className="text-sm text-gray-700">{primaryValue}</p>
      )}

      {/* Extra values */}
      {list.map((val) => (
        <div key={val} className="group mt-0.5 flex items-center gap-1">
          {linkPrefix ? (
            <a href={`${linkPrefix}${val}`} className="flex-1 truncate text-sm text-brand-primary hover:underline">
              {val}
            </a>
          ) : (
            <span className="flex-1 truncate text-sm text-gray-700">{val}</span>
          )}
          <button
            onClick={() => remove(val)}
            className="shrink-0 rounded p-0.5 text-gray-300 opacity-0 transition-all group-hover:opacity-100 hover:text-red-500"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      ))}

      {/* Inline add toggle */}
      {adding ? (
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') { e.preventDefault(); add() }
            if (e.key === 'Escape') { setAdding(false); setInput('') }
          }}
          onBlur={add}
          placeholder={placeholder}
          className="mt-1 w-full rounded border border-brand-primary/40 bg-white px-2 py-0.5 text-xs text-gray-800 placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
        />
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="mt-1 flex items-center gap-0.5 text-xs text-gray-400 transition-colors hover:text-brand-primary"
        >
          <Plus className="h-3 w-3" />
          <span>add</span>
        </button>
      )}
    </div>
  )
}

const SERVICE_OPTIONS = [
  'Roofing',
  'Siding',
  'Windows',
  'Storm Restoration',
  'Gutters',
  'Soffit & Fascia',
  'Exterior Doors',
  'Other',
]

const TIMELINE_OPTIONS = [
  { value: 'urgent',   label: 'Urgent (Within 1 week)' },
  { value: 'soon',     label: 'Soon (Within 1 month)' },
  { value: 'planning', label: 'Planning (1–3 months)' },
  { value: 'exploring',label: 'Just exploring options' },
]

const EMPTY_FORM: CreateLeadInput = {
  name: '', email: '', phone: '', service_type: '',
  address: '', city: '', state: '', zip: '',
  timeline: '', message: '', lat: null, lng: null,
}

function AddLeadModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<CreateLeadInput>(EMPTY_FORM)
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  function set(field: keyof CreateLeadInput) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    startTransition(async () => {
      try {
        await createLead(form)
        onClose()
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to create lead.')
      }
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-lg rounded-xl border border-gray-200 bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div>
            <h2 className="text-base font-bold text-gray-900">Add Lead</h2>
            <p className="text-xs text-gray-400 mt-0.5">Manually add a new lead to the CRM</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4 max-h-[75vh] overflow-y-auto">
          {error && (
            <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Name / Phone / Email */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-gray-600">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={set('name')}
                placeholder="Jane Smith"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-gray-600">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                placeholder="763-555-0100"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-600">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={set('email')}
              placeholder="jane@example.com"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
            />
          </div>

          {/* Service / Timeline */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-gray-600">Service</label>
              <select
                value={form.service_type}
                onChange={set('service_type')}
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
              >
                <option value="">Select service</option>
                {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-gray-600">Timeline</label>
              <select
                value={form.timeline}
                onChange={set('timeline')}
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
              >
                <option value="">Select timeline</option>
                {TIMELINE_OPTIONS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
          </div>

          {/* Address — Mapbox autocomplete */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-600">Property Address</label>
            <AddressAutocomplete
              value={form.address}
              placeholder="Start typing an address…"
              onChange={(address, city, state, zip, lat, lng) =>
                setForm((prev) => ({ ...prev, address, city, state, zip, lat: lat ?? null, lng: lng ?? null }))
              }
              className="[&_input]:!border-gray-200 [&_input]:!py-2 [&_input]:!text-sm [&_input]:focus:!border-brand-primary [&_input]:focus:!ring-1 [&_input]:focus:!ring-brand-primary [&_input]:focus:![--tw-ring-shadow:none]"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-600">Notes / Message</label>
            <textarea
              value={form.message}
              onChange={set('message')}
              rows={3}
              placeholder="Lead details, how they were referred, damage description…"
              className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="flex items-center gap-1.5 rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white hover:bg-brand-primary-dark disabled:opacity-60 transition-colors"
            >
              {isPending ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Plus className="h-3.5 w-3.5" />}
              {isPending ? 'Adding…' : 'Add Lead'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export function LeadsClient({ leads }: { leads: Lead[] }) {
  const [statusFilter, setStatusFilter] = useState<LeadStatus | 'all'>('all')
  const [search, setSearch] = useState('')
  const [showAddLead, setShowAddLead] = useState(false)

  const filtered = leads.filter((l) => {
    const matchStatus = statusFilter === 'all' || l.status === statusFilter
    const q = search.toLowerCase()
    const matchSearch =
      !q ||
      l.name.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      (l.service_type ?? '').toLowerCase().includes(q) ||
      (l.city ?? '').toLowerCase().includes(q)
    return matchStatus && matchSearch
  })

  const counts = STATUS_OPTIONS.reduce((acc, s) => {
    acc[s] = leads.filter((l) => l.status === s).length
    return acc
  }, {} as Record<LeadStatus, number>)

  return (
    <>
      {showAddLead && <AddLeadModal onClose={() => setShowAddLead(false)} />}

      {/* Top bar */}
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-lg font-bold text-gray-900">Leads</h1>
            <p className="text-sm text-gray-400">{leads.length} total · {counts.new} new</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="search"
              placeholder="Search by name, email, service…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary sm:w-64"
            />
            <button
              onClick={() => setShowAddLead(true)}
              className="flex shrink-0 items-center gap-1.5 rounded-lg bg-brand-primary px-3 py-2 text-sm font-semibold text-white hover:bg-brand-primary-dark transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Add Lead</span>
            </button>
          </div>
        </div>

        {/* Status filter tabs */}
        <div className="mt-3 flex flex-wrap gap-2">
          <FilterTab label={`All (${leads.length})`} active={statusFilter === 'all'} onClick={() => setStatusFilter('all')} />
          {STATUS_OPTIONS.map((s) => (
            <FilterTab
              key={s}
              label={`${STATUS_CONFIG[s].label} (${counts[s]})`}
              active={statusFilter === s}
              onClick={() => setStatusFilter(s)}
            />
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="mx-4 my-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
        {/* Column headers */}
        <div className="hidden grid-cols-[2fr_1fr_1fr_auto_auto] gap-4 border-b border-gray-100 bg-gray-50 px-5 py-2.5 md:grid">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Contact</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Service</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Date</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Status</p>
          <span />
        </div>

        {filtered.length === 0 ? (
          <div className="py-16 text-center text-sm text-gray-400">
            {search || statusFilter !== 'all' ? 'No leads match your filters.' : "No leads yet — they'll appear here when the contact form is submitted."}
          </div>
        ) : (
          filtered.map((lead) => <LeadRow key={lead.id} lead={lead} />)
        )}
      </div>
    </>
  )
}
