import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { ReviewsBanner } from '@/components/sections/ReviewsBanner'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { FileCheck, Shield, Clock, TrendingUp, Home, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Roofing for Real Estate Professionals | Realtors, Investors & Brokers | MN & WI',
  description: 'Advanced Roofing & Siding provides fast roof certifications, pre-listing inspections, and property-ready exterior services for real estate agents, investors, and brokers across Minnesota and Wisconsin.',
  keywords: [
    'roofing for realtors Minnesota',
    'real estate roof inspection MN',
    'pre-listing roof inspection Minnesota',
    'roof certification for home sale MN',
    'realtor roofing contractor MN',
    'real estate investor roofing Minnesota',
    'fast roof replacement Twin Cities',
    'roofing contractor for real estate agents',
    'broker roofing services MN',
    'flip house roofing contractor Minnesota',
    'investment property roofing MN',
    'real estate storm damage assessment MN',
    'roofing estimate for property sale Minnesota',
    'roof inspection before closing MN',
  ],
  alternates: { canonical: 'https://advancedroofingmn.com/who-we-serve/agent' },
  openGraph: {
    title: 'Roofing for Realtors, Investors & Real Estate Professionals',
    description: 'Fast turnaround roofing, pre-listing inspections, and roof certifications for real estate transactions across Minnesota & Wisconsin.',
    url: 'https://advancedroofingmn.com/who-we-serve/agent',
    type: 'website',
    images: [{ url: 'https://advancedroofingmn.com/AFS-Logo900.png', width: 1200, height: 630, alt: 'Real Estate Roofing - Advanced Roofing & Siding Inc.' }],
  },
}

const services = [
  { title: 'Pre-Listing Roof Inspections', href: '/services/free-estimate', icon: FileCheck, desc: 'Identify issues before they become deal-breakers. Written inspection reports for disclosures and negotiations.' },
  { title: 'Roof Certifications for Buyers & Lenders', href: '/services/free-estimate', icon: Shield, desc: 'Lender-accepted roof certifications that remove inspection contingencies and speed up closings.' },
  { title: 'Fast Turnaround Roof Replacements', href: '/services/roofing', icon: Clock, desc: 'Most installs completed in one day. We meet real estate timelines without cutting corners.' },
  { title: 'Storm Damage Discovery & Insurance Claims', href: '/resources/insurance-claims', icon: TrendingUp, desc: 'Identify qualifying hail or wind damage before listing — often covered by insurance with minimal seller cost.' },
  { title: 'Siding & Exterior Upgrades for Marketability', href: '/services/siding', icon: Home, desc: 'LP SmartSide® and fiber cement siding that improves curb appeal and appraised value before listing.' },
  { title: 'Investment & Flip Property Services', href: '/services/roofing', icon: TrendingUp, desc: 'Efficient, scalable roofing and siding for investors managing multiple properties across MN & WI.' },
]

const whyChoose = [
  { text: 'Rapid estimates and inspection reports — usually within 24 hours', href: '/contact' },
  { text: 'Most roof replacements completed in a single day', href: '/services/roofing' },
  { text: 'GAF Master Elite® Certified — quality buyers and lenders trust', href: '/resources/gaf-master-elite-contractor' },
  { text: 'Storm damage discovery often results in insurance-covered repairs', href: '/resources/insurance-claims' },
  { text: 'Experience working with real estate timelines and closing deadlines', href: '/about' },
  { text: '160+ five-star reviews — a name buyers and sellers recognize', href: '/resources/reviews' },
]

const faqs = [
  { question: 'Can you turn around a roof inspection report quickly?', answer: 'Yes. We typically provide written inspection reports within 24 hours of the inspection — structured for disclosure documents and transaction negotiations.' },
  { question: 'Do you provide roof certifications for lenders?', answer: 'Yes. Our certifications are accepted by most lenders and can help remove roof-related inspection contingencies to speed up closings.' },
  { question: 'How quickly can you complete a roof replacement for a listing?', answer: 'Most residential roof replacements are completed in a single day. We work around transaction timelines and can prioritize pre-listing projects.' },
  { question: 'Can storm damage be covered by insurance before the property sells?', answer: 'Often yes. We perform a complimentary damage assessment — if qualifying hail or wind damage exists, the seller\'s insurance typically covers replacement with minimal out-of-pocket cost.' },
  { question: 'Do you work with real estate investors and property flippers?', answer: 'Yes. We regularly partner with investors managing multiple properties and can prioritize scheduling to meet renovation and resale timelines.' },
  { question: 'What areas do you serve for real estate transactions?', answer: 'We serve the Twin Cities metro, Anoka County, greater Minnesota, and Western Wisconsin — covering most of the MN and WI real estate market.' },
]

export default function AgentWhoWeServePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Who We Serve', url: '/who-we-serve' },
        { name: 'Real Estate Professionals', url: '/who-we-serve/agent' },
      ]} />
      <PageLayout>
        <PageHero
          title="Real Estate Professionals"
          description="Fast inspections, roof certifications, and property-ready exterior services for realtors, investors, and brokers across Minnesota and Wisconsin"
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
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-3">Real Estate</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 md:text-3xl">
                  Close Deals Faster With a Reliable Roofing Partner
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Real estate transactions move fast, and roof issues can stall or kill a deal. Whether you need a pre-listing inspection, a lender certification, or a fast replacement to clear a contingency — Advanced Roofing & Siding delivers.
                  We work with realtors, brokers, and investors across the{' '}
                  <Link href="/service-areas/mn/minneapolis" className="text-brand-primary hover:underline font-medium">Twin Cities</Link>,{' '}
                  <Link href="/service-areas/mn/anoka" className="text-brand-primary hover:underline font-medium">Anoka County</Link>,
                  and throughout{' '}
                  <Link href="/service-areas/minnesota" className="text-brand-primary hover:underline font-medium">Minnesota</Link>{' '}
                  and{' '}
                  <Link href="/service-areas/wisconsin" className="text-brand-primary hover:underline font-medium">Wisconsin</Link>.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As a{' '}
                  <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:underline font-medium">GAF Master Elite® Contractor</Link>,
                  our work carries manufacturer-backed warranties buyers and lenders trust. We also identify{' '}
                  <Link href="/resources/insurance-claims" className="text-brand-primary hover:underline font-medium">insurance-qualifying storm damage</Link>{' '}
                  that can reduce seller out-of-pocket costs significantly before listing.
                </p>
              </AnimatedDiv>

              <AnimatedDiv initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}>
                <p className="text-sm font-semibold text-gray-900 mb-4">Why real estate professionals choose us:</p>
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
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Real Estate Roofing & Exterior Services</h2>
              <p className="mt-2 text-sm text-gray-500 max-w-xl">Inspection reports, certifications, and property-ready exterior work built around real estate timelines.</p>
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
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Real Estate Roofing Questions</h2>
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
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">Work Together</p>
              <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">Ready to Work Together?</h2>
              <p className="mb-7 mx-auto max-w-xl text-sm text-white/70 md:text-base">
                Fast estimates, inspection reports within 24 hours, and same-day responses for real estate professionals across{' '}
                <Link href="/service-areas/minnesota" className="text-white/90 underline underline-offset-2 hover:text-white">Minnesota</Link>{' '}
                and{' '}
                <Link href="/service-areas/wisconsin" className="text-white/90 underline underline-offset-2 hover:text-white">Wisconsin</Link>.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-primary-dark">
                    Request an Inspection <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <a href={`tel:${COMPANY_INFO.phone}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-white/40">
                  <Phone className="h-4 w-4" /> {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-white/50">
                <Link href="/who-we-serve/residential" className="hover:text-white/80 transition">Residential →</Link>
                <Link href="/who-we-serve/commercial" className="hover:text-white/80 transition">Commercial →</Link>
                <Link href="/who-we-serve/property-manager" className="hover:text-white/80 transition">Property Managers →</Link>
                <Link href="/who-we-serve/hoa" className="hover:text-white/80 transition">HOA & Condo →</Link>
              </div>
            </AnimatedDiv>
          </div>
        </section>

        <InsuranceClaimsCTA variant="compact" />
      </PageLayout>
    </>
  )
}
