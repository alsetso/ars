import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { REVIEWS, AVERAGE_RATING, TOTAL_REVIEWS } from '@/lib/reviews'
import { Star, ExternalLink, MessageSquare } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Customer Reviews - ${AVERAGE_RATING.toFixed(1)} Stars | ${TOTAL_REVIEWS}+ Reviews`,
  description: `Read ${TOTAL_REVIEWS}+ customer reviews for Advanced Roofing & Siding Inc. ${AVERAGE_RATING.toFixed(1)}-star rating from satisfied customers across Minnesota and Wisconsin.`,
  keywords: ['roofing reviews', 'siding reviews', 'Minnesota roofing company reviews', 'customer testimonials', 'roofing contractor reviews', 'exterior contractor reviews'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/resources/reviews',
  },
  openGraph: {
    title: `Customer Reviews - ${AVERAGE_RATING.toFixed(1)} Stars | Advanced Roofing & Siding Inc.`,
    description: `Read ${TOTAL_REVIEWS}+ verified customer reviews from satisfied homeowners and businesses across Minnesota and Wisconsin.`,
    url: 'https://advancedroofingmn.com/resources/reviews',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: `Customer Reviews - ${AVERAGE_RATING.toFixed(1)} Stars | Advanced Roofing & Siding Inc.`,
      },
    ],
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
                  href="https://www.google.com/search?q=Advanced+Roofing+%26+Siding+Inc.%2C+3601+211th+Ln+NW%2C+Oak+Grove%2C+MN+55303"
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
                href="https://www.google.com/search?q=Advanced+Roofing+%26+Siding+Inc.%2C+3601+211th+Ln+NW%2C+Oak+Grove%2C+MN+55303"
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

