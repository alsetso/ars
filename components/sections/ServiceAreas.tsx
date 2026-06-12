'use client'

import { motion } from 'framer-motion'
import { MINNESOTA_CITIES, WISCONSIN_CITIES } from '@/lib/constants'
import { ArrowRight, MapPin } from 'lucide-react'
import Link from 'next/link'

function cityToSlug(city: string): string {
  if (!city || typeof city !== 'string') return ''
  return city.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')
}

export function ServiceAreas() {
  return (
    <section className="bg-gray-50 border-t border-gray-100 section-padding">
      <div className="container mx-auto container-padding">

        {/* ── Header row ── */}
        <motion.div
          className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <p className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-primary">
              Where We Work
            </p>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              Roofing &amp; Exterior Services Across Minnesota &amp; Wisconsin
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
              Since the early 1990s, Advanced Roofing & Siding has delivered{' '}
              <Link href="/services/roofing" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
                roof replacements
              </Link>
              ,{' '}
              <Link href="/services/siding" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
                siding systems
              </Link>
              ,{' '}
              <Link href="/services/windows" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
                window installations
              </Link>
              , and{' '}
              <Link href="/services/storm-restoration" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
                storm damage restoration
              </Link>{' '}
              to homeowners and businesses across the Twin Cities metro, greater Minnesota, and western Wisconsin.
              Every city below has a dedicated service page with local information, insurance claim guidance, and free estimate scheduling.
            </p>
          </div>

          <Link
            href="/service-areas"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors duration-200"
          >
            View all service areas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* ── Directory ── */}
        <motion.div
          className="grid gap-8 md:grid-cols-[1fr_auto]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Minnesota */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-brand-primary" strokeWidth={2} />
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                Minnesota
              </h3>
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 sm:grid-cols-3 lg:grid-cols-4">
              {MINNESOTA_CITIES.map((city) => (
                <li key={city}>
                  <Link
                    href={`/service-areas/mn/${cityToSlug(city)}`}
                    className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors duration-150 leading-snug"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wisconsin */}
          <div className="md:min-w-[200px]">
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-brand-primary" strokeWidth={2} />
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                Wisconsin
              </h3>
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 md:grid-cols-1">
              {WISCONSIN_CITIES.map((city) => (
                <li key={city}>
                  <Link
                    href={`/service-areas/wi/${cityToSlug(city)}`}
                    className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors duration-150 leading-snug"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Footer note ── */}
        <motion.div
          className="mt-8 flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-sm text-gray-400">
            Don't see your city?{' '}
            <Link href="/contact" className="font-semibold text-gray-600 hover:text-brand-primary transition-colors">
              Contact us
            </Link>
            {' '}— we may still serve your area.
          </p>
          <Link
            href="/services/free-estimate"
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white hover:bg-brand-primary-dark transition-colors duration-200 shrink-0"
          >
            Get a Free Estimate
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
