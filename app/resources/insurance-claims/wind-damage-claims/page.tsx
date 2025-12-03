import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import {
  Shield,
  CheckCircle,
  AlertCircle,
  FileText,
  Users,
  Building2,
  Phone,
  Calendar,
  Wind,
  Home,
  Hammer,
  Award,
  ArrowRight,
  Eye,
  HelpCircle,
  CloudRain,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wind Damage Claims - Roof & Siding Experts | Minnesota & Wisconsin',
  description: 'Wind damage insurance claim specialists for Minnesota & Wisconsin. 24/7 emergency repairs, free inspections, and expert adjuster representation. 20+ years experience.',
  keywords: ['wind damage claims', 'wind damage insurance', 'Minnesota wind damage', 'Wisconsin wind damage', 'wind damage roof', 'wind damage siding', 'insurance claim assistance', 'storm damage claims', 'wind damage inspection'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/resources/insurance-claims/wind-damage-claims',
  },
  openGraph: {
    title: 'Wind Damage Claims - Roof & Siding Experts | Minnesota & Wisconsin',
    description: 'Wind damage insurance claim specialists. 24/7 emergency repairs, free inspections, and expert adjuster representation. 20+ years experience.',
    url: 'https://advancedroofingmn.com/resources/insurance-claims/wind-damage-claims',
    images: [
      {
        url: 'https://advancedroofingmn.com/gallery/380156327_905711167698071_326976560032986429_n.webp',
        width: 1200,
        height: 630,
        alt: 'Wind Damage Claims - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const processSteps = [
  {
    number: '1',
    title: 'Free Wind Damage Inspection & Safety Check',
    description: 'After a storm, we start with a no-obligation inspection of your roof, siding, gutters, and attic.',
    features: [
      'Roof (all slopes, ridges, and valleys)',
      'Siding, soffits, fascia, and trim',
      'Gutters, downspouts, and soft metals',
      'Attic inspection for water intrusion',
      'Immediate tarping or temporary repairs if needed',
    ],
  },
  {
    number: '2',
    title: 'Photo Report, Measurements & Storm Verification',
    description: 'We build a wind damage evidence package that adjusters can easily evaluate.',
    features: [
      'Date-stamped photos of each damaged area',
      'Aerial or hand measurements of roof slopes',
      'Local storm data (wind speeds and gust reports)',
      'Notes on pre-existing vs. new storm damage',
      'Format familiar to adjusters',
    ],
  },
  {
    number: '3',
    title: 'Guided Claim Filing with Your Insurance Company',
    description: 'We help you file the claim correctly and understand your coverage.',
    features: [
      'Decide whether a claim is justified',
      'Contact your insurance carrier',
      'Provide clear description of wind event',
      'Understand deductible and coverage limits',
      'Navigate wind/hail riders',
    ],
  },
  {
    number: '4',
    title: 'Adjuster Meeting — We\'re On the Roof With Them',
    description: 'We meet the adjuster onsite to ensure they see all damage and code requirements.',
    features: [
      'Walk each slope and elevation together',
      'Point out creased tabs and lifted shingles',
      'Reference relevant building codes',
      'Ensure scope matches real-world conditions',
      'Help adjuster see exactly what we see',
    ],
  },
  {
    number: '5',
    title: 'Code-Compliant Scope Review (Minnesota & Wisconsin)',
    description: 'We review the estimate line by line and verify code compliance.',
    features: [
      'Minnesota Residential Code requirements',
      'Wisconsin wind pressure standards',
      'Ice & water barrier requirements',
      'Ventilation and underlayment codes',
      'Submit supplements with code citations',
    ],
  },
  {
    number: '6',
    title: 'Roof & Siding Replacement or Repair',
    description: 'With approval in place, we proceed with code-compliant installation.',
    features: [
      'Full roof replacement when warranted',
      'Slope-by-slope replacement when appropriate',
      'Targeted repairs when aligned with guidelines',
      'Manufacturer specifications',
      'Wind-resistance and proper nailing patterns',
    ],
  },
  {
    number: '7',
    title: 'Final Documentation, Depreciation Release & Warranty',
    description: 'We finalize all documentation and assist with depreciation release.',
    features: [
      'Completion photos',
      'Detailed invoice aligned with scope',
      'Assist with depreciation release paperwork',
      'Register manufacturer warranties',
      'Clear documentation for future reference',
    ],
  },
]

const commonSigns = [
  {
    category: 'Common Signs of Wind Damage on a Roof',
    icon: Home,
    items: [
      'Missing shingles or tabs – Torn completely off, exposing dark underlayment or bare nails',
      'Creased or lifted shingles – Sealant line broken; shingle tab flexed or folded back by wind',
      'Curling or buckling – Shingle edges raised, no longer sealing properly',
      'Exposed nails or fasteners – Uplift has pulled shingles enough to reveal nail heads',
      'Granule loss & bald spots – Granules stripped, weakening the shingle and reducing UV protection',
      'Damaged flashings & ridge caps – Wind lifts metal or shingles at hips, ridges, walls, or chimneys',
      'Loose or sagging gutters & fascia – Wind pressure at the eaves pulls gutter systems away',
    ],
  },
  {
    category: 'Wind Damage to Siding & Exterior',
    icon: Building2,
    items: [
      'Cracked or broken vinyl siding panels',
      'Sections blown off, especially at corners and gables',
      'Bent fascia, soffits, and trim metals',
      'Damaged roof vents, pipe jacks, or chimney caps',
    ],
  },
]

const whyChooseUs = [
  {
    icon: CloudRain,
    title: 'Storm Damage Experts',
    description: 'Specializing in wind, hail, and severe weather claims for 20+ years',
  },
  {
    icon: Shield,
    title: 'Insurance Claim Assistance',
    description: 'On-site reports, adjuster meetings, and scope verification',
  },
  {
    icon: Building2,
    title: 'Local Code Knowledge',
    description: 'Minnesota & Wisconsin roofing and exterior requirements built into every project',
  },
  {
    icon: Users,
    title: 'Residential, HOA & Light Commercial',
    description: 'Single-family homes, townhome associations, churches, small commercial buildings',
  },
  {
    icon: Award,
    title: 'Family-Operated & BBB Accredited',
    description: 'Not a storm-chaser; a long-term local partner',
  },
]

const faqs = [
  {
    question: 'Is one missing shingle enough to file a claim?',
    answer: 'Often, yes—especially if it indicates broader uplift or if water can penetrate. We\'ll inspect the whole roof to see whether a claim is appropriate or if a small out-of-pocket repair makes more sense.',
  },
  {
    question: 'Will my rates go up if I file a wind claim?',
    answer: 'Wind and hail are regional events. Rate adjustments usually impact whole areas, not just one homeowner. The bigger risk is not repairing legitimate damage and facing leaks later.',
  },
  {
    question: 'Do I have to use the contractor my insurance suggests?',
    answer: 'No. In both Minnesota and Wisconsin, you have the right to choose your contractor. Insurance cannot require you to use a specific company.',
  },
  {
    question: 'What if my claim is underpaid or denied?',
    answer: 'We can compare your denial or low estimate against photos, codes, and manufacturer guidelines. We help you understand your options (reinspection, supplements, or appeal) and provide additional documentation where justified.',
  },
  {
    question: 'How quickly should I act after a wind storm?',
    answer: 'Immediately. Consumer agencies advise contacting your insurer right away and making temporary repairs (like tarping) to prevent further damage—then keeping receipts.',
  },
]

export default function WindDamageClaimsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Wind Damage Claims"
        description="Roof & Siding Wind Damage Experts for Minnesota & Wisconsin Homeowners, HOAs & Commercial Properties"
        backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
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
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  High winds, straight-line gusts, and Midwest storms can tear shingles, crease tabs, bend metal, 
                  and rip siding loose—often in just a few minutes. In Minnesota and Wisconsin, these wind events 
                  are one of the most common reasons homeowners file roof and siding insurance claims.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Advanced Roofing & Siding is Minnesota's #1 roofer for insurance claims, providing 24/7 emergency 
                  repairs, on-site damage reports, and free storm damage inspections for wind, hail, and severe weather.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We understand how wind actually damages shingles, underlayment, flashing, and siding; what insurance 
                  adjusters look for when evaluating wind claims; Minnesota and Wisconsin building code requirements 
                  for re-roofing and wind resistance; and how to protect your home's long-term value—not just "patch" 
                  a storm. Our job is to make your wind damage insurance claim clear, documented, and handled correctly 
                  from start to finish.
                </p>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* How Wind Damages Your Roof & Siding */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="How Wind Damages Your Roof & Siding"
          description="Wind damage is not just 'missing shingles'—adjusters look for specific indicators"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {commonSigns.map((sign, index) => {
              const Icon = sign.icon
              return (
                <AnimatedDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full" variant="elevated">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                        <Icon className="h-6 w-6 text-brand-primary" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{sign.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {sign.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <Card className="bg-yellow-50 border-2 border-yellow-200">
              <p className="text-gray-700 font-semibold">
                Even a single missing or lifted shingle can allow water to penetrate and eventually leak into your 
                attic, insulation, and drywall.
              </p>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Does Homeowners Insurance Cover Wind Damage */}
      <Section className="bg-white">
        <SectionHeader
          title="Does Homeowners Insurance Cover Wind Damage?"
          description="Understanding your coverage and policy nuances"
        />
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  In most Minnesota and Wisconsin homeowner policies, wind is a covered peril. That means:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">Wind-blown or missing shingles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">Wind-torn siding or trim</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">Damage from flying debris or falling branches</span>
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  ...are typically covered when they are sudden and accidental, not caused by long-term neglect.
                </p>
                <div className="rounded-lg bg-red-50 p-6 border-2 border-red-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">However, there are nuances:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                      <span>Some policies now include higher wind/hail deductibles for the Midwest region.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                      <span>Certain policies may limit coverage to "functional damage" (leaks, punctures) rather than purely cosmetic issues—even when shingles are creased or lifted.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                      <span>Carriers evaluate whether wind damage affects more than 25% of a slope, which can justify full slope replacement versus a small repair.</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-6">
                  Advanced Roofing & Siding is here to interpret the technical side, help you document the damage 
                  thoroughly, and present a clear, code-based case to your insurer.
                </p>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* 7-Step Process */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Our Wind Damage Insurance Claim Process"
          description="A step-by-step system designed for Minnesota & Wisconsin storms"
        />
        <div className="mx-auto max-w-6xl">
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <AnimatedDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden" variant="elevated">
                  <div className="grid gap-6 md:grid-cols-4">
                    <div className="md:col-span-1">
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                          <span className="text-2xl font-bold text-brand-primary">{step.number}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <p className="mb-4 text-gray-700">{step.description}</p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {step.features.map((feature, featIndex) => (
                          <li key={featIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </Section>

      {/* Repair vs Replacement */}
      <Section className="bg-white">
        <SectionHeader
          title="Wind Damage: Repair vs. Full Replacement"
          description="Not every wind event leads to a full roof replacement—but under-scoping damage can be just as risky"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="h-full" variant="elevated">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-green-100">
                    <Hammer className="h-6 w-6 text-green-600" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">When a Repair May Be Appropriate</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
                    <span className="text-sm text-gray-600">Damage is limited to a very small, contained area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
                    <span className="text-sm text-gray-600">Shingles are still in production and can be properly matched</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
                    <span className="text-sm text-gray-600">The roof system is relatively young and otherwise in good condition</span>
                  </li>
                </ul>
              </Card>
            </AnimatedDiv>
            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="h-full" variant="elevated">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                    <Home className="h-6 w-6 text-brand-primary" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">When Replacement Is Often Justified</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-sm text-gray-600">Wind damage affects 25% or more of a slope, or multiple slopes show widespread creasing/loss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-sm text-gray-600">Shingle model or color is discontinued and cannot be reasonably matched</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-sm text-gray-600">Existing roof is near end-of-life; uplift and broken seals are widespread</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-sm text-gray-600">Manufacturer and code requirements cannot be met with "patch" repairs alone</span>
                  </li>
                </ul>
              </Card>
            </AnimatedDiv>
          </div>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <Card className="bg-blue-50 border-2 border-blue-200">
              <p className="text-gray-700 font-semibold">
                Advanced Roofing & Siding will recommend what is actually in your best interest long-term, and 
                we'll explain the reasoning in writing.
              </p>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Why Minnesota & Wisconsin Homeowners Trust Advanced Roofing & Siding"
          description="Storm damage experts with local expertise and proven track record"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason, index) => {
              const Icon = reason.icon
              return (
                <AnimatedDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center" variant="elevated">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                        <Icon className="h-7 w-7 text-brand-primary" strokeWidth={2} />
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{reason.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{reason.description}</p>
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
          title="Frequently Asked Questions About Wind Damage Claims"
          description="Common questions about wind damage and insurance claims"
        />
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedDiv
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card variant="outlined">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex-shrink-0">
                      <HelpCircle className="h-5 w-5 text-brand-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                        {faq.question}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white border-2 border-gray-200">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                  <Wind className="h-8 w-8 text-brand-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Schedule Your Free Wind Damage Inspection
                </h2>
                <p className="mb-6 text-lg text-gray-700 max-w-2xl mx-auto">
                  If you've noticed missing shingles, loose siding, or suspect wind damage after a recent storm, 
                  don't wait for leaks to show up.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg" className="group">
                      Schedule Free Inspection
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <a href="tel:763-427-3093">
                    <Button variant="outline" size="lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Call 763-427-3093
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
  )
}

