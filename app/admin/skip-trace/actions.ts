'use server'

import { revalidatePath } from 'next/cache'
import {
  traceAddress,
  tracePersonDetail,
  getTracedPeopleForProperty,
  getPersonFromDb,
} from '@/lib/skip-trace/service'

export async function runAddressTrace(
  propertyId:    string,
  street:        string,
  citystatezip:  string,
  fullAddress?:  string,
  forceRefresh = false,
) {
  const result = await traceAddress({ propertyId, street, citystatezip, fullAddress, forceRefresh })
  revalidatePath(`/admin/properties/${propertyId}`)
  revalidatePath('/admin/people')
  return result
}

export async function runPersonDetail(personId: string, forceRefresh = false) {
  const result = await tracePersonDetail(personId, forceRefresh)
  revalidatePath(`/admin/people/${personId}`)
  return result
}

export async function fetchPersonFromDb(personId: string) {
  return getPersonFromDb(personId)
}

export async function fetchTracesForProperty(propertyId: string) {
  return getTracedPeopleForProperty(propertyId)
}
