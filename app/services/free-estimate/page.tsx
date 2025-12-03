import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { CheckCircle, FileCheck, Clock, Shield, Award, ArrowRight, Camera, ClipboardCheck, Phone, Mail, Calendar, Users, Home, Building2 } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Estimate - No Obligation Inspection | Advanced Roofing & Siding Inc.',
  description: 'Schedule your free, no-obligation estimate and inspection. Licensed project managers assess roof, siding, windows, gutters, attic, and exterior. Detailed documentation for roofing, siding, windows, storm restoration, and winterization services. Minnesota & Wisconsin.',
  keywords: ['free estimate', 'free roof estimate', 'free siding estimate', 'free window estimate', 'exterior inspection', 'roof inspection', 'siding inspection', 'Minnesota roofing estimate', 'Wisconsin roofing estimate', 'free consultation', 'no obligation estimate', 'gutter inspection', 'attic inspection'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/services/free-estimate',
  },
  openGraph: {
    title: 'Free Estimate - No Obligation Inspection',
    description: 'Schedule your free, no-obligation estimate and inspection. Licensed project managers provide detailed documentation and honest recommendations for all exterior services.',
    url: 'https://advancedroofingmn.com/services/free-estimate',
    images: [
      {
        url: 'https://advancedroofingmn.com/gallery/340661788_241238031731100_708703886642482358_n.webp',
        width: 1200,
        height: 630,
        alt: 'Free Estimate by Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const inspectionBenefits = [
  {
    icon: FileCheck,
    title: 'Licensed Project Manager',
    description: 'A certified, licensed project manager conducts every inspection — not a salesperson. You get expert assessment from someone who understands construction.',
  },
  {
    icon: Camera,
    title: 'Detailed Documentation',
    description: 'Comprehensive photo documentation of all findings, damage, and recommendations. Professional-grade documentation for insurance claims if needed.',
  },
  {
    icon: ClipboardCheck,
    title: 'Honest Recommendations',
    description: 'No pressure, no upselling. We tell you what you actually need — whether that\'s immediate repair, future maintenance, or no action required.',
  },
  {
    icon: Shield,
    title: 'Insurance-Grade Assessment',
    description: 'Our inspections meet insurance company standards. If you need to file a claim, we provide the documentation that gets claims approved.',
  },
]

const inspectionProcess = [
  {
    step: 1,
    title: 'Schedule Your Free Estimate',
    description: 'Contact us by phone, email, or <Link href="/contact" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">online form</Link>. We\'ll schedule a convenient time for a licensed project manager to visit your property. No obligation, no pressure.',
    icon: Calendar,
  },
  {
    step: 2,
    title: 'Comprehensive Property Assessment',
    description: 'Our licensed project manager conducts a thorough inspection of your <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">windows</Link>, gutters, attic, and exterior. We check for damage, wear, potential issues, and verify storm dates if applicable.',
    icon: FileCheck,
  },
  {
    step: 3,
    title: 'Detailed Documentation & Photos',
    description: 'Every finding is documented with professional photos. We check attic moisture, ventilation, flashing, shingles, siding condition, and more. This documentation is crucial for <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">insurance claims</Link>.',
    icon: Camera,
  },
  {
    step: 4,
    title: 'Honest Recommendations & Estimate',
    description: 'You receive a detailed written report with our honest assessment. We explain what needs attention, what can wait, and provide a comprehensive estimate with material options and timelines.',
    icon: ClipboardCheck,
  },
  {
    step: 5,
    title: 'No Pressure Decision',
    description: 'Take your time to review the estimate. We answer all your questions and provide additional information as needed. There\'s no pressure to make a decision — we\'re here when you\'re ready.',
    icon: Shield,
  },
]

const whatWeInspect = [
  {
    title: 'Roofing System',
    description: (
      <>
        Complete <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof assessment</Link> including shingles, flashing, vents, gutters, and underlying structure. We check for damage, wear, leaks, and potential issues. Assessment covers <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof replacement</Link> needs, <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof repair</Link> requirements, and overall roof condition.
      </>
    ),
    icon: Home,
    link: '/services/roofing',
  },
  {
    title: 'Siding & Exterior',
    description: (
      <>
        <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Siding condition</Link>, damage, weather resistance, and aesthetic concerns. We identify areas needing <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding repair</Link> or <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding replacement</Link>. Assessment includes vinyl, fiber cement, and wood siding evaluation.
      </>
    ),
    icon: Building2,
    link: '/services/siding',
  },
  {
    title: 'Windows & Doors',
    description: (
      <>
        <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Window condition</Link>, energy efficiency, seals, frames, and functionality. Assessment of <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window replacement</Link> needs and energy savings potential. We evaluate window seals, frames, and overall energy efficiency.
      </>
    ),
    icon: Home,
    link: '/services/windows',
  },
  {
    title: 'Attic & Ventilation',
    description: (
      <>
        Attic moisture levels, ventilation systems, insulation, and potential issues that could affect your <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof's lifespan</Link> and energy efficiency. Critical assessment for preventing ice dams and maintaining proper airflow.
      </>
    ),
    icon: Building2,
  },
  {
    title: 'Gutters & Drainage',
    description: (
      <>
        Gutter condition, proper drainage, downspouts, and potential water damage issues. Critical for protecting your home's foundation. Assessment includes gutter cleaning needs, <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">gutter replacement</Link>, and drainage system evaluation.
      </>
    ),
    icon: Home,
  },
  {
    title: 'Storm Damage Assessment',
    description: (
      <>
        If applicable, we verify storm dates, document hail/wind damage, and provide insurance-grade documentation for <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">insurance claims</Link>. Assessment supports <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm restoration</Link> services.
      </>
    ),
    icon: Shield,
    link: '/services/storm-restoration',
  },
  {
    title: 'Soffit & Fascia',
    description: 'Assessment of soffit and fascia condition, ventilation, and potential issues. These components are critical for proper roof ventilation and protecting your home\'s eaves from weather damage.',
    icon: Building2,
  },
  {
    title: 'Chimney & Vents',
    description: 'Chimney condition, flashing around vents, and proper sealing. We check for leaks, deterioration, and potential fire hazards. Critical for roof integrity and home safety.',
    icon: Home,
  },
  {
    title: 'Foundation & Exterior Walls',
    description: 'Exterior wall condition, foundation protection, and potential water intrusion points. Assessment helps identify issues that could lead to costly foundation damage.',
    icon: Building2,
  },
]

const faqsForSchema = [
  {
    question: 'Is the estimate really free?',
    answer: 'Yes, absolutely. Our inspection and estimate are completely free with no obligation. There\'s no pressure to purchase anything — we provide honest assessment and recommendations.',
  },
  {
    question: 'How long does the inspection take?',
    answer: 'Most inspections take 30-60 minutes, depending on the size and complexity of your property. We take the time needed to do a thorough assessment of your roof, siding, windows, and exterior systems.',
  },
  {
    question: 'Do I need to be home during the inspection?',
    answer: 'It\'s helpful if you\'re available, but not required. We can conduct the exterior inspection independently. If you\'re home, we\'ll review findings with you and answer questions about roofing, siding, windows, or any other exterior concerns.',
  },
  {
    question: 'What if I don\'t need any work done?',
    answer: 'That\'s perfectly fine! We\'ll tell you if your property is in good condition. Many homeowners appreciate the peace of mind, and we can provide maintenance recommendations for the future to protect your roof, siding, and windows.',
  },
  {
    question: 'Will you try to pressure me into buying something?',
    answer: 'No. We provide honest recommendations based on what your property actually needs. If something can wait, we\'ll tell you. If nothing is needed, we\'ll tell you that too. No pressure, no upselling.',
  },
  {
    question: 'Can you help with insurance claims?',
    answer: 'Yes! If we find storm damage, we provide insurance-grade documentation that helps get claims approved. We can also assist with the entire insurance claim process. Learn more about our insurance claims assistance.',
  },
  {
    question: 'How quickly can I get an estimate?',
    answer: 'We typically schedule estimates within 1-3 business days, depending on your location and our schedule. For urgent situations (like storm damage), we prioritize scheduling.',
  },
  {
    question: 'What should I expect in the estimate?',
    answer: 'You\'ll receive a detailed written estimate including scope of work, material options, timeline, warranty information, and pricing. We explain everything clearly so you can make an informed decision about roofing, siding, windows, or other services.',
  },
]

const faqs = [
  {
    question: 'Is the estimate really free?',
    answer: 'Yes, absolutely. Our inspection and estimate are completely free with no obligation. There\'s no pressure to purchase anything — we provide honest assessment and recommendations.',
  },
  {
    question: 'How long does the inspection take?',
    answer: (
      <>
        Most inspections take 30-60 minutes, depending on the size and complexity of your property. We take the time needed to do a thorough assessment of your <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">windows</Link>, and exterior systems.
      </>
    ),
  },
  {
    question: 'Do I need to be home during the inspection?',
    answer: (
      <>
        It's helpful if you're available, but not required. We can conduct the exterior inspection independently. If you're home, we'll review findings with you and answer questions about <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">windows</Link>, or any other exterior concerns.
      </>
    ),
  },
  {
    question: 'What if I don\'t need any work done?',
    answer: (
      <>
        That's perfectly fine! We'll tell you if your property is in good condition. Many homeowners appreciate the peace of mind, and we can provide maintenance recommendations for the future to protect your <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link>, and <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">windows</Link>.
      </>
    ),
  },
  {
    question: 'Will you try to pressure me into buying something?',
    answer: 'No. We provide honest recommendations based on what your property actually needs. If something can wait, we\'ll tell you. If nothing is needed, we\'ll tell you that too. No pressure, no upselling.',
  },
  {
    question: 'Can you help with insurance claims?',
    answer: (
      <>
        Yes! If we find storm damage, we provide insurance-grade documentation that helps get claims approved. We can also assist with the entire <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">insurance claim process</Link>. Learn more about our <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">insurance claims assistance</Link>.
      </>
    ),
  },
  {
    question: 'How quickly can I get an estimate?',
    answer: (
      <>
        We typically schedule estimates within 1-3 business days, depending on your location and our schedule. For urgent situations (like <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm damage</Link>), we prioritize scheduling.
      </>
    ),
  },
  {
    question: 'What should I expect in the estimate?',
    answer: (
      <>
        You'll receive a detailed written estimate including scope of work, material options, timeline, <Link href="/resources/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">warranty information</Link>, and pricing. We explain everything clearly so you can make an informed decision about <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">windows</Link>, or other services.
      </>
    ),
  },
]

export default function FreeEstimatePage() {
  return (
    <PageLayout>
      <FAQSchema faqs={faqsForSchema} />
      <PageHero
        title="Free Estimate"
        description="No obligation, no pressure — just honest assessment from licensed project managers"
        backgroundImage="/gallery/340661788_241238031731100_708703886642482358_n.webp"
      />

      {/* What We Inspect - Moved below hero */}
      <Section className="bg-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="What We Inspect"
            description="Comprehensive assessment of your property's exterior systems"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {whatWeInspect.map((item, index) => {
              const Icon = item.icon
              return (
                <AnimatedDiv
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="h-full">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                      <Icon className="h-5 w-5 text-brand-primary" strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                      {item.link ? (
                        <Link href={item.link} className="hover:text-brand-primary transition-colors">
                          {item.title}
                        </Link>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <div className="text-sm text-gray-600">
                      {typeof item.description === 'string' ? item.description : item.description}
                    </div>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Introduction Section */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <Card className="mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                At Advanced Roofing & Siding Inc., we believe in transparency and honesty. That's why every inspection is conducted by a <strong>licensed project manager</strong> — not a salesperson. You get expert assessment, detailed documentation, and honest recommendations with zero pressure.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Whether you're concerned about <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm damage</Link>, wondering if your <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof needs replacement</Link>, considering <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding replacement</Link>, or evaluating <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window replacement</Link> needs, our free estimate provides the answers you need. We serve <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link> homeowners and businesses with <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">30+ years of experience</Link> and <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite certification</Link>.
              </p>
              <p className="text-lg text-gray-700">
                Our estimates are comprehensive, professional, and completely free. We document everything with photos, provide detailed written reports, and give you honest recommendations — whether that means immediate <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof repair</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding installation</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window replacement</Link>, <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm restoration</Link>, <Link href="/services/winterization" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">winterization</Link>, future maintenance, or no work needed at all.
              </p>
            </div>
          </Card>

          {/* Key Benefits */}
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {inspectionBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <AnimatedDiv
                  key={benefit.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                      <Icon className="h-6 w-6 text-brand-primary" strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
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
            title="How Our Free Estimate Works"
            description="A straightforward 5-step process from scheduling to detailed estimate"
          />
          <div className="space-y-6 mb-8">
            <AnimatedDiv
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-2 border-gray-100">
                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-700 to-red-800 text-white text-xl font-bold md:h-14 md:w-14">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 md:text-2xl">Schedule Your Free Estimate</h3>
                    <p className="text-base text-gray-700 md:text-lg">
                      Contact us by phone, email, or <Link href="/contact" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">online form</Link>. We'll schedule a convenient time for a licensed project manager to visit your property. No obligation, no pressure.
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>
            <AnimatedDiv
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="border-2 border-gray-100">
                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-700 to-red-800 text-white text-xl font-bold md:h-14 md:w-14">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 md:text-2xl">Comprehensive Property Assessment</h3>
                    <p className="text-base text-gray-700 md:text-lg">
                      Our licensed project manager conducts a thorough inspection of your <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">windows</Link>, gutters, attic, and exterior. We check for damage, wear, potential issues, and verify storm dates if applicable.
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>
            <AnimatedDiv
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Card className="border-2 border-gray-100">
                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-700 to-red-800 text-white text-xl font-bold md:h-14 md:w-14">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 md:text-2xl">Detailed Documentation & Photos</h3>
                    <p className="text-base text-gray-700 md:text-lg">
                      Every finding is documented with professional photos. We check attic moisture, ventilation, flashing, shingles, siding condition, and more. This documentation is crucial for <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">insurance claims</Link>.
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>
            <AnimatedDiv
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Card className="border-2 border-gray-100">
                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-700 to-red-800 text-white text-xl font-bold md:h-14 md:w-14">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 md:text-2xl">Honest Recommendations & Estimate</h3>
                    <p className="text-base text-gray-700 md:text-lg">
                      You receive a detailed written report with our honest assessment. We explain what needs attention, what can wait, and provide a comprehensive estimate with material options and timelines.
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>
            <AnimatedDiv
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Card className="border-2 border-gray-100">
                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-700 to-red-800 text-white text-xl font-bold md:h-14 md:w-14">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 md:text-2xl">No Pressure Decision</h3>
                    <p className="text-base text-gray-700 md:text-lg">
                      Take your time to review the estimate. We answer all your questions and provide additional information as needed. There's no pressure to make a decision — we're here when you're ready.
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Why Choose Our Inspection"
            description="What makes our free inspection different"
          />
          <div className="grid gap-4 md:grid-cols-2 mb-8">
            <AnimatedDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary" />
                  <div>
                    <h3 className="mb-1 font-bold text-gray-900">Licensed Professionals</h3>
                    <p className="text-sm text-gray-600">Every inspection is conducted by a licensed project manager, not a salesperson.</p>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>
            <AnimatedDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary" />
                  <div>
                    <h3 className="mb-1 font-bold text-gray-900">No Pressure</h3>
                    <p className="text-sm text-gray-600">Honest recommendations with zero pressure to purchase anything.</p>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>
            <AnimatedDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Card>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary" />
                  <div>
                    <h3 className="mb-1 font-bold text-gray-900">Insurance-Grade Documentation</h3>
                    <p className="text-sm text-gray-600">Professional photos and documentation that meet insurance company standards.</p>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>
            <AnimatedDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Card>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary" />
                  <div>
                    <h3 className="mb-1 font-bold text-gray-900">30+ Years Experience</h3>
                    <p className="text-sm text-gray-600">Decades of experience serving Minnesota and Wisconsin homeowners.</p>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>
          </div>
        </div>
      </Section>

      {/* Services We Provide Estimates For */}
      <Section className="bg-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Services We Provide Estimates For"
            description="Comprehensive exterior solutions across Minnesota and Wisconsin"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <AnimatedDiv
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Link href="/services/roofing">
                <Card className="h-full cursor-pointer group hover:shadow-lg transition-shadow">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors">
                    <Home className="h-5 w-5 text-brand-primary" strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors">Premium Roofing</h3>
                  <p className="text-sm text-gray-600">Free estimates for <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof replacement</Link>, <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof repair</Link>, and <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing services</Link>. GAF Master Elite certified installations.</p>
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
                <Card className="h-full cursor-pointer group hover:shadow-lg transition-shadow">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors">
                    <Building2 className="h-5 w-5 text-brand-primary" strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors">Siding Solutions</h3>
                  <p className="text-sm text-gray-600">Free estimates for <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding installation</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding replacement</Link>, and <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding repair</Link>. Vinyl, fiber cement, and wood options.</p>
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
                <Card className="h-full cursor-pointer group hover:shadow-lg transition-shadow">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors">
                    <Home className="h-5 w-5 text-brand-primary" strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors">Window Installation</h3>
                  <p className="text-sm text-gray-600">Free estimates for <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window replacement</Link> and <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window installation</Link>. Energy-efficient windows that reduce heating and cooling costs.</p>
                </Card>
              </Link>
            </AnimatedDiv>
            <AnimatedDiv
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Link href="/services/storm-restoration">
                <Card className="h-full cursor-pointer group hover:shadow-lg transition-shadow">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors">
                    <Shield className="h-5 w-5 text-brand-primary" strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors">Storm Restoration</h3>
                  <p className="text-sm text-gray-600">Free estimates for <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm damage repair</Link> with <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">insurance claim assistance</Link>. Expert damage assessment and restoration.</p>
                </Card>
              </Link>
            </AnimatedDiv>
            <AnimatedDiv
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Link href="/services/winterization">
                <Card className="h-full cursor-pointer group hover:shadow-lg transition-shadow">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    <Award className="h-5 w-5 text-blue-600" strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors">Winterization</h3>
                  <p className="text-sm text-gray-600">Free estimates for <Link href="/services/winterization" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">winterization services</Link>. Custom packages to protect your Minnesota home and reduce heating costs.</p>
                </Card>
              </Link>
            </AnimatedDiv>
            <AnimatedDiv
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Link href="/services">
                <Card className="h-full cursor-pointer group hover:shadow-lg transition-shadow">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors">
                    <FileCheck className="h-5 w-5 text-brand-primary" strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors">All Services</h3>
                  <p className="text-sm text-gray-600">View our complete range of <Link href="/services" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">exterior services</Link>. We provide free estimates for all services across <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link>.</p>
                </Card>
              </Link>
            </AnimatedDiv>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Common questions about our free estimate and inspection process"
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
                  <div className="text-gray-700">
                    {typeof faq.answer === 'string' ? faq.answer : faq.answer}
                  </div>
                </Card>
              </AnimatedDiv>
            ))}
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
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-50 to-red-100">
                <Calendar className="h-8 w-8 text-brand-primary" />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                Schedule Your Free Estimate Today
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Get an honest assessment from a licensed project manager for <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">windows</Link>, <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm restoration</Link>, or <Link href="/services/winterization" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">winterization</Link>. No obligation, no pressure — just expert evaluation and detailed documentation.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="group">
                    Schedule Free Estimate
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="tel:763-427-3093">
                  <Button variant="outline" size="lg" className="group">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 763-427-3093
                  </Button>
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Available throughout <Link href="/service-areas" className="text-brand-primary hover:text-red-800 underline underline-offset-2">Minnesota and Wisconsin</Link>
              </p>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
  )
}

