'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ReactNode, MouseEventHandler } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  variant?: 'default' | 'elevated' | 'outlined'
  onMouseEnter?: MouseEventHandler<HTMLDivElement>
  onMouseLeave?: MouseEventHandler<HTMLDivElement>
}

export function Card({ 
  children, 
  className, 
  hover = true, 
  variant = 'default',
  onMouseEnter,
  onMouseLeave
}: CardProps) {
  const Component = hover ? motion.div : 'div'
  
  const variantStyles = {
    default: 'bg-white border border-gray-100',
    elevated: 'bg-white border border-gray-100',
    outlined: 'bg-white border-2 border-gray-200',
  }
  
  const motionProps = hover ? {
    transition: { type: 'spring', stiffness: 400, damping: 30 },
  } : {}

  const eventHandlers = {
    ...(onMouseEnter && { onMouseEnter }),
    ...(onMouseLeave && { onMouseLeave }),
  }

  return (
    <Component
      className={cn(
        'rounded-xl p-5 md:p-6 transition-all duration-200',
        variantStyles[variant],
        className
      )}
      {...motionProps}
      {...eventHandlers}
    >
      {children}
    </Component>
  )
}


