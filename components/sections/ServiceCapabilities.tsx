'use client'

import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Section } from '@/components/ui/Section'
import {
  Home, Shield, Building2,
  Droplets, Wrench, CloudRain,
  Square, Zap, Frame,
  DoorOpen, Lock, Sun,
  Wind, FileCheck, Snowflake,
  LucideIcon,
} from 'lucide-react'

interface Capability {
  icon: LucideIcon
  title: string
  description: string
}

/**
 * Centralized capability data keyed by service slug.
 * High-level scope items — not a product catalog.
 * "We handle everything" framing.
 */
const CAPABILITIES: Record<string, { heading: string; subheading: string; items: Capability[] }> = {
  roofing: {
    heading: 'Complete Roofing Solutions',
    subheading: 'Every roofing situation — residential to commercial, new install to storm damage',
    items: [
      {
        icon: Home,
        title: 'Full Replacement',
        description: 'Complete tear-off and installation on any home or building, any size, any pitch.',
      },
      {
        icon: CloudRain,
        title: 'Storm & Insurance Claims',
        description: 'Hail, wind, and ice damage handled from inspection through final payout.',
      },
      {
        icon: Building2,
        title: 'Residential & Commercial',
        description: 'Single-family homes, multi-unit buildings, HOAs, and commercial facilities.',
      },
    ],
  },
  siding: {
    heading: 'Full Exterior Siding Coverage',
    subheading: 'Material-agnostic, climate-tested solutions for every home and budget',
    items: [
      {
        icon: Home,
        title: 'Full Re-Siding Projects',
        description: 'Strip-to-studs replacement with any material — built right from the wall out.',
      },
      {
        icon: CloudRain,
        title: 'Storm Damage Restoration',
        description: 'Insurance-covered siding repairs with documentation and adjuster support.',
      },
      {
        icon: Zap,
        title: 'Energy & Comfort Upgrades',
        description: 'Insulated systems that reduce drafts, lower heating costs, and boost R-value.',
      },
    ],
  },
  windows: {
    heading: 'Window Solutions That Perform',
    subheading: 'Energy-rated, code-compliant windows for every opening and every climate',
    items: [
      {
        icon: Square,
        title: 'Whole-Home Replacement',
        description: 'Every window opening measured, ordered, and installed in a single project.',
      },
      {
        icon: Zap,
        title: 'Energy Performance',
        description: 'ENERGY STAR rated systems sized for Minnesota\'s climate zone requirements.',
      },
      {
        icon: CloudRain,
        title: 'Storm & Hail Damage',
        description: 'Insurance-covered window restoration from cracked panes to full-frame damage.',
      },
    ],
  },
  'storm-restoration': {
    heading: 'End-to-End Storm Recovery',
    subheading: 'Fast response, maximum insurance coverage, complete restoration in one call',
    items: [
      {
        icon: Wind,
        title: 'Emergency Response',
        description: 'On-site within 48 hours. Temporary protection installed the same day if needed.',
      },
      {
        icon: FileCheck,
        title: 'Insurance Claim Management',
        description: 'Full supplement preparation, adjuster meetings, and depreciation recovery.',
      },
      {
        icon: Wrench,
        title: 'Complete Restoration',
        description: 'Roof, siding, gutters, and windows — one crew, one mobilization, fully restored.',
      },
    ],
  },
  gutters: {
    heading: 'Gutter Systems Built to Last',
    subheading: 'Seamless systems designed for Minnesota rainfall, snowmelt, and freeze-thaw cycles',
    items: [
      {
        icon: Droplets,
        title: 'Seamless Gutter Installation',
        description: 'Custom-formed on-site — no joints between corners, no failure points.',
      },
      {
        icon: Home,
        title: 'Downspout & Drainage Design',
        description: 'Proper slope, routing, and extensions that protect your foundation long-term.',
      },
      {
        icon: Shield,
        title: 'Gutter Protection Systems',
        description: 'Cover systems that eliminate debris, reduce maintenance, and prevent ice dams.',
      },
    ],
  },
  'soffit-fascia': {
    heading: 'Roofline Work Done Right',
    subheading: 'Ventilation, moisture control, and structural protection from eave to ridge',
    items: [
      {
        icon: Frame,
        title: 'Full Roofline Replacement',
        description: 'Soffit, fascia, and frieze boards replaced — never covered over existing rot.',
      },
      {
        icon: Snowflake,
        title: 'Ventilation Correction',
        description: 'Proper airflow balance to prevent ice dams and extend shingle life.',
      },
      {
        icon: CloudRain,
        title: 'Insurance Documentation',
        description: 'Storm damage claims and supplement support for hail and wind damage.',
      },
    ],
  },
  'exterior-doors': {
    heading: 'Exterior Doors That Work Hard',
    subheading: 'Properly installed, energy-tight, and built to handle Minnesota winters',
    items: [
      {
        icon: DoorOpen,
        title: 'Complete Door Replacement',
        description: 'Full system — door unit, frame, flashing, threshold, and weatherstripping.',
      },
      {
        icon: Zap,
        title: 'Energy-Tight Performance',
        description: 'Insulated systems that eliminate drafts and reduce heating loss at the entry.',
      },
      {
        icon: Lock,
        title: 'Security & Hardware',
        description: 'Multi-point locking, reinforced frames, and smart-lock ready installations.',
      },
    ],
  },
}

interface ServiceCapabilitiesProps {
  serviceSlug: string
}

export function ServiceCapabilities({ serviceSlug }: ServiceCapabilitiesProps) {
  const data = CAPABILITIES[serviceSlug]
  if (!data) return null

  return (
    <Section className="bg-gray-50">
      <div className="mx-auto max-w-4xl">
        {/* Section heading */}
        <div className="mb-8 text-center md:mb-10">
          <h2 className="mb-1.5 text-2xl font-bold text-gray-900 md:text-3xl">{data.heading}</h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-500 md:text-base">{data.subheading}</p>
        </div>

        {/* Capability items — borderless, no card boxes */}
        <div className="grid grid-cols-1 gap-0 divide-y divide-gray-100 md:grid-cols-3 md:divide-x md:divide-y-0">
          {data.items.map((item, index) => {
            const Icon = item.icon
            return (
              <AnimatedDiv
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="flex flex-col gap-3 px-0 py-5 md:px-6 md:py-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary">
                    <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-gray-900 md:text-lg">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                </div>
              </AnimatedDiv>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
