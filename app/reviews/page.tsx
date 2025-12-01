import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { REVIEWS, AVERAGE_RATING, TOTAL_REVIEWS } from '@/lib/reviews'
import { Star, ExternalLink, MessageSquare, Code } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Reviews - Advanced Roofing & Siding Inc. | Minnesota',
  description: `Read ${TOTAL_REVIEWS}+ customer reviews for Advanced Roofing & Siding Inc. ${AVERAGE_RATING.toFixed(1)}-star rating from satisfied customers across Minnesota and Wisconsin.`,
  keywords: 'roofing reviews, siding reviews, Minnesota roofing company reviews, customer testimonials',
  openGraph: {
    title: `Customer Reviews - ${AVERAGE_RATING.toFixed(1)} Stars | Advanced Roofing & Siding Inc.`,
    description: `Read ${TOTAL_REVIEWS}+ verified customer reviews from satisfied homeowners and businesses.`,
    url: 'https://advancedroofingmn.com/reviews',
  },
}

export default function ReviewsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Customer Reviews"
        description={`${AVERAGE_RATING.toFixed(1)}-star average from ${TOTAL_REVIEWS}+ satisfied customers`}
        backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
        showCTA={false}
      />

      {/* Rating Summary */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-8 w-8 ${
                          i < Math.round(AVERAGE_RATING)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-3xl font-bold text-gray-900 ml-2">
                    {AVERAGE_RATING.toFixed(1)}
                  </span>
                </div>
                <p className="text-xl text-gray-700 mb-2">
                  Based on {TOTAL_REVIEWS}+ verified customer reviews
                </p>
                <p className="text-gray-600 mb-6">
                  Trusted by homeowners and businesses across Minnesota and Wisconsin
                </p>
                <a
                  href="https://www.google.com/search?q=Advanced+Roofing+%26+Siding+Inc.+Reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Button variant="primary" size="lg" className="group">
                    Read More Reviews on Google
                    <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </Card>
          </AnimatedDiv>

          <SectionHeader
            title="What Our Customers Say"
            description="Real reviews from real customers who trusted us with their exterior projects"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review, index) => (
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

          {/* Dev Instructions - Remove in production */}
          {process.env.NODE_ENV === 'development' && (
            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <Card className="bg-yellow-50 border-2 border-yellow-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                      <Code className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      Developer Instructions: Google Reviews Integration
                    </h3>
                    <p className="mb-4 text-gray-700">
                      To integrate real-time Google Business reviews, you'll need to set up the following:
                    </p>
                    <ul className="mb-4 space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-600"></span>
                        <span>
                          <strong>Google Places API Key:</strong> Obtain from Google Cloud Console
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-600"></span>
                        <span>
                          <strong>Google Business Profile Place ID:</strong> Find your Place ID using the{' '}
                          <a
                            href="https://developers.google.com/maps/documentation/places/web-service/place-id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-primary hover:text-red-700 underline"
                          >
                            Place ID Finder
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-600"></span>
                        <span>
                          <strong>API Endpoint:</strong> Create a Next.js API route to fetch reviews from Google Places API
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-600"></span>
                        <span>
                          <strong>Environment Variables:</strong> Store API key securely in <code className="bg-yellow-100 px-1 py-0.5 rounded">.env.local</code>
                        </span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> Currently displaying 3 manually added reviews. Replace the hardcoded reviews in{' '}
                      <code className="bg-yellow-100 px-1 py-0.5 rounded">lib/reviews.ts</code> with API-fetched data.
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>
          )}
        </div>
      </Section>

      {/* Leave a Review CTA */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                <MessageSquare className="h-8 w-8 text-brand-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Share Your Experience
              </h2>
              <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto">
                We value your feedback! If you've worked with Advanced Roofing & Siding Inc.,
                please share your experience to help others make informed decisions.
              </p>
              <a
                href="https://www.google.com/search?q=Advanced+Roofing+%26+Siding+Inc.+Reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Button variant="primary" size="lg" className="group">
                  Leave a Review on Google
                  <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
  )
}

