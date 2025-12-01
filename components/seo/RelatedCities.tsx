'use client'

import { getAllCityData, cityToSlug } from '@/lib/city-utils'
import Link from 'next/link'
import { useMemo } from 'react'

interface RelatedCitiesProps {
  currentCity: string
  currentState: string
  limit?: number
}

// Get cities within approximate 50-mile radius
const CITY_CLUSTERS: Record<string, string[]> = {
  // Twin Cities Metro
  minneapolis: ['st-paul', 'bloomington', 'edina', 'plymouth', 'maple-grove', 'eden-prairie', 'minnetonka', 'hopkins', 'golden-valley', 'crystal', 'fridley', 'brooklyn-park', 'brooklyn-center'],
  'st-paul': ['minneapolis', 'bloomington', 'woodbury', 'maplewood', 'roseville', 'eagan', 'burnsville', 'lakeville'],
  bloomington: ['minneapolis', 'edina', 'eden-prairie', 'burnsville', 'eagan', 'richfield'],
  edina: ['minneapolis', 'bloomington', 'hopkins', 'eden-prairie', 'minnetonka'],
  plymouth: ['maple-grove', 'minnetonka', 'wayzata', 'golden-valley'],
  'maple-grove': ['plymouth', 'brooklyn-park', 'rogers', 'dayton', 'osseo'],
  'eden-prairie': ['minnetonka', 'hopkins', 'chanhassen', 'bloomington'],
  minnetonka: ['hopkins', 'edina', 'wayzata', 'eden-prairie'],
  // Anoka County
  anoka: ['coon-rapids', 'blaine', 'andover', 'ramsey', 'champlin', 'fridley'],
  'coon-rapids': ['blaine', 'andover', 'anoka', 'brooklyn-park'],
  blaine: ['coon-rapids', 'andover', 'ham-lake', 'fridley'],
  andover: ['anoka', 'ham-lake', 'ramsey', 'coon-rapids'],
  // Western Suburbs
  rogers: ['maple-grove', 'elk-river', 'dayton', 'albertville'],
  'elk-river': ['rogers', 'big-lake', 'ramsey', 'anoka'],
  // Southern Suburbs
  burnsville: ['eagan', 'lakeville', 'apple-valley', 'bloomington'],
  eagan: ['burnsville', 'st-paul', 'inver-grove-heights', 'rosemount'],
  lakeville: ['burnsville', 'apple-valley', 'farmington', 'prior-lake'],
  'apple-valley': ['burnsville', 'lakeville', 'rosemount', 'eagan'],
  // Wisconsin
  hudson: ['river-falls', 'new-richmond', 'prescott', 'somerset'],
  'river-falls': ['hudson', 'prescott', 'somerset'],
  'new-richmond': ['hudson', 'somerset', 'st-croix-falls'],
}

export function RelatedCities({ currentCity, currentState, limit = 6 }: RelatedCitiesProps) {
  const relatedCities = useMemo(() => {
    const allCities = getAllCityData()
    const currentSlug = cityToSlug(currentCity)
    
    // Get cluster for current city
    const cluster = CITY_CLUSTERS[currentSlug] || []
    
    // Find related cities in same state
    const related = allCities
      .filter((city) => {
        if (city.state !== currentState.toLowerCase()) return false
        if (city.slug === currentSlug) return false
        return cluster.includes(city.slug)
      })
      .slice(0, limit)
    
    // If no cluster found, get nearby cities in same state
    if (related.length === 0) {
      return allCities
        .filter((city) => city.state === currentState.toLowerCase() && city.slug !== currentSlug)
        .slice(0, limit)
    }
    
    return related
  }, [currentCity, currentState, limit])

  if (relatedCities.length === 0) return null

  return (
    <div className="mt-8 rounded-lg bg-gray-50 p-6">
      <h3 className="mb-4 text-lg font-bold text-gray-900">Also Serving Nearby Areas</h3>
      <div className="flex flex-wrap gap-2">
        {relatedCities.map((city) => (
          <Link
            key={city.slug}
            href={`/service-areas/${city.state}/${city.slug}`}
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-brand-primary hover:text-white"
          >
            {city.city}
          </Link>
        ))}
      </div>
    </div>
  )
}

