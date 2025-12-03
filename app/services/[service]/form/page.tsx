'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { COMPANY_INFO } from '@/lib/constants'
import { CheckCircle, Phone, Mail, MapPin, AlertCircle } from 'lucide-react'

const serviceConfig: Record<string, {
  title: string
  headline: string
  subheadline: string
  icon: string
  color: string
  bgGradient: string
}> = {
  roofing: {
    title: 'Premium Roofing',
    headline: 'Get Your Free Roofing Estimate',
    subheadline: 'GAF Master Elite certified roofing solutions for your Minnesota or Wisconsin home',
    icon: '🏠',
    color: 'text-red-600',
    bgGradient: 'from-red-50 to-white',
  },
  siding: {
    title: 'Siding Solutions',
    headline: 'Transform Your Home\'s Exterior',
    subheadline: 'Professional siding installation with premium materials and expert craftsmanship',
    icon: '🎨',
    color: 'text-blue-600',
    bgGradient: 'from-blue-50 to-white',
  },
  windows: {
    title: 'Window Installation',
    headline: 'Energy-Efficient Windows for Your Home',
    subheadline: 'Reduce energy costs and enhance comfort with professional window installation',
    icon: '🪟',
    color: 'text-green-600',
    bgGradient: 'from-green-50 to-white',
  },
  'storm-restoration': {
    title: 'Storm Restoration',
    headline: 'Expert Storm Damage Repair',
    subheadline: 'Fast response and insurance claim assistance for storm-damaged properties',
    icon: '⛈️',
    color: 'text-purple-600',
    bgGradient: 'from-purple-50 to-white',
  },
  winterization: {
    title: 'Winterization',
    headline: 'Protect Your Home This Winter',
    subheadline: 'Custom winterization packages to reduce heating costs and prevent damage',
    icon: '❄️',
    color: 'text-blue-600',
    bgGradient: 'from-blue-50 to-white',
  },
}

export default function ServiceFormPage() {
  const params = useParams()
  const service = params?.service as string
  const config = serviceConfig[service] || serviceConfig.roofing
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: service === 'storm-restoration' ? 'storm' : service,
    message: '',
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
        service: service === 'storm-restoration' ? 'storm' : service,
        message: '',
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen overflow-hidden flex flex-col bg-gradient-to-br bg-white">
      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-6 left-6 z-10"
      >
        <Image
          src="/AFS-Logo900.png"
          alt="Advanced Roofing & Siding Inc."
          width={180}
          height={72}
          className="h-10 w-auto sm:h-14"
          priority
        />
      </motion.div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="text-6xl mb-4">{config.icon}</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {config.headline}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              {config.subheadline}
            </p>
          </motion.div>

          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
                {error && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-3 mb-4 flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-red-900">Error</p>
                      <p className="text-xs text-red-700">{error}</p>
                    </div>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors"
                      placeholder="(763) 427-3093"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors bg-white"
                    >
                      <option value="roofing">Roofing</option>
                      <option value="siding">Siding</option>
                      <option value="windows">Windows</option>
                      <option value="storm">Storm Restoration</option>
                      <option value="winterization">Winterization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors resize-none"
                      placeholder="Describe your project or any specific concerns..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="md" 
                    className="w-full text-sm py-2.5"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Get My Free Estimate'}
                  </Button>
                </form>

                {/* Trust Indicators */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Free Estimate</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>No Obligation</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>GAF Master Elite</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 text-center"
            >
              <div className="mb-4">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h2>
              <p className="text-lg text-gray-600 mb-6">
                We've received your request and will contact you within 24 hours.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-brand-primary" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-brand-primary hover:text-red-800 font-semibold">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-brand-primary" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-primary hover:text-red-800 font-semibold">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer Contact Info - Minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-6 left-0 right-0 px-6"
      >
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-brand-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{COMPANY_INFO.location}</span>
            </div>
          </div>
          
          {/* Single Wrapping Line of All Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-gray-600">
            <Link href="/" className="transition-colors hover:text-brand-primary whitespace-nowrap">
              Home
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/about" className="transition-colors hover:text-brand-primary whitespace-nowrap">
              About Us
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/services" className="transition-colors hover:text-brand-primary whitespace-nowrap">
              Services
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/services/roofing" className="transition-colors hover:text-brand-primary whitespace-nowrap">
              Roofing
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/services/siding" className="transition-colors hover:text-brand-primary whitespace-nowrap">
              Siding
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/services/windows" className="transition-colors hover:text-brand-primary whitespace-nowrap">
              Windows
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/services/storm-restoration" className="transition-colors hover:text-brand-primary whitespace-nowrap">
              Storm Restoration
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/services/winterization" className="transition-colors hover:text-brand-primary whitespace-nowrap">
              Winterization
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/service-areas" className="transition-colors hover:text-brand-primary whitespace-nowrap">
              Service Areas
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/resources/insurance-claims" className="transition-colors hover:text-brand-primary whitespace-nowrap">
              Insurance Claims
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/resources/gaf-master-elite-contractor" className="transition-colors hover:text-brand-primary whitespace-nowrap">
              GAF Master Elite
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/resources/24-7-support" className="transition-colors hover:text-brand-primary whitespace-nowrap">
              24/7 Support
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/resources/reviews" className="transition-colors hover:text-brand-primary whitespace-nowrap">
              Reviews
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/warranties" className="transition-colors hover:text-brand-primary whitespace-nowrap">
              Warranties
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/contact" className="transition-colors hover:text-brand-primary whitespace-nowrap">
              Contact
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

