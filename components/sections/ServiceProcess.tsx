'use client'

import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import {
  Search,
  ClipboardList,
  Wrench,
  ShieldCheck,
  Phone,
  FileCheck,
  Hammer,
  DoorOpen,
  Droplets,
  Frame,
  CloudRain,
  LucideIcon,
} from 'lucide-react'
import Link from 'next/link'

/* ─────────────────────────────────────────────────────────────────────────────
   Step data — one source of truth for all 7 services
   Each step includes:
     icon        — rendered alongside the step number
     title       — h3, keyword-rich
     description — full paragraph, specific to the service
     duration    — brief time estimate shown as a badge (optional)
     link        — contextual deep-link (optional)
     linkText    — CTA label for the link
───────────────────────────────────────────────────────────────────────────── */

interface ProcessStep {
  step: number
  icon: LucideIcon
  title: string
  description: string
  duration?: string
  link?: string
  linkText?: string
}

const SERVICE_STEPS: Record<string, ProcessStep[]> = {
  roofing: [
    {
      step: 1,
      icon: Search,
      title: 'Free Roof Inspection & Damage Assessment',
      description:
        'A licensed project manager inspects your roof inside and out — checking shingles, flashing, decking, gutters, and attic ventilation. We document every finding with photos and provide a written assessment the same day. No pressure, no cost.',
      duration: 'Same day',
      link: '/services/free-estimate',
      linkText: 'Schedule inspection',
    },
    {
      step: 2,
      icon: ClipboardList,
      title: 'Detailed Estimate, Material Selection & Insurance Coordination',
      description:
        'You receive a transparent, line-item estimate with every material specified — shingle brand, underlayment type, ridge vent system, and labor. If storm damage is involved, we prepare a full insurance supplement and attend the adjuster inspection on your behalf so you maximize your coverage.',
      duration: '24–48 hrs',
      link: '/resources/insurance-claims',
      linkText: 'How insurance claims work',
    },
    {
      step: 3,
      icon: Hammer,
      title: 'GAF-Certified Professional Installation',
      description:
        'Our GAF Master Elite crew strips existing materials down to the decking, installs ice-and-water shield at all vulnerable points, lays new underlayment, and installs your chosen shingles using manufacturer-specified nailing patterns. Every penetration is properly flashed and sealed. Typical residential replacement: one to two days.',
      duration: '1–2 days',
    },
    {
      step: 4,
      icon: ShieldCheck,
      title: 'Final Inspection, Cleanup & Warranty Registration',
      description:
        'A project manager walks the roof with you, reviewing workmanship and clearing the site of all debris and nails (magnetic sweep included). Your GAF warranty is registered the same week, giving you coverage documentation in hand before we leave.',
      duration: 'Same day',
      link: '/resources/warranties',
      linkText: 'View our warranties',
    },
  ],

  siding: [
    {
      step: 1,
      icon: Search,
      title: 'Free Exterior Assessment & Consultation',
      description:
        'We evaluate your current siding for moisture intrusion, rot, insulation gaps, and storm damage — checking trim, corners, J-channel, and house wrap integrity. You get a written assessment and honest recommendation: repair, partial replacement, or full re-side.',
      duration: 'Same day',
      link: '/services/free-estimate',
      linkText: 'Schedule assessment',
    },
    {
      step: 2,
      icon: ClipboardList,
      title: 'Material Selection, Color Matching & Written Proposal',
      description:
        'We walk you through premium options — vinyl, fiber cement (James Hardie), LP SmartSide, and engineered wood — with samples, energy ratings, and warranty comparisons. Your written proposal specifies every panel, trim piece, fastener type, and moisture barrier before any work begins.',
      duration: '1–2 days',
    },
    {
      step: 3,
      icon: Wrench,
      title: 'Professional Siding Installation with Moisture Management',
      description:
        'Old siding is removed and the wall is inspected for rot or moisture damage before anything new goes on. We install a continuous house wrap system, then panels and trim with proper overlap, expansion gaps, and sealed penetrations — ensuring your home breathes correctly through Minnesota winters.',
      duration: '2–5 days',
    },
    {
      step: 4,
      icon: ShieldCheck,
      title: 'Final Walkthrough, Touch-Ups & Manufacturer Warranty',
      description:
        'Every corner, seam, window surround, and caulk line is reviewed with you. Any touch-ups are completed on the spot. Manufacturer warranty documentation is provided and our workmanship guarantee is in writing.',
      duration: 'Same day',
      link: '/resources/warranties',
      linkText: 'View our warranties',
    },
  ],

  windows: [
    {
      step: 1,
      icon: Search,
      title: 'In-Home Consultation & Precision Measurement',
      description:
        'We assess every window opening — measuring rough openings, checking for rot or water damage in the frame and sill, and testing existing weatherstripping. We confirm your home\'s energy code requirements and recommend window efficiency ratings (U-factor, SHGC) that match Minnesota\'s climate zone.',
      duration: 'Same day',
      link: '/services/free-estimate',
      linkText: 'Schedule consultation',
    },
    {
      step: 2,
      icon: ClipboardList,
      title: 'Window Selection, Energy Ratings & Detailed Estimate',
      description:
        'We present side-by-side comparisons of window styles, glass packages, frame materials, and hardware — with ENERGY STAR ratings and estimated heating cost savings. Your written estimate specifies model numbers, dimensions, and installation method so there are no surprises.',
      duration: '24–48 hrs',
    },
    {
      step: 3,
      icon: Wrench,
      title: 'Expert Window Installation with Airtight Sealing',
      description:
        'Old windows are carefully removed to preserve surrounding trim when possible. New units are shimmed level, anchored per manufacturer specs, and air-sealed with low-expansion foam. Exterior flashing tape is applied at every sill before caulking. We minimize disruption — most windows are replaced in a single day.',
      duration: '1 day',
    },
    {
      step: 4,
      icon: ShieldCheck,
      title: 'Operation Test, Cleanup & Warranty Documentation',
      description:
        'Every window is tested for smooth operation, locking function, and airtight closure. We review tilt-wash cleaning and any special hardware features with you. Manufacturer warranty cards are registered and provided before we leave.',
      duration: 'Same day',
      link: '/resources/warranties',
      linkText: 'View our warranties',
    },
  ],

  'storm-restoration': [
    {
      step: 1,
      icon: Phone,
      title: '48-Hour Emergency Response & Damage Documentation',
      description:
        'We arrive within 48 hours of your call — often same day. Our certified inspector photographs and documents every item of storm damage across your roof, siding, gutters, and windows. If the structure is at risk, we install temporary tarps or boarding at no upfront cost.',
      duration: '48 hrs or less',
      link: '/resources/insurance-claims',
      linkText: 'Learn about insurance claims',
    },
    {
      step: 2,
      icon: FileCheck,
      title: 'Insurance Claim Filing, Adjuster Meeting & Supplement',
      description:
        'We prepare a complete claim package — Xactimate estimate, photo documentation, and material specifications — and attend the insurance adjuster inspection with you. When adjusters miss line items (they often do), we prepare and negotiate a supplement to ensure your settlement covers the full scope of damage.',
      duration: '3–10 days',
      link: '/resources/insurance-claims',
      linkText: 'How we handle claims',
    },
    {
      step: 3,
      icon: Wrench,
      title: 'Full Restoration to Pre-Storm or Better Condition',
      description:
        'Once your claim is approved, our crew completes the full scope of work — roof replacement, siding repair, gutter replacement, or window replacement as needed. We use premium materials that meet or exceed your original specifications, and coordinate multiple trades so restoration happens in a single mobilization.',
      duration: '1–3 days',
    },
    {
      step: 4,
      icon: ShieldCheck,
      title: 'Final Inspection, Warranty & Depreciation Recovery',
      description:
        'A project manager walks the completed work with you. Your new materials carry manufacturer warranties registered in your name. We also help you recover any withheld depreciation from your insurance company once work is complete — putting more money back in your pocket.',
      duration: 'Same day',
      link: '/resources/warranties',
      linkText: 'View our warranties',
    },
  ],

  gutters: [
    {
      step: 1,
      icon: Search,
      title: 'Free Gutter & Drainage Inspection',
      description:
        'We walk the entire roofline and downspout system — checking for slope issues, joint failures, fascia damage, and improper discharge points. We also assess whether your current gutter sizing handles your roof\'s square footage and local rainfall intensity.',
      duration: 'Same day',
      link: '/services/free-estimate',
      linkText: 'Schedule inspection',
    },
    {
      step: 2,
      icon: ClipboardList,
      title: 'Custom Measurement, System Design & Written Proposal',
      description:
        'Every gutter run is measured on-site and your system is designed for proper drainage — including downspout placement, extensions, and splash blocks. We specify gutter profile (K-style or half-round), gauge, color, and optional leaf protection. Your proposal is itemized before any work begins.',
      duration: '24 hrs',
    },
    {
      step: 3,
      icon: Droplets,
      title: 'On-Site Fabrication & Professional Installation',
      description:
        'Seamless gutters are formed on-site from continuous coil stock — no joints to fail between corners. We install with concealed hangers at code-compliant spacing, proper slope for drainage, and watertight mitered corners and end caps. Every downspout is secured and directed away from your foundation.',
      duration: '1 day',
    },
    {
      step: 4,
      icon: ShieldCheck,
      title: 'Flush Test, Final Walkthrough & Workmanship Guarantee',
      description:
        'We flush the entire system with water to verify slope, drainage, and every sealed joint before leaving. You receive a walkthrough of the new system and our written workmanship guarantee.',
      duration: 'Same day',
    },
  ],

  'soffit-fascia': [
    {
      step: 1,
      icon: Search,
      title: 'Free Roofline Inspection — Soffit, Fascia & Ventilation',
      description:
        'We inspect every linear foot of soffit and fascia for rot, moisture intrusion, storm damage, and pest access points. We also assess your attic ventilation balance — undersized or damaged soffit vents are a leading cause of ice dams and premature shingle failure.',
      duration: 'Same day',
      link: '/services/free-estimate',
      linkText: 'Schedule inspection',
    },
    {
      step: 2,
      icon: ClipboardList,
      title: 'Written Proposal & Insurance Coordination',
      description:
        'You receive a clear scope of work: which boards need replacement, which fascia sections are being wrapped, and what ventilation upgrades are recommended. If hail or wind caused the damage, we coordinate directly with your insurance adjuster to document and maximize your claim.',
      duration: '24 hrs',
      link: '/resources/insurance-claims',
      linkText: 'How insurance claims work',
    },
    {
      step: 3,
      icon: Frame,
      title: 'Rot Removal, Wood Replacement & Aluminum Wrapping',
      description:
        'We never cover rot — we eliminate it. Damaged wood boards are cut out and replaced with treated lumber before aluminum coil stock is custom-bent on-site and wrapped over the fascia. Vented soffit panels are installed with consistent ventilation spacing. The result looks factory-finished and never needs painting.',
      duration: '1–2 days',
    },
    {
      step: 4,
      icon: ShieldCheck,
      title: 'Ventilation Verification, Cleanup & Workmanship Guarantee',
      description:
        'We verify airflow through new soffit vents and confirm the roofline is fully sealed against moisture and pests. The site is cleaned, and your workmanship guarantee is provided in writing.',
      duration: 'Same day',
    },
  ],

  'exterior-doors': [
    {
      step: 1,
      icon: Search,
      title: 'Free Consultation, Frame Assessment & Measurement',
      description:
        'We measure the rough opening, check the frame for rot or structural compromise, inspect the threshold and sill pan for water infiltration, and assess weatherstripping condition. You\'ll know exactly what you\'re working with before any product is ordered.',
      duration: 'Same day',
      link: '/services/free-estimate',
      linkText: 'Schedule consultation',
    },
    {
      step: 2,
      icon: ClipboardList,
      title: 'Door Selection, Hardware & Written Proposal',
      description:
        'We walk you through door systems — steel, fiberglass, and wood options — with energy ratings, security specs, glass options, and finish samples. You receive an itemized proposal covering door unit, hardware, weatherstripping, threshold, and installation labor before any work begins.',
      duration: '24–48 hrs',
    },
    {
      step: 3,
      icon: DoorOpen,
      title: 'Precision Installation with Weatherproof Detailing',
      description:
        'Proper door installation requires more than setting the unit in the opening. We install a sill pan flashing, apply flashing tape to all four sides of the rough opening, shim for plumb and square, and seal the perimeter with low-expansion foam. Hardware, lockset, and deadbolt are installed and adjusted for smooth operation.',
      duration: 'Half to full day',
    },
    {
      step: 4,
      icon: ShieldCheck,
      title: 'Operation Test, Seal Verification & Feature Walkthrough',
      description:
        'Every door is tested for square operation, positive latch engagement, and weathertight closure. We review hardware features, security tips, and maintenance with you. Manufacturer warranty documentation is provided before we leave.',
      duration: 'Same day',
      link: '/resources/warranties',
      linkText: 'View our warranties',
    },
  ],
}

/* ─────────────────────────────────────────────────────────────────────────────
   HowTo JSON-LD schema — enables Google rich step results in search
───────────────────────────────────────────────────────────────────────────── */

function HowToSchema({
  serviceName,
  steps,
  cityName,
}: {
  serviceName: string
  steps: ProcessStep[]
  cityName?: string
}) {
  const location = cityName ? ` in ${cityName}` : ''
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How ${serviceName} Works${location} — Advanced Roofing & Siding Inc.`,
    description: `Step-by-step ${serviceName.toLowerCase()} process from free inspection to warranty registration.`,
    totalTime: 'P7D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
      description: 'Free estimate — no obligation',
    },
    step: steps.map((s) => ({
      '@type': 'HowToStep',
      position: s.step,
      name: s.title,
      text: s.description,
      ...(s.duration ? { timeRequired: s.duration } : {}),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   ServiceProcess component
───────────────────────────────────────────────────────────────────────────── */

interface ServiceProcessProps {
  serviceSlug: string
  cityName?: string
}

const SERVICE_TITLES: Record<string, string> = {
  roofing: 'Roofing',
  siding: 'Siding',
  windows: 'Window Installation',
  'storm-restoration': 'Storm Restoration',
  gutters: 'Gutter Installation',
  'soffit-fascia': 'Soffit & Fascia',
  'exterior-doors': 'Exterior Door Installation',
}

export function ServiceProcess({ serviceSlug, cityName }: ServiceProcessProps) {
  const steps = SERVICE_STEPS[serviceSlug]
  const serviceTitle = SERVICE_TITLES[serviceSlug] ?? 'Service'

  if (!steps) return null

  const locationSuffix = cityName ? ` in ${cityName}` : ''

  return (
    <>
      <HowToSchema serviceName={serviceTitle} steps={steps} cityName={cityName} />

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          {/* Section heading */}
          <div className="mb-8 text-center md:mb-10">
            <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
              How Our {serviceTitle} Process Works{locationSuffix}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
              Transparent steps from first call to warranty registration — no surprises
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4 md:space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <AnimatedDiv
                  key={step.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Card className="border border-gray-100 p-4 shadow-sm md:p-6">
                    <div className="flex gap-4 md:gap-6">
                      {/* Step badge + icon column */}
                      <div className="flex flex-shrink-0 flex-col items-center gap-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-700 to-red-800 text-white md:h-14 md:w-14">
                          <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} />
                        </div>
                        <span className="text-xs font-bold text-gray-400">
                          {String(step.step).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="mb-1.5 flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-bold text-gray-900 md:text-xl">
                            {step.title}
                          </h3>
                          {step.duration && (
                            <span className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
                              {step.duration}
                            </span>
                          )}
                        </div>
                        <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                          {step.description}
                        </p>
                        {step.link && step.linkText && (
                          <a
                            href={step.link}
                            className="mt-2 inline-flex items-center text-sm font-semibold text-brand-primary hover:text-red-800"
                          >
                            {step.linkText} →
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <div className="mt-8 rounded-xl bg-gradient-to-r from-red-50 to-red-100 p-5 text-center md:p-6">
              <p className="mb-3 text-base font-semibold text-gray-900 md:text-lg">
                Ready to start Step 1?{locationSuffix ? ` We serve ${cityName}.` : ''} It&apos;s free.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href="/services/free-estimate"
                  className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark"
                >
                  Get Free Estimate
                </a>
                <a
                  href="tel:763-427-3093"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Call 763-427-3093
                </a>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </Section>
    </>
  )
}
