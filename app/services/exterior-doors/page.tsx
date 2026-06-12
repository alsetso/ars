import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { ServiceProcess } from '@/components/sections/ServiceProcess'
import { ServiceHighlights } from '@/components/sections/ServiceHighlights'
import { ServiceCapabilities } from '@/components/sections/ServiceCapabilities'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { RelatedServices } from '@/components/sections/RelatedServices'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { ServiceAreaCities } from '@/components/seo/ServiceAreaCities'
import { ServiceSchema } from '@/components/seo/ServiceSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Exterior Door Installation & Replacement — Minnesota & Wisconsin | Advanced Roofing & Siding',
  description: 'Professional exterior door installation and replacement across Minnesota and Wisconsin. Entry doors, storm doors, and patio doors. Energy-efficient, low-maintenance solutions. Free estimates.',
  keywords: ['exterior door installation Minnesota', 'entry door replacement Twin Cities', 'front door replacement Minnesota', 'door contractor Minnesota', 'patio door replacement', 'storm door installation', 'energy efficient doors Minnesota', 'Wisconsin door installation'],
  alternates: { canonical: 'https://advancedroofingmn.com/services/exterior-doors' },
  openGraph: {
    title: 'Exterior Door Installation & Replacement — Minnesota & Wisconsin',
    description: 'Professional exterior door installation and replacement across the Twin Cities and Western Wisconsin. Energy-efficient and built to last.',
    url: 'https://advancedroofingmn.com/services/exterior-doors',
    images: [{ url: 'https://advancedroofingmn.com/gallery/379307894_905433307725857_336380520310619416_n (1).webp', width: 1200, height: 630, alt: 'Exterior Door Installation by Advanced Roofing & Siding' }],
  },
}

const features = [
  { text: 'Entry Door Replacement & Installation', link: null },
  { text: 'Storm Door & Patio Door Installation', link: null },
  { text: 'Energy-Efficient Door Systems', link: null },
  { text: 'Bundle with Window Projects for Maximum Savings', link: '/services/windows' },
  { text: 'Licensed, Insured & Local', link: '/about' },
  { text: '30+ Years of Exterior Experience', link: '/about' },
]

const faqs = [
  {
    question: 'How do I know if my exterior door needs to be replaced?',
    answer: 'Common signs include visible drafts or daylight around the frame, difficulty opening or closing, rot or damage to the door or frame, condensation between glass panes, or a door that is simply outdated and lowering your curb appeal. A free consultation will give you an honest assessment.',
  },
  {
    question: 'What types of exterior doors do you install?',
    answer: 'We install entry doors, storm doors, patio doors, and sliding glass doors for residential and light commercial properties. We work with a range of materials and styles to match your home and budget.',
  },
  {
    question: 'Is it worth bundling door and window replacement together?',
    answer: 'Yes — in most cases, combining window and door replacement is the most efficient approach. You save on mobilization, the exterior trim work is done consistently, and the energy performance improvements compound. We frequently package both into a single project estimate.',
  },
  {
    question: 'Can a new exterior door improve my energy bills?',
    answer: 'Significantly, yes. Exterior doors are a major source of heat loss in Minnesota homes, particularly older units with degraded weatherstripping, inadequate insulation, or poor frame sealing. New doors with proper installation eliminate those losses at the source.',
  },
  {
    question: 'Do you handle the trim and finishing work around the door?',
    answer: 'Yes. A complete door installation includes the door unit, frame, threshold, exterior trim, flashing, and weatherstripping — not just swapping the door slab. We ensure the entire opening is properly sealed and finished.',
  },
  {
    question: 'What areas do you serve for door installation?',
    answer: 'We serve the Twin Cities metro and surrounding communities across Minnesota and Western Wisconsin. View our full service area for coverage details.',
  },
]

export default function ExteriorDoorsPage() {
  return (
    <PageLayout>
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        serviceName="Exterior Doors"
        serviceDescription="Exterior door replacement built for comfort, security, and energy savings in Minnesota's climate"
        serviceUrl="/services/exterior-doors"
      />
      <LocalBusinessSchema pageUrl="/services/exterior-doors" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Exterior Doors', url: '/services/exterior-doors' },
        ]}
      />
      <PageHero
        title="Exterior Door Installation & Replacement"
        description="First impression. Last line of defense. Doors built for Minnesota winters and built to last."
        backgroundImage="/gallery/379307894_905433307725857_336380520310619416_n (1).webp"
        showForm
        formServiceSlug="exterior-doors"
      />

      {/* Intro */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="mb-3 text-sm text-gray-700 md:mb-4 md:text-lg">
              Your exterior doors do more than open and close. They are a primary barrier against Minnesota's winters, a significant factor in your home's energy performance, and the first thing guests and buyers notice about your property. When doors age, settle, or deteriorate, the problems multiply — drafts, security gaps, higher heating bills, and declining curb appeal.
            </p>
            <p className="mb-3 text-sm text-gray-700 md:mb-4 md:text-lg">
              Advanced Roofing &amp; Siding installs exterior doors as part of a complete approach to your home's envelope. We frequently pair door replacement with{' '}
              <Link href="/services/windows" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">window replacement</Link>{' '}
              projects — eliminating the two biggest sources of exterior air infiltration in a single mobilization.
            </p>
            <p className="text-sm text-gray-700 md:text-lg">
              Whether you need a single front door replaced, a full set of patio doors, or storm doors added to improve winter performance, our team handles the complete installation — door, frame, threshold, flashing, and exterior trim — so there are no gaps, no air leaks, and no half-finished edges left behind.
            </p>
          </div>
          <ServiceHighlights highlights={features} />
        </div>
      </Section>

      <ServiceCapabilities serviceSlug="exterior-doors" />

      <ServiceProcess serviceSlug="exterior-doors" />

      <ServiceFAQ faqs={faqs} description="Common questions about exterior door installation and replacement" />

      <RelatedServices serviceSlug="exterior-doors" />

      {/* Service Areas by City */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <ServiceAreaCities serviceSlug="exterior-doors" serviceTitle="Exterior Doors" />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-red-50 to-white">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
              Ready to Replace Your Exterior Doors?
            </h2>
            <p className="mb-6 text-sm text-gray-600 md:text-base">
              Free estimate from our team. We serve{' '}
              <Link href="/service-areas" className="font-semibold text-brand-primary hover:text-red-800 underline underline-offset-2">Minnesota and Wisconsin</Link>{' '}
              with professional door installation backed by our workmanship guarantee.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/services/free-estimate">
                <Button variant="primary" size="md" className="w-full sm:w-auto md:size-lg">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="md" className="w-full sm:w-auto md:size-lg">
                  View All Services
                </Button>
              </Link>
            </div>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
  )
}
