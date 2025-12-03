import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { Building2, Shield, ArrowRight, Clock, Award, Users, FileCheck, TrendingUp, ArrowLeft, HelpCircle } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Commercial Roofing Contractor | Minnesota & Wisconsin | Flat Roofs, TPO, EPDM',
  description: 'Advanced Roofing & Siding provides commercial roofing, flat roof repair, TPO/EPDM installation, storm restoration, and exterior services for businesses across Minnesota & Wisconsin. Schedule a commercial roof inspection.',
  keywords: [
    'commercial roofing contractor Minnesota',
    'commercial roofing contractor Wisconsin',
    'flat roofing Minnesota',
    'TPO roofing contractor MN',
    'commercial roof replacement Minneapolis',
    'commercial roof repair Twin Cities',
    'industrial roofing services MN',
    'commercial roof maintenance plans Minnesota',
    'commercial roof inspection MN',
    'commercial exterior contractor Minnesota',
    'commercial siding contractor MN',
    'EPDM roofing Minnesota',
    'business roofing services Wisconsin',
    'commercial roofing near me MN',
    'Twin Cities commercial roofers',
    'commercial storm damage Minnesota',
    'commercial roof insurance claims MN',
    'commercial building exterior repair',
    'retail building roofing MN',
    'apartment building roofing MN',
    'warehouse roof replacement MN',
    'office building roof repair Minnesota',
    'school, church & municipal roofing services',
  ],
  alternates: {
    canonical: 'https://advancedroofingmn.com/who-we-serve/commercial',
  },
  openGraph: {
    title: 'Commercial Roofing & Exterior Services for Minnesota & Wisconsin Businesses',
    description: 'Trusted commercial roofing contractor for flat roofs, low-slope systems, storm repairs, and building exterior upgrades. Serving Minnesota & Wisconsin businesses since 2001.',
    url: 'https://advancedroofingmn.com/who-we-serve/commercial',
    type: 'website',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: 'Commercial Roofing & Siding Services - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const roofingServices = [
  {
    title: 'Flat Roof Replacement & Repair (TPO, EPDM, Mod-Bit)',
    description: 'Complete system installation using TPO, EPDM, modified bitumen, and other commercial roofing materials. We diagnose membrane failures, seam separations, ponding water, and drainage issues with detailed inspections and photo documentation.',
    icon: Building2,
  },
  {
    title: 'Low-Slope Roofing Systems for Commercial Buildings',
    description: 'Expert installation and repair of low-slope roofing systems for office buildings, retail spaces, warehouses, and industrial facilities. We ensure code-compliant, durable solutions that stand up to Minnesota\'s extreme weather.',
    icon: Shield,
  },
  {
    title: 'Commercial Storm Damage Restoration',
    description: 'Fast response for storm-related deterioration, hail impacts, wind uplift, and ongoing leaks. We assist with insurance claims, helping building owners navigate coverage, documentation, and approved repair scopes.',
    icon: Clock,
  },
]

const exteriorServices = [
  {
    title: 'Commercial Siding Installation',
    description: 'Professional exterior siding replacement and installation for commercial buildings, maintaining your business\'s professional appearance and protecting your investment from weather damage.',
    icon: Shield,
  },
  {
    title: 'Window Replacement & Building Envelope Upgrades',
    description: 'Complete window upgrades and building envelope improvements to enhance energy efficiency, reduce operating costs, and improve the overall performance of your commercial property.',
    icon: FileCheck,
  },
  {
    title: 'Ice Dams, Drainage Issues & Seasonal Maintenance',
    description: 'Comprehensive solutions for ice dam mitigation, drainage problems, and long-term maintenance planning. Regular inspections help extend the lifespan of your commercial roof and prevent costly repairs.',
    icon: Building2,
  },
]

const faqs = [
  {
    question: 'What commercial roofing materials do you install?',
    answer: 'We install TPO, EPDM, modified bitumen, asphalt shingles, and metal roofing systems for commercial and industrial buildings.',
  },
  {
    question: 'Can you repair leaks on flat or low-slope roofs?',
    answer: 'Yes. We specialize in diagnosing membrane failures, seam separations, ponding water, and drainage issues on flat and low-slope roofs.',
  },
  {
    question: 'Do you work with property managers and multi-building portfolios?',
    answer: 'Yes. We provide roofing, siding, and exterior services for multifamily properties, HOAs, retail buildings, office facilities, and warehouses.',
  },
  {
    question: 'Can you help with commercial insurance claims?',
    answer: 'Yes. We assist with photo documentation, reporting, and adjuster coordination to ensure accurate coverage evaluations for commercial buildings.',
  },
  {
    question: 'How do you minimize business disruption during roofing?',
    answer: 'We work around your operating hours, maintain clean job sites, and implement safety protocols to avoid downtime for employees and customers.',
  },
  {
    question: 'How often should a commercial roof be inspected?',
    answer: 'Inspection is recommended twice a year — spring and fall — to detect early signs of membrane wear, drainage issues, or storm damage.',
  },
]

const whyChoose = [
  {
    icon: Clock,
    title: 'Minimal Disruption to Operations',
    description: 'We schedule work around your operating hours, create designated safety zones, and maintain a clean, organized site to avoid downtime for employees and customers.',
  },
  {
    icon: Award,
    title: 'Certified Installers & Long-Term Warranties',
    description: 'As a certified, five-star rated contractor with decades of local experience, we provide reliable workmanship and industry-leading warranties for commercial properties.',
  },
  {
    icon: Shield,
    title: 'Insurance Claim Support for Commercial Properties',
    description: 'We assist with photo documentation, reporting, and adjuster coordination to ensure accurate coverage evaluations and approved repair scopes for commercial buildings.',
  },
]


export default function CommercialWhoWeServePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PageLayout>
      <PageHero
        title="Commercial Services"
        description="Expert commercial exterior services for business owners and managers. Professional roofing, siding, and building maintenance for commercial properties"
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
                Your building is an asset, and downtime is expensive. Advanced Roofing & Siding provides professional commercial roofing and exterior services across <Link href="/service-areas/minnesota" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota</Link> and <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Western Wisconsin</Link>, helping businesses protect their investments with durable, code-compliant, and long-lasting solutions. From retail stores and office buildings to warehouses, multifamily properties, restaurants, and industrial facilities, we deliver certified commercial <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing systems</Link> that stand up to the region's extreme weather. Our team brings more than 20 years of experience working with complex commercial structures, flat roofs, low-slope roofs, and multi-unit exterior upgrades. As a <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite® contractor</Link>, we provide <Link href="/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">industry-leading warranties</Link> that protect your commercial investment.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Commercial roofing requires specialized expertise, and we offer complete system installation using TPO, EPDM, modified bitumen, asphalt shingles, and metal roofing, depending on your building's needs. Whether you're experiencing ongoing leaks, aging membranes, poor drainage, or storm-related deterioration, we begin with a detailed <Link href="/services/free-inspection" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">inspection</Link>, photo documentation, and full condition report. Our team ensures your business receives the correct scope of work — not inflated repairs, not temporary fixes. We also assist with <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">insurance claims</Link>, helping building owners and managers navigate coverage, documentation, and approved repair scopes. Our <Link href="/resources/24-7-support" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">24/7 support</Link> ensures you have help when emergency situations arise.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                In addition to <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link>, our commercial exterior services include <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding replacement</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window upgrades</Link>, ice dam mitigation, <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm restoration</Link>, and long-term maintenance planning. Minnesota's climate creates challenges like ponding water, freeze-thaw expansion, UV degradation, hail impacts, and wind uplift — making regular inspections essential for extending the lifespan of your commercial roof. Our professional crews minimize disruption, maintain a clean work site, and schedule around your business operations to avoid downtime. We serve commercial properties throughout the <Link href="/service-areas/minnesota/minneapolis" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Twin Cities</Link>, <Link href="/service-areas/minnesota/st-paul" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">St. Paul</Link>, and surrounding areas.
              </p>
              <p className="text-lg text-gray-700">
                As a certified, five-star rated contractor with <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">decades of local experience</Link> and <Link href="/resources/reviews" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">160+ five-star reviews</Link>, we understand that commercial property owners need reliability, transparency, and long-term value. Whether you own a single building or manage a portfolio of properties, Advanced Roofing & Siding provides scalable solutions, fast response times, and the workmanship required to keep your building operating safely and efficiently. We also work with <Link href="/who-we-serve/property-manager" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">property managers</Link> and <Link href="/who-we-serve/hoa" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">HOAs</Link> for multi-building projects. <Link href="/contact" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Request a commercial roof inspection today</Link> and protect your business with Minnesota's trusted exterior experts.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Commercial Roofing Services */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Commercial Roofing Services in Minnesota & Wisconsin"
          description="Flat roof replacement, low-slope systems, and storm damage restoration for commercial buildings"
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
                        Learn more about commercial roofing →
                      </Link>
                    </div>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Exterior Services for Commercial Properties */}
      <Section className="bg-white">
        <SectionHeader
          title="Exterior Services for Commercial Properties"
          description="Siding, windows, ice dam mitigation, and seasonal maintenance for commercial buildings"
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

      {/* Why Businesses Choose Advanced Roofing & Siding */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Why Businesses Choose Advanced Roofing & Siding"
          description="Minimal disruption, certified installers, and comprehensive insurance claim support"
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
      <Section className="bg-white">
        <SectionHeader
          title="Frequently Asked Questions About Commercial Services"
          description="Common questions from Minnesota and Wisconsin business owners and property managers"
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

      {/* Schedule a Commercial Roof Inspection */}
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
                Schedule a Commercial Roof Inspection
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Request a commercial roof inspection today and protect your business with Minnesota's trusted exterior experts. We serve businesses across <Link href="/service-areas/minnesota/minneapolis" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minneapolis</Link>, <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Brooklyn Park</Link>, <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Maple Grove</Link>, <Link href="/service-areas/minnesota/st-paul" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">St. Paul</Link>, <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Blaine</Link>, and <Link href="/service-areas/wisconsin" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Western Wisconsin</Link> with expert commercial roofing and exterior services.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Schedule Inspection
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

