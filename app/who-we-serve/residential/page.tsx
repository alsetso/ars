import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { Home, Shield, ArrowRight, Clock, Award, Users, FileCheck, HelpCircle, ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Residential Roofing & Siding Services | Minnesota & Wisconsin | Advanced Roofing & Siding',
  description: 'Advanced Roofing & Siding provides certified residential roofing, siding, windows, and storm damage restoration across Minnesota and Wisconsin. GAF Master Elite® contractor. Free inspections.',
  keywords: [
    'residential roofing Minnesota',
    'residential roofing Wisconsin',
    'home roof replacement Minnesota',
    'roof replacement contractors Minneapolis',
    'residential siding contractor Minnesota',
    'roof repair MN',
    'hail damage roof replacement Minnesota',
    'storm damage roofing Minnesota',
    'residential roofing Anoka MN',
    'residential roofing St. Paul MN',
    'residential roofing Twin Cities',
    'asphalt shingle replacement MN',
    'roofing contractor near me Minnesota',
    'roofing estimate Minnesota',
    'GAF Master Elite roofer Minnesota',
    'home exterior remodel Minnesota',
    'Minnesota roof insurance claims help',
    'Wisconsin residential roofers',
    'leaking roof repair MN',
    'ice dam roof repair Minnesota',
    'wind damage roofing Minnesota',
    'residential gutters MN',
  ],
  alternates: {
    canonical: 'https://advancedroofingmn.com/who-we-serve/residential',
  },
  openGraph: {
    title: 'Residential Roofing & Exterior Services in Minnesota & Wisconsin',
    description: 'Trusted home exterior services including roofing, siding, windows, and storm restoration. Serving Minnesota & Wisconsin homeowners since 2001.',
    url: 'https://advancedroofingmn.com/who-we-serve/residential',
    type: 'website',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: 'Residential Roofing & Siding Services - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const roofingServices = [
  {
    title: 'Certified Roof Replacement & Installation',
    description: 'Expert roof replacement and installation with GAF Master Elite® certified practices. We install premium shingle systems, designer shingles, metal roofing options, and premium underlayment systems with industry-leading warranties up to 50 years.',
    icon: Home,
  },
  {
    title: 'Storm Damage & Insurance Claim Support',
    description: 'Comprehensive storm damage assessments with drone/aerial measurement reports and thorough photo documentation. We specialize in hail, wind, and ice dam damage with full insurance claim guidance, adjuster meetings, and claim management.',
    icon: Clock,
  },
  {
    title: 'Roofing Repairs for Hail, Wind & Ice Damage',
    description: 'Fast, professional repairs for hail damage, wind damage, ice dams, and leaking roofs. We provide detailed inspections to identify missing shingles, granule loss, leaks, and age-related wear.',
    icon: Shield,
  },
]

const exteriorServices = [
  {
    title: 'Siding Installation & Replacement',
    description: 'Transform your home\'s exterior with durable siding options including LP SmartSide®, fiber cement, and traditional materials. We enhance curb appeal, long-term value, and total weather protection.',
    icon: Shield,
  },
  {
    title: 'Window Replacement for Energy Efficiency',
    description: 'High-performance window systems that reduce heating and cooling costs while improving home comfort and aesthetics. Energy-efficient windows backed by comprehensive warranties.',
    icon: FileCheck,
  },
  {
    title: 'Gutter Systems & Exterior Upgrades',
    description: 'Complete gutter installation and exterior upgrades to protect your home from water damage. We provide comprehensive exterior restoration services for Minnesota and Wisconsin homes.',
    icon: Home,
  },
]

const whyChoose = [
  {
    icon: Award,
    title: 'GAF Master Elite® Certification',
    description: 'One of only ~2% of roofing companies nationwide with this prestigious certification. We deliver premium shingle systems, certified installation practices, and long-term warranties.',
  },
  {
    icon: Shield,
    title: 'Local Minnesota & Wisconsin Weather Expertise',
    description: 'We understand the toughest roofing conditions—hail, snow loads, windstorms, and freeze-thaw cycles. Our detailed inspections and documentation help homeowners understand exactly what their roof needs.',
  },
  {
    icon: Users,
    title: '160+ Five-Star Reviews & Long-Term Warranties',
    description: 'With thousands of completed projects and 160+ five-star reviews, we\'ve earned a reputation for professionalism, communication, and dependable service. Industry-leading warranties protect your investment.',
  },
]

const faqs = [
  {
    question: 'How do I know if my home needs a roof replacement?',
    answer: 'A full inspection will identify missing shingles, granule loss, leaks, storm damage, and age-related wear.',
  },
  {
    question: 'Do you handle residential insurance claims for storm damage?',
    answer: 'Yes. We help with documentation, adjuster meetings, and ensuring approved repairs match actual damage.',
  },
  {
    question: 'How long does a residential roof replacement take?',
    answer: 'Most homes are completed in 1 day, depending on size and complexity.',
  },
  {
    question: 'What roofing materials do you offer?',
    answer: 'We install asphalt shingles, designer shingles, metal roofing (optional), and premium underlayment systems.',
  },
  {
    question: 'Do you offer financing for homeowners?',
    answer: 'Yes — flexible financing options are available for roof replacements and exterior upgrades.',
  },
  {
    question: 'Do you work year-round in Minnesota?',
    answer: 'Yes. We complete winter installs when temperatures allow, and perform emergency repairs all year.',
  },
]

export default function ResidentialWhoWeServePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PageLayout>
      <PageHero
        title="Residential Services"
        description="Expert exterior services for homeowners across Minnesota and Wisconsin. Protecting your most important investment with GAF Master Elite quality"
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
                Your home is your biggest investment, and at Advanced Roofing & Siding, we protect it with industry-leading residential roofing and exterior services across <Link href="/service-areas/minnesota" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota</Link> and <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Western Wisconsin</Link>. As a <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite® Contractor</Link>—a credential earned by only ~2% of roofing companies nationwide—we deliver premium shingle systems, certified installation practices, and long-term <Link href="/resources/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">warranties</Link> that give homeowners true peace of mind. Whether your home has <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm damage</Link>, aging shingles, or you're planning a full exterior upgrade, our team ensures every <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing project</Link> is completed with precision, clarity, and respect for your property.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Minnesota and Wisconsin have some of the toughest roofing conditions in the country. Hail, snow loads, windstorms, and freeze-thaw cycles can cause shingle failure years before expected. That's why we provide detailed <Link href="/services/free-inspection" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">inspections</Link>, drone/aerial measurement reports, and thorough photo documentation to help homeowners understand exactly what their roof needs. We specialize in <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm damage assessments</Link>, <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">insurance claim guidance</Link>, and retail roof replacements, offering honest recommendations without the high-pressure sales tactics common in the industry. Our <Link href="/resources/24-7-support" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">24/7 support</Link> ensures you have help when you need it most, especially during emergency situations.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Beyond <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link>, our residential services include <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding installation</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window replacement</Link>, <Link href="/services/winterization" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">winterization services</Link>, gutters, and full exterior restoration. From traditional asphalt shingles and LP SmartSide® siding to fiber cement and high-performance window systems, we help homeowners improve curb appeal, long-term value, and total weather protection. Our craftsmanship is supported by skilled subcontractors who have worked with us for 15+ years—ensuring reliable workmanship on every home. View our <Link href="/resources/reviews" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">customer reviews</Link> to see why thousands of homeowners trust us with their most important investment.
              </p>
              <p className="text-lg text-gray-700">
                With thousands of completed projects and 160+ five-star <Link href="/resources/reviews" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">reviews</Link>, Advanced Roofing & Siding has earned a reputation for professionalism, communication, and dependable service. We treat your home like our own—from the first <Link href="/services/free-estimate" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">free estimate</Link> to the final cleanup. If you're looking for a trusted residential roofing contractor in <Link href="/service-areas/minnesota/minneapolis" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minneapolis</Link>, <Link href="/service-areas/minnesota/st-paul" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">St. Paul</Link>, <Link href="/service-areas/minnesota/anoka" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Anoka</Link>, or throughout <Link href="/service-areas/minnesota" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota</Link> and <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Wisconsin</Link>, our team is here to help you protect your home for decades to come. <Link href="/contact" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Contact us today</Link> to schedule your free inspection and learn more about our <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">30+ years of experience</Link> serving homeowners across the region.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Residential Roofing Services */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Residential Roofing Services in Minnesota & Wisconsin"
          description="Certified roof replacement, storm damage repair, and comprehensive roofing solutions"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {roofingServices.map((service, index) => {
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

      {/* Complete Home Exterior Solutions */}
      <Section className="bg-white">
        <SectionHeader
          title="Complete Home Exterior Solutions"
          description="Siding, windows, gutters, and full exterior restoration for Minnesota and Wisconsin homes"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {exteriorServices.map((service, index) => {
              const Icon = service.icon
              const serviceLink = service.title.includes('Siding') ? '/services/siding' : service.title.includes('Window') ? '/services/windows' : '/services/storm-restoration'
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

      {/* Why Homeowners Choose Advanced Roofing & Siding */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Why Homeowners Choose Advanced Roofing & Siding"
          description="GAF Master Elite certification, local weather expertise, and proven track record"
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
          title="Frequently Asked Questions About Residential Services"
          description="Common questions from Minnesota and Wisconsin homeowners"
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

      {/* Request a Free Residential Roof Inspection */}
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
                Request a Free Residential Roof Inspection
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Get your free inspection from a GAF Master Elite® contractor. We serve <Link href="/service-areas/minnesota" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota</Link> and <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Wisconsin</Link> homeowners with expert exterior services backed by industry-leading warranties. Serving the <Link href="/service-areas/minnesota/minneapolis" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Twin Cities</Link>, <Link href="/service-areas/minnesota/anoka" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Anoka</Link>, <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Hennepin County</Link>, <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Washington County</Link>, and <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Western Wisconsin</Link>.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Free Inspection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services/free-inspection">
                  <Button variant="outline" size="lg">
                    Learn About Inspections
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

