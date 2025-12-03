import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { Building2, Shield, CheckCircle, ArrowRight, Clock, DollarSign, Award, Users, FileCheck, Briefcase } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Program - Advanced Roofing & Siding Inc.',
  description: 'Expert commercial exterior services for business owners and managers. Professional roofing, siding, and building maintenance for commercial properties across Minnesota and Wisconsin.',
  keywords: 'commercial program, commercial roofing, commercial siding, business exterior services, commercial contractor, commercial building services, Minnesota, Wisconsin',
}

const services = [
  {
    title: 'Commercial Roofing',
    description: 'Expert flat roof and commercial roofing systems for office buildings, retail spaces, warehouses, and industrial facilities.',
    icon: Building2,
  },
  {
    title: 'Commercial Siding',
    description: 'Professional exterior siding installation and repair for commercial buildings, maintaining your business\'s professional appearance.',
    icon: Shield,
  },
  {
    title: 'Building Maintenance',
    description: 'Comprehensive exterior maintenance programs to protect your commercial property and reduce long-term costs.',
    icon: FileCheck,
  },
  {
    title: 'Emergency Repairs',
    description: 'Fast response for emergency commercial repairs, minimizing business disruption and protecting your operations.',
    icon: Clock,
  },
]

const benefits = [
  'Priority scheduling for commercial projects',
  'Minimal business disruption',
  'Licensed and insured for commercial work',
  'Experience with large commercial projects',
  'Competitive commercial pricing',
  'Direct business owner/manager communication',
  'Comprehensive project documentation',
  'GAF Master Elite certified quality',
  'Industry-leading warranties',
]

const propertyTypes = [
  {
    title: 'Office Buildings',
    description: 'Professional exterior services for office complexes and corporate facilities, ensuring minimal disruption to business operations.',
    icon: Building2,
  },
  {
    title: 'Retail Spaces',
    description: 'Expert exterior work for retail stores, shopping centers, and storefronts, maintaining your business\'s curb appeal.',
    icon: Briefcase,
  },
  {
    title: 'Warehouses & Industrial',
    description: 'Durable exterior solutions for warehouses, manufacturing facilities, and industrial buildings built to last.',
    icon: Shield,
  },
  {
    title: 'Medical & Healthcare',
    description: 'Specialized exterior services for medical facilities, clinics, and healthcare buildings with minimal operational disruption.',
    icon: Users,
  },
]

const process = [
  {
    step: 1,
    title: 'Business Consultation',
    description: 'We meet with business owners or managers to understand your property needs, budget, and operational requirements.',
  },
  {
    step: 2,
    title: 'Commercial Proposal',
    description: 'Detailed proposal with material options, timeline, and pricing designed for commercial budgets and schedules.',
  },
  {
    step: 3,
    title: 'Project Planning',
    description: 'Coordinate with your team to plan work around business operations, minimizing disruption to your customers and employees.',
  },
  {
    step: 4,
    title: 'Professional Execution',
    description: 'Expert installation with careful attention to business operations, keeping you informed throughout the project.',
  },
]

export default function CommercialProgramPage() {
  return (
    <PageLayout>
      <PageHero
        title="Commercial Program"
        description="Expert commercial exterior services for business owners and managers. Professional roofing, siding, and building maintenance"
        backgroundImage="/gallery/310571525_636102627992261_6745535343486299305_n.webp"
      />

      {/* Introduction */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Card>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Our Commercial Program is designed specifically for business owners and managers who need fast, reliable, and expert exterior services for their commercial properties. We understand that commercial properties have unique needs: minimal business disruption, budget considerations, and the need for durable, long-lasting solutions.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                As a <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite contractor</Link> with <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">30+ years of experience</Link>, we bring the expertise needed for commercial projects of all sizes. From office buildings to retail spaces to warehouses, we work with business owners and managers to deliver solutions that protect their property and their bottom line.
              </p>
              <p className="text-lg text-gray-700">
                Our program offers priority scheduling, competitive commercial pricing, and careful project planning to minimize disruption to your business operations. We understand that your business can't afford downtime, and we work around your schedule to ensure projects are completed efficiently and professionally.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Property Types */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Commercial Property Types"
          description="Expert exterior services for various commercial properties"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {propertyTypes.map((property, index) => {
              const Icon = property.icon
              return (
                <AnimatedDiv
                  key={property.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{property.title}</h3>
                    <p className="text-gray-600">{property.description}</p>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-white">
        <SectionHeader
          title="Commercial Services"
          description="Comprehensive exterior services for commercial properties"
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
      <Section className="bg-gray-50">
        <SectionHeader
          title="Program Benefits"
          description="What business owners and managers receive with our commercial program"
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
      <Section className="bg-white">
        <SectionHeader
          title="Our Commercial Project Process"
          description="A business-focused approach to commercial exterior services"
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
                Partner With Us for Your Commercial Property
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Contact us to learn more about our Commercial Program and how we can support your business with fast, reliable, and expert exterior services.
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

