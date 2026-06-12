import { PageLayout } from '@/components/layout/PageLayout'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { ReviewsBanner } from '@/components/sections/ReviewsBanner'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { MINNESOTA_CITIES, COMPANY_INFO } from '@/lib/constants'
import { cityToSlug } from '@/lib/city-utils'
import { MapPin, ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roofing & Siding Contractor — Minnesota | Advanced Roofing & Siding',
  description: 'Advanced Roofing & Siding serves 40+ cities across Minnesota — Twin Cities metro, Anoka County, northern suburbs, and greater MN. GAF Master Elite® certified. Free inspections.',
  keywords: [
    'Minnesota roofing contractor',
    'Twin Cities roofing company',
    'Anoka County roofer',
    'Minneapolis roofing contractor',
    'St Paul roofing company',
    'Minnesota siding contractor',
    'GAF Master Elite Minnesota',
    'storm damage roofing MN',
    'roof replacement contractor Minnesota',
    'hail damage roof repair MN',
    'Minnesota exterior contractor',
    'roofing company near me Minnesota',
  ],
  alternates: { canonical: 'https://advancedroofingmn.com/service-areas/minnesota' },
  openGraph: {
    title: 'Roofing & Siding Services Across Minnesota',
    description: 'GAF Master Elite certified contractor serving 40+ cities across Minnesota — from the Twin Cities metro to greater MN. Free inspections.',
    url: 'https://advancedroofingmn.com/service-areas/minnesota',
    images: [{ url: 'https://advancedroofingmn.com/AFS-Logo900.png', width: 1200, height: 630, alt: 'Advanced Roofing & Siding — Minnesota Service Areas' }],
  },
}

const REGIONS = [
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

const SERVICES = [
  { label: 'Roof Replacement', href: '/services/roofing' },
  { label: 'Storm Damage & Insurance Claims', href: '/resources/insurance-claims' },
  { label: 'Siding Installation', href: '/services/siding' },
  { label: 'Window Replacement', href: '/services/windows' },
  { label: 'Gutter Systems', href: '/services/gutters' },
  { label: 'Storm Restoration', href: '/services/storm-restoration' },
]

const breadcrumbs = [
  { name: 'Home', url: 'https://advancedroofingmn.com' },
  { name: 'Service Areas', url: 'https://advancedroofingmn.com/service-areas' },
  { name: 'Minnesota', url: 'https://advancedroofingmn.com/service-areas/minnesota' },
]

export default function MinnesotaServiceAreasPage() {
  return (
    <>
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      <PageLayout>

        {/* Hero */}
        <section className="bg-brand-secondary py-14 md:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedDiv initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">
                <Link href="/service-areas" className="hover:text-red-400 transition-colors">Service Areas</Link>
                <span className="text-white/30">/</span>
                <span className="text-white/60">Minnesota</span>
              </div>
              <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Roofing & Siding Services Across Minnesota
              </h1>
              <p className="mb-8 max-w-2xl text-base text-white/70 sm:text-lg">
                Advanced Roofing & Siding serves 40+ cities across the Twin Cities metro, Anoka County, and greater Minnesota.{' '}
                <Link href="/resources/gaf-master-elite-contractor" className="text-white/90 underline underline-offset-2 hover:text-white">GAF Master Elite® Certified</Link>{' '}
                — roofing, siding, windows, and{' '}
                <Link href="/resources/insurance-claims" className="text-white/90 underline underline-offset-2 hover:text-white">storm damage insurance claims</Link>.
              </p>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map(({ label, href }) => (
                  <Link key={label} href={href} className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white/70 transition hover:border-brand-primary hover:text-white">
                    {label}
                  </Link>
                ))}
              </div>
            </AnimatedDiv>
          </div>
        </section>

        <ReviewsBanner />

        {/* City directory */}
        <section className="bg-white py-12 md:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedDiv initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 md:text-2xl">Minnesota Service Area Cities</h2>
              <p className="mt-1 text-sm text-gray-500">
                Click any city for roofing, siding, and exterior services specific to that area.
              </p>
            </AnimatedDiv>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {REGIONS.map((region, ri) => (
                <AnimatedDiv key={region.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: ri * 0.07 }}>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-brand-primary" />
                      <h3 className="text-xs font-bold uppercase tracking-wide text-gray-700">{region.label}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {region.cities.map((city) => (
                        <li key={city}>
                          <Link
                            href={`/service-areas/mn/${cityToSlug(city)}`}
                            className="group flex items-center gap-1.5 text-sm text-gray-600 transition-colors hover:text-brand-primary"
                          >
                            <span className="h-1 w-1 shrink-0 rounded-full bg-gray-300 group-hover:bg-brand-primary transition-colors" />
                            {city}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </section>

        {/* SEO content block */}
        <section className="bg-gray-50 py-12 md:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <AnimatedDiv initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Minnesota's Roofing & Exterior Experts
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  Minnesota's climate is one of the most demanding for exterior contractors in the country — hailstorms, ice dams, freeze-thaw cycles, and heavy snow loads challenge every roof and siding system year after year.
                  As a{' '}
                  <Link href="/resources/gaf-master-elite-contractor" className="font-medium text-brand-primary hover:underline">GAF Master Elite® Certified contractor</Link>{' '}
                  (top 3% nationwide), Advanced Roofing & Siding delivers roofing systems built to handle it — with{' '}
                  <Link href="/resources/warranties" className="font-medium text-brand-primary hover:underline">50-year warranty options</Link>{' '}
                  and 30+ years of Minnesota-specific experience.
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  We specialize in{' '}
                  <Link href="/resources/insurance-claims/hail-damage" className="font-medium text-brand-primary hover:underline">hail damage claims</Link>,{' '}
                  <Link href="/resources/insurance-claims/wind-damage" className="font-medium text-brand-primary hover:underline">wind damage restoration</Link>, and{' '}
                  <Link href="/resources/insurance-claims/ice-dam-snow-damage-claims" className="font-medium text-brand-primary hover:underline">ice dam repairs</Link>{' '}
                  — the three most common insurance claims for Minnesota homeowners. Our team handles documentation, adjuster coordination, and approved repairs from start to finish.
                </p>
              </AnimatedDiv>

              <AnimatedDiv initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Who We Serve in Minnesota
                </h2>
                <div className="space-y-3 text-sm text-gray-600">
                  {[
                    { label: 'Homeowners', href: '/who-we-serve/residential', desc: 'Roof replacements, siding, windows, and storm claims for MN homeowners.' },
                    { label: 'HOAs & Condo Associations', href: '/who-we-serve/hoa', desc: 'Multi-building community roofing with board presentation packages.' },
                    { label: 'Property Managers', href: '/who-we-serve/property-manager', desc: 'Scalable roofing for apartments, townhomes, and rental portfolios.' },
                    { label: 'Commercial Properties', href: '/who-we-serve/commercial', desc: 'TPO, EPDM, and flat roofing for MN businesses and facilities.' },
                    { label: 'Real Estate Professionals', href: '/who-we-serve/agent', desc: 'Pre-listing inspections, certifications, and fast turnaround replacements.' },
                    { label: 'Municipal & Government', href: '/who-we-serve/municipal', desc: 'Licensed, insured roofing for public buildings and city facilities.' },
                  ].map(({ label, href, desc }) => (
                    <Link key={label} href={href} className="group flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-3 transition hover:border-brand-primary">
                      <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-primary group-hover:translate-x-0.5 transition-transform" />
                      <div>
                        <span className="block text-xs font-semibold text-gray-900 group-hover:text-brand-primary transition-colors">{label}</span>
                        <span className="text-xs text-gray-500">{desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-brand-secondary py-14 md:py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <AnimatedDiv initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">Free Inspection</p>
              <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">Serving All of Minnesota</h2>
              <p className="mb-7 mx-auto max-w-xl text-sm text-white/70 md:text-base">
                From the Twin Cities to Rochester, St. Cloud, and beyond — free inspections, honest estimates, and same-day response for Minnesota homeowners and property owners.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-primary-dark">
                    Get a Free Estimate <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <a href={`tel:${COMPANY_INFO.phone}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-white/40">
                  <Phone className="h-4 w-4" /> {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
                <Link href="/service-areas/wisconsin" className="hover:text-white/80 transition">Also serving Western Wisconsin →</Link>
              </div>
            </AnimatedDiv>
          </div>
        </section>

        <InsuranceClaimsCTA variant="compact" />
      </PageLayout>
    </>
  )
}
