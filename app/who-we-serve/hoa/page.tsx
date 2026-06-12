import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { ReviewsBanner } from '@/components/sections/ReviewsBanner'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Building2, Shield, Clock, Award, FileCheck, Users, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'HOA Roofing Contractor | Townhome & Condo Associations | Minnesota & Wisconsin',
  description: 'Advanced Roofing & Siding provides roofing, siding, and storm restoration for HOAs, townhome communities, and condo associations across Minnesota & Wisconsin. Multi-building specialists.',
  keywords: [
    'HOA roofing contractor Minnesota',
    'homeowners association roofing MN',
    'condo association roof replacement',
    'townhome roofing services MN',
    'HOA exterior contractor Minnesota',
    'HOA siding contractor MN',
    'multi-building roofing Minnesota',
    'HOA storm damage repair MN',
    'HOA roofing Wisconsin',
    'HOA insurance claim roofing MN',
    'HOA board roofing proposals',
    'multi-unit community roofing contractor',
    'HOA long-term maintenance plans',
    'HOA roofing inspections Minnesota',
  ],
  alternates: { canonical: 'https://advancedroofingmn.com/who-we-serve/hoa' },
  openGraph: {
    title: 'HOA Roofing & Exterior Services for Multi-Building Communities',
    description: 'Trusted contractor for HOAs needing consistent, long-lasting exterior solutions across multiple buildings. Serving Minnesota & Wisconsin communities.',
    url: 'https://advancedroofingmn.com/who-we-serve/hoa',
    type: 'website',
    images: [{ url: 'https://advancedroofingmn.com/AFS-Logo900.png', width: 1200, height: 630, alt: 'HOA Roofing Services - Advanced Roofing & Siding Inc.' }],
  },
}

const services = [
  { title: 'Multi-Building Roof Replacement & Repairs', href: '/services/roofing', icon: Building2, desc: 'Community-wide roof replacement with consistent materials, crews, and workmanship across every structure.' },
  { title: 'Townhome & Condo Roofing', href: '/services/roofing', icon: Building2, desc: 'Complex rooflines, shared walls, and multi-unit structures handled with detailed inspections and clear reporting.' },
  { title: 'HOA Siding & Exterior Upgrades', href: '/services/siding', icon: Shield, desc: 'Siding replacement and building envelope improvements that maintain community-wide appearance standards.' },
  { title: 'Community-Wide Storm Inspections', href: '/resources/insurance-claims', icon: FileCheck, desc: 'Building-by-building hail and wind assessments with photo documentation tailored to HOA insurance requirements.' },
  { title: 'Insurance Claim Coordination', href: '/resources/insurance-claims', icon: Shield, desc: 'Full claim support for associations — documentation, adjuster meetings, and maximizing approved coverage.' },
  { title: 'HOA Communication & Resident Plans', href: '/contact', icon: Users, desc: 'Resident notices, parking plans, safety zones, and board-ready proposal packages for every project.' },
]

const whyChoose = [
  { text: 'Multi-building experience — consistent materials and crews across all units', href: '/about' },
  { text: 'Board presentation packages with photo documentation and material options', href: '/contact' },
  { text: 'GAF Master Elite® Certified with 50-year warranty options', href: '/resources/gaf-master-elite-contractor' },
  { text: 'Community-wide storm damage claims and adjuster coordination', href: '/resources/insurance-claims' },
  { text: 'Annual and multi-year maintenance plans for HOA budgeting', href: '/contact' },
  { text: '160+ five-star reviews — trusted by MN & WI associations', href: '/resources/reviews' },
]

const faqs = [
  { question: 'Do you work with HOA boards and property management companies?', answer: 'Yes. We work directly with HOA boards and community managers to coordinate multi-building roofing and exterior projects from proposal through completion.' },
  { question: 'Can you provide board-ready proposal packages?', answer: 'Yes. We prepare detailed proposals with photo documentation, material options, and project timelines specifically structured for HOA board review and approval.' },
  { question: 'How do you manage resident communication during construction?', answer: 'We deliver advance notices, daily timelines, parking plans, and onsite safety instructions to keep residents informed and minimize disruption throughout the project.' },
  { question: 'Do you handle community-wide storm damage claims?', answer: 'Yes. We complete building-by-building inspections, document hail and wind damage, and provide full adjuster support to maximize insurance coverage for the entire community.' },
  { question: 'Can you maintain consistent results across all buildings?', answer: 'Absolutely. We use the same materials, installation methods, and crews across every building to ensure uniform performance and appearance community-wide.' },
  { question: 'Do you offer long-term maintenance plans for HOAs?', answer: 'Yes. Annual or multi-year maintenance plans help HOA boards budget proactively and prevent major exterior failures across all properties.' },
]

export default function HOAWhoWeServePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Who We Serve', url: '/who-we-serve' },
        { name: 'Homeowner Associations', url: '/who-we-serve/hoa' },
      ]} />
      <PageLayout>
        <PageHero
          title="Homeowner Association Services"
          description="Expert exterior services for HOA boards. Comprehensive solutions for homeowner associations managing multiple properties"
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
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-3">HOA & Condo</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 md:text-3xl">
                  Multi-Building Expertise for HOA Boards
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Managing exterior work across a multi-building community requires a contractor who understands HOA workflows — board approvals, resident communication, consistent materials, and insurance coordination.
                  We've partnered with HOAs, townhome associations, and condo communities across{' '}
                  <Link href="/service-areas/minnesota" className="text-brand-primary hover:underline font-medium">Minnesota</Link>{' '}
                  and{' '}
                  <Link href="/service-areas/wisconsin" className="text-brand-primary hover:underline font-medium">Wisconsin</Link>{' '}
                  to deliver community-wide roofing and exterior projects that pass board review and satisfy residents.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From community-wide{' '}
                  <Link href="/resources/insurance-claims/hail-damage" className="text-brand-primary hover:underline font-medium">hail damage claims</Link>{' '}
                  to phased{' '}
                  <Link href="/services/roofing" className="text-brand-primary hover:underline font-medium">roof replacement programs</Link>{' '}
                  and ongoing{' '}
                  <Link href="/resources/warranties" className="text-brand-primary hover:underline font-medium">warranty-backed maintenance</Link>,
                  we provide the documentation, communication, and consistent workmanship your board needs.
                </p>
              </AnimatedDiv>

              <AnimatedDiv initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}>
                <p className="text-sm font-semibold text-gray-900 mb-4">Why HOA boards choose us:</p>
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
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">HOA Roofing & Exterior Services</h2>
              <p className="mt-2 text-sm text-gray-500 max-w-xl">Community-wide exterior solutions for HOAs, condo associations, and townhome communities.</p>
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
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">HOA Roofing Questions</h2>
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
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">HOA Board Consultation</p>
              <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">Protect Your Community With Trusted HOA Roofing Experts</h2>
              <p className="mb-7 mx-auto max-w-xl text-sm text-white/70 md:text-base">
                Serving HOAs, townhome associations, and condo communities across{' '}
                <Link href="/service-areas/minnesota" className="text-white/90 underline underline-offset-2 hover:text-white">Minnesota</Link>{' '}
                and{' '}
                <Link href="/service-areas/wisconsin" className="text-white/90 underline underline-offset-2 hover:text-white">Wisconsin</Link>.
                Request a board presentation and inspection — no obligation.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-primary-dark">
                    Request Board Consultation <ArrowRight className="h-4 w-4" />
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
