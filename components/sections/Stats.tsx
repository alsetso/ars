'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Award, Users, Shield, TrendingUp } from 'lucide-react'

const stats = [
  {
    icon: Award,
    value: '30+',
    label: 'Years of Excellence',
    description: 'Three decades of trusted service',
  },
  {
    icon: Shield,
    value: 'Top 2%',
    label: 'GAF Master Elite',
    description: 'Nationwide certification',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Happy Customers',
    description: 'Verified reviews',
  },
  {
    icon: TrendingUp,
    value: 'A+',
    label: 'BBB Rating',
    description: 'Accredited since 2007',
  },
]

export function Stats() {
  return (
    <Section className="bg-gray-50">
      <SectionHeader
        title="Trusted by Thousands"
        description="Proven track record of excellence and customer satisfaction"
      />
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <AnimatedDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center p-3 md:p-5" variant="elevated">
                  <div className="mb-2 md:mb-4 flex justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 md:h-14 md:w-14">
                      <Icon className="h-4 w-4 text-brand-primary md:h-7 md:w-7" strokeWidth={2} />
                    </div>
                  </div>
                  
                  <div className="mb-1 md:mb-2">
                    <span className="text-xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                      {stat.value}
                    </span>
                  </div>
                  
                  <h3 className="mb-0.5 text-xs font-bold text-gray-900 md:mb-1 md:text-base lg:text-lg">
                    {stat.label}
                  </h3>
                  
                  <p className="text-xs text-gray-600 md:text-sm">
                    {stat.description}
                  </p>
                </Card>
              </AnimatedDiv>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

