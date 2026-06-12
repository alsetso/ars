'use client'

import { Section } from '@/components/ui/Section'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface FAQ {
  question: string
  answer: React.ReactNode
  answerText: string // plain text version for schema
}

const faqs: FAQ[] = [
  {
    question: 'How long does a roof replacement take?',
    answerText: 'Most residential roof replacements in Minnesota take 1–2 days. We arrive early, complete tear-off and installation in a single crew visit when possible, and do a magnet sweep for nails before leaving. Larger or multi-slope roofs may take 2–3 days. We provide a firm timeline in your proposal.',
    answer: (
      <>
        Most residential <Link href="/services/roofing" className="font-medium text-brand-primary hover:underline">roof replacements</Link> in Minnesota take 1–2 days. We arrive early, complete tear-off and installation in a single crew visit when possible, and do a magnet sweep for nails before leaving. Larger or multi-slope roofs may take 2–3 days. We provide a firm timeline in your proposal.
      </>
    ),
  },
  {
    question: 'How much does a roof replacement cost in Minnesota?',
    answerText: 'A typical residential roof replacement in Minnesota ranges from $8,000–$18,000 depending on square footage, pitch, materials, and story height. If you have storm damage, your insurance typically covers most of the cost minus your deductible. We provide free, itemized estimates with no pressure.',
    answer: (
      <>
        A typical residential <Link href="/services/roofing" className="font-medium text-brand-primary hover:underline">roof replacement</Link> in Minnesota ranges from $8,000–$18,000 depending on square footage, pitch, materials, and story height. If you have{' '}
        <Link href="/resources/insurance-claims" className="font-medium text-brand-primary hover:underline">storm damage</Link>, your insurance typically covers most of the cost minus your deductible. We provide{' '}
        <Link href="/contact" className="font-medium text-brand-primary hover:underline">free, itemized estimates</Link> with no pressure.
      </>
    ),
  },
  {
    question: 'Do you work with insurance companies?',
    answerText: 'Yes — insurance claim support is one of our specialties. We provide free inspections, attend adjuster meetings to represent you, handle all documentation, and help reopen denied or underpaid claims. Our 48-hour inspection guarantee ensures a fast response after any storm.',
    answer: (
      <>
        Yes — <Link href="/resources/insurance-claims" className="font-medium text-brand-primary hover:underline">insurance claim support</Link> is one of our specialties. We provide free inspections, attend adjuster meetings to represent you, handle all documentation, and help reopen denied or underpaid claims. Our 48-hour inspection guarantee ensures a fast response after any storm.
      </>
    ),
  },
  {
    question: 'How do I know if I have hail damage?',
    answerText: 'Hail damage is often invisible from the ground. Signs include granule loss in downspouts, soft spots or bruising on shingles, dented gutters, and cracked siding. After any hail event in Minnesota or Wisconsin, we recommend a free inspection — damage that looks minor often qualifies for a full insurance-covered replacement.',
    answer: (
      <>
        Hail damage is often invisible from the ground. Signs include granule loss in downspouts, soft spots or bruising on shingles, dented gutters, and cracked siding. After any hail event in Minnesota or Wisconsin, we recommend a{' '}
        <Link href="/resources/insurance-claims/hail-damage" className="font-medium text-brand-primary hover:underline">free hail inspection</Link> — damage that looks minor often qualifies for a full insurance-covered replacement.
      </>
    ),
  },
  {
    question: 'What areas do you serve?',
    answerText: 'We serve communities across Minnesota and Wisconsin — including the Twin Cities metro, Anoka County, Hennepin County, St. Cloud, Rochester, and western Wisconsin. See our full service area map for city-specific pages.',
    answer: (
      <>
        We serve communities across{' '}
        <Link href="/service-areas/minnesota" className="font-medium text-brand-primary hover:underline">Minnesota</Link> and{' '}
        <Link href="/service-areas/wisconsin" className="font-medium text-brand-primary hover:underline">Wisconsin</Link> — including the Twin Cities metro, Anoka County, Hennepin County, St. Cloud, Rochester, and western Wisconsin.{' '}
        <Link href="/service-areas" className="font-medium text-brand-primary hover:underline">See our full service area</Link> for city-specific pages.
      </>
    ),
  },
  {
    question: 'What is a GAF Master Elite contractor?',
    answerText: 'GAF Master Elite is the highest contractor designation awarded by GAF, the largest roofing manufacturer in North America. Only 2% of roofing contractors qualify. It requires proven credentials, licensing, insurance, and a commitment to ongoing training. As a GAF Master Elite contractor, we can offer the GAF Golden Pledge 50-year warranty — unavailable from most contractors.',
    answer: (
      <>
        GAF Master Elite is the highest contractor designation from GAF, the largest roofing manufacturer in North America. Only 2% of contractors qualify. As a{' '}
        <Link href="/resources/gaf-master-elite-contractor" className="font-medium text-brand-primary hover:underline">GAF Master Elite contractor</Link>, we offer the{' '}
        <Link href="/resources/warranties" className="font-medium text-brand-primary hover:underline">GAF Golden Pledge 50-year warranty</Link> — unavailable from most roofing companies.
      </>
    ),
  },
  {
    question: 'Do you offer free estimates?',
    answerText: 'Yes — free, no-obligation estimates for all services. Our project manager will inspect your property, discuss your options, and provide a detailed written proposal covering materials, timeline, and pricing. No pressure, just honest advice.',
    answer: (
      <>
        Yes — free, no-obligation estimates for all services.{' '}
        <Link href="/contact" className="font-medium text-brand-primary hover:underline">Request yours here</Link>. Our project manager will inspect your property, discuss your options, and provide a detailed written proposal covering materials, timeline, and pricing. No pressure, just honest advice.
      </>
    ),
  },
  {
    question: 'What warranties do you offer?',
    answerText: 'As a GAF Master Elite contractor, we offer the GAF Golden Pledge Warranty — 50 years on materials and workmanship, and it continues even if we go out of business. We also provide workmanship warranties on siding and window installations. Full warranty details are available on our warranties page.',
    answer: (
      <>
        As a GAF Master Elite contractor, we offer the{' '}
        <Link href="/resources/warranties" className="font-medium text-brand-primary hover:underline">GAF Golden Pledge Warranty</Link> — 50 years on materials and workmanship, and it continues even if we go out of business. We also provide workmanship warranties on{' '}
        <Link href="/services/siding" className="font-medium text-brand-primary hover:underline">siding</Link> and{' '}
        <Link href="/services/windows" className="font-medium text-brand-primary hover:underline">window</Link> installations.
      </>
    ),
  },
  {
    question: 'How long do asphalt shingles last in Minnesota?',
    answerText: 'Standard 3-tab shingles last 15–20 years in Minnesota\'s climate. Architectural shingles (what we primarily install) last 25–30+ years. GAF Timberline HDZ and similar premium shingles can last 30–50 years with proper ventilation and installation. Extreme freeze-thaw cycles and hail accelerate wear — regular inspections help catch issues early.',
    answer: (
      <>
        Standard 3-tab shingles last 15–20 years in Minnesota's climate. Architectural shingles — what we primarily install — last 25–30+ years.{' '}
        <Link href="/resources/gaf-master-elite-contractor" className="font-medium text-brand-primary hover:underline">Premium GAF shingles</Link> can last 30–50 years with proper ventilation and installation. Extreme freeze-thaw cycles and hail accelerate wear — regular inspections help catch issues early.
      </>
    ),
  },
  {
    question: 'Can you replace a roof in winter in Minnesota?',
    answerText: 'Yes, with conditions. We install roofs year-round in Minnesota down to about 20°F. Shingles need to be warm enough to seal properly — we use heated storage for materials in cold weather. Emergency repairs are handled any time of year. We\'ll advise honestly if conditions require waiting.',
    answer: (
      <>
        Yes, with conditions. We install roofs year-round in Minnesota down to about 20°F. Shingles need to be warm enough to seal properly — we use heated storage for materials in cold weather.{' '}
        <Link href="/resources/24-7-support" className="font-medium text-brand-primary hover:underline">Emergency repairs</Link> are handled any time of year. We'll advise honestly if conditions require waiting.
      </>
    ),
  },
  {
    question: "What's the difference between ACV and RCV on my insurance claim?",
    answerText: 'ACV (Actual Cash Value) is the initial check your insurer sends — it covers the depreciated value of your roof. RCV (Replacement Cost Value) is the full amount paid after the work is completed and documented. The difference is called "holdback" or recoverable depreciation. AR&S explains this breakdown upfront so there are no surprises.',
    answer: (
      <>
        ACV (Actual Cash Value) is the initial check your insurer sends — it covers the <em>depreciated</em> value of your roof. RCV (Replacement Cost Value) is the full amount paid after the work is completed. The difference is called "recoverable depreciation." AR&S explains this breakdown upfront on every{' '}
        <Link href="/resources/insurance-claims" className="font-medium text-brand-primary hover:underline">insurance claim</Link> so there are no surprises.
      </>
    ),
  },
  {
    question: 'Do you work with HOAs and property managers?',
    answerText: 'Yes — we regularly work with HOA boards and property management companies managing multi-building roofing and siding projects. We provide coordinated scheduling, consistent materials across units, adjuster meeting representation for complex claims, and bulk-project pricing. We serve HOAs across the Twin Cities metro and western Wisconsin.',
    answer: (
      <>
        Yes — we regularly work with{' '}
        <Link href="/who-we-serve/hoa" className="font-medium text-brand-primary hover:underline">HOA boards</Link> and{' '}
        <Link href="/who-we-serve/property-manager" className="font-medium text-brand-primary hover:underline">property management companies</Link> managing multi-building roofing and siding projects. We provide coordinated scheduling, consistent materials across units, adjuster representation for complex claims, and bulk-project pricing.
      </>
    ),
  },
]

// Plain text version for FAQSchema
const faqsForSchema = faqs.map((f) => ({ question: f.question, answer: f.answerText }))

function FAQItem({ faq, index, isOpen, onToggle }: {
  faq: FAQ
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-4 text-left transition-colors hover:text-brand-primary"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-gray-900 leading-snug md:text-base">
          {faq.question}
        </span>
        <ChevronDown
          className={`mt-0.5 h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-brand-primary' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-xs leading-relaxed text-gray-600 md:text-sm">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  // Split into two columns for desktop
  const col1 = faqs.filter((_, i) => i % 2 === 0)
  const col2 = faqs.filter((_, i) => i % 2 !== 0)
  const col1Indices = faqs.map((_, i) => i).filter((i) => i % 2 === 0)
  const col2Indices = faqs.map((_, i) => i).filter((i) => i % 2 !== 0)

  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-brand-primary">FAQ</p>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-1.5 text-sm text-gray-500">
              Everything homeowners ask before starting a project.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 text-sm font-semibold text-brand-primary hover:underline"
          >
            Have a question not listed? Ask us →
          </a>
        </div>

        {/* Two-column accordion */}
        <div className="grid gap-x-12 md:grid-cols-2">
          {/* Column 1 */}
          <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-gray-50 px-5">
            {col1.map((faq, i) => (
              <FAQItem
                key={col1Indices[i]}
                faq={faq}
                index={col1Indices[i]}
                isOpen={openIndex === col1Indices[i]}
                onToggle={() => toggle(col1Indices[i])}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="mt-4 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-gray-50 px-5 md:mt-0">
            {col2.map((faq, i) => (
              <FAQItem
                key={col2Indices[i]}
                faq={faq}
                index={col2Indices[i]}
                isOpen={openIndex === col2Indices[i]}
                onToggle={() => toggle(col2Indices[i])}
              />
            ))}
          </div>
        </div>

      </div>

      <FAQSchema faqs={faqsForSchema} />
    </Section>
  )
}
