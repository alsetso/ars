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
  title: 'Window Installation - Energy Efficient Windows | Minnesota & Wisconsin',
  description: 'Energy-efficient windows that reduce costs and enhance comfort. Expert window replacement and installation across Minnesota & Wisconsin. Free in-home consultations!',
  keywords: ['window replacement', 'energy efficient windows', 'window installation', 'Minnesota windows', 'window contractor', 'replacement windows', 'double pane windows', 'vinyl windows', 'window repair', 'Minnesota window installation', 'Wisconsin windows', 'residential windows', 'commercial windows', 'energy star windows'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/services/windows',
  },
  openGraph: {
    title: 'Window Installation - Energy Efficient Windows',
    description: 'Energy-efficient windows that reduce costs and enhance comfort. Expert window replacement and installation across Minnesota & Wisconsin.',
    url: 'https://advancedroofingmn.com/services/windows',
    images: [
      {
        url: 'https://advancedroofingmn.com/gallery/315336128_671806221088568_2626046884352502994_n.webp',
        width: 1200,
        height: 630,
        alt: 'Window Installation Services by Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const features = [
  { text: 'Energy-Efficient Windows', link: null },
  { text: 'Reduced Heating & Cooling Costs', link: null },
  { text: 'Enhanced Home Comfort', link: null },
  { text: 'Professional Installation', link: null },
  { text: 'Free In-Home Consultations', link: '/contact' },
  { text: 'Multiple Style Options', link: null },
]

const faqs = [
  {
    question: 'How much can I save on energy costs with new windows?',
    answer: 'Energy-efficient windows can reduce heating and cooling costs by 15-30%, depending on your home\'s current windows and insulation. The exact savings vary based on window type, home size, and climate.',
  },
  {
    question: 'What types of windows are best for Minnesota winters?',
    answer: 'Double-pane or triple-pane windows with low-E coatings and argon gas fill provide the best insulation for Minnesota\'s cold winters. We\'ll help you choose windows with optimal energy ratings.',
  },
  {
    question: 'How long does window replacement take?',
    answer: 'Most residential window replacements take 1-3 days, depending on the number of windows. We work efficiently to minimize disruption while ensuring quality installation.',
  },
  {
    question: 'Do you offer window repair services, or only replacement?',
    answer: 'We provide both window repair and replacement services. If repair is possible and cost-effective, we\'ll recommend that option. Otherwise, we\'ll help you choose the best replacement windows.',
  },
  {
    question: 'What window styles do you offer?',
    answer: 'We offer a wide variety of window styles including double-hung, casement, picture, bay, bow, and sliding windows. We can match your home\'s architectural style and your personal preferences.',
  },
  {
    question: 'Are your windows covered by warranties?',
    answer: 'Yes, all our windows come with manufacturer warranties covering materials and defects. We also provide workmanship warranties on our installation services.',
  },
]

export default function WindowsPage() {
  return (
    <PageLayout>
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        serviceName="Windows"
        serviceDescription="Energy-efficient window replacements that lower heating costs and improve home comfort"
        serviceUrl="/services/windows"
      />
      <LocalBusinessSchema pageUrl="/services/windows" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Windows', url: '/services/windows' },
        ]}
      />
      <PageHero
        title="Window Installation"
        description="Energy-efficient windows that reduce costs and enhance comfort"
        backgroundImage="/gallery/315336128_671806221088568_2626046884352502994_n.webp"
        showForm
        formServiceSlug="windows"
      />

      {/* Intro */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="mb-3 text-sm text-gray-700 md:mb-4 md:text-lg">
              Upgrade your home with energy-efficient windows that reduce utility costs while
              enhancing comfort and aesthetics. Our expert window installation services help{' '}
              <Link href="/service-areas" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">Minnesota and Wisconsin homeowners</Link> save money on heating and cooling while improving their home's value and appearance.
            </p>
            <p className="mb-3 text-sm text-gray-700 md:mb-4 md:text-lg">
              We offer a wide selection of window styles and materials, from traditional double-hung
              windows to modern casement and picture windows. Professional installation ensures
              proper sealing and insulation, maximizing energy efficiency and preventing drafts. For complete exterior renovations, we also provide{' '}
              <Link href="/services/roofing" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">roofing</Link> and{' '}
              <Link href="/services/siding" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">siding services</Link>.
            </p>
            <p className="text-sm text-gray-700 md:text-lg">
              Whether you need complete window replacement, repair, or new construction, our <Link href="/about" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">experienced team</Link> delivers energy-efficient options that reduce your utility bills and improve year-round comfort.
            </p>
          </div>
          <ServiceHighlights highlights={features} />
        </div>
      </Section>

      <ServiceCapabilities serviceSlug="windows" />

      <ServiceProcess serviceSlug="windows" />

      <ServiceFAQ faqs={faqs} description="Common questions about our window installation services" />

      <RelatedServices serviceSlug="windows" />

      {/* Service Areas by City */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <ServiceAreaCities serviceSlug="windows" serviceTitle="Windows" />
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
              Ready to Upgrade Your Windows?
            </h2>
            <p className="mb-6 text-sm text-gray-600 md:text-base">
              Free estimate for energy-efficient window installation. We serve <Link href="/service-areas" className="font-semibold text-brand-primary hover:text-red-800 underline underline-offset-2">Minnesota and Wisconsin</Link> with expert window services that reduce costs and enhance comfort.
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
