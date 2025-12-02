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
  title: 'Premium Roofing Services - GAF Master Elite | Advanced Roofing & Siding',
  description: 'GAF Master Elite certified roofing installations with industry-leading warranties. Expert roof replacement, repair, and maintenance across Minnesota & Wisconsin.',
  keywords: 'roofing contractor, roof replacement, roof repair, GAF Master Elite, Minnesota roofing, residential roofing, commercial roofing, asphalt shingles, metal roofing, roof installation, roof maintenance, roof inspection, Minnesota roofers, Wisconsin roofing, storm damage roof repair, roof warranty, GAF certified contractor',
}

const features = [
  { text: 'GAF Master Elite Certified Installation', link: '/gaf-master-elite-contractor' },
  { text: 'Industry-Leading Warranties', link: '/warranties' },
  { text: 'Premium Materials & Craftsmanship', link: null },
  { text: 'Free Inspections & Estimates', link: '/contact' },
  { text: 'Insurance Claim Assistance', link: '/insurance-claims' },
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
          <Card className="mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                As a <Link href="/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">GAF Master Elite contractor</Link>, Advanced Roofing & Siding Inc. represents the
                top 3% of roofing professionals nationwide. This prestigious certification means we
                have access to the highest quality materials, comprehensive training, and
                <Link href="/warranties" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2"> industry-leading warranties</Link> that protect your investment for decades.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our expert team handles everything from complete roof replacements to repairs,
                maintenance, and emergency services. We work with premium materials including GAF
                shingles, metal roofing, and flat roof systems, ensuring your home is protected
                against <Link href="/service-areas" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">Minnesota's harsh weather conditions</Link>. For storm damage, we also provide <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">storm restoration services</Link> with <Link href="/insurance-claims" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">insurance claim assistance</Link>.
              </p>
              <p className="text-lg text-gray-700">
                Whether you need a complete roof replacement, emergency roof repair, or routine roof maintenance, our <Link href="/about" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">30+ years of experience</Link> serving <Link href="/service-areas" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">Minnesota and Wisconsin homeowners</Link> ensures you receive professional service, quality craftsmanship, and lasting results. We specialize in residential roofing and commercial roofing projects, providing comprehensive solutions from initial inspection to final installation.
              </p>
            </div>
          </Card>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <AnimatedDiv
                key={feature.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary" />
                  <span className="text-gray-700">
                    {feature.link ? (
                      <Link href={feature.link} className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">
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
          <div className="grid gap-4 md:grid-cols-3 mb-8">
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
                  <Card className="h-full text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                      <Icon className="h-6 w-6 text-brand-primary" strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{type.title}</h3>
                    <p className="text-sm text-gray-600">{type.description}</p>
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
          <div className="space-y-6 mb-8">
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
                  <Card className="border-2 border-gray-100">
                    <div className="flex gap-4 md:gap-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-700 text-white text-xl font-bold md:h-14 md:w-14">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-bold text-gray-900 md:text-2xl">{step.title}</h3>
                        <p className="text-base text-gray-700 md:text-lg">{step.description}</p>
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
          <div className="space-y-4 mb-8">
            {faqs.map((faq, index) => (
              <AnimatedDiv
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
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
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            <AnimatedDiv
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Link href="/services/siding">
                <Card className="h-full cursor-pointer text-center">
                  <PaintBucket className="mx-auto mb-3 h-10 w-10 text-brand-primary" />
                  <h3 className="mb-2 font-bold text-gray-900">Siding Solutions</h3>
                  <p className="mb-3 text-sm text-gray-600">Transform your home's exterior</p>
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
                <Card className="h-full cursor-pointer text-center">
                  <Square className="mx-auto mb-3 h-10 w-10 text-brand-primary" />
                  <h3 className="mb-2 font-bold text-gray-900">Window Installation</h3>
                  <p className="mb-3 text-sm text-gray-600">Energy-efficient windows</p>
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
                <Card className="h-full cursor-pointer text-center">
                  <CloudRain className="mx-auto mb-3 h-10 w-10 text-brand-primary" />
                  <h3 className="mb-2 font-bold text-gray-900">Storm Restoration</h3>
                  <p className="mb-3 text-sm text-gray-600">Expert damage repair</p>
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
            <Card className="bg-white border-2 border-red-100">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                Ready to Protect Your Home with a New Roof?
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Get your free estimate from a GAF Master Elite contractor. We serve <Link href="/service-areas" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link> with expert roofing services backed by industry-leading warranties.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Free Estimate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">
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

