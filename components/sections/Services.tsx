'use client'

import { motion } from 'framer-motion'
import {
  Home,
  PaintBucket,
  Square,
  CloudRain,
  Droplets,
  Frame,
  DoorOpen,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'roofing',
    href: '/services/roofing',
    icon: Home,
    title: 'Roofing',
    description:
      'GAF Master Elite certified roof systems with lifetime warranties — the highest standard available to Minnesota homeowners.',
  },
  {
    id: 'siding',
    href: '/services/siding',
    icon: PaintBucket,
    title: 'Siding',
    description:
      "Durable exterior siding systems built for Minnesota's climate — better insulation, weather resistance, and curb appeal.",
  },
  {
    id: 'windows',
    href: '/services/windows',
    icon: Square,
    title: 'Windows',
    description:
      'Energy-efficient window replacements that lower heating costs, reduce drafts, and meet Minnesota Energy Code.',
  },
  {
    id: 'restoration',
    href: '/services/storm-restoration',
    icon: CloudRain,
    title: 'Storm Restoration',
    description:
      'Hail and wind damage assessment with full insurance claim support. Most homeowners pay only their deductible.',
  },
  {
    id: 'gutters',
    href: '/services/gutters',
    icon: Droplets,
    title: 'Gutters',
    description:
      'Seamless aluminum gutter systems with optional protection covers. No joints to fail, no foundation damage.',
  },
  {
    id: 'soffit-fascia',
    href: '/services/soffit-fascia',
    icon: Frame,
    title: 'Soffit & Fascia',
    description:
      'The framework your roofline and GAF warranty depend on. Aluminum wraps that never rot, never need paint.',
  },
  {
    id: 'exterior-doors',
    href: '/services/exterior-doors',
    icon: DoorOpen,
    title: 'Exterior Doors',
    description:
      'Exterior door replacement built for comfort, security, and energy savings — durable, low-maintenance, and built to handle Minnesota winters.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white border-t border-gray-100 section-padding">
      <div className="container mx-auto container-padding">

        {/* Row header */}
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-brand-primary">
              What We Do
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              Roofing, Siding &amp; Exterior Services
            </h2>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
              Serving the{' '}
              <Link href="/service-areas" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
                Twin Cities metro and Western Wisconsin
              </Link>{' '}
              since the 1990s — fully licensed, GAF Master Elite certified, and A+ BBB rated.
            </p>
          </div>
          <Link
            href="/services"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors duration-200"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Service cards — 4 cols desktop, wraps to 4+3 for 7 items */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Link
                  href={service.href}
                  className="group flex h-full flex-col gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-primary/20 hover:shadow-medium md:p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary-light transition-colors duration-200 group-hover:bg-brand-primary">
                    <Icon
                      className="h-5 w-5 text-brand-primary transition-colors duration-200 group-hover:text-white"
                      strokeWidth={2}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-bold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-brand-primary md:text-base">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 md:text-sm">
                      {service.description}
                    </p>
                  </div>

                  <span className="flex items-center gap-1 text-xs font-semibold text-brand-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Supporting paragraph */}
        <motion.p
          className="mt-8 max-w-3xl text-sm leading-relaxed text-gray-500 md:text-base"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Every project is backed by our{' '}
          <Link href="/resources/warranties" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
            industry-leading warranty coverage
          </Link>{' '}
          and managed start-to-finish by our own licensed crews — no subcontracting. Whether you are
          dealing with{' '}
          <Link href="/services/storm-restoration" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
            storm damage
          </Link>
          , planning a full{' '}
          <Link href="/services/roofing" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
            roof replacement
          </Link>
          , or upgrading your{' '}
          <Link href="/services/windows" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
            windows
          </Link>{' '}
          and{' '}
          <Link href="/services/exterior-doors" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
            exterior doors
          </Link>{' '}
          before winter, our team delivers on time and on budget.
        </motion.p>

      </div>
    </section>
  )
}
