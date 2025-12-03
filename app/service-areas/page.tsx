import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { MINNESOTA_CITIES, WISCONSIN_CITIES } from '@/lib/constants'
import { cityToSlug } from '@/lib/city-utils'
import { MapPin } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Areas - Minnesota & Wisconsin | Advanced Roofing & Siding',
  description: 'Proudly serving 50+ cities across Minnesota and Wisconsin. Find out if we service your area for roofing, siding, windows, and storm restoration.',
  keywords: 'Minnesota roofing, Wisconsin roofing, service areas, Minneapolis, St Paul, Anoka',
}

export default function ServiceAreasPage() {
  return (
    <PageLayout>
      <PageHero
        title="Service Areas"
        description="Proudly serving Minnesota and Wisconsin communities"
        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2400"
      />
      <Section className="bg-white">
        <SectionHeader
          title="Service Areas"
          description="Proudly serving Minnesota and Wisconsin communities"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Minnesota */}
          <AnimatedDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card hover={false}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                  <MapPin className="h-6 w-6 text-brand-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Minnesota</h2>
              </div>

              <p className="mb-4 text-gray-600">
                We proudly serve the following Minnesota cities and surrounding areas:
              </p>

              <div className="flex flex-wrap gap-2">
                {MINNESOTA_CITIES.map((city) => (
                  <Link
                    key={city}
                    href={`/service-areas/mn/${cityToSlug(city)}`}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-brand-primary hover:text-white"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </Card>
          </AnimatedDiv>

          {/* Wisconsin */}
          <AnimatedDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card hover={false}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                  <MapPin className="h-6 w-6 text-brand-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Wisconsin</h2>
              </div>

              <p className="mb-4 text-gray-600">
                We proudly serve the following Wisconsin cities and surrounding areas:
              </p>

              <div className="flex flex-wrap gap-2">
                {WISCONSIN_CITIES.map((city) => (
                  <Link
                    key={city}
                    href={`/service-areas/wi/${cityToSlug(city)}`}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-brand-primary hover:text-white"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </Card>
          </AnimatedDiv>
        </div>

        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-br from-red-50 to-red-100">
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Don't see your city listed?
            </h3>
            <p className="mb-4 text-gray-700">
              We may still service your area! Contact us to find out if we can help with your
              roofing, siding, or exterior needs.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-brand-primary px-6 py-3 text-white font-semibold transition-colors hover:bg-red-800"
            >
              Contact Us
            </a>
          </Card>
        </AnimatedDiv>
      </Section>
    </PageLayout>
  )
}

