import { NextRequest, NextResponse } from 'next/server'
import { parse } from 'node-html-parser'

export const dynamic = 'force-dynamic'

export interface HailReport {
  date: string
  location: string | null
  size_in: string | null
  time: string | null
  details: string
  url: string
}

const STORMER_BASE = 'https://www.stormersite.com'

async function scrapeDay(
  state: string,
  year: number,
  month: string,
  day: number,
): Promise<HailReport[]> {
  const dd = String(day).padStart(2, '0')
  const url = `${STORMER_BASE}/haildate/${state}/${year}/${month}/${dd}`

  let html: string
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      next: { revalidate: 0 },
    })
    if (!res.ok) return []
    html = await res.text()
  } catch {
    return []
  }

  const root = parse(html)
  const reports: HailReport[] = []

  // "View report" links anchor each hail event block
  for (const link of root.querySelectorAll('a')) {
    const text = link.text.trim()
    if (!text.toLowerCase().includes('view report')) continue

    const href = link.getAttribute('href') ?? ''
    const block = link.parentNode
    const blockText = block?.text?.replace(/\s+/g, ' ').trim() ?? ''

    const sizeMatch = blockText.match(/(\d+(?:\.\d+)?)\s*IN/i)
    const locMatch  = blockText.match(/([A-Za-z .]+,\s*(?:MN|WI|IA|SD|ND))/i)
    const timeMatch = blockText.match(/(\d{1,2}:\d{2}\s*[AP]M)/i)

    reports.push({
      date:     `${month} ${day}, ${year}`,
      location: locMatch  ? locMatch[1].trim()  : null,
      size_in:  sizeMatch ? sizeMatch[1]        : null,
      time:     timeMatch ? timeMatch[1]        : null,
      details:  blockText,
      url:      href.startsWith('/') ? `${STORMER_BASE}${href}` : href,
    })
  }

  return reports
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const state    = (searchParams.get('state')    ?? 'MN').toUpperCase()
  const year     = parseInt(searchParams.get('year')  ?? String(new Date().getFullYear()), 10)
  const month    = searchParams.get('month')    ?? 'June'
  const startDay = parseInt(searchParams.get('startDay') ?? '1',  10)
  const endDay   = parseInt(searchParams.get('endDay')   ?? String(new Date().getDate()), 10)

  if (isNaN(year) || isNaN(startDay) || isNaN(endDay) || startDay < 1 || endDay > 31 || startDay > endDay) {
    return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 })
  }

  const days = Array.from({ length: endDay - startDay + 1 }, (_, i) => startDay + i)
  const allReports: HailReport[] = []

  // Fetch days sequentially to avoid hammering the site
  for (const day of days) {
    const reports = await scrapeDay(state, year, month, day)
    allReports.push(...reports)
    // Small politeness delay between requests
    if (day < endDay) await new Promise((r) => setTimeout(r, 300))
  }

  return NextResponse.json({ reports: allReports, total: allReports.length })
}
