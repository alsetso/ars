import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { Users, Shield, ArrowRight, Clock, Award, FileCheck, Briefcase, TrendingUp, ArrowLeft, HelpCircle } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Real Estate Roofing Services | Pre-Listing Inspections & Repairs | MN & WI',
  description: 'Advanced Roofing & Siding provides fast inspections, repair reports, storm damage discovery, and closing-ready roofing services for real estate agents across Minnesota & Wisconsin.',
  keywords: [
    'real estate roofing contractor Minnesota',
    'pre-sale roof inspection MN',
    'roofing contractor for realtors MN',
    'real estate exterior repair MN',
    'roof inspection for home sellers Minnesota',
    'buyer repair request roofing MN',
    'pre-listing roofing inspection Twin Cities',
    'real estate agent roofing Wisconsin',
    'home sale roof replacement MN',
    'roof certification for real estate MN',
    'fast roofing estimates for realtors',
    'transaction timeline roof repair MN',
    'roofing contractor for home buyers MN',
    'inspection report roofing MN',
    'buyer contingency roofing inspection',
    'real estate closing repairs Minnesota',
    'agent priority roofing services',
    'Minnesota real estate contractors',
  ],
  alternates: {
    canonical: 'https://advancedroofingmn.com/who-we-serve/professionals',
  },
  openGraph: {
    title: 'Roofing & Exterior Services for Real Estate Agents',
    description: 'Partner with Minnesota\'s trusted roofing contractor for pre-listing inspections, buyer repair requests, fast turnaround times, and closing-ready exterior services.',
    url: 'https://advancedroofingmn.com/who-we-serve/professionals',
    type: 'website',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: 'Real Estate Roofing Services - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const realEstateServices = [
  {
    title: 'Pre-Listing Roof Inspections for Home Sellers',
    description: 'Comprehensive pre-listing roof inspections with detailed photo documentation and repair estimates. We help sellers avoid surprises during the inspection period and prepare properties for market.',
    icon: FileCheck,
  },
  {
    title: 'Buyer Repair Requests & Negotiation Support',
    description: 'Expert roof condition assessments for buyers, identifying true repair needs vs. replacement options. We provide clear documentation that strengthens negotiation strategies and helps close deals.',
    icon: Briefcase,
  },
  {
    title: 'Fast Roof Estimates for Real Estate Transactions',
    description: 'Priority scheduling for real estate professionals with same-day or next-day inspections. We understand transaction timelines and deliver fast, accurate estimates to keep deals moving forward.',
    icon: Clock,
  },
]

const certificationServices = [
  {
    title: 'Detailed Roof Condition Documentation',
    description: 'Comprehensive written reports with photos, repair recommendations, and estimate options. Our documentation meets FHA, VA, and conventional lending requirements.',
    icon: FileCheck,
  },
  {
    title: 'Storm Damage Identification for Sellers',
    description: 'Expert identification of insurance-qualifying hail and wind damage. We help convert what would have been buyer concessions into fully covered insurance replacements.',
    icon: Shield,
  },
  {
    title: 'Insurance Claim Assistance for Real Estate Deals',
    description: 'Full support through the insurance claim process, from initial inspection to claim approval. We help agents and homeowners navigate insurance coverage for storm damage.',
    icon: TrendingUp,
  },
]

const exteriorServices = [
  {
    title: 'Siding, Windows & Curb Appeal Upgrades',
    description: 'Complete exterior upgrades to improve marketability and help listings present better. We provide siding, window, and gutter solutions that meet inspection expectations.',
    icon: Shield,
  },
  {
    title: 'Repair Options for FHA, VA & Conventional Loans',
    description: 'Expert understanding of FHA, VA, and conventional loan requirements. We ensure all repairs meet financing standards to prevent closing delays.',
    icon: Award,
  },
  {
    title: 'Fast Turnaround for Time-Sensitive Closings',
    description: 'Priority scheduling and fast completion for time-sensitive closings. We work efficiently to complete required repairs quickly and prevent transaction delays.',
    icon: Clock,
  },
]

const whyChoose = [
  {
    icon: Clock,
    title: 'Priority Scheduling for Real Estate',
    description: 'Real estate professionals receive priority scheduling and communication. We can often complete inspections within 24 hours to keep transactions on track.',
  },
  {
    icon: FileCheck,
    title: 'Comprehensive Documentation',
    description: 'Detailed written reports with photos, repair recommendations, and estimates. Our documentation meets all lending requirements and strengthens negotiations.',
  },
  {
    icon: Shield,
    title: 'Storm Damage Discovery',
    description: 'Expert identification of insurance-qualifying storm damage that can reduce seller concessions and help close deals faster with insurance coverage.',
  },
]

const faqs = [
  {
    question: 'Can you provide same-day or next-day roof inspections for listings?',
    answer: 'Yes. We prioritize real estate agents and can often complete inspections within 24 hours.',
  },
  {
    question: 'Do you provide written roofing reports for buyers and sellers?',
    answer: 'Yes. Our inspections include photos, roof condition details, and repair or replacement estimates.',
  },
  {
    question: 'Can a roof failing inspection delay a closing?',
    answer: 'Yes. Lenders often require a roof to meet minimum standards. We complete required repairs quickly to prevent delays.',
  },
  {
    question: 'Do you work with FHA and VA roofing requirements?',
    answer: 'Yes. We understand FHA, VA, and conventional loan requirements and ensure all repairs meet financing standards.',
  },
  {
    question: 'Can you identify insurance-qualifying storm damage for sellers?',
    answer: 'Yes. We inspect for hail and wind damage that may qualify for insurance coverage, reducing seller concessions.',
  },
  {
    question: 'Do you offer priority scheduling for realtors?',
    answer: 'Yes. Real estate agents receive priority scheduling and communication to keep transactions on track.',
  },
]

export default function ProfessionalsWhoWeServePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PageLayout>
        <PageHero
          title="Real Estate Professionals"
          description="Fast, reliable roofing support for real estate agents & brokers. Pre-listing inspections, buyer repair requests, and closing-ready services across Minnesota and Wisconsin"
        />

        {/* Back Button */}
        <Section className="bg-white py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/who-we-serve">
              <Button variant="outline" size="md" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Who We Serve
              </Button>
            </Link>
          </div>
        </Section>

        {/* Introduction - SEO Content */}
        <Section className="bg-white">
          <div className="mx-auto max-w-4xl">
            <Card>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  Real estate professionals need a roofing partner who understands deadlines, negotiation pressure, and the fast-paced nature of transactions. Advanced Roofing & Siding provides quick-turn roof inspections, repair documentation, certifications, and full exterior replacements for real estate agents across <Link href="/service-areas/minnesota" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota</Link> and <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Wisconsin</Link>. Whether you're preparing a listing, negotiating inspection items, or assisting a buyer who needs an expert opinion fast, our team delivers clarity, accurate reporting, and reliable service that keeps deals moving forward.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  A failing roof can delay a closing, reduce a home's appraised value, or jeopardize financing. To prevent this, we offer pre-listing roof inspections, detailed photo documentation, repair estimates, and seller-friendly recommendations that help agents avoid surprises during the inspection period. For buyers, we identify the true condition of the roof and outline repair vs. replacement options that strengthen negotiation strategies. Our team works with FHA, VA, and conventional lending requirements, ensuring repairs meet financing standards.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  We also specialize in identifying storm damage that sellers may not know exists. If qualifying hail or wind damage is present, we assist agents and homeowners through the insurance claim process — often converting what would have been a buyer concession into a fully covered replacement. Beyond roofing, we provide <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window</Link>, and gutter solutions to help listings present better and meet inspection expectations.
                </p>
                <p className="text-lg text-gray-700">
                  With responsive communication, fast scheduling, and honest assessments, Advanced Roofing & Siding is the trusted partner for real estate professionals who want dependable, high-quality results. Whether you need a same-day inspection, closing timeline repairs, or a full exterior upgrade to enhance curb appeal, our team delivers the consistency and professionalism <Link href="/service-areas/minnesota" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota</Link> & <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Wisconsin</Link> agents depend on.
                </p>
              </div>
            </Card>
          </div>
        </Section>

        {/* Roofing & Exterior Services for Real Estate Agents */}
        <Section className="bg-gray-50">
          <SectionHeader
            title="Roofing & Exterior Services for Real Estate Agents"
            description="Pre-listing inspections, buyer repair requests, and fast estimates for real estate transactions"
          />
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
              {realEstateServices.map((service, index) => {
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
                      <div className="mt-4">
                        <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold text-sm underline underline-offset-2">
                          Learn more about roofing →
                        </Link>
                      </div>
                    </Card>
                  </AnimatedDiv>
                )
              })}
            </div>
          </div>
        </Section>

        {/* Roof Certifications, Reports & Insurance Discovery */}
        <Section className="bg-white">
          <SectionHeader
            title="Roof Certifications, Reports & Insurance Discovery"
            description="Detailed documentation, storm damage identification, and insurance claim assistance"
          />
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
              {certificationServices.map((service, index) => {
                const Icon = service.icon
                const serviceLink = service.title.includes('Storm') || service.title.includes('Insurance') ? '/services/storm-restoration' : '/services/roofing'
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
                      <div className="mt-4">
                        <Link href={serviceLink} className="text-brand-primary hover:text-red-800 font-semibold text-sm underline underline-offset-2">
                          Learn more →
                        </Link>
                      </div>
                    </Card>
                  </AnimatedDiv>
                )
              })}
            </div>
          </div>
        </Section>

        {/* Exterior Services to Improve Marketability */}
        <Section className="bg-gray-50">
          <SectionHeader
            title="Exterior Services to Improve Marketability"
            description="Siding, windows, curb appeal upgrades, and fast turnaround for time-sensitive closings"
          />
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
              {exteriorServices.map((service, index) => {
                const Icon = service.icon
                const serviceLink = service.title.includes('Siding') ? '/services/siding' : service.title.includes('Window') ? '/services/windows' : '/services/roofing'
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
                      <div className="mt-4">
                        <Link href={serviceLink} className="text-brand-primary hover:text-red-800 font-semibold text-sm underline underline-offset-2">
                          Learn more →
                        </Link>
                      </div>
                    </Card>
                  </AnimatedDiv>
                )
              })}
            </div>
          </div>
        </Section>

        {/* Why Real Estate Professionals Choose Advanced Roofing & Siding */}
        <Section className="bg-white">
          <SectionHeader
            title="Why Real Estate Professionals Choose Advanced Roofing & Siding"
            description="Priority scheduling, comprehensive documentation, and storm damage discovery"
          />
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
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

      {/* FAQ Section */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Frequently Asked Questions About Real Estate Services"
          description="Common questions from real estate agents, brokers, and real estate professionals"
        />
        <div className="mx-auto max-w-4xl">
          <Card>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <AnimatedDiv
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start gap-3 mb-2">
                      <HelpCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                      <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                    </div>
                    <p className="text-gray-700 ml-9">{faq.answer}</p>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Partner With Trusted Roofing Experts for Real Estate */}
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
                Partner With Trusted Roofing Experts for Real Estate
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Request our Real Estate Agent Priority Support Program. We serve real estate professionals across <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link> with fast inspections, closing-ready repairs, and comprehensive documentation. Whether you need a same-day inspection or time-sensitive closing repairs, our team delivers the consistency and professionalism you depend on.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Request Priority Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/who-we-serve/residential">
                  <Button variant="outline" size="lg">
                    View Residential Services
                  </Button>
                </Link>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
    </>
  )
}

