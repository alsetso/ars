'use client'

import { EstimateForm } from '@/components/forms/EstimateForm'
import { motion } from 'framer-motion'
import { Shield, Award, BadgeCheck, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [useVideo, setUseVideo] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if user prefers reduced motion or is on slow connection
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
    
    if (prefersReducedMotion || (connection && connection.effectiveType === 'slow-2g')) {
      setUseVideo(false)
    }
  }, [])

  const handleVideoLoaded = () => {
    setVideoLoaded(true)
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // If autoplay fails, still show video
        setVideoLoaded(true)
      })
    }
  }

  const handleVideoError = () => {
    setUseVideo(false)
    setVideoLoaded(false)
  }

  useEffect(() => {
    // Ensure video plays when component mounts and video is ready
    if (useVideo && videoRef.current && videoRef.current.readyState >= 2) {
      videoRef.current.play().catch(() => {})
      setVideoLoaded(true)
    }
  }, [useVideo])

  return (
    <section className="relative overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {useVideo ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
              onLoadedData={handleVideoLoaded}
              onCanPlay={handleVideoLoaded}
              onError={handleVideoError}
              style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in', zIndex: 1 }}
            >
              <source src="/townhomes1.mp4" type="video/mp4" />
            </video>
            <Image
              src="/gallery/340661788_241238031731100_708703886642482358_n.webp"
              alt="Advanced Roofing & Siding - Professional Roofing Services"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              style={{ opacity: videoLoaded ? 0 : 1, transition: 'opacity 0.5s ease-in', zIndex: 0 }}
            />
          </>
        ) : (
          <Image
            src="/gallery/340661788_241238031731100_708703886642482358_n.webp"
            alt="Advanced Roofing & Siding - Professional Roofing Services"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        {/* Stronger overlay on left for text legibility, lighter on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/65 to-gray-900/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_460px] lg:gap-14">

          {/* ── Left: copy ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <h1 className="mb-3 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Elite Exterior Solutions
              </h1>
              <p className="text-base text-gray-200 sm:text-lg lg:text-xl">
                <Link href="/about" className="underline decoration-white/50 underline-offset-2 hover:decoration-white transition-colors">
                  GAF Master Elite contractor
                </Link>{' '}
                delivering premium results across{' '}
                <Link href="/service-areas" className="underline decoration-white/50 underline-offset-2 hover:decoration-white transition-colors">
                  Minnesota &amp; Wisconsin
                </Link>
              </p>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="mb-8 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2">
                <Shield className="h-4 w-4 text-white md:h-5 md:w-5" />
                <span className="text-xs font-semibold text-white md:text-sm">GAF Master Elite</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2">
                <Award className="h-4 w-4 text-white md:h-5 md:w-5" />
                <span className="text-xs font-semibold text-white md:text-sm">30+ Years</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2">
                <BadgeCheck className="h-4 w-4 text-white md:h-5 md:w-5" />
                <span className="text-xs font-semibold text-white md:text-sm">A+ BBB Rating</span>
              </div>
            </motion.div>

            {/* Phone CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <a
                href="tel:763-427-3093"
                className="inline-flex items-center gap-2.5 text-white/80 transition-colors hover:text-white"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-white/60">Call us directly</p>
                  <p className="text-base font-bold">763-427-3093</p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* ── Right: estimate form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="rounded-2xl bg-white p-6 shadow-large md:p-7">
              <div className="mb-5">
                <div className="mb-1 inline-block rounded-md bg-brand-primary-light px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary">
                  Free &amp; No Obligation
                </div>
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Get Your Free Estimate
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Response within 24 hours — usually same day
                </p>
              </div>
              <EstimateForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}


