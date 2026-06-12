'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2, Loader2, AlertTriangle } from 'lucide-react'
import { deletePerson } from '../actions'

export function DeletePersonSection({
  personId,
  openJobCount,
}: {
  personId:     string
  openJobCount: number
}) {
  const router = useRouter()
  const [step, setStep]              = useState<'idle' | 'confirm'>('idle')
  const [isPending, startTransition] = useTransition()

  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
        Danger zone
      </p>

      {step === 'idle' && (
        <button
          onClick={() => setStep('confirm')}
          className="flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50 transition-colors"
        >
          <Trash2 className="h-3.5 w-3.5" /> Delete person
        </button>
      )}

      {step === 'confirm' && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 space-y-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 shrink-0 text-red-500 mt-0.5" />
            <div className="text-xs text-red-700 space-y-1">
              <p className="font-semibold">This will permanently delete the person and:</p>
              <ul className="list-disc pl-4 space-y-0.5 text-red-600">
                <li>Remove all property links (property_contacts)</li>
                {openJobCount > 0 && (
                  <li className="font-semibold">
                    {openJobCount} pipeline job{openJobCount !== 1 ? 's' : ''} will lose their primary contact (records kept)
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={isPending}
              onClick={() =>
                startTransition(async () => {
                  await deletePerson(personId)
                  router.push('/admin/people')
                })
              }
              className="flex items-center gap-1.5 rounded-lg bg-red-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-600 disabled:opacity-60 transition-colors"
            >
              {isPending
                ? <Loader2 className="h-3 w-3 animate-spin" />
                : <Trash2 className="h-3 w-3" />}
              Yes, delete permanently
            </button>
            <button
              onClick={() => setStep('idle')}
              disabled={isPending}
              className="rounded-lg px-3 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-100 disabled:opacity-60"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
