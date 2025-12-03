'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { MINNESOTA_CITIES, WISCONSIN_CITIES } from '@/lib/constants'
import { MapPin } from 'lucide-react'
import Link from 'next/link'

// Client-safe city to slug conversion (matches server-side cityToSlug)
function cityToSlug(city: string): string {
  if (!city || typeof city !== 'string') return ''
  return city.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')
}

export function ServiceAreas() {
  return (
    <Section className="bg-white">
      <SectionHeader
        title="Service Areas"
        description="Proudly serving Minnesota and Wisconsin communities"
      />

      <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
        {/* Minnesota */}
        <AnimatedDiv
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Card hover={false} variant="elevated">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 ">
                <MapPin className="h-6 w-6 text-brand-primary" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">Minnesota</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {MINNESOTA_CITIES.map((city) => (
                <Link
                  key={city}
                  href={`/service-areas/mn/${cityToSlug(city)}`}
                  className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-all duration-200 hover:bg-brand-primary hover:text-white hover: md:px-4 md:py-2 md:text-sm"
                >
                  {city}
                </Link>
              ))}
            </div>
          </Card>
        </AnimatedDiv>

        {/* Wisconsin */}
        <AnimatedDiv
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Card hover={false} variant="elevated">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 ">
                <MapPin className="h-6 w-6 text-brand-primary" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">Wisconsin</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {WISCONSIN_CITIES.map((city) => (
                <Link
                  key={city}
                  href={`/service-areas/wi/${cityToSlug(city)}`}
                  className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-all duration-200 hover:bg-brand-primary hover:text-white hover: md:px-4 md:py-2 md:text-sm"
                >
                  {city}
                </Link>
              ))}
            </div>
          </Card>
        </AnimatedDiv>
      </div>

      {/* CTA Section */}
      <AnimatedDiv
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-10 text-center md:mt-12"
      >
        <Card className="bg-white" variant="outlined">
          <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 md:mb-3 md:text-2xl">
            Don't see your city listed?
          </h3>
          <p className="mb-4 text-base text-gray-700 leading-relaxed md:mb-5 md:text-lg">
            We may still service your area! <Link href="/contact" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Contact us</Link> to find out if we can help with your
            <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2"> roofing</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link>, or <Link href="/services" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">exterior needs</Link>.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Contact Us
            </Button>
          </Link>
        </Card>
      </AnimatedDiv>
    </Section>
  )
}


