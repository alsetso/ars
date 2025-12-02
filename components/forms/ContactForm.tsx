'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

interface ContactFormProps {
  service?: string
  city?: string
  state?: string
  showServiceSelect?: boolean
  showTimeline?: boolean
  showAddress?: boolean
}

export function ContactForm({ 
  service = '', 
  city = '', 
  state = '',
  showServiceSelect = true,
  showTimeline = true,
  showAddress = true,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: service,
    message: '',
    address: '',
    timeline: '',
    city: city,
    state: state,
  })
  
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError('')
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitted(true)
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: service,
        message: '',
        address: '',
        timeline: '',
        city: city,
        state: state,
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <Card className="bg-green-50 border-green-200">
        <div className="text-center py-6">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-lg text-gray-700 mb-4">
            We've received your request and will contact you within 24 hours.
          </p>
          <p className="text-sm text-gray-600">
            If you need immediate assistance, please call us at{' '}
            <a href="tel:763-427-3093" className="text-brand-primary hover:text-red-700 font-semibold">
              763-427-3093
            </a>
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 p-4 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-900">Error</p>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
            placeholder="(763) 427-3093"
          />
        </div>

        {showAddress && (
          <div>
            <label htmlFor="address" className="mb-2 block text-sm font-semibold text-gray-700">
              Property Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
              placeholder="City, State (e.g., Anoka, MN)"
            />
            <p className="mt-1 text-xs text-gray-500">
              We serve <Link href="/service-areas" className="text-brand-primary hover:text-red-700 underline underline-offset-2">Minnesota and Wisconsin</Link> communities
            </p>
          </div>
        )}

        {showServiceSelect && (
          <div>
            <label htmlFor="service" className="mb-2 block text-sm font-semibold text-gray-700">
              Service Needed *
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 bg-white"
            >
              <option value="">Select a service</option>
              <option value="roofing">Premium Roofing</option>
              <option value="siding">Siding Solutions</option>
              <option value="windows">Window Installation</option>
              <option value="storm">Storm Restoration</option>
              <option value="winterization">Winterization</option>
              <option value="other">Other / Multiple Services</option>
            </select>
          </div>
        )}

        {showTimeline && (
          <div>
            <label htmlFor="timeline" className="mb-2 block text-sm font-semibold text-gray-700">
              Project Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 bg-white"
            >
              <option value="">Select timeline</option>
              <option value="urgent">Urgent (Within 1 week)</option>
              <option value="soon">Soon (Within 1 month)</option>
              <option value="planning">Planning (1-3 months)</option>
              <option value="exploring">Just exploring options</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 resize-none"
            placeholder="Tell us about your project, any specific concerns, or questions..."
          />
        </div>

        {(city || state) && (
          <>
            <input type="hidden" name="city" value={formData.city} />
            <input type="hidden" name="state" value={formData.state} />
          </>
        )}

        <div className="rounded-lg bg-gray-50 p-3 text-xs text-gray-600">
          <p className="mb-1 font-semibold">What to expect:</p>
          <ul className="space-y-1 pl-4 list-disc">
            <li>Free, no-obligation estimate</li>
            <li>Response within 24 hours</li>
            <li>Expert consultation from our <Link href="/about" className="text-brand-primary hover:text-red-700 underline underline-offset-2">GAF Master Elite</Link> team</li>
          </ul>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Request Free Estimate'}
          {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
        </Button>
      </form>
    </Card>
  )
}

