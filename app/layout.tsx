import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/navigation/Header'
import { Footer } from '@/components/navigation/Footer'
import { SupportBanner } from '@/components/navigation/SupportBanner'
import { PageOverlay } from '@/components/ui/PageOverlay'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://advancedroofingmn.com'),
  title: {
    default: 'Advanced Roofing & Siding Inc. - Minnesota\'s Most Trusted Roofing Company',
    template: '%s | Advanced Roofing & Siding Inc.',
  },
  description: 'GAF Master Elite contractor delivering premium roofing, siding, and exterior solutions across Minnesota & Wisconsin. 30+ years of experience with A+ BBB rating. Free estimates!',
  keywords: ['roofing contractor', 'siding installation', 'window replacement', 'storm restoration', 'Minnesota roofing', 'Wisconsin roofing', 'GAF Master Elite', 'roof replacement', 'exterior contractor', 'Anoka MN'],
  authors: [{ name: 'Advanced Roofing & Siding Inc.' }],
  creator: 'Advanced Roofing & Siding Inc.',
  publisher: 'Advanced Roofing & Siding Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/AFS-Logo900.png',
    apple: '/AFS-Logo900.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://advancedroofingmn.com',
    siteName: 'Advanced Roofing & Siding Inc.',
    title: 'Advanced Roofing & Siding Inc. - Minnesota\'s Most Trusted Roofing Company',
    description: 'GAF Master Elite contractor delivering premium roofing, siding, and exterior solutions across Minnesota & Wisconsin. 30+ years of experience with A+ BBB rating.',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: 'Advanced Roofing & Siding Inc. - GAF Master Elite Contractor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Roofing & Siding Inc. - Minnesota\'s Most Trusted Roofing Company',
    description: 'GAF Master Elite contractor - 30+ years of excellence serving Minnesota & Wisconsin',
    images: ['https://advancedroofingmn.com/AFS-Logo900.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://advancedroofingmn.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageOverlay />
        <SupportBanner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}


