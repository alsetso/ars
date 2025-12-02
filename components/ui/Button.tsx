'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, asChild, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50'
    
    const variants = {
      primary: 'bg-brand-primary text-white hover:bg-red-800 focus-visible:ring-brand-primary active:bg-red-900',
      secondary: 'bg-brand-secondary text-white hover:bg-blue-900 focus-visible:ring-brand-secondary active:bg-blue-950',
      outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 focus-visible:ring-gray-400 active:bg-gray-100',
    }
    
    const sizes = {
      sm: 'text-sm px-4 py-2',
      md: 'text-base px-5 py-2.5',
      lg: 'text-base px-6 py-3',
    }

    // Exclude conflicting HTML event handlers that conflict with Framer Motion
    const {
      onDrag,
      onDragStart,
      onDragEnd,
      onAnimationStart,
      onAnimationEnd,
      ...motionProps
    } = props

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        {...(motionProps as any)}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }


