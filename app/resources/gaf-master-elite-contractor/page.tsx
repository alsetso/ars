import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Shield, Award, CheckCircle, Star, Lock, Wrench, FileCheck, Building2, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'GAF Master Elite® Contractor - Top 2% in Minnesota & Wisconsin',
  description: 'Only 2% of roofing contractors earn GAF Master Elite® certification. Advanced Roofing & Siding is Minnesota and Wisconsin\'s trusted Master Elite contractor offering the strongest warranties and premium roofing systems.',
  keywords: ['GAF Master Elite contractor', 'GAF Master Elite Minnesota', 'GAF Master Elite Wisconsin', 'top 2% roofing contractor', 'GAF Golden Pledge warranty', 'Master Elite certified', 'Minnesota roofing contractor', 'Wisconsin roofing contractor', 'premium roofing systems', 'GAF certified installer'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/resources/gaf-master-elite-contractor',
  },
  openGraph: {
    title: 'GAF Master Elite® Contractor - Minnesota & Wisconsin | Advanced Roofing & Siding',
    description: 'Top 2% of roofing contractors nationwide. Elite workmanship, proven reliability, and the strongest roofing warranties in Minnesota and Wisconsin.',
    url: 'https://advancedroofingmn.com/resources/gaf-master-elite-contractor',
    type: 'website',
    images: [
      {
        url: 'https://advancedroofingmn.com/MASTER_ELITE_png2.webp',
        width: 1200,
        height: 630,
        alt: 'GAF Master Elite Contractor - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

export default function GAFMasterElitePage() {
  return (
    <PageLayout>
      <PageHero
        title="GAF Master Elite® Contractor"
        description="Only 2% of roofing contractors in North America earn this prestigious certification"
        backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
      />

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-8">
              <div className="prose prose-lg max-w-none">
                <div className="mb-6 flex items-center gap-3">
                  <Star className="h-8 w-8 text-yellow-500" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Why Choose a GAF Master Elite® Contractor?
                  </h2>
                </div>
                
                <p className="text-xl leading-relaxed text-gray-700 mb-6">
                  Only <strong>2% of roofing contractors in North America</strong> earn GAF's Master Elite® certification — and <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Advanced Roofing & Siding</Link> is one of them.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  When you hire a Master Elite contractor in <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota or Wisconsin</Link>, you're choosing elite workmanship, proven reliability, and the strongest <Link href="/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing warranties</Link> in the industry.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 font-semibold">
                  This isn't a paid badge or a simple membership. This is GAF's highest standard of excellence.
                </p>
              </div>
            </Card>
          </AnimatedDiv>

          {/* Top 2% Section */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Card>
              <div className="mb-6 flex items-center gap-3">
                <Award className="h-8 w-8 text-brand-primary" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Top 2% of Contractors in the Nation
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                GAF only awards Master Elite® status to companies who consistently demonstrate:
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Proper Licensing</p>
                    <p className="text-gray-600">Fully licensed and bonded in Minnesota and Wisconsin</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Full Insurance Protection</p>
                    <p className="text-gray-600">Comprehensive coverage for your peace of mind</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Proven Reputation for Quality</p>
                    <p className="text-gray-600">30+ years of excellence in <Link href="/service-areas" className="text-brand-primary hover:text-red-800 underline underline-offset-2">Minnesota and Wisconsin</Link></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Customer Satisfaction</p>
                    <p className="text-gray-600">Backed by verified reviews and A+ BBB rating</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:col-span-2">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Ongoing Factory Training</p>
                    <p className="text-gray-600">Continuous education and installation mastery from GAF's factory training programs</p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-lg font-semibold text-gray-900">
                Most contractors never qualify.
              </p>
            </Card>
          </AnimatedDiv>

          {/* Advanced Roofing Systems Section */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Card>
              <div className="mb-6 flex items-center gap-3">
                <Building2 className="h-8 w-8 text-brand-primary" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Access to GAF's Most Advanced Roofing Systems
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Master Elite® contractors are authorized to install GAF's top-performing roofing components, including:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Premium Architectural Shingles</p>
                    <p className="text-gray-600">High-performance shingles designed for Minnesota and Wisconsin's harsh weather conditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Advanced Leak Barriers</p>
                    <p className="text-gray-600">Superior protection against water intrusion and ice dams common in <Link href="/service-areas" className="text-brand-primary hover:text-red-800 underline underline-offset-2">Minnesota and Wisconsin</Link></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">High-Performance Underlayments</p>
                    <p className="text-gray-600">Extra layer of protection for your <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 underline underline-offset-2">roofing system</Link></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Lifetime Roofing Systems</p>
                    <p className="text-gray-600">Enhanced wind resistance perfect for <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 underline underline-offset-2">storm-prone areas</Link> in Minnesota and Wisconsin</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Integrated Ventilation Systems</p>
                    <p className="text-gray-600">Complete roofing solutions that improve energy efficiency and roof longevity</p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-lg text-gray-700">
                Your home receives a factory-approved system, not a patchwork of mismatched products.
              </p>
            </Card>
          </AnimatedDiv>

          {/* Warranties Section */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Card>
              <div className="mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-brand-primary" />
                <h3 className="text-2xl font-bold text-gray-900">
                  The Industry's Strongest Warranties
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Only Master Elite® contractors can offer the <Link href="/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Golden Pledge® Warranty</Link>, which includes:
              </p>

              <div className="space-y-6">
                <div className="rounded-lg border-2 border-red-200 bg-red-50 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Lock className="h-6 w-6 text-brand-primary" />
                    <h4 className="text-xl font-bold text-gray-900">50-Year Material Warranty</h4>
                  </div>
                  <p className="text-gray-700">
                    Covers manufacturing defects for the lifetime of the roof. This comprehensive protection is exclusive to <Link href="/about" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite contractors</Link> in Minnesota and Wisconsin.
                  </p>
                </div>

                <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Wrench className="h-6 w-6 text-brand-primary" />
                    <h4 className="text-xl font-bold text-gray-900">25-Year Workmanship Warranty</h4>
                  </div>
                  <p className="text-gray-700">
                    Covers installation errors — a level of protection most homeowners in Minnesota and Wisconsin never get. This warranty ensures your <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing installation</Link> is protected for decades.
                  </p>
                </div>

                <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <FileCheck className="h-6 w-6 text-brand-primary" />
                    <h4 className="text-xl font-bold text-gray-900">Independent, Third-Party Inspection</h4>
                  </div>
                  <p className="text-gray-700">
                    GAF sends a certified inspector to review your finished roof to ensure it meets their standards. This quality assurance process is only available through <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Master Elite contractors</Link>.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-lg font-semibold text-gray-900">
                Regular contractors cannot offer any of this.
              </p>
            </Card>
          </AnimatedDiv>

          {/* Better Installation Section */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Card>
              <div className="mb-6 flex items-center gap-3">
                <Star className="h-8 w-8 text-brand-primary" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Better Installation. Better Protection. Better Longevity.
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                A roof is only as good as the company installing it. With Master Elite® contractors, you get:
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Precise Installation</p>
                    <p className="text-gray-600">Meets and exceeds building codes in Minnesota and Wisconsin</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Superior Sealing & Ventilation</p>
                    <p className="text-gray-600">Proper airflow and moisture control for your home</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Greater Storm Resistance</p>
                    <p className="text-gray-600">Enhanced protection against wind, hail, and storms common in <Link href="/service-areas" className="text-brand-primary hover:text-red-800 underline underline-offset-2">Minnesota and Wisconsin</Link></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Longer Roof Lifespan</p>
                    <p className="text-gray-600">Your investment lasts longer with proper installation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:col-span-2">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Lower Long-Term Repair Costs</p>
                    <p className="text-gray-600">Quality installation means fewer repairs and maintenance over time</p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-lg text-gray-700">
                Your investment performs better and lasts longer.
              </p>
            </Card>
          </AnimatedDiv>

          {/* Backed by GAF Section */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200">
              <div className="mb-6 flex items-center gap-3">
                <Building2 className="h-8 w-8 text-brand-primary" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Backed by the Largest Roofing Manufacturer in North America
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-4">
                If something goes wrong years down the line, you're not at the mercy of a small contractor.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                <strong>GAF backs the warranty — not just the installer.</strong>
              </p>

              <p className="text-lg font-semibold text-gray-900">
                That's peace of mind no standard contractor can offer.
              </p>
            </Card>
          </AnimatedDiv>

          {/* Short Version CTA */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <div className="mb-6 flex items-center gap-3">
                <Star className="h-8 w-8 text-yellow-400" />
                <h3 className="text-2xl font-bold">The Short Version</h3>
              </div>
              
              <p className="text-xl text-gray-100 mb-6">
                If you want the best, safest, most reliable roofing replacement for your home in Minnesota or Wisconsin…
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ArrowRight className="h-6 w-6 text-yellow-400" />
                  <p className="text-lg font-semibold">Choose a GAF Master Elite® Contractor.</p>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowRight className="h-6 w-6 text-yellow-400" />
                  <p className="text-lg font-semibold">Choose <Link href="/about" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">Advanced Roofing & Siding</Link>.</p>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                    Get Your Free Estimate
                  </Button>
                </Link>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
  )
}

