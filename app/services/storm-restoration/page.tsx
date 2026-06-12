import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { StormDamageBanner } from '@/components/sections/StormDamageBanner'
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
  title: 'Storm Restoration Services - Insurance Claims & Storm Damage Repair',
  description: 'Expert storm damage assessment and seamless insurance claim support. Fast, professional storm restoration across Minnesota & Wisconsin. 48-hour inspection guarantee!',
  keywords: ['storm damage repair', 'insurance claims', 'hail damage', 'wind damage', 'roof repair', 'Minnesota storm damage', 'storm restoration', 'storm damage contractor', 'hail damage repair', 'wind damage repair', 'insurance claim assistance', 'storm damage inspection', 'emergency roof repair', 'Wisconsin storm damage', 'property damage restoration'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/services/storm-restoration',
  },
  openGraph: {
    title: 'Storm Restoration Services - Insurance Claims & Storm Damage Repair',
    description: 'Expert storm damage assessment and seamless insurance claim support. Fast, professional storm restoration across Minnesota & Wisconsin.',
    url: 'https://advancedroofingmn.com/services/storm-restoration',
    images: [
      {
        url: 'https://advancedroofingmn.com/gallery/351499412_645224983741699_6973171527731469674_n.webp',
        width: 1200,
        height: 630,
        alt: 'Storm Restoration Services by Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const features = [
  { text: 'Expert Damage Assessment', link: null },
  { text: 'Insurance Claim Assistance', link: '/resources/insurance-claims' },
  { text: 'Fast Emergency Response', link: null },
  { text: 'Complete Restoration Services', link: null },
  { text: 'Free Inspections', link: '/contact' },
  { text: '30+ Years Experience', link: '/about' },
]

const faqs = [
  {
    question: 'How quickly can you respond to storm damage?',
    answer: 'We provide emergency response services and can typically assess damage within 24-48 hours of a storm. For urgent situations requiring temporary protection, we respond even faster.',
  },
  {
    question: 'Do you work directly with insurance companies?',
    answer: 'Yes, we work directly with all major insurance companies including State Farm, Allstate, Farmers, USAA, and more. We handle documentation, adjuster meetings, and claim processing to make the process as smooth as possible.',
  },
  {
    question: 'What types of storm damage do you repair?',
    answer: 'We repair all types of storm damage including hail damage, wind damage, roof damage, siding damage, window damage, and structural damage. We provide comprehensive restoration services.',
  },
  {
    question: 'Will my insurance cover the full cost of repairs?',
    answer: 'If the storm caused the damage, insurance typically covers the full cost minus your deductible. We work with your insurance company to ensure you receive maximum coverage and help with any claim disputes.',
  },
  {
    question: 'How long does storm restoration take?',
    answer: 'Timeline depends on the extent of damage and insurance processing. Most storm restoration projects take 1-4 weeks from claim approval to completion. We work efficiently while maintaining quality standards.',
  },
  {
    question: 'What if my insurance claim is denied?',
    answer: 'We help reopen denied claims, supplement missing items, and request reinspections. Our experience with insurance companies helps us successfully appeal denied claims and get you the coverage you deserve.',
  },
]

export default function StormRestorationPage() {
  return (
    <PageLayout>
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        serviceName="Storm Restoration"
        serviceDescription="Hail and wind damage assessment with full insurance claim support for Minnesota and Wisconsin homeowners"
        serviceUrl="/services/storm-restoration"
      />
      <LocalBusinessSchema pageUrl="/services/storm-restoration" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Storm Restoration', url: '/services/storm-restoration' },
        ]}
      />
      <PageHero
        title="Storm Restoration"
        description="Expert damage assessment and seamless insurance claim support"
        backgroundImage="/gallery/351499412_645224983741699_6973171527731469674_n.webp"
        showForm
        formServiceSlug="storm-restoration"
      />

      <StormDamageBanner variant="bar" />

      {/* Intro */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="mb-3 text-sm text-gray-700 md:mb-4 md:text-lg">
              When severe weather strikes, you need a trusted partner to restore your home.
              Advanced Roofing & Siding Inc. provides comprehensive <Link href="/resources/insurance-claims" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">storm restoration services</Link>,
              from initial damage assessment to complete repairs and <Link href="/resources/insurance-claims" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">insurance claim assistance</Link> for <Link href="/service-areas" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">Minnesota and Wisconsin homeowners</Link>.
            </p>
            <p className="mb-3 text-sm text-gray-700 md:mb-4 md:text-lg">
              Our experienced team understands the insurance process and works directly with your
              insurance company to ensure you receive the coverage you deserve. We provide
              detailed documentation, professional estimates, and quality repairs that meet or
              exceed insurance standards. Learn more about our <Link href="/resources/insurance-claims" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">insurance claims process</Link>.
            </p>
            <p className="text-sm text-gray-700 md:text-lg">
              As a <Link href="/resources/gaf-master-elite-contractor" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">GAF Master Elite contractor</Link>, our storm restoration includes <Link href="/services/roofing" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">roof repairs</Link>, <Link href="/services/siding" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">siding replacement</Link>, and <Link href="/services/windows" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">window damage restoration</Link> — all under one roof, one claim, one crew.
            </p>
          </div>
          <ServiceHighlights highlights={features} />
        </div>
      </Section>

      {/* Insurance Claims CTA - Prominent */}
      <InsuranceClaimsCTA />

      <ServiceCapabilities serviceSlug="storm-restoration" />

      <ServiceProcess serviceSlug="storm-restoration" />

      <ServiceFAQ faqs={faqs} description="Common questions about our storm restoration services" />

      <RelatedServices serviceSlug="storm-restoration" />

      {/* Service Areas by City */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <ServiceAreaCities serviceSlug="storm-restoration" serviceTitle="Storm Restoration" />
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
              Need Storm Damage Restoration?
            </h2>
            <p className="mb-6 text-sm text-gray-600 md:text-base">
              Free storm damage inspection and insurance claim assistance. We serve <Link href="/service-areas" className="font-semibold text-brand-primary hover:text-red-800 underline underline-offset-2">Minnesota and Wisconsin</Link> with expert storm restoration backed by 30+ years of experience.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button variant="primary" size="md" className="w-full sm:w-auto md:size-lg">
                  Get Free Inspection
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
              <Link href="/resources/insurance-claims">
                <Button variant="outline" size="md" className="w-full sm:w-auto md:size-lg">
                  Learn About Insurance Claims
                </Button>
              </Link>
            </div>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
  )
}
