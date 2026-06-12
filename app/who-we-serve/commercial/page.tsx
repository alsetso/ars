import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { ReviewsBanner } from '@/components/sections/ReviewsBanner'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Building2, Shield, Clock, Award, FileCheck, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Commercial Roofing & Exterior Services | Minnesota & Wisconsin | Advanced Roofing & Siding',
  description: 'Advanced Roofing & Siding provides certified commercial roofing (TPO, EPDM, flat roof), siding, and storm restoration for businesses across Minnesota and Wisconsin. Free inspections.',
  keywords: [
    'commercial roofing Minnesota',
    'flat roof contractor MN',
    'TPO roofing contractor Minnesota',
    'EPDM roofing Minnesota',
    'commercial roof replacement Minneapolis',
    'commercial siding contractor MN',
    'commercial storm damage restoration MN',
    'business roofing contractor Minnesota',
    'commercial roofing Wisconsin',
    'office building roofing MN',
    'warehouse roofing contractor Minnesota',
    'commercial roof inspection MN',
    'commercial exterior contractor Twin Cities',
    'low slope roofing MN',
    'commercial insurance claim roofing MN',
  ],
  alternates: { canonical: 'https://advancedroofingmn.com/who-we-serve/commercial' },
  openGraph: {
    title: 'Commercial Roofing & Exterior Services in Minnesota & Wisconsin',
    description: 'TPO, EPDM, flat roof, siding, and storm restoration for commercial properties. Serving MN & WI businesses.',
    url: 'https://advancedroofingmn.com/who-we-serve/commercial',
    type: 'website',
    images: [{ url: 'https://advancedroofingmn.com/AFS-Logo900.png', width: 1200, height: 630, alt: 'Commercial Roofing Services - Advanced Roofing & Siding Inc.' }],
  },
}

const services = [
  { title: 'Flat Roof Replacement & Repair (TPO, EPDM, Mod-Bit)', href: '/services/roofing', icon: Building2, desc: 'Membrane installs and repairs. We diagnose seam failures, ponding water, and drainage issues with photo documentation.' },
  { title: 'Low-Slope Roofing Systems', href: '/services/roofing', icon: Shield, desc: 'Office buildings, warehouses, retail centers — code-compliant, durable systems built for MN weather extremes.' },
  { title: 'Commercial Storm Damage Restoration', href: '/resources/insurance-claims', icon: Clock, desc: 'Hail, wind, and uplift assessments with full insurance claim coordination and adjuster support.' },
  { title: 'Commercial Siding Installation', href: '/services/siding', icon: Shield, desc: 'Exterior siding replacement for commercial buildings — professional appearance, long-term weather protection.' },
  { title: 'Window & Building Envelope Upgrades', href: '/services/windows', icon: FileCheck, desc: 'Energy-efficient window systems and envelope improvements that reduce operating costs and improve building performance.' },
  { title: 'Ice Dam Mitigation & Seasonal Maintenance', href: '/services/storm-restoration', icon: Building2, desc: 'Drainage solutions and maintenance plans to extend roof life and prevent costly repairs from MN winters.' },
]

const whyChoose = [
  { text: 'Minimal disruption — we schedule around your operating hours', href: '/contact' },
  { text: 'GAF Master Elite® Certified — top 3% of contractors nationwide', href: '/resources/gaf-master-elite-contractor' },
  { text: 'Full insurance claim documentation and adjuster coordination', href: '/resources/insurance-claims' },
  { text: 'TPO, EPDM, modified bitumen, asphalt, and metal roofing expertise', href: '/services/roofing' },
  { text: '160+ five-star reviews from MN & WI commercial clients', href: '/resources/reviews' },
  { text: 'Serving the Twin Cities metro and greater Minnesota & Wisconsin', href: '/service-areas' },
]

const faqs = [
  { question: 'What commercial roofing systems do you install?', answer: 'We install TPO, EPDM, modified bitumen, architectural asphalt shingles, and metal roofing — selected based on your building\'s slope, structure, and budget requirements.' },
  { question: 'Can you repair leaks on flat or low-slope roofs?', answer: 'Yes. We specialize in diagnosing membrane failures, seam separations, ponding water, and drainage issues on flat and low-slope commercial roofs.' },
  { question: 'Do you assist with commercial insurance claims?', answer: 'Yes. We provide photo documentation, reporting, and adjuster coordination to ensure accurate coverage evaluations and approved repair scopes for commercial buildings.' },
  { question: 'How do you minimize disruption during commercial roofing?', answer: 'We schedule around operating hours, maintain clean job sites, designate safety zones, and implement communication plans to avoid downtime for employees and customers.' },
  { question: 'Do you serve multi-building portfolios and property managers?', answer: 'Yes. We provide roofing, siding, and exterior services for multi-building portfolios, HOAs, retail strips, office parks, and warehouse facilities.' },
  { question: 'How often should a commercial roof be inspected?', answer: 'Twice yearly — spring and fall — to detect early signs of membrane wear, drainage problems, or storm damage before they become major failures.' },
]

export default function CommercialWhoWeServePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Who We Serve', url: '/who-we-serve' },
        { name: 'Commercial', url: '/who-we-serve/commercial' },
      ]} />
      <PageLayout>
        <PageHero
          title="Commercial Services"
          description="Expert commercial exterior services for business owners and managers. Professional roofing, siding, and building maintenance for commercial properties"
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
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-3">Commercial</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 md:text-3xl">
                  Your Building Is an Asset. Protect It.
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Advanced Roofing & Siding provides certified commercial roofing and exterior services for businesses across{' '}
                  <Link href="/service-areas/minnesota" className="text-brand-primary hover:underline font-medium">Minnesota</Link>{' '}
                  and{' '}
                  <Link href="/service-areas/wisconsin" className="text-brand-primary hover:underline font-medium">Western Wisconsin</Link>.
                  From retail centers and office buildings to warehouses and multi-unit facilities, we deliver TPO, EPDM, and flat roofing systems built to handle Minnesota's extreme climate — hail, UV degradation, freeze-thaw, and wind uplift.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We begin every project with a detailed{' '}
                  <Link href="/services/free-estimate" className="text-brand-primary hover:underline font-medium">inspection and photo report</Link>,
                  and assist with{' '}
                  <Link href="/resources/insurance-claims" className="text-brand-primary hover:underline font-medium">insurance claims</Link>{' '}
                  from documentation through adjuster sign-off. No inflated scopes, no temporary fixes — just durable, code-compliant solutions backed by{' '}
                  <Link href="/resources/warranties" className="text-brand-primary hover:underline font-medium">industry-leading warranties</Link>.
                </p>
              </AnimatedDiv>

              <AnimatedDiv initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}>
                <p className="text-sm font-semibold text-gray-900 mb-4">Why commercial clients choose us:</p>
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
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Commercial Roofing & Exterior Services</h2>
              <p className="mt-2 text-sm text-gray-500 max-w-xl">Full-scope exterior services for commercial properties — roofing systems, siding, windows, and storm restoration.</p>
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
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Commercial Roofing Questions</h2>
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
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">Free Commercial Inspection</p>
              <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">Schedule a Commercial Roof Inspection</h2>
              <p className="mb-7 mx-auto max-w-xl text-sm text-white/70 md:text-base">
                Serving businesses across{' '}
                <Link href="/service-areas/mn/minneapolis" className="text-white/90 underline underline-offset-2 hover:text-white">Minneapolis</Link>,{' '}
                <Link href="/service-areas/mn/st-paul" className="text-white/90 underline underline-offset-2 hover:text-white">St. Paul</Link>,{' '}
                and throughout{' '}
                <Link href="/service-areas" className="text-white/90 underline underline-offset-2 hover:text-white">Minnesota & Wisconsin</Link>{' '}
                with certified commercial roofing and exterior solutions. Free inspection, same-day response.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-primary-dark">
                    Schedule Inspection <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <a href={`tel:${COMPANY_INFO.phone}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-white/40">
                  <Phone className="h-4 w-4" /> {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-white/50">
                <Link href="/who-we-serve/residential" className="hover:text-white/80 transition">Residential →</Link>
                <Link href="/who-we-serve/hoa" className="hover:text-white/80 transition">HOA & Condo →</Link>
                <Link href="/who-we-serve/property-manager" className="hover:text-white/80 transition">Property Managers →</Link>
                <Link href="/who-we-serve/municipal" className="hover:text-white/80 transition">Municipal →</Link>
              </div>
            </AnimatedDiv>
          </div>
        </section>

        <InsuranceClaimsCTA variant="compact" />
      </PageLayout>
    </>
  )
}
