import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { Users, Shield, CheckCircle, ArrowRight, Clock, DollarSign, Home, FileCheck, Award } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Real Estate Professional Program - Advanced Roofing & Siding Inc.',
  description: 'Dedicated support for real estate professionals. Fast, reliable exterior work for properties you manage or represent. Priority scheduling and competitive pricing.',
  keywords: 'real estate professional program, property management services, realtor services, property exterior services, fast turnaround, real estate contractor, Minnesota, Wisconsin',
}

const services = [
  {
    title: 'Property Preparation',
    description: 'Fast exterior work to prepare properties for listing, ensuring they show their best and close quickly.',
    icon: Home,
  },
  {
    title: 'Pre-Sale Inspections',
    description: 'Expert exterior inspections and repairs to address issues before they become deal-breakers.',
    icon: FileCheck,
  },
  {
    title: 'Investment Property Services',
    description: 'Reliable exterior maintenance and repairs for rental properties and investment portfolios.',
    icon: Shield,
  },
  {
    title: 'Priority Scheduling',
    description: 'Fast turnaround times to meet tight closing deadlines and property preparation schedules.',
    icon: Clock,
  },
]

const benefits = [
  'Priority scheduling for real estate professionals',
  'Fast project completion to meet deadlines',
  'Property-ready solutions that enhance value',
  'Competitive pricing for repeat clients',
  'Direct professional support line',
  'Detailed documentation for property records',
  'GAF Master Elite certified quality',
  'Industry-leading warranties',
]

const useCases = [
  {
    title: 'Pre-Listing Preparation',
    description: 'Get properties market-ready with fast exterior repairs and improvements that enhance curb appeal and value.',
  },
  {
    title: 'Post-Inspection Repairs',
    description: 'Quick response to address inspection findings, keeping deals on track and closing on time.',
  },
  {
    title: 'Investment Property Maintenance',
    description: 'Ongoing exterior maintenance for rental properties and investment portfolios, protecting your assets.',
  },
  {
    title: 'New Construction Support',
    description: 'Expert exterior services for new construction projects, ensuring quality from the start.',
  },
]

export default function RealEstateProgramPage() {
  return (
    <PageLayout>
      <PageHero
        title="Real Estate Professional Program"
        description="Dedicated support for real estate professionals who need fast, reliable exterior work"
        backgroundImage="/gallery/310571525_636102627992261_6745535343486299305_n.webp"
      />

      {/* Introduction */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Card>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Our Real Estate Professional Program is designed specifically for real estate agents, property managers, and real estate professionals who need fast, reliable exterior work for properties they manage or represent. We understand that in real estate, time is money, and delays can cost deals.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                As a <Link href="/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">GAF Master Elite contractor</Link> with <Link href="/about" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">30+ years of experience</Link>, we provide the quality and reliability your clients expect, delivered on the timeline you need. Whether you're preparing a property for listing, addressing inspection findings, or maintaining investment properties, we're here to support your business.
              </p>
              <p className="text-lg text-gray-700">
                Our program offers priority scheduling, fast turnaround times, and competitive pricing for real estate professionals. We work around your schedule and deadlines, ensuring properties are ready when you need them.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Services for Real Estate Professionals"
          description="Comprehensive exterior services tailored to your needs"
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
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-green-100 shadow-sm">
                      <Icon className="h-6 w-6 text-green-600" strokeWidth={2} />
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
          title="Program Benefits"
          description="What real estate professionals receive with our program"
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

      {/* Use Cases */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Common Use Cases"
          description="How real estate professionals use our services"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <AnimatedDiv
                key={useCase.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-green-50 to-white">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-white border-2 border-green-100 shadow-xl">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                Join Our Real Estate Professional Program
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Contact us to learn more about our program and how we can support your real estate business with fast, reliable exterior services.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button variant="outline" size="lg">
                    View All Programs
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

