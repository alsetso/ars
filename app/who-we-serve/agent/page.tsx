import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { Users, Shield, CheckCircle, ArrowRight, Clock, Award, Briefcase, FileCheck, TrendingUp, ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Real Estate Professionals - Who We Serve | Advanced Roofing & Siding Inc.',
  description: 'Expert exterior services for realtors, brokers, investors, and wholesalers across Minnesota and Wisconsin. Fast, reliable service for real estate transactions.',
  keywords: 'real estate services, realtor services, broker services, investor services, property ready services, real estate contractor, Minnesota, Wisconsin',
  alternates: {
    canonical: 'https://advancedroofingmn.com/who-we-serve/agent',
  },
}

const services = [
  {
    title: 'Property Preparation',
    description: 'Expert exterior work to prepare properties for sale, ensuring they\'re market-ready and appealing to buyers.',
    icon: Briefcase,
  },
  {
    title: 'Fast Turnaround',
    description: 'Understanding the time-sensitive nature of real estate, we work efficiently to meet your project deadlines.',
    icon: Clock,
  },
  {
    title: 'Investment Property Services',
    description: 'Exterior services for investment properties, helping you maximize value and minimize time on market.',
    icon: TrendingUp,
  },
  {
    title: 'Property Inspections',
    description: 'Professional exterior inspections to identify issues before they become deal-breakers in transactions.',
    icon: FileCheck,
  },
]

const benefits = [
  'Understanding of real estate timelines',
  'Fast project completion',
  'Property-ready solutions',
  'Clear communication throughout projects',
  'Experience with investment properties',
  'Licensed and insured',
  'GAF Master Elite certified quality',
  'Industry-leading warranties',
  'Respect for transaction deadlines',
  'Professional service',
]

const whyChoose = [
  {
    icon: Award,
    title: 'GAF Master Elite',
    description: 'One of only 2% of contractors nationwide with this prestigious certification, ensuring quality that adds value to properties.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'We understand real estate timelines and work efficiently to complete projects when you need them done.',
  },
  {
    icon: Users,
    title: 'Real Estate Experience',
    description: '30+ years of experience working with real estate professionals, understanding the unique needs of property transactions.',
  },
  {
    icon: Shield,
    title: 'Property Ready',
    description: 'We ensure properties are market-ready with quality workmanship that enhances property value and appeal.',
  },
]

const process = [
  {
    step: 1,
    title: 'Property Assessment',
    description: 'We assess the property to understand what needs to be done and provide a clear timeline that works with your transaction schedule.',
  },
  {
    step: 2,
    title: 'Quick Proposal',
    description: 'Receive a detailed proposal with material options, timeline, and pricing designed to meet your real estate deadlines.',
  },
  {
    step: 3,
    title: 'Efficient Execution',
    description: 'We work efficiently to complete the project on time, keeping you informed throughout the process.',
  },
  {
    step: 4,
    title: 'Property Ready',
    description: 'Final inspection ensures the property is market-ready with quality workmanship that enhances value.',
  },
]

export default function AgentWhoWeServePage() {
  return (
    <PageLayout>
      <PageHero
        title="Real Estate Professionals"
        description="Expert exterior services for realtors, brokers, investors, and wholesalers. Fast, reliable service for real estate transactions across Minnesota and Wisconsin"
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

      {/* Introduction */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Card>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                We serve real estate professionals who need fast, reliable exterior services for properties in transaction across <Link href="/service-areas/minnesota" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota</Link> and <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Western Wisconsin</Link>. We understand the fast-paced nature of real estate and the importance of meeting deadlines while delivering quality work. Whether you're a realtor preparing a listing, a broker managing multiple properties, or an investor flipping houses, our team delivers <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link>, and <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window</Link> services that make properties market-ready and enhance their value.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                As a <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite® contractor</Link> with <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">30+ years of experience</Link>, we bring the expertise needed to prepare properties for sale efficiently. Our <Link href="/services/free-estimate" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">free estimates</Link> help you understand project costs quickly, and our fast turnaround times ensure properties are ready when you need them. We work with real estate professionals throughout the <Link href="/service-areas/minnesota/minneapolis" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Twin Cities</Link>, <Link href="/service-areas/minnesota/anoka" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Anoka County</Link>, and <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Western Wisconsin</Link>, providing consistent, reliable service that real estate professionals can count on.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                When properties have <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm damage</Link>, we provide quick assessments and <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">insurance claim support</Link> to help properties qualify for coverage. Our detailed inspections identify issues before they become deal-breakers, and we provide clear documentation that helps with property disclosures and negotiations. With <Link href="/resources/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">industry-leading warranties</Link> and <Link href="/resources/reviews" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">160+ five-star reviews</Link>, buyers and sellers can trust that the work is done right.
              </p>
              <p className="text-lg text-gray-700">
                We understand that time is critical in real estate, and we work efficiently to complete projects when you need them done. Our goal is to deliver quality workmanship that makes properties market-ready and enhances their value. From <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof replacements</Link> and <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding upgrades</Link> to <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window installations</Link> and <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm damage repairs</Link>, we help real estate professionals close deals faster. <Link href="/contact" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Contact us today</Link> to discuss your real estate project needs and learn how we can help prepare properties efficiently and professionally.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Real Estate Services"
          description="Comprehensive exterior services for real estate professionals"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
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

      {/* Benefits */}
      <Section className="bg-white">
        <SectionHeader
          title="What Real Estate Professionals Receive"
          description="Benefits of working with Advanced Roofing & Siding Inc."
        />
        <div className="mx-auto max-w-4xl">
          <Card>
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Why Real Estate Professionals Trust Us"
          description="What sets us apart for real estate projects"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      {/* Process */}
      <Section className="bg-white">
        <SectionHeader
          title="Our Real Estate Project Process"
          description="An efficient approach to property preparation"
        />
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            {process.map((step, index) => (
              <AnimatedDiv
                key={step.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="border-2 border-gray-100">
                  <div className="flex gap-4 md:gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-green-700 text-white text-xl font-bold md:h-14 md:w-14">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold text-gray-900 md:text-2xl">{step.title}</h3>
                      <p className="text-base text-gray-700 md:text-lg">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
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
                Ready to Work Together?
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Contact us to discuss your real estate project needs and learn how we can help prepare properties efficiently and professionally.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/who-we-serve">
                  <Button variant="outline" size="lg">
                    View All Markets
                  </Button>
                </Link>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
  )
}

