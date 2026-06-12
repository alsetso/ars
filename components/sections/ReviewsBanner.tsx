'use client'

import { Star, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { REVIEWS, AVERAGE_RATING, TOTAL_REVIEWS } from '@/lib/reviews'
import Link from 'next/link'

const GOOGLE_URL =
  'https://www.google.com/search?q=Advanced+Roofing+%26+Siding+Inc.%2C+3601+211th+Ln+NW%2C+Oak+Grove%2C+MN+55303'

/** Compact horizontal review bar — use on service pages, who-we-serve pages, etc.
 *  Shows aggregate rating + rotating pull quote + CTA links.
 */
export function ReviewsBanner() {
  // pick a featured pull quote
  const quote = REVIEWS[2]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white border-y border-gray-100"
    >
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Left — aggregate */}
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-gray-900">{AVERAGE_RATING.toFixed(1)}</span>
            <span className="hidden text-sm text-gray-500 sm:inline">
              · {TOTAL_REVIEWS}+ Google Reviews
            </span>
            <ExternalLink className="h-3 w-3 text-gray-400 transition-transform group-hover:translate-x-0.5" />
          </a>

          {/* Center — pull quote (hidden on mobile) */}
          <p className="hidden max-w-lg truncate text-sm italic text-gray-600 lg:block">
            "{quote.text.slice(0, 110)}…" — {quote.author}
          </p>

          {/* Right — CTAs */}
          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/resources/reviews"
              className="text-sm font-semibold text-brand-primary hover:underline"
            >
              Read all reviews
            </Link>
            <span className="text-gray-300">·</span>
            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-700 hover:text-brand-primary transition-colors"
            >
              Leave a review
            </a>
          </div>

        </div>
      </div>
    </motion.div>
  )
}
