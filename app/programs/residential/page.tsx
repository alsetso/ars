import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { Home, Shield, CheckCircle, ArrowRight, Clock, DollarSign, Award, Users, FileCheck } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Residential Program - Advanced Roofing & Siding Inc.',
  description: 'Comprehensive exterior services for homeowners. Expert roofing, siding, windows, and more for your Minnesota or Wisconsin home. GAF Master Elite certified.',
  keywords: 'residential program, homeowner services, residential roofing, residential siding, home exterior services, Minnesota homeowners, Wisconsin homeowners, residential contractor',
}

const services = [
  {
    title: 'Complete Roofing Services',
    description: 'Expert roof replacement, repair, and maintenance to protect your home with GAF Master Elite certified installations.',
    icon: Home,
  },
  {
    title: 'Siding Solutions',
    description: 'Transform your home\'s exterior with durable, weather-resistant siding that enhances curb appeal and value.',
    icon: Shield,
  },
  {
    title: 'Window Installation',
    description: 'Energy-efficient windows that reduce heating and cooling costs while improving home comfort.',
    icon: FileCheck,
  },
  {
    title: 'Storm Restoration',
    description: 'Fast, professional storm damage repair with insurance claim assistance to restore your home quickly.',
    icon: Clock,
  },
]

const benefits = [
  'GAF Master Elite certified installations',
  'Industry-leading warranties (up to 50 years)',
  'Free inspections and estimates',
  'Insurance claim assistance',
  '30+ years of experience',
  'Family-owned and operated',
  'A+ BBB rating since 2007',
  'Licensed and insured',
  'Competitive pricing',
]

const process = [
  {
    step: 1,
    title: 'Free Consultation',
    description: 'Schedule a free, no-obligation consultation at your home. We assess your needs and provide honest recommendations.',
  },
  {
    step: 2,
    title: 'Detailed Estimate',
    description: 'Receive a comprehensive estimate with material options, timeline, and warranty information tailored to your home and budget.',
  },
  {
    step: 3,
    title: 'Professional Installation',
    description: 'Our experienced crew performs expert installation using premium materials and proven techniques, ensuring your home is protected.',
  },
  {
    step: 4,
    title: 'Quality Guarantee',
    description: 'Final inspection ensures everything meets our high standards. Your project comes with industry-leading warranties for peace of mind.',
  },
]

const whyChoose = [
  {
    icon: Award,
    title: 'GAF Master Elite',
    description: 'One of only 2% of contractors nationwide with this prestigious certification, ensuring the highest quality work.',
  },
  {
    icon: Users,
    title: 'Family Owned',
    description: 'Local, trusted, and committed to our community. We treat your home like it\'s our own.',
  },
  {
    icon: Shield,
    title: 'A+ BBB Rating',
    description: 'Accredited since 2007 with an impeccable reputation for quality and customer service.',
  },
  {
    icon: Clock,
    title: '30+ Years Experience',
    description: 'Three decades of excellence delivering superior results for Minnesota and Wisconsin homeowners.',
  },
]

export default function ResidentialProgramPage() {
  return (
    <PageLayout>
      <PageHero
        title="Residential Program"
        description="Comprehensive exterior services for homeowners. Expert roofing, siding, windows, and more for your Minnesota or Wisconsin home"
        backgroundImage="/gallery/340661788_241238031731100_708703886642482358_n.webp"
      />

      {/* Introduction */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Card>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Our Residential Program is designed specifically for homeowners who want the best protection and value for their most important investment - their home. We understand that your home is more than just a building; it's where you create memories, raise your family, and build your future.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                As a <Link href="/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite contractor</Link> with <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">30+ years of experience</Link>, we bring the expertise, quality materials, and industry-leading warranties that protect your home for decades. Whether you need a complete roof replacement, new siding, energy-efficient windows, or storm damage repair, we're here to help.
              </p>
              <p className="text-lg text-gray-700">
                Our <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">family-owned business</Link> is committed to treating your home with the care and respect it deserves. We offer free consultations, competitive pricing, and the peace of mind that comes with <Link href="/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">industry-leading warranties</Link>.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Residential Services"
          description="Comprehensive exterior services for your home"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <AnimatedDiv
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                      <Icon className="h-6 w-6 text-brand-primary" strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-white">
        <SectionHeader
          title="Why Choose Our Residential Program"
          description="What homeowners receive when working with us"
        />
        <div className="mx-auto max-w-4xl">
          <Card>
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Why Homeowners Trust Us"
          description="What sets us apart for residential projects"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, index) => {
              const Icon = item.icon
              return (
                <AnimatedDiv
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                      <Icon className="h-6 w-6 text-brand-primary" strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <SectionHeader
          title="Our Residential Process"
          description="A straightforward approach to protecting your home"
        />
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            {process.map((step, index) => (
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
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
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
                Ready to Protect Your Home?
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Get your free estimate from a GAF Master Elite contractor. We serve <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link> homeowners with expert exterior services backed by industry-leading warranties.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Free Estimate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button variant="outline" size="lg">
                    View All Programs
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

