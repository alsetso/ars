import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// ── Types ─────────────────────────────────────────────────────────────────────

export interface SkipTracePerson {
  Name: string
  Link: string
  'Person ID': string
  Age: number | null
  'Lives in': string
  'Used to live in': string
  'Related to': string
}

export interface SkipTraceResponse {
  Status: number
  Message: string
  Source: string
  Records: number
  Page: number
  PropertyDetails: Record<string, unknown>
  PeopleDetails: SkipTracePerson[]
}

// ── Handler ───────────────────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  // Staff-only: validate session
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: staff } = await supabase.from('staff').select('id').eq('id', user.id).single()
  if (!staff) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const street      = searchParams.get('street')?.trim()
  const citystatezip = searchParams.get('citystatezip')?.trim()
  const page        = searchParams.get('page') ?? '1'

  if (!street || !citystatezip) {
    return NextResponse.json(
      { error: 'street and citystatezip query params are required' },
      { status: 400 },
    )
  }

  const apiKey = process.env.RAPID_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Skip trace service not configured' }, { status: 503 })
  }

  const upstream = new URL('https://skip-tracing-working-api.p.rapidapi.com/search/byaddress')
  upstream.searchParams.set('street',      street)
  upstream.searchParams.set('citystatezip', citystatezip)
  upstream.searchParams.set('page',        page)

  try {
    const res = await fetch(upstream.toString(), {
      headers: {
        'Content-Type':    'application/json',
        'x-rapidapi-host': 'skip-tracing-working-api.p.rapidapi.com',
        'x-rapidapi-key':  apiKey,
      },
      // No caching — always fresh lookup
      cache: 'no-store',
    })

    if (!res.ok) {
      return NextResponse.json(
        { error: `Upstream error: ${res.status}` },
        { status: res.status },
      )
    }

    const data: SkipTraceResponse = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error('[skip-trace]', err)
    return NextResponse.json({ error: 'Failed to reach skip trace service' }, { status: 502 })
  }
}
