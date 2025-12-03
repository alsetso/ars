import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { Home, Shield, ArrowRight, Clock, Award, Users, FileCheck, Building2, ArrowLeft, HelpCircle } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'HOA Roofing Contractor | Townhome & Condo Associations | Minnesota & Wisconsin',
  description: 'Advanced Roofing & Siding provides roofing, siding, and storm restoration services for HOAs, townhome communities, and condo associations across Minnesota & Wisconsin. Multi-building specialists.',
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
    'HOA property maintenance roofing MN',
    'condo roof replacement Minnesota',
    'townhome association siding MN',
    'HOA insurance claim roofing MN',
    'HOA board roofing proposals',
    'HOA roofing estimate MN',
    'multi-unit community roofing contractor',
    'HOA long-term maintenance plans',
    'HOA roofing inspections Minnesota',
  ],
  alternates: {
    canonical: 'https://advancedroofingmn.com/who-we-serve/hoa',
  },
  openGraph: {
    title: 'HOA Roofing & Exterior Services for Multi-Building Communities',
    description: 'Trusted contractor for HOAs needing consistent, long-lasting exterior solutions across multiple buildings. Serving Minnesota & Wisconsin communities since 2001.',
    url: 'https://advancedroofingmn.com/who-we-serve/hoa',
    type: 'website',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: 'HOA Roofing Services - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const hoaRoofingServices = [
  {
    title: 'Multi-Building Roof Replacement & Repairs',
    description: 'Comprehensive roof replacement and repair services for entire HOA communities. We specialize in multi-building projects with consistent materials and workmanship across all structures.',
    icon: Building2,
  },
  {
    title: 'Townhome & Condo Roofing Solutions',
    description: 'Expert roofing services for townhome associations and condo buildings. We handle complex rooflines, shared walls, and multi-unit structures with detailed inspections and clear reporting.',
    icon: Home,
  },
  {
    title: 'HOA Siding & Exterior Upgrades',
    description: 'Complete exterior upgrades including siding replacement, window installation, and building envelope improvements. We maintain community-wide consistency and appearance standards.',
    icon: Shield,
  },
]

const stormDamageSupport = [
  {
    title: 'Community-Wide Inspections & Documentation',
    description: 'Building-by-building assessments for entire HOA communities. We provide detailed photo documentation and clear recommendations tailored to HOA needs and insurance requirements.',
    icon: FileCheck,
  },
  {
    title: 'Insurance Claim Coordination for Associations',
    description: 'Full support through the insurance claim process for multi-building communities. We help boards understand insurance eligibility and manage claims to maximize approved coverage.',
    icon: Shield,
  },
  {
    title: 'Hail, Wind & Ice Damage Restoration',
    description: 'Expert storm damage restoration for HOA communities affected by hailstorms, wind events, and ice damage. We coordinate community-wide repairs with minimal disruption to residents.',
    icon: Clock,
  },
]

const communicationServices = [
  {
    title: 'Resident Notifications & Safety Planning',
    description: 'Comprehensive communication including resident notices, scheduled work windows, parking plans, and safety management. We keep the community informed throughout every project.',
    icon: Users,
  },
  {
    title: 'Board Review Documents & Proposal Packages',
    description: 'Detailed proposals, photo documentation, and material options prepared for HOA board approval. We provide clear documentation to support board decision-making and budgeting.',
    icon: FileCheck,
  },
  {
    title: 'Consistent Workmanship Across All Buildings',
    description: 'Uniform materials, installation methods, and crews ensure every building looks and performs the same. We maintain community-wide consistency and appearance standards.',
    icon: Award,
  },
]

const faqs = [
  {
    question: 'Do you work with HOA boards and property management companies?',
    answer: 'Yes. We work closely with HOA boards, community managers, and homeowners to coordinate multi-building roofing and exterior projects.',
  },
  {
    question: 'Can you provide proposals for board approval?',
    answer: 'Yes. We prepare detailed proposals, documentation, and material options to support HOA board decision-making.',
  },
  {
    question: 'How do you manage communication with residents during construction?',
    answer: 'We deliver notices, timelines, parking plans, and safety instructions to keep residents informed with minimal disruption.',
  },
  {
    question: 'Do you handle community-wide storm damage repairs?',
    answer: 'Yes. We complete HOA-wide inspections, document storm damage, and provide full support for insurance claims.',
  },
  {
    question: 'Can you maintain consistency across multiple buildings?',
    answer: 'Absolutely. We use consistent materials, crews, and installation methods to ensure community-wide uniformity.',
  },
  {
    question: 'Do you offer long-term maintenance plans for HOAs?',
    answer: 'Yes. We provide annual or multi-year roof maintenance plans to support budgeting and ongoing exterior upkeep.',
  },
]

const whyChoose = [
  {
    icon: Shield,
    title: 'Reliability & Long-Term Warranties',
    description: 'Trusted by HOAs for our reliability, transparent pricing, and industry-leading warranties that protect community value for years to come.',
  },
  {
    icon: Building2,
    title: 'Multi-Building Expertise',
    description: 'More than two decades of experience managing multiple buildings, coordinating with residents, and providing consistent, long-lasting solutions.',
  },
  {
    icon: Award,
    title: 'Consistent Workmanship',
    description: 'Uniform materials, installation methods, and crews ensure every building looks and performs the same across your entire community.',
  },
]


export default function HOAWhoWeServePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PageLayout>
      <PageHero
        title="Homeowner Association Services"
        description="Expert exterior services for HOA boards. Comprehensive solutions for homeowner associations managing multiple properties"
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
                Homeowners associations need a contractor who can manage multiple buildings, coordinate with residents, and provide consistent, long-lasting exterior solutions. Advanced Roofing & Siding delivers professional <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link>, and <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm restoration</Link> services for HOAs, condo associations, and townhome communities across <Link href="/service-areas/minnesota" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota</Link> and <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Wisconsin</Link>. With more than two decades of experience, we understand the unique challenges of multi-unit properties, board approvals, budgeting requirements, and long-term maintenance planning. As a <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite® contractor</Link>, we provide <Link href="/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">industry-leading warranties</Link> that protect your community's investment.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Minnesota and Wisconsin communities face harsh weather cycles — hailstorms, heavy snow, wind events, and freeze-thaw damage — that can accelerate wear across multiple buildings at the same time. Our team provides detailed <Link href="/services/free-inspection" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">inspections</Link>, photo documentation, and clear recommendations tailored to HOA needs. We specialize in multi-building roof replacements, townhome roofing, condo roofing, asphalt shingles, low-slope sections, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding replacement</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window upgrades</Link>, and insurance-backed <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm restoration</Link> for entire communities or individual structures. Our <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">insurance claim support</Link> helps HOAs maximize coverage for community-wide projects.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                HOA projects require communication and coordination, and we excel in both. We provide resident notices, scheduled work windows, parking plans, safety management, and real-time updates so the community remains informed throughout the project. When <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm damage</Link> affects an HOA, we perform building-by-building assessments, help boards understand insurance eligibility, and manage the <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">claim process</Link> to maximize approved coverage — often resulting in fully funded community-wide replacements. Our <Link href="/resources/24-7-support" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">24/7 support</Link> ensures HOAs have help when emergency situations arise, protecting residents and property.
              </p>
              <p className="text-lg text-gray-700">
                Advanced Roofing & Siding is trusted by HOAs because of our reliability, long-term <Link href="/resources/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">warranties</Link>, transparent pricing, and consistent workmanship across every building. With <Link href="/resources/reviews" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">160+ five-star reviews</Link> and <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">30+ years of experience</Link>, we've built long-term relationships with HOAs throughout the region. Whether your association needs a full <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof replacement</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding upgrade</Link>, or ongoing exterior maintenance plan, we deliver solutions that protect the community's value, appearance, and structural integrity for years to come. We also partner with <Link href="/who-we-serve/property-manager" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">property management companies</Link> for multi-unit properties. <Link href="/contact" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Schedule an HOA assessment today</Link> to start planning for your community's exterior needs with <Link href="/service-areas/minnesota" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota</Link> & <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Wisconsin</Link>'s most dependable contractor.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Roofing & Exterior Services for HOAs & Community Associations */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Roofing & Exterior Services for HOAs & Community Associations"
          description="Multi-building roof replacement, townhome and condo roofing, and HOA siding upgrades"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {hoaRoofingServices.map((service, index) => {
              const Icon = service.icon
              const serviceLink = service.title.includes('Siding') ? '/services/siding' : '/services/roofing'
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

      {/* Storm Damage & Insurance Support for HOAs */}
      <Section className="bg-white">
        <SectionHeader
          title="Storm Damage & Insurance Support for HOAs"
          description="Community-wide inspections, insurance claim coordination, and storm damage restoration"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {stormDamageSupport.map((service, index) => {
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
                      <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold text-sm underline underline-offset-2">
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

      {/* HOA Communication & Project Coordination */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="HOA Communication & Project Coordination"
          description="Resident notifications, board review documents, and consistent workmanship across all buildings"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {communicationServices.map((service, index) => {
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
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Why HOAs Choose Advanced Roofing & Siding */}
      <Section className="bg-white">
        <SectionHeader
          title="Why HOAs Choose Advanced Roofing & Siding"
          description="Reliability, multi-building expertise, and consistent workmanship"
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
          title="Frequently Asked Questions About HOA Services"
          description="Common questions from HOA boards, community managers, and association members"
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

      {/* Protect Your Community With Trusted HOA Roofing Experts */}
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
                Protect Your Community With Trusted HOA Roofing Experts
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Request an HOA Board Presentation to start planning for your community's exterior needs. We serve HOAs, townhome associations, and condo communities across <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link> with consistent, long-lasting exterior solutions. Whether you need a full roof replacement, siding upgrade, or ongoing maintenance plan, our team delivers solutions that protect your community's value. <Link href="/who-we-serve/property-manager" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">We also partner with property management companies</Link> for multi-unit properties.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Request Board Presentation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/who-we-serve/property-manager">
                  <Button variant="outline" size="lg">
                    View Property Management Services
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

