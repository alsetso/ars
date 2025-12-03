'use client'

import { Section } from '@/components/ui/Section'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { COMPANY_INFO } from '@/lib/constants'
import { Shield, CheckCircle, Phone, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface InsuranceClaimsCTAProps {
  variant?: 'default' | 'compact'
  showTitle?: boolean
}

export function InsuranceClaimsCTA({ variant = 'default', showTitle = true }: InsuranceClaimsCTAProps) {
  const benefits = [
    'Free storm damage inspection',
    'Adjuster meeting representation',
    '48-hour inspection guarantee',
    'Full claim support & documentation',
  ]

  if (variant === 'compact') {
    return (
      <Card className="bg-gray-50 border-gray-200">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-primary mt-0.5">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-bold text-gray-900">Storm Damage? We Handle Insurance Claims</h3>
              <p className="text-sm text-gray-600">
                Free inspection • Adjuster representation • 48-hour guarantee
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link href="/resources/insurance-claims">
              <Button variant="primary" size="md">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Button variant="outline" size="md">
                <Phone className="mr-2 h-4 w-4" />
                {COMPANY_INFO.phone}
              </Button>
            </a>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Section className="bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="mx-auto max-w-6xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid gap-4 md:gap-8 md:grid-cols-2">
              {/* Left Side - Content */}
              <div>
                {showTitle && (
                  <div className="mb-3 flex items-center gap-2 md:mb-4 md:gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary md:h-10 md:w-10">
                      <Shield className="h-4 w-4 text-white md:h-5 md:w-5" />
                    </div>
                    <h2 className="text-lg font-bold tracking-tight text-gray-900 md:text-3xl">
                      Storm Damage? We Handle Insurance Claims
                    </h2>
                  </div>
                )}
                <p className="mb-4 text-sm leading-relaxed text-gray-700 md:mb-6 md:text-lg">
                  Don't navigate the insurance claim process alone. Advanced Roofing & Siding Inc.
                  provides expert claim assistance, free inspections, and adjuster representation to
                  ensure you get the coverage you deserve.
                </p>

                <ul className="mb-4 space-y-2 md:mb-6 md:space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 md:gap-3">
                      <div className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary md:h-5 md:w-5">
                        <CheckCircle className="h-2.5 w-2.5 text-white md:h-3.5 md:w-3.5" />
                      </div>
                      <span className="text-xs text-gray-700 md:text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                  <Link href="/resources/insurance-claims">
                    <Button variant="primary" size="md" className="w-full sm:w-auto">
                      Learn About Our Process
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="md" className="w-full sm:w-auto">
                      <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      Get Free Inspection
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Side - Stats/Highlights */}
              <div className="flex flex-col justify-center gap-2 md:gap-4">
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm md:p-8">
                  <div className="mb-1 text-2xl font-bold tracking-tight text-brand-primary md:mb-2 md:text-5xl">48-Hour</div>
                  <div className="text-xs font-semibold text-gray-700 md:text-base">Inspection Guarantee</div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm md:p-8">
                  <div className="mb-1 text-2xl font-bold tracking-tight text-brand-primary md:mb-2 md:text-5xl">100%</div>
                  <div className="text-xs font-semibold text-gray-700 md:text-base">Adjuster Meeting Attendance</div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm md:p-8">
                  <div className="mb-1 text-2xl font-bold tracking-tight text-brand-primary md:mb-2 md:text-5xl">30+</div>
                  <div className="text-xs font-semibold text-gray-700 md:text-base">Years of Claim Experience</div>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </Section>
  )
}

