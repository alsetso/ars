import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { StormDamageBanner } from '@/components/sections/StormDamageBanner'
import { ClaimSubNav } from '@/components/sections/ClaimSubNav'
import {
  Shield,
  CheckCircle,
  AlertCircle,
  CloudRain,
  Home,
  Hammer,
  ArrowRight,
  Eye,
  HelpCircle,
  Phone,
  Building2,
  Award,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hail Damage Claims - Insurance Experts | Minnesota & Wisconsin',
  description: 'Trusted hail damage insurance claim specialists in Minnesota & Wisconsin. 20+ years experience, GAF Master Elite certified. Free inspections, adjuster representation, and full claim support.',
  keywords: ['hail damage claims', 'hail damage insurance', 'Minnesota hail damage', 'Wisconsin hail damage', 'hail damage roof', 'hail damage siding', 'insurance claim assistance', 'storm damage claims', 'hail damage inspection'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/resources/insurance-claims/hail-damage',
  },
  openGraph: {
    title: 'Hail Damage Claims - Insurance Experts | Minnesota & Wisconsin',
    description: 'Trusted hail damage insurance claim specialists. 20+ years experience, GAF Master Elite certified. Free inspections and adjuster representation.',
    url: 'https://advancedroofingmn.com/resources/insurance-claims/hail-damage',
    images: [
      {
        url: 'https://advancedroofingmn.com/gallery/380156327_905711167698071_326976560032986429_n.webp',
        width: 1200,
        height: 630,
        alt: 'Hail Damage Claims - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const processSteps = [
  {
    number: '1',
    title: 'Free Storm Damage Inspection',
    description: 'Our certified inspectors complete a thorough exterior evaluation, including roof, siding, gutters, windows, and soft metals.',
    features: [
      'High-resolution photos',
      'Drone imagery',
      'Aerial measurement reports',
      'Hail-impact mapping and storm-date verification',
      'Manufacturer-specific inspection standards',
    ],
  },
  {
    number: '2',
    title: 'Documentation & Storm Report Prep',
    description: 'Before you ever file a claim, we prepare everything insurers need upfront.',
    features: [
      'Full photo report',
      'Storm date verification',
      'Damage explanation in adjuster-friendly language',
      'Initial scope recommendations',
      'Code items required for replacement',
    ],
  },
  {
    number: '3',
    title: 'Filing the Insurance Claim (Guided Support)',
    description: 'We help you file the claim correctly the first time with all necessary information.',
    features: [
      'Your claim number',
      'Insurance adjuster contact',
      'Expected timeline',
      'What to expect during your adjuster meeting',
    ],
  },
  {
    number: '4',
    title: 'The Adjuster Meeting (We Attend For You)',
    description: 'This is where homeowners win or lose their claim. We meet the adjuster onsite to represent you.',
    features: [
      'Walk the property with adjuster',
      'Identify each damage point',
      'Ensure all elevations and slopes are examined',
      'Discuss code requirements',
      'Provide measurements, documentation, and storm data',
    ],
  },
  {
    number: '5',
    title: 'Approval & Scope Review',
    description: 'We verify every item in your approved scope and submit supplements when needed.',
    features: [
      'Material type verification',
      'Waste calculations',
      'Ice & water shield requirements',
      'Ventilation upgrades',
      'Code-required supplements',
    ],
  },
  {
    number: '6',
    title: 'Roof or Siding Replacement',
    description: 'Your project is installed by GAF-trained crews with manufacturer-approved installation.',
    features: [
      'Protection of landscaping',
      'Tear-off & disposal',
      'Installation to manufacturer specs',
      'Cleanup & magnet sweep',
      'Final inspection',
    ],
  },
  {
    number: '7',
    title: 'Final Invoice & RCV Documentation',
    description: 'We finalize all documentation and submit to insurance for remaining depreciation.',
    features: [
      'Completion photos',
      'Final invoice',
      'Warranty registration',
      'Code-required supplements',
      'Submission to insurance',
    ],
  },
]

const coveredItems = [
  {
    category: 'Roofing',
    items: [
      'Full replacement if 7–10+ hail hits in a test square',
      'Shingle, ridge cap, starter strip, underlayment',
      'Ice & water shield (MN code minimum)',
      'Flashing, vents, pipe boots',
      'Rotted decking replacement',
      'Tear-off & disposal',
    ],
  },
  {
    category: 'Siding',
    items: [
      'Hail-cracked panels',
      'Unmatched siding replacements (Minnesota has specific matching statutes)',
      'Full elevation replacement if discontinued materials',
      'Window trim, wraps, J-channel',
    ],
  },
  {
    category: 'Gutters & Exterior Metals',
    items: [
      'Dented gutters/downspouts',
      'Damaged fascia/soffits',
      'Bent chimney or roof metals',
    ],
  },
  {
    category: 'Interior Damage (When Caused by Storm)',
    items: [
      'Water stains',
      'Ceiling drywall',
      'Insulation',
      'Paint',
    ],
  },
]

const whyChooseUs = [
  {
    icon: Building2,
    title: '20+ Year Local Company',
    description: 'Founded in 2001, serving Twin Cities, Anoka County, Hennepin County, and western Wisconsin with long-term teams—not temporary storm teams.',
  },
  {
    icon: Award,
    title: 'GAF Master Elite® Certification',
    description: 'Only 2% of contractors nationwide. Better warranties, better documentation, better installation.',
  },
  {
    icon: Shield,
    title: 'Accurate Claims Backed by Real Financial Strength',
    description: '$3.2M–$4.5M in annual roofing and siding work. We\'re reliable, honor warranties, and maintain strict standards.',
  },
  {
    icon: Users,
    title: 'Experienced Insurance Specialists',
    description: 'We understand adjuster guidelines, Xactimate pricing, code requirements, and how to fight for a fair and complete claim.',
  },
  {
    icon: CheckCircle,
    title: 'Honest, Non-Pushy Approach',
    description: 'We do not waive deductibles, inflate claims, or pressure homeowners. We protect your home, your policy, and your long-term value.',
  },
]

const signsOfDamage = [
  {
    category: 'On Your Roof',
    icon: Home,
    items: [
      'Bruising or soft spots',
      'Missing granules exposing asphalt',
      'Shingle fractures',
      'Lifted shingles or broken seals',
      'Impact-marks on vents, caps, or flashings',
    ],
  },
  {
    category: 'On Your Siding',
    icon: Building2,
    items: [
      'Cracks, chips, or breaks',
      'Denting on soft metals',
      'Warping from impact',
    ],
  },
  {
    category: 'On Your Property',
    icon: Eye,
    items: [
      'Damaged deck rails, AC unit fins, screens',
      'Granules in downspouts',
      'Impact marks on gutters',
      'Mulch displacement from hail impact',
    ],
  },
]

const faqs = [
  {
    question: 'Do I need to file a claim immediately?',
    answer: 'Yes. Most insurers require prompt reporting, and storm data is timestamped—delaying can hurt your claim.',
  },
  {
    question: 'Will my insurance rates go up?',
    answer: 'Hail is a no-fault event. Rate increases affect entire regions, not individuals.',
  },
  {
    question: 'Do I have to use the contractor my insurance recommends?',
    answer: 'No. You choose your contractor. Insurance cannot steer you.',
  },
  {
    question: 'How long do I have to file?',
    answer: 'Typically 1 year from the storm date, depending on your carrier.',
  },
  {
    question: 'Can you help with denied or underpaid claims?',
    answer: 'Yes. We can review the adjuster report, compare it to real damage, and submit documented supplements.',
  },
]

export default function HailDamageClaimsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Hail Damage Claims"
        description="Minnesota & Wisconsin's Trusted Experts for Insurance-Driven Roof, Siding & Exterior Restoration"
        backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
      />

      <StormDamageBanner variant="bar" />
      <ClaimSubNav current="/resources/insurance-claims/hail-damage" />

      {/* Introduction */}
      <Section className="bg-white pb-0">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">Hail Damage Claims</p>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
              Minnesota & Wisconsin Hail Damage — What You Need to Know
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-gray-700 md:text-base">
              Hailstorms across <Link href="/service-areas/minnesota" className="font-semibold text-brand-primary hover:underline">Minnesota</Link> and{' '}
              <Link href="/service-areas/wisconsin" className="font-semibold text-brand-primary hover:underline">Wisconsin</Link> can hit with almost no warning—leaving{' '}
              <Link href="/services/roofing" className="font-semibold text-brand-primary hover:underline">roofs</Link> bruised,{' '}
              <Link href="/services/siding" className="font-semibold text-brand-primary hover:underline">siding</Link> cracked, and{' '}
              <Link href="/services/gutters" className="font-semibold text-brand-primary hover:underline">gutters</Link> dented.
              For 30+ years, Advanced Roofing & Siding has helped thousands of families navigate hail damage insurance claims the right way—
              documented, code-compliant, and backed by our{' '}
              <Link href="/resources/gaf-master-elite-contractor" className="font-semibold text-brand-primary hover:underline">GAF Master Elite® certification</Link>.
            </p>
            <p className="text-sm leading-relaxed text-gray-600 md:text-base">
              We understand the exact metrics adjusters use, the building codes required, and the documentation insurers expect—guiding you from
              inspection to final payment with no shortcuts and no storm-chaser tactics.
            </p>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Why Hail Damage Matters */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Why Hail Damage Matters (Even if You Can't See It)"
          description="Hail damage is often invisible from the ground but can cause serious long-term problems"
        />
        <div className="mx-auto max-w-6xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Hail damage is often invisible from the ground. Granule loss, mat fractures, bruising, and 
                  protective-layer displacement weaken shingles and dramatically shorten roof life. Insurers classify 
                  hail as a "sudden and accidental loss," meaning it is generally covered—but only when properly 
                  documented and verified against the storm date.
                </p>
                <p className="text-gray-700 mb-4">
                  In Minnesota and Wisconsin, hailstones commonly range from 1" to 2.5"+, strong enough to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Fracture asphalt shingle mats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Break seal strips (causing future blow-offs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Damage vents, flashings, gutters, downspouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Crack siding panels, soffits, fascia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Void manufacturer warranties if not promptly repaired</span>
                  </li>
                </ul>
                <div className="mt-6 rounded-lg bg-yellow-50 border-2 border-yellow-200 p-6">
                  <p className="text-gray-700 font-semibold">
                    If left untreated, small hail impacts turn into major leaks—something insurers aim to prevent with timely replacement.
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Claim Process — compact numbered list */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">Our Process</p>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Hail Damage Claim Process — Step by Step
            </h2>
          </AnimatedDiv>
          <div className="space-y-3">
            {processSteps.map((step, i) => (
              <AnimatedDiv
                key={step.number}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
                  {step.number}
                </div>
                <div className="min-w-0">
                  <h3 className="mb-0.5 text-sm font-bold text-gray-900 md:text-base">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-600 md:text-sm">{step.description}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </Section>

      {/* What Insurance Covers */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="What Insurance Typically Covers After Hail"
          description="Insurance is designed to restore your home to pre-storm condition"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {coveredItems.map((category, index) => {
              const Icon = category.category === 'Roofing' ? Home : 
                          category.category === 'Siding' ? Building2 :
                          category.category === 'Gutters & Exterior Metals' ? Hammer : Shield
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
                      <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Signs of Hail Damage */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Signs of Hail Damage (What We Look For)"
          description="If you notice any of these, call immediately"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {signsOfDamage.map((sign, index) => {
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
                      <h3 className="text-lg font-bold text-gray-900">{sign.category}</h3>
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
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white">
        <SectionHeader
          title="FAQ: Hail Damage Claims in Minnesota & Wisconsin"
          description="Common questions about the hail damage claim process"
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

      {/* Closing CTA + related links */}
      <Section className="bg-brand-secondary">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedDiv
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CloudRain className="mx-auto mb-4 h-10 w-10 text-brand-primary" strokeWidth={1.5} />
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Get a Free Hail Damage Inspection — 48-Hour Guarantee
            </h2>
            <p className="mb-6 text-sm text-white/70 md:text-base">
              GAF Master Elite® · 30+ Years in MN & WI · Insurance Claim Specialists
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-primary-dark">
                  <ArrowRight className="h-4 w-4" />
                  Schedule Free Inspection
                </button>
              </Link>
              <a href="tel:763-427-3093" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-white/40">
                <Phone className="h-4 w-4" />
                763-427-3093
              </a>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">Other Damage Type Guides</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { label: '💨 Wind Damage', href: '/resources/insurance-claims/wind-damage' },
                  { label: '❄️ Ice Dam & Snow', href: '/resources/insurance-claims/ice-dam-snow-damage-claims' },
                  { label: '🌳 Tree Damage', href: '/resources/insurance-claims/tree-damage' },
                  { label: '🏠 Old Roof Claims', href: '/resources/insurance-claims/old-roof' },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/70 transition hover:border-white/30 hover:text-white">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
  )
}

