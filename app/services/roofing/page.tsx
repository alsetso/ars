import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
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
  title: 'Premium Roofing Services - GAF Master Elite Certified | Minnesota & Wisconsin',
  description: 'GAF Master Elite certified roofing installations with industry-leading warranties. Expert roof replacement, repair, and maintenance across Minnesota & Wisconsin. Free estimates!',
  keywords: ['roofing contractor', 'roof replacement', 'roof repair', 'GAF Master Elite', 'Minnesota roofing', 'residential roofing', 'commercial roofing', 'asphalt shingles', 'metal roofing', 'roof installation', 'Minnesota roofers', 'Wisconsin roofing', 'storm damage roof repair', 'roof warranty'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/services/roofing',
  },
  openGraph: {
    title: 'Premium Roofing Services - GAF Master Elite Certified',
    description: 'GAF Master Elite certified roofing installations with industry-leading warranties. Expert roof replacement, repair, and maintenance across Minnesota & Wisconsin.',
    url: 'https://advancedroofingmn.com/services/roofing',
    images: [
      {
        url: 'https://advancedroofingmn.com/gallery/340661788_241238031731100_708703886642482358_n.webp',
        width: 1200,
        height: 630,
        alt: 'Premium Roofing Services by Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const features = [
  { text: 'GAF Master Elite Certified Installation', link: '/resources/gaf-master-elite-contractor' },
  { text: 'Industry-Leading Warranties', link: '/resources/warranties' },
  { text: 'Premium Materials & Craftsmanship', link: null },
  { text: 'Free Inspections & Estimates', link: '/contact' },
  { text: 'Insurance Claim Assistance', link: '/resources/insurance-claims' },
  { text: '30+ Years of Experience', link: '/about' },
]

const faqs = [
  {
    question: 'How long does a roof replacement take?',
    answer: 'Most residential roof replacements take 1-3 days, depending on the size and complexity of your roof. We work efficiently while maintaining the highest quality standards.',
  },
  {
    question: 'What roofing materials do you recommend for Minnesota?',
    answer: 'For Minnesota\'s climate, we recommend GAF asphalt shingles with proper insulation and ventilation. Metal roofing is also an excellent long-term option. We\'ll help you choose based on your home\'s needs and budget.',
  },
  {
    question: 'Do you handle insurance claims for roof damage?',
    answer: 'Yes! We provide comprehensive insurance claim assistance, including damage assessment, documentation, adjuster meetings, and working directly with your insurance company. Learn more about our insurance claims process.',
  },
  {
    question: 'How do I know if I need a roof replacement or just repairs?',
    answer: 'Our free inspection will determine the best course of action. Factors include age, damage extent, shingle condition, and underlying structure. We\'ll provide honest recommendations based on what\'s best for your home.',
  },
  {
    question: 'What warranties come with your roofing work?',
    answer: 'As a GAF Master Elite contractor, we offer industry-leading warranties including material warranties and workmanship guarantees. Some warranties extend up to 50 years. Learn more about our warranty options.',
  },
  {
    question: 'Do you service both residential and commercial properties?',
    answer: 'Yes, we provide roofing services for both residential homes and commercial buildings across Minnesota and Wisconsin. Our expertise covers everything from single-family homes to large commercial facilities.',
  },
]

export default function RoofingPage() {
  return (
    <PageLayout>
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        serviceName="Roofing"
        serviceDescription="GAF Master Elite certified roofing installations with industry-leading warranties"
        serviceUrl="/services/roofing"
      />
      <LocalBusinessSchema pageUrl="/services/roofing" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Roofing', url: '/services/roofing' },
        ]}
      />
      <PageHero
        title="Premium Roofing Services"
        description="GAF Master Elite certified installations with industry-leading warranties"
        backgroundImage="/gallery/340661788_241238031731100_708703886642482358_n.webp"
        showForm
        formServiceSlug="roofing"
      />

      {/* Intro */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="mb-3 text-sm text-gray-700 md:mb-4 md:text-lg">
              As a <Link href="/resources/gaf-master-elite-contractor" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">GAF Master Elite contractor</Link>, Advanced Roofing & Siding Inc. represents the
              top 3% of roofing professionals nationwide. This certification means access to the
              highest quality materials, comprehensive training, and <Link href="/resources/warranties" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">industry-leading warranties</Link> that protect your investment for decades.
            </p>
            <p className="mb-3 text-sm text-gray-700 md:mb-4 md:text-lg">
              Our expert team handles everything from complete roof replacements to repairs,
              maintenance, and emergency services. For storm damage, we also provide <Link href="/services/storm-restoration" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">storm restoration</Link> with full <Link href="/resources/insurance-claims" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">insurance claim assistance</Link>.
            </p>
            <p className="text-sm text-gray-700 md:text-lg">
              Whether you need a complete roof replacement, emergency repair, or routine maintenance, our <Link href="/about" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">30+ years of experience</Link> serving <Link href="/service-areas" className="font-semibold text-brand-primary underline underline-offset-2 hover:text-red-800">Minnesota and Wisconsin homeowners</Link> ensures lasting results.
            </p>
          </div>
          <ServiceHighlights highlights={features} />
        </div>
      </Section>

      <ServiceCapabilities serviceSlug="roofing" />

      <ServiceProcess serviceSlug="roofing" />

      <InsuranceClaimsCTA variant="compact" />

      <ServiceFAQ faqs={faqs} description="Common questions about our roofing services" />

      <RelatedServices serviceSlug="roofing" />

      {/* Service Areas by City */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <ServiceAreaCities serviceSlug="roofing" serviceTitle="Roofing" />
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
              Ready to Protect Your Home with a New Roof?
            </h2>
            <p className="mb-6 text-sm text-gray-600 md:text-base">
              Free estimate from a GAF Master Elite contractor. We serve <Link href="/service-areas" className="font-semibold text-brand-primary hover:text-red-800 underline underline-offset-2">Minnesota and Wisconsin</Link> with expert roofing backed by industry-leading warranties.
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
