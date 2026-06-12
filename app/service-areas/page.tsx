import { PageLayout } from '@/components/layout/PageLayout'
import { Section } from '@/components/ui/Section'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { ReviewsBanner } from '@/components/sections/ReviewsBanner'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { cityToSlug } from '@/lib/city-utils'
import { MapPin, ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Roofing & Siding Service Areas — Minnesota & Wisconsin | Advanced Roofing',
  description: 'Advanced Roofing & Siding serves 50+ cities across Minnesota and Wisconsin. GAF Master Elite contractor offering roofing, siding, windows, gutters, and storm damage restoration. Free estimates.',
  keywords: [
    'Minnesota roofing contractor',
    'Wisconsin roofing contractor',
    'Twin Cities roofing company',
    'Anoka County roofer',
    'Minneapolis roofing',
    'St Paul roofing',
    'storm damage repair Minnesota',
    'GAF Master Elite Minnesota',
    'siding contractor Twin Cities',
    'roofing company near me Minnesota',
  ],
  alternates: {
    canonical: 'https://advancedroofingmn.com/service-areas',
  },
  openGraph: {
    title: 'Roofing & Siding Service Areas — Minnesota & Wisconsin',
    description: 'GAF Master Elite contractor serving 50+ cities across Minnesota and Wisconsin. Free estimates for roofing, siding, windows, gutters, and storm damage.',
    url: 'https://advancedroofingmn.com/service-areas',
    images: [{ url: 'https://advancedroofingmn.com/AFS-Logo900.png', width: 1200, height: 630, alt: 'Advanced Roofing & Siding Service Areas' }],
  },
}

// Regional groupings for SEO clustering
const MN_REGIONS = [
  {
    label: 'Twin Cities Metro',
    cities: ['Minneapolis', 'St. Paul', 'Bloomington', 'Eden Prairie', 'Edina', 'Maple Grove', 'Plymouth', 'Minnetonka', 'Woodbury', 'Burnsville', 'Lakeville', 'Eagan', 'Apple Valley', 'Hopkins', 'Golden Valley', 'Crystal', 'Brooklyn Park', 'Brooklyn Center'],
  },
  {
    label: 'Anoka County',
    cities: ['Anoka', 'Blaine', 'Champlin', 'Coon Rapids', 'Fridley', 'Ham Lake', 'Ramsey', 'Andover', 'Circle Pines', 'Dayton'],
  },
  {
    label: 'Northern & Western Suburbs',
    cities: ['Elk River', 'Rogers', 'Big Lake', 'Becker', 'Buffalo', 'Albertville', 'Arden Hills', 'Forest Lake', 'Bethel'],
  },
  {
    label: 'Greater Minnesota',
    cities: ['St. Cloud', 'Brainerd', 'Rochester', 'Cambridge', 'Chanhassen', 'Chaska', 'Cloquet'],
  },
]

const WI_CITIES = ['Hudson', 'River Falls', 'Somerset', 'New Richmond', 'Prescott', 'St Croix Falls']

const SERVICES = [
  { label: 'Roof Replacement', href: '/services/roofing' },
  { label: 'Siding Installation', href: '/services/siding' },
  { label: 'Window Replacement', href: '/services/windows' },
  { label: 'Gutter Installation', href: '/services/gutters' },
  { label: 'Storm Restoration', href: '/services/storm-restoration' },
  { label: 'Soffit & Fascia', href: '/services/soffit-fascia' },
]

function CityGrid({ cities, state }: { cities: string[]; state: 'mn' | 'wi' }) {
  return (
    <ul className="space-y-1.5">
      {cities.map((city) => (
        <li key={city}>
          <Link
            href={`/service-areas/${state}/${cityToSlug(city)}`}
            className="group flex items-center gap-1.5 text-sm text-gray-600 transition-colors hover:text-brand-primary"
          >
            <span className="h-1 w-1 shrink-0 rounded-full bg-gray-300 group-hover:bg-brand-primary transition-colors" />
            {city}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function ServiceAreasPage() {
  return (
    <PageLayout>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
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
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">Service Coverage</p>
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Roofing & Siding Services Across<br className="hidden sm:block" />
              Minnesota &amp; Wisconsin
            </h1>
            <p className="mb-6 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
              Advanced Roofing & Siding has served homeowners and businesses across the Twin Cities metro, greater Minnesota, and western Wisconsin since the early 1990s.
              As a <Link href="/resources/gaf-master-elite-contractor" className="font-semibold text-white hover:text-brand-primary transition-colors underline underline-offset-2">GAF Master Elite® contractor</Link>,
              we bring top-tier <Link href="/services/roofing" className="font-semibold text-white underline underline-offset-2 hover:text-brand-primary transition-colors">roofing</Link>,{' '}
              <Link href="/services/siding" className="font-semibold text-white underline underline-offset-2 hover:text-brand-primary transition-colors">siding</Link>,{' '}
              <Link href="/services/windows" className="font-semibold text-white underline underline-offset-2 hover:text-brand-primary transition-colors">windows</Link>, and{' '}
              <Link href="/resources/insurance-claims" className="font-semibold text-white underline underline-offset-2 hover:text-brand-primary transition-colors">insurance claim expertise</Link>{' '}
              to every city we serve — with free estimates and a 48-hour storm damage inspection guarantee.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-primary-dark">
                Get a Free Estimate
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${COMPANY_INFO.phone}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white/40">
                <Phone className="h-4 w-4" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* Services we offer in all areas */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p className="shrink-0 text-[11px] font-semibold uppercase tracking-widest text-gray-400">Services in every city</p>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 transition hover:border-brand-primary hover:text-brand-primary"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews banner */}
      <ReviewsBanner />

      {/* City directory */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">Where We Work</p>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Find Your City
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600 md:text-base">
              Click your city for a dedicated service page with local pricing context,{' '}
              <Link href="/resources/insurance-claims" className="font-medium text-brand-primary hover:underline">storm damage insurance guides</Link>,
              and free estimate scheduling.
            </p>
          </AnimatedDiv>

          {/* Minnesota — by region */}
          <div className="mb-10">
            <div className="mb-5 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-primary" strokeWidth={2} />
              <h3 className="text-base font-bold text-gray-900">Minnesota</h3>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500">{MN_REGIONS.reduce((a, r) => a + r.cities.length, 0)} cities</span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {MN_REGIONS.map((region) => (
                <AnimatedDiv
                  key={region.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                >
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">{region.label}</p>
                  <CityGrid cities={region.cities} state="mn" />
                </AnimatedDiv>
              ))}
            </div>
          </div>

          {/* Wisconsin */}
          <div className="mb-8">
            <div className="mb-5 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-primary" strokeWidth={2} />
              <h3 className="text-base font-bold text-gray-900">Wisconsin</h3>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500">{WI_CITIES.length} cities</span>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 md:max-w-sm">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">Western Wisconsin</p>
              <CityGrid cities={WI_CITIES} state="wi" />
            </div>
          </div>

          {/* Don't see your city */}
          <div className="rounded-xl border border-brand-primary/20 bg-brand-primary/5 p-5 md:flex md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-gray-900">Don't see your city?</p>
              <p className="mt-0.5 text-sm text-gray-600">We may still serve your area — contact us to find out.</p>
            </div>
            <div className="mt-3 flex gap-3 md:mt-0 md:shrink-0">
              <Link href="/contact" className="inline-flex items-center gap-1.5 rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-primary-dark">
                Contact Us
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a href={`tel:${COMPANY_INFO.phone}`} className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-brand-primary hover:text-brand-primary">
                <Phone className="h-3.5 w-3.5" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* SEO content block */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
              Local Roofing & Exterior Experts — Not a Storm-Chaser Operation
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-gray-600 md:text-base">
              <p>
                Advanced Roofing & Siding has been a fixture in the Twin Cities and greater Minnesota exterior market since the early 1990s.
                Unlike out-of-state storm-chaser crews that appear after major hail events and disappear before warranty issues arise,
                our team is locally based in <Link href="/service-areas/mn/anoka" className="font-medium text-brand-primary hover:underline">Anoka, Minnesota</Link> — meaning we're accountable for every project, every warranty, and every customer call for the long term.
              </p>
              <p>
                We hold a <Link href="/resources/gaf-master-elite-contractor" className="font-medium text-brand-primary hover:underline">GAF Master Elite® certification</Link> — the highest designation in the roofing industry, held by fewer than 2% of contractors nationwide.
                That certification unlocks the <Link href="/resources/warranties" className="font-medium text-brand-primary hover:underline">GAF Golden Pledge 50-year warranty</Link>, which covers both materials and workmanship and remains valid even if a contractor goes out of business.
              </p>
              <p>
                Whether you need a{' '}
                <Link href="/services/roofing" className="font-medium text-brand-primary hover:underline">full roof replacement</Link> after a{' '}
                <Link href="/resources/insurance-claims/hail-damage" className="font-medium text-brand-primary hover:underline">hail storm</Link>,{' '}
                <Link href="/services/siding" className="font-medium text-brand-primary hover:underline">new siding</Link> to improve curb appeal, or{' '}
                <Link href="/resources/insurance-claims" className="font-medium text-brand-primary hover:underline">insurance claim support</Link> after wind or{' '}
                <Link href="/resources/insurance-claims/ice-dam-snow-damage-claims" className="font-medium text-brand-primary hover:underline">ice dam damage</Link>,
                we bring the same level of documentation, professionalism, and accountability to every city we serve —
                from <Link href="/service-areas/mn/minneapolis" className="font-medium text-brand-primary hover:underline">Minneapolis</Link> to{' '}
                <Link href="/service-areas/mn/rochester" className="font-medium text-brand-primary hover:underline">Rochester</Link> to{' '}
                <Link href="/service-areas/wi/hudson" className="font-medium text-brand-primary hover:underline">Hudson, WI</Link>.
              </p>
            </div>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Insurance CTA */}
      <InsuranceClaimsCTA variant="compact" />

    </PageLayout>
  )
}
