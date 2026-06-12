import { getAllCityData } from '@/lib/city-utils'
import Link from 'next/link'

interface ServiceAreaCitiesProps {
  /** For service pages: the service slug (e.g. "roofing"). Ignored when linkBase is provided. */
  serviceSlug?: string
  /** For service pages: the service title (e.g. "Roofing"). Controls heading/subtitle copy. */
  serviceTitle?: string
  /** Override heading text */
  title?: string
  /** Override subtitle text */
  subtitle?: string
  /**
   * Base URL override. When provided, city links are built as
   * `${linkBase}/${state}/${city.slug}` instead of the service-specific URL.
   * Example: "/service-areas"
   */
  linkBase?: string
}

export function ServiceAreaCities({
  serviceSlug,
  serviceTitle,
  title,
  subtitle,
  linkBase,
}: ServiceAreaCitiesProps) {
  const cities = getAllCityData()
  const mnCities = cities.filter((c) => c.state === 'mn')
  const wiCities = cities.filter((c) => c.state === 'wi')

  const buildHref = (state: string, slug: string) => {
    if (linkBase) return `${linkBase}/${state}/${slug}`
    return `/services/${serviceSlug}/${state}/${slug}`
  }

  const headingText = title ?? `${serviceTitle} Services by City`
  const subtitleText =
    subtitle ??
    `We serve homeowners across Minnesota and Wisconsin. Select your city for local ${serviceTitle?.toLowerCase()} pricing, service details, and a free estimate.`

  return (
    <div className="mt-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 text-center">{headingText}</h2>
      <p className="mb-8 text-center text-gray-600 max-w-2xl mx-auto">{subtitleText}</p>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg font-bold text-gray-800 border-b border-gray-200 pb-2">
            Minnesota Cities
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {mnCities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={buildHref('mn', city.slug)}
                  className="text-sm text-brand-primary hover:text-red-800 hover:underline font-medium"
                >
                  {city.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-gray-800 border-b border-gray-200 pb-2">
            Wisconsin Cities
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {wiCities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={buildHref('wi', city.slug)}
                  className="text-sm text-brand-primary hover:text-red-800 hover:underline font-medium"
                >
                  {city.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
