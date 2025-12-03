'use client'

import { ReactNode, useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { PageSkeleton } from '@/components/ui/PageSkeleton'

interface TemplateProps {
  children: ReactNode
}

export default function Template({ children }: TemplateProps) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)
  const prevPathnameRef = useRef(pathname)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Only show loading if pathname actually changed
    if (pathname !== prevPathnameRef.current) {
      setIsLoading(true)
      prevPathnameRef.current = pathname
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      // Small delay to ensure smooth transition and allow content to start loading
      timeoutRef.current = setTimeout(() => {
        setDisplayChildren(children)
        setIsLoading(false)
      }, 150)

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    } else {
      // Update children when they change (for same route)
      setDisplayChildren(children)
    }
  }, [pathname, children])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <PageSkeleton />
        </motion.div>
      ) : (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          {displayChildren}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

