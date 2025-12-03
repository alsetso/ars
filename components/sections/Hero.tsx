'use client'

import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { motion } from 'framer-motion'
import { Shield, Award, BadgeCheck } from 'lucide-react'
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
    <section className="relative min-h-[600px] overflow-hidden sm:min-h-[700px] lg:min-h-[800px]">
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
            {/* Fallback image - shows while video loads or if video fails */}
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
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/60 to-gray-900/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="mb-3 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Elite Exterior Solutions
            </h1>
            <p className="text-base text-gray-100 sm:text-lg lg:text-xl">
              <Link href="/about" className="underline decoration-white/50 underline-offset-3 hover:decoration-white transition-colors">
                GAF Master Elite contractor
              </Link> delivering premium results across <Link href="/service-areas" className="underline decoration-white/50 underline-offset-3 hover:decoration-white transition-colors">Minnesota & Wisconsin</Link>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mb-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Get Free Estimate
              </Button>
            </Link>
          </motion.div>

          {/* Badges */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm px-3 py-1.5  md:px-4 md:py-2">
              <Shield className="h-4 w-4 text-white md:h-5 md:w-5" />
              <span className="text-xs font-semibold text-white md:text-sm">GAF Master Elite</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm px-3 py-1.5  md:px-4 md:py-2">
              <Award className="h-4 w-4 text-white md:h-5 md:w-5" />
              <span className="text-xs font-semibold text-white md:text-sm">30+ Years</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm px-3 py-1.5  md:px-4 md:py-2">
              <BadgeCheck className="h-4 w-4 text-white md:h-5 md:w-5" />
              <span className="text-xs font-semibold text-white md:text-sm">A+ BBB Rating</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


