export function parseSkipTraceAddress(fullAddress: string | null): {
  street: string; citystatezip: string
} | null {
  if (!fullAddress) return null
  const clean    = fullAddress.replace(/, United States$/, '').trim()
  const commaIdx = clean.indexOf(',')
  if (commaIdx === -1) return null
  return {
    street:       clean.slice(0, commaIdx).trim(),
    citystatezip: clean.slice(commaIdx + 1).trim(),
  }
}
