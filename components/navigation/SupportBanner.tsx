'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, AlertCircle } from 'lucide-react'

const STORAGE_KEY = 'support-banner-dismissed'

export function SupportBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem(STORAGE_KEY, 'true')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="sticky top-0 z-[60] bg-gradient-to-r from-brand-primary to-red-700 text-white shadow-lg"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3">
              <Link
                href="/resources/24-7-support"
                className="flex flex-1 items-center gap-3 hover:opacity-90 transition-opacity"
              >
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm sm:text-base font-semibold">
                  Experiencing an exterior emergency? Get immediate 24/7 support →
                </span>
              </Link>
              <button
                onClick={handleDismiss}
                className="ml-4 flex-shrink-0 rounded-md p-1 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Dismiss banner"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

