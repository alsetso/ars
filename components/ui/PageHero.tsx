'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ReactNode } from 'react'

interface PageHeroProps {
  title: string
  description?: string
  backgroundImage?: string
  showCTA?: boolean
  ctaText?: string
  ctaHref?: string
  children?: ReactNode
  theme?: 'default' | 'winter'
}

export function PageHero({
  title,
  description,
  backgroundImage,
  showCTA = true,
  ctaText = 'Get Free Estimate',
  ctaHref = '/contact',
  children,
  theme = 'default',
}: PageHeroProps) {
  const backgroundGradient = theme === 'winter' 
    ? 'bg-gradient-to-br from-blue-100 via-blue-50 to-white' 
    : 'bg-gradient-to-br from-gray-50 to-gray-100'
  
  const imageOpacity = theme === 'winter' ? 'opacity-30' : 'opacity-20'

  return (
    <section className={`relative overflow-hidden ${backgroundGradient}`}>
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div
            className={`h-full w-full bg-cover bg-center ${imageOpacity}`}
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
        </div>
      )}

      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="text-base text-gray-700 sm:text-lg lg:text-xl">{description}</p>
            )}
          </motion.div>

          {/* CTA Button */}
          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href={ctaHref}>
                <Button variant="primary" size="lg">
                  {ctaText}
                </Button>
              </a>
            </motion.div>
          )}

          {/* Additional Content */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

