'use client'

import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

interface ReviewCardProps {
  author: string
  rating: number
  text: string
  date: string
  source?: string
  index?: number
  variant?: 'default' | 'featured'
}

function Stars({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'} ${
            i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

function AuthorInitials({ name }: { name: string }) {
  const parts = name.trim().split(' ')
  const initials = parts.length > 1
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`
    : parts[0].slice(0, 2)
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-primary text-[13px] font-bold text-white uppercase">
      {initials}
    </div>
  )
}

export function ReviewCard({ author, rating, text, date, source = 'Google', index = 0, variant = 'default' }: ReviewCardProps) {
  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-soft md:p-6"
      >
        <Quote className="mb-3 h-6 w-6 text-brand-primary opacity-60 shrink-0" strokeWidth={1.5} />
        <p className="flex-1 text-sm leading-relaxed text-gray-700 md:text-base">
          "{text}"
        </p>
        <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
          <AuthorInitials name={author} />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-gray-900">{author}</p>
            <div className="flex items-center gap-2">
              <Stars rating={rating} />
              <span className="text-[11px] text-gray-400">{source} · {date}</span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-soft md:p-5"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <AuthorInitials name={author} />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-gray-900">{author}</p>
            <p className="text-[11px] text-gray-400">{source} · {date}</p>
          </div>
        </div>
        <Stars rating={rating} />
      </div>
      <p className="flex-1 text-sm leading-relaxed text-gray-600">"{text}"</p>
    </motion.div>
  )
}
