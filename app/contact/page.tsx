import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { ContactForm } from '@/components/forms/ContactForm'
import { COMPANY_INFO, SERVICES } from '@/lib/constants'
import { cityToSlug } from '@/lib/city-utils'
import { Phone, Mail, MapPin, Clock, Shield, Award, BadgeCheck, CheckCircle, ArrowRight, Home, PaintBucket, Square, CloudRain, Snowflake } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us - Free Estimate | Advanced Roofing & Siding Inc.',
  description: 'Get your free estimate today! Contact Advanced Roofing & Siding Inc. - GAF Master Elite contractor serving Minnesota & Wisconsin. Call 763-427-3093.',
  keywords: 'contact roofing contractor, free estimate, Minnesota roofing, Anoka roofing',
}

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        title="Get Started Today"
        description="Schedule your free estimate with a Minnesota exterior specialist"
        backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
        showCTA={false}
      />
      <Section className="bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-4xl">

          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {/* Contact Information */}
            <AnimatedDiv
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card>
                <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-50 md:h-12 md:w-12">
                      <Phone className="h-5 w-5 text-brand-primary md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-gray-900">Phone</h4>
                      <a
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="text-brand-primary hover:text-red-800"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-50 md:h-12 md:w-12">
                      <Mail className="h-5 w-5 text-brand-primary md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-semibold text-gray-900 md:text-base">Email</h4>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-sm text-brand-primary hover:text-red-800 md:text-base"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-50 md:h-12 md:w-12">
                      <MapPin className="h-5 w-5 text-brand-primary md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-semibold text-gray-900 md:text-base">Location</h4>
                      <p className="text-sm text-gray-600 md:text-base">{COMPANY_INFO.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-50 md:h-12 md:w-12">
                      <Clock className="h-5 w-5 text-brand-primary md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>

            {/* Contact Form */}
            <AnimatedDiv
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">Request a Free Estimate</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Need help choosing a service? Learn more about our <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link>, <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">windows</Link>, <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm restoration</Link>, and <Link href="/services/winterization" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">winterization</Link> services. Or view our <Link href="/services" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">complete services overview</Link>.
                </p>
                <ContactForm />
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </Section>

      {/* Trust Badges Section */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mb-2">Why Choose Advanced Roofing & Siding Inc.?</h2>
              <p className="text-gray-600">Trusted credentials and proven excellence</p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <Card className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 md:h-14 md:w-14">
                  <Shield className="h-6 w-6 text-brand-primary md:h-7 md:w-7" strokeWidth={2} />
                </div>
                <h3 className="mb-1 text-sm font-bold text-gray-900 md:text-base">GAF Master Elite</h3>
                <p className="text-xs text-gray-600 md:text-sm">Top 3% nationwide</p>
                <Link href="/gaf-master-elite-contractor" className="mt-2 inline-block text-xs text-brand-primary hover:text-red-800 font-semibold">
                  Learn More →
                </Link>
              </Card>
              <Card className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 md:h-14 md:w-14">
                  <Award className="h-6 w-6 text-brand-primary md:h-7 md:w-7" strokeWidth={2} />
                </div>
                <h3 className="mb-1 text-sm font-bold text-gray-900 md:text-base">30+ Years</h3>
                <p className="text-xs text-gray-600 md:text-sm">Experience</p>
                <Link href="/about" className="mt-2 inline-block text-xs text-brand-primary hover:text-red-800 font-semibold">
                  Our Story →
                </Link>
              </Card>
              <Card className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 md:h-14 md:w-14">
                  <BadgeCheck className="h-6 w-6 text-brand-primary md:h-7 md:w-7" strokeWidth={2} />
                </div>
                <h3 className="mb-1 text-sm font-bold text-gray-900 md:text-base">A+ BBB Rating</h3>
                <p className="text-xs text-gray-600 md:text-sm">Accredited since 2007</p>
                <Link href="/reviews" className="mt-2 inline-block text-xs text-brand-primary hover:text-red-800 font-semibold">
                  Read Reviews →
                </Link>
              </Card>
              <Card className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 md:h-14 md:w-14">
                  <CheckCircle className="h-6 w-6 text-brand-primary md:h-7 md:w-7" strokeWidth={2} />
                </div>
                <h3 className="mb-1 text-sm font-bold text-gray-900 md:text-base">Licensed & Insured</h3>
                <p className="text-xs text-gray-600 md:text-sm">License #{COMPANY_INFO.license}</p>
                <Link href="/warranties" className="mt-2 inline-block text-xs text-brand-primary hover:text-red-800 font-semibold">
                  Warranties →
                </Link>
              </Card>
            </div>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Quick Service Links */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mb-2">Our Services</h2>
              <p className="text-gray-600">Explore our comprehensive exterior solutions</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {SERVICES.map((service, index) => {
                const serviceSlugs: Record<string, string> = {
                  roofing: '/services/roofing',
                  siding: '/services/siding',
                  windows: '/services/windows',
                  restoration: '/services/storm-restoration',
                  winterization: '/services/winterization',
                }
                const iconMap: Record<string, typeof Home> = {
                  Home,
                  PaintBucket,
                  Square,
                  CloudRain,
                  Snowflake,
                }
                const Icon = iconMap[service.icon as keyof typeof iconMap] || Home
                const slug = serviceSlugs[service.id as keyof typeof serviceSlugs]

                if (!Icon) {
                  return null
                }

                return (
                  <AnimatedDiv
                    key={service.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link href={slug}>
                      <Card className="h-full cursor-pointer text-center">
                        <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl md:h-14 md:w-14 ${service.id === 'winterization' ? 'bg-blue-50' : 'bg-red-50'}`}>
                          <Icon className={`h-6 w-6 md:h-7 md:w-7 ${service.id === 'winterization' ? 'text-blue-600' : 'text-brand-primary'}`} />
                        </div>
                        <h3 className="mb-1.5 text-base font-bold text-gray-900 md:text-lg">{service.title}</h3>
                        <p className="mb-2 text-xs text-gray-600 md:text-sm line-clamp-2">{service.description}</p>
                        <span className="text-xs font-semibold text-brand-primary md:text-sm">
                          Learn More →
                        </span>
                      </Card>
                    </Link>
                  </AnimatedDiv>
                )
              })}
            </div>
            <div className="mt-6 text-center">
              <Link href="/services">
                <Button variant="outline" size="lg">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Insurance Claims CTA */}
      <InsuranceClaimsCTA variant="compact" />

      {/* Service Areas Quick Reference */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
              <div className="text-center mb-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                  <MapPin className="h-6 w-6 text-brand-primary" strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mb-2">Serving Minnesota & Wisconsin</h2>
                <p className="text-gray-600 mb-4">
                  We proudly serve communities across <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link>, including the Twin Cities metro area, Anoka County, and surrounding regions.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-bold text-gray-900">Popular Minnesota Cities</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Anoka', 'Minneapolis', 'St. Paul', 'Bloomington', 'Eden Prairie', 'Maple Grove'].map((city) => (
                      <Link
                        key={city}
                        href={`/service-areas/mn/${cityToSlug(city)}`}
                        className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-all duration-200 hover:bg-brand-primary hover:text-white "
                      >
                        {city}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 font-bold text-gray-900">Wisconsin Service Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Hudson', 'River Falls', 'New Richmond', 'Somerset'].map((city) => (
                      <Link
                        key={city}
                        href={`/service-areas/wi/${cityToSlug(city)}`}
                        className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-all duration-200 hover:bg-brand-primary hover:text-white "
                      >
                        {city}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link href="/service-areas">
                  <Button variant="primary" size="lg">
                    View All Service Areas
                    <ArrowRight className="ml-2 h-5 w-5" />
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

