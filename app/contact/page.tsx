import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { ReviewsPreview } from '@/components/sections/ReviewsPreview'
import { ServiceAreas } from '@/components/sections/ServiceAreas'
import { FAQ } from '@/components/sections/FAQ'
import { COMPANY_INFO } from '@/lib/constants'
import { Phone, Mail, Clock, Shield, Award, BadgeCheck, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us — Free Estimate | Call 763-427-3093 | Minnesota & Wisconsin',
  description: 'Get your free estimate from Advanced Roofing & Siding Inc. — GAF Master Elite contractor serving Minnesota & Wisconsin. Storm damage? We respond in 48 hours. Call 763-427-3093.',
  keywords: [
    'contact roofing contractor Minnesota',
    'free roofing estimate',
    'Anoka roofing contractor',
    'Minnesota roofing estimate',
    'siding contractor contact',
    'storm damage inspection free',
    'roofing contractor near me',
  ],
  alternates: {
    canonical: 'https://advancedroofingmn.com/contact',
  },
  openGraph: {
    title: 'Contact Us — Free Estimate | Advanced Roofing & Siding Inc.',
    description: 'Get your free estimate. GAF Master Elite contractor serving Minnesota & Wisconsin. Storm damage? 48-hour inspection guarantee.',
    url: 'https://advancedroofingmn.com/contact',
    images: [{ url: 'https://advancedroofingmn.com/AFS-Logo900.png', width: 1200, height: 630, alt: 'Contact Advanced Roofing & Siding Inc.' }],
  },
}

const TRUST_BADGES = [
  { icon: Shield, label: 'GAF Master Elite®', sub: 'Top 2% nationwide', href: '/resources/gaf-master-elite-contractor' },
  { icon: Award, label: '30+ Years', sub: 'Serving MN & WI', href: '/about' },
  { icon: BadgeCheck, label: 'A+ BBB Rating', sub: 'Accredited since 2007', href: '/resources/reviews' },
  { icon: CheckCircle, label: 'Licensed & Insured', sub: `License #${COMPANY_INFO.license}`, href: '/resources/warranties' },
]

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        title="Minnesota's Trusted Roofing & Siding Experts"
        description="Free inspections · No-pressure estimates · GAF Master Elite certified · Storm damage response in 48 hours"
        backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
        showForm
      />

      {/* Contact info strip below hero */}
      <Section className="bg-white py-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-800 transition hover:border-brand-primary hover:text-brand-primary">
                <Phone className="h-4 w-4 text-brand-primary" />
                {COMPANY_INFO.phone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-800 transition hover:border-brand-primary hover:text-brand-primary">
                <Mail className="h-4 w-4 text-gray-400" />
                {COMPANY_INFO.email}
              </a>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600">
                <Clock className="h-4 w-4 text-gray-400" />
                Mon–Fri 8AM–6PM · Sat 9AM–4PM
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {TRUST_BADGES.map(({ icon: Icon, label, href }) => (
                <Link key={label} href={href} className="flex items-center gap-1.5 rounded-full border border-gray-200 px-2.5 py-1 text-[11px] font-semibold text-gray-600 transition hover:border-brand-primary hover:text-brand-primary">
                  <Icon className="h-3 w-3 text-brand-primary" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <ReviewsPreview />

      {/* Service areas — full text directory */}
      <ServiceAreas />

      {/* FAQ */}
      <FAQ />

      {/* Insurance claims — full default */}
      <InsuranceClaimsCTA variant="default" />

    </PageLayout>
  )
}
