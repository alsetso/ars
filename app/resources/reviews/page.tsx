import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { ReviewsGrid } from '@/components/sections/ReviewsGrid'
import { REVIEWS, AVERAGE_RATING, TOTAL_REVIEWS } from '@/lib/reviews'
import { Star, ExternalLink, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: `Customer Reviews — ${AVERAGE_RATING.toFixed(1)} Stars | Advanced Roofing & Siding Inc.`,
  description: `Read ${TOTAL_REVIEWS}+ real customer reviews for Advanced Roofing & Siding Inc. ${AVERAGE_RATING.toFixed(1)}-star rated roofing contractor serving Minnesota and Wisconsin homeowners, HOAs, and commercial properties.`,
  keywords: [
    'roofing reviews Minnesota',
    'siding contractor reviews',
    'Advanced Roofing Siding reviews',
    'roofing contractor reviews Twin Cities',
    'customer testimonials roofing Minnesota',
    'best roofing company reviews',
  ],
  alternates: {
    canonical: 'https://advancedroofingmn.com/resources/reviews',
  },
  openGraph: {
    title: `Customer Reviews — ${AVERAGE_RATING.toFixed(1)} Stars | Advanced Roofing & Siding Inc.`,
    description: `${TOTAL_REVIEWS}+ verified customer reviews from homeowners and businesses across Minnesota and Wisconsin.`,
    url: 'https://advancedroofingmn.com/resources/reviews',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: 'Advanced Roofing & Siding Inc. Customer Reviews',
      },
    ],
  },
}

const GOOGLE_URL =
  'https://www.google.com/search?q=Advanced+Roofing+%26+Siding+Inc.%2C+3601+211th+Ln+NW%2C+Oak+Grove%2C+MN+55303'

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Advanced Roofing & Siding Inc.',
  url: 'https://advancedroofingmn.com',
  image: 'https://advancedroofingmn.com/AFS-Logo900.png',
  telephone: '+17634270777',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3601 211th Ln NW',
    addressLocality: 'Oak Grove',
    addressRegion: 'MN',
    postalCode: '55303',
    addressCountry: 'US',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: AVERAGE_RATING.toFixed(1),
    reviewCount: TOTAL_REVIEWS,
    bestRating: '5',
    worstRating: '1',
  },
  review: REVIEWS.slice(0, 10).map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.author },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: '5',
    },
    reviewBody: r.text,
    datePublished: '2024-01-01',
  })),
}

export default function ReviewsPage() {
  return (
    <PageLayout>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Resources', url: '/resources' },
        { name: 'Customer Reviews', url: '/resources/reviews' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      <PageHero
        title="Customer Reviews"
        description={`${AVERAGE_RATING.toFixed(1)}-star average from ${TOTAL_REVIEWS}+ satisfied customers`}
        backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
        showCTA={false}
      />

      {/* Aggregate rating summary */}
      <Section className="bg-white pb-0">
        <div className="mx-auto max-w-7xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8"
          >
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-8 md:text-left">
              {/* Big rating */}
              <div className="shrink-0">
                <p className="text-6xl font-bold text-gray-900 leading-none">{AVERAGE_RATING.toFixed(1)}</p>
                <div className="mt-2 flex justify-center gap-0.5 md:justify-start">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-gray-500">out of 5 stars</p>
              </div>

              <div className="border-gray-200 md:border-l md:pl-8">
                <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
                  {TOTAL_REVIEWS}+ Verified Customer Reviews
                </h2>
                <p className="mt-1 text-sm text-gray-600 md:text-base">
                  Trusted by homeowners, HOAs, and businesses across Minnesota and Wisconsin.
                  Our reviews reflect our commitment to quality craftsmanship and responsive service.
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="sm" className="group">
                      View on Google
                      <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </a>
                  <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm" className="group">
                      Leave a Review
                      <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </Section>

      {/* All reviews grid */}
      <ReviewsGrid />

      {/* Leave a review CTA */}
      <Section className="bg-brand-secondary">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedDiv
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              <MessageSquare className="h-7 w-7 text-white" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Worked with Us? Share Your Experience.
            </h2>
            <p className="mb-6 text-sm text-white/70 md:text-base max-w-xl mx-auto">
              Your feedback helps other homeowners make confident decisions. If Advanced Roofing & Siding
              has served you, we'd love to hear about your experience.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md" className="group w-full sm:w-auto">
                  Leave a Google Review
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="secondary" size="md" className="w-full sm:w-auto">
                  Get a Free Estimate
                </Button>
              </Link>
            </div>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
  )
}
