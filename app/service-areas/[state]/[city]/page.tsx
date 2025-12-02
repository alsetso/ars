import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { RelatedCities } from '@/components/seo/RelatedCities'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { CityContactForm } from '@/components/forms/CityContactForm'
import { COMPANY_INFO, SERVICES } from '@/lib/constants'
import { getAllCityData, slugToCity } from '@/lib/city-utils'
import { generateCityContent } from '@/lib/content-generator'
import { Home, PaintBucket, Square, CloudRain, Snowflake, Phone, Mail, MapPin } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Generate static params
export async function generateStaticParams() {
  const cities = getAllCityData()
  return cities.map((city) => ({
    state: city.state,
    city: city.slug,
  }))
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: { state: string; city: string }
}): Promise<Metadata> {
  const cities = getAllCityData()
  const cityData = cities.find(
    (c) => c.slug === params.city && c.state === params.state.toLowerCase()
  )

  if (!cityData) {
    return {
      title: 'Service Area Not Found',
    }
  }

  const cityName = cityData.city
  const stateAbbr = cityData.state.toUpperCase()
  const stateName = cityData.stateFull

  return {
    title: `Roofing & Siding in ${cityName}, ${stateAbbr} | Advanced Roofing & Siding Inc.`,
    description: `Expert roofing, siding, windows, and storm restoration services in ${cityName}, ${stateName}. GAF Master Elite contractor with 30+ years of experience. Free estimates!`,
    keywords: `roofing ${cityName}, siding ${cityName}, ${cityName} roofing contractor, ${cityName} ${stateAbbr}, exterior services ${cityName}, ${cityName} ${stateName} roofing`,
    openGraph: {
      title: `Roofing & Siding in ${cityName}, ${stateAbbr}`,
      description: `Expert exterior services in ${cityName}, ${stateName}. GAF Master Elite certified.`,
      type: 'website',
    },
  }
}

const iconMap = {
  Home,
  PaintBucket,
  Square,
  CloudRain,
  Snowflake,
}

export default function CityServiceAreaPage({
  params,
}: {
  params: { state: string; city: string }
}) {
  const cities = getAllCityData()
  const cityData = cities.find(
    (c) => c.slug === params.city && c.state === params.state.toLowerCase()
  )

  if (!cityData) {
    notFound()
  }

  const cityName = cityData.city
  const stateAbbr = cityData.state.toUpperCase()
  const stateName = cityData.stateFull

  // Generate dynamic, keyword-rich content
  const cityContent = generateCityContent(cityName, stateAbbr, stateName)

  return (
    <>
      <LocalBusinessSchema city={cityName} state={stateAbbr} stateFull={stateName} />
      <PageLayout>
        <PageHero
        title={`Roofing & Siding in ${cityName}, ${stateAbbr}`}
        description={`Expert exterior services for ${cityName} homeowners. GAF Master Elite certified with 30+ years of experience.`}
        backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
      />

      {/* Main Content & Form Section - Two Column Layout */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Content */}
            <div className="lg:col-span-2">
              <AnimatedDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <h2 className="mb-6 text-3xl font-bold text-gray-900">
                    Serving {cityName}, {stateName} Since 1994
                  </h2>
                  <div className="prose prose-lg max-w-none space-y-6">
                    <p className="text-lg leading-relaxed text-gray-700">
                      {cityContent.intro} Advanced Roofing & Siding Inc. provides comprehensive <Link href="/services" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">exterior services</Link> including <Link href="/services/roofing" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">roofing</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">siding</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">windows</Link>, and <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">storm restoration</Link>.
                    </p>
                    
                    <div>
                      <h3 className="mb-3 text-2xl font-bold text-gray-900">
                        Understanding {cityName}'s Unique Weather Challenges
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700">
                        {cityContent.weatherContent} For storm damage concerns, we offer <Link href="/insurance-claims" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">insurance claim assistance</Link> and <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">storm restoration services</Link>.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-3 text-2xl font-bold text-gray-900">
                        Comprehensive Exterior Services for {cityName} Homeowners
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700">
                        {cityContent.servicesContent} Explore our full range of <Link href="/services" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">services</Link> and learn about our <Link href="/warranties" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">industry-leading warranties</Link>.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-3 text-2xl font-bold text-gray-900">
                        Why {cityName} Residents Choose Advanced Roofing & Siding Inc.
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700">
                        {cityContent.localBenefits} As a <Link href="/about" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">GAF Master Elite contractor</Link> with 30+ years of experience, we're committed to excellence. Learn more <Link href="/about" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">about us</Link>.
                      </p>
                    </div>

                    <div className="rounded-lg bg-red-50 p-6">
                      <p className="text-lg font-semibold leading-relaxed text-gray-900">
                        {cityContent.callToAction}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedDiv>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-1">
              <AnimatedDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-gradient-to-br from-gray-50 to-gray-100 sticky top-8">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">
                    Get Your Free Estimate in {cityName}
                  </h2>
                  <p className="mb-6 text-gray-600">
                    Fill out the form below and we'll contact you within 24 hours to schedule your free
                    estimate.
                  </p>
                  <CityContactForm cityName={cityName} stateAbbr={stateAbbr} />

                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <h3 className="mb-4 text-xl font-bold text-gray-900">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 flex-shrink-0 text-brand-primary mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900">Phone</p>
                          <a
                            href={`tel:${COMPANY_INFO.phone}`}
                            className="text-brand-primary hover:text-red-700"
                          >
                            {COMPANY_INFO.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 flex-shrink-0 text-brand-primary mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900">Email</p>
                          <a
                            href={`mailto:${COMPANY_INFO.email}`}
                            className="text-brand-primary hover:text-red-700"
                          >
                            {COMPANY_INFO.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 flex-shrink-0 text-brand-primary mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900">Service Area</p>
                          <p className="text-gray-600">
                            {cityName}, {stateAbbr}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 rounded-lg bg-white p-4">
                      <h4 className="mb-2 font-semibold text-gray-900">Why Choose Us?</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>✓ GAF Master Elite Certified</li>
                        <li>✓ 30+ Years of Experience</li>
                        <li>✓ A+ BBB Rating</li>
                        <li>✓ Licensed & Insured</li>
                        <li>✓ Free Estimates</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </Section>

      {/* City Projects & Buildings Section */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Partnering with {cityName} on City Projects, Buildings & Exterior Service Needs
              </h2>
              <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Advanced Roofing & Siding Inc. is committed to serving {cityName}, {stateAbbr} not only as a trusted residential contractor but also as a potential partner for municipal projects, commercial buildings, and public facilities. We're interested in collaborating with {cityName} city council members, city officials, and community leaders to discuss how we can contribute to the exterior maintenance and improvement needs of {cityName} city buildings and public facilities. Learn more about our <Link href="/cities-program" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">Cities Partnership Program</Link>.
                  </p>
                
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    Municipal & City Projects in {cityName}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We understand the unique requirements and regulations that come with municipal projects in {cityName}. Our team is prepared to work with {cityName} city officials and navigate city permitting processes, meet municipal building codes, and work within city project timelines and budgets. Whether it's <Link href="/services/roofing" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">roofing</Link> for {cityName} public buildings, <Link href="/services/siding" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">siding</Link> for municipal facilities, or comprehensive exterior renovations for city-owned properties, we're ready to bring the same <Link href="/about" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">GAF Master Elite quality</Link> and attention to detail that we provide to residential customers. We welcome the opportunity to discuss potential collaboration on {cityName} city projects with city council members and town hall attendees. See our <Link href="/cities-program" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">Cities Program</Link> for details.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    Commercial Buildings & Property Management
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Advanced Roofing & Siding Inc. is equipped to work with {cityName} commercial property owners, property management companies, and business facilities throughout the {cityName} area. Our commercial services include roof replacements for office buildings, siding installations for retail centers, window upgrades for commercial properties, and storm damage restoration for business facilities. We understand that commercial projects require minimal disruption to business operations, and we're prepared to work closely with {cityName} property managers to schedule work that accommodates tenants and business hours.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    Large-Scale Exterior Projects in {cityName}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    From multi-building complexes to entire city blocks, Advanced Roofing & Siding Inc. has the capacity and expertise to handle large-scale exterior projects in {cityName}. Our team is equipped to manage projects of any size, coordinating multiple crews, managing material logistics, and ensuring consistent quality across all work. We're prepared to work on projects involving multiple {cityName} buildings, ensuring that each structure receives the same level of craftsmanship and attention to detail. Our experience with large-scale projects means we can provide accurate timelines, competitive pricing, and reliable project management for potential {cityName} city projects and commercial developments.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    Why Consider Advanced Roofing & Siding Inc. for City & Commercial Projects
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our commitment to {cityName} extends beyond residential work. We're fully licensed and insured for commercial and municipal projects, with the bonding capacity to handle large-scale city contracts. Our GAF Master Elite certification ensures access to premium materials and comprehensive warranties that can protect {cityName}'s investments. We maintain detailed project documentation, provide regular progress updates, and ensure all work meets or exceeds {cityName} building codes and municipal requirements. We're ready to discuss how we can collaborate with {cityName} city officials and community members on projects that benefit the {cityName} community.
                  </p>
                </div>

                <div className="rounded-lg bg-red-50 p-6">
                  <p className="text-lg font-semibold leading-relaxed text-gray-900">
                    {cityName} city council members, city officials, and town hall attendees interested in discussing potential city projects, commercial building needs, or large-scale exterior renovations are invited to contact Advanced Roofing & Siding Inc. today. Our team is ready to provide detailed proposals, answer questions about our commercial capabilities, and discuss how we can collaborate on {cityName} project needs. We're committed to being a potential partner for {cityName} city projects, commercial properties, and all exterior service needs throughout the {cityName} area.
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Our Services in {cityName}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Home

              if (!Icon) {
                return null
              }

              return (
                <AnimatedDiv
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                      <Icon className="h-8 w-8 text-brand-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="mb-4 text-gray-600">{service.description}</p>
                    <a
                      href={`/services/${service.id === 'restoration' ? 'storm-restoration' : service.id}`}
                      className="text-sm font-semibold text-brand-primary hover:text-red-700"
                    >
                      Learn More →
                    </a>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Insurance Claims CTA */}
      <Section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <InsuranceClaimsCTA variant="compact" showTitle={true} />
        </div>
      </Section>

      {/* Get Started Today Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-red-50 to-red-100">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Ready to Get Started in {cityName}?
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                Contact us today for your free estimate. Our team is ready to help with all your
                roofing, siding, and exterior needs in {cityName}, {stateName}.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    Call {COMPANY_INFO.phone}
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Get Free Estimate
                  </Button>
                </Link>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
        
        {/* Related Cities */}
        <RelatedCities currentCity={cityName} currentState={stateAbbr} />
      </Section>
      </PageLayout>
    </>
  )
}

