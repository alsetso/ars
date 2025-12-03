import { Warranties } from '@/components/sections/Warranties'
import { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  showWarranties?: boolean
}

export function PageLayout({ children, showWarranties = true }: PageLayoutProps) {
  return (
    <>
      <main>{children}</main>
      {showWarranties && <Warranties />}
    </>
  )
}


