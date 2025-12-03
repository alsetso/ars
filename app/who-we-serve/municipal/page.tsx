import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { Building2, Shield, ArrowRight, Clock, Award, Users, FileCheck, Landmark, ArrowLeft, HelpCircle } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/seo/FAQSchema'

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
    'public works roofing MN',
    'government contractor roofing Minnesota',
    'municipal bid roofing contractor',
    'school district roof inspection MN',
    'municipal roofing compliance Minnesota',
    'state building roofing services',
    'ADA & code-compliant exterior upgrades MN',
    'warranty-backed public building roofing',
    'procurement-ready roofing company MN',
  ],
  alternates: {
    canonical: 'https://advancedroofingmn.com/who-we-serve/municipal',
  },
  openGraph: {
    title: 'Municipal & Government Roofing Services',
    description: 'Certified roofing and exterior solutions for government buildings, schools, and municipal facilities across Minnesota and Wisconsin.',
    url: 'https://advancedroofingmn.com/who-we-serve/municipal',
    type: 'website',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: 'Municipal & Government Roofing Services - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const municipalRoofingServices = [
  {
    title: 'Roofing for City, County & State Buildings',
    description: 'Expert roofing services for city halls, county facilities, state buildings, and administrative offices. We provide TPO, EPDM, modified bitumen, and asphalt shingle systems with comprehensive inspections and detailed reporting for facility planning.',
    icon: Building2,
  },
  {
    title: 'School District Roofing & Exterior Upgrades',
    description: 'Specialized roofing and exterior services for school buildings, ensuring minimal disruption to students and staff. We work with school districts on long-term maintenance planning and code-compliant installations.',
    icon: Landmark,
  },
  {
    title: 'Public Safety Building Roofing (Fire, Police, EMS)',
    description: 'Critical roofing services for fire stations, police departments, and emergency services facilities. We understand the importance of maintaining operational readiness while completing necessary exterior work.',
    icon: Shield,
  },
]

const codeCompliantServices = [
  {
    title: 'TPO, EPDM & Asphalt Roofing for Municipal Buildings',
    description: 'Code-compliant roofing systems including TPO, EPDM, modified bitumen, and architectural asphalt shingles. We ensure all installations meet municipal standards and building codes.',
    icon: Building2,
  },
  {
    title: 'Siding, Window & Envelope Improvements',
    description: 'Complete exterior envelope upgrades including siding replacement, window upgrades, and building envelope improvements. All work follows ADA requirements and municipal building codes.',
    icon: FileCheck,
  },
  {
    title: 'Storm Damage Repairs for Government Facilities',
    description: 'Fast response for storm damage assessments and repairs on municipal buildings. We provide moisture mapping, detailed documentation, and full reporting for insurance and risk-management teams.',
    icon: Clock,
  },
]

const faqs = [
  {
    question: 'Do you work with city, county, and school procurement processes?',
    answer: 'Yes. We follow municipal bidding procedures, provide detailed proposals, and supply all required documentation for approvals.',
  },
  {
    question: 'What roofing systems are best for government buildings?',
    answer: 'Most public facilities use TPO, EPDM, modified bitumen, or architectural asphalt shingles, depending on slope and structure.',
  },
  {
    question: 'Can you complete work while buildings remain open?',
    answer: 'Yes. We plan schedules around daily operations, create safety zones, and limit disruptions to staff and visitors.',
  },
  {
    question: 'Do you handle storm damage assessments for municipal buildings?',
    answer: 'Yes. We provide inspections, moisture mapping if needed, and full documentation for insurance or risk-management teams.',
  },
  {
    question: 'Are your crews insured and certified for municipal work?',
    answer: 'All crews are insured, and our installers meet manufacturer-certified requirements for municipal and government projects.',
  },
  {
    question: 'Can you assist with long-term facility planning?',
    answer: 'Yes. We provide roof life expectancy reports, inspection schedules, and maintenance plans to support municipal budgeting.',
  },
]

const whyChoose = [
  {
    icon: Shield,
    title: 'Safety, Compliance & Detailed Documentation',
    description: 'All projects follow strict safety standards, communication protocols, and provide comprehensive documentation suitable for facility planning, budgeting, and board review.',
  },
  {
    icon: Clock,
    title: 'Minimal Disruption to Day-to-Day Operations',
    description: 'We plan schedules around daily operations, create safety zones, and limit disruptions to employees, students, and the public while maintaining operational readiness.',
  },
  {
    icon: Award,
    title: 'Warranty-Backed Solutions for Long-Term Value',
    description: 'Industry-leading warranties backed by certifications, insured subcontractors, and proven workmanship that protects public facilities for decades.',
  },
]


export default function MunicipalWhoWeServePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PageLayout>
      <PageHero
        title="Municipal & Government Services"
        description="Expert exterior services for cities and municipalities. Supporting public buildings, facilities, and infrastructure projects across Minnesota and Wisconsin"
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
                Municipal buildings require durability, compliance, and precise execution. Advanced Roofing & Siding provides professional <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link> and exterior services for cities, counties, school districts, and government-owned facilities across <Link href="/service-areas/minnesota" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota</Link> and <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Wisconsin</Link>. With more than 20 years of experience, certified installers, and a proven track record of reliability, we help public entities protect critical infrastructure with long-lasting, code-compliant roofing systems. Our team understands the unique requirements of government work — from procurement processes and documentation to risk management, safety procedures, and strict budget oversight. As a <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite® contractor</Link>, we provide <Link href="/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">industry-leading warranties</Link> that protect public investments.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Public buildings often face more severe wear due to age, heavy foot traffic, mechanical units, and exposure to Minnesota's extreme seasonal weather. We specialize in municipal roofing systems including TPO, EPDM, modified bitumen, asphalt shingles, and architectural metal roofing, ensuring your facility receives the correct system for its structure. Before any work begins, we perform a comprehensive <Link href="/services/free-inspection" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">inspection</Link> with aerial measurements, moisture analysis (when needed), and detailed reporting suitable for facility planning, budgeting, and board review. Our <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm damage assessments</Link> help municipalities understand insurance eligibility and maximize coverage for public facilities.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                In addition to <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link>, our municipal exterior services include <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding replacement</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window and envelope upgrades</Link>, <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm damage restoration</Link>, and long-term maintenance planning. We work with city halls, public works buildings, fire stations, police departments, libraries, water treatment plants, maintenance shops, school buildings, and administrative facilities throughout the <Link href="/service-areas/minnesota/minneapolis" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Twin Cities</Link>, <Link href="/service-areas/minnesota/st-paul" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">St. Paul</Link>, and surrounding areas. Every project follows strict safety standards, communication protocols, and scheduling plans designed to minimize disruption to employees, students, and the public. Our <Link href="/resources/24-7-support" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">24/7 support</Link> ensures municipalities have help when emergency situations arise.
              </p>
              <p className="text-lg text-gray-700">
                Advanced Roofing & Siding is known for quality workmanship, transparent communication, and project accountability — backed by certifications, insured subcontractors, and industry-leading <Link href="/resources/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">warranties</Link>. With <Link href="/resources/reviews" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">160+ five-star reviews</Link> and <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">30+ years of experience</Link>, we've built long-term relationships with municipalities throughout the region. When your municipality or public facility requires trusted exterior specialists, our team delivers reliable service, competitive pricing, and clear documentation required for municipal approval. We maintain full compliance with government standards and procurement requirements. <Link href="/contact" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Request a municipal roof assessment today</Link> to protect your facilities with proven, long-lasting solutions.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Municipal & Government Roofing Services */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Municipal & Government Roofing Services"
          description="Roofing for city, county, state buildings, schools, and public safety facilities"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {municipalRoofingServices.map((service, index) => {
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
                        Learn more about municipal roofing →
                      </Link>
                    </div>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Code-Compliant Roofing & Exterior Solutions */}
      <Section className="bg-white">
        <SectionHeader
          title="Code-Compliant Roofing & Exterior Solutions"
          description="TPO, EPDM, siding, windows, and storm damage repairs for government facilities"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {codeCompliantServices.map((service, index) => {
              const Icon = service.icon
              const serviceLink = service.title.includes('Siding') ? '/services/siding' : service.title.includes('Window') ? '/services/windows' : service.title.includes('Storm') ? '/services/storm-restoration' : '/services/roofing'
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

      {/* Why Municipalities Choose Advanced Roofing & Siding */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Why Municipalities Choose Advanced Roofing & Siding"
          description="Safety, compliance, minimal disruption, and warranty-backed solutions"
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
      <Section className="bg-white">
        <SectionHeader
          title="Frequently Asked Questions About Municipal Services"
          description="Common questions from city officials, school districts, and government facility managers"
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

      {/* Request a Municipal Roof Assessment */}
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
                Request a Municipal Roof Assessment
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Request a municipal roof assessment today to protect your facilities with proven, long-lasting solutions. We serve cities, counties, and school districts across <Link href="/service-areas/minnesota/minneapolis" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minneapolis</Link>, <Link href="/service-areas/minnesota/st-paul" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">St. Paul</Link>, <Link href="/service-areas/minnesota/anoka" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Anoka</Link>, <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Blaine</Link>, <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Maple Grove</Link>, <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Ramsey</Link>, <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Elk River</Link>, <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Hudson, WI</Link>, and surrounding areas.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Schedule Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services/free-inspection">
                  <Button variant="outline" size="lg">
                    Learn About Inspections
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

