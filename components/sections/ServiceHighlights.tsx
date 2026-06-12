'use client'

import { CheckCircle } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import Link from 'next/link'

interface Highlight {
  text: string
  link?: string | null
}

interface ServiceHighlightsProps {
  highlights: Highlight[]
}

/**
 * Compact inline feature checklist — no card wrappers, clean grid.
 * Used inside the intro Section on every service page.
 */
export function ServiceHighlights({ highlights }: ServiceHighlightsProps) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-2.5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
      {highlights.map((item, index) => (
        <AnimatedDiv
          key={item.text}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.06 }}
        >
          <div className="flex items-start gap-2.5">
            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-primary" strokeWidth={2.5} />
            <span className="text-sm text-gray-700 md:text-base leading-snug">
              {item.link ? (
                <Link
                  href={item.link}
                  className="font-semibold text-brand-primary hover:text-red-800 underline underline-offset-2 transition-colors"
                >
                  {item.text}
                </Link>
              ) : (
                item.text
              )}
            </span>
          </div>
        </AnimatedDiv>
      ))}
    </div>
  )
}
