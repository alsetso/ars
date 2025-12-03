import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Warranties } from '@/components/sections/Warranties'
import { Shield, CheckCircle, Award } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Warranties - GAF Golden Pledge 50-Year Coverage | No Additional Cost',
  description: 'Industry-leading GAF warranties including the Golden Pledge 50-year warranty at no additional cost. GAF Master Elite contractor protection for your investment.',
  keywords: ['GAF warranties', 'Golden Pledge warranty', 'roofing warranties', '50-year warranty', 'GAF Master Elite', 'roof warranty', 'siding warranty', 'workmanship warranty'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/warranties',
  },
  openGraph: {
    title: 'Warranties - GAF Golden Pledge 50-Year Coverage',
    description: 'Industry-leading GAF warranties including the Golden Pledge 50-year warranty at no additional cost. GAF Master Elite contractor protection for your investment.',
    url: 'https://advancedroofingmn.com/warranties',
    images: [
      {
        url: 'https://advancedroofingmn.com/GOLDEN_PLEDGE.webp',
        width: 1200,
        height: 630,
        alt: 'GAF Golden Pledge Warranty - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

export default function WarrantiesPage() {
  return (
    <PageLayout showWarranties={false}>
      <PageHero
        title="Warranties are like a safety net"
        description="Industry-leading GAF warranties provide peace of mind that your investment is protected"
        backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
        showCTA={false}
      />

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <div className="mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-brand-primary" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Big Protection for Your Big Investment
                </h2>
              </div>

              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  Because of our status as a <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2"><strong>GAF Master Elite Contractor</strong></Link>, Advanced
                  Roofing & Siding is able to offer you the best of the best when it comes to
                  warranties. The <strong>GAF Golden Pledge Warranty</strong> provides homeowners
                  exceptional <strong>50-year coverage at no additional cost</strong>. This coverage
                  continues even in the unlikely event that Advanced goes out of business! Learn more about our <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing services</Link>.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  While our warranties cover a comprehensive range of issues, we do not warranty
                  repairs – only full replacements. Our sales team is happy to discuss the pros and
                  cons of replacing versus repairing your <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roof</Link>, and we'll only make a recommendation
                  that we think your home really needs. <Link href="/contact" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Contact us</Link> for a free consultation.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  We are committed to long-term customer relationships and satisfaction, which
                  includes our warranties. It's a big investment, which means it should be protected
                  in a big way.
                </p>
              </div>
            </Card>
          </AnimatedDiv>

          {/* Warranty Details */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <AnimatedDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <Award className="h-6 w-6 text-brand-primary" />
                  <h3 className="text-xl font-bold text-gray-900">GAF Golden Pledge Warranty</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">50-year comprehensive coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">No additional cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">Coverage continues even if we go out of business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">Industry-leading protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">Covers materials and workmanship for <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 underline underline-offset-2">roofing</Link> and <Link href="/services/siding" className="text-brand-primary hover:text-red-800 underline underline-offset-2">siding</Link></span>
                  </li>
                </ul>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-brand-primary" />
                  <h3 className="text-xl font-bold text-gray-900">What's Covered</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">Full <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 underline underline-offset-2">roof replacements</Link> only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">Comprehensive range of issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">Materials and installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">Transferable to new homeowners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span className="text-gray-700">Backed by GAF, the industry leader</span>
                  </li>
                </ul>
              </Card>
            </AnimatedDiv>
          </div>

          {/* Important Note */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <Card className="bg-yellow-50 border-yellow-200">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Important Note</h3>
              <p className="text-gray-700">
                Our warranties cover <strong>full replacements only</strong>, not repairs. Our sales
                team will discuss the pros and cons of replacing versus repairing your roof, and
                we'll only make a recommendation that we think your home really needs. We're
                committed to long-term customer relationships and satisfaction.
              </p>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Show certifications section */}
      <Warranties />
    </PageLayout>
  )
}

