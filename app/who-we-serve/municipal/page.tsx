import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { ReviewsBanner } from '@/components/sections/ReviewsBanner'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Building2, Shield, Clock, FileCheck, Landmark, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Municipal & Government Roofing Contractor | Minnesota & Wisconsin',
  description: 'Advanced Roofing & Siding provides roofing and exterior services for cities, counties, schools, and government facilities across Minnesota & Wisconsin. Certified, insured, and compliant with municipal standards.',
  keywords: [
    'municipal roofing contractor Minnesota',
    'government roofing contractor MN',
    'city building roofing services',
    'school roofing contractor Minnesota',
    'government facility exterior repair MN',
    'municipal roof replacement Wisconsin',
    'public building roofing contractor',
    'county facility roofing MN',
    'municipal siding contractor',
    'city hall roof replacement MN',
    'government storm damage repair MN',
    'fire station roof repair Minnesota',
    'municipal bid roofing contractor',
    'school district roof inspection MN',
    'warranty-backed public building roofing',
    'procurement-ready roofing company MN',
  ],
  alternates: { canonical: 'https://advancedroofingmn.com/who-we-serve/municipal' },
  openGraph: {
    title: 'Municipal & Government Roofing Services',
    description: 'Certified roofing and exterior solutions for government buildings, schools, and municipal facilities across Minnesota and Wisconsin.',
    url: 'https://advancedroofingmn.com/who-we-serve/municipal',
    type: 'website',
    images: [{ url: 'https://advancedroofingmn.com/AFS-Logo900.png', width: 1200, height: 630, alt: 'Municipal & Government Roofing - Advanced Roofing & Siding Inc.' }],
  },
}

const services = [
  { title: 'City, County & State Building Roofing', href: '/services/roofing', icon: Building2, desc: 'TPO, EPDM, modified bitumen, and asphalt systems for administrative offices, courthouses, and public facilities.' },
  { title: 'School District Roofing', href: '/services/roofing', icon: Landmark, desc: 'Scheduled around the academic calendar — minimal disruption to students, staff, and operations.' },
  { title: 'Fire, Police & EMS Facilities', href: '/services/roofing', icon: Shield, desc: 'Emergency services buildings require operational readiness. We work fast without compromising code compliance.' },
  { title: 'Siding, Windows & Envelope Upgrades', href: '/services/siding', icon: FileCheck, desc: 'ADA-compliant exterior improvements — siding, window replacement, and building envelope solutions.' },
  { title: 'Storm Damage Assessments', href: '/resources/insurance-claims', icon: Clock, desc: 'Moisture mapping, photo documentation, and full reporting for insurance and risk-management teams.' },
  { title: 'Long-Term Facility Maintenance Plans', href: '/contact', icon: Building2, desc: 'Roof life expectancy reports and inspection schedules to support municipal capital planning and budgeting.' },
]

const whyChoose = [
  { text: 'Fully insured, certified crews meeting municipal project requirements', href: '/about' },
  { text: 'Familiar with procurement processes, bids, and documentation requirements', href: '/contact' },
  { text: 'Schedules around daily operations — minimal disruption to staff and public', href: '/contact' },
  { text: 'TPO, EPDM, modified bitumen, asphalt, and metal roofing expertise', href: '/services/roofing' },
  { text: 'GAF Master Elite® Certified — warranty-backed public building solutions', href: '/resources/gaf-master-elite-contractor' },
  { text: 'Serving government facilities across Minnesota & Wisconsin', href: '/service-areas' },
]

const faqs = [
  { question: 'Do you work with city, county, and school procurement processes?', answer: 'Yes. We follow municipal bidding procedures, provide detailed proposals, and supply all required documentation for administrative approvals.' },
  { question: 'What roofing systems are best for government buildings?', answer: 'Most public facilities use TPO, EPDM, modified bitumen, or architectural asphalt shingles depending on roof slope, building structure, and budget requirements.' },
  { question: 'Can you complete work while buildings remain open?', answer: 'Yes. We plan schedules around daily operations, create designated safety zones, and limit disruptions to staff and visitors throughout the project.' },
  { question: 'Do you handle storm damage assessments for municipal buildings?', answer: 'Yes. We provide inspections, moisture mapping when required, and full documentation packages for insurance carriers and risk-management teams.' },
  { question: 'Are your crews insured and certified for municipal work?', answer: 'All crews are insured, and our installers meet manufacturer-certified installation requirements for municipal and government projects.' },
  { question: 'Can you assist with long-term facility planning?', answer: 'Yes. We provide roof life expectancy reports, recommended inspection schedules, and maintenance plans to support municipal capital planning and budgeting cycles.' },
]

export default function MunicipalWhoWeServePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Who We Serve', url: '/who-we-serve' },
        { name: 'Municipal & Government', url: '/who-we-serve/municipal' },
      ]} />
      <PageLayout>
        <PageHero
          title="Municipal & Government Services"
          description="Expert exterior services for cities and municipalities. Supporting public buildings, facilities, and infrastructure projects across Minnesota and Wisconsin"
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
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-3">Municipal</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 md:text-3xl">
                  Certified Roofing for Public Buildings
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Public buildings have strict requirements — procurement processes, code compliance, minimal operational disruption, and detailed documentation for facility management.
                  Advanced Roofing & Siding has the certifications, insurance, and experience to meet those standards across{' '}
                  <Link href="/service-areas/minnesota" className="text-brand-primary hover:underline font-medium">Minnesota</Link>{' '}
                  and{' '}
                  <Link href="/service-areas/wisconsin" className="text-brand-primary hover:underline font-medium">Wisconsin</Link>.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We work with city halls, county facilities, school districts, and emergency services buildings — delivering{' '}
                  <Link href="/resources/warranties" className="text-brand-primary hover:underline font-medium">warranty-backed exterior solutions</Link>{' '}
                  and thorough documentation for capital planning, insurance, and risk management. As a{' '}
                  <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:underline font-medium">GAF Master Elite® Contractor</Link>,
                  our installs carry some of the strongest manufacturer warranties available.
                </p>
              </AnimatedDiv>

              <AnimatedDiv initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}>
                <p className="text-sm font-semibold text-gray-900 mb-4">Why municipalities choose us:</p>
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
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Municipal & Government Roofing Services</h2>
              <p className="mt-2 text-sm text-gray-500 max-w-xl">Roofing, siding, and exterior solutions for public buildings — compliant, insured, and built to last.</p>
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
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Municipal Roofing Questions</h2>
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
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">Municipal Consultation</p>
              <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">Request a Municipal Roof Assessment</h2>
              <p className="mb-7 mx-auto max-w-xl text-sm text-white/70 md:text-base">
                We serve government buildings and public facilities across{' '}
                <Link href="/service-areas/minnesota" className="text-white/90 underline underline-offset-2 hover:text-white">Minnesota</Link>{' '}
                and{' '}
                <Link href="/service-areas/wisconsin" className="text-white/90 underline underline-offset-2 hover:text-white">Wisconsin</Link>.
                Free inspection with full documentation for procurement and planning teams.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-primary-dark">
                    Request Assessment <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <a href={`tel:${COMPANY_INFO.phone}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-white/40">
                  <Phone className="h-4 w-4" /> {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-white/50">
                <Link href="/who-we-serve/commercial" className="hover:text-white/80 transition">Commercial →</Link>
                <Link href="/who-we-serve/hoa" className="hover:text-white/80 transition">HOA & Condo →</Link>
                <Link href="/who-we-serve/property-manager" className="hover:text-white/80 transition">Property Managers →</Link>
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
