'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { FEATURES } from '@/lib/constants'
import { motion } from 'framer-motion'
import { Shield, Award, BadgeCheck, Users } from 'lucide-react'

const iconMap = {
  Shield,
  Award,
  BadgeCheck,
  Users,
}

export function WhyChooseUs() {
  return (
    <Section className="bg-gray-50">
      <SectionHeader
        title="Why Choose Us"
        description="Excellence backed by credentials, experience, and unwavering commitment"
      />

      <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature, index) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap]
          
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full text-center" variant="elevated">
                {/* Icon Circle */}
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 shadow-sm md:mb-4 md:h-14 md:w-14">
                  <Icon className="h-6 w-6 text-brand-primary md:h-7 md:w-7" strokeWidth={2} />
                </div>

                <h3 className="mb-1.5 text-sm font-bold tracking-tight text-gray-900 md:mb-2 md:text-base">{feature.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed md:text-sm">{feature.description}</p>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}


