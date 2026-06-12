import { PageLayout } from '@/components/layout/PageLayout'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { ReviewsBanner } from '@/components/sections/ReviewsBanner'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { WISCONSIN_CITIES, COMPANY_INFO } from '@/lib/constants'
import { cityToSlug } from '@/lib/city-utils'
import { MapPin, ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roofing & Siding Contractor — Western Wisconsin | Advanced Roofing & Siding',
  description: 'Advanced Roofing & Siding serves Hudson, River Falls, Somerset, New Richmond, Prescott, and surrounding western Wisconsin communities. GAF Master Elite® certified. Free inspections.',
  keywords: [
    'Wisconsin roofing contractor',
    'western Wisconsin roofing',
    'Hudson WI roofing contractor',
    'River Falls Wisconsin roofing',
    'Somerset WI roofer',
    'New Richmond Wisconsin roofing',
    'Prescott WI roofing company',
    'St Croix County roofing contractor',
    'western Wisconsin siding contractor',
    'Wisconsin storm damage roofing',
    'roof replacement Hudson WI',
    'GAF Master Elite Wisconsin',
    'hail damage roof repair Wisconsin',
    'Wisconsin exterior contractor',
  ],
  alternates: { canonical: 'https://advancedroofingmn.com/service-areas/wisconsin' },
  openGraph: {
    title: 'Roofing & Siding Services Across Western Wisconsin',
    description: 'GAF Master Elite certified contractor serving Hudson, River Falls, Somerset, New Richmond, Prescott, and western Wisconsin. Free inspections.',
    url: 'https://advancedroofingmn.com/service-areas/wisconsin',
    images: [{ url: 'https://advancedroofingmn.com/AFS-Logo900.png', width: 1200, height: 630, alt: 'Advanced Roofing & Siding — Wisconsin Service Areas' }],
  },
}

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
  { name: 'Wisconsin', url: 'https://advancedroofingmn.com/service-areas/wisconsin' },
]

export default function WisconsinServiceAreasPage() {
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
                <span className="text-white/60">Wisconsin</span>
              </div>
              <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Roofing & Siding Services in Western Wisconsin
              </h1>
              <p className="mb-8 max-w-2xl text-base text-white/70 sm:text-lg">
                Advanced Roofing & Siding serves Hudson, River Falls, Somerset, New Richmond, Prescott, and the greater St. Croix County area.{' '}
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
              <h2 className="text-xl font-bold text-gray-900 md:text-2xl">Western Wisconsin Service Area Cities</h2>
              <p className="mt-1 text-sm text-gray-500">
                Click any city for roofing, siding, and exterior services specific to that area.
              </p>
            </AnimatedDiv>

            <div className="max-w-sm">
              <AnimatedDiv initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-brand-primary" />
                    <h3 className="text-xs font-bold uppercase tracking-wide text-gray-700">St. Croix County & Surrounding Area</h3>
                  </div>
                  <ul className="space-y-2">
                    {WISCONSIN_CITIES.map((city) => (
                      <li key={city}>
                        <Link
                          href={`/service-areas/wi/${cityToSlug(city)}`}
                          className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-brand-primary"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-gray-300 group-hover:bg-brand-primary transition-colors" />
                          {city}, WI
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </section>

        {/* SEO content block */}
        <section className="bg-gray-50 py-12 md:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <AnimatedDiv initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Why Western Wisconsin Homeowners Choose Us
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  Western Wisconsin shares the same harsh weather conditions as the Twin Cities — hailstorms, high winds, ice dams, and heavy snow. As a{' '}
                  <Link href="/resources/gaf-master-elite-contractor" className="font-medium text-brand-primary hover:underline">GAF Master Elite® Certified contractor</Link>,
                  we bring the same quality, warranties, and insurance claim expertise to Wisconsin homeowners that Minnesota homeowners have trusted for 30+ years.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  Our team regularly handles{' '}
                  <Link href="/resources/insurance-claims/hail-damage" className="font-medium text-brand-primary hover:underline">hail damage claims</Link>{' '}
                  and{' '}
                  <Link href="/resources/insurance-claims/wind-damage" className="font-medium text-brand-primary hover:underline">wind damage restoration</Link>{' '}
                  across St. Croix County — working directly with Wisconsin homeowners' insurance carriers for documentation, adjuster coordination, and approved repairs.
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  Based in Anoka, MN — we're just across the border and fully licensed to operate in Wisconsin.{' '}
                  <Link href="/about" className="font-medium text-brand-primary hover:underline">30+ years of experience</Link>,{' '}
                  <Link href="/resources/reviews" className="font-medium text-brand-primary hover:underline">160+ five-star reviews</Link>, and the same crew that serves the Twin Cities metro.
                </p>
              </AnimatedDiv>

              <AnimatedDiv initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Services Available in Wisconsin
                </h2>
                <div className="space-y-3 text-sm text-gray-600">
                  {[
                    { label: 'Residential Roofing', href: '/who-we-serve/residential', desc: 'GAF shingles, storm damage claims, and full roof replacements.' },
                    { label: 'Siding Installation', href: '/services/siding', desc: 'LP SmartSide® and fiber cement siding for Wisconsin homes.' },
                    { label: 'Window Replacement', href: '/services/windows', desc: 'Energy-efficient windows with performance warranties.' },
                    { label: 'Storm Damage & Insurance', href: '/resources/insurance-claims', desc: 'Hail, wind, and ice dam claims — full adjuster support.' },
                    { label: 'Commercial Roofing', href: '/who-we-serve/commercial', desc: 'TPO, EPDM, and low-slope systems for WI commercial properties.' },
                    { label: 'Free Inspections', href: '/services/free-estimate', desc: 'No-obligation inspection with same-day estimates.' },
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
              <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">Serving Western Wisconsin</h2>
              <p className="mb-7 mx-auto max-w-xl text-sm text-white/70 md:text-base">
                Hudson, River Falls, Somerset, New Richmond, Prescott, St Croix Falls — free inspections, honest estimates, and same-day response for Wisconsin homeowners.
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
                <Link href="/service-areas/minnesota" className="hover:text-white/80 transition">Also serving all of Minnesota →</Link>
              </div>
            </AnimatedDiv>
          </div>
        </section>

        <InsuranceClaimsCTA variant="compact" />
      </PageLayout>
    </>
  )
}
