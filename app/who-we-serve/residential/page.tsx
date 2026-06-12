import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { ReviewsBanner } from '@/components/sections/ReviewsBanner'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Home, Shield, Clock, Award, FileCheck, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Residential Roofing & Siding Services | Minnesota & Wisconsin | Advanced Roofing & Siding',
  description: 'Advanced Roofing & Siding provides certified residential roofing, siding, windows, and storm damage restoration across Minnesota and Wisconsin. GAF Master Elite® contractor. Free inspections.',
  keywords: [
    'residential roofing Minnesota',
    'residential roofing Wisconsin',
    'home roof replacement Minnesota',
    'roof replacement contractors Minneapolis',
    'residential siding contractor Minnesota',
    'roof repair MN',
    'hail damage roof replacement Minnesota',
    'storm damage roofing Minnesota',
    'residential roofing Anoka MN',
    'residential roofing St. Paul MN',
    'residential roofing Twin Cities',
    'asphalt shingle replacement MN',
    'roofing contractor near me Minnesota',
    'roofing estimate Minnesota',
    'GAF Master Elite roofer Minnesota',
    'home exterior remodel Minnesota',
    'Minnesota roof insurance claims help',
    'Wisconsin residential roofers',
    'leaking roof repair MN',
    'ice dam roof repair Minnesota',
    'wind damage roofing Minnesota',
    'residential gutters MN',
  ],
  alternates: { canonical: 'https://advancedroofingmn.com/who-we-serve/residential' },
  openGraph: {
    title: 'Residential Roofing & Exterior Services in Minnesota & Wisconsin',
    description: 'Trusted home exterior services including roofing, siding, windows, and storm restoration. Serving Minnesota & Wisconsin homeowners since 2001.',
    url: 'https://advancedroofingmn.com/who-we-serve/residential',
    type: 'website',
    images: [{ url: 'https://advancedroofingmn.com/AFS-Logo900.png', width: 1200, height: 630, alt: 'Residential Roofing & Siding Services' }],
  },
}

const services = [
  { title: 'Roof Replacement & Installation', href: '/services/roofing', icon: Home, desc: 'GAF Master Elite® certified installs — asphalt, designer shingles, and metal. Up to 50-year warranties.' },
  { title: 'Storm Damage & Insurance Claims', href: '/resources/insurance-claims', icon: Clock, desc: 'Hail, wind, and ice dam assessments with drone documentation and full adjuster support.' },
  { title: 'Roof Repairs — Hail, Wind, Ice Dams', href: '/services/storm-restoration', icon: Shield, desc: 'Fast repairs for missing shingles, granule loss, leaks, and age-related wear.' },
  { title: 'Siding Installation & Replacement', href: '/services/siding', icon: Shield, desc: 'LP SmartSide®, fiber cement, and traditional materials. Curb appeal + weatherproofing.' },
  { title: 'Window Replacement', href: '/services/windows', icon: FileCheck, desc: 'Energy-efficient window systems backed by comprehensive performance warranties.' },
  { title: 'Gutters & Exterior Upgrades', href: '/services/roofing', icon: Home, desc: 'Seamless gutters, downspouts, and full exterior restoration for lasting protection.' },
]

const whyChoose = [
  { text: 'GAF Master Elite® Certified — top 3% of roofers nationwide', href: '/resources/gaf-master-elite-contractor' },
  { text: 'GAF Golden Pledge 50-Year Warranty available', href: '/resources/warranties' },
  { text: '160+ five-star Google reviews across MN & WI', href: '/resources/reviews' },
  { text: 'Specializes in hail, wind, and ice dam damage claims', href: '/resources/insurance-claims/hail-damage' },
  { text: 'Free drone inspections with photo documentation', href: '/services/free-estimate' },
  { text: 'Serving Minneapolis, Anoka, St. Paul & greater Twin Cities', href: '/service-areas/minnesota' },
]

const faqs = [
  { question: 'How do I know if my home needs a roof replacement?', answer: 'A free inspection will identify missing shingles, granule loss, leaks, storm damage, and age-related wear. Most homeowners are surprised to learn storm damage qualifies for insurance — we help navigate that.' },
  { question: 'Do you handle residential insurance claims for storm damage?', answer: 'Yes. We help with documentation, adjuster meetings, and ensuring approved repairs match the actual scope of damage. Our team has handled hundreds of MN hail and wind claims.' },
  { question: 'How long does a residential roof replacement take?', answer: 'Most homes are completed in one day, depending on size and complexity. We handle tear-off, install, and cleanup — you\'re back to normal by end of day.' },
  { question: 'What roofing materials do you offer?', answer: 'We install asphalt shingles, designer shingles, metal roofing, and premium underlayment systems — all through GAF\'s Master Elite program with certified warranty options.' },
  { question: 'Do you offer financing for homeowners?', answer: 'Yes — flexible financing options are available for roof replacements and exterior upgrades. Ask when you schedule your free estimate.' },
  { question: 'Do you work year-round in Minnesota?', answer: 'Yes. We complete winter installs when temperatures allow and perform emergency repairs all year. Ice dam damage in particular requires fast response to prevent interior water damage.' },
]

export default function ResidentialWhoWeServePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Who We Serve', url: '/who-we-serve' },
        { name: 'Residential', url: '/who-we-serve/residential' },
      ]} />
      <PageLayout>
        <PageHero
          title="Residential Services"
          description="Expert exterior services for homeowners across Minnesota and Wisconsin. Protecting your most important investment with GAF Master Elite quality"
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
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-3">Homeowners</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 md:text-3xl">
                  Your Home Deserves a Contractor You Can Trust
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Minnesota and Wisconsin have some of the harshest roofing conditions in the country — hail, ice dams, windstorms, and extreme freeze-thaw cycles. As a{' '}
                  <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:underline font-medium">GAF Master Elite® Contractor</Link>{' '}
                  (top 3% nationwide), we deliver premium shingle systems, certified installs, and warranties up to 50 years. From{' '}
                  <Link href="/resources/insurance-claims" className="text-brand-primary hover:underline font-medium">storm damage claims</Link>{' '}
                  to full exterior upgrades, every project is handled with precision and respect for your property.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We serve homeowners across the{' '}
                  <Link href="/service-areas/mn/minneapolis" className="text-brand-primary hover:underline font-medium">Twin Cities</Link>,{' '}
                  <Link href="/service-areas/mn/anoka" className="text-brand-primary hover:underline font-medium">Anoka County</Link>,{' '}
                  <Link href="/service-areas/minnesota" className="text-brand-primary hover:underline font-medium">greater Minnesota</Link>, and{' '}
                  <Link href="/service-areas/wisconsin" className="text-brand-primary hover:underline font-medium">Western Wisconsin</Link>{' '}
                  — with honest estimates, no pressure, and 30+ years of experience behind every job.
                </p>
              </AnimatedDiv>

              <AnimatedDiv initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}>
                <p className="text-sm font-semibold text-gray-900 mb-4">Why homeowners choose us:</p>
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
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Residential Roofing & Exterior Services</h2>
              <p className="mt-2 text-sm text-gray-500 max-w-xl">
                Full-scope exterior services for homeowners — roofing, siding, windows, and storm restoration.
              </p>
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
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Residential Roofing Questions</h2>
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
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">Free Inspection</p>
              <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">Request a Free Residential Roof Inspection</h2>
              <p className="mb-7 mx-auto max-w-xl text-sm text-white/70 md:text-base">
                Serving{' '}
                <Link href="/service-areas/minnesota" className="text-white/90 underline underline-offset-2 hover:text-white">Minnesota</Link>{' '}
                and{' '}
                <Link href="/service-areas/wisconsin" className="text-white/90 underline underline-offset-2 hover:text-white">Western Wisconsin</Link>{' '}
                homeowners with certified roofing, siding, and storm damage services. Free, no-obligation inspection — same-day response.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-primary-dark">
                    Get Free Inspection <ArrowRight className="h-4 w-4" />
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
                <Link href="/who-we-serve/agent" className="hover:text-white/80 transition">Real Estate Agents →</Link>
              </div>
            </AnimatedDiv>
          </div>
        </section>

        <InsuranceClaimsCTA variant="compact" />
      </PageLayout>
    </>
  )
}
