'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Phone,
  ClipboardCheck,
  FileText,
  Hammer,
  Shield,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Free Estimate',
    description:
      'Call or submit a request online. We schedule a no-obligation visit at your convenience — typically within 48 hours.',
    link: '/services/free-estimate',
    linkText: 'Request an Estimate',
  },
  {
    icon: ClipboardCheck,
    number: '02',
    title: 'On-Site Inspection',
    description:
      'A licensed inspector walks your property, photographs damage, and identifies every issue — including ones your insurance adjuster may miss.',
    link: '/resources/days-onsite',
    linkText: 'What to Expect On-Site',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Detailed Proposal',
    description:
      'You receive a line-by-line proposal with materials, scope, timeline, and pricing. No hidden fees, no vague estimates.',
    link: '/services',
    linkText: 'Explore Our Services',
  },
  {
    icon: Hammer,
    number: '04',
    title: 'Expert Installation',
    description:
      'Our own licensed crews handle every project — no subcontracting. We keep a clean job site and finish on schedule.',
    link: '/about',
    linkText: 'About Our Team',
  },
  {
    icon: Shield,
    number: '05',
    title: 'Warranty & Sign-Off',
    description:
      'Your GAF warranty is registered in your name. We do a final walkthrough together before considering the job complete.',
    link: '/resources/warranties',
    linkText: 'View Warranty Coverage',
  },
]

export function Process() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const updateScrollState = useCallback(() => {
    const container = scrollRef.current
    if (!container) return
    // Only consider actual cards, not spacer divs
    const cards = Array.from(container.querySelectorAll('[data-card]')) as HTMLElement[]
    if (cards.length === 0) return
    const containerCenter = container.scrollLeft + container.clientWidth / 2
    let closestIndex = 0
    let closestDistance = Infinity
    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(containerCenter - cardCenter)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })
    setActiveIndex(closestIndex)
    setCanScrollPrev(closestIndex > 0)
    setCanScrollNext(closestIndex < cards.length - 1)
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    updateScrollState()
    container.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      container.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState])

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current
    if (!container) return
    const cards = Array.from(container.querySelectorAll('[data-card]')) as HTMLElement[]
    const card = cards[index]
    if (!card) return
    container.scrollTo({
      left: card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2,
      behavior: 'smooth',
    })
  }

  const scrollPrev = () => scrollToIndex(Math.max(activeIndex - 1, 0))
  const scrollNext = () => scrollToIndex(Math.min(activeIndex + 1, steps.length - 1))

  return (
    <section className="bg-brand-secondary section-padding" aria-labelledby="process-heading">
      <div className="container mx-auto container-padding">

        {/* ── Section header ── */}
        <motion.div
          className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-primary">
              Our Process
            </p>
            <h2
              id="process-heading"
              className="text-2xl font-bold tracking-tight text-white md:text-3xl"
            >
              How It Works — Start to Finish
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
              Five straightforward steps from your first call to a registered warranty —
              managed by our own licensed crew the entire way.
            </p>
          </div>

          <Link
            href="/services/free-estimate"
            className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary-dark transition-colors duration-200"
          >
            Get Free Estimate
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* ── Carousel ── */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto [overflow-y:clip] scroll-smooth px-4 py-4 [scrollbar-width:none] sm:-mx-6 sm:gap-5 sm:px-6 lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden"
          >
            {/* Leading spacer — allows card 1 to center at scroll position 0 */}
            <div
              className="shrink-0 w-[calc(50%-150px)] sm:w-[calc(50%-160px)] lg:w-[calc(50%-170px)]"
              aria-hidden
            />

            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = index === activeIndex

              return (
                <div
                  data-card
                  key={step.number}
                  className="w-[min(85vw,300px)] shrink-0 snap-center sm:w-[320px] lg:w-[340px]"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={cn(
                      'flex h-full flex-col rounded-xl border p-6 shadow-large transition-all duration-300 md:p-7',
                      'bg-white/[0.06] border-white/10 text-white',
                      isActive
                        ? 'border-brand-primary/40 ring-1 ring-brand-primary/30 bg-white/[0.09]'
                        : 'scale-[0.97] opacity-70'
                    )}
                  >
                    {/* Step number + icon — left aligned */}
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary shadow-glow">
                        <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                      </div>
                      <span className="text-3xl font-black text-white/15 leading-none">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mb-2 text-base font-bold tracking-tight text-white md:text-lg">
                      {step.title}
                    </h3>
                    <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400">
                      {step.description}
                    </p>

                    <Link
                      href={step.link}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-red-400 transition-colors duration-200"
                    >
                      {step.linkText}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </motion.div>
                </div>
              )
            })}

            {/* Trailing spacer — mirrors leading spacer so last card can also center */}
            <div
              className="shrink-0 w-[calc(50%-150px)] sm:w-[calc(50%-160px)] lg:w-[calc(50%-170px)]"
              aria-hidden
            />
          </div>

          {/* ── Controls ── */}
          <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2">
              {steps.map((step, index) => (
                <button
                  key={step.number}
                  type="button"
                  aria-label={`Go to step ${step.number}: ${step.title}`}
                  aria-current={index === activeIndex ? 'step' : undefined}
                  onClick={() => scrollToIndex(index)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    index === activeIndex
                      ? 'w-8 bg-brand-primary'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  )}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous step"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="min-w-[4rem] text-center text-sm font-medium text-gray-500">
                {activeIndex + 1} / {steps.length}
              </span>
              <button
                type="button"
                aria-label="Next step"
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Section footer ── */}
        <motion.div
          className="mt-12 border-t border-white/10 pt-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-gray-500">
              Questions about what to expect?{' '}
              <Link href="/resources/insurance-claims" className="font-medium text-gray-400 hover:text-white transition-colors">
                Learn how insurance claims work
              </Link>
              {', '}
              <Link href="/resources/warranties" className="font-medium text-gray-400 hover:text-white transition-colors">
                explore our warranty coverage
              </Link>
              {', or '}
              <Link href="/resources/reviews" className="font-medium text-gray-400 hover:text-white transition-colors">
                read verified homeowner reviews
              </Link>
              {' '}from across the{' '}
              <Link href="/service-areas" className="font-medium text-gray-400 hover:text-white transition-colors">
                Twin Cities and Western Wisconsin
              </Link>.
            </p>

            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact our team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
