'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Info, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const STORAGE_KEY = 'demo-disclaimer-dismissed'

export function DemoDisclaimer() {
  const pathname = usePathname()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isHomepage = pathname === '/'

  useEffect(() => {
    // Auto-show on homepage if not previously dismissed
    if (isHomepage) {
      const dismissed = localStorage.getItem(STORAGE_KEY)
      if (!dismissed) {
        setTimeout(() => {
          setIsModalOpen(true)
        }, 500)
      }
    }
  }, [isHomepage])

  const handleOpen = () => {
    setIsModalOpen(true)
  }

  const handleDismiss = () => {
    setIsModalOpen(false)
    localStorage.setItem(STORAGE_KEY, 'true')
  }

  return (
    <>
      {/* Floating Warning Button - Always visible on all pages */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        onClick={handleOpen}
        className="fixed bottom-6 left-6 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 shadow-lg transition-all hover:scale-110 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        aria-label="View site disclaimer"
      >
        <AlertTriangle className="h-6 w-6 text-white" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-sm"
              onClick={handleDismiss}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-[10001] flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-w-sm rounded-lg bg-white shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={handleDismiss}
                  className="absolute right-3 top-3 z-10 rounded-md p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label="Close disclaimer"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
                      <Info className="h-4 w-4 text-blue-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">Project Preview</h2>
                  </div>

                  <div className="space-y-3 text-sm text-gray-700">
                    <p className="leading-relaxed">
                      This is a project URL for an improved website for <strong className="font-semibold text-gray-900">Advanced Roofing and Siding</strong>.
                    </p>
                  </div>

                  <div className="mt-4">
                    <Button
                      onClick={handleDismiss}
                      variant="primary"
                      size="md"
                      className="w-full"
                    >
                      I Understand
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

