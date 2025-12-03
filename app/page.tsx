import { HomePageClient } from '@/components/pages/HomePageClient'
import { OrganizationSchema } from '@/components/seo/OrganizationSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advanced Roofing & Siding Inc. - Minnesota\'s Most Trusted Roofing Company',
  description: 'GAF Master Elite contractor delivering premium roofing, siding, windows, and storm restoration across Minnesota & Wisconsin. 30+ years experience, A+ BBB rating. Free estimates!',
  alternates: {
    canonical: 'https://advancedroofingmn.com',
  },
  openGraph: {
    title: 'Advanced Roofing & Siding Inc. - Minnesota\'s Most Trusted Roofing Company',
    description: 'GAF Master Elite contractor delivering premium roofing, siding, windows, and storm restoration across Minnesota & Wisconsin. 30+ years experience, A+ BBB rating.',
    url: 'https://advancedroofingmn.com',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: 'Advanced Roofing & Siding Inc. - GAF Master Elite Contractor',
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <HomePageClient />
    </>
  )
}

