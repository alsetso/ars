import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { Building2, Users, Home, Shield, CheckCircle, ArrowRight, Award, Clock, DollarSign, Briefcase } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community Programs - Advanced Roofing & Siding Inc. | Minnesota',
  description: 'Community-driven outreach programs for municipalities, real estate professionals, and homeowner associations. Fast, reliable, and expert service for large-scale projects.',
  keywords: 'municipal program, real estate professional program, HOA program, community programs, property management, large scale projects, Minnesota, Wisconsin',
}

const programs = [
  {
    id: 'municipal',
    title: 'Municipal Partnership Program',
    description: 'Supporting cities and municipalities with expert exterior services for public buildings, facilities, and infrastructure projects.',
    icon: Building2,
    href: '/programs/municipal',
    features: [
      'Expert service for public buildings',
      'Large-scale project management',
      'Budget-conscious solutions',
      'Fast turnaround times',
      'Licensed & insured',
    ],
    color: 'from-blue-50 to-blue-100',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
  {
    id: 'agent',
    title: 'Agent Program',
    description: 'Exclusive program for realtors, brokers, investors, and wholesalers. Work with us on 2+ deals per year and unlock special incentives.',
    icon: Users,
    href: '/programs/agent',
    features: [
      'Incentives for 2+ deals per year',
      'Priority scheduling for agents',
      'Fast project completion',
      'Property-ready solutions',
      'Direct agent support line',
    ],
    color: 'from-green-50 to-green-100',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
  },
  {
    id: 'property-manager',
    title: 'Property Manager Program',
    description: 'Comprehensive exterior services for property managers handling apartment buildings, multi-family properties, group homes, clinics, and commercial facilities.',
    icon: Building2,
    href: '/programs/property-manager',
    features: [
      'Multi-property management',
      'Apartment & multi-family expertise',
      'Commercial facility services',
      'Bulk project pricing',
      'Timeline coordination',
    ],
    color: 'from-orange-50 to-orange-100',
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-50',
  },
  {
    id: 'hoa',
    title: 'Homeowner Association Program',
    description: 'Comprehensive exterior services for HOAs managing multiple properties, ensuring consistent quality and timely completion.',
    icon: Home,
    href: '/programs/hoa',
    features: [
      'Multi-property management',
      'Consistent quality across projects',
      'HOA board communication',
      'Bulk project pricing',
      'Timeline coordination',
    ],
    color: 'from-purple-50 to-purple-100',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
  },
  {
    id: 'residential',
    title: 'Residential Program',
    description: 'Comprehensive exterior services for homeowners. Expert roofing, siding, windows, and more for your Minnesota or Wisconsin home.',
    icon: Home,
    href: '/programs/residential',
    features: [
      'GAF Master Elite certified',
      'Industry-leading warranties',
      'Free inspections & estimates',
      'Family-owned & operated',
      '30+ years experience',
    ],
    color: 'from-red-50 to-red-100',
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50',
  },
  {
    id: 'commercial',
    title: 'Commercial Program',
    description: 'Expert commercial exterior services for business owners and managers. Professional roofing, siding, and building maintenance.',
    icon: Briefcase,
    href: '/programs/commercial',
    features: [
      'Minimal business disruption',
      'Commercial property expertise',
      'Minimal downtime',
      'Competitive commercial pricing',
      'Direct business support',
    ],
    color: 'from-indigo-50 to-indigo-100',
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
  },
]

const benefits = [
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Priority scheduling ensures your projects are completed on time, every time.',
  },
  {
    icon: Shield,
    title: 'Reliable Service',
    description: '30+ years of experience delivering consistent, high-quality results for large-scale projects.',
  },
  {
    icon: Award,
    title: 'Best Work',
    description: 'GAF Master Elite certification means you get the highest quality materials and installation.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Specialized pricing for program participants ensures value for your budget.',
  },
]

export default function ProgramsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Community Programs"
        description="Community-driven outreach initiatives for leaders, professionals, and property management associations"
        backgroundImage="/gallery/340661788_241238031731100_708703886642482358_n.webp"
      />

      {/* Introduction Section */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Card>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Our community programs are designed to support the leaders and professionals who manage properties and communities across Minnesota and Wisconsin. Whether you're a city official, real estate professional, or HOA board member, we provide fast, reliable, and expert service for large-scale projects.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                As a <Link href="/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">GAF Master Elite contractor</Link> with <Link href="/about" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">30+ years of experience</Link>, we understand the unique needs of property managers, municipalities, and associations. Our programs offer priority scheduling, competitive pricing, and the expertise needed to handle complex, multi-property projects.
              </p>
              <p className="text-lg text-gray-700">
                Each program is tailored to meet the specific requirements of its participants, ensuring you receive the service level and support your organization needs. From initial consultation to project completion, we work closely with program members to deliver exceptional results.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Programs Grid */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Our Community Programs"
          description="Choose the program that fits your organization's needs"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <AnimatedDiv
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${program.iconBg} shadow-sm`}>
                      <Icon className={`h-7 w-7 ${program.iconColor}`} strokeWidth={2} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{program.title}</h3>
                    <p className="mb-4 text-gray-600">{program.description}</p>
                    <ul className="mb-6 space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={program.href}>
                      <Button variant="primary" size="md" className="w-full">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-white">
        <SectionHeader
          title="Why Choose Our Programs"
          description="What makes our community programs different"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <AnimatedDiv
                  key={benefit.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 shadow-sm">
                      <Icon className="h-6 w-6 text-brand-primary" strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-white border-2 border-gray-200 shadow-xl">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                Ready to Join a Program?
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Contact us to learn more about our community programs and how we can support your organization's exterior service needs.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:763-427-3093">
                  <Button variant="outline" size="lg">
                    Call 763-427-3093
                  </Button>
                </a>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
  )
}

