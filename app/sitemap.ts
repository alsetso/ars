import { MetadataRoute } from 'next'
import { getAllCityData } from '@/lib/city-utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://advancedroofingmn.com'
  const cities = getAllCityData()
  
  const staticPages = [
    '',
    '/about',
    '/services',
    '/services/roofing',
    '/services/siding',
    '/services/windows',
    '/services/storm-restoration',
    '/services/winterization',
    '/service-areas',
    '/contact',
    '/warranties',
    '/resources',
    '/resources/programs',
    '/resources/programs/residential',
    '/resources/programs/commercial',
    '/resources/programs/municipal',
    '/resources/programs/agent',
    '/resources/programs/property-manager',
    '/resources/programs/hoa',
    '/resources/insurance-claims',
    '/resources/gaf-master-elite-contractor',
    '/resources/24-7-support',
    '/resources/reviews',
    '/resources/videos',
  ]
  
  const cityPages = cities.map(city => ({
    url: `${baseUrl}/service-areas/${city.state}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  return [
    ...staticPages.map(url => ({
      url: `${baseUrl}${url === '' ? '/' : url}`,
      lastModified: new Date(),
      changeFrequency: (url === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: url === '' ? 1.0 : 0.8,
    })),
    ...cityPages,
  ]
}

