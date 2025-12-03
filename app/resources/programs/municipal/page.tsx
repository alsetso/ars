import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { Building2, Shield, CheckCircle, ArrowRight, Clock, DollarSign, Users, FileCheck, Award } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Municipal Partnership Program - Advanced Roofing & Siding Inc.',
  description: 'Expert exterior services for cities and municipalities. Supporting public buildings, facilities, and infrastructure projects across Minnesota and Wisconsin.',
  keywords: 'municipal program, city partnership, public building services, municipal roofing, city siding, government contractor, Minnesota municipalities, Wisconsin municipalities',
}

const services = [
  {
    title: 'Public Building Services',
    description: 'Roofing, siding, and window services for city halls, libraries, community centers, and other public facilities.',
    icon: Building2,
  },
  {
    title: 'Infrastructure Projects',
    description: 'Large-scale exterior projects for municipal infrastructure, ensuring durability and cost-effectiveness.',
    icon: Shield,
  },
  {
    title: 'Emergency Repairs',
    description: 'Fast response for emergency exterior repairs on public buildings, minimizing downtime and costs.',
    icon: Clock,
  },
  {
    title: 'Preventive Maintenance',
    description: 'Scheduled maintenance programs to extend the life of municipal buildings and reduce long-term costs.',
    icon: FileCheck,
  },
]

const benefits = [
  'Priority scheduling for municipal projects',
  'Competitive pricing for government contracts',
  'Licensed and insured for public work',
  'Experience with large-scale municipal projects',
  'Direct communication with city officials',
  'Comprehensive project documentation',
  'GAF Master Elite certified installations',
  'Industry-leading warranties',
]

const process = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We meet with city officials to understand your project needs, budget, and timeline requirements.',
  },
  {
    step: 2,
    title: 'Project Proposal',
    description: 'Detailed proposal with material options, timeline, and pricing tailored to municipal budgets.',
  },
  {
    step: 3,
    title: 'Approval & Planning',
    description: 'Work with city staff to finalize plans, obtain necessary approvals, and coordinate scheduling.',
  },
  {
    step: 4,
    title: 'Professional Execution',
    description: 'Expert installation with minimal disruption to public services, keeping you informed throughout.',
  },
]

export default function MunicipalProgramPage() {
  return (
    <PageLayout>
      <PageHero
        title="Municipal Partnership Program"
        description="Supporting cities and municipalities with expert exterior services for public buildings and infrastructure"
        backgroundImage="/gallery/70591306_10156272051195740_842810443335467008_n.webp"
      />

      {/* Introduction */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Card>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Our Municipal Partnership Program is designed to support cities and municipalities across Minnesota and Wisconsin with expert exterior services for public buildings, facilities, and infrastructure projects. We understand the unique challenges municipalities face: budget constraints, public accountability, and the need for reliable, long-lasting solutions.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                As a <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite contractor</Link> with <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">30+ years of experience</Link>, we bring the expertise and reliability needed for municipal projects. We work closely with city officials, facility managers, and public works departments to deliver solutions that meet both quality standards and budget requirements.
              </p>
              <p className="text-lg text-gray-700">
                Our program offers priority scheduling, competitive pricing for government contracts, and the experience needed to handle complex municipal projects. From city halls to community centers, we ensure your public buildings are protected with quality materials and expert installation.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Municipal Services"
          description="Comprehensive exterior services for public buildings and facilities"
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
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" strokeWidth={2} />
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
          description="What municipalities receive with our partnership program"
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

      {/* Process */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Our Municipal Project Process"
          description="A streamlined approach designed for municipal needs"
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
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white text-xl font-bold md:h-14 md:w-14">
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
      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-white border-2 border-blue-100">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                Partner With Us for Your Municipal Projects
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Contact us to learn more about our Municipal Partnership Program and how we can support your city's exterior service needs.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/resources/programs">
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

