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
  title: 'Siding Solutions - Vinyl, Fiber Cement & Wood Siding Installation',
  description: 'Transform your exterior with durable, weather-resistant siding systems. Expert installation of vinyl, fiber cement, and wood siding across Minnesota & Wisconsin. Free consultations!',
  keywords: ['siding installation', 'vinyl siding', 'fiber cement siding', 'exterior remodeling', 'Minnesota siding', 'siding contractor', 'siding replacement', 'James Hardie siding', 'LP siding', 'Minnesota siding contractor', 'Wisconsin siding', 'residential siding', 'commercial siding', 'siding repair'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/services/siding',
  },
  openGraph: {
    title: 'Siding Solutions - Vinyl, Fiber Cement & Wood Siding Installation',
    description: 'Transform your exterior with durable, weather-resistant siding systems. Expert installation of vinyl, fiber cement, and wood siding across Minnesota & Wisconsin.',
    url: 'https://advancedroofingmn.com/services/siding',
    images: [
      {
        url: 'https://advancedroofingmn.com/gallery/310571525_636102627992261_6745535343486299305_n.webp',
        width: 1200,
        height: 630,
        alt: 'Siding Solutions by Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const features = [
  { text: 'Vinyl, Fiber Cement & Wood Siding', link: null },
  { text: 'Weather-Resistant Materials', link: null },
  { text: 'Expert Installation & Repair', link: null },
  { text: 'Free Consultations', link: '/contact' },
  { text: 'Energy-Efficient Options', link: null },
  { text: '30+ Years of Experience', link: '/about' },
]

const faqs = [
  {
    question: 'How long does siding installation take?',
    answer: 'Most residential siding projects take 3-7 days, depending on the size of your home and the material chosen. We work efficiently while maintaining the highest quality standards.',
  },
  {
    question: 'What siding material is best for Minnesota weather?',
    answer: 'Fiber cement siding and premium vinyl siding both excel in Minnesota\'s climate. Fiber cement offers superior durability, while vinyl provides excellent value and low maintenance. We\'ll help you choose based on your home\'s needs.',
  },
  {
    question: 'Do you offer siding repair services?',
    answer: 'Yes, we provide comprehensive siding repair services for damaged or worn sections. We can match existing materials and colors, or help you plan a complete siding replacement if needed.',
  },
  {
    question: 'Will new siding improve my home\'s energy efficiency?',
    answer: 'Yes, modern siding systems with proper insulation can significantly improve your home\'s energy efficiency, reducing heating and cooling costs. We install with attention to insulation and air sealing.',
  },
  {
    question: 'Can you match my existing siding if I only need partial replacement?',
    answer: 'We work to match existing siding as closely as possible. If an exact match isn\'t available, we can help you plan a strategic replacement that maintains your home\'s appearance.',
  },
  {
    question: 'Do you handle insurance claims for storm-damaged siding?',
    answer: 'Yes, we provide insurance claim assistance for storm-damaged siding. We work with your insurance company to ensure proper coverage and quality repairs. Learn more about our insurance claims process.',
  },
]

export default function SidingPage() {
  return (
    <PageLayout>
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        serviceName="Siding"
        serviceDescription="Durable, weather-resistant siding systems built for Minnesota's climate"
        serviceUrl="/services/siding"
      />
      <LocalBusinessSchema pageUrl="/services/siding" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Siding', url: '/services/siding' },
        ]}
      />
      <PageHero
        title="Siding Solutions"
        description="Transform your exterior with durable, weather-resistant siding systems"
        backgroundImage="/gallery/310571525_636102627992261_6745535343486299305_n.webp"
        showForm
        formServiceSlug="siding"
      />

      {/* Intro */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="mb-3 text-sm text-gray-700 md:mb-4 md:text-lg">
              Your home's siding is its first line of defense against the elements. At Advanced
              Roofing & Siding Inc., we offer comprehensive siding solutions that combine
              durability, aesthetics, and energy efficiency for <Link href="/service-areas" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">Minnesota and Wisconsin homes</Link>.
            </p>
            <p className="mb-3 text-sm text-gray-700 md:mb-4 md:text-lg">
              We work with premium materials including vinyl, fiber cement, and wood siding —
              helping you choose the right option for your home's style, budget, and the demands of{' '}
              <Link href="/service-areas" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">Minnesota's climate</Link>. For complete exterior solutions, we also offer{' '}
              <Link href="/services/roofing" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">roofing</Link> and{' '}
              <Link href="/services/windows" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">window installation</Link>.
            </p>
            <p className="text-sm text-gray-700 md:text-lg">
              Whether you need complete siding replacement or targeted repairs, our <Link href="/about" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">experienced team</Link> delivers professional service backed by quality materials and expert craftsmanship.
            </p>
          </div>
          <ServiceHighlights highlights={features} />
        </div>
      </Section>

      <ServiceCapabilities serviceSlug="siding" />

      <ServiceProcess serviceSlug="siding" />

      <ServiceFAQ faqs={faqs} description="Common questions about our siding services" />

      <RelatedServices serviceSlug="siding" />

      {/* Service Areas by City */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <ServiceAreaCities serviceSlug="siding" serviceTitle="Siding" />
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
              Ready to Transform Your Home's Exterior?
            </h2>
            <p className="mb-6 text-sm text-gray-600 md:text-base">
              Free estimate for premium siding installation. We serve <Link href="/service-areas" className="font-semibold text-brand-primary hover:text-red-800 underline underline-offset-2">Minnesota and Wisconsin</Link> with expert siding backed by quality materials and professional installation.
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
