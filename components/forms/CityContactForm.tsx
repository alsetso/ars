'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { CheckCircle } from 'lucide-react'

interface CityContactFormProps {
  cityName: string
  stateAbbr: string
}

export function CityContactForm({ cityName, stateAbbr }: CityContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    city: cityName,
    state: stateAbbr,
  })
  
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    // Build email content
    let emailBody = `New Lead from ARS Website\n\n`
    emailBody += `Contact Information:\n`
    emailBody += `- Name: ${formData.name}\n`
    emailBody += `- Email: ${formData.email}\n`
    emailBody += `- Phone: ${formData.phone}\n`
    emailBody += `- City: ${formData.city}\n`
    emailBody += `- State: ${formData.state}\n`
    emailBody += `\nService Information:\n`
    emailBody += `- Service Needed: ${formData.service || 'Not specified'}\n`
    if (formData.message) {
      emailBody += `\nMessage:\n${formData.message}\n`
    }
    emailBody += `\n---\nSubmitted from Advanced Roofing & Siding website`

    // Create mailto link with pre-filled email
    const subject = encodeURIComponent('New Lead from ARS')
    const body = encodeURIComponent(emailBody)
    const mailtoLink = `mailto:alsetsolutionsinc@gmail.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink
    
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Client Opened!</h3>
        <p className="text-lg text-gray-700 mb-4">
          Your email client should have opened with a pre-filled message. Please click "Send" to complete your request.
        </p>
        <p className="text-sm text-gray-600">
          If your email client didn't open, email us at{' '}
          <a href="mailto:alsetsolutionsinc@gmail.com?subject=New Lead from ARS" className="text-brand-primary hover:text-red-700 font-semibold">
            alsetsolutionsinc@gmail.com
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          />
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-semibold text-gray-700">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 bg-white"
          >
            <option value="">Select a service</option>
            <option value="roofing">Roofing</option>
            <option value="siding">Siding</option>
            <option value="windows">Windows</option>
            <option value="storm">Storm Restoration</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 resize-none"
            placeholder={`Tell us about your project in ${cityName}...`}
          />
        </div>

        <input type="hidden" name="city" value={formData.city} />
        <input type="hidden" name="state" value={formData.state} />

        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          className="w-full"
        >
          Get Free Estimate
        </Button>
      </form>
  )
}

