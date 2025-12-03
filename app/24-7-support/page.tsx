import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Phone, Clock, CheckCircle, Star, AlertTriangle, Shield, CloudRain, Wrench, Mail, MessageCircle, ArrowRight, Zap } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '24/7 Emergency Support - Minnesota & Wisconsin Roofing | Advanced Roofing & Siding',
  description: '24/7 emergency roofing and siding support for Minnesota and Wisconsin homeowners. Available day, night, weekends, and holidays. Fast response for roof leaks, storm damage, and urgent exterior repairs.',
  keywords: '24/7 roofing support, emergency roofing Minnesota, emergency roofing Wisconsin, 24 hour roofing contractor, emergency roof repair, storm damage response, after hours roofing, weekend roofing service, emergency siding repair, Minnesota emergency contractor, Wisconsin emergency contractor, urgent roof leak repair',
  openGraph: {
    title: '24/7 Emergency Support - Minnesota & Wisconsin | Advanced Roofing & Siding',
    description: 'Always available. Always ready. Real help when you need it most - 24/7 emergency roofing and siding support.',
    type: 'website',
  },
}

export default function Support24_7Page() {
  return (
    <PageLayout>
      <PageHero
        title="24/7 Contact Services & Support"
        description="When there's a problem, you need a solution — fast"
        backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
      />

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-700 mb-6">
                  Exterior issues don't wait for business hours. Whether it's a leaking roof at midnight, <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding ripped off during a storm</Link>, or unexpected damage you discover on a weekend — <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Advanced Roofing & Siding</Link> is here for you 24/7.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 font-semibold">
                  When something goes wrong, you deserve a contractor who actually answers the phone.
                </p>
              </div>
            </Card>
          </AnimatedDiv>

          {/* Always Available Section */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Card>
              <div className="mb-6 flex items-center gap-3">
                <Star className="h-8 w-8 text-yellow-500" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Always Available. Always Ready. Every Day of the Year.
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                We believe <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin homeowners</Link> should never feel stranded or ignored when their home exterior is at risk. That's why Advanced Roofing & Siding offers:
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">24/7 Phone Support</h3>
                    <p className="text-gray-700">
                      Call anytime — day, night, weekends, or holidays — and speak with a real person who can help you quickly determine next steps. No voicemail mazes. No waiting until Monday.
                    </p>
                    <a 
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="mt-3 inline-flex items-center gap-2 text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2"
                    >
                      <Phone className="h-5 w-5" />
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                    <Zap className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">After-Hours Emergency Response</h3>
                    <p className="text-gray-700">
                      We prioritize urgent situations where immediate attention may prevent further damage. Our <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">emergency response team</Link> is ready to help protect your home.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">Fast Email and Chat Support</h3>
                    <p className="text-gray-700">
                      For non-urgent questions, our team responds promptly with clear, helpful answers and guidance. <Link href="/contact" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Contact us</Link> anytime.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                    <CloudRain className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">Storm-Response Availability</h3>
                    <p className="text-gray-700">
                      During severe weather in <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link>, we expand our support team to handle the high volume of calls and ensure you get assistance when you need it most.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-gray-50 border-2 border-gray-200 p-6">
                <p className="text-lg font-semibold text-gray-900 text-center">
                  No voicemail mazes. No waiting until Monday.
                </p>
                <p className="text-lg font-semibold text-gray-900 text-center mt-2">
                  Real help. Real people. Real solutions — anytime.
                </p>
              </div>
            </Card>
          </AnimatedDiv>

          {/* What We Can Help With Section */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Card>
              <div className="mb-6 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-brand-primary" />
                <h2 className="text-3xl font-bold text-gray-900">
                  What We Can Help With 24/7
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Our team is available to address urgent exterior problems such as:
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Active Roof Leaks</p>
                    <p className="text-gray-600">Immediate response to prevent water damage to your home's interior</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Interior Water Intrusion</p>
                    <p className="text-gray-600">Urgent <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 underline underline-offset-2">roofing repairs</Link> to stop water from entering your home</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Storm Damage</p>
                    <p className="text-gray-600">Hail, wind, and ice damage requiring immediate <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 underline underline-offset-2">storm restoration</Link> attention</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Missing Shingles or Torn Siding</p>
                    <p className="text-gray-600">Protect your home from further exposure with emergency <Link href="/services/siding" className="text-brand-primary hover:text-red-800 underline underline-offset-2">siding</Link> and <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 underline underline-offset-2">roofing</Link> repairs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Damaged Gutters Causing Overflow</p>
                    <p className="text-gray-600">Prevent water damage to your foundation and exterior</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Fallen Branches or Impact Damage</p>
                    <p className="text-gray-600">Emergency repairs to secure your home's exterior</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:col-span-2">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Unsafe Roofing or Exterior Conditions</p>
                    <p className="text-gray-600">Immediate assessment and temporary protection for safety concerns</p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-lg font-semibold text-gray-900">
                If it's affecting your home's safety, structure, or interior — we're ready to help.
              </p>
            </Card>
          </AnimatedDiv>

          {/* How Our 24/7 Support Works Section */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Card>
              <div className="mb-6 flex items-center gap-3">
                <Clock className="h-8 w-8 text-brand-primary" />
                <h2 className="text-3xl font-bold text-gray-900">
                  How Our 24/7 Support Works
                </h2>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-xl font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">Contact Us Anytime</h3>
                    <p className="text-gray-700">
                      Call <a href={`tel:${COMPANY_INFO.phone}`} className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">{COMPANY_INFO.phone}</a>, <Link href="/contact" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">email</Link>, or use chat support. We'll assess the situation and determine urgency.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-xl font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">Immediate Guidance</h3>
                    <p className="text-gray-700">
                      We walk you through what's happening and provide expert recommendations you can trust — even before we arrive onsite. Our <Link href="/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite</Link> certified team offers professional guidance 24/7.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-xl font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">In-Person Emergency Visit (If Needed)</h3>
                    <p className="text-gray-700 mb-4">
                      If the issue requires onsite review or physical repair, we dispatch a technician as soon as possible to your location in <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota or Wisconsin</Link>.
                    </p>
                    <div className="rounded-lg border-2 border-yellow-200 bg-yellow-50 p-4">
                      <p className="font-semibold text-gray-900 mb-2">Onsite Visit Fee</p>
                      <p className="text-gray-700">
                        A standard emergency visit fee applies for in-person assessments outside normal operating hours. This fee is fully explained upfront over the phone — no surprises, no hidden charges.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-xl font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">Rapid Repair or Temporary Protection</h3>
                    <p className="text-gray-700">
                      We either complete the repair immediately (when possible), or install emergency protective measures to stop further damage until full work can be scheduled. Our goal is to protect your home and minimize damage.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedDiv>

          {/* Reliable Help CTA Section */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <div className="mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-yellow-400" />
                <h2 className="text-3xl font-bold">Reliable Help When You Need It Most</h2>
              </div>
              
              <p className="text-xl text-gray-100 mb-6">
                When storms hit <Link href="/service-areas" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">Minnesota and Wisconsin</Link> or unexpected damage appears, the worst feeling is not knowing who to call or whether anyone will answer.
              </p>

              <p className="text-xl text-gray-100 mb-8 font-semibold">
                Advanced Roofing & Siding eliminates that stress:
              </p>

              <div className="grid gap-4 md:grid-cols-2 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <p className="text-lg text-gray-100">No delays</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <p className="text-lg text-gray-100">No unanswered calls</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <p className="text-lg text-gray-100">No uncertainty</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <p className="text-lg text-gray-100">No "we'll get back to you on Monday"</p>
                </div>
              </div>

              <div className="rounded-lg bg-white/10 border-2 border-white/20 p-6 mb-8">
                <p className="text-2xl font-bold text-center text-yellow-400">
                  If you need help — we're available. Always.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center justify-center gap-3 rounded-lg bg-yellow-500 px-6 py-4 text-gray-900 font-semibold transition-colors hover:bg-yellow-600"
                >
                  <Phone className="h-6 w-6" />
                  Call Now: {COMPANY_INFO.phone}
                </a>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contact Us Online
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

