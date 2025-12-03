import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { COMPANY_INFO } from '@/lib/constants'
import {
  Shield,
  CheckCircle,
  XCircle,
  FileText,
  Users,
  Building2,
  AlertCircle,
  Phone,
  Calendar,
  Download,
  Play,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insurance Claims Assistance - Storm Damage Experts | Advanced Roofing & Siding',
  description: 'Expert insurance claim assistance for storm damage in Minnesota. Free inspections, adjuster meeting representation, and full claim support. 48-hour guarantee.',
  keywords: 'insurance claims, storm damage, hail damage, insurance adjuster, roof insurance claim, Minnesota roofing insurance',
}

const steps = [
  {
    number: '1',
    title: 'A Storm Hits (Hail, Wind, Ice Dams)',
    description:
      'Minnesota storms create damage that is often not visible from the ground — dents, granule loss, lifted shingles, cracked siding. Insurance companies expect documentation from a certified roof inspector, not the homeowner.',
  },
  {
    number: '2',
    title: 'AR&S Performs a Free Inspection',
    description:
      'A licensed project manager climbs the roof, photographs hail/wind damage at insurance-grade standards, documents siding + windows, checks attic moisture, and verifies storm date (crucial for claims). This documentation is what gets the claim approved.',
  },
  {
    number: '3',
    title: 'You File the Claim (or AR&S helps you file it)',
    description:
      'You contact your insurance carrier. AR&S provides all necessary storm details, damage summaries, and supporting evidence.',
  },
  {
    number: '4',
    title: 'An Insurance Adjuster Comes to Your Property',
    description:
      'This is the moment most homeowners lose money. Insurance reps often minimize damage. AR&S attends the adjuster meeting to represent you, point out legitimate storm damage, match damage to storm event data, ensure the adjuster doesn\'t miss covered damage, and push back professionally when needed. This step alone can be worth thousands of dollars.',
  },
  {
    number: '5',
    title: 'The Claim Is Approved',
    description:
      'The insurance company issues ACV payment (initial check) and RCV payment (paid after work is completed). AR&S explains the whole breakdown — deductible, supplements, depreciation — no surprises.',
  },
  {
    number: '6',
    title: 'AR&S Completes the Roofing, Siding, or Gutters',
    description:
      'You choose materials, colors, and schedule the build. AR&S manages permit, build, debris removal, and warranty registration. No shortcuts. No unlicensed subcontractors.',
  },
  {
    number: '7',
    title: 'Insurance Releases Final Payment',
    description:
      'After the project is completed and documented, AR&S submits final paperwork and the insurance carrier releases the remaining funds.',
  },
]

const residentialServices = [
  'Roof replacements',
  'Siding repair & replacement',
  'Gutters & downspouts',
  'Soffit & fascia',
  'Ice dam damage assessments',
  'Window damage',
  'Attic moisture & ventilation repairs',
]

const commercialBuildings = [
  'Retail buildings',
  'Multi-family / HOAs',
  'Warehouses',
  'Medical buildings',
  'Churches',
  'Restaurants',
  'Office buildings',
]

const commercialExpertise = [
  'EPDM / TPO damage detection',
  'Hail & wind damage documentation for adjusters',
  'Drone inspections for large footprints',
  'Insurance-approved moisture scans',
  'Large-loss claim support',
  'Work scheduling with minimal business interruption',
]

const arsImprovements = [
  'Adjuster meeting guaranteed',
  'Code upgrade enforcement',
  'Supplement requests to maximize payouts',
  'Full photo + video documentation',
  'Transparent breakdown of deductible & insurance checks',
  'Help reopening old or denied claims',
  '48-hour inspection guarantee',
]

const faqs = [
  {
    question: 'Does insurance cover the full roof replacement?',
    answer:
      'If the storm caused the damage, usually yes, minus your deductible. AR&S works with your insurance company to ensure you receive the maximum coverage you deserve.',
  },
  {
    question: 'How long does insurance take?',
    answer:
      'Most Minnesota claims: 5–14 days from filing to approval. AR&S helps expedite the process with proper documentation and adjuster representation.',
  },
  {
    question: 'Will my premiums go up?',
    answer:
      'Storm claims typically do not raise individual premiums. Premium increases are usually based on regional weather patterns, not individual claims.',
  },
  {
    question: 'Can AR&S work with any insurance company?',
    answer:
      'Yes — AR&S is independent and works with all carriers including State Farm, Allstate, Farmers, USAA, and more.',
  },
  {
    question: 'What if the adjuster denies damage?',
    answer:
      'AR&S helps reopen claims, supplement missing items, and request reinspections. We have experience successfully appealing denied claims.',
  },
  {
    question: 'How do I know if the storm caused my damage?',
    answer:
      'AR&S uses weather mapping, date-matching, and physical evidence to verify storm damage. Our licensed inspectors can identify storm-related damage versus normal wear and tear.',
  },
]

export default function InsuranceClaimsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Insurance Claims Assistance"
        description="Expert storm damage claim support. Free inspections, adjuster representation, and full claim management. 48-hour guarantee."
        backgroundImage="/gallery/380156327_905711167698071_326976560032986429_n.webp"
      />

      {/* Section 1: How Roofing Insurance Claims Work */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <div className="mb-6">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  How Roofing Insurance Claims Work (Minnesota Reality Check)
                </h2>
                <p className="text-lg text-gray-700">
                  Most homeowners don't know the process, which is why <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota</Link> is full of
                  underpaid claims, denied repairs, or low-quality contractors taking advantage of
                  the system.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  Here's the real step-by-step flow, written so anyone can understand:
                </p>
              </div>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <AnimatedDiv
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary text-2xl font-bold text-white">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Section 2: Residential Insurance Claims */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Residential Insurance Claims
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700">
              Minnesota Residential Claims Are What AR&S Does Best
            </p>
          </AnimatedDiv>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Minnesota homes face extreme weather:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-2xl">❄️</span>
                  <span className="text-gray-700">Winter storms</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🌧️</span>
                  <span className="text-gray-700">Spring hail</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🌬️</span>
                  <span className="text-gray-700">High winds</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">☀️</span>
                  <span className="text-gray-700">Heat cycles that crack shingles</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Homeowners often don't realize:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                  <span className="text-gray-700">Storm damage is often fully covered</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                  <span className="text-gray-700">
                    Insurance typically pays for roof, siding, gutters, windows
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                  <span className="text-gray-700">You only owe your deductible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                  <span className="text-gray-700">
                    Claims can be reopened if damage wasn't documented properly
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="mb-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Residential Claim Services AR&S Handles
            </h3>
            <div className="grid gap-3 md:grid-cols-2">
              {residentialServices.map((service) => (
                <div key={service} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-red-50 to-red-100">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-brand-primary" />
              <div>
                <h4 className="text-lg font-bold text-gray-900">Residential Advantage:</h4>
                <p className="text-gray-700">Same-day assessments + adjuster meeting representation.</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Section 3: Commercial Insurance Claims */}
      <Section className="bg-white">
        <div className="mx-auto max-w-6xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Commercial Insurance Claims</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700">
              Minnesota commercial property owners want speed, accuracy, and disruption-free
              replacements.
            </p>
          </AnimatedDiv>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="mb-4 flex items-center gap-3">
                <Building2 className="h-6 w-6 text-brand-primary" />
                <h3 className="text-xl font-bold text-gray-900">Types of Buildings AR&S Serves</h3>
              </div>
              <ul className="space-y-2">
                {commercialBuildings.map((building) => (
                  <li key={building} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-brand-primary" />
                    <span className="text-gray-700">{building}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <div className="mb-4 flex items-center gap-3">
                <Shield className="h-6 w-6 text-brand-primary" />
                <h3 className="text-xl font-bold text-gray-900">Commercial Claim Expertise</h3>
              </div>
              <ul className="space-y-2">
                {commercialExpertise.map((expertise) => (
                  <li key={expertise} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-brand-primary" />
                    <span className="text-gray-700">{expertise}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="mt-6 bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8 text-brand-primary" />
              <div>
                <h4 className="text-lg font-bold text-gray-900">Commercial Advantage:</h4>
                <p className="text-gray-700">
                  AR&S gives you a project manager + insurance liaison + crew coordination under one
                  roof.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Section 4: Warranties */}
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
                Understanding AR&S Warranties (Simplified)
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    Manufacturer Product Warranty
                  </h3>
                  <p className="mb-3 text-gray-700">
                    Covers defects in shingles or siding materials (typically 25–50 years depending
                    on brand). AR&S installs brands like: Learn more about our <Link href="/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">comprehensive warranty coverage</Link>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Owens Corning', 'GAF', 'LP', 'Mastic', 'James Hardie'].map((brand) => (
                      <span
                        key={brand}
                        className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    Workmanship Warranty (AR&S Warranty)
                  </h3>
                  <p className="text-gray-700">
                    Covers the labor — how the <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof</Link> or <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link> was installed. Most Minnesota
                    contractors offer 1–5 years. AR&S offers longer workmanship warranties
                    depending on the installation and materials. This is the safety net that
                    protects you even if a shingle lifts or a seam fails due to installation error. See our <Link href="/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">full warranty details</Link>.
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Section 5: Why Claims Go Wrong */}
      <Section className="bg-white">
        <div className="mx-auto max-w-6xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Why Insurance Claims Go Wrong (and How AR&S Fixes It)
            </h2>
          </AnimatedDiv>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-red-200 bg-red-50">
              <div className="mb-4 flex items-center gap-3">
                <XCircle className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Most contractors do one or more of these:
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" />
                  <span className="text-gray-700">Don't attend the adjuster meeting</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" />
                  <span className="text-gray-700">Don't document damage properly</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" />
                  <span className="text-gray-700">Don't understand Minnesota building codes</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" />
                  <span className="text-gray-700">Let insurance underpay the claim</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" />
                  <span className="text-gray-700">
                    Do not supplement the claim (missed items like flashing, vents, decking)
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <div className="mb-4 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">AR&S Improvements Over Competitors</h3>
              </div>
              <ul className="space-y-2">
                {arsImprovements.map((improvement) => (
                  <li key={improvement} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
                    <span className="text-gray-700">{improvement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Section 6: The AR&S Insurance Process */}
      <Section className="bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-6xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              The 6-Step AR&S Claim System
            </h2>
          </AnimatedDiv>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Free Inspection',
              'Documentation + Storm Event Matching',
              'Claim Filing Support',
              'Adjuster Meeting Representation',
              'Build Scheduling + Completion',
              'Final Payment + Warranty Registration',
            ].map((step, index) => (
              <AnimatedDiv
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary text-2xl font-bold text-white">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900">{step}</h3>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 7: Deductible Education */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="mb-4 flex items-center gap-3">
                <FileText className="h-8 w-8 text-brand-primary" />
                <h2 className="text-2xl font-bold text-gray-900">Deductible Education</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>What is a deductible?</strong> Your deductible is the amount you pay out
                  of pocket before your insurance coverage kicks in. For example, if your roof
                  replacement costs $15,000 and your deductible is $1,000, you pay $1,000 and
                  insurance covers $14,000.
                </p>
                <p>
                  <strong>ACV vs RCV:</strong> Actual Cash Value (ACV) is the initial payment you
                  receive, minus depreciation. Replacement Cost Value (RCV) is the full amount
                  paid after work is completed and documented.
                </p>
                <p>
                  <strong>No surprises:</strong> AR&S explains your entire claim breakdown upfront —
                  deductible, supplements, depreciation — so you know exactly what to expect.
                </p>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Section 8: FAQ */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700">What Homeowners Ask Most</p>
          </AnimatedDiv>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedDiv
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="mb-3 flex items-start gap-3 text-lg font-bold text-gray-900">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-1" />
                    {faq.question}
                  </h3>
                  <p className="ml-8 text-gray-700">{faq.answer}</p>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section className="bg-gradient-to-br from-brand-primary to-red-600">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Get a Free Storm Damage Assessment — 48 Hour Guarantee
            </h2>
            <p className="mb-8 text-xl text-white opacity-90">
              <Link href="/service-areas" className="underline decoration-white/50 underline-offset-4 hover:decoration-white transition-colors">Minnesota's</Link> most trusted <Link href="/services/roofing" className="underline decoration-white/50 underline-offset-4 hover:decoration-white transition-colors">roofing</Link> & <Link href="/services/siding" className="underline decoration-white/50 underline-offset-4 hover:decoration-white transition-colors">siding</Link> insurance claim specialists.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book My Inspection
                </Button>
              </Link>
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-brand-primary sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call {COMPANY_INFO.phone}
                </Button>
              </a>
            </div>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
  )
}

