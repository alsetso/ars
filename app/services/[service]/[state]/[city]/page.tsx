import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { ServiceSchema } from '@/components/seo/ServiceSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { ServiceAreaCities } from '@/components/seo/ServiceAreaCities'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { ServiceProcess } from '@/components/sections/ServiceProcess'
import { EstimateForm } from '@/components/forms/EstimateForm'
import { COMPANY_INFO, SERVICES } from '@/lib/constants'
import { getAllCityData } from '@/lib/city-utils'
import { generateServiceCityContent, SERVICE_PAGE_MAP } from '@/lib/content-generator'
import { Phone, MapPin, Mail } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const SERVICE_SLUGS = Object.keys(SERVICE_PAGE_MAP)

export async function generateStaticParams() {
  const cities = getAllCityData()
  const params: { service: string; state: string; city: string }[] = []
  for (const serviceSlug of SERVICE_SLUGS) {
    for (const city of cities) {
      params.push({ service: serviceSlug, state: city.state, city: city.slug })
    }
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: { service: string; state: string; city: string }
}): Promise<Metadata> {
  const serviceInfo = SERVICE_PAGE_MAP[params.service]
  const cities = getAllCityData()
  const cityData = cities.find(
    (c) => c.slug === params.city && c.state === params.state.toLowerCase()
  )

  if (!serviceInfo || !cityData) {
    return { title: 'Service Not Found' }
  }

  const cityName = cityData.city
  const stateAbbr = cityData.state.toUpperCase()
  const stateFull = cityData.stateFull
  const canonicalUrl = `https://advancedroofingmn.com/services/${params.service}/${params.state}/${params.city}`

  return {
    title: `${serviceInfo.title} Contractor in ${cityName}, ${stateAbbr} | Free Estimates | Advanced Roofing & Siding`,
    description: `Expert ${serviceInfo.title.toLowerCase()} services in ${cityName}, ${stateFull}. GAF Master Elite certified contractor with 30+ years of experience. ${serviceInfo.shortDescription}. Free estimates!`,
    keywords: serviceInfo.metaKeywords(cityName, stateAbbr),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${serviceInfo.title} in ${cityName}, ${stateAbbr} | Advanced Roofing & Siding Inc.`,
      description: `Expert ${serviceInfo.title.toLowerCase()} services in ${cityName}, ${stateFull}. GAF Master Elite certified with 30+ years of experience. Free estimates!`,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: 'https://advancedroofingmn.com/AFS-Logo900.png',
          width: 1200,
          height: 630,
          alt: `${serviceInfo.title} Services in ${cityName}, ${stateAbbr}`,
        },
      ],
    },
  }
}

export default function ServiceCityPage({
  params,
}: {
  params: { service: string; state: string; city: string }
}) {
  const serviceInfo = SERVICE_PAGE_MAP[params.service]
  const cities = getAllCityData()
  const cityData = cities.find(
    (c) => c.slug === params.city && c.state === params.state.toLowerCase()
  )

  if (!serviceInfo || !cityData) {
    notFound()
  }

  const cityName = cityData.city
  const stateAbbr = cityData.state.toUpperCase()
  const stateFull = cityData.stateFull
  const serviceUrl = `/services/${params.service}/${params.state}/${params.city}`
  const servicePageUrl = `/services/${params.service}`

  const content = generateServiceCityContent(serviceInfo.contentKey, cityName, stateAbbr, stateFull)

  const relatedServices = SERVICES.filter((s) => {
    const slug = s.id === 'restoration' ? 'storm-restoration' : s.id
    return slug !== params.service
  }).slice(0, 3)

  return (
    <>
      <LocalBusinessSchema city={cityName} state={stateAbbr} stateFull={stateFull} />
      <ServiceSchema
        serviceName={serviceInfo.title}
        serviceDescription={serviceInfo.shortDescription}
        serviceUrl={serviceUrl}
        city={cityName}
        state={stateAbbr}
        stateFull={stateFull}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: serviceInfo.title, url: servicePageUrl },
          { name: `${cityName}, ${stateAbbr}`, url: serviceUrl },
        ]}
      />

      <PageLayout>
        <PageHero
          title={`${serviceInfo.title} in ${cityName}, ${stateAbbr}`}
          description={`Expert ${serviceInfo.title.toLowerCase()} services for ${cityName} homeowners. GAF Master Elite certified with 30+ years of experience.`}
          backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
        />

        {/* Breadcrumb nav */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
              <Link href="/" className="hover:text-brand-primary">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-brand-primary">Services</Link>
              <span>/</span>
              <Link href={servicePageUrl} className="hover:text-brand-primary">{serviceInfo.title}</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{cityName}, {stateAbbr}</span>
            </nav>
          </div>
        </div>

        {/* Main Content & Form — Two Column Layout */}
        <Section className="bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3">
              {/* Sticky form — right side on desktop, top on mobile */}
              <div className="order-1 lg:order-2 lg:col-span-1">
                <AnimatedDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="bg-gradient-to-br from-gray-50 to-gray-100 lg:sticky lg:top-8">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">
                      Free {serviceInfo.title} Estimate in {cityName}
                    </h2>
                    <p className="mb-6 text-gray-600">
                      Fill out the form and we'll contact you within 24 hours to schedule your free
                      {' '}{serviceInfo.title.toLowerCase()} estimate.
                    </p>
                    <EstimateForm serviceSlug={params.service} cityName={cityName} stateAbbr={stateAbbr} />

                    <div className="mt-6 border-t border-gray-200 pt-6">
                      <h3 className="mb-4 text-xl font-bold text-gray-900">Contact Us</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 flex-shrink-0 text-brand-primary mt-1" />
                          <div>
                            <p className="font-semibold text-gray-900">Phone</p>
                            <a href={`tel:${COMPANY_INFO.phone}`} className="text-brand-primary hover:text-red-800">
                              {COMPANY_INFO.phone}
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 flex-shrink-0 text-brand-primary mt-1" />
                          <div>
                            <p className="font-semibold text-gray-900">Email</p>
                            <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-primary hover:text-red-800">
                              {COMPANY_INFO.email}
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 flex-shrink-0 text-brand-primary mt-1" />
                          <div>
                            <p className="font-semibold text-gray-900">Service Area</p>
                            <p className="text-gray-600">{cityName}, {stateAbbr}</p>
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

              {/* Content — left side on desktop */}
              <div className="order-2 lg:order-1 lg:col-span-2">
                <AnimatedDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <h2 className="mb-6 text-3xl font-bold text-gray-900">
                      {serviceInfo.title} Services in {cityName}, {stateFull}
                    </h2>
                    <div className="prose prose-lg max-w-none space-y-6">
                      <p className="text-lg leading-relaxed text-gray-700">
                        {content}
                      </p>

                      <div>
                        <h3 className="mb-3 text-2xl font-bold text-gray-900">
                          Why {cityName} Homeowners Choose Us for {serviceInfo.title}
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-700">
                          Advanced Roofing & Siding Inc. has been serving {cityName}, {stateFull} homeowners
                          since 1994. As a{' '}
                          <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">
                            GAF Master Elite certified contractor
                          </Link>
                          {' '}— a designation held by the top 3% of roofing professionals nationwide — we
                          deliver {serviceInfo.title.toLowerCase()} solutions built to withstand {stateFull}&apos;s
                          harsh winters, spring hailstorms, and extreme temperature swings. Every project
                          is backed by{' '}
                          <Link href="/resources/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">
                            industry-leading warranties
                          </Link>
                          {' '}and our A+ BBB rating.
                        </p>
                      </div>

                      <div>
                        <h3 className="mb-3 text-2xl font-bold text-gray-900">
                          {serviceInfo.title} for Storm &amp; Insurance Claims in {cityName}
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-700">
                          {stateFull} weather frequently causes hail, wind, and ice damage that qualifies
                          for insurance coverage. Our team provides complete{' '}
                          <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">
                            insurance claim assistance
                          </Link>
                          {' '}— from initial damage assessment through adjuster meetings — so {cityName}
                          homeowners can maximize their coverage and minimize out-of-pocket costs.
                        </p>
                      </div>

                      <div className="rounded-lg bg-red-50 p-6">
                        <p className="text-lg font-semibold leading-relaxed text-gray-900">
                          Ready for your free {serviceInfo.title.toLowerCase()} estimate in {cityName}?
                          Contact Advanced Roofing &amp; Siding Inc. today — our team responds within 24 hours
                          and we&apos;ll provide a detailed, no-obligation quote.
                        </p>
                      </div>
                    </div>
                  </Card>
                </AnimatedDiv>
              </div>
            </div>
          </div>
        </Section>

        {/* Related services from this city */}
        <Section className="bg-gray-50">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              More Services in {cityName}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedServices.map((service, index) => {
                const slug = service.id === 'restoration' ? 'storm-restoration' : service.id
                return (
                  <AnimatedDiv
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/services/${slug}/${params.state}/${params.city}`}>
                      <Card className="h-full text-center cursor-pointer hover:shadow-md transition-shadow">
                        <h3 className="mb-2 text-xl font-bold text-gray-900">{service.title}</h3>
                        <p className="mb-4 text-sm text-gray-600">{service.description}</p>
                        <span className="text-sm font-semibold text-brand-primary">
                          {service.title} in {cityName} →
                        </span>
                      </Card>
                    </Link>
                  </AnimatedDiv>
                )
              })}
            </div>
            <div className="mt-8 text-center">
              <Link href={`/service-areas/${params.state}/${params.city}`}>
                <Button variant="outline" size="md">
                  All Services in {cityName}, {stateAbbr}
                </Button>
              </Link>
            </div>
          </div>
        </Section>

        {/* How It Works */}
        <ServiceProcess serviceSlug={params.service} cityName={cityName} />

        {/* Insurance Claims CTA */}
        <Section className="bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <InsuranceClaimsCTA variant="compact" showTitle={true} />
          </div>
        </Section>

        {/* CTA */}
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
                  Ready for Your Free {serviceInfo.title} Estimate in {cityName}?
                </h2>
                <p className="mb-6 text-lg text-gray-700">
                  Call us or submit the form above. We serve {cityName} and{' '}
                  <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">
                    50+ cities across Minnesota &amp; Wisconsin
                  </Link>
                  .
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <a href={`tel:${COMPANY_INFO.phone}`}>
                    <Button variant="primary" size="lg" className="w-full sm:w-auto">
                      <Phone className="mr-2 h-5 w-5" />
                      Call {COMPANY_INFO.phone}
                    </Button>
                  </a>
                  <Link href="/services/free-estimate">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Get Free Estimate
                    </Button>
                  </Link>
                </div>
              </Card>
            </AnimatedDiv>

            <ServiceAreaCities serviceSlug={params.service} serviceTitle={serviceInfo.title} />
          </div>
        </Section>
      </PageLayout>
    </>
  )
}
