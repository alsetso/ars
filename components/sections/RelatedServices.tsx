'use client'

import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Section } from '@/components/ui/Section'
import {
  HardHat, PanelTop, AppWindow,
  CloudRain, Droplets, Frame, DoorOpen,
  LucideIcon,
} from 'lucide-react'
import Link from 'next/link'

interface RelatedService {
  href: string
  icon: LucideIcon
  title: string
  description: string
}

const ALL_SERVICES: Record<string, RelatedService> = {
  roofing: {
    href: '/services/roofing',
    icon: HardHat,
    title: 'Roofing',
    description: 'GAF Master Elite certified replacement and repair',
  },
  siding: {
    href: '/services/siding',
    icon: PanelTop,
    title: 'Siding',
    description: 'Full exterior re-siding in any material',
  },
  windows: {
    href: '/services/windows',
    icon: AppWindow,
    title: 'Windows',
    description: 'Energy-rated whole-home replacement',
  },
  'storm-restoration': {
    href: '/services/storm-restoration',
    icon: CloudRain,
    title: 'Storm Restoration',
    description: 'Insurance claims handled start to finish',
  },
  gutters: {
    href: '/services/gutters',
    icon: Droplets,
    title: 'Gutters',
    description: 'Seamless gutter systems and protection',
  },
  'soffit-fascia': {
    href: '/services/soffit-fascia',
    icon: Frame,
    title: 'Soffit & Fascia',
    description: 'Roofline protection and ventilation',
  },
  'exterior-doors': {
    href: '/services/exterior-doors',
    icon: DoorOpen,
    title: 'Exterior Doors',
    description: 'Energy-tight entry and storm door systems',
  },
}

/**
 * Cross-service links — minimal, no heavy card boxes.
 * Excludes the current service; shows 3 most relevant.
 */
const RELATED_MAP: Record<string, string[]> = {
  roofing: ['siding', 'gutters', 'storm-restoration'],
  siding: ['roofing', 'windows', 'storm-restoration'],
  windows: ['siding', 'exterior-doors', 'storm-restoration'],
  'storm-restoration': ['roofing', 'siding', 'windows'],
  gutters: ['roofing', 'soffit-fascia', 'storm-restoration'],
  'soffit-fascia': ['roofing', 'gutters', 'storm-restoration'],
  'exterior-doors': ['windows', 'siding', 'roofing'],
}

interface RelatedServicesProps {
  serviceSlug: string
  /** Optional description override */
  description?: string
}

export function RelatedServices({ serviceSlug, description }: RelatedServicesProps) {
  const slugs = RELATED_MAP[serviceSlug] ?? []
  const services = slugs.map((s) => ALL_SERVICES[s]).filter(Boolean)
  if (!services.length) return null

  const defaultDescription = 'One contractor for your entire exterior — no hand-offs, no gaps in quality.'

  return (
    <Section className="bg-gray-50">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-8 text-center md:mb-10">
          <h2 className="mb-1.5 text-2xl font-bold text-gray-900 md:text-3xl">
            Complete Exterior Solutions
          </h2>
          <p className="text-sm text-gray-500 md:text-base">
            {description ?? defaultDescription}
          </p>
        </div>

        {/* Service links — minimal grid */}
        <div className="grid grid-cols-1 gap-0 divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <AnimatedDiv
                key={service.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
              >
                <Link
                  href={service.href}
                  className="group flex flex-col gap-2.5 px-0 py-5 transition-colors hover:bg-white sm:px-6 sm:py-0 sm:hover:bg-transparent"
                >
                  <Icon className="h-6 w-6 text-brand-primary transition-colors group-hover:text-red-700" strokeWidth={2} />
                  <div>
                    <p className="mb-0.5 text-sm font-bold text-gray-900 group-hover:text-brand-primary transition-colors md:text-base">
                      {service.title}
                    </p>
                    <p className="text-xs text-gray-500 md:text-sm">{service.description}</p>
                  </div>
                  <span className="text-xs font-semibold text-brand-primary">
                    Learn More →
                  </span>
                </Link>
              </AnimatedDiv>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
