'use client'

import { Card } from '@/components/ui/Card'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

interface ReviewCardProps {
  author: string
  rating: number
  text: string
  date: string
  source?: string
  index?: number
}

export function ReviewCard({ author, rating, text, date, source, index = 0 }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">{author}</h3>
            {source && (
              <p className="text-sm text-gray-500">{source}</p>
            )}
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">{text}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </Card>
    </motion.div>
  )
}


