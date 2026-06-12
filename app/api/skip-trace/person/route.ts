import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// ── Types ─────────────────────────────────────────────────────────────────────

export interface PersonDetailResponse {
  Status: number
  Message: string
  Source: string
  'Person Details': Array<{
    Person_name: string
    Age: string
    Born: string
    'Lives in': string
    Telephone: string
  }>
  'Current Address Details List': Array<{
    street_address: string
    address_locality: string
    address_region: string
    postal_code: string
    county: string
    date_range: string
  }>
  'All Phone Details': Array<{
    phone_number: string
    phone_type: string
    phone_info?: string
    last_reported: string
    provider: string
  }>
  'Email Addresses': string[]
  'Previous Address Details': Array<{
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    county: string
    timespan: string
  }>
  'All Relatives': Array<{
    Name: string
    Age: string
    'Person Link': string
    'Person ID': string
  }>
  'All Associates': Array<{
    Name: string
    Age: string
    'Person Link': string
    'Person ID': string
  }>
}

// ── Handler ───────────────────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: staff } = await supabase.from('staff').select('id').eq('id', user.id).single()
  if (!staff) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const peo_id = new URL(req.url).searchParams.get('peo_id')?.trim()
  if (!peo_id) {
    return NextResponse.json({ error: 'peo_id is required' }, { status: 400 })
  }

  const apiKey = process.env.RAPID_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Skip trace service not configured' }, { status: 503 })
  }

  const upstream = new URL('https://skip-tracing-working-api.p.rapidapi.com/search/detailsbyID')
  upstream.searchParams.set('peo_id', peo_id)

  try {
    const res = await fetch(upstream.toString(), {
      headers: {
        'Content-Type':    'application/json',
        'x-rapidapi-host': 'skip-tracing-working-api.p.rapidapi.com',
        'x-rapidapi-key':  apiKey,
      },
      cache: 'no-store',
    })

    if (!res.ok) {
      return NextResponse.json({ error: `Upstream error: ${res.status}` }, { status: res.status })
    }

    const data: PersonDetailResponse = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error('[skip-trace/person]', err)
    return NextResponse.json({ error: 'Failed to reach skip trace service' }, { status: 502 })
  }
}
