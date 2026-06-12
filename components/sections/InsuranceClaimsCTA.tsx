'use client'

import { Section } from '@/components/ui/Section'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { COMPANY_INFO } from '@/lib/constants'
import {
  Shield,
  CheckCircle,
  Phone,
  ArrowRight,
  Clock,
  FileSearch,
  Users,
  BadgeCheck,
  Wrench,
  DollarSign,
} from 'lucide-react'
import Link from 'next/link'

interface InsuranceClaimsCTAProps {
  variant?: 'default' | 'compact' | 'banner'
  showTitle?: boolean
}

const DAMAGE_TYPES = [
  { label: 'Hail Damage', href: '/resources/insurance-claims/hail-damage' },
  { label: 'Wind Damage', href: '/resources/insurance-claims/wind-damage' },
  { label: 'Ice Dam & Snow', href: '/resources/insurance-claims/ice-dam-snow-damage-claims' },
  { label: 'Tree Damage', href: '/resources/insurance-claims/tree-damage' },
  { label: 'Old Roof', href: '/resources/insurance-claims/old-roof' },
]

const CLAIM_STEPS = [
  { icon: FileSearch, label: 'Free Inspection' },
  { icon: Users, label: 'Adjuster Meeting' },
  { icon: BadgeCheck, label: 'Claim Approval' },
  { icon: Wrench, label: 'Restoration' },
  { icon: DollarSign, label: 'Final Payment' },
]

const STATS = [
  { value: '48-Hr', label: 'Inspection Guarantee' },
  { value: '100%', label: 'Adjuster Attendance' },
  { value: '30+', label: 'Years Experience' },
]

/** Banner variant — slim urgent strip, place just below page hero */
function BannerVariant() {
  return (
    <div className="bg-brand-secondary border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3.5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="text-sm font-bold text-white">
                Storm Damage? We Handle Insurance Claims.
              </span>
              <span className="ml-2 hidden text-sm text-white/60 sm:inline">
                Free inspection · Adjuster representation · 48-hr guarantee
              </span>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Button variant="primary" size="sm" className="group">
                <Phone className="mr-1.5 h-3.5 w-3.5" />
                Call Now
              </Button>
            </a>
            <Link href="/resources/insurance-claims">
              <Button variant="secondary" size="sm">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Compact variant — full-width strip on service/who-we-serve pages */
function CompactVariant() {
  return (
    <div className="border-y border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="mb-0.5 text-base font-bold text-gray-900">
              Storm Damage? We Handle Insurance Claims
            </h3>
            <p className="text-sm text-gray-600">
              Free inspection · Adjuster representation · 48-hr guarantee
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {DAMAGE_TYPES.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[11px] font-medium text-gray-600 transition hover:border-brand-primary hover:text-brand-primary"
                >
                  {d.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Link href="/resources/insurance-claims">
            <Button variant="primary" size="sm" className="w-full sm:w-auto">
              Learn More
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </Link>
          <a href={`tel:${COMPANY_INFO.phone}`}>
            <Button variant="secondary" size="sm" className="w-full sm:w-auto">
              <Phone className="mr-1.5 h-3.5 w-3.5" />
              {COMPANY_INFO.phone}
            </Button>
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export function InsuranceClaimsCTA({ variant = 'default', showTitle = true }: InsuranceClaimsCTAProps) {
  if (variant === 'banner') return <BannerVariant />
  if (variant === 'compact') return <CompactVariant />

  // Default — full section
  return (
    <Section className="bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <AnimatedDiv
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

            {/* Left — content */}
            <div className="flex flex-col justify-center">
              {showTitle && (
                <>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">
                    Insurance Claim Assistance
                  </p>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
                    Storm Damage?{' '}
                    <span className="text-brand-primary">We Handle the Claim</span>{' '}
                    So You Don't Have To.
                  </h2>
                </>
              )}

              <p className="mb-5 text-sm leading-relaxed text-gray-700 md:text-base">
                Most homeowners leave thousands on the table because their contractor
                doesn't attend the adjuster meeting or document damage correctly.
                Advanced Roofing & Siding{' '}
                <Link href="/resources/insurance-claims" className="font-semibold text-brand-primary hover:underline">
                  advocates for you
                </Link>{' '}
                from inspection to final payment — on every{' '}
                <Link href="/services/roofing" className="font-semibold text-brand-primary hover:underline">roof</Link>,{' '}
                <Link href="/services/siding" className="font-semibold text-brand-primary hover:underline">siding</Link>, and{' '}
                <Link href="/services/gutters" className="font-semibold text-brand-primary hover:underline">gutter</Link>{' '}
                claim across Minnesota and Wisconsin.
              </p>

              {/* Checklist */}
              <ul className="mb-6 space-y-2.5">
                {[
                  'Free storm damage inspection within 48 hours',
                  'Licensed project manager attends every adjuster meeting',
                  'Full photo + video documentation at insurance-grade standards',
                  'We reopen denied or underpaid claims',
                  'No surprises — full deductible & supplement breakdown upfront',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-brand-primary">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Damage type links */}
              <div className="mb-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Damage Type Guides
                </p>
                <div className="flex flex-wrap gap-2">
                  {DAMAGE_TYPES.map((d) => (
                    <Link
                      key={d.href}
                      href={d.href}
                      className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 transition hover:border-brand-primary hover:text-brand-primary"
                    >
                      {d.label} →
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <Link href="/resources/insurance-claims">
                  <Button variant="primary" size="md" className="group w-full sm:w-auto">
                    Our Claim Process
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  <Button variant="secondary" size="md" className="w-full sm:w-auto">
                    <Phone className="mr-2 h-4 w-4" />
                    {COMPANY_INFO.phone}
                  </Button>
                </a>
              </div>
            </div>

            {/* Right — visual claim flow + stats */}
            <div className="flex flex-col gap-4">

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-soft"
                  >
                    <p className="text-xl font-bold text-brand-primary md:text-2xl">{s.value}</p>
                    <p className="mt-0.5 text-[11px] font-semibold text-gray-600 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Claim process strip */}
              <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-soft">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                  How the Claim Works
                </p>
                <div className="flex items-start gap-0">
                  {CLAIM_STEPS.map((step, i) => (
                    <div key={step.label} className="flex flex-1 flex-col items-center">
                      <div className="relative flex w-full items-center justify-center">
                        {i > 0 && (
                          <div className="absolute left-0 top-1/2 h-0.5 w-1/2 -translate-y-1/2 bg-gray-100" />
                        )}
                        {i < CLAIM_STEPS.length - 1 && (
                          <div className="absolute right-0 top-1/2 h-0.5 w-1/2 -translate-y-1/2 bg-gray-100" />
                        )}
                        <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary/10 ring-2 ring-brand-primary/20">
                          <step.icon className="h-4 w-4 text-brand-primary" strokeWidth={1.75} />
                        </div>
                      </div>
                      <p className="mt-2 text-center text-[10px] font-semibold leading-tight text-gray-600">
                        {step.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pull quote from a real review */}
              <div className="rounded-xl border-l-4 border-brand-primary bg-white p-4 shadow-soft">
                <p className="text-sm italic leading-relaxed text-gray-700">
                  "They fought until it was approved for the roof and siding replacement. Their
                  experience working with the insurance company was evident as they advocated for
                  our best interests."
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary text-[11px] font-bold text-white">
                    AA
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Abe Ambriz</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="ml-auto text-[10px] text-gray-400">Google Review</span>
                </div>
              </div>

              {/* 48-hr urgency badge */}
              <div className="flex items-center gap-3 rounded-xl border border-brand-primary/20 bg-brand-primary/5 p-3.5">
                <Clock className="h-5 w-5 shrink-0 text-brand-primary" />
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-gray-900">48-hour inspection guarantee</span>
                  {' '}— we're on-site fast after any storm event across{' '}
                  <Link href="/service-areas" className="font-semibold text-brand-primary hover:underline">
                    Minnesota & Wisconsin
                  </Link>.
                </p>
              </div>

            </div>
          </div>
        </AnimatedDiv>
      </div>
    </Section>
  )
}
