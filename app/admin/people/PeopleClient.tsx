'use client'

import { useState } from 'react'
import { Users, Phone, Mail, MapPin, ChevronDown, ChevronUp, GitPullRequestArrow } from 'lucide-react'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PersonRow({ person }: { person: any }) {
  const [expanded, setExpanded] = useState(false)
  const contacts   = person.property_contacts ?? []
  const initials   = (person.name ?? '?').split(' ').map((n: string) => n[0]).slice(0, 2).join('')
  const properties = contacts.map((c: { properties: unknown }) => c.properties).filter(Boolean)

  return (
    <div className="border-b border-gray-100 last:border-0">
      <div
        className="grid cursor-pointer grid-cols-[1fr_auto_auto] items-center gap-4 px-5 py-4 hover:bg-gray-50 md:grid-cols-[2fr_1fr_1fr_auto]"
        onClick={() => setExpanded((p) => !p)}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
            {initials}
          </div>
          <div className="min-w-0">
            <Link
              href={`/admin/people/${person.id}`}
              onClick={(e) => e.stopPropagation()}
              className="truncate font-semibold text-gray-900 hover:text-brand-primary hover:underline"
            >
              {person.name ?? 'No name'}
            </Link>
            <div className="flex flex-wrap gap-x-3">
              {person.phone && (
                <a
                  href={`tel:${person.phone}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 text-xs text-orange-600 hover:underline"
                >
                  <Phone className="h-2.5 w-2.5" />{person.phone}
                </a>
              )}
              {person.email && (
                <a
                  href={`mailto:${person.email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 text-xs text-gray-500 hover:underline"
                >
                  <Mail className="h-2.5 w-2.5" />{person.email}
                </a>
              )}
            </div>
          </div>
        </div>

        <span className="hidden text-sm text-gray-500 md:block">
          {properties.length} propert{properties.length !== 1 ? 'ies' : 'y'}
        </span>

        <span className="hidden text-xs text-gray-400 md:block">
          {new Date(person.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>

        <button className="text-gray-400 hover:text-gray-600">
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      {expanded && (
        <div className="border-t border-gray-50 bg-gray-50 px-5 py-4 space-y-4">
          {/* Extra contact info */}
          {(person.extra_phones?.length > 0 || person.extra_emails?.length > 0) && (
            <div className="grid gap-3 sm:grid-cols-2">
              {person.extra_phones?.length > 0 && (
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">Additional Phones</p>
                  {person.extra_phones.map((ph: string, i: number) => (
                    <a key={i} href={`tel:${ph}`} className="flex items-center gap-1 text-xs text-orange-600 hover:underline">
                      <Phone className="h-2.5 w-2.5" />{ph}
                    </a>
                  ))}
                </div>
              )}
              {person.extra_emails?.length > 0 && (
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">Additional Emails</p>
                  {person.extra_emails.map((em: string, i: number) => (
                    <a key={i} href={`mailto:${em}`} className="flex items-center gap-1 text-xs text-gray-500 hover:underline">
                      <Mail className="h-2.5 w-2.5" />{em}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Linked properties */}
          {contacts.length > 0 && (
            <div>
              <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <MapPin className="h-3 w-3" /> Properties
              </p>
              <div className="space-y-1.5">
                {contacts.map((c: { role: string; is_primary: boolean; properties: { id: string; full_address: string; street: string; city: string; state: string; type: string } }, i: number) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-3 py-2">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                    <span className="flex-1 text-xs text-gray-700">
                      {c.properties?.full_address
                        ?? [c.properties?.street, c.properties?.city, c.properties?.state].filter(Boolean).join(', ')
                        ?? '—'}
                    </span>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-500">{c.role}</span>
                    {c.is_primary && (
                      <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-semibold text-orange-600">Primary</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <Link
            href={`/admin/pipeline?contact=${person.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:underline"
          >
            <GitPullRequestArrow className="h-3.5 w-3.5" />
            View jobs in Pipeline
          </Link>
        </div>
      )}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PeopleClient({ people }: { people: any[] }) {
  const [search, setSearch] = useState('')

  const filtered = people.filter((p) => {
    const q = search.toLowerCase()
    return (
      (p.name  ?? '').toLowerCase().includes(q) ||
      (p.email ?? '').toLowerCase().includes(q) ||
      (p.phone ?? '').toLowerCase().includes(q)
    )
  })

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-gray-200 bg-white px-6 py-5">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-brand-primary" />
          <h1 className="text-xl font-bold text-gray-900">People</h1>
          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-500">
            {people.length}
          </span>
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email, or phone…"
          className="mt-4 w-full max-w-sm rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
        />
      </div>

      <div className="hidden border-b border-gray-100 bg-gray-50 px-5 py-2 md:grid md:grid-cols-[2fr_1fr_1fr_auto]">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Person</p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Properties</p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Added</p>
        <span />
      </div>

      <div className="flex-1 overflow-auto bg-white">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-20 text-center">
            <Users className="h-8 w-8 text-gray-200" />
            <p className="text-sm text-gray-400">No people found.</p>
          </div>
        ) : (
          filtered.map((p) => <PersonRow key={p.id} person={p} />)
        )}
      </div>
    </div>
  )
}
