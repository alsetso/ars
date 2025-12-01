'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedDivProps {
  children: ReactNode
  className?: string
  initial?: { opacity?: number; y?: number; x?: number }
  animate?: { opacity?: number; y?: number; x?: number }
  whileInView?: { opacity?: number; y?: number; x?: number }
  viewport?: { once?: boolean }
  transition?: { duration?: number; delay?: number }
}

export function AnimatedDiv({
  children,
  className,
  initial = { opacity: 0, y: 20 },
  animate,
  whileInView,
  viewport,
  transition,
}: AnimatedDivProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}


