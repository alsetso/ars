'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
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
    <Section className="bg-white border-t border-gray-100">
      <SectionHeader
        title="Why Choose Us"
        description="Excellence backed by credentials, experience, and unwavering commitment"
      />

      <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
        {FEATURES.map((feature, index) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap]

          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="group flex flex-col rounded-xl border border-gray-100 bg-white p-4 md:p-6 shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300 border-t-4 border-t-brand-primary"
            >
              {/* Icon */}
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary-light md:mb-4 md:h-12 md:w-12">
                <Icon className="h-5 w-5 text-brand-primary md:h-6 md:w-6" strokeWidth={2} />
              </div>

              {/* Content */}
              <h3 className="mb-1.5 text-sm font-bold tracking-tight text-gray-900 md:text-base">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-500 md:text-sm">
                {feature.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
