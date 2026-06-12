'use client'

import dynamic from 'next/dynamic'

const MapView = dynamic(() => import('./MapView'), { ssr: false })

export default function MapClient() {
  return (
    <div className="relative h-[calc(100vh-3.5rem)] md:h-screen">
      <MapView />
    </div>
  )
}
