'use client'

import { useState, useEffect, useTransition } from 'react'
import {
  Loader2, MapPin, Clock, Users, Phone,
  AlertCircle, SearchX, RefreshCw,
  Fingerprint, ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import { runAddressTrace, fetchTracesForProperty } from '@/app/admin/skip-trace/actions'
import type { TracedPerson } from '@/lib/skip-trace/types'
export { parseSkipTraceAddress } from '@/lib/skip-trace/utils'

// ── Candidate card ────────────────────────────────────────────────────────────
// Minimal: shows what came back from the address API, links to the person page
// where staff can run the detail trace and confirm the role.

function CandidateCard({ person, index }: { person: TracedPerson; index: number }) {
  const raw = person.skip_trace_raw
  const hasDetail = !!raw?.detail_fetched_at

  return (
    <Link
      href={`/admin/people/${person.id}`}
      className={`group flex items-center gap-3 rounded-xl border px-4 py-3 transition-shadow hover:shadow-md ${
        index === 0
          ? 'border-orange-200 bg-orange-50/40'
          : 'border-gray-100 bg-white hover:border-gray-200'
      }`}
    >
      {/* Avatar */}
      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
        index === 0 ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-600'
      }`}>
        {(person.name ?? '?').split(' ').map((n) => n[0]).slice(0, 2).join('')}
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-semibold text-gray-900">{person.name ?? '—'}</p>
          {index === 0 && (
            <span className="shrink-0 rounded-full bg-orange-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-orange-600">
              Top
            </span>
          )}
          {hasDetail && (
            <span className="shrink-0 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-600">
              Detail fetched
            </span>
          )}
        </div>
        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
          {raw?.age && (
            <span className="text-[10px] text-gray-400">Age {raw.age}</span>
          )}
          {person.phone && (
            <span className="flex items-center gap-1 text-[10px] font-semibold text-orange-600">
              <Phone className="h-2.5 w-2.5" />{person.phone}
            </span>
          )}
          {raw?.lives_in && (
            <span className="flex items-center gap-1 text-[10px] text-gray-500">
              <MapPin className="h-2.5 w-2.5 text-emerald-500" />{raw.lives_in}
            </span>
          )}
          {!person.phone && raw?.used_to_live_in && (
            <span className="flex items-center gap-1 text-[10px] text-gray-400">
              <Clock className="h-2.5 w-2.5" />{raw.used_to_live_in}
            </span>
          )}
          {!person.phone && raw?.related_to && (
            <span className="flex items-center gap-1 text-[10px] text-gray-400">
              <Users className="h-2.5 w-2.5" />{raw.related_to}
            </span>
          )}
        </div>
      </div>

      {/* Arrow */}
      <ArrowRight className="h-4 w-4 shrink-0 text-gray-300 transition-colors group-hover:text-orange-400" />
    </Link>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

interface SkipTraceRun {
  id: string
  created_at: string
  provider: string
  status: string
  records_found: number | null
}

interface SkipTraceResultsProps {
  propertyId:   string
  street:       string
  citystatezip: string
  fullAddress?: string
  runs?:        SkipTraceRun[]
}

export function SkipTraceResults({
  propertyId, street, citystatezip, fullAddress, runs = [],
}: SkipTraceResultsProps) {
  const [people,       setPeople]       = useState<TracedPerson[]>([])
  const [initializing, setInitializing] = useState(true)
  const [isPending,    startTransition]  = useTransition()
  const [traceError,   setTraceError]   = useState<string | null>(null)

  useEffect(() => {
    fetchTracesForProperty(propertyId)
      .then((rows) => setPeople(rows as TracedPerson[]))
      .finally(() => setInitializing(false))
  }, [propertyId])

  const runTrace = (forceRefresh = false) => {
    setTraceError(null)
    startTransition(async () => {
      try {
        const result = await runAddressTrace(propertyId, street, citystatezip, fullAddress, forceRefresh)
        setPeople(result as TracedPerson[])
      } catch (e) {
        setTraceError(String(e))
      }
    })
  }

  if (initializing) {
    return (
      <div className="flex items-center justify-center gap-2 py-8 text-xs text-gray-400">
        <Loader2 className="h-4 w-4 animate-spin" />
        Loading…
      </div>
    )
  }

  if (traceError) {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-xs text-red-600">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {traceError}
        </div>
        <button
          onClick={() => runTrace(true)}
          disabled={isPending}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 py-2.5 text-xs font-semibold text-orange-600 hover:bg-orange-100 disabled:opacity-50"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${isPending ? 'animate-spin' : ''}`} />
          Retry
        </button>
      </div>
    )
  }

  if (people.length === 0) {
    const lastRun    = runs[0]
    const totalFound = runs.reduce((sum, r) => sum + (r.records_found ?? 0), 0)

    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        {isPending ? (
          <>
            <Loader2 className="h-6 w-6 animate-spin text-orange-400" />
            <p className="text-xs text-gray-400">Searching records…</p>
          </>
        ) : runs.length > 0 ? (
          <>
            <div className="w-full rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-left">
              <p className="text-xs font-semibold text-amber-700">
                Previous run found {totalFound} record{totalFound !== 1 ? 's' : ''} — contacts not saved
              </p>
              <p className="mt-0.5 text-[11px] text-amber-600">
                Last run: {new Date(lastRun.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
            <button
              onClick={() => runTrace(true)}
              className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:opacity-90"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Re-run &amp; Save Candidates
            </button>
          </>
        ) : (
          <>
            <SearchX className="h-6 w-6 text-gray-300" />
            <p className="text-xs text-gray-400">No skip trace run yet.</p>
            <button
              onClick={() => runTrace(false)}
              className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:opacity-90"
            >
              <Fingerprint className="h-3.5 w-3.5" />
              Run Skip Trace
            </button>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {/* Meta bar */}
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
          {people.length} candidate{people.length !== 1 ? 's' : ''} · click to view &amp; trace
        </p>
        <button
          onClick={() => runTrace(true)}
          disabled={isPending}
          className="flex items-center gap-1 text-[10px] font-medium text-gray-400 hover:text-gray-600 disabled:opacity-50"
        >
          <RefreshCw className={`h-3 w-3 ${isPending ? 'animate-spin' : ''}`} />
          Re-run
        </button>
      </div>

      {isPending && (
        <div className="flex items-center gap-2 rounded-lg bg-orange-50 px-3 py-2 text-xs text-orange-600">
          <Loader2 className="h-3 w-3 animate-spin" />
          Fetching fresh results…
        </div>
      )}

      <div className="space-y-2">
        {people.map((person, i) => (
          <CandidateCard key={person.id} person={person} index={i} />
        ))}
      </div>

      {/* Run history footer */}
      {runs.length > 0 && (
        <div className="border-t border-gray-100 pt-3 space-y-1">
          {runs.map((r) => (
            <div key={r.id} className="flex items-center justify-between text-[10px] text-gray-400">
              <span className="font-medium text-gray-500">{r.provider}</span>
              <div className="flex items-center gap-3">
                <span className={r.status === 'failed' ? 'text-red-400' : ''}>
                  {r.records_found != null ? `${r.records_found} records` : r.status}
                </span>
                <span>{new Date(r.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


