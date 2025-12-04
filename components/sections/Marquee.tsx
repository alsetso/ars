'use client'

import { COMPANY_INFO } from '@/lib/constants'
import { Shield, Award, BadgeCheck, CheckCircle } from 'lucide-react'

const marqueeItems = [
  { icon: Shield, text: 'GAF Master Elite Certified' },
  { icon: Award, text: '30+ Years of Excellence' },
  { icon: BadgeCheck, text: 'A+ BBB Rating' },
  { icon: CheckCircle, text: 'Licensed & Insured' },
  { icon: Shield, text: '50-Year Warranty Available' },
  { icon: Award, text: 'Family Owned & Operated' },
]

export function Marquee() {
  return (
    <section className="border-y border-gray-200 bg-white py-4">
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set */}
          {marqueeItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={`first-${index}`}
                className="mx-8 flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <Icon className="h-4 w-4 text-brand-primary" />
                <span>{item.text}</span>
              </div>
            )
          })}
          {/* Duplicate set for seamless loop */}
          {marqueeItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={`second-${index}`}
                className="mx-8 flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <Icon className="h-4 w-4 text-brand-primary" />
                <span>{item.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


