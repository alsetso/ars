import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { FAQSchema } from '@/components/seo/FAQSchema'
import {
  Shield,
  CheckCircle,
  AlertCircle,
  FileText,
  Users,
  Building2,
  Phone,
  Calendar,
  TreePine,
  Home,
  Hammer,
  Award,
  ArrowRight,
  Eye,
  HelpCircle,
  CloudRain,
  Droplets,
  Wrench,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tree Impact Roofing Claims | Advanced Roofing & Siding',
  description: 'Tree fell on your roof? We handle tree-impact insurance claims, emergency tarping, inspections, and full roof replacement in Minnesota & Wisconsin.',
  keywords: ['tree damage roof insurance claim', 'storm tree impact repair Minnesota', 'tree fell on roof insurance', 'Wisconsin tree damage claims', 'roof replacement after tree impact', 'roof deck damage', 'emergency tarping Minnesota', 'Minnesota matching law roofing', 'wind storm tree damage', 'structural roof damage insurance'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/resources/insurance-claims/tree-damage',
  },
  openGraph: {
    title: 'Tree-Impact Damage Insurance Claims | Advanced Roofing & Siding',
    description: 'Expert tree-impact inspection, documentation, and insurance-claim assistance for Minnesota & Wisconsin homes, HOAs, and commercial buildings.',
    url: 'https://advancedroofingmn.com/resources/insurance-claims/tree-damage',
    images: [
      {
        url: 'https://advancedroofingmn.com/gallery/380156327_905711167698071_326976560032986429_n.webp',
        width: 1200,
        height: 630,
        alt: 'Tree Impact Damage Claims - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const processSteps = [
  {
    number: '1',
    title: 'Emergency Response & Property Stabilization',
    description: 'We coordinate immediate stabilization to prevent further damage.',
    features: [
      'Tarping of exposed roof areas',
      'Securing unsafe structures',
      'Coordinated tree removal through licensed partners',
      'Moisture mitigation steps',
      'Documentation protects you during the claim',
    ],
  },
  {
    number: '2',
    title: 'Full Structural Inspection',
    description: 'Our certified experts evaluate all aspects of the damage.',
    features: [
      'Decking failure assessment',
      'Truss or rafter damage evaluation',
      'Shingle, underlayment, and membrane impacts',
      'Siding, soffits, fascia, and gutters',
      'AC units, skylights, chimneys, and vents',
    ],
  },
  {
    number: '3',
    title: 'Documentation for Insurance',
    description: 'We prepare comprehensive evidence packages for adjusters.',
    features: [
      'Structural assessment reports',
      'Impact-point photography',
      'Measurements & diagrams',
      'Moisture intrusion photos',
      'Code-requirement documentation',
    ],
  },
  {
    number: '4',
    title: 'Adjuster Coordination',
    description: 'We meet the insurance adjuster onsite to ensure complete evaluation.',
    features: [
      'Walk impact points together',
      'Advocate for full structural replacement where required',
      'Provide code citations for decking, ice barriers, ventilation',
      'Ensure the scope is complete—not minimized',
      'Professional representation of your interests',
    ],
  },
  {
    number: '5',
    title: 'Scope Review & Supplementation',
    description: 'We verify every item and submit supplements when needed.',
    features: [
      'Material matching compliance',
      'Code-driven replacement requirements',
      'Full roof slope replacement verification',
      'Structural repair requirements per municipality',
      'Submit supplements for missing required items',
    ],
  },
  {
    number: '6',
    title: 'Full Reconstruction',
    description: 'We rebuild to Minnesota & Wisconsin code—not insurer shortcuts.',
    features: [
      'Decking rebuild and truss repair',
      'Full roof replacement',
      'Siding elevation replacement',
      'Gutter & fascia replacement',
      'Interior drywall & insulation repair',
    ],
  },
]

const damageTypes = [
  {
    category: 'Roof Structural Damage',
    icon: Home,
    items: [
      'Broken rafters or trusses',
      'Collapsed decking or sheathing',
      'Compromised ridge boards',
      'Shingle loss, punctures, and crushed architectural shingles',
      'Damage to metal roofs, bent ribs, torn fasteners',
      'TPO/EPDM membrane tears on commercial roofs',
    ],
  },
  {
    category: 'Underlayment & Barrier Compromise',
    icon: Shield,
    items: [
      'Ice & water shield punctures',
      'Synthetic underlayment tearing',
      'Moisture intrusion from broken layers',
      'Minnesota code requires ice & water shield to extend 24" inside the warm wall line',
      'Impacted eave areas often necessitate full tear-off and replacement',
    ],
  },
  {
    category: 'Siding, Fascia & Soffit Damage',
    icon: Building2,
    items: [
      'Cracked vinyl siding',
      'Dented aluminum or steel siding',
      'Broken soffits allowing animals/moisture into the attic',
      'Fascia board crush damage',
      'Minnesota\'s matching statute (72A.201) requires like-kind replacements',
    ],
  },
  {
    category: 'Interior & Attic Damage',
    icon: Droplets,
    items: [
      'Wet insulation',
      'Broken drywall',
      'Water trails into walls and ceilings',
      'Mold concern in prolonged exposures',
      'Tree impacts create both wind uplift and blunt force trauma',
    ],
  },
]

const coverageInfo = {
  covered: [
    'Damage caused by a tree hitting your house',
    'Roof replacement for fractured deck areas',
    'Siding replacement for direct impact damage',
    'Water intrusion resulting from the impact',
    'Interior repairs caused by storm-created openings',
  ],
  notCovered: [
    'Tree removal not affecting a structure',
    'Damage caused by a pre-existing condition',
    'Landscaping repairs',
  ],
}

const whyChooseUs = [
  {
    icon: Zap,
    title: 'Emergency Response',
    description: 'Same-day stabilization and emergency tarping to protect your property',
  },
  {
    icon: Shield,
    title: 'Insurance Claim Specialists',
    description: 'Expert documentation and adjuster coordination for complete claims',
  },
  {
    icon: Building2,
    title: 'Code Compliance',
    description: 'Minnesota & Wisconsin building standards, including matching law requirements',
  },
  {
    icon: Users,
    title: 'Residential, HOA & Commercial',
    description: 'Single-family homes, townhome communities, HOAs, and commercial buildings',
  },
  {
    icon: Award,
    title: 'Full Structural Assessment',
    description: 'We evaluate hidden damage, not just visible impact points',
  },
]

const faqs = [
  {
    question: 'Does homeowners insurance cover a tree falling on my roof?',
    answer: 'Yes. In Minnesota & Wisconsin, tree impact is typically considered a sudden and accidental direct physical loss, meaning roof, siding, and structural damage are usually covered.',
  },
  {
    question: 'Will insurance pay to remove the tree?',
    answer: 'If the tree hit a structure, insurers generally cover reasonable removal costs needed to access damaged areas. If it fell in the yard only, coverage may be limited.',
  },
  {
    question: 'Do I need to tarp my roof before insurance arrives?',
    answer: 'Yes. Homeowners are obligated to prevent further damage. Emergency tarping is almost always reimbursable.',
  },
  {
    question: 'Can insurance deny partial repairs if materials don\'t match?',
    answer: 'Minnesota\'s matching law (Statute 72A.201) may require insurers to replace non-matching materials across a full elevation or roof slope.',
  },
  {
    question: 'How fast should repairs be made after a tree falls?',
    answer: 'Immediately. Structural damage exposes the home to water, mold, pests, and collapse risks. We stabilize your home same-day.',
  },
]

export default function TreeDamagePage() {
  return (
    <PageLayout>
      <PageHero
        title="Tree-Impact Damage Insurance Claims"
        description="When Fallen Trees Damage Your Roof or Siding, Advanced Roofing & Siding Helps You Navigate Insurance—Fast, Accurately, and to Code"
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
                  Tree-impact damage is one of the most severe types of property loss homeowners face in Minnesota 
                  and Wisconsin. Heavy winds, saturated soils, freeze–thaw cycles, derechos, and tornadic activity 
                  regularly send trees and large branches crashing onto roofs, garages, siding, decks, fences, and 
                  outbuildings.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Beyond the visible impact, tree damage often compromises the structural integrity of the roofing 
                  system, underlayment, deck sheathing, trusses, and ventilation pathways—requiring immediate 
                  stabilization and a precise insurance claim process.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Advanced Roofing & Siding specializes in tree-impact storm restoration for <Link href="/who-we-serve/residential" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">residential homes</Link>, 
                  townhome communities, <Link href="/who-we-serve/hoa" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">HOAs</Link>, and <Link href="/who-we-serve/commercial" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">light commercial buildings</Link>. Our team handles everything from 
                  emergency tarping and debris removal to code-driven <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof</Link> and <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">siding</Link> reconstruction.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Tree impacts in the Upper Midwest often occur during peak wind seasons (spring and fall), severe 
                  thunderstorms, and winter events where ice accumulation adds thousands of pounds of weight to branches. 
                  Minnesota's wind gusts regularly exceed 50–70 mph during severe storms, and saturated soil conditions 
                  cause root ball failures. When a tree hits a structure, the result is often a sudden and accidental 
                  direct physical loss, which most insurance policies are obligated to cover—although the scope of repair 
                  is often disputed if not meticulously documented. Learn more about <Link href="/resources/insurance-claims/wind-damage" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">wind damage claims</Link> and <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm restoration services</Link>.
                </p>
                <div className="mt-6 rounded-lg bg-red-50 border-2 border-red-200 p-6">
                  <p className="text-gray-700 font-semibold">
                    Our role is simple: stabilize the property, assess the real damage, document it for insurance, and 
                    rebuild to Minnesota & Wisconsin building standards, including structural decking replacement, ice & 
                    water barrier, attic ventilation requirements, and Minnesota Statute 72A.201 ("matching law") for 
                    <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2"> siding</Link> and <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link> materials.
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* How Tree Impacts Damage */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="How Tree Impacts Damage Roofs, Siding & Structures"
          description="Tree impacts create both visible structural damage and hidden systemic damage"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {damageTypes.map((damage, index) => {
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
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <Card className="bg-yellow-50 border-2 border-yellow-200">
              <p className="text-gray-700 font-semibold">
                Tree impacts often create both wind uplift and blunt force trauma, meaning we must determine the 
                full scope of structural loss—not just visible exterior impact points.
              </p>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* 6-Step Process */}
      <Section className="bg-white">
        <SectionHeader
          title="Our Tree-Impact Insurance Claim Process"
          description="A comprehensive 6-step system from emergency response to full reconstruction"
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

      {/* Insurance Coverage */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Minnesota & Wisconsin Insurance Coverage Rules for Tree Damage"
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
                  <h3 className="text-xl font-bold text-gray-900">What's Usually Covered</h3>
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
                    <AlertCircle className="h-6 w-6 text-red-600" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">What's Sometimes Not Covered</h3>
                </div>
                <ul className="space-y-2">
                  {coverageInfo.notCovered.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" />
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
              <div className="mb-3 flex items-center gap-3">
                <FileText className="h-6 w-6 text-brand-primary" />
                <h3 className="text-lg font-bold text-gray-900">Unique Minnesota Law: Matching Requirements (72A.201)</h3>
              </div>
              <p className="text-gray-700 mb-2">
                If roofing or siding materials no longer match, insurers may be required to replace the entire elevation 
                or entire roof slope for visual consistency.
              </p>
              <p className="text-gray-700">
                This law is critical in tree-impact cases because impact zones rarely align with clean patch lines.
              </p>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-white">
        <SectionHeader
          title="Why Minnesota & Wisconsin Homeowners Trust Advanced Roofing & Siding"
          description="Expert tree-impact restoration with local expertise"
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
      <Section className="bg-gray-50">
        <SectionHeader
          title="Frequently Asked Questions About Tree Damage Claims"
          description="Common questions about tree-impact insurance claims"
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
        <FAQSchema faqs={faqs} />
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
                <Link href="/resources/insurance-claims/ice-dam-snow-damage-claims">
                  <Button variant="outline" size="lg" className="group">
                    Ice Dam & Snow Damage
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
                  <TreePine className="h-8 w-8 text-brand-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Need Emergency Tree Damage Response?
                </h2>
                <p className="mb-6 text-lg text-gray-700 max-w-2xl mx-auto">
                  If a tree has fallen on your roof or damaged your property, don't wait. We provide same-day emergency 
                  response, stabilization, and insurance claim assistance. Serving <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link> communities.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg" className="group">
                      Get Emergency Help
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

