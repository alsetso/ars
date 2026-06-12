'use client'

import { Section } from '@/components/ui/Section'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { REVIEWS, AVERAGE_RATING, TOTAL_REVIEWS } from '@/lib/reviews'
import { Star, ExternalLink, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const GOOGLE_URL =
  'https://www.google.com/search?q=Advanced+Roofing+%26+Siding+Inc.%2C+3601+211th+Ln+NW%2C+Oak+Grove%2C+MN+55303'

const INITIAL_VISIBLE = 9
const BATCH_SIZE = 21

// First 30 reviews shown on homepage
const HOME_REVIEWS = REVIEWS.slice(0, 30)

export function ReviewsPreview() {
  const [visible, setVisible] = useState(INITIAL_VISIBLE)
  const showMore = () => setVisible((v) => Math.min(v + BATCH_SIZE, HOME_REVIEWS.length))
  const hasMore = visible < HOME_REVIEWS.length

  return (
    <Section className="bg-gray-50">
      <div className="mx-auto max-w-7xl">

        {/* Header row */}
        <AnimatedDiv
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">
              Customer Reviews
            </p>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-2 max-w-xl text-sm text-gray-600 md:text-base">
              Real feedback from homeowners and businesses across Minnesota and Wisconsin.
            </p>
          </div>

          {/* Aggregate rating pill */}
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-soft transition-shadow hover:shadow-md"
          >
            <div className="text-center">
              <p className="text-2xl font-bold leading-none text-gray-900">{AVERAGE_RATING.toFixed(1)}</p>
              <div className="mt-0.5 flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="border-l border-gray-200 pl-3">
              <p className="text-sm font-semibold text-gray-900">{TOTAL_REVIEWS}+ Reviews</p>
              <p className="text-[11px] text-gray-500">Google · Verified</p>
            </div>
            <ExternalLink className="h-3.5 w-3.5 text-gray-400 transition-transform group-hover:translate-x-0.5" />
          </a>
        </AnimatedDiv>

        {/* Review grid — first 3 are featured (larger), rest are compact */}
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {/* Top 3 — featured variant */}
          {HOME_REVIEWS.slice(0, 3).map((review, i) => (
            <ReviewCard
              key={review.id}
              author={review.author}
              rating={review.rating}
              text={review.text}
              date={review.date}
              source={review.source}
              index={i}
              variant="featured"
            />
          ))}

          {/* Remaining visible reviews — compact */}
          {HOME_REVIEWS.slice(3, visible).map((review, i) => (
            <ReviewCard
              key={review.id}
              author={review.author}
              rating={review.rating}
              text={review.text}
              date={review.date}
              source={review.source}
              index={i}
              variant="default"
            />
          ))}
        </div>

        {/* Show more / CTAs */}
        <AnimatedDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          {hasMore && (
            <button
              onClick={showMore}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-soft transition hover:border-gray-300 hover:shadow-md"
            >
              <ChevronDown className="h-4 w-4" />
              Show more reviews
            </button>
          )}
          <Link href="/resources/reviews">
            <Button variant="secondary" size="md" className="w-full sm:w-auto">
              Read All {TOTAL_REVIEWS}+ Reviews
            </Button>
          </Link>
          <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="md" className="group w-full sm:w-auto">
              Leave Us a Review
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </a>
        </AnimatedDiv>

      </div>
    </Section>
  )
}
