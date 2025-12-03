import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { Home, Shield, CheckCircle, ArrowRight, Clock, DollarSign, Users, FileCheck, Award } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Homeowner Association Program - Advanced Roofing & Siding Inc.',
  description: 'Comprehensive exterior services for HOAs managing multiple properties. Consistent quality, timeline coordination, and bulk project pricing for homeowner associations.',
  keywords: 'HOA program, homeowner association services, HOA contractor, multi-property management, HOA roofing, HOA siding, association property management, Minnesota, Wisconsin',
}

const services = [
  {
    title: 'Multi-Property Projects',
    description: 'Coordinate exterior work across multiple properties in your association, ensuring consistent quality and timely completion.',
    icon: Home,
  },
  {
    title: 'Board Communication',
    description: 'Direct communication with HOA boards, providing regular updates and detailed project documentation.',
    icon: Users,
  },
  {
    title: 'Bulk Project Pricing',
    description: 'Competitive pricing for large-scale HOA projects, maximizing value for association members.',
    icon: DollarSign,
  },
  {
    title: 'Timeline Coordination',
    description: 'Careful scheduling to minimize disruption to residents while completing projects efficiently.',
    icon: Clock,
  },
]

const benefits = [
  'Multi-property project management',
  'Consistent quality across all properties',
  'Direct HOA board communication',
  'Bulk project pricing for associations',
  'Timeline coordination for minimal disruption',
  'Comprehensive project documentation',
  'GAF Master Elite certified installations',
  'Industry-leading warranties',
]

const projectTypes = [
  {
    title: 'Roofing Projects',
    description: 'Complete roof replacements or repairs across multiple units, ensuring consistent quality and materials throughout the association.',
  },
  {
    title: 'Siding Projects',
    description: 'Exterior siding installation or replacement for multiple properties, maintaining aesthetic consistency across the association.',
  },
  {
    title: 'Window Replacement',
    description: 'Coordinated window replacement programs that improve energy efficiency and property values across the association.',
  },
  {
    title: 'Maintenance Programs',
    description: 'Ongoing exterior maintenance programs to protect association properties and reduce long-term costs.',
  },
]

export default function HOAProgramPage() {
  return (
    <PageLayout>
      <PageHero
        title="Homeowner Association Program"
        description="Comprehensive exterior services for HOAs managing multiple properties"
        backgroundImage="/gallery/315336128_671806221088568_2626046884352502994_n.webp"
      />

      {/* Introduction */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Card>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Our Homeowner Association Program is designed specifically for HOA boards and property management companies managing multiple properties. We understand the unique challenges HOAs face: coordinating work across multiple units, maintaining consistency, managing budgets, and minimizing disruption to residents.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                As a <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite contractor</Link> with <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">30+ years of experience</Link>, we bring the expertise and project management skills needed for large-scale HOA projects. We work directly with HOA boards and property managers to ensure projects are completed on time, within budget, and to the highest quality standards.
              </p>
              <p className="text-lg text-gray-700">
                Our program offers bulk project pricing, timeline coordination, and consistent quality across all properties. From roofing to siding to windows, we ensure your association receives the best work done efficiently and professionally.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="HOA Services"
          description="Comprehensive exterior services for homeowner associations"
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
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-purple-100">
                      <Icon className="h-6 w-6 text-purple-600" strokeWidth={2} />
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
          description="What HOAs receive with our partnership program"
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

      {/* Project Types */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="HOA Project Types"
          description="Types of projects we handle for homeowner associations"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {projectTypes.map((project, index) => (
              <AnimatedDiv
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-purple-50 to-white">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-white border-2 border-purple-100">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                Partner With Us for Your HOA Projects
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Contact us to learn more about our HOA Program and how we can support your association's exterior service needs.
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

