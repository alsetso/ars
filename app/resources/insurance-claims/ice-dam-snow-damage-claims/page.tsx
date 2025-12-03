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
  Snowflake,
  Home,
  Hammer,
  Award,
  ArrowRight,
  Eye,
  HelpCircle,
  CloudRain,
  Droplets,
  Thermometer,
  XCircle,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ice Dam & Snow Damage Claims - Winter Damage Experts | Minnesota & Wisconsin',
  description: 'Ice dam and snow damage insurance claim specialists for Minnesota & Wisconsin. 24/7 winter damage response, roof leaks, interior water damage, and full claim support.',
  keywords: ['ice dam claims', 'snow damage insurance', 'Minnesota ice dams', 'Wisconsin ice dams', 'winter damage claims', 'ice dam roof leaks', 'insurance claim assistance', 'snow damage roof', 'ice dam inspection'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/resources/insurance-claims/ice-dam-snow-damage-claims',
  },
  openGraph: {
    title: 'Ice Dam & Snow Damage Claims - Winter Damage Experts | Minnesota & Wisconsin',
    description: 'Ice dam and snow damage insurance claim specialists. 24/7 winter damage response, roof leaks, interior water damage, and full claim support.',
    url: 'https://advancedroofingmn.com/resources/insurance-claims/ice-dam-snow-damage-claims',
    images: [
      {
        url: 'https://advancedroofingmn.com/gallery/380156327_905711167698071_326976560032986429_n.webp',
        width: 1200,
        height: 630,
        alt: 'Ice Dam & Snow Damage Claims - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const processSteps = [
  {
    number: '1',
    title: 'Winter Damage Assessment & Emergency Mitigation',
    description: 'When you call Advanced Roofing & Siding, we perform a comprehensive inspection and recommend emergency steps.',
    features: [
      'Roof and attic inspection where safe and accessible',
      'Identify active leaks, saturated materials, and high-risk areas',
      'Recommend emergency steps (tarping, controlled snow removal)',
      'Advise on what to photograph and save',
      'Act quickly to prevent further damage',
    ],
  },
  {
    number: '2',
    title: 'Documentation for Your Ice Dam Insurance Claim',
    description: 'We create an evidence package tailored for adjusters that makes it easy to see the full picture.',
    features: [
      'Date-stamped photos of exterior and interior damage',
      'Roof and attic photos showing water path',
      'Notes on roof age, construction type, and code deficiencies',
      'Measurements and diagrams for affected areas',
      'Clear explanation of how the ice dam formed',
    ],
  },
  {
    number: '3',
    title: 'Guided Claim Filing with Your Carrier',
    description: 'You remain in control of your policy and claim. We help you navigate the process.',
    features: [
      'Help decide if damage rises to claim-worthy level',
      'Explain how ice dam/snow damage should be described',
      'Clarify deductible, coverage areas, and exclusions',
      'Encourage prompt filing and record keeping',
      'Understand your policy fully',
    ],
  },
  {
    number: '4',
    title: 'On-Site Adjuster Meeting',
    description: 'When your insurer sends an adjuster, we meet them at the property to ensure nothing is missed.',
    features: [
      'Meet adjuster at the property',
      'Walk through roof/attic and interior damage',
      'Point out code requirements for ice barriers',
      'Help distinguish current damage vs. pre-existing',
      'Ensure fair and full evaluation',
    ],
  },
  {
    number: '5',
    title: 'Scope Review & Code-Based Supplements',
    description: 'We review the estimate line by line and submit supplements when code requirements are missing.',
    features: [
      'Check for proper ice & water barrier coverage',
      'Verify adequate replacement of damaged decking',
      'Confirm correct underlayment and ventilation',
      'Review interior repairs matching real damage',
      'Submit supplements with code citations',
    ],
  },
  {
    number: '6',
    title: 'Repair, Replacement & Prevention-Focused Recommendations',
    description: 'After approval, we complete the work and provide preventive recommendations.',
    features: [
      'Roof repair or replacement with ice & water barrier',
      'Replacement of damaged decking, underlayment, shingles',
      'Interior repairs: drywall, texture, paint, trim, insulation',
      'Gutter, soffit, and fascia replacement as needed',
      'Preventive recommendations for long-term protection',
    ],
  },
]

const typicalDamage = [
  {
    category: 'Exterior & Roof',
    icon: Home,
    items: [
      'Water-backed up under shingles and into the roof deck',
      'Saturated or rotted sheathing along the eaves',
      'Damaged underlayment and ice & water barrier',
      'Broken gutters, downspouts, and fascia from ice weight',
      'Loosened soffit panels and trim',
    ],
  },
  {
    category: 'Interior',
    icon: Droplets,
    items: [
      'Water stains on ceilings and walls',
      'Peeling paint, cracked drywall, or bubbling texture',
      'Wet insulation in the attic or wall cavities',
      'Mold or mildew growth if not dried quickly',
      'Damaged built-ins, flooring, or trim near exterior walls',
    ],
  },
]

const coverageInfo = {
  covered: [
    'Water stains and damaged drywall/paint from ice dam leaks',
    'Damaged insulation, flooring, or cabinets caused by water intrusion',
    'Tear-out and replacement of building materials necessary to access and repair the leak',
    'Roof repairs/replacement where water has penetrated and materials are compromised',
  ],
  notCovered: [
    'Fixing the underlying cause of the ice dam (upgrading attic insulation)',
    'Improving ventilation or air sealing',
    'Long-term energy-efficiency improvements',
    'Damage due to ongoing neglect (e.g., long-term leaks left unaddressed)',
  ],
}

const whyChooseUs = [
  {
    icon: Snowflake,
    title: '24/7 Winter Damage Response',
    description: 'Immediate response to ice dam emergencies and winter damage',
  },
  {
    icon: Shield,
    title: 'Insurance Claim Assistance',
    description: 'Documentation tailored for adjusters and code-based repair scopes',
  },
  {
    icon: Building2,
    title: 'Local Code Knowledge',
    description: 'Minnesota & Wisconsin ice barrier and building code requirements',
  },
  {
    icon: Users,
    title: 'Residential, HOA & Commercial',
    description: 'Single-family homes, townhomes, HOAs, churches, and commercial buildings',
  },
  {
    icon: Award,
    title: 'Prevention-Focused',
    description: 'We don\'t just fix the damage—we help prevent future ice dams',
  },
]

const faqs = [
  {
    question: 'Do I need to remove the ice dam before filing a claim?',
    answer: 'No, but you should prevent further damage. That may mean roof snow removal, tarping, or professional ice dam steaming—documenting each step and keeping receipts. Your insurer cares that you mitigated additional loss.',
  },
  {
    question: 'Will insurance pay to fix my attic insulation and ventilation?',
    answer: 'Usually not. The resulting damage (ice dam leak, interior water damage) is often covered, but the underlying cause (insulation/ventilation) is typically considered a maintenance or improvement item. Still, we\'ll clearly separate the covered work from the recommended upgrades.',
  },
  {
    question: 'Is an ice dam considered "flood" damage?',
    answer: 'No. Ice dam leaks are generally treated as water damage from above and addressed under homeowners insurance, not flood insurance. Overland flooding and ground water seepage are separate and typically excluded without a flood policy.',
  },
  {
    question: 'How fast should I act after noticing a leak?',
    answer: 'Immediately. Both Minnesota and Wisconsin guidance say to contact your insurer right away, mitigate further damage, and keep detailed records.',
  },
  {
    question: 'What if my insurance company underpays or denies my ice dam claim?',
    answer: 'You have options: ask for a reinspection, provide additional documentation or contractor supplements, or escalate through your carrier\'s internal review process. In Wisconsin, you can contact OCI; in Minnesota, the Department of Commerce for help with claim disputes. Advanced Roofing & Siding can help you understand what\'s missing and what the next step should be.',
  },
]

export default function IceDamSnowDamageClaimsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Ice Dam & Snow Damage Claims"
        description="Minnesota & Wisconsin Ice Dams • Roof Leaks • Interior Water Damage • Insurance Claim Support"
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
                  Winters in Minnesota and Wisconsin are tough on homes. Deep snow, repeated freeze–thaw cycles, 
                  and below-zero temps turn minor roof vulnerabilities into ice dams, leaks, stained ceilings, and 
                  damaged insulation. Ice dams aren't just ugly—they can cause serious water intrusion, mold, and 
                  structural issues if they're not handled correctly.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Advanced Roofing & Siding helps homeowners, HOAs, and light commercial property owners across 
                  Minnesota and Western Wisconsin navigate ice dam and snow damage insurance claims from first drip 
                  to final check:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>24/7 winter damage response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Roof, attic, and interior inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Documentation tailored for adjusters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Code-based repair scopes for Minnesota & Wisconsin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Full roof and exterior replacement when warranted—not just cosmetic fixes</span>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700 mt-4">
                  Our goal is simple: stop the leak, document the loss, maximize what your policy owes you, and 
                  rebuild your home or building to code.
                </p>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* What Is an Ice Dam */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="What Is an Ice Dam (and Why It's an Insurance Problem)?"
          description="Understanding how ice dams form and why they cause damage"
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
                  An ice dam forms when heat from your home melts snow on the roof, the meltwater runs down to the 
                  cold eaves, and then refreezes at the edge. Over time, this creates a thick ridge of ice that traps 
                  water behind it. That standing water can back up under shingles and leak inside, damaging ceilings, 
                  walls, insulation, and sometimes flooring and cabinets.
                </p>
                <p className="text-gray-700 mb-4">Common contributing factors:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">Warm, leaky ceilings and poor air sealing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">Inadequate attic insulation or uneven insulation levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">Poor attic ventilation (hot attic, cold eaves)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">Complex roof designs, skylights, and recessed lights in the ceiling</span>
                  </li>
                </ul>
                <div className="rounded-lg bg-blue-50 border-2 border-blue-200 p-6">
                  <p className="text-gray-700 font-semibold">
                    From an insurance perspective, what matters is the resulting water damage and whether it was 
                    sudden, accidental, and properly mitigated—not whether your attic was perfectly insulated beforehand.
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Typical Damage */}
      <Section className="bg-white">
        <SectionHeader
          title="Typical Ice Dam & Snow Damage We See"
          description="Ice dams and heavy snow can create several layers of damage"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {typicalDamage.map((damage, index) => {
              const Icon = damage.icon
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
                      <h3 className="text-xl font-bold text-gray-900">{damage.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {damage.items.map((item, itemIndex) => (
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

      {/* Insurance Coverage */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Does Homeowners Insurance Cover Ice Dams & Snow Damage?"
          description="Understanding what's covered and what's not"
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
                    <CheckCircle className="h-6 w-6 text-green-600" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Usually Covered (when sudden & accidental)</h3>
                </div>
                <ul className="space-y-2">
                  {coverageInfo.covered.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
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
                    <XCircle className="h-6 w-6 text-red-600" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Often Not Covered</h3>
                </div>
                <ul className="space-y-2">
                  {coverageInfo.notCovered.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
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
              <p className="text-gray-700">
                Both Minnesota's Department of Commerce and Wisconsin's insurance regulator advise homeowners to 
                notify their insurer promptly after winter damage and to document everything—photos, dates, and 
                mitigation steps. Advanced Roofing & Siding helps you organize this documentation in a way adjusters understand.
              </p>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Building Codes */}
      <Section className="bg-white">
        <SectionHeader
          title="How Minnesota & Wisconsin Building Codes Treat Ice Dams"
          description="Both states have building code requirements designed to reduce the risk of ice dam leaks"
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                    <Building2 className="h-6 w-6 text-brand-primary" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Minnesota Residential Code</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Minnesota requires an ice barrier at the eaves of most heated buildings, typically consisting of either:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-sm text-gray-600">At least two layers of underlayment cemented together, or</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-sm text-gray-600">A self-adhering polymer-modified bitumen sheet ("ice & water shield")</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600">
                  This barrier must extend from the roof edge to a point no less than 24 inches inside the exterior 
                  wall line (often resulting in 6 feet of ice & water shield along eaves).
                </p>
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
                    <Building2 className="h-6 w-6 text-brand-primary" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Wisconsin Uniform Dwelling Code</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Wisconsin's code similarly requires ice dam protection at eaves:
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Ice dam protection must extend at least 30 inches up the roof slope from the roof edge and at 
                  least 12 inches beyond the interior wall line.
                </p>
                <p className="text-sm text-gray-600">
                  Many municipalities require ice & water barrier to extend from the eaves up 2 feet past the warm 
                  wall, and some low-slope roofs may require extended coverage.
                </p>
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
            <Card className="bg-yellow-50 border-2 border-yellow-200">
              <p className="text-gray-700 font-semibold">
                When we review an insurance scope, we don't just look at "how many shingles." We check that your 
                insurer's estimate includes code-required ice barrier, underlayment, and ventilation—and we submit 
                supplements when it doesn't.
              </p>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* 6-Step Process */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Our Ice Dam / Snow Damage Claim Process"
          description="From emergency mitigation to full, code-compliant restoration"
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

      {/* Special Considerations */}
      <Section className="bg-white">
        <SectionHeader
          title="Special Considerations for HOAs, Townhomes & Commercial Buildings"
          description="Ice dams and snow loads are a major issue on townhomes, rowhouses, and low-slope commercial roofs"
        />
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="elevated">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  We regularly work with HOA boards and property managers, churches and small commercial buildings, 
                  and mixed-use and multi-tenant properties.
                </p>
                <p className="text-gray-700 mb-4">Key points we help clarify:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>What's covered by the association's master policy vs. individual unit owners (HO-6 policies)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>How to coordinate common-area vs. interior claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Snow removal, roof access, and safety during winter mitigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Documentation suitable for board meetings and reserve planning</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">
                  Our role is to simplify the process, protect the building, and keep owners and residents informed.
                </p>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Why Minnesota & Wisconsin Homeowners Trust Advanced Roofing & Siding"
          description="Trusted winter damage & insurance claim experts"
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
          title="Ice Dam & Snow Damage Claim FAQ"
          description="Common questions about ice dam and snow damage insurance claims"
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
                  Other Storm Damage Resources
                </h2>
                <p className="text-lg text-gray-700">
                  Learn about other types of storm damage and insurance claims
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
                <Link href="/resources/insurance-claims/tree-damage">
                  <Button variant="outline" size="lg" className="group">
                    Tree Damage Claims
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/resources/insurance-claims/old-roof">
                  <Button variant="outline" size="lg" className="group">
                    Old Roof Claims
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
                  <Snowflake className="h-8 w-8 text-brand-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Schedule Your Ice Dam / Snow Damage Inspection
                </h2>
                <p className="mb-2 text-lg text-gray-700 max-w-2xl mx-auto">
                  If you've seen icicles, ice ridges along your eaves, or fresh ceiling stains after a winter storm, 
                  don't wait for things to get worse.
                </p>
                <p className="mb-6 text-base text-gray-600">
                  Advanced Roofing & Siding | Trusted Winter Damage & Insurance Claim Experts | Serving Minnesota & Western Wisconsin
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

