// ── Provider contract types ───────────────────────────────────────────────────
// These describe what the provider API returns. Adapter maps raw → normalized.

export interface NormalizedPerson {
  providerPersonId: string
  profileLink:      string
  name:             string
  age:              number | null
  livesIn:          string
  usedToLiveIn:     string
  relatedTo:        string
}

export interface NormalizedAddressResult {
  recordsFound: number
  page:         number
  people:       NormalizedPerson[]
}

export interface NormalizedPhone {
  phoneNumber:  string
  phoneType:    string
  phoneInfo?:   string
  lastReported: string
  provider:     string
}

export interface NormalizedAddress {
  streetAddress: string
  locality:      string
  region:        string
  postalCode:    string
  county:        string
  dateRange?:    string
  timespan?:     string
}

export interface NormalizedRelative {
  name:       string
  age:        string
  personLink: string
  personId:   string
}

export interface NormalizedPersonDetail {
  providerPersonId:   string
  name:               string
  age:                string
  born:               string
  livesIn:            string
  primaryPhone:       string
  currentAddress:     NormalizedAddress | null
  allPhones:          NormalizedPhone[]
  emailAddresses:     string[]
  previousAddresses:  NormalizedAddress[]
  relatives:          NormalizedRelative[]
  associates:         NormalizedRelative[]
}

export interface SkipTraceProvider {
  readonly id:   string
  readonly name: string

  fetchAddressTrace(
    street:       string,
    citystatezip: string,
    page?:        number,
  ): Promise<{ rawResponse: unknown; normalized: NormalizedAddressResult }>

  fetchPersonDetail(
    providerPersonId: string,
  ): Promise<{ rawResponse: unknown; normalized: NormalizedPersonDetail }>
}

// ── DB row shapes ─────────────────────────────────────────────────────────────

// Stored in skip_trace_raw JSONB on the people row.
// Holds everything that doesn't belong in a direct people column.
export interface SkipTraceRawData {
  age:               number | null
  born:              string | null
  lives_in:          string | null
  used_to_live_in:   string | null
  related_to:        string | null
  profile_link:      string | null
  detail_fetched_at: string | null
  current_address:   NormalizedAddress | null
  all_phones:        NormalizedPhone[] | null
  previous_addresses: NormalizedAddress[]
  relatives:         NormalizedRelative[]
  associates:        NormalizedRelative[]
}

// A people row that was created by skip trace.
// phone / extra_phones / extra_emails are populated after the detail fetch.
export interface TracedPerson {
  id:                      string
  created_at:              string
  name:                    string | null
  phone:                   string | null
  email:                   string | null
  extra_phones:            string[] | null
  extra_emails:            string[] | null
  skip_traced_at:          string | null
  skip_trace_provider_id:  string | null
  skip_trace_raw:          SkipTraceRawData | null
}

// Lightweight run log row (skip_trace_runs table).
export interface SkipTraceRun {
  id:            string
  created_at:    string
  created_by:    string | null
  property_id:   string
  provider:      string
  status:        'complete' | 'failed'
  records_found: number | null
  error_message: string | null
}
