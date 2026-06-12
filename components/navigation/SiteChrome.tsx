'use client'

import { usePathname } from 'next/navigation'
import { Header } from './Header'
import { Footer } from './Footer'
import { SupportBanner } from './SupportBanner'
import { PageOverlay } from '@/components/ui/PageOverlay'

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')

  if (isAdmin) return <>{children}</>

  return (
    <>
      <PageOverlay />
      <SupportBanner />
      <Header />
      {children}
      <Footer />
    </>
  )
}
