'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  variant?: 'default' | 'elevated' | 'outlined'
}

export function Card({ children, className, hover = true, variant = 'default' }: CardProps) {
  const Component = hover ? motion.div : 'div'
  
  const variantStyles = {
    default: 'bg-white shadow-soft border border-gray-100',
    elevated: 'bg-white shadow-medium border border-gray-100',
    outlined: 'bg-white shadow-sm border-2 border-gray-200',
  }
  
  const motionProps = hover ? {
    whileHover: { 
      y: -2, 
      boxShadow: '0 8px 20px -4px rgba(0, 0, 0, 0.08), 0 4px 8px -2px rgba(0, 0, 0, 0.03)' 
    },
    transition: { type: 'spring', stiffness: 400, damping: 30 },
  } : {}

  return (
    <Component
      className={cn(
        'rounded-xl p-5 md:p-6 transition-all duration-200',
        variantStyles[variant],
        className
      )}
      {...motionProps}
    >
      {children}
    </Component>
  )
}


