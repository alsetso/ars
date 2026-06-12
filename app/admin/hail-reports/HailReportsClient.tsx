'use client'

import { useState, useCallback, useMemo } from 'react'
import dynamic from 'next/dynamic'
import {
  CloudLightning,
  Search,
  Loader2,
  ExternalLink,
  AlertTriangle,
  MapPin,
  Clock,
  Droplets,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import type { HailReport } from '@/app/api/hail-reports/route'
import type { HailLocation } from './HailMap'

// Load Mapbox map client-side only (no SSR)
const HailMap = dynamic(() => import('./HailMap').then((m) => m.HailMap), {
  ssr: false,
  loading: () => (
    <div className="flex h-72 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
      <Loader2 className="h-6 w-6 animate-spin text-gray-300" />
    </div>
  ),
})

// ── Constants ────────────────────────────────────────────────────────────────

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

const STATES = [
  { code: 'MN', label: 'Minnesota' },
  { code: 'WI', label: 'Wisconsin' },
  { code: 'IA', label: 'Iowa' },
  { code: 'SD', label: 'South Dakota' },
  { code: 'ND', label: 'North Dakota' },
]

const now = new Date()

function sizeColor(size: string | null): string {
  if (!size) return 'bg-gray-100 text-gray-500'
  const n = parseFloat(size)
  if (n >= 2.0) return 'bg-red-100 text-red-700'
  if (n >= 1.5) return 'bg-orange-100 text-orange-700'
  if (n >= 1.0) return 'bg-amber-100 text-amber-700'
  return 'bg-yellow-50 text-yellow-700'
}

// ── Derived location counts from reports ─────────────────────────────────────

function buildLocationStats(reports: HailReport[]): HailLocation[] {
  const map = new Map<string, { count: number; maxSize: number }>()
  for (const r of reports) {
    if (!r.location) continue
    const existing = map.get(r.location) ?? { count: 0, maxSize: 0 }
    existing.count += 1
    const size = r.size_in ? parseFloat(r.size_in) : 0
    if (size > existing.maxSize) existing.maxSize = size
    map.set(r.location, existing)
  }
  return [...map.entries()]
    .map(([location, { count, maxSize }]) => ({ location, count, maxSize }))
    .sort((a, b) => b.count - a.count)
}

// ── Report row ────────────────────────────────────────────────────────────────

function ReportRow({ report }: { report: HailReport }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-0">
      <div
        className="grid cursor-pointer grid-cols-[auto_1fr_auto_auto_auto] items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors"
        onClick={() => setExpanded((v) => !v)}
      >
        {/* Size badge */}
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${sizeColor(report.size_in)}`}>
          <Droplets className="h-3 w-3" />
          {report.size_in ? `${report.size_in}"` : 'N/A'}
        </span>

        {/* Location / date */}
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-gray-800">
            {report.location ?? 'Unknown location'}
          </p>
          <p className="text-xs text-gray-400">{report.date}</p>
        </div>

        {/* Time */}
        {report.time && (
          <span className="hidden items-center gap-1 text-xs text-gray-400 sm:flex">
            <Clock className="h-3 w-3" />
            {report.time}
          </span>
        )}

        {/* External link */}
        <a
          href={report.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded p-1 text-gray-400 hover:text-brand-primary transition-colors"
          onClick={(e) => e.stopPropagation()}
          title="View on StormerSite"
        >
          <ExternalLink className="h-4 w-4" />
        </a>

        {/* Expand toggle */}
        {expanded
          ? <ChevronUp className="h-4 w-4 text-gray-400" />
          : <ChevronDown className="h-4 w-4 text-gray-400" />
        }
      </div>

      {expanded && (
        <div className="bg-gray-50 px-5 pb-4 pt-2">
          <p className="text-xs leading-relaxed text-gray-600 whitespace-pre-wrap">{report.details}</p>
          <a
            href={report.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-brand-primary hover:underline"
          >
            Full report on StormerSite
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      )}
    </div>
  )
}

// ── Main client ───────────────────────────────────────────────────────────────

export function HailReportsClient() {
  const [state,    setState]    = useState('MN')
  const [year,     setYear]     = useState(now.getFullYear())
  const [month,    setMonth]    = useState(MONTHS[now.getMonth()])
  const [startDay, setStartDay] = useState(1)
  const [endDay,   setEndDay]   = useState(now.getDate())

  const [reports,  setReports]  = useState<HailReport[] | null>(null)
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState<string | null>(null)

  // Stable key so the map fully remounts when new results arrive
  const [mapKey,   setMapKey]   = useState(0)

  const yearOptions = Array.from({ length: 5 }, (_, i) => now.getFullYear() - i)
  const dayOptions  = Array.from({ length: 31 }, (_, i) => i + 1)

  const doFetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams({
        state,
        year:     String(year),
        month,
        startDay: String(startDay),
        endDay:   String(endDay),
      })
      const res = await globalThis.fetch(`/api/hail-reports?${params}`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setReports(data.reports)
      setMapKey((k) => k + 1)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to fetch reports')
      setReports(null)
    } finally {
      setLoading(false)
    }
  }, [state, year, month, startDay, endDay])

  const locationStats = useMemo(
    () => (reports ? buildLocationStats(reports) : []),
    [reports],
  )

  const largeHail = useMemo(
    () => reports?.filter((r) => r.size_in && parseFloat(r.size_in) >= 1.0) ?? [],
    [reports],
  )

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6">

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100">
          <CloudLightning className="h-5 w-5 text-sky-600" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Hail Reports</h1>
          <p className="text-sm text-gray-500">
            Scraped from{' '}
            <a href="https://www.stormersite.com" target="_blank" rel="noopener noreferrer"
              className="font-medium text-brand-primary hover:underline">
              StormerSite.com
            </a>
          </p>
        </div>
      </div>

      {/* Filters card */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {/* State */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">State</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none"
            >
              {STATES.map((s) => (
                <option key={s.code} value={s.code}>{s.code} — {s.label}</option>
              ))}
            </select>
          </div>

          {/* Year */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">Year</label>
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none"
            >
              {yearOptions.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          {/* Month */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">Month</label>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none"
            >
              {MONTHS.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          {/* Start day */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">From day</label>
            <select
              value={startDay}
              onChange={(e) => setStartDay(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none"
            >
              {dayOptions.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* End day */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">To day</label>
            <select
              value={endDay}
              onChange={(e) => setEndDay(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none"
            >
              {dayOptions.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Fetch button */}
          <div className="flex flex-col justify-end space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-transparent select-none">Go</label>
            <button
              onClick={doFetch}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-primary/90 disabled:opacity-60"
            >
              {loading
                ? <><Loader2 className="h-4 w-4 animate-spin" /> Fetching…</>
                : <><Search className="h-4 w-4" /> Search</>
              }
            </button>
          </div>
        </div>

        <p className="mt-3 text-xs text-gray-400">
          Scraping <strong>{endDay - startDay + 1}</strong> day{endDay - startDay !== 0 ? 's' : ''} — one request per day (~{(endDay - startDay + 1) * 0.3}s minimum).
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
          <AlertTriangle className="h-5 w-5 shrink-0 text-red-500" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Loading skeleton */}
      {loading && (
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4">
            <Loader2 className="h-5 w-5 animate-spin text-brand-primary" />
            <p className="text-sm font-medium text-gray-600">
              Fetching {endDay - startDay + 1} days of hail data…
            </p>
          </div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex animate-pulse gap-4 border-b border-gray-50 px-5 py-4">
              <div className="h-5 w-14 rounded-full bg-gray-100" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-40 rounded bg-gray-100" />
                <div className="h-3 w-24 rounded bg-gray-50" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Results */}
      {reports && !loading && (
        <>
          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-gray-900">{reports.length}</p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-gray-400">Total Reports</p>
            </div>
            <div className="rounded-xl border border-orange-100 bg-orange-50 p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-orange-700">{largeHail.length}</p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-orange-500">≥1.0″ Hail</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-gray-900">{locationStats.length}</p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-gray-400">Cities Affected</p>
            </div>
          </div>

          {/* Map + location table */}
          {locationStats.length > 0 && (
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 bg-gray-50 px-5 py-3">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  <MapPin className="h-3.5 w-3.5" />
                  Affected locations · circle size = report count
                </p>
              </div>

              {/* Map */}
              <div className="p-3">
                <HailMap key={mapKey} locations={locationStats} />
              </div>

              {/* Location count table */}
              <div className="border-t border-gray-100">
                {locationStats.map((loc) => (
                  <div
                    key={loc.location}
                    className="flex items-center gap-3 border-b border-gray-50 px-5 py-2.5 last:border-0 hover:bg-gray-50"
                  >
                    {/* Color dot based on max hail size */}
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{
                        background:
                          loc.maxSize >= 2.0 ? '#ef4444' :
                          loc.maxSize >= 1.5 ? '#f97316' :
                          loc.maxSize >= 1.0 ? '#f59e0b' : '#fcd34d',
                      }}
                    />

                    {/* Location name */}
                    <p className="flex-1 text-sm font-medium text-gray-800">{loc.location}</p>

                    {/* Max size */}
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${sizeColor(String(loc.maxSize))}`}>
                      max {loc.maxSize}"
                    </span>

                    {/* Report count badge */}
                    <span className="min-w-[2rem] rounded-full bg-sky-100 px-2.5 py-0.5 text-center text-xs font-bold text-sky-700">
                      {loc.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Report list */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 bg-gray-50 px-5 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {reports.length} report{reports.length !== 1 ? 's' : ''} — {month} {startDay}–{endDay}, {year} · {state}
              </p>
            </div>

            {reports.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
                <CloudLightning className="h-10 w-10 text-gray-200" />
                <p className="text-sm font-medium text-gray-400">No hail reports found for this range</p>
                <p className="text-xs text-gray-300">Try a wider date range or a different state</p>
              </div>
            ) : (
              reports.map((r, i) => <ReportRow key={`${r.url}-${i}`} report={r} />)
            )}
          </div>
        </>
      )}
    </div>
  )
}
