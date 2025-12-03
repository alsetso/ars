import { COMPANY_INFO } from '@/lib/constants'

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://advancedroofingmn.com/#organization',
    name: COMPANY_INFO.name,
    url: 'https://advancedroofingmn.com',
    logo: 'https://advancedroofingmn.com/AFS-Logo900.png',
    image: 'https://advancedroofingmn.com/AFS-Logo900.png',
    description: 'GAF Master Elite contractor delivering premium roofing, siding, windows, and storm restoration services across Minnesota and Wisconsin. 30+ years of experience with A+ BBB rating.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY_INFO.location.split(',')[0],
      addressRegion: COMPANY_INFO.location.split(',')[1].trim(),
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      contactType: 'Customer Service',
      areaServed: ['US'],
      availableLanguage: ['English'],
    },
    sameAs: [
      // Add social media profiles when available
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

