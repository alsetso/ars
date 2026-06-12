'use client'

import { useState } from 'react'
import { Building2, MapPin, Phone, Mail, ChevronDown, ChevronUp, Users, GitPullRequestArrow, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const STAGE_COLOR: Record<string, string> = {
  prospect:   'bg-sky-100 text-sky-700',
  lead:       'bg-blue-100 text-blue-700',
  estimate:   'bg-violet-100 text-violet-700',
  contracted: 'bg-amber-100 text-amber-700',
  active:     'bg-orange-100 text-orange-700',
  complete:   'bg-emerald-100 text-emerald-700',
  follow_up:  'bg-teal-100 text-teal-700',
  lost:       'bg-red-100 text-red-500',
  skipped:    'bg-gray-100 text-gray-400',
}

const TYPE_COLOR: Record<string, string> = {
  residential: 'bg-blue-50 text-blue-700',
  commercial:  'bg-violet-50 text-violet-700',
  hoa:         'bg-amber-50 text-amber-700',
  municipal:   'bg-gray-50 text-gray-600',
  industrial:  'bg-orange-50 text-orange-700',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PropertyRow({ property }: { property: any }) {
  const [expanded, setExpanded] = useState(false)

  const address = property.full_address
    ?? [property.street, property.city, property.state, property.zip].filter(Boolean).join(', ')
    ?? '—'

  const contacts = property.property_contacts ?? []
  const primary  = contacts.find((c: { is_primary: boolean }) => c.is_primary) ?? contacts[0]
  const pipeline = property.pipeline ?? []
  const latest   = pipeline[0]

  return (
    <div className="border-b border-gray-100 last:border-0">
      <div
        className="grid cursor-pointer grid-cols-[1fr_auto_auto_auto] items-center gap-4 px-5 py-4 hover:bg-gray-50 md:grid-cols-[2fr_1fr_1fr_auto]"
        onClick={() => setExpanded((p) => !p)}
      >
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-gray-400" />
            <Link
              href={`/admin/properties/${property.id}`}
              onClick={(e) => e.stopPropagation()}
              className="truncate font-semibold text-gray-900 hover:text-brand-primary hover:underline"
            >
              {address}
            </Link>
          </div>
          {primary?.people && (
            <p className="mt-0.5 truncate pl-5 text-xs text-gray-400">
              {primary.people.name}
              {primary.people.phone && ` · ${primary.people.phone}`}
            </p>
          )}
        </div>

        <span className={`hidden rounded-full px-2 py-0.5 text-[10px] font-semibold md:inline ${TYPE_COLOR[property.type] ?? 'bg-gray-50 text-gray-500'}`}>
          {property.type}
        </span>

        {latest ? (
          <span className={`hidden rounded-full px-2 py-0.5 text-[10px] font-semibold md:inline ${STAGE_COLOR[latest.stage] ?? 'bg-gray-100 text-gray-500'}`}>
            {latest.stage} · {pipeline.length} job{pipeline.length !== 1 ? 's' : ''}
          </span>
        ) : (
          <span className="hidden text-xs text-gray-300 md:block">No jobs</span>
        )}

        <button className="text-gray-400 hover:text-gray-600">
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      {expanded && (
        <div className="border-t border-gray-50 bg-gray-50 px-5 py-4 space-y-4">
          {/* All contacts */}
          {contacts.length > 0 && (
            <div>
              <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <Users className="h-3 w-3" /> People
              </p>
              <div className="space-y-2">
                {contacts.map((c: { role: string; is_primary: boolean; people: { id: string; name: string; phone: string; email: string } }, i: number) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-3 py-2">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[11px] font-bold text-gray-600">
                      {(c.people?.name ?? '?').split(' ').map((n: string) => n[0]).slice(0, 2).join('')}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-800">{c.people?.name ?? '—'}</p>
                      <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                        {c.people?.phone && (
                          <a href={`tel:${c.people.phone}`} className="flex items-center gap-1 text-xs text-orange-600 hover:underline">
                            <Phone className="h-2.5 w-2.5" />{c.people.phone}
                          </a>
                        )}
                        {c.people?.email && (
                          <a href={`mailto:${c.people.email}`} className="flex items-center gap-1 text-xs text-gray-500 hover:underline">
                            <Mail className="h-2.5 w-2.5" />{c.people.email}
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-500">{c.role}</span>
                      {c.is_primary && (
                        <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-semibold text-orange-600">Primary</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pipeline jobs */}
          {pipeline.length > 0 && (
            <div>
              <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <GitPullRequestArrow className="h-3 w-3" /> Jobs
              </p>
              <div className="space-y-1.5">
                {pipeline.map((job: { id: string; stage: string; services: string[]; updated_at: string }) => (
                  <div key={job.id} className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-3 py-2">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${STAGE_COLOR[job.stage] ?? 'bg-gray-100'}`}>
                      {job.stage}
                    </span>
                    <span className="flex-1 text-xs text-gray-600">
                      {job.services.length > 0 ? job.services.join(', ') : 'No services listed'}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {new Date(job.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Link
            href={`/admin/pipeline?property=${property.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:underline"
          >
            <GitPullRequestArrow className="h-3.5 w-3.5" />
            View in Pipeline
          </Link>
        </div>
      )}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PropertiesClient({ properties }: { properties: any[] }) {
  const [search, setSearch] = useState('')

  const filtered = properties.filter((p) => {
    const addr = (p.full_address ?? [p.street, p.city, p.state].join(' ')).toLowerCase()
    return addr.includes(search.toLowerCase())
  })

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-gray-200 bg-white px-6 py-5">
        <div className="flex items-center gap-3">
          <Building2 className="h-5 w-5 text-brand-primary" />
          <h1 className="text-xl font-bold text-gray-900">Properties</h1>
          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-500">
            {properties.length}
          </span>
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by address…"
          className="mt-4 w-full max-w-sm rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
        />
      </div>

      <div className="hidden border-b border-gray-100 bg-gray-50 px-5 py-2 md:grid md:grid-cols-[2fr_1fr_1fr_auto]">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Address / Contact</p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Type</p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Pipeline</p>
        <span />
      </div>

      <div className="flex-1 overflow-auto bg-white">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-20 text-center">
            <Building2 className="h-8 w-8 text-gray-200" />
            <p className="text-sm text-gray-400">No properties found.</p>
          </div>
        ) : (
          filtered.map((p) => <PropertyRow key={p.id} property={p} />)
        )}
      </div>
    </div>
  )
}
