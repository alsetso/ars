import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { CheckCircle, Square, Home, Shield, ArrowRight, Wrench, FileCheck, PaintBucket, CloudRain, Droplets } from 'lucide-react'
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

const windowTypes = [
  {
    title: 'Double-Hung Windows',
    description: 'Classic double-hung windows offer timeless appeal and excellent ventilation. Perfect for traditional and modern homes throughout Minnesota.',
    icon: Square,
  },
  {
    title: 'Casement Windows',
    description: 'Modern casement windows provide maximum ventilation and unobstructed views. Ideal for contemporary homes seeking energy efficiency and style.',
    icon: Square,
  },
  {
    title: 'Picture Windows',
    description: 'Large picture windows maximize natural light and provide stunning views. Perfect for showcasing Minnesota\'s beautiful landscapes while maintaining energy efficiency.',
    icon: Square,
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Window Consultation & Measurement',
    description: 'We assess your current windows, discuss your goals, and take precise measurements to ensure perfect fit and optimal energy efficiency.',
    icon: FileCheck,
  },
  {
    step: 2,
    title: 'Window Selection & Estimate',
    description: 'Choose from energy-efficient window styles and materials. Receive a detailed estimate with energy ratings, features, and installation timeline.',
    icon: FileCheck,
  },
  {
    step: 3,
    title: 'Professional Window Installation',
    description: 'Our expert installers ensure proper fitting, sealing, and insulation. We minimize disruption to your home while maximizing energy efficiency and performance.',
    icon: Wrench,
  },
  {
    step: 4,
    title: 'Quality Check & Warranty',
    description: 'Final inspection ensures perfect installation and operation. Your new windows come with manufacturer warranties and our installation guarantee.',
    icon: Shield,
  },
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
      <PageHero
        title="Window Installation"
        description="Energy-efficient windows that reduce costs and enhance comfort"
        backgroundImage="/gallery/315336128_671806221088568_2626046884352502994_n.webp"
      />
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Card className="mb-6 p-4 md:mb-8 md:p-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-700 mb-3 md:text-lg md:mb-4">
                Upgrade your home with energy-efficient windows that reduce utility costs while
                enhancing comfort and aesthetics. Our expert window installation services help
                <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2"> Minnesota and Wisconsin homeowners</Link> save money on heating and cooling while improving their home's
                value and appearance.
              </p>
              <p className="text-sm text-gray-700 mb-3 md:text-lg md:mb-4">
                We offer a wide selection of window styles and materials, from traditional double-hung
                windows to modern casement and picture windows. Our professional installation ensures
                proper sealing and insulation, maximizing energy efficiency and preventing drafts. For complete exterior renovations, we also provide <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link> and <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding services</Link>.
              </p>
              <p className="text-sm text-gray-700 md:text-lg">
                Whether you need complete window replacement, window repair, or new construction window installation, our <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">experienced team</Link> provides professional service with energy-efficient options that reduce your carbon footprint and utility bills. We specialize in residential windows and commercial windows, ensuring optimal performance and lasting value for your property.
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

      {/* Window Types Section */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Window Styles & Types"
            description="Premium window options designed for Minnesota and Wisconsin homes"
          />
          <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-3 mb-6 md:mb-8">
            {windowTypes.map((type, index) => {
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
            title="Our Window Installation Process"
            description="A proven 4-step approach to quality window installation"
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

      {/* FAQ Section */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Common questions about our window installation services"
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
              <Link href="/services/roofing">
                <Card className="h-full cursor-pointer text-center p-3 md:p-5">
                  <Home className="mx-auto mb-2 h-8 w-8 text-brand-primary md:mb-3 md:h-10 md:w-10" />
                  <h3 className="mb-1 text-sm font-bold text-gray-900 md:mb-2 md:text-base">Premium Roofing</h3>
                  <p className="mb-2 text-xs text-gray-600 md:mb-3 md:text-sm">GAF Master Elite certified</p>
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
                <Card className="h-full cursor-pointer text-center p-3 md:p-5">
                  <PaintBucket className="mx-auto mb-2 h-8 w-8 text-brand-primary md:mb-3 md:h-10 md:w-10" />
                  <h3 className="mb-1 text-sm font-bold text-gray-900 md:mb-2 md:text-base">Siding Solutions</h3>
                  <p className="mb-2 text-xs text-gray-600 md:mb-3 md:text-sm">Transform your exterior</p>
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
                Ready to Upgrade Your Windows?
              </h2>
              <p className="mb-4 text-sm text-gray-700 md:mb-6 md:text-lg max-w-2xl mx-auto">
                Get your free estimate for energy-efficient window installation. We serve <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link> with expert window services that reduce costs and enhance comfort.
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

