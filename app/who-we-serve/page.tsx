import { PageLayout } from '@/components/layout/PageLayout'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { Building2, Users, Home, Shield, ArrowRight, Award, Clock, DollarSign, Briefcase } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Who We Serve - Advanced Roofing & Siding Inc. | Minnesota',
  description: 'Specialized solutions for homeowners, businesses, municipalities, real estate professionals, property managers, and homeowner associations. Fast, reliable, and expert service.',
  keywords: 'residential roofing, commercial roofing, municipal roofing, real estate professional roofing, HOA roofing, property management roofing, Minnesota roofing contractor, Wisconsin roofing',
  alternates: {
    canonical: 'https://advancedroofingmn.com/who-we-serve',
  },
}

const markets = [
  {
    id: 'residential',
    title: 'Residential',
    description: 'We understand that your home is your most important investment, and we treat it with the care and respect it deserves.',
    icon: Home,
    href: '/who-we-serve/residential',
    color: 'from-red-50 to-red-100',
    iconColor: 'text-brand-primary',
    iconBg: 'bg-red-50',
  },
  {
    id: 'commercial',
    title: 'Commercial Properties',
    description: 'We work with business owners to understand your operational needs and minimize disruption while delivering quality results.',
    icon: Briefcase,
    href: '/who-we-serve/commercial',
    color: 'from-red-50 to-red-100',
    iconColor: 'text-brand-primary',
    iconBg: 'bg-red-50',
  },
  {
    id: 'municipal',
    title: 'Municipal & Government',
    description: 'We understand the unique requirements of public projects and work within your budget and timeline constraints.',
    icon: Building2,
    href: '/who-we-serve/municipal',
    color: 'from-red-50 to-red-100',
    iconColor: 'text-brand-primary',
    iconBg: 'bg-red-50',
  },
  {
    id: 'professionals',
    title: 'Real Estate Professionals',
    description: 'We understand the fast-paced nature of real estate and work efficiently to meet your project timelines.',
    icon: Users,
    href: '/who-we-serve/professionals',
    color: 'from-red-50 to-red-100',
    iconColor: 'text-brand-primary',
    iconBg: 'bg-red-50',
  },
  {
    id: 'property-manager',
    title: 'Property Management',
    description: 'We understand the complexity of managing multiple properties and work with you to coordinate projects efficiently.',
    icon: Building2,
    href: '/who-we-serve/property-manager',
    color: 'from-red-50 to-red-100',
    iconColor: 'text-brand-primary',
    iconBg: 'bg-red-50',
  },
  {
    id: 'hoa',
    title: 'Homeowner Associations',
    description: 'We understand the importance of consistent quality across multiple properties and clear communication with HOA boards.',
    icon: Home,
    href: '/who-we-serve/hoa',
    color: 'from-red-50 to-red-100',
    iconColor: 'text-brand-primary',
    iconBg: 'bg-red-50',
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'Quality Work',
    description: 'GAF Master Elite certified. Best in Minnesota and Wisconsin.',
  },
  {
    icon: Award,
    title: 'Transparent Process',
    description: 'Clear communication and honest estimates every time.',
  },
  {
    icon: Clock,
    title: 'Easy Experience',
    description: 'Straightforward process from consultation to completion.',
  },
  {
    icon: Users,
    title: 'Understanding Your Needs',
    description: 'We listen and adapt to your unique situation.',
  },
]

export default function WhoWeServePage() {
  return (
    <PageLayout>
      {/* Markets Grid */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Markets We Serve"
          description="Specialized solutions for each market we work with"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {markets.map((market, index) => {
              const Icon = market.icon
              return (
                <AnimatedDiv
                  key={market.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${market.iconBg}`}>
                      <Icon className={`h-7 w-7 ${market.iconColor}`} strokeWidth={2} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{market.title}</h3>
                    <p className="mb-6 text-gray-600 leading-relaxed">{market.description}</p>
                    <Link href={market.href}>
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
          title="Our Commitment"
          description="What you can expect from us, regardless of your market"
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
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
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
            <Card className="bg-white border-2 border-gray-200">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                Ready to Work Together?
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Contact us to discuss your unique needs and learn how we can help with your exterior service project.
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

