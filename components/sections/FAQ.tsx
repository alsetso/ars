'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'How long does a roof replacement take?',
    answer: 'Most residential roof replacements take 1-3 days, depending on the size and complexity of your home. Commercial projects may take longer. We provide a detailed timeline in your proposal and keep you informed throughout the process. Weather conditions may affect timing, but we work efficiently to minimize disruption to your daily routine.',
  },
  {
    question: 'Do you work with insurance companies?',
    answer: 'Yes! We specialize in working with insurance companies for storm damage claims. We provide free inspections, help with claim documentation, work directly with your adjuster, and handle the entire process from start to finish. Our 48-hour inspection guarantee ensures quick response when you need it most.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We proudly serve communities across Minnesota and Wisconsin, including the Twin Cities metro area, St. Cloud, Rochester, and many more. We also serve Hudson, River Falls, and other Wisconsin communities. If you don\'t see your city listed, contact us—we may still service your area!',
  },
  {
    question: 'What makes you different from other contractors?',
    answer: 'As a GAF Master Elite contractor (top 2% nationwide), we offer industry-leading warranties including the GAF Golden Pledge 50-year warranty at no additional cost. With 30+ years of experience, A+ BBB rating, and family-owned values, we combine elite credentials with personalized service. Our warranties continue even if we go out of business.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Absolutely! We offer free, no-obligation estimates for all our services. Our experienced team will inspect your property, discuss your needs, and provide a detailed proposal with materials, timeline, and pricing. There\'s no pressure—just honest, professional advice to help you make the best decision for your home or business.',
  },
  {
    question: 'What warranties do you provide?',
    answer: 'As a GAF Master Elite contractor, we offer the GAF Golden Pledge Warranty—50 years of comprehensive coverage at no additional cost. This warranty covers materials and workmanship for full roof replacements and continues even if we go out of business. We also provide warranties for siding and window installations. Learn more on our warranties page.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section className="bg-white">
      <SectionHeader
        title="Frequently Asked Questions"
        description="Get answers to common questions about our services, process, and warranties"
      />

      <div className="mx-auto max-w-4xl">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedDiv
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="overflow-hidden" variant="outlined">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-2 p-3 text-left transition-colors hover:bg-gray-50 md:gap-4 md:p-6"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-start gap-2 flex-1 md:gap-4">
                    <div className="mt-0.5 flex-shrink-0">
                      <HelpCircle className="h-4 w-4 text-brand-primary md:h-5 md:w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 md:text-lg">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-gray-500 transition-transform duration-200 md:h-5 md:w-5 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-100 px-3 pb-3 pt-0 md:px-6 md:pb-6">
                        <div className="pl-6 md:pl-10">
                          <p className="text-xs leading-relaxed text-gray-700 md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </div>

      {/* FAQ Schema Markup */}
      <FAQSchema faqs={faqs} />
    </Section>
  )
}

