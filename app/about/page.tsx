import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { FEATURES, COMPANY_INFO } from '@/lib/constants'
import { Shield, Award, BadgeCheck, Users, Building2, Home, CheckCircle, ArrowRight, Users2, FileText, Building, PlayCircle } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us - Minnesota Roofing Experts Since 2001 | GAF Master Elite',
  description: 'Learn about Advanced Roofing & Siding Inc. - GAF Master Elite contractor with 30+ years of experience serving Minnesota and Wisconsin. Family-owned, A+ BBB rated, community-focused.',
  keywords: ['about advanced roofing', 'Minnesota roofing company', 'GAF Master Elite', 'family owned roofing', 'Anoka MN roofing contractor', 'Minnesota exterior contractor', 'Wisconsin roofing company', 'community roofing contractor'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/about',
  },
  openGraph: {
    title: 'About Us - Minnesota Roofing Experts Since 2001',
    description: 'Learn about Advanced Roofing & Siding Inc. - GAF Master Elite contractor with 30+ years of experience serving Minnesota and Wisconsin. Family-owned, A+ BBB rated.',
    url: 'https://advancedroofingmn.com/about',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: 'About Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const iconMap = {
  Shield,
  Award,
  BadgeCheck,
  Users,
}

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        title="About Advanced Roofing & Siding Inc."
        description="Three decades of excellence serving Minnesota and Wisconsin"
        backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
      />
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="About Advanced Roofing & Siding Inc."
            description="Three decades of excellence in Minnesota and Wisconsin"
          />

          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card className="mb-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story: Three Decades of Excellence</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Established in 2001, Advanced Roofing & Siding Inc. has been a trusted name in <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link>
                  for over 30 years. As a <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite contractor</Link>, we represent the top 2% of
                  roofing contractors nationwide, bringing unparalleled expertise and quality to
                  every project.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Our family-owned business is built on a foundation of integrity, craftsmanship,
                  and customer satisfaction. We've maintained an A+ rating with the Better Business
                  Bureau since 2007, a testament to our commitment to excellence and ethical
                  business practices. Based in <Link href="/service-areas/mn/anoka" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Anoka, Minnesota</Link>, we're more than just a business—we're your neighbors. Our families attend local schools, support small businesses, and are deeply connected to the communities we serve.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  From residential <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link> and <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link> to <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">window installation</Link> and <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm restoration</Link>,
                  we provide comprehensive <Link href="/services" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">exterior solutions</Link> backed by <Link href="/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">industry-leading warranties</Link>
                  and decades of experience. Our commitment to quality extends to both residential and commercial projects, serving homeowners, property managers, and <Link href="/cities-program" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">municipal partners</Link> throughout the region.
                </p>
                <div className="rounded-lg bg-red-50 p-6 mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Commitment to You</h3>
                  <p className="text-gray-700 mb-3">
                    At Advanced Roofing & Siding Inc., we believe in doing business the right way. Every project is completed with attention to detail, using premium materials, and backed by comprehensive warranties. We're licensed in both Minnesota (License #BC630441) and Wisconsin (License #2992 - DCRF), ensuring we meet the highest standards in both states.
                  </p>
                  <p className="text-gray-700">
                    Our team combines decades of experience with ongoing training and certification, ensuring we stay at the forefront of industry best practices. Whether you're a homeowner in <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Anoka County</Link>, a property manager in the Twin Cities metro, or a city official looking for municipal partnership opportunities, we're here to serve you with the same level of professionalism and care.
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedDiv>

          <SectionHeader
            title="Why Choose Us"
            description="Excellence backed by credentials, experience, and unwavering commitment"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature, index) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap] || Shield

              if (!Icon) {
                return null
              }

              return (
                <AnimatedDiv
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                      <Icon className="h-8 w-8 text-brand-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Commercial & Residential Dual Section */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Commercial & Residential Services"
            description="Expert exterior solutions for homes and businesses across Minnesota and Wisconsin"
          />

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Residential Section */}
            <AnimatedDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                    <Home className="h-8 w-8 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Residential Services</h3>
                    <p className="text-gray-600">Protecting and enhancing your home</p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-gray-700">
                    Advanced Roofing & Siding Inc. specializes in residential exterior solutions that protect your most valuable investment—your home. We understand that homeowners need reliable, high-quality workmanship backed by comprehensive warranties.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Complete <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 underline underline-offset-2">Roofing Systems</Link></p>
                        <p className="text-gray-600"><Link href="/services/roofing" className="text-brand-primary hover:text-red-800 underline underline-offset-2">GAF Master Elite certified installations</Link> with <Link href="/warranties" className="text-brand-primary hover:text-red-800 underline underline-offset-2">industry-leading warranties</Link> for residential properties</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900"><Link href="/services/siding" className="text-brand-primary hover:text-red-800 underline underline-offset-2">Siding</Link> & <Link href="/services/windows" className="text-brand-primary hover:text-red-800 underline underline-offset-2">Windows</Link></p>
                        <p className="text-gray-600">Transform your home's exterior with durable <Link href="/services/siding" className="text-brand-primary hover:text-red-800 underline underline-offset-2">siding</Link> and <Link href="/services/windows" className="text-brand-primary hover:text-red-800 underline underline-offset-2">energy-efficient windows</Link></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900"><Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 underline underline-offset-2">Storm Damage Restoration</Link></p>
                        <p className="text-gray-600">Expert assessment and restoration services with seamless <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 underline underline-offset-2">insurance claim support</Link></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Personalized Service</p>
                        <p className="text-gray-600">Family-owned business providing personalized attention and clear communication throughout your project</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>

            {/* Commercial Section */}
            <AnimatedDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                    <Building2 className="h-8 w-8 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Commercial Services</h3>
                    <p className="text-gray-600">Professional solutions for businesses and properties</p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-gray-700">
                    Our commercial division brings the same <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite quality</Link> and attention to detail to businesses, property management companies, and <Link href="/cities-program" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">municipal projects</Link>. We understand the unique needs of commercial properties and work efficiently to minimize disruption.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Large-Scale Projects</p>
                        <p className="text-gray-600">Experienced in managing multi-building complexes and large-scale exterior renovations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Property Management</p>
                        <p className="text-gray-600">Working with property managers to schedule work that accommodates tenants and business operations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900"><Link href="/cities-program" className="text-brand-primary hover:text-red-800 underline underline-offset-2">Municipal & City Projects</Link></p>
                        <p className="text-gray-600">Fully licensed and bonded for city contracts, with experience navigating municipal requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Commercial Expertise</p>
                        <p className="text-gray-600"><Link href="/services/roofing" className="text-brand-primary hover:text-red-800 underline underline-offset-2">Roofing</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 underline underline-offset-2">siding</Link>, and <Link href="/services/windows" className="text-brand-primary hover:text-red-800 underline underline-offset-2">window solutions</Link> for office buildings, retail centers, and commercial facilities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>
          </div>
        </div>
      </Section>

      {/* Project Video Section */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                  <PlayCircle className="h-8 w-8 text-brand-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Work in Action</h2>
                  <p className="text-gray-600">See our quality craftsmanship firsthand</p>
                </div>
              </div>
              <div className="relative w-full overflow-hidden rounded-lg bg-gray-900" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 h-full w-full"
                  src="https://www.youtube.com/embed/dPOfuHMt8hQ"
                  title="Inver Grove Heights MN Project - Advanced Roofing & Siding Inc."
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold text-gray-900">Inver Grove Heights, MN Project</p>
                <p className="text-gray-600">Watch our team in action on this recent project, showcasing our attention to detail and professional craftsmanship.</p>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Photo Gallery Section */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Our Project Gallery"
            description="A showcase of our quality workmanship across Minnesota and Wisconsin"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              '/gallery/340661788_241238031731100_708703886642482358_n.webp',
              '/gallery/310571525_636102627992261_6745535343486299305_n.webp',
              '/gallery/315336128_671806221088568_2626046884352502994_n.webp',
              '/gallery/351499412_645224983741699_6973171527731469674_n.webp',
              '/gallery/380156327_905711167698071_326976560032986429_n.webp',
              '/gallery/261311101_408550814080778_7104520534060364107_n.webp',
              '/gallery/379466626_906233337645854_1361939232979378521_n.webp',
              '/gallery/379833840_906233377645850_4118701267333514526_n.webp',
              '/gallery/394570286_927694532166401_5050008028973736549_n.webp',
            ].map((imagePath, index) => (
              <AnimatedDiv
                key={imagePath}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden p-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={imagePath}
                      alt={`Advanced Roofing & Siding Inc. project ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              These images represent just a sample of our work across <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link>. 
              From residential roofing and siding to commercial projects and storm restoration, we bring the same level of quality and attention to detail to every job.
            </p>
          </div>
        </div>
      </Section>

      {/* City Program CTA Section */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200">
              <div className="text-center mb-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <Building className="h-8 w-8 text-brand-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  City & Municipal Partnership Program
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Are you part of city town hall, managing active city projects, or overseeing city buildings? 
                  Learn how Advanced Roofing & Siding Inc. can support your city's exterior service needs.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Users2 className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900">City Town Hall</h3>
                  <p className="text-sm text-gray-600">
                    City council members and town hall attendees interested in municipal partnerships
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <FileText className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900">Active City Projects</h3>
                  <p className="text-sm text-gray-600">
                    City officials managing current or upcoming exterior renovation and maintenance projects
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Building className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900">City Building Management</h3>
                  <p className="text-sm text-gray-600">
                    Facilities managers and city administrators overseeing municipal building maintenance
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link href="/cities-program">
                  <Button variant="primary" size="lg" className="group">
                    Learn More About Our Cities Program
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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

