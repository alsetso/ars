import { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  showWarranties?: boolean
}

export function PageLayout({ children, showWarranties = false }: PageLayoutProps) {
  return (
    <main>{children}</main>
  )
}


