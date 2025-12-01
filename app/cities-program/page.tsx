import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { COMPANY_INFO } from '@/lib/constants'
import {
  Building2,
  CheckCircle,
  FileText,
  Users2,
  Shield,
  Award,
  Clock,
  DollarSign,
  Phone,
  Mail,
  ArrowRight,
  Building,
  Wrench,
  ClipboardCheck,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cities Program - Advanced Roofing & Siding Inc. | Municipal Partnership',
  description: 'Learn how Advanced Roofing & Siding Inc. supports city exterior service needs, municipal buildings, and large-scale projects across Minnesota and Wisconsin.',
  keywords: 'city roofing contractor, municipal building services, city projects, commercial roofing, city partnerships',
}

export default function CitiesProgramPage() {
  return (
    <PageLayout>
      <PageHero
        title="Cities Partnership Program"
        description="Supporting municipal exterior service needs across Minnesota and Wisconsin"
        backgroundImage="/gallery/70591306_10156272051195740_842810443335467008_n (1).webp"
      />

      {/* Introduction Section */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-700">
                  Advanced Roofing & Siding Inc. is committed to partnering with cities, municipalities, 
                  and local governments across <Link href="/service-areas" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link> to address exterior service needs 
                  for city buildings, public facilities, and large-scale municipal projects.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Whether you're a city council member, town hall attendee, facilities manager, or city 
                  administrator, we're here to discuss how our <Link href="/about" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">GAF Master Elite expertise</Link> and 30+ years 
                  of experience can support your city's exterior maintenance and improvement goals. We provide <Link href="/services/roofing" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">roofing</Link>, <Link href="/services/siding" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">siding</Link>, and <Link href="/services" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">comprehensive exterior services</Link>.
                </p>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Who This Program Is For */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Who This Program Is For"
            description="City officials, administrators, and community leaders managing municipal exterior needs"
          />

          <div className="grid gap-6 md:grid-cols-3">
            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                  <Users2 className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">City Council Members</h3>
                <p className="text-gray-600">
                  City council members and town hall attendees interested in exploring municipal 
                  partnerships for city building maintenance and exterior improvements.
                </p>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                  <FileText className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Project Managers</h3>
                <p className="text-gray-600">
                  City officials and project managers overseeing active city projects, upcoming 
                  renovations, or planned exterior maintenance initiatives.
                </p>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                  <Building className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Facilities Managers</h3>
                <p className="text-gray-600">
                  Facilities managers and city administrators responsible for maintaining city 
                  buildings, public facilities, and municipal infrastructure.
                </p>
              </Card>
            </AnimatedDiv>
          </div>
        </div>
      </Section>

      {/* Services for Cities */}
      <Section className="bg-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Exterior Services for City Buildings & Projects"
            description="Comprehensive solutions for all municipal exterior service needs"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <AnimatedDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
                    <Building2 className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">City Building Roofing</h3>
                </div>
                <p className="text-gray-700">
                  Complete <Link href="/services/roofing" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">roofing solutions</Link> for city buildings, public facilities, and municipal 
                  structures. Our <Link href="/about" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">GAF Master Elite certification</Link> ensures access to premium materials 
                  and <Link href="/warranties" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">comprehensive warranties</Link> that protect your city's investments.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-600">Roof replacements for city buildings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-600">Roof repairs and maintenance programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-600">Emergency roof repairs for municipal facilities</span>
                  </li>
                </ul>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
                    <Wrench className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Siding & Exterior Systems</h3>
                </div>
                <p className="text-gray-700">
                  Professional <Link href="/services/siding" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">siding installation and replacement</Link> for city buildings, ensuring 
                  weather resistance, energy efficiency, and enhanced curb appeal for municipal 
                  facilities.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-600">Siding replacement for municipal buildings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-600">Exterior maintenance and repair programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-600">Energy-efficient exterior upgrades</span>
                  </li>
                </ul>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
                    <ClipboardCheck className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Large-Scale Projects</h3>
                </div>
                <p className="text-gray-700">
                  Experienced in managing large-scale exterior projects involving multiple city 
                  buildings, coordinating crews, managing logistics, and ensuring consistent 
                  quality across all work.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-600">Multi-building complex renovations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-600">City-wide exterior improvement programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-600">Phased project management and execution</span>
                  </li>
                </ul>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
                    <Shield className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Storm Damage Restoration</h3>
                </div>
                <p className="text-gray-700">
                  Expert <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">storm damage assessment and restoration services</Link> for city buildings and 
                  public facilities, with experience working with <Link href="/insurance-claims" className="text-brand-primary hover:text-red-700 font-semibold underline underline-offset-2">insurance claims</Link> and emergency 
                  response protocols.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-600">Emergency storm damage response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-600">Insurance claim assistance for city properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-600">Complete restoration services</span>
                  </li>
                </ul>
              </Card>
            </AnimatedDiv>
          </div>
        </div>
      </Section>

      {/* Why Choose Us for City Projects */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Why Choose Advanced Roofing & Siding for City Projects"
            description="Credentials, capabilities, and commitment to municipal partnerships"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                  <Shield className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900"><Link href="/about" className="text-brand-primary hover:text-red-700 underline underline-offset-2">GAF Master Elite</Link></h3>
                <p className="text-sm text-gray-600">
                  Top 3% of contractors nationwide with access to premium materials and <Link href="/warranties" className="text-brand-primary hover:text-red-700 underline underline-offset-2">comprehensive warranties</Link>
                </p>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                  <Award className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">30+ Years Experience</h3>
                <p className="text-sm text-gray-600">
                  Three decades of excellence serving Minnesota and Wisconsin communities
                </p>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                  <ClipboardCheck className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Fully Licensed & Bonded</h3>
                <p className="text-sm text-gray-600">
                  Licensed and insured with bonding capacity for large-scale city contracts
                </p>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                  <Clock className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Project Management</h3>
                <p className="text-sm text-gray-600">
                  Detailed documentation, regular progress updates, and adherence to city timelines
                </p>
              </Card>
            </AnimatedDiv>
          </div>
        </div>
      </Section>

      {/* How We Work with Cities */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="How We Work with Cities"
            description="Our approach to municipal partnerships and city projects"
          />

          <div className="space-y-6">
            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <FileText className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">Initial Consultation</h3>
                    <p className="text-gray-700">
                      We begin with a comprehensive consultation to understand your city's exterior 
                      service needs, project scope, budget considerations, and timeline requirements. 
                      Our team is prepared to discuss potential collaboration opportunities and answer 
                      questions about our capabilities.
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <DollarSign className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">Detailed Proposals</h3>
                    <p className="text-gray-700">
                      We provide detailed, transparent proposals that outline project scope, materials, 
                      timelines, and pricing. Our proposals are designed to help city officials make 
                      informed decisions and can be tailored to meet municipal procurement requirements.
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <ClipboardCheck className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">Project Execution</h3>
                    <p className="text-gray-700">
                      Throughout project execution, we maintain clear communication, provide regular 
                      progress updates, and ensure all work meets or exceeds city building codes and 
                      municipal requirements. We coordinate with city officials to minimize disruption 
                      to public services and facilities.
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <Shield className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">Ongoing Support</h3>
                    <p className="text-gray-700">
                      We stand behind our work with comprehensive warranties and ongoing support. 
                      Our commitment to city partnerships extends beyond project completion, ensuring 
                      your municipal facilities remain protected and well-maintained.
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-red-50 to-red-100">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Ready to Discuss Your City's Exterior Service Needs?
              </h2>
              <p className="mb-8 text-lg text-gray-700">
                City council members, project managers, and facilities administrators are invited to 
                contact us to discuss how Advanced Roofing & Siding Inc. can support your city's 
                exterior maintenance and improvement goals.
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
                    <Mail className="mr-2 h-5 w-5" />
                    Send Us a Message
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

