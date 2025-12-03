import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { CheckCircle, CloudRain, Home, Shield, ArrowRight, Wrench, FileCheck, Phone, AlertTriangle, Clock, PaintBucket, Square } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Storm Restoration Services - Insurance Claims | Advanced Roofing & Siding',
  description: 'Expert storm damage assessment and seamless insurance claim support. Fast, professional storm restoration across Minnesota & Wisconsin.',
  keywords: 'storm damage repair, insurance claims, hail damage, wind damage, roof repair, Minnesota, storm restoration, storm damage contractor, hail damage repair, wind damage repair, insurance claim assistance, storm damage inspection, emergency roof repair, Minnesota storm damage, Wisconsin storm damage, property damage restoration',
}

const features = [
  { text: 'Expert Damage Assessment', link: null },
  { text: 'Insurance Claim Assistance', link: '/insurance-claims' },
  { text: 'Fast Emergency Response', link: null },
  { text: 'Complete Restoration Services', link: null },
  { text: 'Free Inspections', link: '/contact' },
  { text: '30+ Years Experience', link: '/about' },
]

const damageTypes = [
  {
    title: 'Hail Damage',
    description: 'Hail storms can cause significant damage to roofs, siding, and windows. We provide comprehensive hail damage assessment and repair services.',
    icon: CloudRain,
  },
  {
    title: 'Wind Damage',
    description: 'High winds can lift shingles, damage siding, and cause structural issues. Our team quickly assesses and repairs wind-related damage.',
    icon: AlertTriangle,
  },
  {
    title: 'Storm Damage Inspection',
    description: 'Free professional inspection to identify all storm-related damage. We document everything needed for your insurance claim.',
    icon: FileCheck,
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Emergency Response & Damage Assessment',
    description: 'We respond quickly to storm damage emergencies, providing temporary protection when needed. Our certified inspectors conduct thorough damage assessments and document everything for your insurance claim.',
    icon: Phone,
  },
  {
    step: 2,
    title: 'Insurance Claim Documentation',
    description: 'We work directly with your insurance company, providing detailed documentation, professional estimates, and adjuster representation to ensure you receive maximum coverage.',
    icon: FileCheck,
  },
  {
    step: 3,
    title: 'Professional Restoration & Repair',
    description: 'Our experienced team performs quality repairs using premium materials and proven techniques. We restore your property to pre-storm condition or better.',
    icon: Wrench,
  },
  {
    step: 4,
    title: 'Final Inspection & Warranty',
    description: 'Complete quality inspection ensures all work meets our high standards. Your restoration comes with warranties protecting your investment.',
    icon: Shield,
  },
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
      <PageHero
        title="Storm Restoration"
        description="Expert damage assessment and seamless insurance claim support"
        backgroundImage="/gallery/351499412_645224983741699_6973171527731469674_n.webp"
      />
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Card className="mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                When severe weather strikes, you need a trusted partner to help restore your home.
                Advanced Roofing & Siding Inc. provides comprehensive <Link href="/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm restoration services</Link>,
                from initial damage assessment to complete repairs and <Link href="/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">insurance claim assistance</Link> for <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin homeowners</Link>.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our experienced team understands the insurance process and works directly with your
                insurance company to ensure you receive the coverage you deserve. We provide
                detailed documentation, professional estimates, and quality repairs that meet or
                exceed insurance standards. Learn more about our <Link href="/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">insurance claims process</Link>.
              </p>
              <p className="text-lg text-gray-700">
                We respond quickly to storm damage emergencies, providing temporary protection when
                needed and completing permanent repairs with the same quality and craftsmanship you
                expect from a <Link href="/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite contractor</Link>. Our storm restoration includes <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof repairs</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding replacement</Link>, and <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window damage restoration</Link>. With <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">30+ years of experience</Link> handling storm damage, we know how to navigate the insurance process and restore your property efficiently.
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

      {/* Insurance Claims CTA - Prominent */}
      <InsuranceClaimsCTA />

      {/* Damage Types Section */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Types of Storm Damage We Repair"
            description="Comprehensive storm damage restoration services"
          />
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            {damageTypes.map((type, index) => {
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
            title="Our Storm Restoration Process"
            description="A proven 4-step approach to storm damage restoration"
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
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-700 to-red-800 text-white text-xl font-bold md:h-14 md:w-14">
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

      {/* FAQ Section */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Common questions about our storm restoration services"
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
              <Link href="/services/roofing">
                <Card className="h-full cursor-pointer text-center">
                  <Home className="mx-auto mb-3 h-10 w-10 text-brand-primary" />
                  <h3 className="mb-2 font-bold text-gray-900">Premium Roofing</h3>
                  <p className="mb-3 text-sm text-gray-600">GAF Master Elite certified</p>
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
              <Link href="/services/siding">
                <Card className="h-full cursor-pointer text-center">
                  <PaintBucket className="mx-auto mb-3 h-10 w-10 text-brand-primary" />
                  <h3 className="mb-2 font-bold text-gray-900">Siding Solutions</h3>
                  <p className="mb-3 text-sm text-gray-600">Transform your exterior</p>
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
              <Link href="/services/windows">
                <Card className="h-full cursor-pointer text-center">
                  <Square className="mx-auto mb-3 h-10 w-10 text-brand-primary" />
                  <h3 className="mb-2 font-bold text-gray-900">Window Installation</h3>
                  <p className="mb-3 text-sm text-gray-600">Energy-efficient windows</p>
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
                Need Storm Damage Restoration?
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Get your free storm damage inspection and insurance claim assistance. We serve <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link> with expert storm restoration services backed by 30+ years of experience.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Free Inspection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/insurance-claims">
                  <Button variant="outline" size="lg">
                    Learn About Insurance Claims
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

