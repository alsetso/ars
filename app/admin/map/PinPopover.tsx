'use client'

import { X, Phone, Mail, ArrowUpRight, ExternalLink, Fingerprint } from 'lucide-react'
import { ROOFING_ISSUES, SIDING_ISSUES, GENERAL_ISSUES } from '@/app/admin/prospects/issues'

// ── Shared types ──────────────────────────────────────────────────────────────

export interface LeadPinData {
  type: 'lead'
  id: string
  name: string
  address: string
  status: string
  service: string
  phone: string
  email: string
}

export interface ProspectPinData {
  type: 'prospect'
  id: string
  full_address: string
  visible_issues: string[]
  service_type: string
  status: string
  name: string
  phone: string
  email: string
}

export type PinData = LeadPinData | ProspectPinData

// ── Lead status config ────────────────────────────────────────────────────────

const LEAD_STATUS: Record<string, { label: string; bg: string; text: string; dot: string }> = {
  new:         { label: 'New',         bg: 'bg-blue-500',   text: 'text-white', dot: 'bg-blue-300'   },
  contacted:   { label: 'Contacted',   bg: 'bg-amber-500',  text: 'text-white', dot: 'bg-amber-300'  },
  in_progress: { label: 'In Progress', bg: 'bg-violet-500', text: 'text-white', dot: 'bg-violet-300' },
  closed:      { label: 'Closed',      bg: 'bg-emerald-500',text: 'text-white', dot: 'bg-emerald-300'},
  lost:        { label: 'Lost',        bg: 'bg-gray-400',   text: 'text-white', dot: 'bg-gray-200'   },
}

// ── Issue label lookup ────────────────────────────────────────────────────────

const ALL_ISSUES = [...ROOFING_ISSUES, ...SIDING_ISSUES, ...GENERAL_ISSUES]
function issueLabel(v: string) {
  return ALL_ISSUES.find((i) => i.value === v)?.label ?? v
}

// ── Lead popover ──────────────────────────────────────────────────────────────

function LeadPopover({ data, onClose }: { data: LeadPinData; onClose: () => void }) {
  const cfg = LEAD_STATUS[data.status] ?? LEAD_STATUS.new

  return (
    <div className="w-60 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
      {/* Colored header */}
      <div className={`${cfg.bg} px-3.5 py-2.5 flex items-center justify-between`}>
        <div className="flex items-center gap-2 min-w-0">
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${cfg.dot}`} />
          <span className={`text-[10px] font-bold uppercase tracking-widest ${cfg.text} opacity-90`}>
            Lead
          </span>
          <span className={`text-[10px] font-semibold ${cfg.text}`}>·</span>
          <span className={`text-[10px] font-semibold ${cfg.text} truncate`}>{cfg.label}</span>
        </div>
        <button
          onClick={onClose}
          className={`shrink-0 rounded-md p-0.5 ${cfg.text} opacity-70 transition-opacity hover:opacity-100`}
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Body */}
      <div className="px-3.5 py-3 space-y-2.5">
        {/* Name */}
        <div>
          <p className="text-sm font-bold leading-tight text-gray-900">{data.name}</p>
          {data.address && (
            <p className="mt-0.5 text-[11px] leading-snug text-gray-500">{data.address}</p>
          )}
        </div>

        {/* Service */}
        {data.service !== '—' && (
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Service</span>
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium capitalize text-gray-700">
              {data.service}
            </span>
          </div>
        )}

        {/* Contact */}
        <div className="space-y-1 border-t border-gray-100 pt-2.5">
          {data.phone && (
            <a
              href={`tel:${data.phone}`}
              className="flex items-center gap-2 text-[11px] font-medium text-gray-700 transition-colors hover:text-brand-primary"
            >
              <Phone className="h-3 w-3 shrink-0 text-gray-400" />
              {data.phone}
            </a>
          )}
          {data.email && (
            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-2 text-[11px] font-medium text-gray-700 transition-colors hover:text-brand-primary"
            >
              <Mail className="h-3 w-3 shrink-0 text-gray-400" />
              <span className="truncate">{data.email}</span>
            </a>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 px-3.5 py-2">
        <a
          href={`/admin/leads`}
          className="flex items-center gap-1 text-[11px] font-semibold text-brand-primary transition-opacity hover:opacity-75"
        >
          View in Leads <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  )
}

// ── Prospect popover ──────────────────────────────────────────────────────────

function ProspectPopover({
  data,
  onClose,
  onSkipTrace,
}: {
  data: ProspectPinData
  onClose: () => void
  onSkipTrace?: () => void
}) {
  const issues = Array.isArray(data.visible_issues)
    ? data.visible_issues
    : typeof data.visible_issues === 'string'
      ? (data.visible_issues as string).split(',').map((s) => s.trim()).filter(Boolean)
      : []

  return (
    <div className="w-60 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
      {/* Orange header */}
      <div className="flex items-center justify-between bg-orange-500 px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-200" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-white opacity-90">
            Prospect
          </span>
          {data.status && (
            <>
              <span className="text-[10px] font-semibold text-white">·</span>
              <span className="text-[10px] font-semibold capitalize text-white">{data.status}</span>
            </>
          )}
        </div>
        <button
          onClick={onClose}
          className="shrink-0 rounded-md p-0.5 text-white opacity-70 transition-opacity hover:opacity-100"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Body */}
      <div className="px-3.5 py-3 space-y-2.5">
        {/* Address */}
        <p className="text-sm font-bold leading-tight text-gray-900">
          {data.full_address
            ? data.full_address.replace(/, United States$/, '')
            : 'Unknown address'}
        </p>

        {/* Service */}
        {data.service_type && data.service_type !== '—' && (
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Service</span>
            <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-medium capitalize text-orange-700">
              {data.service_type}
            </span>
          </div>
        )}

        {/* Issue tags */}
        {issues.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {issues.slice(0, 5).map((v) => (
              <span key={v} className="rounded bg-orange-50 px-1.5 py-0.5 text-[10px] text-orange-700">
                {issueLabel(v)}
              </span>
            ))}
            {issues.length > 5 && (
              <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-500">
                +{issues.length - 5}
              </span>
            )}
          </div>
        )}

        {/* Contact (if known) */}
        {(data.name || data.phone || data.email) && (
          <div className="space-y-1 border-t border-gray-100 pt-2.5">
            {data.name && (
              <p className="text-[11px] font-semibold text-gray-800">{data.name}</p>
            )}
            {data.phone && (
              <a
                href={`tel:${data.phone}`}
                className="flex items-center gap-2 text-[11px] font-medium text-gray-700 transition-colors hover:text-orange-600"
              >
                <Phone className="h-3 w-3 shrink-0 text-gray-400" />
                {data.phone}
              </a>
            )}
            {data.email && (
              <a
                href={`mailto:${data.email}`}
                className="flex items-center gap-2 text-[11px] font-medium text-gray-700 transition-colors hover:text-orange-600"
              >
                <Mail className="h-3 w-3 shrink-0 text-gray-400" />
                <span className="truncate">{data.email}</span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 px-3.5 py-2 space-y-1.5">
        <div className="flex items-center justify-between">
          <a
            href="/admin/prospects"
            className="flex items-center gap-1 text-[11px] font-semibold text-orange-500 transition-opacity hover:opacity-75"
          >
            View Prospect <ArrowUpRight className="h-3 w-3" />
          </a>
          <a
            href={`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${data.full_address}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] text-gray-400 transition-colors hover:text-gray-700"
          >
            Street View <ExternalLink className="h-2.5 w-2.5" />
          </a>
        </div>
        {onSkipTrace && (
          <button
            onClick={onSkipTrace}
            className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-orange-50 py-1.5 text-[11px] font-semibold text-orange-600 transition-colors hover:bg-orange-100"
          >
            <Fingerprint className="h-3 w-3" />
            Skip Trace this Address
          </button>
        )}
      </div>
    </div>
  )
}

// ── Shell: picks variant by type + handles positioning ────────────────────────

interface PinPopoverProps {
  data: PinData
  screenX: number
  screenY: number
  containerH: number
  onClose: () => void
  onSkipTrace?: () => void
}

export function PinPopover({ data, screenX, screenY, containerH, onClose, onSkipTrace }: PinPopoverProps) {
  const above = screenY > containerH / 2

  return (
    <div
      className="pointer-events-auto absolute z-30"
      style={{
        left: screenX,
        top:  screenY,
        transform: above
          ? 'translate(-50%, calc(-100% - 14px))'
          : 'translate(-50%, 14px)',
      }}
    >
      {data.type === 'lead'
        ? <LeadPopover     data={data} onClose={onClose} />
        : <ProspectPopover data={data} onClose={onClose} onSkipTrace={onSkipTrace} />
      }
    </div>
  )
}
