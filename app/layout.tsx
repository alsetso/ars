import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Advanced Roofing & Siding Inc. - Minnesota\'s Most Trusted Roofing Company',
  description: 'GAF Master Elite contractor delivering premium roofing, siding, and exterior solutions across Minnesota & Wisconsin. 30+ years of experience with A+ BBB rating.',
  keywords: 'roofing, siding, windows, storm restoration, Minnesota, Wisconsin, GAF Master Elite',
  openGraph: {
    title: 'Advanced Roofing & Siding Inc. - Minnesota\'s Most Trusted Roofing Company',
    description: 'GAF Master Elite contractor delivering premium results across Minnesota & Wisconsin',
    url: 'https://advancedroofingmn.com',
    siteName: 'Advanced Roofing & Siding Inc.',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Roofing & Siding Inc.',
    description: 'GAF Master Elite contractor - 30+ years of excellence',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


