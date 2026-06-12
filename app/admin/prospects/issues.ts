export const ROOFING_ISSUES = [
  { value: 'missing_shingles',  label: 'Missing shingles' },
  { value: 'hail_damage_roof',  label: 'Hail damage' },
  { value: 'wind_damage_roof',  label: 'Wind damage' },
  { value: 'curling_shingles',  label: 'Curling / buckling shingles' },
  { value: 'granule_loss',      label: 'Granule loss' },
  { value: 'sagging_roof',      label: 'Sagging deck' },
  { value: 'ice_dam_damage',    label: 'Ice dam damage' },
  { value: 'aged_roof',         label: 'Aged / worn roof' },
] as const

export const SIDING_ISSUES = [
  { value: 'hail_dents_siding',     label: 'Hail dents' },
  { value: 'cracked_siding',        label: 'Cracked / broken panels' },
  { value: 'faded_siding',          label: 'Faded / peeling paint' },
  { value: 'wind_damage_siding',    label: 'Wind damage' },
  { value: 'missing_siding',        label: 'Missing sections' },
  { value: 'water_staining_siding', label: 'Water staining' },
] as const

export const GENERAL_ISSUES = [
  { value: 'tree_damage',  label: 'Tree damage' },
  { value: 'storm_damage', label: 'Storm damage (general)' },
  { value: 'old_exterior', label: 'Old / aged exterior' },
] as const
