'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { REVIEWS, TOTAL_REVIEWS } from '@/lib/reviews'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const GOOGLE_URL =
  'https://www.google.com/search?q=Advanced+Roofing+%26+Siding+Inc.%2C+3601+211th+Ln+NW%2C+Oak+Grove%2C+MN+55303'

const INITIAL_VISIBLE = 18
const BATCH_SIZE = 18

export function ReviewsGrid() {
  const [visible, setVisible] = useState(INITIAL_VISIBLE)
  const showMore = () => setVisible((v) => Math.min(v + BATCH_SIZE, REVIEWS.length))
  const hasMore = visible < REVIEWS.length

  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-7xl">
        <AnimatedDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">
            What Customers Are Saying
          </p>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Real Reviews from Real Customers
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600 md:text-base">
            Every review below is from a verified customer who trusted Advanced Roofing & Siding with their home or commercial property.
            From{' '}
            <Link href="/services/roofing" className="font-medium text-brand-primary hover:underline">
              roof replacements
            </Link>{' '}
            and{' '}
            <Link href="/services/siding" className="font-medium text-brand-primary hover:underline">
              siding installs
            </Link>{' '}
            to{' '}
            <Link href="/resources/insurance-claims" className="font-medium text-brand-primary hover:underline">
              insurance claim advocacy
            </Link>
            , we take pride in every project.
          </p>
        </AnimatedDiv>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {REVIEWS.slice(0, visible).map((review, index) => (
            <ReviewCard
              key={review.id}
              author={review.author}
              rating={review.rating}
              text={review.text}
              date={review.date}
              source={review.source}
              index={index % BATCH_SIZE}
              variant="default"
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          {hasMore && (
            <button
              onClick={showMore}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-soft transition hover:border-gray-300 hover:shadow-md"
            >
              <ChevronDown className="h-4 w-4" />
              Show more reviews ({REVIEWS.length - visible} remaining)
            </button>
          )}
          <p className="text-sm text-gray-400">
            Showing {Math.min(visible, REVIEWS.length)} of {TOTAL_REVIEWS}+ total reviews.{' '}
            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-primary hover:underline"
            >
              View all on Google
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  )
}
