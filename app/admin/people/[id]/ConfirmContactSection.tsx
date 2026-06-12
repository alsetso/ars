'use client'

import { useState, useTransition } from 'react'
import { CheckCircle2, X, Loader2 } from 'lucide-react'
import { confirmPropertyContact, removePropertyContact } from '../actions'

const ROLES = ['owner', 'co-owner', 'tenant', 'agent', 'hoa_rep', 'contact'] as const
type ConfirmedRole = typeof ROLES[number]

export function ConfirmContactSection({
  personId,
  propertyId,
}: {
  personId:   string
  propertyId: string
}) {
  const [role, setRole]           = useState<ConfirmedRole>('owner')
  const [confirmed, setConfirmed] = useState(false)
  const [isPending, startTransition] = useTransition()

  if (confirmed) {
    return (
      <p className="mt-2 flex items-center gap-1 text-[11px] font-medium text-emerald-600">
        <CheckCircle2 className="h-3.5 w-3.5" /> Confirmed as {role}
      </p>
    )
  }

  return (
    <div className="mt-2 flex flex-wrap items-center gap-2">
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as ConfirmedRole)}
        disabled={isPending}
        className="rounded-lg border border-amber-200 bg-white py-1 pl-2 pr-5 text-xs text-gray-700 focus:border-amber-400 focus:outline-none"
      >
        {ROLES.map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>

      <button
        disabled={isPending}
        onClick={() =>
          startTransition(async () => {
            await confirmPropertyContact(personId, propertyId, role)
            setConfirmed(true)
          })
        }
        className="flex items-center gap-1 rounded-lg bg-emerald-500 px-3 py-1 text-xs font-semibold text-white hover:bg-emerald-600 disabled:opacity-50 transition-colors"
      >
        {isPending ? <Loader2 className="h-3 w-3 animate-spin" /> : <CheckCircle2 className="h-3 w-3" />}
        Confirm
      </button>

      <button
        disabled={isPending}
        onClick={() =>
          startTransition(() => removePropertyContact(personId, propertyId))
        }
        className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 transition-colors"
      >
        <X className="h-3 w-3" /> Not them
      </button>
    </div>
  )
}
