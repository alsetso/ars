'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { EstimateForm } from '@/components/forms/EstimateForm'
import { ReactNode } from 'react'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

interface PageHeroProps {
  title: string
  description?: string
  backgroundImage?: string
  showCTA?: boolean
  ctaText?: string
  ctaHref?: string
  children?: ReactNode
  theme?: 'default' | 'winter' | 'dark'
  /** When true, renders a two-column layout with EstimateForm on the right */
  showForm?: boolean
  /** Pre-selects a service in the embedded form (e.g. "roofing", "storm-restoration") */
  formServiceSlug?: string
  /** Optional back-link rendered top-left of the hero */
  backHref?: string
  backLabel?: string
}

export function PageHero({
  title,
  description,
  backgroundImage,
  showCTA = true,
  ctaText = 'Get Free Estimate',
  ctaHref = '/services/free-estimate',
  children,
  theme = 'default',
  showForm = false,
  formServiceSlug = '',
  backHref,
  backLabel = 'Back',
}: PageHeroProps) {
  const backgroundGradient =
    theme === 'winter'
      ? 'bg-gradient-to-br from-blue-100 via-blue-50 to-white'
      : theme === 'dark'
        ? 'bg-brand-secondary'
        : 'bg-gradient-to-br from-gray-50 to-gray-100'

  const imageOpacity = theme === 'winter' ? 'opacity-30' : theme === 'dark' ? 'opacity-10' : 'opacity-20'

  const headingClass = theme === 'dark' ? 'text-white' : 'text-gray-900'
  const descClass = theme === 'dark' ? 'text-white/70' : 'text-gray-700'
  const bulletClass = theme === 'dark' ? 'text-white/70' : 'text-gray-600'
  const backLinkClass =
    theme === 'dark'
      ? 'text-white/60 hover:text-white'
      : 'text-gray-500 hover:text-gray-800'

  const BackLink = backHref ? (
    <Link
      href={backHref}
      className={`inline-flex items-center gap-1 text-xs font-medium transition ${backLinkClass}`}
    >
      <ChevronLeft className="h-3.5 w-3.5" />
      {backLabel}
    </Link>
  ) : null

  /* ── Two-column layout (content left, form right) ─────────────────────── */
  if (showForm) {
    return (
      <section className={`relative overflow-hidden ${backgroundGradient}`}>
        {backgroundImage && (
          <div className="absolute inset-0 z-0">
            <div
              className={`h-full w-full bg-cover bg-center ${imageOpacity}`}
              style={{ backgroundImage: `url('${backgroundImage}')` }}
            />
          </div>
        )}

        <div className="container relative z-10 mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          {BackLink && <div className="mb-6">{BackLink}</div>}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">

            {/* Left — headline + trust signals */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <h1 className={`mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${headingClass}`}>
                {title}
              </h1>
              {description && (
                <p className={`mb-6 text-base sm:text-lg lg:text-xl ${descClass}`}>
                  {description}
                </p>
              )}

              {/* Trust indicators */}
              <ul className={`space-y-2 text-sm ${bulletClass}`}>
                {[
                  'GAF Master Elite Certified — top 3% nationwide',
                  'Free, no-obligation estimate',
                  '30+ years serving Minnesota & Wisconsin',
                  'Response within 24 hours',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              {children && <div className="mt-6">{children}</div>}
            </motion.div>

            {/* Right — estimate form card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="rounded-2xl bg-white p-6 shadow-large md:p-7">
                <div className="mb-5">
                  <div className="mb-1 inline-block rounded-md bg-brand-primary-light px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary">
                    Free &amp; No Obligation
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Get Your Free Estimate
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Response within 24 hours — usually same day
                  </p>
                </div>
                <EstimateForm serviceSlug={formServiceSlug} />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    )
  }

  /* ── Default centered layout ──────────────────────────────────────────── */
  return (
    <section className={`relative overflow-hidden ${backgroundGradient}`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div
            className={`h-full w-full bg-cover bg-center ${imageOpacity}`}
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
        </div>
      )}

      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {BackLink && <div className="mb-6">{BackLink}</div>}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className={`mb-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${headingClass}`}>
              {title}
            </h1>
            {description && (
              <p className={`text-base sm:text-lg lg:text-xl ${descClass}`}>{description}</p>
            )}
          </motion.div>

          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href={ctaHref}>
                <Button variant="primary" size="lg">
                  {ctaText}
                </Button>
              </a>
            </motion.div>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
