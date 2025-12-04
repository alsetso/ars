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
  Home,
  Award,
  ArrowRight,
  HelpCircle,
  CloudRain,
  TrendingDown,
  Clock,
  Thermometer,
  Wind,
  Snowflake,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Old Roof Insurance Claims - Age & Depreciation Guide | Minnesota & Wisconsin',
  description: 'Understanding old roof insurance claims, depreciation, RCV vs ACV policies, and how roof age affects coverage in Minnesota & Wisconsin. Expert guidance for homeowners.',
  keywords: ['old roof insurance claim', 'roof age insurance', 'depreciation roof claim', 'RCV vs ACV roof', 'Minnesota old roof', 'Wisconsin old roof', 'brittle test roof', 'roof depreciation', 'aged roof insurance'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/resources/insurance-claims/old-roof',
  },
  openGraph: {
    title: 'Old Roof Insurance Claims - Age & Depreciation Guide',
    description: 'Understanding old roof insurance claims, depreciation, RCV vs ACV policies, and how roof age affects coverage in Minnesota & Wisconsin.',
    url: 'https://advancedroofingmn.com/resources/insurance-claims/old-roof',
    images: [
      {
        url: 'https://advancedroofingmn.com/gallery/380156327_905711167698071_326976560032986429_n.webp',
        width: 1200,
        height: 630,
        alt: 'Old Roof Insurance Claims - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const keyPoints = [
  {
    icon: Shield,
    title: 'Roof Age Is a Major Factor — But NOT the Only Factor',
    description: 'Insurance carriers consider roof age when determining coverage type, depreciation, repairability, and expected life remaining. BUT age alone does NOT disqualify a claim.',
    details: [
      'If storm damage exists → roof can be covered',
      'If NO storm damage exists → insurance will not cover age-related wear',
    ],
  },
  {
    icon: FileText,
    title: 'Two Types of Policies Matter Most',
    description: 'Understanding RCV vs ACV is crucial for old roof claims.',
    details: [
      'RCV (Replacement Cost Value): Insurance pays for full replacement minus deductible. Roof age does NOT matter.',
      'ACV (Actual Cash Value): Insurance pays only depreciated value. Old roofs get HIGH depreciation.',
    ],
  },
  {
    icon: TrendingDown,
    title: 'Depreciation Is the #1 Factor for Old Roof Claims',
    description: 'Older roofs = bigger depreciation. This is why homeowners think "insurance denied my old roof" but in reality, insurance DID approve the claim—the payout was just small because of depreciation.',
    details: [
      '15-year-old roof: ~40–50% depreciation',
      '20-year-old roof: ~60–70% depreciation',
      '25-year-old roof: often >80% depreciation',
    ],
  },
  {
    icon: AlertCircle,
    title: 'Insurance NEVER Covers Age-Related Wear',
    description: 'These are NOT covered: granule loss from age, UV deterioration, brittle shingles, general wear and tear, cracking due to heat cycles, curling or cupping, normal life expectancy end.',
    details: [
      'Insurance only covers sudden, accidental damage',
      'Age-related deterioration is considered maintenance',
    ],
  },
  {
    icon: Home,
    title: 'The Brittle Test — A KEY Approval Tool for Old Roofs',
    description: 'Industry recognized method: Inspector lifts a shingle gently. If it cracks → it is deemed "unrepairable" and insurance must replace full slope or full roof.',
    details: [
      'Particularly common with 15+ year-old shingles',
      'If shingles cannot be repaired without further damage, repair is impossible',
    ],
  },
  {
    icon: Thermometer,
    title: 'Minnesota & Wisconsin Weather Accelerates Roof Aging',
    description: 'Roofs age faster in MN/WI than in warmer climates. This MATTERS in insurance claims.',
    details: [
      'Freeze-thaw cycles',
      'Snow loads',
      'Ice dams',
      'Summer heat expansion',
      'Hail impacts',
      'High winds in spring/fall',
    ],
  },
  {
    icon: Wind,
    title: 'Old Roofs Are More Easily Damaged by Storms',
    description: 'Old shingles lose granules faster, crease at lower wind speeds, crack when lifted, bruise easily from hail, and lose seal strips. This is why old roofs often DO qualify for full replacement after storms.',
    details: [
      'Carriers know old roofs are more vulnerable',
      'Storm damage on old roofs often justifies full replacement',
    ],
  },
  {
    icon: Building2,
    title: 'Repairability Doctrine',
    description: 'If a roof cannot be repaired without damaging surrounding shingles → replacement is required. This is supported by manufacturer guidelines and general insurance claims handling standards.',
    details: [
      'Manufacturer guidelines support replacement when repair damages surrounding shingles',
      'MN Matching Law often extended to roofing scope arguments',
    ],
  },
  {
    icon: Clock,
    title: 'Manufacturers\' Lifespans Matter in Claims',
    description: 'Insurance uses these estimates loosely to calculate depreciation.',
    details: [
      '3-tab shingles → 15–25 years',
      'Architectural shingles → 25–35 years',
      'Metal → 40–70 years',
      'Cedar → 20–30 years',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Old Roof Claims Are Frequently Approved',
    description: 'Homeowners believe "My roof is too old for insurance." This is false. Correct version: "My roof is too old to get a big payout unless damage is severe, because depreciation is high. But storm damage is still covered."',
    details: [
      'Storm damage on old roofs is still covered',
      'The payout may be smaller due to depreciation',
      'Severe damage can still result in full replacement',
    ],
  },
]

const depreciationRanges = [
  {
    age: '15-year-old roof',
    depreciation: '~40–50%',
    color: 'from-yellow-50 to-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    age: '20-year-old roof',
    depreciation: '~60–70%',
    color: 'from-orange-50 to-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    age: '25-year-old roof',
    depreciation: 'often >80%',
    color: 'from-red-50 to-red-100',
    iconColor: 'text-red-600',
  },
]

const policyTypes = [
  {
    type: 'RCV',
    name: 'Replacement Cost Value',
    description: 'Most homeowner policies',
    features: [
      'Insurance pays for full replacement minus deductible',
      'Roof age does NOT matter',
      'Carrier pays RCV total after depreciation is recovered',
      'Most Minnesota homeowners still carry RCV',
    ],
    icon: CheckCircle,
    color: 'from-green-50 to-green-100',
  },
  {
    type: 'ACV',
    name: 'Actual Cash Value',
    description: 'More common for old roofs',
    features: [
      'Insurance pays only the depreciated value',
      'Old roofs get HIGH depreciation',
      'Homeowner pays the rest out-of-pocket',
      'Many insurers switch old roofs to ACV automatically after ~15–20 years',
    ],
    icon: AlertCircle,
    color: 'from-orange-50 to-orange-100',
  },
]

const notCovered = [
  'Granule loss from age',
  'UV deterioration',
  'Brittle shingles',
  'General wear and tear',
  'Cracking due to heat cycles',
  'Curling or cupping',
  'Normal life expectancy end',
]

const manufacturerLifespans = [
  {
    material: '3-tab shingles',
    lifespan: '15–25 years',
    icon: Home,
  },
  {
    material: 'Architectural shingles',
    lifespan: '25–35 years',
    icon: Building2,
  },
  {
    material: 'Metal',
    lifespan: '40–70 years',
    icon: Shield,
  },
  {
    material: 'Cedar',
    lifespan: '20–30 years',
    icon: Award,
  },
]

const faqs = [
  {
    question: 'Will insurance cover my old roof?',
    answer: 'Yes, if there is storm damage. Age alone does not disqualify a claim. However, older roofs receive higher depreciation, which means smaller payouts unless the damage is severe. Storm damage on old roofs is still covered under most policies.',
  },
  {
    question: 'What is the difference between RCV and ACV?',
    answer: 'RCV (Replacement Cost Value) pays for full replacement minus deductible, regardless of roof age. ACV (Actual Cash Value) pays only the depreciated value, meaning older roofs receive much smaller payouts. Many insurers automatically switch roofs to ACV after 15–20 years.',
  },
  {
    question: 'How much depreciation will my old roof have?',
    answer: 'Depreciation increases with roof age: 15-year-old roofs typically see 40–50% depreciation, 20-year-old roofs see 60–70%, and 25-year-old roofs often see over 80% depreciation. The actual amount depends on your policy and the specific circumstances.',
  },
  {
    question: 'What is the brittle test?',
    answer: 'The brittle test is an industry-recognized method where an inspector gently lifts a shingle. If it cracks, the roof is deemed "unrepairable" and insurance must replace the full slope or full roof. This is particularly common with 15+ year-old shingles.',
  },
  {
    question: 'Why do old roofs get approved for replacement after storms?',
    answer: 'Old roofs are more easily damaged by storms—they lose granules faster, crease at lower wind speeds, crack when lifted, and bruise easily from hail. Insurance carriers know this, which is why old roofs often DO qualify for full replacement after storms.',
  },
  {
    question: 'Does Minnesota and Wisconsin weather affect roof aging?',
    answer: 'Yes. Freeze-thaw cycles, snow loads, ice dams, summer heat expansion, hail impacts, and high winds accelerate roof aging in Minnesota and Wisconsin compared to warmer climates. This is a recognized factor in insurance claims.',
  },
]

export default function OldRoofPage() {
  return (
    <PageLayout>
      <PageHero
        title="Old Roof Insurance Claims"
        description="Understanding how roof age affects insurance coverage, depreciation, and claims in Minnesota & Wisconsin"
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
                  Understanding how roof age affects insurance coverage is crucial for Minnesota and Wisconsin homeowners. 
                  Many homeowners believe their roof is "too old" for insurance coverage, but this is a common 
                  misconception. The reality is more nuanced—roof age affects depreciation and payout amounts, but 
                  storm damage on old roofs is still covered.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Advanced Roofing & Siding helps homeowners navigate old roof insurance claims, understand depreciation, 
                  and maximize their coverage. We work with both <Link href="/who-we-serve/residential" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">residential</Link> and <Link href="/who-we-serve/commercial" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">commercial</Link> property owners across 
                  <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2"> Minnesota and Wisconsin</Link> to ensure they receive fair treatment from insurance carriers.
                </p>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Key Points Grid */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Industry Standard Knowledge About Old Roofs & Insurance"
          description="10 essential facts every homeowner should know"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {keyPoints.map((point, index) => {
              const Icon = point.icon
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
                      <h3 className="text-lg font-bold text-gray-900">{point.title}</h3>
                    </div>
                    <p className="mb-4 text-gray-700">{point.description}</p>
                    <ul className="space-y-2">
                      {point.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                          <span className="text-sm text-gray-600">{detail}</span>
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

      {/* RCV vs ACV */}
      <Section className="bg-white">
        <SectionHeader
          title="Two Types of Policies Matter Most"
          description="Understanding RCV vs ACV is crucial for old roof claims"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {policyTypes.map((policy, index) => {
              const Icon = policy.icon
              return (
                <AnimatedDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className={`h-full bg-gradient-to-br ${policy.color} border-2`} variant="elevated">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm">
                        <span className="text-2xl font-bold text-gray-900">{policy.type}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{policy.name}</h3>
                        <p className="text-sm text-gray-600">{policy.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {policy.features.map((feature, featIndex) => (
                        <li key={featIndex} className="flex items-start gap-2">
                          <Icon className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
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

      {/* Depreciation Ranges */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Depreciation Is the #1 Factor for Old Roof Claims"
          description="Industry standard depreciation ranges by roof age"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {depreciationRanges.map((range, index) => (
              <AnimatedDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className={`h-full bg-gradient-to-br ${range.color} border-2`} variant="elevated">
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                        <TrendingDown className={`h-8 w-8 ${range.iconColor}`} strokeWidth={2} />
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{range.age}</h3>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{range.depreciation}</p>
                    <p className="text-sm text-gray-600">depreciation</p>
                  </div>
                </Card>
              </AnimatedDiv>
            ))}
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
                This is why homeowners think "insurance denied my old roof" but in reality: Insurance DID approve 
                the claim—the payout was just small because of depreciation.
              </p>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* What's Not Covered */}
      <Section className="bg-white">
        <SectionHeader
          title="Insurance NEVER Covers Age-Related Wear"
          description="Understanding what is and isn't covered"
        />
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="elevated">
              <div className="mb-4 flex items-center gap-3">
                <AlertCircle className="h-8 w-8 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">These Are NOT Covered</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {notCovered.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-blue-50 border-2 border-blue-200 p-4">
                <p className="text-gray-700 font-semibold">
                  Insurance only covers sudden, accidental damage (industry standard). Age-related deterioration is 
                  considered maintenance and is not covered.
                </p>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Manufacturer Lifespans */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Manufacturers' Lifespans Matter in Claims"
          description="Insurance uses these estimates to calculate depreciation"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {manufacturerLifespans.map((material, index) => {
              const Icon = material.icon
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
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{material.material}</h3>
                    <p className="text-2xl font-bold text-brand-primary">{material.lifespan}</p>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Common Misconception */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200">
              <div className="text-center">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                  Common Misconception vs. Reality
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-white p-6 border-2 border-red-200">
                    <div className="mb-3 flex items-center justify-center gap-2">
                      <AlertCircle className="h-6 w-6 text-red-600" />
                      <h3 className="text-lg font-bold text-gray-900">What Homeowners Believe</h3>
                    </div>
                    <p className="text-gray-700 font-semibold italic">
                      "My roof is too old for insurance."
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-6 border-2 border-green-200">
                    <div className="mb-3 flex items-center justify-center gap-2">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-bold text-gray-900">The Reality</h3>
                    </div>
                    <p className="text-gray-700 font-semibold">
                      "My roof is too old to get a big payout unless damage is severe, because depreciation is high. 
                      But storm damage is still covered."
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Frequently Asked Questions About Old Roof Insurance Claims"
          description="Common questions about roof age, depreciation, and coverage"
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

      {/* Related Resources */}
      <Section className="bg-white">
        <div className="mx-auto max-w-6xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200">
              <div className="text-center mb-6">
                <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                  Related Storm Damage Resources
                </h2>
                <p className="text-lg text-gray-700">
                  Learn about specific types of storm damage and insurance claims
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/resources/insurance-claims/hail-damage">
                  <Button variant="outline" size="lg" className="group">
                    Hail Damage Claims
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/resources/insurance-claims/wind-damage">
                  <Button variant="outline" size="lg" className="group">
                    Wind Damage Claims
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/resources/insurance-claims/ice-dam-snow-damage-claims">
                  <Button variant="outline" size="lg" className="group">
                    Ice Dam & Snow Damage
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/resources/insurance-claims/tree-damage">
                  <Button variant="outline" size="lg" className="group">
                    Tree Damage Claims
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Card>
          </AnimatedDiv>
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
                  <Home className="h-8 w-8 text-brand-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Have Questions About Your Old Roof Claim?
                </h2>
                <p className="mb-6 text-lg text-gray-700 max-w-2xl mx-auto">
                  Don't assume your old roof isn't covered. Contact us for a free inspection and expert guidance on 
                  navigating your insurance claim, understanding depreciation, and maximizing your coverage.
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


