'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ImageIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const thumbnails = [
  {
    src: '/gallery/394570286_927694532166401_5050008028973736549_n.webp',
    alt: 'GAF-certified asphalt shingle roof replacement in Anoka County, Minnesota',
  },
  {
    src: '/gallery/379307894_905433307725857_336380520310619416_n (1).webp',
    alt: 'LP SmartSide siding installation on Minnesota home',
  },
  {
    src: '/gallery/380156327_905711167698071_326976560032986429_n.webp',
    alt: 'Storm damage restoration project in the Twin Cities metro',
  },
]

export function ProjectGallery() {
  return (
    <section className="bg-white border-t border-gray-100 section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* ── Left: thumbnail cluster ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 gap-3"
          >
            {/* Top-left thumbnail */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={thumbnails[0].src}
                alt={thumbnails[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* Top-right thumbnail */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={thumbnails[1].src}
                alt={thumbnails[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* Bottom: full-width thumbnail */}
            <div className="relative col-span-2 aspect-[16/7] overflow-hidden rounded-xl">
              <Image
                src={thumbnails[2].src}
                alt={thumbnails[2].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Subtle overlay with gallery count hint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <ImageIcon className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-white/90">
                    View full gallery →
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: copy ── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">
              Our Work
            </p>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              See Our Gallery
            </h2>

            <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
              Since the early 1990s, Advanced Roofing & Siding has completed thousands of
              exterior projects across the{' '}
              <Link href="/service-areas" className="font-medium text-gray-800 hover:text-brand-primary transition-colors">
                Twin Cities metro and Western Wisconsin
              </Link>
              — from single-family{' '}
              <Link href="/services/roofing" className="font-medium text-gray-800 hover:text-brand-primary transition-colors">
                roof replacements
              </Link>{' '}
              and{' '}
              <Link href="/services/siding" className="font-medium text-gray-800 hover:text-brand-primary transition-colors">
                full siding systems
              </Link>{' '}
              to large-scale{' '}
              <Link href="/services/storm-restoration" className="font-medium text-gray-800 hover:text-brand-primary transition-colors">
                storm restoration
              </Link>{' '}
              and{' '}
              <Link href="/who-we-serve/commercial" className="font-medium text-gray-800 hover:text-brand-primary transition-colors">
                commercial work
              </Link>.
            </p>

            <p className="mb-6 text-sm leading-relaxed text-gray-500 md:text-base">
              Only our best-executed jobs make it to the gallery — projects where the material
              quality, installation detail, and site cleanliness represent the standard we hold
              every crew to. You'll find{' '}
              <Link href="/services/roofing" className="font-medium text-gray-600 hover:text-brand-primary transition-colors">
                asphalt shingle systems
              </Link>
              ,{' '}
              <Link href="/services/windows" className="font-medium text-gray-600 hover:text-brand-primary transition-colors">
                window replacements
              </Link>
              , and insurance-covered{' '}
              <Link href="/resources/insurance-claims" className="font-medium text-gray-600 hover:text-brand-primary transition-colors">
                hail and wind damage repairs
              </Link>{' '}
              — documented from before demo to final inspection.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/resources/project-gallery"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary-dark transition-colors duration-200"
              >
                Browse the Gallery
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/free-estimate"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-brand-primary transition-colors duration-200"
              >
                Get a free estimate
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
