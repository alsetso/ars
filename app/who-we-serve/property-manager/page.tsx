import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { ReviewsBanner } from '@/components/sections/ReviewsBanner'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Building2, Shield, Clock, FileCheck, Users, Layers, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Roofing for Property Managers | Multi-Family & Rental Property Services | MN & WI',
  description: 'Advanced Roofing & Siding provides roofing, siding, windows, and storm restoration for apartments, rental portfolios, and multi-family properties across Minnesota & Wisconsin. Priority service for property managers.',
  keywords: [
    'property management roofing Minnesota',
    'apartment building roofing contractor MN',
    'multi-family roofing services Minnesota',
    'rental property roof repair MN',
    'property manager roofing Wisconsin',
    'multi-unit roofing Minnesota',
    'apartment exterior contractor MN',
    'property maintenance roofing MN',
    'condo building roof replacement MN',
    'rental property storm damage MN',
    'roofing contractor for landlords Minnesota',
    'property portfolio roofing services MN',
    'multi-building exterior repair MN',
    'annual roof maintenance program MN',
    'emergency roof repair for property managers',
  ],
  alternates: { canonical: 'https://advancedroofingmn.com/who-we-serve/property-manager' },
  openGraph: {
    title: 'Roofing & Exterior Services for Property Managers',
    description: 'Scalable roofing and exterior solutions for apartment buildings, multi-unit properties, and rental portfolios throughout Minnesota & Wisconsin.',
    url: 'https://advancedroofingmn.com/who-we-serve/property-manager',
    type: 'website',
    images: [{ url: 'https://advancedroofingmn.com/AFS-Logo900.png', width: 1200, height: 630, alt: 'Property Management Roofing - Advanced Roofing & Siding Inc.' }],
  },
}

const services = [
  { title: 'Apartment & Townhouse Roofing', href: '/services/roofing', icon: Building2, desc: 'Asphalt shingles, low-slope sections, and complex rooflines with moisture checks and detailed inspections.' },
  { title: 'Multi-Unit Roof Replacement & Repairs', href: '/services/roofing', icon: Layers, desc: 'Emergency leak repairs, seasonal maintenance, and full replacements with minimal tenant disruption.' },
  { title: 'Low-Slope & Mixed Roofing Systems', href: '/services/roofing', icon: Shield, desc: 'Specialized expertise for the mixed roofing configurations common in multi-family buildings.' },
  { title: 'Siding, Windows & Exterior Upgrades', href: '/services/siding', icon: Shield, desc: 'Siding, windows, and gutter systems that protect rental value and reduce long-term maintenance costs.' },
  { title: 'Storm Damage Claims for Portfolios', href: '/resources/insurance-claims', icon: FileCheck, desc: 'Portfolio-wide hail and wind damage documentation — adjuster coordination and maximized coverage.' },
  { title: 'Annual Roof Maintenance Plans', href: '/contact', icon: Clock, desc: 'Biannual inspection programs to help property managers budget and prevent major failures across all buildings.' },
]

const whyChoose = [
  { text: 'Scalable — from 2-unit rentals to 200-unit apartment complexes', href: '/about' },
  { text: 'Emergency leak response with same-day availability', href: '/contact' },
  { text: 'Tenant communication plans — notices, schedules, safety protocols', href: '/contact' },
  { text: 'Storm damage claim expertise across large multi-property portfolios', href: '/resources/insurance-claims' },
  { text: 'Annual maintenance programs to support capital planning and budgeting', href: '/contact' },
  { text: '160+ five-star reviews — trusted by MN & WI property managers', href: '/resources/reviews' },
]

const faqs = [
  { question: 'Do you provide roofing for apartment buildings and multi-family properties?', answer: 'Yes. We work with duplexes, fourplexes, townhomes, apartment buildings, and multi-unit communities throughout Minnesota and Wisconsin.' },
  { question: 'How do you handle tenant communication during projects?', answer: 'We provide advance notices, scheduled timelines, onsite safety protocols, parking coordination, and daily updates to minimize tenant disruption.' },
  { question: 'Can you help with emergency leak repairs?', answer: 'Yes. We offer responsive emergency leak repair for property managers and portfolio operators — with priority scheduling for ongoing clients.' },
  { question: 'Do you assist with storm damage claims for multi-unit buildings?', answer: 'Yes. We document hail and wind damage across entire portfolios, coordinate with insurance adjusters, and help maximize coverage for all affected buildings.' },
  { question: 'Can you manage full exterior projects — siding, windows, gutters?', answer: 'Yes. We provide siding, window replacement, gutter installation, and full exterior upgrades for rental and multi-family properties.' },
  { question: 'Do you offer long-term maintenance plans for portfolios?', answer: 'Yes. Annual or biannual roof maintenance plans help property managers budget properly and prevent major failures across multiple buildings.' },
]

export default function PropertyManagerWhoWeServePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Who We Serve', url: '/who-we-serve' },
        { name: 'Property Managers', url: '/who-we-serve/property-manager' },
      ]} />
      <PageLayout>
        <PageHero
          title="Property Management Services"
          description="Expert exterior services for property management companies. Comprehensive solutions for apartment buildings, multi-family properties, and commercial facilities"
          showForm
          theme="dark"
          backHref="/who-we-serve"
          backLabel="Who We Serve"
        />

        <ReviewsBanner />

        {/* Introduction */}
        <section className="bg-white py-12 md:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <AnimatedDiv initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-3">Property Management</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 md:text-3xl">
                  A Roofing Partner for Your Entire Portfolio
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Property managers need a contractor who responds fast, communicates clearly, and delivers consistent results across every building they manage.
                  Whether you oversee a handful of rentals or hundreds of units across{' '}
                  <Link href="/service-areas/minnesota" className="text-brand-primary hover:underline font-medium">Minnesota</Link>{' '}
                  and{' '}
                  <Link href="/service-areas/wisconsin" className="text-brand-primary hover:underline font-medium">Wisconsin</Link>,
                  we provide scalable exterior solutions that protect property value and reduce long-term maintenance costs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From emergency{' '}
                  <Link href="/services/roofing" className="text-brand-primary hover:underline font-medium">leak repairs</Link>{' '}
                  and{' '}
                  <Link href="/resources/insurance-claims" className="text-brand-primary hover:underline font-medium">storm damage claims</Link>{' '}
                  to full{' '}
                  <Link href="/services/siding" className="text-brand-primary hover:underline font-medium">siding replacements</Link>{' '}
                  and annual maintenance programs, we handle the exterior so you can focus on managing your properties.
                </p>
              </AnimatedDiv>

              <AnimatedDiv initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}>
                <p className="text-sm font-semibold text-gray-900 mb-4">Why property managers choose us:</p>
                <ul className="space-y-3">
                  {whyChoose.map(({ text, href }) => (
                    <li key={text} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-primary" />
                      <Link href={href} className="text-sm text-gray-700 hover:text-brand-primary transition-colors">{text}</Link>
                    </li>
                  ))}
                </ul>
              </AnimatedDiv>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-gray-50 py-12 md:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedDiv initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-2">Services</p>
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Property Management Roofing & Exterior</h2>
              <p className="mt-2 text-sm text-gray-500 max-w-xl">Roofing, siding, and storm solutions built for multi-unit and rental portfolios.</p>
            </AnimatedDiv>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ title, href, icon: Icon, desc }, i) => (
                <AnimatedDiv key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}>
                  <Link href={href} className="group flex h-full flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 transition hover:border-brand-primary hover:shadow-md">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary-light text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-gray-900 group-hover:text-brand-primary transition">{title}</h3>
                      <p className="text-xs leading-relaxed text-gray-500">{desc}</p>
                    </div>
                    <span className="mt-auto flex items-center gap-1 text-xs font-medium text-brand-primary opacity-0 group-hover:opacity-100 transition">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-12 md:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <AnimatedDiv initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-2">FAQ</p>
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Property Manager Roofing Questions</h2>
            </AnimatedDiv>
            <div className="divide-y divide-gray-100">
              {faqs.map((faq, i) => (
                <AnimatedDiv key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }} className="py-5">
                  <h3 className="mb-2 text-sm font-semibold text-gray-900">{faq.question}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-brand-secondary py-14 md:py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <AnimatedDiv initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">Portfolio Partnership</p>
              <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">Partner With a Trusted Multi-Unit Roofing Contractor</h2>
              <p className="mb-7 mx-auto max-w-xl text-sm text-white/70 md:text-base">
                We serve property managers across{' '}
                <Link href="/service-areas/minnesota" className="text-white/90 underline underline-offset-2 hover:text-white">Minnesota</Link>{' '}
                and{' '}
                <Link href="/service-areas/wisconsin" className="text-white/90 underline underline-offset-2 hover:text-white">Wisconsin</Link>.
                Request an annual maintenance plan or a portfolio-wide storm damage assessment today.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-primary-dark">
                    Get a Free Assessment <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <a href={`tel:${COMPANY_INFO.phone}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-white/40">
                  <Phone className="h-4 w-4" /> {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-white/50">
                <Link href="/who-we-serve/hoa" className="hover:text-white/80 transition">HOA & Condo →</Link>
                <Link href="/who-we-serve/commercial" className="hover:text-white/80 transition">Commercial →</Link>
                <Link href="/who-we-serve/municipal" className="hover:text-white/80 transition">Municipal →</Link>
                <Link href="/who-we-serve/residential" className="hover:text-white/80 transition">Residential →</Link>
              </div>
            </AnimatedDiv>
          </div>
        </section>

        <InsuranceClaimsCTA variant="compact" />
      </PageLayout>
    </>
  )
}
