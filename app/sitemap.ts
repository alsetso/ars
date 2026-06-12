import { MetadataRoute } from 'next'
import { getAllCityData } from '@/lib/city-utils'
import { SERVICE_PAGE_MAP } from '@/lib/content-generator'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://advancedroofingmn.com'
  const cities = getAllCityData()
  const serviceslugs = Object.keys(SERVICE_PAGE_MAP)

  const staticPages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },

    // Services hub + all individual service pages
    { url: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/services/roofing', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/services/siding', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/services/windows', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/services/storm-restoration', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/services/gutters', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/soffit-fascia', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/exterior-doors', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/winterization', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/services/free-estimate', priority: 0.8, changeFrequency: 'monthly' as const },

    // Service areas hub + state landing pages
    { url: '/service-areas', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/service-areas/minnesota', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/service-areas/wisconsin', priority: 0.8, changeFrequency: 'monthly' as const },

    // Resources
    { url: '/resources', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/warranties', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/resources/gaf-master-elite-contractor', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/resources/24-7-support', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/reviews', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/videos', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/resources/days-onsite', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/resources/project-gallery', priority: 0.7, changeFrequency: 'monthly' as const },

    // Insurance claims
    { url: '/resources/insurance-claims', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/resources/insurance-claims/hail-damage', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/resources/insurance-claims/hail-damage-claims', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/insurance-claims/wind-damage', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/resources/insurance-claims/wind-damage-claims', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/insurance-claims/tree-damage', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/insurance-claims/ice-dam-snow-damage-claims', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/insurance-claims/old-roof', priority: 0.7, changeFrequency: 'monthly' as const },

    // Who we serve
    { url: '/who-we-serve', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/who-we-serve/residential', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/who-we-serve/commercial', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/who-we-serve/municipal', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/who-we-serve/professionals', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/who-we-serve/property-manager', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/who-we-serve/hoa', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/who-we-serve/agent', priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  // /service-areas/[state]/[city] pages
  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/service-areas/${city.state}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // /services/[service]/[state]/[city] matrix pages (7 services × 50 cities = 350 pages)
  const matrixPages = serviceslugs.flatMap((serviceSlug) =>
    cities.map((city) => ({
      url: `${baseUrl}/services/${serviceSlug}/${city.state}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }))
  )

  return [
    ...staticPages.map(({ url, priority, changeFrequency }) => ({
      url: `${baseUrl}${url}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...cityPages,
    ...matrixPages,
  ]
}
