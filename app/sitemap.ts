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
    '/resources',
    '/resources/warranties',
    '/who-we-serve',
    '/who-we-serve/residential',
    '/who-we-serve/commercial',
    '/who-we-serve/municipal',
    '/who-we-serve/professionals',
    '/who-we-serve/property-manager',
    '/who-we-serve/hoa',
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

