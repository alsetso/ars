import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { CheckCircle, PaintBucket, Home, Shield, ArrowRight, Wrench, FileCheck, Square, CloudRain } from 'lucide-react'
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

const sidingTypes = [
  {
    title: 'Vinyl Siding',
    description: 'Affordable, low-maintenance vinyl siding that resists fading, cracking, and warping. Available in numerous colors and styles to match your home\'s aesthetic.',
    icon: PaintBucket,
  },
  {
    title: 'Fiber Cement Siding',
    description: 'Durable fiber cement siding offers exceptional weather resistance and longevity. Perfect for Minnesota homes requiring superior protection against harsh elements.',
    icon: Shield,
  },
  {
    title: 'Wood Siding',
    description: 'Classic wood siding provides natural beauty and timeless appeal. We offer expert installation and maintenance for cedar, pine, and other premium wood options.',
    icon: Home,
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Exterior Assessment & Consultation',
    description: 'We evaluate your current siding condition, discuss your goals, and recommend the best materials and styles for your home and budget.',
    icon: FileCheck,
  },
  {
    step: 2,
    title: 'Material Selection & Estimate',
    description: 'Choose from premium siding options including vinyl, fiber cement, and wood. Receive a detailed estimate with material specifications and timeline.',
    icon: FileCheck,
  },
  {
    step: 3,
    title: 'Professional Installation',
    description: 'Our skilled craftsmen perform expert installation with proper insulation, moisture barriers, and finishing details to ensure lasting protection and beauty.',
    icon: Wrench,
  },
  {
    step: 4,
    title: 'Final Inspection & Warranty',
    description: 'Complete quality inspection ensures perfect installation. Your new siding comes with manufacturer warranties and our workmanship guarantee.',
    icon: Shield,
  },
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
      <PageHero
        title="Siding Solutions"
        description="Transform your exterior with durable, weather-resistant siding systems"
        backgroundImage="/gallery/310571525_636102627992261_6745535343486299305_n.webp"
      />
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Card className="mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Your home's siding is its first line of defense against the elements. At Advanced
                Roofing & Siding Inc., we offer comprehensive siding solutions that combine
                durability, aesthetics, and energy efficiency for <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin homes</Link>.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We work with premium materials including vinyl siding, fiber cement siding, and wood siding,
                helping you choose the perfect option for your home's style and budget. Our expert
                installation ensures your siding will withstand <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota's extreme weather
                conditions</Link> while enhancing your home's curb appeal and value. For complete exterior solutions, we also offer <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link> and <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window installation</Link> services.
              </p>
              <p className="text-lg text-gray-700">
                Whether you need complete siding replacement, siding repair, or new construction siding installation, our <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">experienced team</Link> provides professional service backed by quality materials and expert craftsmanship. We specialize in residential siding and commercial siding projects, ensuring your property is protected and beautiful for years to come.
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

      {/* Siding Types Section */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Siding Materials & Options"
            description="Premium siding solutions designed for Minnesota and Wisconsin homes"
          />
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            {sidingTypes.map((type, index) => {
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
            title="Our Siding Installation Process"
            description="A proven 4-step approach to quality siding installation"
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
            description="Common questions about our siding services"
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
                Ready to Transform Your Home's Exterior?
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Get your free estimate for premium siding installation. We serve <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link> with expert siding services backed by quality materials and professional installation.
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

