'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { MapPin, Loader2, X } from 'lucide-react'

interface AddressSuggestion {
  id: string
  place_name: string
  displayName: string  // full address minus ", United States"
  text: string
  address: string | undefined
  city: string
  state: string
  stateCode: string
  zip: string
  lat: number
  lng: number
}

interface AddressAutocompleteProps {
  value: string
  onChange: (fullAddress: string, city: string, state: string, zip: string, lat?: number, lng?: number) => void
  placeholder?: string
  className?: string
  required?: boolean
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

function parseFeature(feature: any): AddressSuggestion {
  const context: any[] = feature.context ?? []
  const placeCtx    = context.find((c: any) => c.id?.startsWith('place'))
  const regionCtx   = context.find((c: any) => c.id?.startsWith('region'))
  const postcodeCtx = context.find((c: any) => c.id?.startsWith('postcode'))

  // Strip ", United States" from the end of place_name for display
  const displayName = (feature.place_name as string).replace(/, United States$/, '')

  return {
    id:          feature.id,
    place_name:  feature.place_name,
    displayName,
    text:        feature.text ?? '',
    address:     feature.address,
    city:        placeCtx?.text ?? '',
    state:       regionCtx?.text ?? '',
    stateCode:   regionCtx?.short_code?.replace('US-', '') ?? '',
    zip:         postcodeCtx?.text ?? '',
    lat:         feature.center?.[1] ?? 0,
    lng:         feature.center?.[0] ?? 0,
  }
}

export function AddressAutocomplete({
  value,
  onChange,
  placeholder = 'Start typing your address…',
  className = '',
  required = false,
}: AddressAutocompleteProps) {
  const [query, setQuery] = useState(value)
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [selected, setSelected] = useState(false)

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Close on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const fetchSuggestions = useCallback(async (q: string) => {
    if (!MAPBOX_TOKEN || q.trim().length < 3) {
      setSuggestions([])
      setOpen(false)
      return
    }

    setLoading(true)
    try {
      const params = new URLSearchParams({
        access_token: MAPBOX_TOKEN,
        country: 'US',
        types: 'address',
        // Bias toward MN/WI
        proximity: '-93.2650,44.9778',
        limit: '5',
      })
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(q)}.json?${params}`
      )
      if (!res.ok) return
      const data = await res.json()
      const parsed = (data.features ?? []).map(parseFeature)
      setSuggestions(parsed)
      setOpen(parsed.length > 0)
      setActiveIndex(-1)
    } catch (err) {
      console.error('Mapbox geocoding error:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value
    setQuery(q)
    setSelected(false)

    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => fetchSuggestions(q), 300)
  }

  function handleSelect(suggestion: AddressSuggestion) {
    setQuery(suggestion.displayName)
    setSelected(true)
    setOpen(false)
    setSuggestions([])
    onChange(
      suggestion.displayName,
      suggestion.city,
      suggestion.stateCode || suggestion.state,
      suggestion.zip,
      suggestion.lat,
      suggestion.lng,
    )
    inputRef.current?.blur()
  }

  function handleClear() {
    setQuery('')
    setSelected(false)
    setSuggestions([])
    setOpen(false)
    onChange('', '', '', '')
    inputRef.current?.focus()
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || suggestions.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault()
      handleSelect(suggestions[activeIndex])
    } else if (e.key === 'Escape') {
      setOpen(false)
      setActiveIndex(-1)
    }
  }

  const inputBase =
    'w-full rounded-lg border border-gray-300 py-2 pl-9 pr-9 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20'

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Icon left */}
      <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
        ) : (
          <MapPin className="h-4 w-4 text-gray-400" />
        )}
      </div>

      <input
        ref={inputRef}
        type="text"
        autoComplete="off"
        required={required}
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        placeholder={placeholder}
        className={inputBase}
        aria-autocomplete="list"
        aria-expanded={open}
        aria-haspopup="listbox"
      />

      {/* Clear button */}
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          tabIndex={-1}
          aria-label="Clear address"
        >
          <X className="h-4 w-4" />
        </button>
      )}

      {/* Dropdown */}
      {open && suggestions.length > 0 && (
        <ul
          role="listbox"
          className="absolute z-50 mt-1 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-large"
        >
          {suggestions.map((s, i) => {
            const street = s.address ? `${s.address} ${s.text}` : s.text
            const region = [s.city, s.stateCode || s.state].filter(Boolean).join(', ')
            return (
              <li
                key={s.id}
                role="option"
                aria-selected={i === activeIndex}
                onMouseDown={(e) => {
                  e.preventDefault() // prevent input blur before click registers
                  handleSelect(s)
                }}
                onMouseEnter={() => setActiveIndex(i)}
                className={`flex cursor-pointer items-start gap-2.5 px-4 py-3 text-sm transition-colors ${
                  i === activeIndex ? 'bg-brand-primary-light' : 'hover:bg-gray-50'
                } ${i !== 0 ? 'border-t border-gray-100' : ''}`}
              >
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-primary" />
                <div className="min-w-0">
                  <p className="truncate font-medium text-gray-900">{street}</p>
                  {region && <p className="truncate text-xs text-gray-400">{region}</p>}
                </div>
              </li>
            )
          })}
          <li className="border-t border-gray-100 px-4 py-2 text-right">
            <span className="text-[10px] text-gray-300">Powered by Mapbox</span>
          </li>
        </ul>
      )}
    </div>
  )
}
