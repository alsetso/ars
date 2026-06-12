'use client'

import { motion } from 'framer-motion'
import {
  Home, Briefcase, Building2, Users,
  ArrowRight, Shield, Award, BadgeCheck, CheckCircle, Star,
} from 'lucide-react'
import Link from 'next/link'

const markets = [
  { id: 'residential',     title: 'Residential',       description: 'Homeowners & families',     icon: Home,       href: '/who-we-serve/residential' },
  { id: 'commercial',      title: 'Commercial',         description: 'Businesses & storefronts',  icon: Briefcase,  href: '/who-we-serve/commercial' },
  { id: 'municipal',       title: 'Municipal',          description: 'Government & public',       icon: Building2,  href: '/who-we-serve/municipal' },
  { id: 'professionals',   title: 'Real Estate Pros',   description: 'Agents & investors',        icon: Users,      href: '/who-we-serve/professionals' },
  { id: 'property-manager',title: 'Property Managers',  description: 'Multi-unit portfolios',     icon: Building2,  href: '/who-we-serve/property-manager' },
  { id: 'hoa',             title: 'HOA',                description: 'Homeowner associations',    icon: Home,       href: '/who-we-serve/hoa' },
]

const credentials = [
  { icon: Shield,       label: 'GAF Master Elite',      href: '/resources/gaf-master-elite-contractor' },
  { icon: Award,        label: '30+ Years Experience',  href: '/about' },
  { icon: BadgeCheck,   label: 'A+ BBB Rated',          href: '/about' },
  { icon: CheckCircle,  label: 'Licensed & Insured',    href: '/about' },
  { icon: Star,         label: '50-Year Warranty',      href: '/resources/warranties' },
]

export function WhoWeServePreview() {
  return (
    <section className="bg-gray-50 border-t border-gray-100 section-padding-sm">
      <div className="container mx-auto container-padding">

        {/* ── Row header ── */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
              Who We Serve
            </h2>
            <p className="mt-0.5 text-sm text-gray-500">
              Tailored solutions for every client type
            </p>
          </div>
          <Link
            href="/who-we-serve"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors duration-200 shrink-0"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ── Market grid ── */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {markets.map((market, index) => {
            const Icon = market.icon
            return (
              <motion.div
                key={market.id}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link
                  href={market.href}
                  className="group flex flex-col items-start gap-2.5 rounded-xl border border-white bg-white px-4 py-3.5 shadow-soft hover:shadow-medium hover:border-brand-primary/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary-light group-hover:bg-brand-primary transition-colors duration-200">
                    <Icon className="h-4 w-4 text-brand-primary group-hover:text-white transition-colors duration-200" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-brand-primary transition-colors duration-200 leading-tight">
                      {market.title}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-gray-400">
                      {market.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* ── Credential badges ── */}
        <motion.div
          className="mt-5 flex flex-wrap items-center gap-x-1 gap-y-2 border-t border-gray-200 pt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {credentials.map((cred, index) => {
            const Icon = cred.icon
            return (
              <span key={cred.label} className="contents">
                <Link
                  href={cred.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 hover:border-brand-primary/30 hover:text-brand-primary transition-colors duration-150"
                >
                  <Icon className="h-3.5 w-3.5 text-brand-primary shrink-0" strokeWidth={2} />
                  {cred.label}
                </Link>
                {index < credentials.length - 1 && (
                  <span className="text-gray-300 select-none hidden sm:inline">·</span>
                )}
              </span>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
