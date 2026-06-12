'use client'

import { Fingerprint, Search, User, Calendar, AlertTriangle, CheckCircle2, Zap } from 'lucide-react'
import type { UsageData, MonthBucket } from './page'

// ── Helpers ───────────────────────────────────────────────────────────────────

function fmtMonth(ym: string) {
  const [y, m] = ym.split('-')
  return new Date(Number(y), Number(m) - 1, 1).toLocaleDateString('en-US', {
    month: 'long', year: 'numeric',
  })
}

function pct(used: number, limit: number) {
  return Math.min(100, Math.round((used / limit) * 100))
}

// ── Tier progress bar ─────────────────────────────────────────────────────────

function TierBar({
  label,
  sublabel,
  used,
  limit,
  color,
  warning,
  danger,
}: {
  label:    string
  sublabel: string
  used:     number
  limit:    number
  color:    string
  warning:  number  // % at which to go yellow
  danger:   number  // % at which to go red
}) {
  const p      = pct(used, limit)
  const filled = Math.min(used, limit)

  const barColor =
    p >= danger  ? 'bg-red-500'    :
    p >= warning ? 'bg-amber-400'  :
    color

  const textColor =
    p >= danger  ? 'text-red-600'   :
    p >= warning ? 'text-amber-600' :
    'text-gray-700'

  const StatusIcon =
    p >= danger  ? AlertTriangle :
    p >= warning ? AlertTriangle :
    CheckCircle2

  const statusColor =
    p >= danger  ? 'text-red-500'   :
    p >= warning ? 'text-amber-500' :
    'text-emerald-500'

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-start justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{sublabel}</p>
          <p className="mt-0.5 text-sm font-bold text-gray-800">{label}</p>
        </div>
        <StatusIcon className={`h-4 w-4 ${statusColor}`} />
      </div>

      {/* Numbers */}
      <div className="mb-3 flex items-end gap-2">
        <span className={`text-3xl font-black tabular-nums ${textColor}`}>
          {filled.toLocaleString()}
        </span>
        <span className="mb-1 text-sm font-medium text-gray-400">
          / {limit.toLocaleString()} calls
        </span>
        <span className={`mb-1 ml-auto text-sm font-bold ${textColor}`}>{p}%</span>
      </div>

      {/* Progress track */}
      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className={`h-full rounded-full transition-all duration-700 ${barColor}`}
          style={{ width: `${p}%` }}
        />
      </div>

      {/* Remaining */}
      <p className="mt-2 text-[11px] text-gray-400">
        {Math.max(0, limit - filled).toLocaleString()} remaining in this tier
        {used > limit && (
          <span className="ml-2 font-semibold text-red-500">
            ({(used - limit).toLocaleString()} over)
          </span>
        )}
      </p>
    </div>
  )
}

// ── Stat pill ─────────────────────────────────────────────────────────────────

function Stat({
  icon: Icon, label, value, color,
}: {
  icon: React.ElementType; label: string; value: number; color: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${color}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xl font-black tabular-nums text-gray-900">{value.toLocaleString()}</p>
        <p className="text-[11px] text-gray-400">{label}</p>
      </div>
    </div>
  )
}

// ── History table ─────────────────────────────────────────────────────────────

function HistoryRow({ bucket, tier1, tier2 }: { bucket: MonthBucket; tier1: number; tier2: number }) {
  const isOver2  = bucket.total > tier2
  const isOver1  = bucket.total > tier1
  const badge =
    isOver2 ? 'bg-red-100 text-red-700'    :
    isOver1 ? 'bg-amber-100 text-amber-700' :
    'bg-emerald-100 text-emerald-700'
  const badgeLabel =
    isOver2 ? 'Over Plan' :
    isOver1 ? 'Tier 2'    :
    'Tier 1'

  return (
    <tr className="border-t border-gray-100 hover:bg-gray-50">
      <td className="px-5 py-3 text-sm font-medium text-gray-700">{fmtMonth(bucket.month)}</td>
      <td className="px-5 py-3 text-center text-sm tabular-nums text-gray-600">
        {bucket.address.toLocaleString()}
      </td>
      <td className="px-5 py-3 text-center text-sm tabular-nums text-gray-600">
        {bucket.person.toLocaleString()}
      </td>
      <td className="px-5 py-3 text-center text-sm font-bold tabular-nums text-gray-900">
        {bucket.total.toLocaleString()}
      </td>
      <td className="px-5 py-3 text-right">
        <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${badge}`}>
          {badgeLabel}
        </span>
      </td>
    </tr>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function UsageClient({ usage }: { usage: UsageData }) {
  const { thisMonth, history, provider, tier1Limit, tier2Limit } = usage
  const { total, address, person } = thisMonth

  // Tier 2 starts where tier 1 ends
  const tier2Used = Math.max(0, total - tier1Limit)

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-5 py-10">

      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100">
          <Fingerprint className="h-5 w-5 text-orange-600" />
        </div>
        <div>
          <h1 className="text-2xl font-black tracking-tight text-gray-900">API Usage</h1>
          <p className="mt-0.5 text-sm text-gray-500">
            {provider} · {fmtMonth(thisMonth.month)}
          </p>
        </div>
        <div className="ml-auto flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5">
          <Zap className="h-3 w-3 text-orange-500" />
          <span className="text-[11px] font-semibold text-gray-600">Live from DB</span>
        </div>
      </div>

      {/* Breakdown stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Stat icon={Fingerprint} label="Total this month"   value={total}   color="bg-orange-100 text-orange-600" />
        <Stat icon={Search}      label="Address searches"   value={address} color="bg-blue-100 text-blue-600"     />
        <Stat icon={User}        label="Person detail pulls" value={person}  color="bg-purple-100 text-purple-600" />
      </div>

      {/* Tier bars */}
      <div className="space-y-4">
        <h2 className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
          Monthly Limits
        </h2>

        {/* Tier 1: 0 – 100 */}
        <TierBar
          label="Tier 1 — Basic"
          sublabel="First 100 calls"
          used={total}
          limit={tier1Limit}
          color="bg-emerald-500"
          warning={75}
          danger={95}
        />

        {/* Tier 2: 100 – 2,500 */}
        <TierBar
          label="Tier 2 — Pro"
          sublabel="Up to 2,500 calls / mo"
          used={tier2Used}
          limit={tier2Limit - tier1Limit}
          color="bg-orange-500"
          warning={70}
          danger={90}
        />
      </div>

      {/* Combined visual */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Combined View — 0 to 2,500
        </p>
        <div className="relative h-6 w-full overflow-hidden rounded-full bg-gray-100">
          {/* Tier 1 fill (0-100 portion) */}
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-emerald-400 transition-all duration-700"
            style={{ width: `${pct(Math.min(total, tier1Limit), tier2Limit)}%` }}
          />
          {/* Tier 2 fill (100-2500 portion) */}
          {total > tier1Limit && (
            <div
              className="absolute top-0 h-full rounded-r-full bg-orange-500 transition-all duration-700"
              style={{
                left:  `${pct(tier1Limit, tier2Limit)}%`,
                width: `${pct(Math.min(total - tier1Limit, tier2Limit - tier1Limit), tier2Limit)}%`,
              }}
            />
          )}
          {/* Tier boundary marker */}
          <div
            className="absolute top-0 h-full w-px bg-white/70"
            style={{ left: `${pct(tier1Limit, tier2Limit)}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-gray-400">
          <span>0</span>
          <span className="text-emerald-600 font-semibold">
            {tier1Limit} · Tier 1 limit
          </span>
          <span>{tier2Limit.toLocaleString()}</span>
        </div>
        <div className="mt-3 flex gap-4">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-gray-500">Tier 1 (0–100)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-orange-500" />
            <span className="text-[11px] text-gray-500">Tier 2 (100–2,500)</span>
          </div>
        </div>
      </div>

      {/* Monthly history */}
      {history.length > 0 && (
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-gray-100 px-5 py-4">
            <Calendar className="h-4 w-4 text-gray-400" />
            <h2 className="text-sm font-bold text-gray-800">Monthly History</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-left">
                  <th className="px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">Month</th>
                  <th className="px-5 py-2.5 text-center text-[10px] font-bold uppercase tracking-widest text-gray-400">Addresses</th>
                  <th className="px-5 py-2.5 text-center text-[10px] font-bold uppercase tracking-widest text-gray-400">People</th>
                  <th className="px-5 py-2.5 text-center text-[10px] font-bold uppercase tracking-widest text-gray-400">Total</th>
                  <th className="px-5 py-2.5 text-right text-[10px] font-bold uppercase tracking-widest text-gray-400">Tier</th>
                </tr>
              </thead>
              <tbody>
                {history.map((b) => (
                  <HistoryRow key={b.month} bucket={b} tier1={tier1Limit} tier2={tier2Limit} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Footer note */}
      <p className="text-center text-[11px] text-gray-400">
        Usage data sourced from your local database — every skip trace call is recorded.
        Resets the 1st of each month per RapidAPI billing cycle.
      </p>
    </div>
  )
}
