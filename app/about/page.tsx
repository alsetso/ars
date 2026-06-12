import { PageLayout } from '@/components/layout/PageLayout'
import { Section } from '@/components/ui/Section'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { ReviewsBanner } from '@/components/sections/ReviewsBanner'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { COMPANY_INFO } from '@/lib/constants'
import {
  Shield, Award, BadgeCheck, CheckCircle, ArrowRight,
  Phone, Star, MapPin, Home, Building2, Users, Landmark,
  KeySquare, Handshake,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us — 30+ Years Serving Minnesota & Wisconsin | Advanced Roofing & Siding',
  description: 'Advanced Roofing & Siding Inc. — GAF Master Elite certified, A+ BBB rated, family-owned roofing and siding contractor serving Minnesota and Wisconsin since the early 1990s. Free estimates.',
  keywords: [
    'about advanced roofing siding',
    'Minnesota roofing company history',
    'GAF Master Elite contractor Minnesota',
    'family owned roofing contractor',
    'Anoka MN roofing contractor',
    'Minnesota exterior contractor',
    'Wisconsin roofing company',
    'A+ BBB roofing contractor',
  ],
  alternates: {
    canonical: 'https://advancedroofingmn.com/about',
  },
  openGraph: {
    title: 'About Us — 30+ Years Serving Minnesota & Wisconsin',
    description: 'GAF Master Elite certified, A+ BBB rated, family-owned roofing and siding contractor serving MN & WI since the early 1990s.',
    url: 'https://advancedroofingmn.com/about',
    images: [{ url: 'https://advancedroofingmn.com/AFS-Logo900.png', width: 1200, height: 630, alt: 'About Advanced Roofing & Siding Inc.' }],
  },
}

const STATS = [
  { value: '30+', label: 'Years in Business', icon: Award },
  { value: '160+', label: 'Google Reviews', icon: Star },
  { value: 'Top 2%', label: 'GAF Master Elite®', icon: Shield },
  { value: 'A+', label: 'BBB Since 2007', icon: BadgeCheck },
]

const CREDENTIALS = [
  { label: 'GAF Master Elite® Certified', href: '/resources/gaf-master-elite-contractor' },
  { label: 'GAF Golden Pledge 50-Year Warranty', href: '/resources/warranties' },
  { label: 'A+ BBB Accredited Since 2007', href: '/resources/reviews' },
  { label: 'MN License #BC630441', href: null },
  { label: 'WI License #2992-DCRF', href: null },
  { label: 'Fully Licensed & Insured', href: null },
  { label: '48-Hour Storm Inspection Guarantee', href: '/resources/insurance-claims' },
]

const GALLERY_IMAGES = [
  '/gallery/340661788_241238031731100_708703886642482358_n.webp',
  '/gallery/310571525_636102627992261_6745535343486299305_n.webp',
  '/gallery/315336128_671806221088568_2626046884352502994_n.webp',
  '/gallery/351499412_645224983741699_6973171527731469674_n.webp',
  '/gallery/380156327_905711167698071_326976560032986429_n.webp',
  '/gallery/261311101_408550814080778_7104520534060364107_n.webp',
]

export default function AboutPage() {
  return (
    <PageLayout>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' },
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
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="h-3.5 w-3.5 text-brand-primary" />
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
                Based in {COMPANY_INFO.location} · Serving MN & WI
              </p>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl max-w-3xl">
              30+ Years of Trusted Roofing & Exterior Work in Minnesota & Wisconsin
            </h1>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              Family-owned since the early 1990s. <Link href="/resources/gaf-master-elite-contractor" className="font-semibold text-white underline underline-offset-2 hover:text-brand-primary transition-colors">GAF Master Elite® certified</Link>.
              A+ BBB rated. We're your neighbors — not a storm-chaser crew — and we stand behind every project with{' '}
              <Link href="/resources/warranties" className="font-semibold text-white underline underline-offset-2 hover:text-brand-primary transition-colors">industry-leading warranties</Link>{' '}
              and a phone number that actually gets answered.
            </p>

            {/* Stats row */}
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map(({ value, label, icon: Icon }) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <Icon className="mx-auto mb-1.5 h-5 w-5 text-brand-primary" strokeWidth={1.75} />
                  <p className="text-xl font-bold text-white">{value}</p>
                  <p className="text-[11px] font-semibold text-white/50 leading-tight mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-primary-dark">
                  Get a Free Estimate
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <a href={`tel:${COMPANY_INFO.phone}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white/40">
                <Phone className="h-4 w-4" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* Reviews banner */}
      <ReviewsBanner />

      {/* Our Story — 2 col */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">

            {/* Left — story */}
            <AnimatedDiv
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">Our Story</p>
              <h2 className="mb-5 text-2xl font-bold text-gray-900 md:text-3xl">
                A Local Business Built on Reputation, Not Volume
              </h2>

              <div className="space-y-4 text-sm leading-relaxed text-gray-600 md:text-base">
                <p>
                  Advanced Roofing & Siding has been a trusted name in the <Link href="/service-areas" className="font-semibold text-brand-primary hover:underline">Twin Cities metro and greater Minnesota</Link> since the early 1990s.
                  As a <Link href="/resources/gaf-master-elite-contractor" className="font-semibold text-brand-primary hover:underline">GAF Master Elite® contractor</Link> — a designation held by fewer than 2% of roofers nationwide — we carry credentials that unlock the{' '}
                  <Link href="/resources/warranties" className="font-semibold text-brand-primary hover:underline">GAF Golden Pledge 50-year warranty</Link>, covering both materials and workmanship long after other contractors have moved on.
                </p>
                <p>
                  We're family-owned and based in <Link href="/service-areas/mn/anoka" className="font-semibold text-brand-primary hover:underline">Anoka, Minnesota</Link>.
                  Our families attend local schools, support the same small businesses, and live in the same communities we serve.
                  That means when we put our name on a <Link href="/services/roofing" className="font-semibold text-brand-primary hover:underline">roof</Link>,{' '}
                  <Link href="/services/siding" className="font-semibold text-brand-primary hover:underline">siding job</Link>, or{' '}
                  <Link href="/resources/insurance-claims" className="font-semibold text-brand-primary hover:underline">insurance claim</Link>,
                  we're accountable to people we see every day — not to a quarterly report.
                </p>
                <p>
                  We serve <Link href="/who-we-serve/residential" className="font-semibold text-brand-primary hover:underline">residential homeowners</Link>,{' '}
                  <Link href="/who-we-serve/commercial" className="font-semibold text-brand-primary hover:underline">commercial property owners</Link>,{' '}
                  <Link href="/who-we-serve/hoa" className="font-semibold text-brand-primary hover:underline">HOA boards</Link>,{' '}
                  <Link href="/who-we-serve/property-manager" className="font-semibold text-brand-primary hover:underline">property managers</Link>, and{' '}
                  <Link href="/who-we-serve/municipal" className="font-semibold text-brand-primary hover:underline">municipal clients</Link> across Minnesota and Wisconsin.
                  Every project — from a single-family re-roof to a multi-building HOA complex — gets the same crew, the same standards, and the same accountability.
                </p>
                <p>
                  Our A+ BBB accreditation (since 2007) and 160+ verified Google reviews aren't marketing numbers. They're the result of doing the same thing right, over and over, for three decades.
                </p>
              </div>
            </AnimatedDiv>

            {/* Right — credentials panel */}
            <AnimatedDiv
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="sticky top-24">
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-gray-400">Credentials & Certifications</p>
                  <ul className="space-y-2.5">
                    {CREDENTIALS.map(({ label, href }) => (
                      <li key={label} className="flex items-center gap-2.5">
                        <CheckCircle className="h-4 w-4 shrink-0 text-brand-primary" />
                        {href ? (
                          <Link href={href} className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors hover:underline">
                            {label}
                          </Link>
                        ) : (
                          <span className="text-sm text-gray-700">{label}</span>
                        )}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 border-t border-gray-200 pt-5">
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-gray-400">Services</p>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: 'Roofing', href: '/services/roofing' },
                        { label: 'Siding', href: '/services/siding' },
                        { label: 'Windows', href: '/services/windows' },
                        { label: 'Gutters', href: '/services/gutters' },
                        { label: 'Storm Restoration', href: '/services/storm-restoration' },
                        { label: 'Soffit & Fascia', href: '/services/soffit-fascia' },
                      ].map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-700 transition hover:border-brand-primary hover:text-brand-primary"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <Link href="/contact" className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-primary px-4 py-2.5 text-sm font-bold text-white transition hover:bg-brand-primary-dark">
                      Get a Free Estimate
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedDiv>

          </div>
        </div>
      </Section>

      {/* Photo gallery */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">Our Work</p>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Project Gallery</h2>
            <p className="mt-1.5 text-sm text-gray-500 max-w-xl">
              A sample of completed roofing, siding, and exterior projects across{' '}
              <Link href="/service-areas" className="font-medium text-brand-primary hover:underline">Minnesota and Wisconsin</Link>.
            </p>
          </AnimatedDiv>

          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3">
            {GALLERY_IMAGES.map((src, i) => (
              <AnimatedDiv
                key={src}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt={`Advanced Roofing & Siding project in Minnesota — image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </AnimatedDiv>
            ))}
          </div>

          <div className="mt-5 text-center">
            <Link href="/resources/project-gallery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline">
              View full project gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Video */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">See It For Yourself</p>
            <h2 className="mb-5 text-2xl font-bold text-gray-900 md:text-3xl">Our Work in Action</h2>
            <div className="overflow-hidden rounded-2xl" style={{ paddingBottom: '56.25%', position: 'relative' }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/dPOfuHMt8hQ"
                title="Inver Grove Heights MN Project — Advanced Roofing & Siding Inc."
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-center text-sm text-gray-500">
              Inver Grove Heights, MN — full tear-off and roof replacement by Advanced Roofing & Siding Inc.
            </p>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Who We Serve */}
      <section className="bg-gray-50 py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedDiv
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10 text-center"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">Who We Serve</p>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Exterior Solutions for Every Client Type
            </h2>
            <p className="mt-2 text-sm text-gray-500 max-w-xl mx-auto">
              From first-time homeowners to property managers overseeing hundreds of units — we have the crew, insurance experience, and certifications to get it done right.
            </p>
          </AnimatedDiv>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: Home, label: 'Homeowners', href: '/who-we-serve/residential', desc: 'Roof replacements, siding, windows & storm repairs for MN/WI homeowners.' },
              { icon: Building2, label: 'Commercial', href: '/who-we-serve/commercial', desc: 'Flat roofing, metal siding & scheduled maintenance for business properties.' },
              { icon: Users, label: 'HOA & Condo', href: '/who-we-serve/hoa', desc: 'Bulk pricing, coordinated scoping, and streamlined HOA workflows.' },
              { icon: Landmark, label: 'Municipal', href: '/who-we-serve/municipal', desc: 'Licensed for government buildings, public facilities & bonded projects.' },
              { icon: KeySquare, label: 'Property Mgr', href: '/who-we-serve/property-manager', desc: 'Multi-unit roofing and siding with 24/7 emergency response.' },
              { icon: Handshake, label: 'Real Estate', href: '/who-we-serve/agent', desc: 'Rapid estimates, roof certifications & pre-listing exterior upgrades.' },
            ].map(({ icon: Icon, label, href, desc }, i) => (
              <AnimatedDiv
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Link
                  href={href}
                  className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-4 text-center shadow-soft transition hover:border-brand-primary hover:shadow-md"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary-light text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mb-1.5 text-sm font-semibold text-gray-900">{label}</span>
                  <span className="hidden text-xs leading-relaxed text-gray-500 md:block">{desc}</span>
                  <span className="mt-2 flex items-center gap-1 text-xs font-medium text-brand-primary opacity-0 group-hover:opacity-100 transition">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

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
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">Work With Us</p>
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Ready to Get Started?
            </h2>
            <p className="mb-7 text-sm text-white/70 md:text-base max-w-xl mx-auto">
              Free inspections, honest estimates, no pressure. Call us or fill out the form and a project manager will be in touch same day.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-primary-dark">
                  Get a Free Estimate
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <a href={`tel:${COMPANY_INFO.phone}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-white/40">
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
