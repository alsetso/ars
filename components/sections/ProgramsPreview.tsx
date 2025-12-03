'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Building2, Users, Home, Briefcase, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const markets = [
  {
    id: 'residential',
    title: 'Residential',
    description: 'We understand that your home is your most important investment, and we treat it with the care and respect it deserves.',
    icon: Home,
    href: '/who-we-serve/residential',
    iconColor: 'text-brand-primary',
    iconBg: 'bg-red-50',
  },
  {
    id: 'commercial',
    title: 'Commercial Properties',
    description: 'We work with business owners to understand your operational needs and minimize disruption while delivering quality results.',
    icon: Briefcase,
    href: '/who-we-serve/commercial',
    iconColor: 'text-brand-primary',
    iconBg: 'bg-red-50',
  },
  {
    id: 'municipal',
    title: 'Municipal & Government',
    description: 'We understand the unique requirements of public projects and work within your budget and timeline constraints.',
    icon: Building2,
    href: '/who-we-serve/municipal',
    iconColor: 'text-brand-primary',
    iconBg: 'bg-red-50',
  },
  {
    id: 'professionals',
    title: 'Real Estate Professionals',
    description: 'We understand the fast-paced nature of real estate and work efficiently to meet your project timelines.',
    icon: Users,
    href: '/who-we-serve/professionals',
    iconColor: 'text-brand-primary',
    iconBg: 'bg-red-50',
  },
  {
    id: 'property-manager',
    title: 'Property Management',
    description: 'We understand the complexity of managing multiple properties and work with you to coordinate projects efficiently.',
    icon: Building2,
    href: '/who-we-serve/property-manager',
    iconColor: 'text-brand-primary',
    iconBg: 'bg-red-50',
  },
  {
    id: 'hoa',
    title: 'Homeowner Associations',
    description: 'We understand the importance of consistent quality across multiple properties and clear communication with HOA boards.',
    icon: Home,
    href: '/who-we-serve/hoa',
    iconColor: 'text-brand-primary',
    iconBg: 'bg-red-50',
  },
]

export function ProgramsPreview() {
  return (
    <Section className="bg-gray-50">
      <SectionHeader
        title="Who We Serve"
        description="Specialized solutions for each market we work with"
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-6">
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
                <Card className="h-full" variant="elevated">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${market.iconBg}`}>
                    <Icon className={`h-7 w-7 ${market.iconColor}`} strokeWidth={2} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{market.title}</h3>
                  <p className="mb-6 text-gray-600 leading-relaxed">{market.description}</p>
                  <Link href={market.href}>
                    <Button variant="primary" size="md" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </Card>
              </AnimatedDiv>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <AnimatedDiv
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-10 text-center"
      >
        <Link href="/who-we-serve">
          <Button variant="outline" size="lg" className="group">
            View All Markets
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </AnimatedDiv>
    </Section>
  )
}

