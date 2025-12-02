'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface BadgeProps {
  icon: LucideIcon
  text: string
  className?: string
}

export function Badge({ icon: Icon, text, className }: BadgeProps) {
  return (
    <motion.div
      className={cn(
        'flex items-center gap-2 rounded-lg bg-white/90 backdrop-blur-sm px-4 py-2',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Icon className="h-5 w-5 text-brand-primary" />
      <span className="text-sm font-semibold text-gray-800">{text}</span>
    </motion.div>
  )
}


