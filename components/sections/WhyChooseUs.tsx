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

      <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-4">
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
              <Card className="h-full text-center p-3 md:p-5" variant="elevated">
                {/* Icon Circle */}
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 shadow-sm md:mb-4 md:h-14 md:w-14">
                  <Icon className="h-5 w-5 text-brand-primary md:h-7 md:w-7" strokeWidth={2} />
                </div>

                <h3 className="mb-1 text-xs font-bold tracking-tight text-gray-900 md:mb-2 md:text-base">{feature.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed md:text-sm">{feature.description}</p>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}


