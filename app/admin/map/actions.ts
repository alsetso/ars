'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { createPipelineRecord, type IntakeInput } from '@/lib/admin/intake'

export type { IntakeInput }

async function requireStaff() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')
  const { data: staff } = await supabase.from('staff').select('id').eq('id', user.id).single()
  if (!staff) throw new Error('Unauthorized')
  return { supabase, userId: user.id }
}

// ── Create a prospect from the map ────────────────────────────────────────────
// Writes directly into properties → people → pipeline (stage: prospect).

export async function createMapProspect(input: Omit<IntakeInput, 'stage' | 'source'>) {
  const { supabase, userId } = await requireStaff()

  const result = await createPipelineRecord(supabase, {
    ...input,
    created_by: userId,
    stage:  'prospect',
    source: 'map',
  })

  revalidatePath('/admin/pipeline')
  revalidatePath('/admin/properties')
  return result
}
