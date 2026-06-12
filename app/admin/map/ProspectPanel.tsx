'use client'

import { useState, useTransition } from 'react'
import { X, Loader2, CheckSquare, Square, ChevronRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { createMapProspect } from '@/app/admin/map/actions'
import { ROOFING_ISSUES, SIDING_ISSUES, GENERAL_ISSUES } from '@/app/admin/prospects/issues'

interface ProspectPanelProps {
  initAddress: string | null
  initLat:     number
  initLng:     number
  onClose:     () => void
  onSaved:     () => void
}

function IssueGroup({
  label, issues, selected, onToggle,
}: {
  label:    string
  issues:   readonly { value: string; label: string }[]
  selected: Set<string>
  onToggle: (v: string) => void
}) {
  return (
    <div>
      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">{label}</p>
      <div className="space-y-1">
        {issues.map(({ value, label: issueLabel }) => {
          const on = selected.has(value)
          return (
            <button
              key={value}
              type="button"
              onClick={() => onToggle(value)}
              className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-xs transition-colors hover:bg-gray-50"
            >
              {on
                ? <CheckSquare className="h-3.5 w-3.5 shrink-0 text-brand-primary" />
                : <Square      className="h-3.5 w-3.5 shrink-0 text-gray-300" />}
              <span className={on ? 'font-medium text-gray-800' : 'text-gray-600'}>{issueLabel}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function ProspectPanel({ initAddress, initLat, initLng, onClose, onSaved }: ProspectPanelProps) {
  const [isPending, startTransition] = useTransition()
  const [error,     setError]        = useState<string | null>(null)
  const [saved,     setSaved]        = useState(false)
  const [savedId,   setSavedId]      = useState<string | null>(null)

  const [selectedIssues, setSelectedIssues] = useState<Set<string>>(new Set())
  const [serviceType, setServiceType] = useState('')
  const [notes,       setNotes]       = useState('')
  const [name,        setName]        = useState('')
  const [phone,       setPhone]       = useState('')
  const [email,       setEmail]       = useState('')

  function toggleIssue(v: string) {
    setSelectedIssues((prev) => {
      const next = new Set(prev)
      next.has(v) ? next.delete(v) : next.add(v)
      return next
    })
  }

  // Parse address parts from the reverse-geocoded string
  const parts         = (initAddress ?? '').replace(/, United States$/, '').split(',').map((s) => s.trim())
  const street        = parts[0] ?? null
  const cityStatePart = parts[1] ?? null
  const statePart     = parts[2] ?? null
  const fullAddress   = initAddress?.replace(/, United States$/, '') ?? null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    startTransition(async () => {
      try {
        const result = await createMapProspect({
          street,
          city:          cityStatePart,
          state:         statePart,
          full_address:  fullAddress,
          lat:           initLat,
          lng:           initLng,
          visible_issues: Array.from(selectedIssues),
          services:      serviceType ? [serviceType] : [],
          notes:         notes || null,
          name:          name  || null,
          phone:         phone || null,
          email:         email || null,
        })
        setSavedId(result.pipelineId)
        setSaved(true)
        onSaved()
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to save prospect')
      }
    })
  }

  // ── Success state ─────────────────────────────────────────────────────────
  if (saved) {
    return (
      <div className="absolute inset-y-0 right-0 z-30 flex w-80 flex-col border-l border-gray-200 bg-white shadow-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-4 py-3">
          <p className="text-sm font-semibold text-gray-900">Prospect Added</p>
          <button onClick={onClose} className="shrink-0 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
          <CheckCircle2 className="h-10 w-10 text-emerald-500" />
          <div>
            <p className="font-semibold text-gray-900">Property added to Pipeline</p>
            <p className="mt-1 text-xs text-gray-400">
              {fullAddress ?? 'Address saved'}
            </p>
          </div>
          {savedId && (
            <a
              href={`/admin/pipeline/${savedId}`}
              className="flex items-center gap-1.5 rounded-xl bg-brand-primary px-4 py-2 text-xs font-semibold text-white hover:opacity-90"
            >
              View in Pipeline <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-y-0 right-0 z-30 flex w-80 flex-col border-l border-gray-200 bg-white shadow-2xl">
      {/* Header */}
      <div className="flex shrink-0 items-center gap-2 border-b border-gray-100 px-4 py-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-900">Add Prospect</p>
          {fullAddress && (
            <p className="mt-0.5 truncate text-[11px] text-gray-400">{fullAddress}</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="shrink-0 rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 space-y-5 overflow-y-auto px-4 py-4">

          {/* Service type */}
          <div>
            <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Primary Service
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {(['roofing', 'siding', 'both'] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setServiceType(serviceType === s ? '' : s)}
                  className={`rounded-lg border px-2 py-1.5 text-xs font-medium capitalize transition-colors ${
                    serviceType === s
                      ? 'border-brand-primary bg-brand-primary/5 text-brand-primary'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Visible issues */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Visible Issues</p>
            <IssueGroup label="Roofing" issues={ROOFING_ISSUES} selected={selectedIssues} onToggle={toggleIssue} />
            <IssueGroup label="Siding"  issues={SIDING_ISSUES}  selected={selectedIssues} onToggle={toggleIssue} />
            <IssueGroup label="General" issues={GENERAL_ISSUES} selected={selectedIssues} onToggle={toggleIssue} />
          </div>

          {/* Notes */}
          <div>
            <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Additional observations…"
              className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-700 placeholder-gray-300 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
            />
          </div>

          {/* Optional contact */}
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Contact Info <span className="font-normal normal-case text-gray-300">(optional)</span>
            </p>
            <div className="space-y-2">
              {[
                { value: name,  setter: setName,  placeholder: 'Owner name', type: 'text'  },
                { value: phone, setter: setPhone, placeholder: 'Phone',      type: 'tel'   },
                { value: email, setter: setEmail, placeholder: 'Email',      type: 'email' },
              ].map(({ value, setter, placeholder, type }) => (
                <input
                  key={placeholder}
                  type={type}
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  placeholder={placeholder}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-700 placeholder-gray-300 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                />
              ))}
            </div>
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">{error}</p>
          )}
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-gray-100 px-4 py-3">
          <button
            type="submit"
            disabled={isPending}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white transition-opacity disabled:opacity-60 hover:opacity-90"
          >
            {isPending
              ? <><Loader2 className="h-4 w-4 animate-spin" /> Saving…</>
              : <><ChevronRight className="h-4 w-4" /> Save Prospect</>}
          </button>
          <a
            href="/admin/pipeline"
            className="mt-2 flex w-full items-center justify-center gap-1.5 text-[11px] text-gray-400 transition-colors hover:text-gray-600"
          >
            View Pipeline <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </form>
    </div>
  )
}
