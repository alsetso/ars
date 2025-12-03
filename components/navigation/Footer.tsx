'use client'

import { COMPANY_INFO, NAVIGATION_LINKS } from '@/lib/constants'
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Shield, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      {/* Compact Warranties Section */}
      <div className="border-b border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Left: Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-1.5 flex items-center justify-center gap-2 lg:justify-start">
                  <Shield className="h-4 w-4 text-brand-primary" />
                  <h3 className="text-base font-bold text-gray-900">
                    GAF Golden Pledge Warranty
                  </h3>
                </div>
                <p className="text-xs text-gray-700 sm:text-sm">
                  <strong>50-year coverage at no additional cost</strong> – Industry-leading protection that continues even if we go out of business.
                </p>
              </div>

              {/* Middle: Certification Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="relative h-12 w-20 sm:h-14 sm:w-24">
                  <Image
                    src="/MASTER_ELITE_png2.webp"
                    alt="GAF Master Elite Certification"
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <div className="relative h-12 w-20 sm:h-14 sm:w-24">
                  <Image
                    src="/GOLDEN_PLEDGE.webp"
                    alt="GAF Golden Pledge Warranty"
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <div className="relative h-12 w-20 sm:h-14 sm:w-24">
                  <Image
                    src="/GAF-3xTripleAward.webp"
                    alt="GAF 3x Triple Award"
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <div className="relative h-12 w-20 sm:h-14 sm:w-24">
                  <Image
                    src="/Presidents_Club_3_Star_Residential.webp"
                    alt="GAF Presidents Club 3 Star Residential"
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
              </div>

              {/* Right: CTA Link */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <Link
                  href="/resources/warranties"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary transition-colors hover:text-red-800 sm:text-sm"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              {COMPANY_INFO.name}
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              {COMPANY_INFO.tagline} | License #{COMPANY_INFO.license}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
              <span>A+ BBB Rating</span>
              <span>•</span>
              <span>30+ Years Experience</span>
              <span>•</span>
              <span>Licensed & Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-brand-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/resources/warranties"
                  className="text-sm text-gray-600 transition-colors hover:text-brand-primary"
                >
                  Warranties
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/roofing"
                  className="text-sm text-gray-600 transition-colors hover:text-brand-primary"
                >
                  Premium Roofing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/siding"
                  className="text-sm text-gray-600 transition-colors hover:text-brand-primary"
                >
                  Siding Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/windows"
                  className="text-sm text-gray-600 transition-colors hover:text-brand-primary"
                >
                  Window Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/storm-restoration"
                  className="text-sm text-gray-600 transition-colors hover:text-brand-primary"
                >
                  Storm Restoration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-brand-primary"
                >
                  <Phone className="h-4 w-4" />
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-brand-primary"
                >
                  <Mail className="h-4 w-4" />
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.location}</span>
                </div>
              </li>
            </ul>

            {/* Social Links - TODO: Replace with actual social media profile URLs when available */}
            {/* Uncomment and update URLs when social profiles are created:
            <div className="mt-4 flex gap-3">
              <a
                href="https://facebook.com/your-page"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-brand-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-brand-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/your-company"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-brand-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-center text-xs text-gray-500 sm:text-left">
              <p className="mb-1">
                Copyright © 2001 - 2025 Advanced Roofing & Siding, Inc. All Rights Reserved
              </p>
              <p className="mb-1">
                MN License #BC630441 | WI License #2992 - DCRF
              </p>
              <p className="mb-1">
                3601 211th Ln NW, Oak Grove, MN 55303
              </p>
              <p className="mb-1">
                <a href="tel:763-427-3093" className="transition-colors hover:text-brand-primary">763-427-3093</a>
                {' • '}
                <a href="mailto:StacyLehn@GMail.com" className="transition-colors hover:text-brand-primary">StacyLehn@GMail.com</a>
              </p>
              <p className="mt-2 italic">
                Prices & Availability Subject To Change Without Notice
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 sm:justify-end">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-brand-primary"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                href="/terms-of-service"
                className="transition-colors hover:text-brand-primary"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Single Wrapping Line of All Links */}
          <div className="mt-6 pt-6 border-t border-gray-200">
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
              <Link href="/resources/warranties" className="transition-colors hover:text-brand-primary whitespace-nowrap">
                Warranties
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/contact" className="transition-colors hover:text-brand-primary whitespace-nowrap">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


