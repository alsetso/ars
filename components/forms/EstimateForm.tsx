'use client'

import { useState, FormEvent } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { AddressAutocomplete } from '@/components/forms/AddressAutocomplete'
import { ArrowRight, CheckCircle, AlertCircle, Phone, Loader2 } from 'lucide-react'
import Link from 'next/link'

/**
 * Unified estimate request form used across the entire site.
 *
 * Visual states:
 *   1. Form  — idle or submitting (submit button shows spinner)
 *   2. Success — confirmation with click-to-call CTA
 *
 * One POST target: /api/contact
 * Every submission includes source_url (the page the visitor came from).
 */

const INPUT =
  'w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors'

const LABEL = 'mb-1 block text-xs font-semibold text-gray-600'

interface EstimateFormProps {
  /** Pre-select a service in the dropdown (e.g. "roofing", "storm-restoration") */
  serviceSlug?: string
  /** Pre-populate city — shown in placeholder text, sent with submission */
  cityName?: string
  /** Pre-populate state abbreviation (e.g. "MN") — sent with submission */
  stateAbbr?: string
}

export function EstimateForm({ serviceSlug = '', cityName = '', stateAbbr = '' }: EstimateFormProps) {
  const pathname = usePathname()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceSlug,
    message: '',
    address: '',
    city: cityName,
    state: stateAbbr,
    zip: '',
    timeline: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source_url: pathname,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to send request')
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  /* ── State 2: Success ─────────────────────────────────────────────────── */
  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-9 w-9 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">We'll Be in Touch!</h3>
          <p className="mt-1 text-sm text-gray-500 leading-relaxed">
            Your request is received. Expect a call within 24 hours — usually much sooner.
          </p>
        </div>
        <a
          href="tel:763-427-3093"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark"
        >
          <Phone className="h-4 w-4" />
          763-427-3093
        </a>
      </div>
    )
  }

  /* ── State 1: Form ────────────────────────────────────────────────────── */
  const messagePlaceholder = cityName
    ? `Describe your project in ${cityName}…`
    : 'Describe your project or any specific concerns…'

  const addressPlaceholder = cityName
    ? `123 Main St, ${cityName}, ${stateAbbr}…`
    : '123 Main St, Anoka, MN…'

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
      {/* Error banner */}
      {error && (
        <div className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-3">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
          <p className="text-xs text-red-700">{error}</p>
        </div>
      )}

      {/* Name + Phone */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="ef-name" className={LABEL}>Full Name *</label>
          <input
            type="text"
            id="ef-name"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className={INPUT}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="ef-phone" className={LABEL}>Phone *</label>
          <input
            type="tel"
            id="ef-phone"
            name="phone"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className={INPUT}
            placeholder="(763) 555-0100"
          />
        </div>
      </div>

      {/* Email + Service */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="ef-email" className={LABEL}>Email *</label>
          <input
            type="email"
            id="ef-email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={INPUT}
            placeholder="jane@email.com"
          />
        </div>
        <div>
          <label htmlFor="ef-service" className={LABEL}>Service</label>
          <select
            id="ef-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={INPUT}
          >
            <option value="">Select service</option>
            <option value="roofing">Roofing</option>
            <option value="siding">Siding</option>
            <option value="windows">Windows</option>
            <option value="storm-restoration">Storm Restoration</option>
            <option value="gutters">Gutters</option>
            <option value="soffit-fascia">Soffit &amp; Fascia</option>
            <option value="exterior-doors">Exterior Doors</option>
            <option value="winterization">Winterization</option>
          </select>
        </div>
      </div>

      {/* Address */}
      <div>
        <label className={LABEL}>Property Address *</label>
        <AddressAutocomplete
          value={formData.address}
          required
          onChange={(address, city, state, zip) =>
            setFormData((prev) => ({
              ...prev,
              address,
              city: city || prev.city,
              state: state || prev.state,
              zip: zip || prev.zip,
            }))
          }
          placeholder={addressPlaceholder}
        />
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="ef-timeline" className={LABEL}>When do you need this done? *</label>
        <select
          id="ef-timeline"
          name="timeline"
          required
          value={formData.timeline}
          onChange={handleChange}
          className={INPUT}
        >
          <option value="">Select timeline</option>
          <option value="urgent">Urgent — within 1 week</option>
          <option value="soon">Soon — within 1 month</option>
          <option value="planning">Planning — 1–3 months</option>
          <option value="exploring">Just exploring options</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="ef-message" className={LABEL}>Project Details *</label>
        <textarea
          id="ef-message"
          name="message"
          rows={3}
          required
          value={formData.message}
          onChange={handleChange}
          className={`${INPUT} resize-none`}
          placeholder={messagePlaceholder}
        />
      </div>

      {/* Trust strip */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-400">
        <span className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-green-500" />
          No obligation
        </span>
        <span className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-green-500" />
          <Link href="/resources/gaf-master-elite-contractor" className="hover:text-brand-primary transition-colors">
            GAF Master Elite
          </Link>{' '}
          certified
        </span>
        <span className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-green-500" />
          Serving{' '}
          <Link href="/service-areas" className="hover:text-brand-primary transition-colors">
            MN &amp; WI
          </Link>
        </span>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Request Free Estimate
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  )
}
