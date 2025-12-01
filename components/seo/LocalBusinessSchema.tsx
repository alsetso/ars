import { COMPANY_INFO } from '@/lib/constants'

interface LocalBusinessSchemaProps {
  city: string
  state: string
  stateFull: string
}

export function LocalBusinessSchema({ city, state, stateFull }: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://advancedroofingmn.com/service-areas/${state}/${city}`,
    name: `${COMPANY_INFO.name} - ${city}, ${state}`,
    image: 'https://advancedroofingmn.com/AFS-Logo900.png',
    additionalType: 'https://schema.org/HomeAndGardenBusiness',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: state,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Coordinates would be added per city if available
    },
    url: `https://advancedroofingmn.com/service-areas/${state}/${city}`,
    telephone: COMPANY_INFO.phone,
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: city,
      containedIn: {
        '@type': 'State',
        name: stateFull,
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing and Exterior Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roofing Services',
            description: 'GAF Master Elite certified roofing installations',
            areaServed: {
              '@type': 'City',
              name: city,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Siding Services',
            description: 'Durable, weather-resistant siding systems',
            areaServed: {
              '@type': 'City',
              name: city,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Window Installation',
            description: 'Energy-efficient window replacement',
            areaServed: {
              '@type': 'City',
              name: city,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Storm Restoration',
            description: 'Expert storm damage assessment and restoration',
            areaServed: {
              '@type': 'City',
              name: city,
            },
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      // Add social media profiles when available
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

