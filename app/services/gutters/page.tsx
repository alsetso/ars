import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
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
  title: 'Gutter Installation & Replacement — Minnesota & Wisconsin | Advanced Roofing & Siding',
  description: 'Professional gutter installation and replacement across Minnesota and Wisconsin. Seamless gutters, gutter protection systems, and downspout solutions. Free estimates.',
  keywords: ['gutter installation Minnesota', 'gutter replacement Twin Cities', 'seamless gutters', 'gutter contractor Minnesota', 'downspout installation', 'gutter repair', 'Wisconsin gutter installation', 'gutter protection', 'residential gutters Minnesota'],
  alternates: { canonical: 'https://advancedroofingmn.com/services/gutters' },
  openGraph: {
    title: 'Gutter Installation & Replacement — Minnesota & Wisconsin',
    description: 'Professional gutter installation and replacement across Minnesota and Wisconsin. Seamless gutters, protection systems, and free estimates.',
    url: 'https://advancedroofingmn.com/services/gutters',
    images: [{ url: 'https://advancedroofingmn.com/gallery/394570286_927694532166401_5050008028973736549_n.webp', width: 1200, height: 630, alt: 'Gutter Installation by Advanced Roofing & Siding' }],
  },
}

const features = [
  { text: 'Seamless Gutter Systems — No Joints, No Leaks', link: null },
  { text: 'Gutter Protection & Cover Systems', link: null },
  { text: 'Downspout Installation & Routing', link: null },
  { text: 'Free Inspection with Every Roofing Project', link: '/services/roofing' },
  { text: 'Storm Damage Assessment & Insurance Support', link: '/resources/insurance-claims' },
  { text: 'Licensed, Insured & Local', link: '/about' },
]

const faqs = [
  {
    question: 'How do I know if I need new gutters or just repairs?',
    answer: 'If your gutters are sagging, pulling away from the fascia, leaking at joints, or more than 20 years old, replacement is often more cost-effective than repeated repairs. Our free inspection will give you an honest recommendation.',
  },
  {
    question: 'What is the difference between seamless and sectional gutters?',
    answer: 'Sectional gutters are pieced together in segments, creating joints that can leak and separate over time. Seamless gutters are formed in one continuous run to match your home exactly — virtually eliminating leak points and reducing maintenance.',
  },
  {
    question: 'Are gutter protection systems worth it in Minnesota?',
    answer: 'For most Minnesota homeowners, yes. The combination of heavy leaf fall in autumn, ice and snowmelt in spring, and summer storms makes clogged gutters a recurring problem. A quality protection system significantly reduces cleaning frequency and protects your fascia and foundation.',
  },
  {
    question: 'Can storm damage to my gutters be covered by insurance?',
    answer: 'Yes — hail, high winds, and falling debris frequently cause covered gutter damage. We document everything and work directly with your insurance adjuster. Many homeowners pay only their deductible.',
  },
  {
    question: 'Do you install gutters as part of a roofing project?',
    answer: 'Absolutely. New gutters are one of the most common additions to a roofing project. We inspect your existing system on every roofing job and can include new gutters in a single contract, saving you time and coordination.',
  },
  {
    question: 'What areas do you serve for gutter installation?',
    answer: 'We serve the Twin Cities metro and surrounding communities across Minnesota and Western Wisconsin. See our full service area map for coverage details.',
  },
]

export default function GuttersPage() {
  return (
    <PageLayout>
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        serviceName="Gutters"
        serviceDescription="Seamless aluminum gutter systems with optional protection covers for Minnesota and Wisconsin homes"
        serviceUrl="/services/gutters"
      />
      <LocalBusinessSchema pageUrl="/services/gutters" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Gutters', url: '/services/gutters' },
        ]}
      />
      <PageHero
        title="Gutter Installation & Replacement"
        description="Seamless gutter systems that protect your home from the roofline to the foundation"
        backgroundImage="/gallery/394570286_927694532166401_5050008028973736549_n.webp"
        showForm
        formServiceSlug="gutters"
      />

      {/* Intro */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="mb-3 text-sm text-gray-700 md:mb-4 md:text-lg">
              Gutters are one of the most overlooked — and most important — components of your home's exterior. A properly designed gutter system channels water away from your foundation, siding, and landscaping, preventing the slow damage that leads to costly repairs. At Advanced Roofing &amp; Siding, we install{' '}
              <Link href="/services/roofing" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">complete exterior systems</Link>{' '}
              that work together — roof, gutters, soffit, and fascia — so nothing is left unprotected.
            </p>
            <p className="mb-3 text-sm text-gray-700 md:mb-4 md:text-lg">
              We specialize in seamless gutter systems custom-formed to fit your home exactly. Unlike sectional gutters pieced together in a showroom, seamless gutters have no joints along the run — the most common source of leaks and failures. Combined with the right gutter protection system, you get drainage that works reliably through Minnesota's full range of weather.
            </p>
            <p className="text-sm text-gray-700 md:text-lg">
              If you've had{' '}
              <Link href="/services/storm-restoration" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">storm damage</Link>{' '}
              or are planning a{' '}
              <Link href="/services/roofing" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">roof replacement</Link>
              , adding new gutters to the same project is the smart time to do it — one mobilization, one crew, and a complete exterior solution backed by our workmanship guarantee.
            </p>
          </div>
          <ServiceHighlights highlights={features} />
        </div>
      </Section>

      <ServiceCapabilities serviceSlug="gutters" />

      <ServiceProcess serviceSlug="gutters" />

      <InsuranceClaimsCTA variant="compact" />

      <ServiceFAQ faqs={faqs} description="Common questions about gutter installation and replacement" />

      <RelatedServices serviceSlug="gutters" />

      {/* Service Areas by City */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <ServiceAreaCities serviceSlug="gutters" serviceTitle="Gutters" />
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
              Ready for a Gutter System That Actually Works?
            </h2>
            <p className="mb-6 text-sm text-gray-600 md:text-base">
              Free inspection and estimate from our team. We serve{' '}
              <Link href="/service-areas" className="font-semibold text-brand-primary hover:text-red-800 underline underline-offset-2">Minnesota and Wisconsin</Link>{' '}
              with professional gutter installation backed by our workmanship guarantee.
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
