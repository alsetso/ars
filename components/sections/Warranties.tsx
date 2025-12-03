'use client'

import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Warranties() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Warranties are like a safety net
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700">
              By giving you the peace of mind that the money you are spending on your home is worth
              it. With industry-leading GAF warranties, we make sure that there is a solid foundation
              of trust built between us, your service provider, and you, the homeowner.
            </p>
          </AnimatedDiv>

          {/* Main Content Card */}
          <Card className="mb-8">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Big Protection for Your Big Investment
              </h3>
              <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-gray-700">
                As a <strong>GAF Master Elite Contractor</strong>, we offer the{' '}
                <strong>GAF Golden Pledge Warranty</strong> – providing{' '}
                <strong>50-year coverage at no additional cost</strong>. This coverage continues even
                if we go out of business.
              </p>
              <Link href="/resources/warranties">
                <Button variant="primary" size="lg">
                  Learn More About Our Warranties
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Card>

          {/* Certifications Grid - 2x2 */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* GAF Master Elite */}
            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full text-center">
                <div className="mb-4 flex justify-center">
                  <div className="relative h-32 w-48">
                    <Image
                      src="/MASTER_ELITE_png2.webp"
                      alt="GAF Master Elite Certification"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 192px"
                    />
                  </div>
                </div>
                <h4 className="mb-2 text-lg font-bold text-gray-900">GAF Master Elite</h4>
                <p className="text-sm text-gray-600">
                  Top 3% of roofing contractors nationwide with this prestigious certification
                </p>
              </Card>
            </AnimatedDiv>

            {/* GAF Golden Pledge */}
            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full text-center">
                <div className="mb-4 flex justify-center">
                  <div className="relative h-32 w-48">
                    <Image
                      src="/GOLDEN_PLEDGE.webp"
                      alt="GAF Golden Pledge Warranty"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 192px"
                    />
                  </div>
                </div>
                <h4 className="mb-2 text-lg font-bold text-gray-900">GAF Golden Pledge</h4>
                <p className="text-sm text-gray-600">
                  50-year warranty coverage at no additional cost
                </p>
              </Card>
            </AnimatedDiv>

            {/* GAF 3x Triple Award */}
            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full text-center">
                <div className="mb-4 flex justify-center">
                  <div className="relative h-32 w-48">
                    <Image
                      src="/GAF-3xTripleAward.webp"
                      alt="GAF 3x Triple Award"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 192px"
                    />
                  </div>
                </div>
                <h4 className="mb-2 text-lg font-bold text-gray-900">GAF 3x Triple Award</h4>
                <p className="text-sm text-gray-600">
                  Recognized for excellence in roofing installation and customer service
                </p>
              </Card>
            </AnimatedDiv>

            {/* Presidents Club 3 Star */}
            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full text-center">
                <div className="mb-4 flex justify-center">
                  <div className="relative h-32 w-48">
                    <Image
                      src="/Presidents_Club_3_Star_Residential.webp"
                      alt="GAF Presidents Club 3 Star Residential"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 192px"
                    />
                  </div>
                </div>
                <h4 className="mb-2 text-lg font-bold text-gray-900">
                  Presidents Club 3 Star
                </h4>
                <p className="text-sm text-gray-600">
                  Excellence in residential roofing services and customer satisfaction
                </p>
              </Card>
            </AnimatedDiv>

          </div>
        </div>
      </div>
    </section>
  )
}

