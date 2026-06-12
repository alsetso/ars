'use client'

import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!

export interface HailLocation {
  location: string
  count: number
  maxSize: number  // largest hail size (inches) for this location
}

async function geocodeLocation(location: string): Promise<[number, number] | null> {
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json` +
      `?access_token=${mapboxgl.accessToken}&country=US&types=place,locality,neighborhood&limit=1`,
    )
    if (!res.ok) return null
    const data = await res.json()
    const feat = data.features?.[0]
    if (!feat) return null
    return feat.center as [number, number]
  } catch {
    return null
  }
}

function sizeToColor(maxSize: number): string {
  if (maxSize >= 2.0) return '#ef4444'   // red
  if (maxSize >= 1.5) return '#f97316'   // orange
  if (maxSize >= 1.0) return '#f59e0b'   // amber
  return '#fcd34d'                        // yellow
}

interface HailMapProps {
  locations: HailLocation[]
}

export function HailMap({ locations }: HailMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef       = useRef<mapboxgl.Map | null>(null)
  const popupRef     = useRef<mapboxgl.Popup | null>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current || locations.length === 0) return

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: 'mapbox://styles/mapbox/standard',
      center: [-93.5, 45.0],
      zoom: 6,
      attributionControl: false,
    })

    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
    map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')

    map.once('style.load', async () => {
      map.setConfigProperty('basemap', 'lightPreset', 'day')

      // Geocode all locations in parallel
      const geocoded = await Promise.all(
        locations.map(async (loc) => {
          const coords = await geocodeLocation(loc.location)
          return coords ? { ...loc, coords } : null
        }),
      )

      const valid = geocoded.filter((g): g is NonNullable<typeof g> => g !== null)
      if (valid.length === 0) return

      const maxCount = Math.max(...valid.map((v) => v.count))

      const geojson: GeoJSON.FeatureCollection = {
        type: 'FeatureCollection',
        features: valid.map((v) => ({
          type: 'Feature' as const,
          geometry: { type: 'Point' as const, coordinates: v.coords },
          properties: {
            location: v.location,
            count:    v.count,
            maxSize:  v.maxSize,
            color:    sizeToColor(v.maxSize),
            // radius scales 8–28 based on relative report count
            radius:   8 + Math.round((v.count / maxCount) * 20),
          },
        })),
      }

      map.addSource('hail', { type: 'geojson', data: geojson })

      // Outer glow
      map.addLayer({
        id: 'hail-halo',
        type: 'circle',
        source: 'hail',
        paint: {
          'circle-radius':   ['interpolate', ['linear'], ['zoom'], 4, ['get', 'radius'], 12, ['*', ['get', 'radius'], 2.2]],
          'circle-color':    ['get', 'color'],
          'circle-opacity':  0.18,
          'circle-blur':     0.8,
        },
      })

      // Solid dot
      map.addLayer({
        id: 'hail-circles',
        type: 'circle',
        source: 'hail',
        paint: {
          'circle-radius':        ['interpolate', ['linear'], ['zoom'], 4, ['get', 'radius'], 12, ['*', ['get', 'radius'], 1.8]],
          'circle-color':         ['get', 'color'],
          'circle-stroke-width':  2,
          'circle-stroke-color':  '#ffffff',
          'circle-opacity':       0.88,
        },
      })

      // Label
      map.addLayer({
        id: 'hail-labels',
        type: 'symbol',
        source: 'hail',
        layout: {
          'text-field':  ['get', 'count'],
          'text-font':   ['DIN Pro Bold', 'Arial Unicode MS Bold'],
          'text-size':   ['interpolate', ['linear'], ['zoom'], 4, 9, 10, 12],
          'text-anchor': 'center',
        },
        paint: {
          'text-color': '#1f2937',
        },
      })

      // Hover popup
      map.on('mouseenter', 'hail-circles', (e) => {
        map.getCanvas().style.cursor = 'pointer'
        const feat = e.features?.[0]
        if (!feat) return
        const p = feat.properties!
        popupRef.current?.remove()
        popupRef.current = new mapboxgl.Popup({ closeButton: false, offset: 12 })
          .setLngLat((feat.geometry as GeoJSON.Point).coordinates as [number, number])
          .setHTML(
            `<div style="font-family:system-ui;padding:6px 8px;min-width:140px">` +
            `<p style="font-weight:700;font-size:13px;margin:0 0 2px">${p.location}</p>` +
            `<p style="font-size:11px;color:#6b7280;margin:0">${p.count} report${p.count !== 1 ? 's' : ''} · max ${p.maxSize}"</p>` +
            `</div>`,
          )
          .addTo(map)
      })

      map.on('mouseleave', 'hail-circles', () => {
        map.getCanvas().style.cursor = ''
        popupRef.current?.remove()
        popupRef.current = null
      })

      // Fit bounds to all points
      const bounds = new mapboxgl.LngLatBounds()
      valid.forEach((v) => bounds.extend(v.coords))
      map.fitBounds(bounds, { padding: 60, maxZoom: 10, duration: 800 })
    })

    mapRef.current = map
    return () => {
      popupRef.current?.remove()
      map.remove()
      mapRef.current = null
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // only run once on mount; locations are stable when this renders

  if (locations.length === 0) return null

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      <div ref={containerRef} className="h-72 w-full" />
    </div>
  )
}
