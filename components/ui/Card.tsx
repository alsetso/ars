'use client'

import { cn } from '@/lib/utils'
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
  variant = 'default',
  onMouseEnter,
  onMouseLeave
}: CardProps) {
  const variantStyles = {
    default: 'bg-white border border-gray-100',
    elevated: 'bg-white border border-gray-100',
    outlined: 'bg-white border-2 border-gray-200',
  }

  return (
    <div
      className={cn(
        'rounded-xl p-5 md:p-6 transition-all duration-200',
        variantStyles[variant],
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}


