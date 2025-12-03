import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { Building2, Shield, CheckCircle, ArrowRight, Clock, DollarSign, Home, FileCheck, Award, Users } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Property Manager Program - Advanced Roofing & Siding Inc.',
  description: 'Comprehensive exterior services for property managers. Expert service for apartment buildings, multi-family properties, group homes, clinics, and commercial facilities.',
  keywords: 'property manager program, apartment building services, multi-family property services, group home services, clinic services, commercial property management, property manager contractor, Minnesota, Wisconsin',
}

const propertyTypes = [
  {
    title: 'Apartment Buildings',
    description: 'Complete exterior services for apartment complexes, from roofing to siding to windows, ensuring all units are protected and maintained.',
    icon: Building2,
  },
  {
    title: 'Multi-Family Properties',
    description: 'Expert exterior work for duplexes, triplexes, and larger multi-family buildings, maintaining consistency across all units.',
    icon: Home,
  },
  {
    title: 'Group Homes & Facilities',
    description: 'Specialized exterior services for group homes, assisted living facilities, and residential care facilities.',
    icon: Users,
  },
  {
    title: 'Clinics & Medical Facilities',
    description: 'Professional exterior services for medical clinics, dental offices, and healthcare facilities, ensuring minimal disruption to operations.',
    icon: Shield,
  },
]

const services = [
  {
    title: 'Multi-Property Management',
    description: 'Coordinate exterior work across multiple properties in your portfolio, ensuring consistent quality and efficient scheduling.',
    icon: Building2,
  },
  {
    title: 'Bulk Project Pricing',
    description: 'Competitive pricing for large-scale projects across multiple properties, maximizing value for property managers.',
    icon: DollarSign,
  },
  {
    title: 'Timeline Coordination',
    description: 'Careful scheduling to minimize disruption to tenants while completing projects efficiently and on schedule.',
    icon: Clock,
  },
  {
    title: 'Preventive Maintenance',
    description: 'Scheduled maintenance programs to extend property life, reduce emergency repairs, and protect your investment.',
    icon: FileCheck,
  },
]

const benefits = [
  'Multi-property project management',
  'Bulk pricing for large-scale projects',
  'Timeline coordination for minimal tenant disruption',
  'Direct property manager support',
  'Comprehensive project documentation',
  'Preventive maintenance programs',
  'Emergency repair services',
  'GAF Master Elite certified quality',
  'Industry-leading warranties',
]

const projectTypes = [
  {
    title: 'Roofing Projects',
    description: 'Complete roof replacements or repairs for apartment buildings and multi-family properties, ensuring all units are protected.',
  },
  {
    title: 'Siding Projects',
    description: 'Exterior siding installation or replacement across multiple properties, maintaining aesthetic consistency and property value.',
  },
  {
    title: 'Window Replacement',
    description: 'Coordinated window replacement programs that improve energy efficiency, reduce costs, and enhance property values.',
  },
  {
    title: 'Emergency Repairs',
    description: 'Fast response for emergency exterior repairs, minimizing damage and protecting your properties and tenants.',
  },
]

export default function PropertyManagerProgramPage() {
  return (
    <PageLayout>
      <PageHero
        title="Property Manager Program"
        description="Comprehensive exterior services for property managers handling apartment buildings, multi-family properties, group homes, and clinics"
        backgroundImage="/gallery/351499412_645224983741699_6973171527731469674_n.webp"
      />

      {/* Introduction */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Card>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Our Property Manager Program is designed specifically for property managers handling apartment buildings, multi-family properties, group homes, clinics, and commercial facilities. We understand the unique challenges property managers face: coordinating work across multiple units, managing budgets, minimizing tenant disruption, and maintaining property values.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                As a <Link href="/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite contractor</Link> with <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">30+ years of experience</Link>, we bring the expertise and project management skills needed for large-scale property management projects. We work directly with property managers to ensure projects are completed on time, within budget, and to the highest quality standards.
              </p>
              <p className="text-lg text-gray-700">
                Our program offers bulk project pricing, timeline coordination, and consistent quality across all properties. From apartment complexes to group homes to medical facilities, we ensure your properties receive fast, reliable, and the best work done.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Property Types */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Property Types We Serve"
          description="Expert exterior services for various property management needs"
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
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-orange-100">
                      <Icon className="h-6 w-6 text-orange-600" strokeWidth={2} />
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
          title="Property Manager Services"
          description="Comprehensive services tailored for property management needs"
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
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-orange-100">
                      <Icon className="h-6 w-6 text-orange-600" strokeWidth={2} />
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
          description="What property managers receive with our partnership program"
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
      <Section className="bg-white">
        <SectionHeader
          title="Common Project Types"
          description="Types of projects we handle for property managers"
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
      <Section className="bg-gradient-to-br from-orange-50 to-white">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-white border-2 border-orange-100">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                Partner With Us for Your Property Management Needs
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Contact us to learn more about our Property Manager Program and how we can support your properties with fast, reliable, and expert exterior services.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Contact Us
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

