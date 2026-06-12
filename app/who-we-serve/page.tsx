import { PageLayout } from '@/components/layout/PageLayout'
import { Section } from '@/components/ui/Section'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { ReviewsBanner } from '@/components/sections/ReviewsBanner'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import {
  Building2, Users, Home, Shield, ArrowRight, Award,
  BadgeCheck, CheckCircle, Briefcase, HardHat, Phone,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Who We Serve — Residential, Commercial, HOA & More | Advanced Roofing & Siding',
  description: 'Advanced Roofing & Siding serves homeowners, commercial property owners, HOAs, property managers, municipalities, and real estate professionals across Minnesota and Wisconsin. GAF Master Elite certified.',
  keywords: [
    'residential roofing contractor Minnesota',
    'commercial roofing contractor Minnesota',
    'HOA roofing Minnesota',
    'property management roofing Minnesota',
    'municipal roofing contractor',
    'real estate roofing contractor',
    'roofing contractor who we serve',
  ],
  alternates: {
    canonical: 'https://advancedroofingmn.com/who-we-serve',
  },
  openGraph: {
    title: 'Who We Serve | Advanced Roofing & Siding Inc.',
    description: 'Specialized roofing and exterior solutions for homeowners, commercial properties, HOAs, property managers, municipalities, and real estate professionals.',
    url: 'https://advancedroofingmn.com/who-we-serve',
  },
}

const TRUST_BADGES = [
  { icon: Shield, label: 'GAF Master Elite®', sub: 'Top 2% nationwide', href: '/resources/gaf-master-elite-contractor' },
  { icon: Award, label: '30+ Years', sub: 'MN & WI experience', href: '/about' },
  { icon: BadgeCheck, label: 'A+ BBB Rating', sub: 'Accredited since 2007', href: '/resources/reviews' },
  { icon: CheckCircle, label: 'Licensed & Insured', sub: `License #${COMPANY_INFO.license}`, href: '/resources/warranties' },
]

const MARKETS = [
  {
    id: 'residential',
    title: 'Residential Homeowners',
    subtitle: 'Your home is your biggest investment.',
    href: '/who-we-serve/residential',
    icon: Home,
    accentColor: 'bg-brand-primary',
    bullets: [
      'Full roof and siding replacements',
      'Storm damage + insurance claim advocacy',
      'GAF Golden Pledge 50-year warranty',
      'Single-day installs on most homes',
      'Free inspection, no pressure',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Properties',
    subtitle: 'Minimal disruption. Maximum accountability.',
    href: '/who-we-serve/commercial',
    icon: Briefcase,
    accentColor: 'bg-gray-800',
    bullets: [
      'Retail, office, warehouse & restaurant roofs',
      'EPDM / TPO flat roof systems',
      'Work scheduled around business hours',
      'Insurance-grade documentation for large claims',
      'Dedicated project manager per job',
    ],
  },
  {
    id: 'hoa',
    title: 'Homeowner Associations',
    subtitle: 'Consistent quality across every building.',
    href: '/who-we-serve/hoa',
    icon: Building2,
    accentColor: 'bg-brand-primary',
    bullets: [
      'Multi-unit coordinated scheduling',
      'Matching materials across all elevations',
      'HOA board meeting presentations',
      'Insurance claim support for entire associations',
      'Bulk project pricing available',
    ],
  },
  {
    id: 'property-manager',
    title: 'Property Managers',
    subtitle: 'One call, one crew, one point of contact.',
    href: '/who-we-serve/property-manager',
    icon: Building2,
    accentColor: 'bg-gray-800',
    bullets: [
      'Multi-property portfolio management',
      'Priority scheduling for urgent repairs',
      'Detailed scope + invoice documentation',
      'Emergency response for active leaks',
      'Annual inspection programs available',
    ],
  },
  {
    id: 'municipal',
    title: 'Municipal & Government',
    subtitle: 'Public trust. Code compliance. On-time delivery.',
    href: '/who-we-serve/municipal',
    icon: HardHat,
    accentColor: 'bg-brand-primary',
    bullets: [
      'City halls, fire stations, public buildings',
      'Prevailing wage compliance when required',
      'Detailed bid + documentation packages',
      'MN & WI licensed & fully insured',
      'Long-term vendor relationships welcome',
    ],
  },
  {
    id: 'agent',
    title: 'Real Estate Professionals',
    subtitle: 'Fast turnarounds built around your closing dates.',
    href: '/who-we-serve/agent',
    icon: Users,
    accentColor: 'bg-gray-800',
    bullets: [
      'Pre-listing roof & siding inspections',
      'Rapid estimates for inspection contingencies',
      'Buyer/seller repair addendum support',
      'Investor rehab pricing available',
      'Works with all major lenders & title cos.',
    ],
  },
]

export default function WhoWeServePage() {
  return (
    <PageLayout>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Who We Serve', url: '/who-we-serve' },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-secondary">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <AnimatedDiv
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">Who We Serve</p>
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Expert Exterior Services for Every Client Type
            </h1>
            <p className="mb-6 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
              Whether you're a homeowner navigating your first{' '}
              <Link href="/resources/insurance-claims" className="font-semibold text-white underline underline-offset-2 hover:text-brand-primary transition-colors">insurance claim</Link>,
              an HOA board managing dozens of roofs, or a commercial property owner who needs zero downtime —
              Advanced Roofing & Siding brings 30+ years of local expertise and a{' '}
              <Link href="/resources/gaf-master-elite-contractor" className="font-semibold text-white underline underline-offset-2 hover:text-brand-primary transition-colors">GAF Master Elite® certification</Link>{' '}
              to every project in <Link href="/service-areas/minnesota" className="font-semibold text-white underline underline-offset-2 hover:text-brand-primary transition-colors">Minnesota</Link> and{' '}
              <Link href="/service-areas/wisconsin" className="font-semibold text-white underline underline-offset-2 hover:text-brand-primary transition-colors">Wisconsin</Link>.
            </p>

            {/* Market quick-nav pills */}
            <div className="mb-8 flex flex-wrap gap-2">
              {MARKETS.map((m) => (
                <Link
                  key={m.id}
                  href={m.href}
                  className="rounded-full border border-white/20 px-3.5 py-1.5 text-xs font-semibold text-white/80 transition hover:border-brand-primary hover:text-white"
                >
                  {m.title}
                </Link>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {TRUST_BADGES.map(({ icon: Icon, label, sub, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition hover:border-brand-primary/50 hover:bg-white/10"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-brand-primary" />
                  <div>
                    <p className="text-[11px] font-bold text-white">{label}</p>
                    <p className="text-[10px] text-white/50">{sub}</p>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* Reviews banner */}
      <ReviewsBanner />

      {/* Market cards */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">Markets</p>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Specialized for Your Situation</h2>
            <p className="mt-1.5 max-w-xl text-sm text-gray-500">
              Every client type has different priorities — timelines, insurance processes, board approvals, tenant considerations.
              We know them all.
            </p>
          </AnimatedDiv>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MARKETS.map((market, i) => {
              const Icon = market.icon
              return (
                <AnimatedDiv
                  key={market.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-soft transition hover:shadow-md"
                >
                  {/* Card header */}
                  <div className="flex items-start gap-3 p-5 pb-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${market.accentColor}`}>
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                        {market.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">{market.subtitle}</p>
                    </div>
                  </div>

                  {/* Bullet list */}
                  <ul className="flex-1 space-y-1.5 px-5 pb-5">
                    {market.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="border-t border-gray-100 px-5 py-3.5">
                    <Link
                      href={market.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition hover:gap-2.5"
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-all" />
                    </Link>
                  </div>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Insurance CTA */}
      <InsuranceClaimsCTA variant="compact" />

      {/* Closing CTA */}
      <section className="bg-brand-secondary py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedDiv
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">Get Started</p>
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Not Sure Which Category Fits You?
            </h2>
            <p className="mb-7 text-sm text-white/70 md:text-base max-w-xl mx-auto">
              Just call or submit a request — we'll ask a few questions and match you with the right
              service approach for your property and situation.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-primary-dark">
                  Get a Free Estimate
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-white/40"
              >
                <Phone className="h-4 w-4" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </AnimatedDiv>
        </div>
      </section>
    </PageLayout>
  )
}
