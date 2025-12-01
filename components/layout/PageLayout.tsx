import { Header } from '@/components/navigation/Header'
import { Footer } from '@/components/navigation/Footer'
import { Warranties } from '@/components/sections/Warranties'
import { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  showWarranties?: boolean
}

export function PageLayout({ children, showWarranties = true }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {showWarranties && <Warranties />}
      <Footer />
    </>
  )
}


