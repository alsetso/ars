'use client'

import { motion } from 'framer-motion'

export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <div className="relative h-[400px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 sm:h-[500px] lg:h-[600px]">
        <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="h-12 w-3/4 mx-auto bg-gray-300 rounded-lg animate-pulse sm:h-16" />
              <div className="h-6 w-1/2 mx-auto bg-gray-300 rounded-lg animate-pulse" />
              <div className="h-12 w-48 mx-auto bg-gray-300 rounded-lg animate-pulse mt-8" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="h-10 w-2/3 mx-auto bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-6 w-full mx-auto bg-gray-200 rounded-lg animate-pulse" />
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-xl p-6 space-y-4"
              >
                <div className="h-12 w-12 bg-gray-200 rounded-xl animate-pulse" />
                <div className="h-6 w-3/4 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-4 w-full bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-4 w-2/3 bg-gray-200 rounded-lg animate-pulse" />
              </motion.div>
            ))}
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-4 w-full bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-200 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}


