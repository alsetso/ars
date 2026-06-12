'use client'

import { useState, useEffect, useTransition } from 'react'
import {
  Loader2, AlertCircle, Phone, Mail, MapPin, Clock,
  Users, UserCheck, ChevronDown, ChevronUp, RefreshCw,
} from 'lucide-react'
import type { TracedPerson, NormalizedAddress, NormalizedPhone, NormalizedRelative } from '@/lib/skip-trace/types'

// ── Section wrapper ───────────────────────────────────────────────────────────

function Section({
  icon: Icon, title, count, children, defaultOpen = true,
}: {
  icon: React.ElementType; title: string; count?: number
  children: React.ReactNode; defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-gray-100">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-2 px-0 py-2.5 text-left"
      >
        <Icon className="h-3.5 w-3.5 shrink-0 text-gray-400" />
        <span className="flex-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">{title}</span>
        {count !== undefined && (
          <span className="rounded-full bg-gray-100 px-1.5 py-0.5 text-[10px] tabular-nums text-gray-400">
            {count}
          </span>
        )}
        {open
          ? <ChevronUp className="h-3 w-3 text-gray-300" />
          : <ChevronDown className="h-3 w-3 text-gray-300" />}
      </button>
      {open && <div className="pb-3">{children}</div>}
    </div>
  )
}

// ── Normalized renderers ──────────────────────────────────────────────────────

function AddressChip({ addr }: { addr: NormalizedAddress }) {
  return (
    <div className="rounded-lg bg-emerald-50 px-3 py-2.5">
      <p className="text-xs font-semibold text-gray-800">
        {addr.streetAddress}, {addr.locality}, {addr.region} {addr.postalCode}
      </p>
      <p className="mt-0.5 text-[10px] text-gray-500">
        {addr.county}{addr.dateRange ? ` · ${addr.dateRange}` : ''}{addr.timespan ? ` · ${addr.timespan}` : ''}
      </p>
    </div>
  )
}

function PhoneRow({ ph }: { ph: NormalizedPhone }) {
  return (
    <div className={`flex items-start justify-between gap-2 rounded-lg px-2.5 py-2 ${
      ph.phoneInfo ? 'bg-orange-50 ring-1 ring-orange-100' : 'bg-gray-50'
    }`}>
      <div className="min-w-0">
        <a
          href={`tel:${ph.phoneNumber}`}
          className="block text-[11px] font-semibold text-gray-900 hover:text-orange-600"
        >
          {ph.phoneNumber}
        </a>
        <div className="mt-0.5 flex flex-wrap gap-x-2">
          <span className={`text-[10px] ${ph.phoneType === 'Wireless' ? 'text-blue-500' : 'text-gray-400'}`}>
            {ph.phoneType}
          </span>
          <span className="text-[10px] text-gray-400">{ph.provider}</span>
        </div>
      </div>
      <div className="shrink-0 text-right">
        {ph.phoneInfo && (
          <span className="block text-[10px] font-semibold text-orange-600">{ph.phoneInfo}</span>
        )}
        <span className="block text-[10px] text-gray-400">{ph.lastReported}</span>
      </div>
    </div>
  )
}

function RelativeCard({ rel }: { rel: NormalizedRelative }) {
  return (
    <a
      href={rel.personLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 rounded-lg bg-gray-50 px-2 py-1.5 transition-colors hover:bg-orange-50"
    >
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-200 text-[9px] font-bold text-gray-600">
        {rel.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
      </div>
      <div className="min-w-0">
        <p className="truncate text-[10px] font-semibold text-gray-800">{rel.name}</p>
        <p className="text-[9px] text-gray-400">Age {rel.age}</p>
      </div>
    </a>
  )
}

// ── Detail view ───────────────────────────────────────────────────────────────

function DetailView({
  person, onRefresh, refreshing,
}: {
  person:     TracedPerson
  onRefresh:  () => void
  refreshing: boolean
}) {
  const raw      = person.skip_trace_raw
  const phones   = raw?.all_phones          ?? []
  const emails   = person.extra_emails      ?? []
  const prevAddr = raw?.previous_addresses  ?? []
  const rels     = raw?.relatives           ?? []
  const assocs   = raw?.associates          ?? []
  const primary  = phones.find((p) => p.phoneInfo) ?? phones[0] ?? null

  return (
    <div className="space-y-0.5">
      {/* Identity summary */}
      <div className="flex items-start gap-3 pb-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
          {(person.name ?? '?').split(' ').map((n) => n[0]).slice(0, 2).join('')}
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold text-gray-900">{person.name}</p>
          <div className="mt-0.5 flex flex-wrap gap-x-3 gap-y-0.5">
            {raw?.age  && <span className="text-[11px] text-gray-500">Age {raw.age}</span>}
            {raw?.born && <span className="text-[11px] text-gray-400">b. {raw.born}</span>}
            {raw?.lives_in && (
              <span className="flex items-center gap-1 text-[11px] text-gray-500">
                <MapPin className="h-2.5 w-2.5 text-emerald-500" />
                {raw.lives_in}
              </span>
            )}
          </div>
          {primary && (
            <a
              href={`tel:${primary.phoneNumber}`}
              className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-orange-600 hover:underline"
            >
              <Phone className="h-3 w-3" />
              {primary.phoneNumber}
              {primary.phoneInfo && (
                <span className="font-normal text-gray-400">· {primary.phoneInfo}</span>
              )}
            </a>
          )}
        </div>
        <button
          onClick={onRefresh}
          disabled={refreshing}
          title="Re-fetch detail"
          className="ml-auto shrink-0 rounded-lg p-1.5 text-gray-300 transition-colors hover:bg-gray-100 hover:text-gray-500 disabled:opacity-50"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {raw?.current_address && (
        <Section icon={MapPin} title="Current Address">
          <AddressChip addr={raw.current_address} />
        </Section>
      )}

      {phones.length > 0 && (
        <Section icon={Phone} title="Phone Numbers" count={phones.length}>
          <div className="space-y-1.5">
            {phones.map((ph, i) => <PhoneRow key={i} ph={ph} />)}
          </div>
        </Section>
      )}

      {emails.length > 0 && (
        <Section icon={Mail} title="Email Addresses" count={emails.length}>
          <div className="space-y-1">
            {emails.map((email, i) => (
              <a
                key={i}
                href={`mailto:${email}`}
                className="flex items-center gap-2 rounded-lg bg-gray-50 px-2.5 py-2 text-[11px] font-medium text-gray-700 hover:text-orange-600"
              >
                <Mail className="h-3 w-3 shrink-0 text-gray-400" />
                {email}
              </a>
            ))}
          </div>
        </Section>
      )}

      {prevAddr.length > 0 && (
        <Section icon={Clock} title="Previous Addresses" count={prevAddr.length} defaultOpen={false}>
          <div className="space-y-1.5">
            {prevAddr.map((addr, i) => <AddressChip key={i} addr={addr} />)}
          </div>
        </Section>
      )}

      {rels.length > 0 && (
        <Section icon={Users} title="Relatives" count={rels.length} defaultOpen={false}>
          <div className="grid grid-cols-2 gap-1.5">
            {rels.map((rel, i) => <RelativeCard key={i} rel={rel} />)}
          </div>
        </Section>
      )}

      {assocs.length > 0 && (
        <Section icon={UserCheck} title="Associates" count={assocs.length} defaultOpen={false}>
          <div className="grid grid-cols-2 gap-1.5">
            {assocs.map((asc, i) => <RelativeCard key={i} rel={asc} />)}
          </div>
        </Section>
      )}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export function PersonDetail({ personId, name }: { personId: string; name: string }) {
  const [person,    setPerson]    = useState<TracedPerson | null>(null)
  const [loading,   setLoading]   = useState(true)
  const [error,     setError]     = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  // On mount: load only from DB — no API call
  useEffect(() => {
    import('@/app/admin/skip-trace/actions').then(({ fetchPersonFromDb }) => {
      fetchPersonFromDb(personId)
        .then((result) => setPerson(result as TracedPerson | null))
        .catch(() => setError('Failed to load person'))
        .finally(() => setLoading(false))
    })
  }, [personId]) // eslint-disable-line react-hooks/exhaustive-deps

  const fetchDetail = (forceRefresh = false) => {
    setError(null)
    startTransition(async () => {
      try {
        const { runPersonDetail } = await import('@/app/admin/skip-trace/actions')
        const result = await runPersonDetail(personId, forceRefresh)
        setPerson(result as TracedPerson)
      } catch (e) {
        setError(String(e))
      }
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2 py-6 text-xs text-gray-400">
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
        Loading {name}…
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
        {error}
      </div>
    )
  }

  if (!person) return null

  // Has provider ID but detail not yet fetched — show CTA
  if (person.skip_trace_provider_id && !person.skip_trace_raw?.detail_fetched_at) {
    return (
      <div className="space-y-3">
        <div className="rounded-xl border border-orange-100 bg-orange-50 px-4 py-3">
          <p className="text-xs font-semibold text-orange-700">Phone numbers &amp; full detail not yet fetched</p>
          <p className="mt-0.5 text-[11px] text-orange-600">
            Click below to run the person detail trace and get all phone numbers, addresses, and relatives.
          </p>
        </div>
        <button
          onClick={() => fetchDetail(false)}
          disabled={isPending}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-2.5 text-xs font-semibold text-white shadow-sm hover:opacity-90 disabled:opacity-50"
        >
          {isPending
            ? <Loader2 className="h-3.5 w-3.5 animate-spin" />
            : <Phone className="h-3.5 w-3.5" />}
          {isPending ? 'Fetching…' : 'Get Phones & Full Detail'}
        </button>
      </div>
    )
  }

  // Person was not created by skip trace — no API data to show
  if (!person.skip_trace_provider_id) {
    return (
      <p className="text-xs text-gray-400">This person was not created via skip trace — no provider data available.</p>
    )
  }

  return (
    <DetailView
      person={person}
      refreshing={isPending}
      onRefresh={() => fetchDetail(true)}
    />
  )
}
