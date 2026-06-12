import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Home, PaintBucket, Square, CloudRain, Droplets, Frame, DoorOpen } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exterior Services — Roofing, Siding, Windows, Gutters & More | MN & WI',
  description: 'GAF Master Elite certified roofing, siding, windows, storm restoration, gutters, soffit & fascia, and exterior doors across Minnesota and Wisconsin. Free estimates.',
  keywords: ['roofing contractor Minnesota', 'siding replacement Minnesota', 'window installation', 'storm restoration', 'gutters Minnesota', 'soffit fascia', 'exterior doors', 'GAF Master Elite', 'exterior contractor Twin Cities'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/services',
  },
  openGraph: {
    title: 'Exterior Services — Advanced Roofing & Siding Inc.',
    description: 'GAF Master Elite certified exterior contractor serving the Twin Cities and Western Wisconsin. Roofing, siding, windows, gutters, and more.',
    url: 'https://advancedroofingmn.com/services',
    images: [{ url: 'https://advancedroofingmn.com/AFS-Logo900.png', width: 1200, height: 630, alt: 'Advanced Roofing & Siding Inc.' }],
  },
}

const services = [
  {
    id: 'roofing',
    href: '/services/roofing',
    icon: Home,
    title: 'Roofing',
    description: 'GAF Master Elite certified roof systems with lifetime warranties. Complete replacements, repairs, and maintenance for MN and WI homes.',
  },
  {
    id: 'siding',
    href: '/services/siding',
    icon: PaintBucket,
    title: 'Siding',
    description: "Durable exterior siding systems engineered for Minnesota's climate. Better weather resistance, insulation, and long-term curb appeal.",
  },
  {
    id: 'windows',
    href: '/services/windows',
    icon: Square,
    title: 'Windows',
    description: 'Energy-efficient window replacements that cut heating bills and meet Minnesota Energy Code. Replace all windows in one efficient visit.',
  },
  {
    id: 'storm-restoration',
    href: '/services/storm-restoration',
    icon: CloudRain,
    title: 'Storm Restoration',
    description: 'Hail and wind damage assessment with full insurance claim support. We handle the adjuster — most homeowners pay only their deductible.',
  },
  {
    id: 'gutters',
    href: '/services/gutters',
    icon: Droplets,
    title: 'Gutters',
    description: 'Seamless aluminum gutter systems with optional gutter protection. No joints to fail, no water infiltrating your foundation or fascia.',
  },
  {
    id: 'soffit-fascia',
    href: '/services/soffit-fascia',
    icon: Frame,
    title: 'Soffit & Fascia',
    description: 'The ventilation framework your GAF warranty depends on. Aluminum wraps that never rot, never need paint, and are often storm-insured.',
  },
  {
    id: 'exterior-doors',
    href: '/services/exterior-doors',
    icon: DoorOpen,
    title: 'Exterior Doors',
    description: 'Exterior door replacement built for comfort, security, and energy savings — low maintenance and built to handle Minnesota winters.',
  },
]

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        title="Exterior Services"
        description="Complete roofing, siding, windows, gutters, and exterior solutions — one contractor, one warranty, one call"
        backgroundImage="/gallery/340661788_241238031731100_708703886642482358_n.webp"
      />

      <Section className="bg-white">
        <div className="mb-10">
          <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-brand-primary">What We Do</p>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Roofing, Siding &amp; Exterior Services in Minnesota &amp; Wisconsin
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-500 md:text-base">
            Advanced Roofing &amp; Siding Inc. is a{' '}
            <Link href="/resources/gaf-master-elite-contractor" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
              GAF Master Elite certified contractor
            </Link>{' '}
            serving the Twin Cities metro and Western Wisconsin since the 1990s. Every project is
            managed by our own licensed crews — no subcontracting — and backed by{' '}
            <Link href="/resources/warranties" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
              industry-leading warranties
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <AnimatedDiv
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Link href={service.href}>
                  <Card className="group h-full cursor-pointer p-4 md:p-5 hover:border-brand-primary/20 hover:shadow-medium hover:-translate-y-0.5 transition-all duration-200">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary-light group-hover:bg-brand-primary transition-colors duration-200">
                      <Icon className="h-5 w-5 text-brand-primary group-hover:text-white transition-colors duration-200" strokeWidth={2} />
                    </div>
                    <h3 className="mb-1.5 text-sm font-bold text-gray-900 group-hover:text-brand-primary transition-colors duration-200 md:text-base">
                      {service.title}
                    </h3>
                    <p className="mb-3 text-xs leading-relaxed text-gray-500 md:text-sm">
                      {service.description}
                    </p>
                    <span className="text-xs font-semibold text-brand-primary">Learn More →</span>
                  </Card>
                </Link>
              </AnimatedDiv>
            )
          })}
        </div>
      </Section>
    </PageLayout>
  )
}
