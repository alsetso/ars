'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { 
  Phone, 
  ClipboardCheck, 
  FileText, 
  Hammer, 
  Shield,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    icon: Phone,
    title: 'Free Estimate',
    description: 'Contact us for a no-obligation estimate. We\'ll schedule a convenient time to inspect your property and discuss your needs.',
    link: '/services/free-estimate',
    linkText: 'Get Free Estimate',
  },
  {
    icon: ClipboardCheck,
    title: 'Professional Inspection',
    description: 'Our licensed inspectors evaluate your property, assess damage, and identify the best solutions for your home or business.',
    link: '/services/free-estimate',
    linkText: 'Schedule Inspection',
  },
  {
    icon: FileText,
    title: 'Detailed Proposal',
    description: 'Receive a comprehensive proposal with materials, timeline, pricing, and warranty information. No surprises—just transparent, honest communication.',
    link: '/contact',
    linkText: 'View Services',
  },
  {
    icon: Hammer,
    title: 'Expert Installation',
    description: 'Our certified crew performs professional installation using premium materials and industry best practices. We minimize disruption and maintain a clean worksite.',
    link: '/about',
    linkText: 'Learn About Us',
  },
  {
    icon: Shield,
    title: 'Warranty Registration',
    description: 'Your warranty is registered with GAF, providing industry-leading protection. Our warranties continue even if we go out of business.',
    link: '/resources/warranties',
    linkText: 'View Warranties',
  },
]

export function Process() {
  return (
    <Section className="bg-gray-50">
      <SectionHeader
        title="How It Works"
        description="A straightforward process from estimate to warranty registration"
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <AnimatedDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full text-center" variant="elevated">
                  {/* Step Number */}
                  <div className="mb-4 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-50 to-red-100">
                      <span className="text-lg font-bold text-brand-primary">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                      <Icon className="h-7 w-7 text-brand-primary" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>

                  {/* Link */}
                  <Link
                    href={step.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary transition-colors hover:text-red-800"
                  >
                    {step.linkText}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Card>
              </AnimatedDiv>
            )
          })}
        </div>

        {/* Connecting Line (Desktop Only) */}
        <div className="hidden lg:block">
          <div className="relative -mt-6 mb-6 flex items-center justify-between px-8">
            {steps.slice(0, -1).map((_, index) => (
              <div
                key={index}
                className="h-0.5 flex-1 bg-gradient-to-r from-red-200 to-red-100"
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

