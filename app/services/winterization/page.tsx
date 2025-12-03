import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { CheckCircle, Snowflake, Home, DollarSign, Wind, Warehouse, Shield, Thermometer, Wrench, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home Winterization Services - Minnesota & Wisconsin | Reduce Heating Costs',
  description: 'Professional winterization services for Minnesota and Wisconsin homes. Reduce heating costs, eliminate drafts, and protect your property with custom winterization packages. Expert garage and home winterization.',
  keywords: ['winterization services', 'home winterization Minnesota', 'home winterization Wisconsin', 'garage winterization', 'reduce heating costs', 'draft prevention', 'property winterization', 'Minnesota home winterization', 'Wisconsin home winterization', 'energy efficiency winter', 'home weatherization'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/services/winterization',
  },
  openGraph: {
    title: 'Home Winterization Services - Minnesota & Wisconsin | Advanced Roofing & Siding',
    description: 'Custom winterization packages to protect your Minnesota and Wisconsin home and reduce heating costs. Expert service for leaving properties, draft prevention, and garage winterization.',
    url: 'https://advancedroofingmn.com/services/winterization',
    type: 'website',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: 'Home Winterization Services - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const winterizationNeeds = [
  {
    icon: Home,
    title: 'Leaving a Property',
    description: 'Protecting vacant homes during Minnesota and Wisconsin winters requires specialized winterization to prevent frozen pipes, structural damage, and costly repairs.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: DollarSign,
    title: 'High Heating Bills',
    description: 'Excessive energy costs often indicate air leaks, poor insulation, or inefficient windows that need professional winterization attention.',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Wind,
    title: 'Drafts Under Doors & Windows',
    description: 'Cold air infiltration through gaps around doors and windows significantly impacts comfort and energy efficiency in Minnesota and Wisconsin homes.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Warehouse,
    title: 'Garage Winterization',
    description: 'Uninsulated or poorly sealed garages can affect your home\'s temperature and energy costs. Professional garage winterization protects your investment.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
]

const protocolSteps = [
  {
    step: 1,
    title: 'Comprehensive Home Assessment',
    description: (
      <>
        Our certified technicians conduct a thorough inspection of your{' '}
        <Link href="/service-areas" className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2">
          Minnesota or Wisconsin home
        </Link>
        , identifying air leaks, insulation gaps, and areas vulnerable to winter weather damage.
      </>
    ),
    details: [
      'Thermal imaging to detect heat loss',
      'Air leakage testing and measurement',
      'Insulation evaluation',
      'Window and door seal inspection',
      'Roof and attic assessment',
    ],
  },
  {
    step: 2,
    title: 'Custom Winterization Package Design',
    description: (
      <>
        Based on your assessment, we create a tailored winterization plan addressing your specific needs—whether you're{' '}
        <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2">
          leaving a property
        </Link>
        , reducing heating costs, or eliminating drafts.
      </>
    ),
    details: [
      'Priority-based solution recommendations',
      'Energy efficiency improvement estimates',
      'Cost-benefit analysis',
      'Timeline and scheduling',
      'Material selection for Minnesota and Wisconsin climate',
    ],
  },
  {
    step: 3,
    title: 'Professional Installation & Sealing',
    description: (
      <>
        Our experienced team performs expert installation of weatherization materials, ensuring proper sealing around{' '}
        <Link href="/services/windows" className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2">
          windows
        </Link>
        , doors, and structural gaps.
      </>
    ),
    details: [
      'Caulking and weatherstripping installation',
      'Door and window seal upgrades',
      'Garage door insulation and sealing',
      'Attic and crawl space insulation',
      'Foundation and basement sealing',
    ],
  },
  {
    step: 4,
    title: 'Garage & Outbuilding Protection',
    description: 'Specialized winterization for garages and outbuildings, including insulation, door sealing, and temperature control solutions.',
    details: [
      'Garage door weatherstripping',
      'Garage wall and ceiling insulation',
      'Overhead door seal replacement',
      'Utility room winterization',
      'Workshop and storage area protection',
    ],
  },
  {
    step: 5,
    title: 'Final Inspection & Energy Verification',
    description: (
      <>
        We verify all work meets our quality standards and provide documentation of energy improvements for your{' '}
        <Link href="/service-areas" className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2">
          Minnesota or Wisconsin property
        </Link>
        .
      </>
    ),
    details: [
      'Post-installation air leakage testing',
      'Energy efficiency verification',
      'Warranty documentation',
      'Maintenance recommendations',
      'Long-term protection plan',
    ],
  },
]

const benefits = [
  {
    icon: Thermometer,
    title: 'Reduced Heating Costs',
    description: 'Lower energy bills through improved insulation and air sealing, with typical savings of 15-30% on heating costs.',
  },
  {
    icon: Shield,
    title: 'Property Protection',
    description: 'Prevent frozen pipes, ice dam formation, and structural damage when leaving a property or during harsh Minnesota winters.',
  },
  {
    icon: Home,
    title: 'Enhanced Comfort',
    description: 'Eliminate drafts and cold spots, maintaining consistent temperatures throughout your home.',
  },
  {
    icon: Wrench,
    title: 'Long-Term Value',
    description: 'Professional winterization adds value to your Minnesota or Wisconsin home and protects your investment for years to come.',
  },
]

export default function WinterizationPage() {
  return (
    <PageLayout>
      <PageHero
        title="Home Winterization Services"
        description="Custom winterization packages to protect your Minnesota and Wisconsin home and reduce heating costs"
        backgroundImage="/gallery/261311101_408550814080778_7104520534060364107_n.webp"
        theme="winter"
      />
      
      <Section className="bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-8 border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50/30">
              <div className="prose prose-lg max-w-none">
                <div className="flex items-center gap-3 mb-4">
                  <Snowflake className="h-6 w-6 text-blue-600 flex-shrink-0" strokeWidth={2} />
                  <p className="text-lg text-gray-700 mb-0">
                    Minnesota and Wisconsin winters are unforgiving. With temperatures dropping below zero and heavy snowfall, your home needs professional winterization to stay protected, energy-efficient, and comfortable. <Link href="/about" className="text-blue-700 hover:text-blue-800 font-semibold underline underline-offset-2">Advanced Roofing & Siding Inc.</Link> offers comprehensive winterization services designed specifically for <Link href="/service-areas" className="text-blue-700 hover:text-blue-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin homes</Link>.
                  </p>
                </div>
                <p className="text-lg text-gray-700">
                  Whether you're <Link href="/contact" className="text-blue-700 hover:text-blue-800 font-semibold underline underline-offset-2">leaving a property</Link> for the season, struggling with high heating bills, experiencing drafts, or need garage winterization—our custom winterization packages provide lasting protection and energy savings for your <Link href="/service-areas" className="text-blue-700 hover:text-blue-800 font-semibold underline underline-offset-2">Minnesota or Wisconsin home</Link>.
                </p>
              </div>
            </Card>
          </AnimatedDiv>

          {/* Winterization Needs Section */}
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Snowflake className="h-8 w-8 text-blue-600" strokeWidth={2} />
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Common Winterization Needs
              </h2>
              <Snowflake className="h-8 w-8 text-blue-600" strokeWidth={2} />
            </div>
            <p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
              Identifying and addressing the most critical winterization challenges for Minnesota and Wisconsin homeowners
            </p>
          </div>

          <div className="grid gap-3 md:gap-4 md:grid-cols-2 mb-8">
            {winterizationNeeds.map((need, index) => {
              const Icon = need.icon
              return (
                <AnimatedDiv
                  key={need.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50/50">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${need.color} md:h-14 md:w-14`}>
                      <Icon className={`h-6 w-6 ${need.iconColor} md:h-7 md:w-7`} strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl">{need.title}</h3>
                    <p className="text-sm text-gray-600 md:text-base">{need.description}</p>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>

          {/* Winterization Protocol Section */}
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Snowflake className="h-8 w-8 text-blue-600" strokeWidth={2} />
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Our Winterization Protocol
              </h2>
              <Snowflake className="h-8 w-8 text-blue-600" strokeWidth={2} />
            </div>
            <p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
              A comprehensive 5-step process for custom winterization packages that add value to your Minnesota home
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {protocolSteps.map((step, index) => (
              <AnimatedDiv
                key={step.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50/30">
                  <div className="flex gap-4 md:gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white text-xl font-bold md:h-14 md:w-14">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">{step.title}</h3>
                      <p className="mb-4 text-base text-gray-700 md:text-lg">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-600 mt-0.5" />
                            <span className="text-sm text-gray-600 md:text-base">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </AnimatedDiv>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Snowflake className="h-8 w-8 text-blue-600" strokeWidth={2} />
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Benefits of Professional Winterization
              </h2>
              <Snowflake className="h-8 w-8 text-blue-600" strokeWidth={2} />
            </div>
            <p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
              Why Minnesota and Wisconsin homeowners choose our winterization services
            </p>
          </div>

          <div className="grid gap-3 md:gap-4 md:grid-cols-2 mb-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <AnimatedDiv
                  key={benefit.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50/50">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 md:h-14 md:w-14">
                      <Icon className="h-6 w-6 text-blue-600 md:h-7 md:w-7" strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 md:text-base">{benefit.description}</p>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>

          {/* CTA Section */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-blue-100 via-blue-50 to-white border-2 border-blue-300 relative overflow-hidden">
              {/* Snowflake decoration */}
              <div className="absolute top-4 right-4 opacity-10">
                <Snowflake className="h-24 w-24 text-blue-400" strokeWidth={1} />
              </div>
              <div className="absolute bottom-4 left-4 opacity-10">
                <Snowflake className="h-16 w-16 text-blue-400" strokeWidth={1} />
              </div>
              <div className="text-center mb-6 relative z-10">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700">
                  <Snowflake className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                  Ready to Winterize Your Minnesota or Wisconsin Home?
                </h2>
                <p className="text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                  Don't wait until the first freeze. Schedule your comprehensive winterization assessment today and protect your <Link href="/service-areas" className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2">Minnesota or Wisconsin property</Link> with a custom winterization package that will add value for years to come.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Schedule Winterization Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
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

