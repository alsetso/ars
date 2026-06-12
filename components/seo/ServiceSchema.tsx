import { COMPANY_INFO } from '@/lib/constants'

interface ServiceSchemaProps {
  serviceName: string
  serviceDescription: string
  serviceUrl: string
  city?: string
  state?: string
  stateFull?: string
}

export function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceUrl,
  city,
  state,
  stateFull,
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: city ? `${serviceName} in ${city}, ${state}` : serviceName,
    description: serviceDescription,
    url: `https://advancedroofingmn.com${serviceUrl}`,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_INFO.name,
      url: 'https://advancedroofingmn.com',
      telephone: COMPANY_INFO.phone,
      image: 'https://advancedroofingmn.com/AFS-Logo900.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Anoka',
        addressRegion: 'MN',
        addressCountry: 'US',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150',
        bestRating: '5',
      },
    },
    ...(city && state && stateFull
      ? {
          areaServed: {
            '@type': 'City',
            name: city,
            containedIn: {
              '@type': 'State',
              name: stateFull,
            },
          },
        }
      : {
          areaServed: [
            { '@type': 'State', name: 'Minnesota' },
            { '@type': 'State', name: 'Wisconsin' },
          ],
        }),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      description: 'Free estimates available',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
