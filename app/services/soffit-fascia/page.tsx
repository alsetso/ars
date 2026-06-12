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
  title: 'Soffit & Fascia Repair and Replacement — Minnesota & Wisconsin | Advanced Roofing & Siding',
  description: 'Professional soffit and fascia repair and replacement across Minnesota and Wisconsin. Protect your roofline, ventilation, and warranty. Free estimates from a GAF Master Elite contractor.',
  keywords: ['soffit fascia repair Minnesota', 'soffit replacement Twin Cities', 'fascia board replacement', 'soffit fascia contractor Minnesota', 'roofline repair', 'attic ventilation Minnesota', 'storm damage soffit fascia', 'Wisconsin soffit fascia'],
  alternates: { canonical: 'https://advancedroofingmn.com/services/soffit-fascia' },
  openGraph: {
    title: 'Soffit & Fascia Repair and Replacement — Minnesota & Wisconsin',
    description: 'Professional soffit and fascia services across the Twin Cities and Western Wisconsin. Protect your roofline and maintain warranty compliance.',
    url: 'https://advancedroofingmn.com/services/soffit-fascia',
    images: [{ url: 'https://advancedroofingmn.com/gallery/380156327_905711167698071_326976560032986429_n.webp', width: 1200, height: 630, alt: 'Soffit & Fascia by Advanced Roofing & Siding' }],
  },
}

const features = [
  { text: 'Soffit Replacement & Ventilation Assessment', link: null },
  { text: 'Fascia Board Repair & Aluminum Wrapping', link: null },
  { text: 'Required for GAF Warranty Compliance', link: '/resources/warranties' },
  { text: 'Storm Damage Assessment & Insurance Support', link: '/resources/insurance-claims' },
  { text: 'Bundled with Roofing & Gutter Projects', link: '/services/roofing' },
  { text: '30+ Years of Exterior Experience', link: '/about' },
]

const faqs = [
  {
    question: 'How do I know if my soffit or fascia needs replacement?',
    answer: 'Common signs include peeling paint, soft or spongy wood when pressed, visible rot or staining, pest activity near the roofline, and gaps or sagging panels. Many homeowners discover damage during a roofing or gutter project — we inspect both as part of every estimate.',
  },
  {
    question: 'Why does soffit ventilation matter for my roof warranty?',
    answer: 'GAF and most major roofing manufacturers require proper attic ventilation as a condition of their warranties. Without adequate soffit ventilation, heat and moisture build up in the attic — degrading shingles from the inside and potentially voiding coverage. We verify ventilation meets requirements on every roofing project.',
  },
  {
    question: 'Can storm damage to soffit and fascia be covered by insurance?',
    answer: 'Yes — hail and high winds frequently cause covered damage to soffit and fascia. Because it sits at the roofline, it takes direct hits from the same storms that damage roofing. We document damage thoroughly and work with your adjuster throughout the claim process.',
  },
  {
    question: 'Is it better to wrap fascia in aluminum or replace the boards?',
    answer: 'If the underlying wood is structurally sound, aluminum wrapping is an excellent long-term solution — it seals the wood from moisture and eliminates future painting. If the board is rotted or damaged, replacement comes first. We never wrap over deteriorated wood.',
  },
  {
    question: 'Do you do soffit and fascia work as part of a roofing project?',
    answer: 'Yes — and it is usually the right time to do it. When we have crews on your roof, addressing the roofline together saves mobilization cost and ensures a cohesive, properly sealed exterior. We inspect soffit and fascia on every roofing estimate.',
  },
  {
    question: 'What areas do you serve for soffit and fascia work?',
    answer: 'We serve the Twin Cities metro and surrounding communities across Minnesota and Western Wisconsin. View our full service area for more details.',
  },
]

export default function SoffitFasciaPage() {
  return (
    <PageLayout>
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        serviceName="Soffit & Fascia"
        serviceDescription="Aluminum soffit and fascia systems that protect your roofline and never rot or need painting"
        serviceUrl="/services/soffit-fascia"
      />
      <LocalBusinessSchema pageUrl="/services/soffit-fascia" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Soffit & Fascia', url: '/services/soffit-fascia' },
        ]}
      />
      <PageHero
        title="Soffit & Fascia Repair and Replacement"
        description="Protect your roofline, preserve your warranty, and keep pests and moisture out"
        backgroundImage="/gallery/380156327_905711167698071_326976560032986429_n.webp"
        showForm
        formServiceSlug="soffit-fascia"
      />

      {/* Intro */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="mb-3 text-sm text-gray-700 md:mb-4 md:text-lg">
              Soffit and fascia are the finishing framework of your roofline — and they do far more than look good. The fascia runs along the edge of your roof, anchoring your gutters and sealing the roofline against weather and pests. The soffit closes the underside of your roof overhang and, critically, provides the ventilation that keeps your attic healthy. When either fails, the consequences reach your{' '}
              <Link href="/services/roofing" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">roof</Link>
              ,{' '}
              <Link href="/services/gutters" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">gutters</Link>
              , and foundation.
            </p>
            <p className="mb-3 text-sm text-gray-700 md:mb-4 md:text-lg">
              As a{' '}
              <Link href="/resources/gaf-master-elite-contractor" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">GAF Master Elite contractor</Link>
              , we treat soffit and fascia as part of a complete roofing system — not an afterthought. Proper attic ventilation is a requirement for GAF warranty compliance, and we verify it on every project.
            </p>
            <p className="text-sm text-gray-700 md:text-lg">
              Soffit and fascia damage is also among the most commonly insurance-covered exterior repairs. Hail and high winds hit the roofline hard, and we document it all. If you've had a recent storm, we can assess whether you have a covered{' '}
              <Link href="/resources/insurance-claims" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">insurance claim</Link>{' '}
              worth pursuing.
            </p>
          </div>
          <ServiceHighlights highlights={features} />
        </div>
      </Section>

      <ServiceCapabilities serviceSlug="soffit-fascia" />

      <ServiceProcess serviceSlug="soffit-fascia" />

      <InsuranceClaimsCTA variant="compact" />

      <ServiceFAQ faqs={faqs} description="Common questions about soffit and fascia repair and replacement" />

      <RelatedServices serviceSlug="soffit-fascia" />

      {/* Service Areas by City */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <ServiceAreaCities serviceSlug="soffit-fascia" serviceTitle="Soffit & Fascia" />
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
              Concerned About Your Roofline?
            </h2>
            <p className="mb-6 text-sm text-gray-600 md:text-base">
              Free inspection from our team. We serve{' '}
              <Link href="/service-areas" className="font-semibold text-brand-primary hover:text-red-800 underline underline-offset-2">Minnesota and Wisconsin</Link>{' '}
              with professional soffit and fascia services backed by our workmanship guarantee.
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
