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
              <div className="relative w-full max-w-4xl max-h-[90vh] rounded-lg bg-white shadow-2xl flex flex-col">
                {/* Close Button */}
                <button
                  onClick={handleDismiss}
                  className="absolute right-3 top-3 z-10 rounded-md p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label="Close disclaimer"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                      <Info className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">Project Preview</h2>
                      <p className="text-sm text-gray-600 mt-1">
                        Site Overview — Advanced Roofing & Siding Inc.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-6 text-sm text-gray-700">
                    {/* Page Count and Structure */}
                    <section>
                      <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                        Page Count and Structure
                      </h3>
                      <div className="ml-4 space-y-2">
                        <p>
                          <strong className="font-semibold text-gray-900">Total pages:</strong> ~80–85
                        </p>
                        <ul className="ml-4 space-y-1.5 list-disc text-gray-600">
                          <li><strong className="font-semibold text-gray-800">Static pages:</strong> ~35 (services, resources, about, contact, etc.)</li>
                          <li><strong className="font-semibold text-gray-800">Dynamic city pages:</strong> 46 (40 Minnesota + 6 Wisconsin)</li>
                          <li><strong className="font-semibold text-gray-800">Service-specific pages:</strong> 5 main services + forms</li>
                          <li><strong className="font-semibold text-gray-800">Insurance claims pages:</strong> 7 specialized pages</li>
                          <li><strong className="font-semibold text-gray-800">Who-we-serve pages:</strong> 7 audience-specific pages</li>
                        </ul>
                      </div>
                    </section>

                    {/* SEO and Google Ranking Potential */}
                    <section>
                      <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                        SEO and Google Ranking Potential
                      </h3>
                      <div className="ml-4 space-y-4">
                        {/* Schema Markup */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Schema Markup:</h4>
                          <ul className="ml-4 space-y-1.5 list-disc text-gray-600">
                            <li>Organization schema (aggregate rating: 4.9/5, 150 reviews)</li>
                            <li>LocalBusiness schema (per city)</li>
                            <li>FAQPage schema</li>
                            <li>Structured data on all major pages</li>
                          </ul>
                        </div>

                        {/* Metadata Coverage */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Metadata Coverage:</h4>
                          <ul className="ml-4 space-y-1.5 list-disc text-gray-600">
                            <li>41+ pages with custom metadata</li>
                            <li>Unique titles/descriptions per page</li>
                            <li>OpenGraph tags for social sharing</li>
                            <li>Twitter Card support</li>
                            <li>Canonical URLs configured</li>
                          </ul>
                        </div>

                        {/* Local SEO */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Local SEO:</h4>
                          <ul className="ml-4 space-y-1.5 list-disc text-gray-600">
                            <li>46 city-specific pages with unique, weather-aware content</li>
                            <li>City-specific keywords and meta descriptions</li>
                            <li>LocalBusiness schema per city</li>
                            <li>Service area coverage (MN + WI)</li>
                          </ul>
                        </div>

                        {/* Technical SEO */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Technical SEO:</h4>
                          <ul className="ml-4 space-y-1.5 list-disc text-gray-600">
                            <li>XML sitemap (auto-generated, includes all city pages)</li>
                            <li>Robots.txt configured</li>
                            <li>Next.js 14 App Router (SSG/SSR)</li>
                            <li>Image optimization (AVIF/WebP)</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    {/* Note */}
                    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-sm text-amber-900 leading-relaxed">
                        <strong className="font-semibold">Note:</strong> This is a project URL for an improved website for <strong className="font-semibold">Advanced Roofing & Siding Inc.</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200">
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

