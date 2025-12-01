import { MINNESOTA_CITIES, WISCONSIN_CITIES } from './constants'

// Convert city name to URL slug
export function cityToSlug(city: string): string {
  return city.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')
}

// Convert slug back to city name
export function slugToCity(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Get all cities with their slugs and states
export function getAllCityData() {
  const cities: Array<{ city: string; slug: string; state: string; stateFull: string }> = []

  MINNESOTA_CITIES.forEach((city) => {
    cities.push({
      city,
      slug: cityToSlug(city),
      state: 'mn',
      stateFull: 'Minnesota',
    })
  })

  WISCONSIN_CITIES.forEach((city) => {
    cities.push({
      city,
      slug: cityToSlug(city),
      state: 'wi',
      stateFull: 'Wisconsin',
    })
  })

  return cities
}


