import { createClient } from '@/lib/supabase/server'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, MapPin, Phone, Mail, GitPullRequestArrow, Users, Fingerprint } from 'lucide-react'
import { SkipTraceResults } from '@/components/admin/SkipTraceResults'
import { parseSkipTraceAddress } from '@/lib/skip-trace/utils'
import { DeletePropertySection } from './DeletePropertySection'

const LABEL = 'text-[10px] font-bold uppercase tracking-widest text-gray-400'
const SEP   = 'border-t border-gray-100 pt-5 mt-5'

const STAGE_COLOR: Record<string, string> = {
  prospect: 'bg-sky-100 text-sky-700', lead: 'bg-blue-100 text-blue-700',
  estimate: 'bg-violet-100 text-violet-700', contracted: 'bg-amber-100 text-amber-700',
  active: 'bg-orange-100 text-orange-700', complete: 'bg-emerald-100 text-emerald-700',
  follow_up: 'bg-teal-100 text-teal-700', lost: 'bg-red-100 text-red-500',
  skipped: 'bg-gray-100 text-gray-400',
}

export default async function PropertyDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const { data: property } = await supabase
    .from('properties')
    .select(`
      *,
      property_contacts (
        id, role, is_primary,
        people ( id, name, phone, email, extra_phones, extra_emails )
      ),
      pipeline (
        id, stage, services, visible_issues, source,
        created_at, updated_at, closed_at,
        staff!pipeline_assigned_to_fkey ( full_name )
      ),
      skip_trace_runs (
        id, created_at, status, records_found, provider
      )
    `)
    .eq('id', params.id)
    .single()

  if (!property) notFound()

  const address = property.full_address
    ?? [property.street, property.city, property.state, property.zip].filter(Boolean).join(', ')
    ?? '—'

  const skipAddr = parseSkipTraceAddress(property.full_address ?? null)
  const contacts = (property.property_contacts ?? []).filter(
    (c: { role: string }) => c.role !== 'candidate'
  )
  const jobs     = property.pipeline ?? []
  const traces   = property.skip_trace_runs ?? []
  const openJobs = jobs.filter((j: { stage: string }) =>
    !['complete', 'lost', 'skipped'].includes(j.stage)
  ).length

  return (
    <div className="mx-auto max-w-2xl px-5 py-8">
      <Link href="/admin/properties" className="mb-6 flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-700">
        <ArrowLeft className="h-3.5 w-3.5" /> Properties
      </Link>

      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-gray-900 leading-snug">{address}</h1>
        </div>
        <p className="mt-0.5 text-xs text-gray-400">
          {property.type}
          {property.lat && ` · ${property.lat.toFixed(5)}, ${property.lng?.toFixed(5)}`}
          {' · added '}
          {new Date(property.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      {/* Address detail */}
      <div className={SEP}>
        <p className={`${LABEL} mb-2`}>Address</p>
        <div className="flex items-start gap-1.5">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
          <div className="text-sm text-gray-800 space-y-0.5">
            {property.street && <p>{property.street}</p>}
            <p>{[property.city, property.state, property.zip].filter(Boolean).join(', ')}</p>
          </div>
        </div>
      </div>

      {/* People / Contacts */}
      <div className={SEP}>
        <p className={`${LABEL} mb-2 flex items-center gap-1`}>
          <Users className="h-3 w-3" /> People
        </p>
        {contacts.length === 0 ? (
          <p className="text-xs text-gray-400">No contacts linked to this property.</p>
        ) : (
          <div className="space-y-3">
            {contacts.map((c: { id: string; role: string; is_primary: boolean; people: { id: string; name: string; phone: string; email: string; extra_phones: string[]; extra_emails: string[] } }) => (
              <div key={c.id} className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/people/${c.people?.id}`} className="text-sm font-semibold text-gray-900 hover:text-brand-primary hover:underline">
                      {c.people?.name ?? '—'}
                    </Link>
                    <span className="text-[10px] text-gray-400">{c.role}</span>
                    {c.is_primary && <span className="rounded-full bg-orange-100 px-1.5 py-0.5 text-[9px] font-bold text-orange-600">Primary</span>}
                  </div>
                  <div className="mt-0.5 flex flex-wrap gap-x-4">
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
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pipeline jobs */}
      <div className={SEP}>
        <p className={`${LABEL} mb-2 flex items-center gap-1`}>
          <GitPullRequestArrow className="h-3 w-3" /> Jobs ({jobs.length})
        </p>
        {jobs.length === 0 ? (
          <p className="text-xs text-gray-400">No pipeline records for this property.</p>
        ) : (
          <div className="space-y-2">
            {jobs.map((job: { id: string; stage: string; services: string[]; source: string; created_at: string; updated_at: string; staff: { full_name: string } | null }) => (
              <Link
                key={job.id}
                href={`/admin/pipeline/${job.id}`}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-1 px-1 rounded"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${STAGE_COLOR[job.stage] ?? 'bg-gray-100 text-gray-500'}`}>
                      {job.stage}
                    </span>
                    <span className="text-xs text-gray-600">
                      {job.services?.join(', ') || 'No services'}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[10px] text-gray-400">
                    {job.source} · {new Date(job.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    {job.staff?.full_name && ` · ${job.staff.full_name}`}
                  </p>
                </div>
                <span className="text-xs text-gray-300">→</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Skip trace — unified section (history + results) */}
      {skipAddr && (
        <div className={SEP}>
          <p className={`${LABEL} mb-2 flex items-center gap-1`}>
            <Fingerprint className="h-3 w-3" /> Skip Trace
          </p>
          <SkipTraceResults
            propertyId={property.id}
            street={skipAddr.street}
            citystatezip={skipAddr.citystatezip}
            fullAddress={property.full_address ?? undefined}
            runs={traces}
          />
        </div>
      )}

      {/* Danger zone */}
      <div className={SEP}>
        <DeletePropertySection propertyId={property.id} openJobCount={openJobs} />
      </div>
    </div>
  )
}
