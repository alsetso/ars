import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { Building2, Shield, ArrowRight, Clock, Award, Users, FileCheck, Layers, ArrowLeft, HelpCircle } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/seo/FAQSchema'

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
    'townhouse roofing MN',
    'rental property storm damage MN',
    'roofing contractor for landlords Minnesota',
    'property portfolio roofing services MN',
    'property management siding contractor',
    'multi-building exterior repair MN',
    'annual roof maintenance program MN',
    'HOA/PM partnership roofing MN',
    'emergency roof repair for property managers',
  ],
  alternates: {
    canonical: 'https://advancedroofingmn.com/who-we-serve/property-manager',
  },
  openGraph: {
    title: 'Roofing & Exterior Services for Property Managers',
    description: 'Scalable roofing and exterior solutions for apartment buildings, multi-unit properties, and rental portfolios throughout Minnesota & Wisconsin.',
    url: 'https://advancedroofingmn.com/who-we-serve/property-manager',
    type: 'website',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: 'Property Management Roofing Services - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const roofingServices = [
  {
    title: 'Apartment & Townhouse Roofing Solutions',
    description: 'Expert roofing services for apartment buildings, townhomes, and multi-family properties. We specialize in asphalt shingle systems, low-slope sections, and complex rooflines with detailed inspections and moisture checks.',
    icon: Building2,
  },
  {
    title: 'Multi-Unit Roof Replacement & Repairs',
    description: 'Comprehensive roof replacement and repair services for multi-unit buildings. We handle emergency leak repairs, seasonal maintenance, and full roof replacements with minimal disruption to tenants.',
    icon: Layers,
  },
  {
    title: 'Low-Slope & Mixed Roofing System Expertise',
    description: 'Specialized expertise in low-slope and mixed roofing systems common in multi-family buildings. We ensure every building receives the correct solution for its structure and exposure.',
    icon: Shield,
  },
]

const exteriorMaintenance = [
  {
    title: 'Siding, Windows & Exterior Upgrades',
    description: 'Complete exterior upgrades including siding replacement, window installation, and gutter systems. We help improve building performance and protect long-term value for rental properties.',
    icon: Shield,
  },
  {
    title: 'Emergency Roof Repairs & Seasonal Maintenance',
    description: 'Responsive emergency leak repair services and seasonal maintenance including ice dam removal. We provide fast response times to protect your properties and tenants.',
    icon: Clock,
  },
  {
    title: 'Tenant Communication & Minimal Disruption Plans',
    description: 'Comprehensive communication process including resident notifications, scheduling coordination, safety protocols, and clean work sites. We minimize disruption while maintaining quality.',
    icon: Users,
  },
]

const insuranceSupport = [
  {
    title: 'Storm Damage Assessments for Multi-Building Portfolios',
    description: 'Expert identification of insurance-qualifying hail and wind damage across large portfolios. We document damage and coordinate with adjusters to maximize coverage.',
    icon: FileCheck,
  },
  {
    title: 'Insurance Claim Assistance for Property Managers',
    description: 'Full support through the insurance claim process for multi-unit buildings. We help property owners navigate coverage, documentation, and approved repair scopes.',
    icon: Shield,
  },
  {
    title: 'Annual Roof Maintenance Plans',
    description: 'Long-term maintenance programs including annual or biannual inspections. We help property managers budget properly and prevent major failures across multiple buildings.',
    icon: Clock,
  },
]

const faqs = [
  {
    question: 'Do you provide roofing services for apartment buildings and multi-family properties?',
    answer: 'Yes. We work with duplexes, fourplexes, townhomes, apartment buildings, and multi-unit communities throughout Minnesota and Wisconsin.',
  },
  {
    question: 'How do you handle communication with tenants during roofing projects?',
    answer: 'We provide advanced notices, scheduled timelines, onsite safety protocols, and daily updates to minimize tenant disruption.',
  },
  {
    question: 'Can you help property managers with emergency leak repairs?',
    answer: 'Yes. We offer responsive leak repair services for property managers, building owners, and rental portfolio operators.',
  },
  {
    question: 'Do you assist with storm damage claims for multi-unit buildings?',
    answer: 'Yes. We document hail and wind damage, coordinate with insurance adjusters, and help maximize coverage for large portfolios.',
  },
  {
    question: 'Can you manage full exterior projects like siding and windows?',
    answer: 'Yes. We provide siding, window replacement, gutter installation, and full exterior upgrades for rental and multi-family properties.',
  },
  {
    question: 'Do you offer long-term maintenance plans for property portfolios?',
    answer: 'Yes. Annual or biannual roof maintenance plans help property managers budget properly and prevent major failures across multiple buildings.',
  },
]

const whyChoose = [
  {
    icon: Layers,
    title: 'Scalable Solutions',
    description: 'Whether you manage a few rentals or hundreds of units, we deliver scalable exterior solutions that protect your investment and maintain property value.',
  },
  {
    icon: Clock,
    title: 'Fast Response Times',
    description: 'Priority service for property managers with responsive emergency repairs and predictable scheduling to keep your properties operating safely.',
  },
  {
    icon: Award,
    title: '160+ Five-Star Reviews',
    description: 'With decades of experience and proven track record, we\'ve built long-term relationships with property managers who want consistent, dependable service.',
  },
]


export default function PropertyManagerWhoWeServePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PageLayout>
      <PageHero
        title="Property Management Services"
        description="Expert exterior services for property management companies. Comprehensive solutions for apartment buildings, multi-family properties, and commercial facilities"
      />

      {/* Back Button */}
      <Section className="bg-white py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/who-we-serve">
            <Button variant="outline" size="md" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Who We Serve
            </Button>
          </Link>
        </div>
      </Section>

      {/* Introduction - SEO Content */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Card>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Property managers and multi-family owners depend on roofing partners who are reliable, responsive, and capable of handling multi-unit buildings. Advanced Roofing & Siding provides professional <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">windows</Link>, and <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm restoration</Link> services designed specifically for property managers, landlords, and portfolio owners across <Link href="/service-areas/minnesota" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota</Link> and <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Wisconsin</Link>. Whether you oversee a single duplex or a large apartment community, we deliver scalable exterior solutions that improve building performance and protect long-term value. As a <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite® contractor</Link>, we provide <Link href="/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">industry-leading warranties</Link> that protect your property portfolio.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Multi-family buildings face unique challenges: complex rooflines, shared walls, higher foot traffic, and greater exposure to water intrusion issues. Our team understands these demands and provides detailed <Link href="/services/free-inspection" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">inspections</Link>, moisture checks when needed, photo documentation, and clear reporting that helps managers make informed maintenance decisions. We specialize in asphalt shingle systems, low-slope sections, apartment roofing, townhouse roofing, and multi-unit <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm restoration</Link>, ensuring every building receives the correct solution for its structure. Our <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">insurance claim support</Link> helps property managers maximize coverage for large portfolios.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Property managers appreciate our communication process, which includes resident notifications, scheduling coordination, safety protocols, and clean work sites. We handle emergency leak repairs, seasonal maintenance, ice dam removal, gutter systems, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding replacements</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window installations</Link>, and full <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof replacements</Link> with minimal disruption to tenants. In cases of hail or wind damage, we help identify insurance-qualifying damage and guide property owners through the <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">claim process</Link> — an essential service for large multi-building portfolios. Our <Link href="/resources/24-7-support" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">24/7 support</Link> ensures property managers have help when emergency situations arise.
              </p>
              <p className="text-lg text-gray-700">
                With <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">decades of experience</Link> and <Link href="/resources/reviews" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">160+ five-star reviews</Link>, Advanced Roofing & Siding has built long-term relationships with <Link href="/service-areas/minnesota" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota</Link> & <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Wisconsin</Link> property managers who want consistent, dependable service. We provide predictable pricing, fast response times, high-quality workmanship, and a partnership-based approach to maintaining property value. Whether you manage a few rentals or hundreds of units, our team delivers exterior solutions that protect your investment and keep your residents safe and satisfied. We also partner with <Link href="/who-we-serve/hoa" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">HOAs</Link> for multi-unit properties. <Link href="/contact" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Contact us today</Link> to discuss your property management needs and learn how we can help maintain your portfolio.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Roofing Services for Property Managers & Multi-Family Owners */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Roofing Services for Property Managers & Multi-Family Owners"
          description="Apartment, townhouse, and multi-unit roofing solutions with minimal tenant disruption"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {roofingServices.map((service, index) => {
              const Icon = service.icon
              return (
                <AnimatedDiv
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                      <Icon className="h-6 w-6 text-brand-primary" strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <div className="mt-4">
                      <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold text-sm underline underline-offset-2">
                        Learn more about roofing →
                      </Link>
                    </div>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Exterior Maintenance for Rental & Managed Properties */}
      <Section className="bg-white">
        <SectionHeader
          title="Exterior Maintenance for Rental & Managed Properties"
          description="Siding, windows, emergency repairs, and tenant communication for property managers"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {exteriorMaintenance.map((service, index) => {
              const Icon = service.icon
              const serviceLink = service.title.includes('Siding') ? '/services/siding' : service.title.includes('Window') ? '/services/windows' : '/services/roofing'
              return (
                <AnimatedDiv
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                      <Icon className="h-6 w-6 text-brand-primary" strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <div className="mt-4">
                      <Link href={serviceLink} className="text-brand-primary hover:text-red-800 font-semibold text-sm underline underline-offset-2">
                        Learn more →
                      </Link>
                    </div>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Insurance & Long-Term Maintenance Support */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Insurance & Long-Term Maintenance Support"
          description="Storm damage assessments, insurance claims, and annual maintenance plans for property portfolios"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {insuranceSupport.map((service, index) => {
              const Icon = service.icon
              const serviceLink = service.title.includes('Storm') || service.title.includes('Insurance') ? '/services/storm-restoration' : '/services/roofing'
              return (
                <AnimatedDiv
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                      <Icon className="h-6 w-6 text-brand-primary" strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <div className="mt-4">
                      <Link href={serviceLink} className="text-brand-primary hover:text-red-800 font-semibold text-sm underline underline-offset-2">
                        Learn more →
                      </Link>
                    </div>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Why Property Managers Choose Advanced Roofing & Siding */}
      <Section className="bg-white">
        <SectionHeader
          title="Why Property Managers Choose Advanced Roofing & Siding"
          description="Scalable solutions, fast response times, and proven track record"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {whyChoose.map((item, index) => {
              const Icon = item.icon
              return (
                <AnimatedDiv
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                      <Icon className="h-6 w-6 text-brand-primary" strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Frequently Asked Questions About Property Management Services"
          description="Common questions from property managers, landlords, and portfolio owners"
        />
        <div className="mx-auto max-w-4xl">
          <Card>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <AnimatedDiv
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start gap-3 mb-2">
                      <HelpCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                      <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                    </div>
                    <p className="text-gray-700 ml-9">{faq.answer}</p>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Partner With a Trusted Multi-Unit Roofing Contractor */}
      <Section className="bg-gradient-to-br from-red-50 to-white">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-white border-2 border-red-100">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                Partner With a Trusted Multi-Unit Roofing Contractor
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Request an annual maintenance plan for your property portfolio. We serve property managers across <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link> with scalable roofing and exterior solutions. Whether you manage a few rentals or hundreds of units, our team delivers consistent, dependable service that protects your investment. <Link href="/who-we-serve/hoa" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">We also partner with HOAs</Link> for multi-unit properties.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Request Maintenance Plan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/who-we-serve/hoa">
                  <Button variant="outline" size="lg">
                    View HOA Services
                  </Button>
                </Link>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
    </>
  )
}

