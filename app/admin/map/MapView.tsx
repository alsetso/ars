'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { createClient } from '@/lib/supabase/client'
import { updateLeadCoords } from '@/app/admin/leads/actions'
import { ProspectPanel } from './ProspectPanel'
import { PinPopover, type PinData } from './PinPopover'
import {
  Layers, Eye, EyeOff, ChevronDown, ChevronUp, Loader2,
  Telescope, MapPinned, X, MousePointerClick,
} from 'lucide-react'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!

// ── Status config ────────────────────────────────────────────────────────────

const STATUS: Record<string, { label: string; color: string }> = {
  new:         { label: 'New',         color: '#3B82F6' },
  contacted:   { label: 'Contacted',   color: '#F59E0B' },
  in_progress: { label: 'In Progress', color: '#8B5CF6' },
  closed:      { label: 'Closed',      color: '#10B981' },
  lost:        { label: 'Lost',        color: '#9CA3AF' },
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface Lead {
  id: string
  name: string
  address: string | null
  city: string | null
  state: string | null
  lat: number | null
  lng: number | null
  status: string
  service_type: string | null
  phone: string
  email: string
}

// ── Geocoding helper ──────────────────────────────────────────────────────────

async function geocodeAddress(
  address: string,
  city: string,
  state: string,
): Promise<{ lat: number; lng: number } | null> {
  const query = [address, city, state].filter(Boolean).join(', ')
  if (!query) return null
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json` +
      `?access_token=${mapboxgl.accessToken}&country=US&limit=1`,
    )
    if (!res.ok) return null
    const data = await res.json()
    const feat = data.features?.[0]
    if (!feat) return null
    return { lat: feat.center[1], lng: feat.center[0] }
  } catch {
    return null
  }
}

// ── GeoJSON builder ───────────────────────────────────────────────────────────

function leadsToGeoJSON(leads: Lead[]): GeoJSON.FeatureCollection {
  return {
    type: 'FeatureCollection',
    features: leads
      .filter((l) => l.lat != null && l.lng != null)
      .map((l) => ({
        type: 'Feature' as const,
        geometry: { type: 'Point' as const, coordinates: [l.lng!, l.lat!] },
        properties: {
          id: l.id,
          name: l.name,
          address: [l.address, l.city, l.state].filter(Boolean).join(', '),
          status: l.status,
          service: l.service_type ?? '—',
          phone: l.phone,
          email: l.email,
        },
      })),
  }
}

// ── Reverse geocode ───────────────────────────────────────────────────────────

async function reverseGeocode(lng: number, lat: number): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json` +
      `?access_token=${mapboxgl.accessToken}&types=address&limit=1`,
    )
    if (!res.ok) return null
    const data = await res.json()
    return (data.features?.[0]?.place_name as string) ?? null
  } catch {
    return null
  }
}

// ── Staff actions popup state ─────────────────────────────────────────────────

interface StaffPopupPos {
  x: number
  y: number
  lng: number
  lat: number
  address: string | null
}

// ── Prospect type (map layer) ─────────────────────────────────────────────────
// Sourced from pipeline (stage=prospect) joined with properties

interface Prospect {
  id: string
  full_address: string | null
  lat: number
  lng: number
  visible_issues: string[]
  services: string[]
  stage: string
  notes: string | null
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function MapView() {
  const containerRef       = useRef<HTMLDivElement>(null)
  const mapRef             = useRef<mapboxgl.Map | null>(null)
  const canOpenPointRef    = useRef(false)
  const selectedIdRef      = useRef<string | null>(null)
  const selectedPinRef     = useRef<{ lngLat: [number, number]; data: PinData } | null>(null)

  const [layersOpen,         setLayersOpen]         = useState(true)
  const [leadsVisible,       setLeadsVisible]       = useState(true)
  const [prospectsVisible,   setProspectsVisible]   = useState(true)
  const [leadCount,          setLeadCount]          = useState(0)
  const [prospectCount,      setProspectCount]      = useState(0)
  const [geocoding,          setGeocoding]          = useState(0)
  const [canOpenPoint,       setCanOpenPoint]       = useState(false)
  const [clickMap,           setClickMap]           = useState(false)
  const [staffPopup,         setStaffPopup]         = useState<StaffPopupPos | null>(null)
  const [prospectPanel,      setProspectPanel]      = useState<{ lat: number; lng: number; address: string | null } | null>(null)
  const [selectedPin,        setSelectedPin]        = useState<{ lngLat: [number, number]; data: PinData } | null>(null)
  const [pinScreenPos,       setPinScreenPos]       = useState<{ x: number; y: number } | null>(null)

  // ── Add / refresh leads GeoJSON layer (data + paint only) ─────────────────

  const applyLeadsLayer = useCallback((map: mapboxgl.Map, leads: Lead[]) => {
    const geoJSON = leadsToGeoJSON(leads)

    if (map.getSource('leads')) {
      (map.getSource('leads') as mapboxgl.GeoJSONSource).setData(geoJSON)
      return
    }

    map.addSource('leads', { type: 'geojson', data: geoJSON, cluster: false })

    // Glow halo
    map.addLayer({
      id: 'leads-halo',
      type: 'circle',
      source: 'leads',
      paint: {
        'circle-radius':       ['interpolate', ['linear'], ['zoom'], 8, 10, 14, 16],
        'circle-color':        [
          'match', ['get', 'status'],
          'new',         '#3B82F6',
          'contacted',   '#F59E0B',
          'in_progress', '#8B5CF6',
          'closed',      '#10B981',
          '#9CA3AF',
        ],
        'circle-opacity':      0.15,
        'circle-blur':         1,
      },
    })

    // Solid dot
    map.addLayer({
      id: 'leads-circles',
      type: 'circle',
      source: 'leads',
      paint: {
        'circle-radius':        ['interpolate', ['linear'], ['zoom'], 8, 5, 14, 9],
        'circle-color':         [
          'match', ['get', 'status'],
          'new',         '#3B82F6',
          'contacted',   '#F59E0B',
          'in_progress', '#8B5CF6',
          'closed',      '#10B981',
          '#9CA3AF',
        ],
        'circle-stroke-width':  2,
        'circle-stroke-color':  '#ffffff',
        'circle-opacity':       0.95,
      },
    })
  }, [])

  // ── Add / refresh prospects GeoJSON layer (data + paint only) ─────────────

  const applyProspectsLayer = useCallback((map: mapboxgl.Map, prospects: Prospect[]) => {
    const geoJSON: GeoJSON.FeatureCollection = {
      type: 'FeatureCollection',
      features: prospects
        .filter((p) => p.lat != null && p.lng != null)
        .map((p) => ({
          type: 'Feature' as const,
          geometry: { type: 'Point' as const, coordinates: [p.lng, p.lat] },
          properties: {
            id:             p.id,
            full_address:   p.full_address ?? '',
            visible_issues: (p.visible_issues ?? []).join(', '),
            service_type:   p.services?.[0] ?? '—',
            status:         p.stage,
            notes:          p.notes ?? '',
            name:           '',
            phone:          '',
            email:          '',
          },
        })),
    }

    if (map.getSource('prospects')) {
      (map.getSource('prospects') as mapboxgl.GeoJSONSource).setData(geoJSON)
      return
    }

    map.addSource('prospects', { type: 'geojson', data: geoJSON, cluster: false })

    // Outer ring
    map.addLayer({
      id: 'prospects-halo',
      type: 'circle',
      source: 'prospects',
      paint: {
        'circle-radius':   ['interpolate', ['linear'], ['zoom'], 8, 11, 14, 17],
        'circle-color':    '#F97316',
        'circle-opacity':  0.12,
        'circle-blur':     1,
      },
    })

    // Solid dot — orange, dashed-look via stroke color contrast
    map.addLayer({
      id: 'prospects-circles',
      type: 'circle',
      source: 'prospects',
      paint: {
        'circle-radius':        ['interpolate', ['linear'], ['zoom'], 8, 5, 14, 9],
        'circle-color':         '#F97316',
        'circle-stroke-width':  2,
        'circle-stroke-color':  '#ffffff',
        'circle-opacity':       0.9,
      },
    })
  }, [])

  // ── Fetch prospects from pipeline and apply to map ────────────────────────

  const fetchAndApplyProspects = useCallback(async (map: mapboxgl.Map) => {
    const supabase = createClient()
    const { data: raw } = await supabase
      .from('pipeline')
      .select(`
        id, stage, visible_issues, services, notes,
        properties!pipeline_property_id_fkey ( full_address, lat, lng )
      `)
      .eq('stage', 'prospect')

    const prospects: Prospect[] = (raw ?? [])
      .filter((r: any) => r.properties?.lat != null && r.properties?.lng != null)
      .map((r: any) => ({
        id:             r.id,
        full_address:   r.properties?.full_address ?? null,
        lat:            r.properties.lat as number,
        lng:            r.properties.lng as number,
        visible_issues: r.visible_issues ?? [],
        services:       r.services ?? [],
        stage:          r.stage,
        notes:          r.notes ?? null,
      }))

    setProspectCount(prospects.length)
    applyProspectsLayer(map, prospects)
  }, [applyProspectsLayer])

  // ── Map init ────────────────────────────────────────────────────────────────

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: 'mapbox://styles/mapbox/standard',
      center: [-93.5, 45.0],
      zoom: 8,
      pitch: 30,
      antialias: true,
    })

    map.on('style.load', () => {
      map.setConfigProperty('basemap', 'lightPreset', 'day')
      map.setConfigProperty('basemap', 'show3dObjects', true)
    })

    map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right')
    map.addControl(new mapboxgl.ScaleControl({ maxWidth: 120, unit: 'imperial' }), 'bottom-left')
    map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
    map.addControl(
      new mapboxgl.GeolocateControl({ positionOptions: { enableHighAccuracy: true }, trackUserLocation: true }),
      'top-right',
    )

    // ── Load leads + register all events after style is ready ────────────────
    map.once('style.load', async () => {
      const supabase = createClient()
      const { data: raw } = await supabase
        .from('leads')
        .select('id, name, address, city, state, lat, lng, status, service_type, phone, email')

      if (!raw) return

      const leads: Lead[] = raw as Lead[]
      const missing = leads.filter((l) => l.lat == null || l.lng == null)
      setGeocoding(missing.length)

      // Geocode missing coords + save back to DB progressively
      for (const lead of missing) {
        const coords = await geocodeAddress(
          lead.address ?? '',
          lead.city ?? '',
          lead.state ?? '',
        )
        if (coords) {
          await updateLeadCoords(lead.id, coords.lat, coords.lng)
          const idx = leads.findIndex((l) => l.id === lead.id)
          if (idx !== -1) leads[idx] = { ...leads[idx], ...coords }
        }
        setGeocoding((n) => Math.max(0, n - 1))
        if (mapRef.current) applyLeadsLayer(mapRef.current, leads)
      }

      const plotted = leads.filter((l) => l.lat != null).length
      setLeadCount(plotted)
      applyLeadsLayer(map, leads)

      // ── Pin hover: enable click-map mode + canOpenPoint ────────────────────
      map.on('mouseenter', 'leads-circles', () => {
        map.getCanvas().style.cursor = 'pointer'
        canOpenPointRef.current = true
        setCanOpenPoint(true)
        setClickMap(true)
      })

      map.on('mouseleave', 'leads-circles', () => {
        map.getCanvas().style.cursor = ''
        if (!selectedIdRef.current) {
          canOpenPointRef.current = false
          setCanOpenPoint(false)
        }
      })

      // ── Pin click: open lead detail popover ───────────────────────────────
      map.on('click', 'leads-circles', (e) => {
        const feat = e.features?.[0]
        if (!feat) return
        const p = feat.properties!

        canOpenPointRef.current = true
        setCanOpenPoint(true)
        setClickMap(true)
        selectedIdRef.current = p.id
        setStaffPopup(null)

        const [lng, lat] = (feat.geometry as GeoJSON.Point).coordinates
        const pinData: PinData = {
          type:    'lead',
          id:      p.id,
          name:    p.name,
          address: p.address ?? '',
          status:  p.status,
          service: p.service ?? '—',
          phone:   p.phone ?? '',
          email:   p.email ?? '',
        }
        selectedPinRef.current = { lngLat: [lng, lat], data: pinData }
        setSelectedPin({ lngLat: [lng, lat], data: pinData })
        const pt = map.project([lng, lat])
        setPinScreenPos({ x: pt.x, y: pt.y })
      })

      // ── Load prospects from pipeline ───────────────────────────────────────
      await fetchAndApplyProspects(map)

      // ── Prospect pin hover ─────────────────────────────────────────────────
      map.on('mouseenter', 'prospects-circles', () => {
        map.getCanvas().style.cursor = 'pointer'
        canOpenPointRef.current = true
        setCanOpenPoint(true)
        setClickMap(true)
      })

      map.on('mouseleave', 'prospects-circles', () => {
        map.getCanvas().style.cursor = ''
        if (!selectedIdRef.current) {
          canOpenPointRef.current = false
          setCanOpenPoint(false)
        }
      })

      // ── Prospect pin click: open prospect detail popover ──────────────────
      map.on('click', 'prospects-circles', (e) => {
        const feat = e.features?.[0]
        if (!feat) return
        const p = feat.properties!

        canOpenPointRef.current = true
        setCanOpenPoint(true)
        setClickMap(true)
        selectedIdRef.current = p.id
        setStaffPopup(null)

        const [lng, lat] = (feat.geometry as GeoJSON.Point).coordinates
        const pinData: PinData = {
          type:           'prospect',
          id:             p.id,
          full_address:   p.full_address ?? '',
          visible_issues: p.visible_issues
            ? p.visible_issues.split(', ').filter(Boolean)
            : [],
          service_type:   p.service_type ?? '',
          status:         p.status ?? 'new',
          name:           p.name ?? '',
          phone:          p.phone ?? '',
          email:          p.email ?? '',
        }
        selectedPinRef.current = { lngLat: [lng, lat], data: pinData }
        setSelectedPin({ lngLat: [lng, lat], data: pinData })
        const pt = map.project([lng, lat])
        setPinScreenPos({ x: pt.x, y: pt.y })
      })

      // ── Keep popover anchored as map pans / zooms ──────────────────────────
      map.on('render', () => {
        if (!selectedPinRef.current) return
        const pt = map.project(selectedPinRef.current.lngLat)
        setPinScreenPos({ x: pt.x, y: pt.y })
      })

      // ── General map click: show staff actions on empty space ───────────────
      map.on('click', async (e) => {
        const hits = map.queryRenderedFeatures(e.point, {
          layers: ['leads-circles', 'prospects-circles'],
        })
        if (hits.length > 0) return // handled by layer-specific click above

        // Empty space — reset pin state, show staff actions popup immediately
        selectedIdRef.current = null
        selectedPinRef.current = null
        canOpenPointRef.current = false
        setCanOpenPoint(false)
        setSelectedPin(null)
        setPinScreenPos(null)
        setClickMap(true)
        setProspectPanel(null)

        const { lng, lat } = e.lngLat
        setStaffPopup({ x: e.point.x, y: e.point.y, lng, lat, address: null })

        const address = await reverseGeocode(lng, lat)
        setStaffPopup((prev) =>
          prev && prev.lng === lng && prev.lat === lat
            ? { ...prev, address }
            : prev,
        )
      })

      // Close staff popup when map starts moving
      map.on('movestart', () => setStaffPopup(null))
    })

    mapRef.current = map
    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [applyLeadsLayer, applyProspectsLayer, fetchAndApplyProspects])

  // ── Sync layer visibility ───────────────────────────────────────────────────

  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    const vis = leadsVisible ? 'visible' : 'none'
    if (map.getLayer('leads-halo'))    map.setLayoutProperty('leads-halo',    'visibility', vis)
    if (map.getLayer('leads-circles')) map.setLayoutProperty('leads-circles', 'visibility', vis)
  }, [leadsVisible])

  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    const vis = prospectsVisible ? 'visible' : 'none'
    if (map.getLayer('prospects-halo'))    map.setLayoutProperty('prospects-halo',    'visibility', vis)
    if (map.getLayer('prospects-circles')) map.setLayoutProperty('prospects-circles', 'visibility', vis)
  }, [prospectsVisible])

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="relative h-full w-full">
      <div ref={containerRef} className="h-full w-full" />

      {/* Geocoding status pill */}
      {geocoding > 0 && (
        <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-gray-600 shadow-md backdrop-blur-sm">
          <Loader2 className="h-3 w-3 animate-spin text-brand-primary" />
          Plotting {geocoding} lead{geocoding !== 1 ? 's' : ''}…
        </div>
      )}

      {/* Click-map mode indicator */}
      {clickMap && !staffPopup && (
        <div className="pointer-events-none absolute bottom-24 left-1/2 z-10 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-gray-900/75 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
          <MousePointerClick className="h-3 w-3 opacity-70" />
          {canOpenPoint ? 'Click a pin to view lead · Click map to add' : 'Click anywhere to add a lead'}
        </div>
      )}

      {/* ── Pin popover ───────────────────────────────────────────────────── */}
      {selectedPin && pinScreenPos && (
        <PinPopover
          data={selectedPin.data}
          screenX={pinScreenPos.x}
          screenY={pinScreenPos.y}
          containerH={containerRef.current?.clientHeight ?? 600}
          onClose={() => {
            setSelectedPin(null)
            setPinScreenPos(null)
            selectedIdRef.current = null
            selectedPinRef.current = null
            canOpenPointRef.current = false
            setCanOpenPoint(false)
          }}
        />
      )}

      {/* ── Click marker dot ──────────────────────────────────────────────── */}
      {staffPopup && (
        <div
          className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ left: staffPopup.x, top: staffPopup.y }}
        >
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-200">
            <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
          </div>
        </div>
      )}

      {/* ── Staff actions popup ────────────────────────────────────────────── */}
      {staffPopup && (
        <div
          className="absolute z-20"
          style={{
            left: staffPopup.x,
            top:  staffPopup.y,
            // Center horizontally on the dot; open above if enough room, else below
            transform: staffPopup.y > 180
              ? 'translate(-50%, calc(-100% - 12px))'
              : 'translate(-50%, 12px)',
          }}
        >
          <div className="w-56 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
            {/* Header: address + close */}
            <div className="flex items-center gap-2 border-b border-gray-100 px-3 py-2">
              {staffPopup.address ? (
                <p className="min-w-0 flex-1 truncate text-xs font-medium text-gray-700">
                  {staffPopup.address.replace(/, United States$/, '')}
                </p>
              ) : (
                <div className="flex flex-1 items-center gap-1.5">
                  <Loader2 className="h-3 w-3 shrink-0 animate-spin text-gray-300" />
                  <p className="text-[10px] text-gray-400">Resolving address…</p>
                </div>
              )}
              <button
                onClick={() => setStaffPopup(null)}
                className="shrink-0 rounded p-0.5 text-gray-400 transition-colors hover:text-gray-700"
              >
                <X className="h-3 w-3" />
              </button>
            </div>

            {/* Actions */}
            <div className="py-1">
              <button
                onClick={() => {
                  setProspectPanel({ lat: staffPopup.lat, lng: staffPopup.lng, address: staffPopup.address })
                  setStaffPopup(null)
                }}
                className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs text-gray-700 transition-colors hover:bg-gray-50"
              >
                <Telescope className="h-3.5 w-3.5 shrink-0 text-orange-500" />
                Add Prospect
              </button>

              <a
                href={`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${staffPopup.lat},${staffPopup.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs text-gray-700 transition-colors hover:bg-gray-50"
              >
                <MapPinned className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                Open Street View
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Layers panel ──────────────────────────────────────────────────── */}
      <div className="absolute left-3 top-3 z-10">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white/95 shadow-lg backdrop-blur-sm">
          <button
            onClick={() => setLayersOpen((v) => !v)}
            className="flex w-full items-center gap-2 px-3 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Layers className="h-3.5 w-3.5 text-gray-500" />
            <span>Layers</span>
            {layersOpen
              ? <ChevronUp className="ml-auto h-3 w-3 text-gray-400" />
              : <ChevronDown className="ml-auto h-3 w-3 text-gray-400" />
            }
          </button>

          {layersOpen && (
            <div className="min-w-[176px] border-t border-gray-100 px-3 py-2.5 space-y-2">
              {/* Leads row */}
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
                <span className="flex-1 text-xs font-medium text-gray-700">Leads</span>
                <span className="text-[10px] tabular-nums text-gray-400">{leadCount}</span>
                <button
                  onClick={() => setLeadsVisible((v) => !v)}
                  className="rounded p-0.5 text-gray-400 transition-colors hover:text-gray-700"
                  title={leadsVisible ? 'Hide leads' : 'Show leads'}
                >
                  {leadsVisible ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                </button>
              </div>

              {/* Prospects row */}
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                <span className="flex-1 text-xs font-medium text-gray-700">Prospects</span>
                <span className="text-[10px] tabular-nums text-gray-400">{prospectCount}</span>
                <button
                  onClick={() => setProspectsVisible((v) => !v)}
                  className="rounded p-0.5 text-gray-400 transition-colors hover:text-gray-700"
                  title={prospectsVisible ? 'Hide prospects' : 'Show prospects'}
                >
                  {prospectsVisible ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Legend ────────────────────────────────────────────────────────── */}
      <div className="absolute bottom-10 left-3 z-10 rounded-xl border border-gray-200 bg-white/95 px-3 py-2.5 shadow-lg backdrop-blur-sm">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Lead Status
        </p>
        <div className="space-y-1.5">
          {Object.entries(STATUS).map(([key, { label, color }]) => (
            <div key={key} className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full ring-1 ring-white"
                style={{ background: color }}
              />
              <span className="text-xs text-gray-600">{label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 pt-1 border-t border-gray-100 mt-1">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500 ring-1 ring-white" />
            <span className="text-xs text-gray-600">Prospect</span>
          </div>
        </div>
      </div>

      {/* ── Prospect slide-in panel ────────────────────────────────────────── */}
      {prospectPanel && (
        <ProspectPanel
          initAddress={prospectPanel.address}
          initLat={prospectPanel.lat}
          initLng={prospectPanel.lng}
          onClose={() => setProspectPanel(null)}
          onSaved={() => {
            setProspectPanel(null)
            if (mapRef.current) fetchAndApplyProspects(mapRef.current)
          }}
        />
      )}
    </div>
  )
}
