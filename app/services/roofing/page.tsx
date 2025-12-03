import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { CheckCircle, Home, Shield, Award, ArrowRight, Wrench, FileCheck, Users, PaintBucket, Square, CloudRain } from 'lucide-react'
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

const roofingTypes = [
  {
    title: 'Asphalt Shingle Roofing',
    description: 'The most popular residential roofing option, offering excellent durability, affordability, and a wide variety of styles and colors. Perfect for Minnesota homes.',
    icon: Home,
  },
  {
    title: 'Metal Roofing',
    description: 'Long-lasting metal roofing systems that provide superior protection against harsh weather, energy efficiency, and minimal maintenance requirements.',
    icon: Shield,
  },
  {
    title: 'Flat Roof Systems',
    description: 'Professional flat roof installation and repair for commercial and residential properties, using premium materials designed for Minnesota\'s climate.',
    icon: Wrench,
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Free Roof Inspection',
    description: 'Our certified technicians conduct a thorough assessment of your roof, identifying any damage, wear, or potential issues. We provide detailed documentation and recommendations.',
    icon: FileCheck,
  },
  {
    step: 2,
    title: 'Detailed Estimate & Planning',
    description: 'Receive a comprehensive estimate with material options, timeline, and warranty information. We work with you to choose the best solution for your home and budget.',
    icon: FileCheck,
  },
  {
    step: 3,
    title: 'Professional Installation',
    description: 'Our experienced crew performs expert installation using premium materials and proven techniques. We ensure proper ventilation, flashing, and weatherproofing.',
    icon: Wrench,
  },
  {
    step: 4,
    title: 'Quality Inspection & Warranty',
    description: 'Final inspection ensures everything meets our high standards. Your new roof comes with industry-leading warranties that protect your investment for decades.',
    icon: Shield,
  },
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
      <PageHero
        title="Premium Roofing Services"
        description="GAF Master Elite certified installations with industry-leading warranties"
        backgroundImage="/gallery/340661788_241238031731100_708703886642482358_n.webp"
      />
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Card className="mb-6 p-4 md:mb-8 md:p-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-700 mb-3 md:text-lg md:mb-4">
                As a <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite contractor</Link>, Advanced Roofing & Siding Inc. represents the
                top 3% of roofing professionals nationwide. This prestigious certification means we
                have access to the highest quality materials, comprehensive training, and
                <Link href="/resources/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2"> industry-leading warranties</Link> that protect your investment for decades.
              </p>
              <p className="text-sm text-gray-700 mb-3 md:text-lg md:mb-4">
                Our expert team handles everything from complete roof replacements to repairs,
                maintenance, and emergency services. We work with premium materials including GAF
                shingles, metal roofing, and flat roof systems, ensuring your home is protected
                against <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota's harsh weather conditions</Link>. For storm damage, we also provide <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm restoration services</Link> with <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">insurance claim assistance</Link>.
              </p>
              <p className="text-sm text-gray-700 md:text-lg">
                Whether you need a complete roof replacement, emergency roof repair, or routine roof maintenance, our <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">30+ years of experience</Link> serving <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin homeowners</Link> ensures you receive professional service, quality craftsmanship, and lasting results. We specialize in residential roofing and commercial roofing projects, providing comprehensive solutions from initial inspection to final installation.
              </p>
            </div>
          </Card>

          <div className="mb-6 grid gap-3 md:mb-8 md:gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <AnimatedDiv
                key={feature.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary md:h-6 md:w-6" />
                  <span className="text-sm text-gray-700 md:text-base">
                    {feature.link ? (
                      <Link href={feature.link} className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">
                        {feature.text}
                      </Link>
                    ) : (
                      feature.text
                    )}
                  </span>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </Section>

      {/* Roofing Types Section */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Roofing Materials & Types"
            description="Premium roofing solutions designed for Minnesota and Wisconsin homes"
          />
          <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-3 mb-6 md:mb-8">
            {roofingTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <AnimatedDiv
                  key={type.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center p-3 md:p-5">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 md:mb-4 md:h-12 md:w-12">
                      <Icon className="h-5 w-5 text-brand-primary md:h-6 md:w-6" strokeWidth={2} />
                    </div>
                    <h3 className="mb-1 text-sm font-bold text-gray-900 md:mb-2 md:text-lg">{type.title}</h3>
                    <p className="text-xs text-gray-600 md:text-sm">{type.description}</p>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Our Roofing Process"
            description="A proven 4-step approach to quality roof installation and repair"
          />
          <div className="space-y-4 mb-6 md:space-y-6 md:mb-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <AnimatedDiv
                  key={step.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="border-2 border-gray-100 p-3 md:p-5">
                    <div className="flex gap-3 md:gap-6">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-700 to-red-800 text-white text-lg font-bold md:h-14 md:w-14 md:text-xl">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-1 text-base font-bold text-gray-900 md:mb-2 md:text-2xl">{step.title}</h3>
                        <p className="text-sm text-gray-700 md:text-lg">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Insurance Claims CTA */}
      <InsuranceClaimsCTA variant="compact" />

      {/* FAQ Section */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Common questions about our roofing services"
          />
          <div className="space-y-3 mb-6 md:space-y-4 md:mb-8">
            {faqs.map((faq, index) => (
              <AnimatedDiv
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="p-3 md:p-5">
                  <h3 className="mb-1.5 text-sm font-bold text-gray-900 md:mb-2 md:text-lg">{faq.question}</h3>
                  <p className="text-xs text-gray-700 md:text-base">{faq.answer}</p>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Complete Exterior Solutions"
            description="We offer comprehensive exterior services for your Minnesota or Wisconsin home"
          />
          <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-3 mb-6 md:mb-8">
            <AnimatedDiv
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Link href="/services/siding">
                <Card className="h-full cursor-pointer text-center p-3 md:p-5">
                  <PaintBucket className="mx-auto mb-2 h-8 w-8 text-brand-primary md:mb-3 md:h-10 md:w-10" />
                  <h3 className="mb-1 text-sm font-bold text-gray-900 md:mb-2 md:text-base">Siding Solutions</h3>
                  <p className="mb-2 text-xs text-gray-600 md:mb-3 md:text-sm">Transform your home's exterior</p>
                  <span className="text-xs font-semibold text-brand-primary">Learn More →</span>
                </Card>
              </Link>
            </AnimatedDiv>
            <AnimatedDiv
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Link href="/services/windows">
                <Card className="h-full cursor-pointer text-center p-3 md:p-5">
                  <Square className="mx-auto mb-2 h-8 w-8 text-brand-primary md:mb-3 md:h-10 md:w-10" />
                  <h3 className="mb-1 text-sm font-bold text-gray-900 md:mb-2 md:text-base">Window Installation</h3>
                  <p className="mb-2 text-xs text-gray-600 md:mb-3 md:text-sm">Energy-efficient windows</p>
                  <span className="text-xs font-semibold text-brand-primary">Learn More →</span>
                </Card>
              </Link>
            </AnimatedDiv>
            <AnimatedDiv
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Link href="/services/storm-restoration">
                <Card className="h-full cursor-pointer text-center p-3 md:p-5">
                  <CloudRain className="mx-auto mb-2 h-8 w-8 text-brand-primary md:mb-3 md:h-10 md:w-10" />
                  <h3 className="mb-1 text-sm font-bold text-gray-900 md:mb-2 md:text-base">Storm Restoration</h3>
                  <p className="mb-2 text-xs text-gray-600 md:mb-3 md:text-sm">Expert damage repair</p>
                  <span className="text-xs font-semibold text-brand-primary">Learn More →</span>
                </Card>
              </Link>
            </AnimatedDiv>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-red-50 to-white">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-white border-2 border-red-100 p-4 md:p-6">
              <h2 className="mb-2 text-lg font-bold text-gray-900 md:mb-3 md:text-3xl">
                Ready to Protect Your Home with a New Roof?
              </h2>
              <p className="mb-4 text-sm text-gray-700 md:mb-6 md:text-lg max-w-2xl mx-auto">
                Get your free estimate from a GAF Master Elite contractor. We serve <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link> with expert roofing services backed by industry-leading warranties.
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
            </Card>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
  )
}

