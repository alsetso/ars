'use client'

import { motion } from 'framer-motion'
import { Phone, Zap, CloudLightning } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import Link from 'next/link'

const STORM_TYPES = [
  { label: 'Hail', href: '/resources/insurance-claims/hail-damage' },
  { label: 'Wind', href: '/resources/insurance-claims/wind-damage' },
  { label: 'Ice Dam', href: '/resources/insurance-claims/ice-dam-snow-damage-claims' },
  { label: 'Tree Fall', href: '/resources/insurance-claims/tree-damage' },
]

interface StormDamageBannerProps {
  /** 'bar' = slim 1-line strip (above hero / sticky); 'section' = taller callout block */
  variant?: 'bar' | 'section'
}

/**
 * StormDamageBanner — urgency-first storm damage component.
 * Separate from InsuranceClaimsCTA which is process/advocacy focused.
 * Use on: /services/storm-restoration, /resources/insurance-claims, city pages after storms.
 */
export function StormDamageBanner({ variant = 'bar' }: StormDamageBannerProps) {
  if (variant === 'bar') {
    return (
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-brand-primary"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">

            {/* Left — urgency message */}
            <div className="flex items-center gap-2.5">
              <CloudLightning className="h-4.5 w-4.5 shrink-0 text-white" strokeWidth={2} />
              <p className="text-sm font-bold text-white">
                Storm damage to your property?{' '}
                <span className="font-normal opacity-80">We inspect within 48 hours.</span>
              </p>
            </div>

            {/* Center — damage type pills */}
            <div className="hidden items-center gap-1.5 xl:flex">
              {STORM_TYPES.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold text-white transition hover:bg-white/25"
                >
                  {t.label}
                </Link>
              ))}
            </div>

            {/* Right — phone CTA */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex shrink-0 items-center gap-1.5 rounded-lg bg-white px-3.5 py-1.5 text-sm font-bold text-brand-primary transition hover:bg-white/90"
            >
              <Phone className="h-3.5 w-3.5" />
              {COMPANY_INFO.phone}
            </a>

          </div>
        </div>
      </motion.div>
    )
  }

  // Section variant — richer callout block
  return (
    <section className="bg-brand-secondary py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12"
        >

          {/* Left */}
          <div className="flex-1">
            <div className="mb-3 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary">
                <CloudLightning className="h-5 w-5 text-white" strokeWidth={2} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Storm Damage Response
              </p>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Hit by a Storm?{' '}
              <span className="text-brand-primary">We Respond in 48 Hours.</span>
            </h2>
            <p className="mb-5 text-sm leading-relaxed text-white/70 md:text-base max-w-xl">
              Don't wait. Undetected roof or siding damage gets worse fast — and insurance
              claim windows close. Advanced Roofing & Siding provides free emergency
              inspections and handles the entire{' '}
              <Link href="/resources/insurance-claims" className="font-semibold text-white hover:text-brand-primary transition-colors underline underline-offset-2">
                insurance claim process
              </Link>{' '}
              so you don't have to fight the adjuster alone.
            </p>

            {/* Damage type grid */}
            <div className="mb-6">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-white/40">
                Storm Damage Types We Cover
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Hail Damage', href: '/resources/insurance-claims/hail-damage' },
                  { label: 'Wind Damage', href: '/resources/insurance-claims/wind-damage' },
                  { label: 'Ice Dam & Snow', href: '/resources/insurance-claims/ice-dam-snow-damage-claims' },
                  { label: 'Tree Damage', href: '/resources/insurance-claims/tree-damage' },
                  { label: 'Old Roof Claims', href: '/resources/insurance-claims/old-roof' },
                  { label: 'Storm Restoration', href: '/services/storm-restoration' },
                ].map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/80 transition hover:border-brand-primary hover:text-white"
                  >
                    {t.label} →
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5 sm:flex-row">
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-primary-dark">
                  <Zap className="h-4 w-4" />
                  Book Free Inspection
                </button>
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white/40"
              >
                <Phone className="h-4 w-4" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right — 3 urgency stats */}
          <div className="grid grid-cols-3 gap-3 lg:w-72 lg:grid-cols-1">
            {[
              { value: '48 Hrs', label: 'Inspection Guarantee' },
              { value: '160+', label: '5-Star Google Reviews' },
              { value: '30+', label: 'Years of Claim Experience' },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center lg:text-left"
              >
                <p className="text-xl font-bold text-white md:text-2xl">{s.value}</p>
                <p className="mt-0.5 text-[11px] font-semibold leading-snug text-white/50">{s.label}</p>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
