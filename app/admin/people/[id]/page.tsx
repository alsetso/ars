import { createClient } from '@/lib/supabase/server'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Phone, Mail, MapPin, GitPullRequestArrow, Fingerprint } from 'lucide-react'
import { PersonDetail } from '@/components/admin/PersonDetail'
import { ConfirmContactSection } from './ConfirmContactSection'
import { DeletePersonSection } from './DeletePersonSection'

const LABEL = 'text-[10px] font-bold uppercase tracking-widest text-gray-400'
const SEP   = 'border-t border-gray-100 pt-5 mt-5'

const STAGE_COLOR: Record<string, string> = {
  prospect: 'bg-sky-100 text-sky-700', lead: 'bg-blue-100 text-blue-700',
  estimate: 'bg-violet-100 text-violet-700', contracted: 'bg-amber-100 text-amber-700',
  active: 'bg-orange-100 text-orange-700', complete: 'bg-emerald-100 text-emerald-700',
  follow_up: 'bg-teal-100 text-teal-700', lost: 'bg-red-100 text-red-500',
  skipped: 'bg-gray-100 text-gray-400',
}

export default async function PersonDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const { data: person } = await supabase
    .from('people')
    .select(`
      *,
      property_contacts (
        id, role, is_primary,
        properties (
          id, full_address, street, city, state, zip, type,
          pipeline ( id, stage, services, created_at )
        )
      )
    `)
    .eq('id', params.id)
    .single()

  const { data: jobs } = await supabase
    .from('pipeline')
    .select(`
      id, stage, services, source, created_at, updated_at,
      properties ( full_address, street, city, state )
    `)
    .eq('primary_contact_id', params.id)
    .order('created_at', { ascending: false })

  if (!person) notFound()

  const initials  = (person.name ?? '?').split(' ').map((n: string) => n[0]).slice(0, 2).join('')
  const allLinks  = person.property_contacts ?? []
  const confirmed = allLinks.filter((c: { role: string }) => c.role !== 'candidate')
  const candidates = allLinks.filter((c: { role: string }) => c.role === 'candidate')
  const allJobs   = jobs ?? []
  const isTraced  = !!person.skip_trace_provider_id
  const openJobs  = allJobs.filter((j: { stage: string }) =>
    !['complete', 'lost', 'skipped'].includes(j.stage)
  ).length

  return (
    <div className="mx-auto max-w-2xl px-5 py-8">
      <Link href="/admin/people" className="mb-6 flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-700">
        <ArrowLeft className="h-3.5 w-3.5" /> People
      </Link>

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-base font-bold text-orange-600">
          {initials}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-gray-900">{person.name ?? 'No name'}</h1>
            {isTraced && (
              <span className="flex items-center gap-1 rounded-full bg-violet-50 px-2 py-0.5 text-[10px] font-semibold text-violet-600">
                <Fingerprint className="h-3 w-3" /> Skip traced
              </span>
            )}
          </div>
          <p className="text-xs text-gray-400">
            Added {new Date(person.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Contact info */}
      <div className={SEP}>
        <p className={`${LABEL} mb-2`}>Contact</p>
        <div className="space-y-1.5">
          {person.phone ? (
            <a href={`tel:${person.phone}`} className="flex items-center gap-2 text-sm text-orange-600 hover:underline">
              <Phone className="h-3.5 w-3.5 shrink-0 text-gray-400" />{person.phone}
            </a>
          ) : (
            <p className="flex items-center gap-2 text-xs text-gray-400">
              <Phone className="h-3.5 w-3.5 shrink-0" /> No phone on record
            </p>
          )}
          {person.email && (
            <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-sm text-gray-700 hover:underline">
              <Mail className="h-3.5 w-3.5 shrink-0 text-gray-400" />{person.email}
            </a>
          )}
          {person.extra_phones?.map((ph: string, i: number) => (
            <a key={i} href={`tel:${ph}`} className="flex items-center gap-2 text-sm text-orange-500 hover:underline">
              <Phone className="h-3.5 w-3.5 shrink-0 text-gray-300" />{ph}
              <span className="text-[10px] text-gray-400">additional</span>
            </a>
          ))}
          {person.extra_emails?.map((em: string, i: number) => (
            <a key={i} href={`mailto:${em}`} className="flex items-center gap-2 text-sm text-gray-600 hover:underline">
              <Mail className="h-3.5 w-3.5 shrink-0 text-gray-300" />{em}
              <span className="text-[10px] text-gray-400">additional</span>
            </a>
          ))}
        </div>
      </div>

      {/* Skip trace detail */}
      {isTraced && (
        <div className={SEP}>
          <p className={`${LABEL} mb-3 flex items-center gap-1`}>
            <Fingerprint className="h-3 w-3" /> Skip Trace Detail
          </p>
          <PersonDetail personId={person.id} name={person.name ?? ''} />
        </div>
      )}

      {/* Candidate properties — confirm or dismiss */}
      {candidates.length > 0 && (
        <div className={SEP}>
          <p className={`${LABEL} mb-1`}>Candidate for Properties</p>
          <p className="mb-3 text-[11px] text-gray-400">
            Found via skip trace. Confirm the role if this is the correct contact.
          </p>
          <div className="space-y-2">
            {candidates.map((c: { id: string; role: string; is_primary: boolean; properties: { id: string; full_address: string; street: string; city: string; state: string; type: string } }) => {
              const addr = c.properties?.full_address
                ?? [c.properties?.street, c.properties?.city, c.properties?.state].filter(Boolean).join(', ')
                ?? '—'
              return (
                <div key={c.id} className="rounded-xl border border-amber-200 bg-amber-50 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link href={`/admin/properties/${c.properties?.id}`} className="text-sm font-semibold text-gray-900 hover:text-brand-primary hover:underline">
                        {addr}
                      </Link>
                      <p className="mt-0.5 text-[10px] text-amber-600 font-medium">Unconfirmed candidate</p>
                    </div>
                  </div>
                  <ConfirmContactSection
                    personId={person.id}
                    propertyId={c.properties?.id}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Confirmed properties */}
      <div className={SEP}>
        <p className={`${LABEL} mb-2 flex items-center gap-1`}>
          <MapPin className="h-3 w-3" /> Properties ({confirmed.length})
        </p>
        {confirmed.length === 0 ? (
          <p className="text-xs text-gray-400">No confirmed properties linked.</p>
        ) : (
          <div className="space-y-3">
            {confirmed.map((c: { id: string; role: string; is_primary: boolean; properties: { id: string; full_address: string; street: string; city: string; state: string; type: string; pipeline: { id: string; stage: string; services: string[] }[] } }) => {
              const addr = c.properties?.full_address
                ?? [c.properties?.street, c.properties?.city, c.properties?.state].filter(Boolean).join(', ')
                ?? '—'
              return (
                <div key={c.id}>
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/properties/${c.properties?.id}`} className="text-sm font-semibold text-gray-900 hover:text-brand-primary hover:underline">
                      {addr}
                    </Link>
                    <span className="text-[10px] text-gray-400">{c.role}</span>
                    {c.is_primary && <span className="rounded-full bg-orange-100 px-1.5 py-0.5 text-[9px] font-bold text-orange-600">Primary</span>}
                  </div>
                  {c.properties?.pipeline?.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {c.properties.pipeline.slice(0, 3).map((job: { id: string; stage: string; services: string[] }) => (
                        <Link key={job.id} href={`/admin/pipeline/${job.id}`} className={`rounded-full px-2 py-0.5 text-[10px] font-semibold hover:opacity-75 ${STAGE_COLOR[job.stage] ?? 'bg-gray-100'}`}>
                          {job.stage}{job.services?.length > 0 ? ` · ${job.services[0]}` : ''}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Jobs as primary contact */}
      {allJobs.length > 0 && (
        <div className={SEP}>
          <p className={`${LABEL} mb-2 flex items-center gap-1`}>
            <GitPullRequestArrow className="h-3 w-3" /> Jobs as primary contact ({allJobs.length})
          </p>
          <div className="space-y-2">
            {allJobs.map((job: { id: string; stage: string; services: string[]; source: string; created_at: string; properties: { full_address: string; street: string; city: string; state: string }[] | null }) => {
              const prop = Array.isArray(job.properties) ? job.properties[0] : job.properties
              const jobAddr = prop?.full_address
                ?? [prop?.street, prop?.city, prop?.state].filter(Boolean).join(', ')
                ?? '—'
              return (
                <Link
                  key={job.id}
                  href={`/admin/pipeline/${job.id}`}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-1 px-1 rounded"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${STAGE_COLOR[job.stage] ?? 'bg-gray-100'}`}>
                        {job.stage}
                      </span>
                      <span className="text-xs text-gray-700">{jobAddr}</span>
                    </div>
                    <p className="mt-0.5 text-[10px] text-gray-400">
                      {job.services?.join(', ') || 'No services'} · {job.source} · {new Date(job.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                  <span className="text-xs text-gray-300">→</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Danger zone */}
      <div className={SEP}>
        <DeletePersonSection personId={person.id} openJobCount={openJobs} />
      </div>
    </div>
  )
}
