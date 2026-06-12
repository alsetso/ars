import type {
  SkipTraceProvider,
  NormalizedAddressResult,
  NormalizedPersonDetail,
  NormalizedPhone,
  NormalizedAddress,
  NormalizedRelative,
} from '../types'

const HOST = 'skip-tracing-working-api.p.rapidapi.com'

function headers() {
  const key = process.env.RAPID_API_KEY
  if (!key) throw new Error('RAPID_API_KEY is not set')
  return {
    'Content-Type':    'application/json',
    'x-rapidapi-host': HOST,
    'x-rapidapi-key':  key,
  }
}

// ── Address trace ─────────────────────────────────────────────────────────────

async function fetchAddressTrace(
  street: string,
  citystatezip: string,
  page = 1,
): Promise<{ rawResponse: unknown; normalized: NormalizedAddressResult }> {
  const url = new URL(`https://${HOST}/search/byaddress`)
  url.searchParams.set('street',      street)
  url.searchParams.set('citystatezip', citystatezip)
  url.searchParams.set('page',        String(page))

  const res = await fetch(url.toString(), { headers: headers(), cache: 'no-store' })
  if (!res.ok) throw new Error(`RapidAPI address trace error: ${res.status}`)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const raw: any = await res.json()

  const normalized: NormalizedAddressResult = {
    recordsFound: raw.Records  ?? 0,
    page:         raw.Page     ?? page,
    people: (raw.PeopleDetails ?? []).map((p: Record<string, unknown>) => ({
      providerPersonId: p['Person ID'] as string,
      profileLink:      p['Link']      as string ?? '',
      name:             p['Name']      as string ?? '',
      age:              (p['Age'] as number) ?? null,
      livesIn:          p['Lives in']       as string ?? '',
      usedToLiveIn:     p['Used to live in'] as string ?? '',
      relatedTo:        p['Related to']      as string ?? '',
    })),
  }

  return { rawResponse: raw, normalized }
}

// ── Person detail ─────────────────────────────────────────────────────────────

async function fetchPersonDetail(
  providerPersonId: string,
): Promise<{ rawResponse: unknown; normalized: NormalizedPersonDetail }> {
  const url = new URL(`https://${HOST}/search/detailsbyID`)
  url.searchParams.set('peo_id', providerPersonId)

  const res = await fetch(url.toString(), { headers: headers(), cache: 'no-store' })
  if (!res.ok) throw new Error(`RapidAPI person detail error: ${res.status}`)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const raw: any = await res.json()

  const pd       = (raw['Person Details']              ?? [])[0] ?? {}
  const curRaw   = (raw['Current Address Details List']?? [])[0] ?? null
  const phones   = raw['All Phone Details']            ?? []
  const prevAddrs= raw['Previous Address Details']     ?? []
  const relatives= raw['All Relatives']                ?? []
  const assocs   = raw['All Associates']               ?? []

  // Pick the primary phone (has phone_info) or fall back to first
  const primaryPhone: string =
    phones.find((p: Record<string, string>) => p.phone_info)?.phone_number ??
    phones[0]?.phone_number ??
    ''

  const mapPhone = (p: Record<string, string>): NormalizedPhone => ({
    phoneNumber:  p.phone_number  ?? '',
    phoneType:    p.phone_type    ?? '',
    phoneInfo:    p.phone_info,
    lastReported: p.last_reported ?? '',
    provider:     p.provider      ?? '',
  })

  const mapCurrentAddr = (a: Record<string, string>): NormalizedAddress => ({
    streetAddress: a.street_address     ?? '',
    locality:      a.address_locality   ?? '',
    region:        a.address_region     ?? '',
    postalCode:    a.postal_code        ?? '',
    county:        a.county             ?? '',
    dateRange:     a.date_range,
  })

  const mapPrevAddr = (a: Record<string, string>): NormalizedAddress => ({
    streetAddress: a.streetAddress      ?? '',
    locality:      a.addressLocality    ?? '',
    region:        a.addressRegion      ?? '',
    postalCode:    a.postalCode         ?? '',
    county:        a.county             ?? '',
    timespan:      a.timespan,
  })

  const mapRelative = (r: Record<string, string>): NormalizedRelative => ({
    name:       r.Name              ?? '',
    age:        r.Age               ?? '',
    personLink: r['Person Link']    ?? '',
    personId:   r['Person ID']      ?? '',
  })

  const normalized: NormalizedPersonDetail = {
    providerPersonId,
    name:              pd.Person_name  ?? '',
    age:               pd.Age          ?? '',
    born:              pd.Born         ?? '',
    livesIn:           pd['Lives in']  ?? '',
    primaryPhone,
    currentAddress:    curRaw ? mapCurrentAddr(curRaw) : null,
    allPhones:         phones.map(mapPhone),
    emailAddresses:    raw['Email Addresses'] ?? [],
    previousAddresses: prevAddrs.map(mapPrevAddr),
    relatives:         relatives.map(mapRelative),
    associates:        assocs.map(mapRelative),
  }

  return { rawResponse: raw, normalized }
}

// ── Export provider singleton ─────────────────────────────────────────────────

export const rapidApiProvider: SkipTraceProvider = {
  id:   'rapidapi_tps',
  name: 'RapidAPI — TruePeopleSearch',
  fetchAddressTrace,
  fetchPersonDetail,
}
