'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { COMPANY_INFO } from '@/lib/constants'
import { Phone, MapPin, Mail } from 'lucide-react'

export function Contact() {
  return (
    <Section className="bg-gradient-to-br from-gray-50 to-gray-100">
      <SectionHeader
        title="Get Started Today"
        description="Schedule your free estimate with a Minnesota exterior specialist"
      />

      <div className="mx-auto max-w-4xl">
        {/* Contact Cards */}
        <div className="mb-8 grid gap-3 md:gap-4 md:grid-cols-3">
          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="text-center" variant="elevated">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100  md:h-14 md:w-14">
                <Phone className="h-6 w-6 text-brand-primary md:h-7 md:w-7" strokeWidth={2} />
              </div>
              <h3 className="mb-1.5 text-base font-bold text-gray-900 md:text-lg">Phone</h3>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-sm text-brand-primary transition-colors hover:text-red-800 font-semibold md:text-base"
              >
                {COMPANY_INFO.phone}
              </a>
            </Card>
          </AnimatedDiv>

          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <Card className="text-center" variant="elevated">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100  md:h-14 md:w-14">
                <MapPin className="h-6 w-6 text-brand-primary md:h-7 md:w-7" strokeWidth={2} />
              </div>
              <h3 className="mb-1.5 text-base font-bold text-gray-900 md:text-lg">Location</h3>
              <p className="text-sm text-gray-600 font-medium md:text-base">{COMPANY_INFO.location}</p>
            </Card>
          </AnimatedDiv>

          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="text-center" variant="elevated">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100  md:h-14 md:w-14">
                <Mail className="h-6 w-6 text-brand-primary md:h-7 md:w-7" strokeWidth={2} />
              </div>
              <h3 className="mb-1.5 text-base font-bold text-gray-900 md:text-lg">Email</h3>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-sm text-brand-primary transition-colors hover:text-red-800 font-semibold md:text-base"
              >
                {COMPANY_INFO.email}
              </a>
            </Card>
          </AnimatedDiv>
        </div>

        {/* CTA Button */}
        <AnimatedDiv
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-center"
        >
          <Button variant="primary" size="lg">
            Schedule Your Free Estimate
          </Button>
        </AnimatedDiv>
      </div>
    </Section>
  )
}


