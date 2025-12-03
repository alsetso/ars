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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                <Card className="h-full text-center" variant="elevated">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                      <Icon className="h-7 w-7 text-brand-primary" strokeWidth={2} />
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900 md:text-5xl">
                      {stat.value}
                    </span>
                  </div>
                  
                  <h3 className="mb-1 text-base font-bold text-gray-900 md:text-lg">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-gray-600">
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

