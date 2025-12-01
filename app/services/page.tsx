import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { SERVICES } from '@/lib/constants'
import { Home, PaintBucket, Square, CloudRain, Snowflake } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Advanced Roofing & Siding Inc. | Minnesota',
  description: 'Comprehensive exterior solutions: Premium Roofing, Siding, Windows, and Storm Restoration. GAF Master Elite certified installations across Minnesota & Wisconsin.',
  keywords: 'roofing services, siding installation, window replacement, storm damage repair, Minnesota',
}

const iconMap = {
  Home,
  PaintBucket,
  Square,
  CloudRain,
  Snowflake,
}

const serviceSlugs = {
  roofing: '/services/roofing',
  siding: '/services/siding',
  windows: '/services/windows',
  restoration: '/services/storm-restoration',
  winterization: '/services/winterization',
}

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        title="Our Services"
        description="Comprehensive exterior solutions backed by decades of expertise"
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400"
      />
      <Section className="bg-white">
        <SectionHeader
          title="Our Services"
          description="Comprehensive exterior solutions backed by decades of expertise"
        />

        <div className="grid gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            const slug = serviceSlugs[service.id as keyof typeof serviceSlugs]

            return (
              <AnimatedDiv
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={slug}>
                  <Card className="h-full cursor-pointer">
                    <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl md:h-14 md:w-14 ${service.id === 'winterization' ? 'bg-blue-50' : 'bg-red-50'}`}>
                      <Icon className={`h-6 w-6 md:h-7 md:w-7 ${service.id === 'winterization' ? 'text-blue-600' : 'text-brand-primary'}`} />
                    </div>
                    <h3 className="mb-1.5 text-lg font-bold text-gray-900 md:text-xl">{service.title}</h3>
                    <p className="mb-3 text-sm text-gray-600 md:text-base">{service.description}</p>
                    <span className="text-xs font-semibold text-brand-primary md:text-sm">
                      Learn More →
                    </span>
                  </Card>
                </Link>
              </AnimatedDiv>
            )
          })}
        </div>
      </Section>
    </PageLayout>
  )
}

