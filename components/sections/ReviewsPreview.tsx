'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { REVIEWS, AVERAGE_RATING, TOTAL_REVIEWS } from '@/lib/reviews'
import { Star, ExternalLink, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export function ReviewsPreview() {
  // Show first 6 reviews
  const featuredReviews = REVIEWS.slice(0, 6)

  return (
    <Section className="bg-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* Rating Summary */}
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 mb-8 p-4 md:mb-12 md:p-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 mb-3 md:gap-2 md:mb-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 md:h-8 md:w-8 ${
                        i < Math.round(AVERAGE_RATING)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900 ml-1.5 md:text-3xl md:ml-2">
                  {AVERAGE_RATING.toFixed(1)}
                </span>
              </div>
              <p className="text-base text-gray-700 mb-1.5 md:text-xl md:mb-2">
                Based on {TOTAL_REVIEWS}+ verified customer reviews
              </p>
              <p className="text-sm text-gray-600 mb-4 md:text-base md:mb-6">
                Trusted by homeowners and businesses across Minnesota and Wisconsin
              </p>
              <a
                href="https://www.google.com/search?q=Advanced+Roofing+%26+Siding+Inc.%2C+3601+211th+Ln+NW%2C+Oak+Grove%2C+MN+55303"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Button variant="primary" size="md" className="group md:size-lg">
                  Read More Reviews on Google
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 md:h-5 md:w-5" />
                </Button>
              </a>
            </div>
          </Card>
        </AnimatedDiv>

        <SectionHeader
          title="What Our Customers Say"
          description="Real reviews from real customers who trusted us with their exterior projects"
        />

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              author={review.author}
              rating={review.rating}
              text={review.text}
              date={review.date}
              source={review.source}
              index={index}
            />
          ))}
        </div>

        {/* View All Reviews CTA */}
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Card className="bg-white p-4 md:p-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 md:mb-6 md:h-16 md:w-16">
              <MessageSquare className="h-6 w-6 text-brand-primary md:h-8 md:w-8" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-gray-900 md:mb-4 md:text-2xl">
              Read All {TOTAL_REVIEWS}+ Reviews
            </h3>
            <p className="mb-4 text-sm text-gray-700 max-w-2xl mx-auto md:mb-6 md:text-lg">
              See what hundreds of satisfied customers have to say about their experience with Advanced Roofing & Siding Inc.
            </p>
            <Link href="/resources/reviews">
              <Button variant="primary" size="md" className="group md:size-lg">
                View All Reviews
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 md:h-5 md:w-5" />
              </Button>
            </Link>
          </Card>
        </AnimatedDiv>
      </div>
    </Section>
  )
}

