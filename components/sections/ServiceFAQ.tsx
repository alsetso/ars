'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'

interface FAQ {
  question: string
  answer: string
}

interface ServiceFAQProps {
  faqs: FAQ[]
  description?: string
}

/**
 * Accordion FAQ — no card wrappers per item.
 * Clean divider lines, chevron toggle, first item open by default.
 */
export function ServiceFAQ({ faqs, description }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-8 text-center md:mb-10">
          <h2 className="mb-1.5 text-2xl font-bold text-gray-900 md:text-3xl">
            Frequently Asked Questions
          </h2>
          {description && (
            <p className="text-sm text-gray-500 md:text-base">{description}</p>
          )}
        </div>

        {/* Accordion items */}
        <div className="divide-y divide-gray-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <AnimatedDiv
                key={faq.question}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-gray-900 leading-snug md:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ease-in-out ${
                      isOpen ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </AnimatedDiv>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
