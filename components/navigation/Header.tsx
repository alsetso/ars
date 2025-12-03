'use client'

import { COMPANY_INFO, NAVIGATION_LINKS } from '@/lib/constants'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      let clickedInside = false

      dropdownRefs.current.forEach((ref) => {
        if (ref && ref.contains(target)) {
          clickedInside = true
        }
      })

      if (!clickedInside && openDropdown) {
        setOpenDropdown(null)
      }
    }

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openDropdown])

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/AFS-Logo900.png"
              alt="Advanced Roofing & Siding Inc."
              width={200}
              height={80}
              className="h-12 w-auto sm:h-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {NAVIGATION_LINKS.map((link) => {
              const hasSubmenu = 'submenu' in link && link.submenu && link.submenu.length > 0
              const isActive = pathname === link.href || (hasSubmenu && 'submenu' in link && link.submenu?.some(item => pathname === item.href))
              
              return (
                <div
                  key={link.href}
                  ref={(el) => {
                    if (el && hasSubmenu) {
                      dropdownRefs.current.set(link.href, el)
                    } else if (!el && hasSubmenu) {
                      dropdownRefs.current.delete(link.href)
                    }
                  }}
                  className="relative"
                >
                  {hasSubmenu ? (
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(openDropdown === link.href ? null : link.href)}
                      className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-brand-primary ${
                        isActive ? 'text-brand-primary' : 'text-gray-700'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === link.href ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-sm font-semibold transition-colors hover:text-brand-primary ${
                        isActive ? 'text-brand-primary' : 'text-gray-700'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                  
                  {hasSubmenu && openDropdown === link.href && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 top-full pt-2 w-56 z-[60] pointer-events-auto"
                    >
                      <div className="rounded-lg bg-white shadow-lg border border-gray-200 py-2 pointer-events-auto">
                        {link.submenu?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-4 py-2 text-sm font-semibold transition-colors hover:bg-gray-50 hover:text-brand-primary cursor-pointer ${
                              pathname === item.href ? 'text-brand-primary bg-red-50' : 'text-gray-700'
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Desktop CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="hidden items-center gap-2 rounded-lg bg-brand-primary px-4 py-2 text-white transition-colors hover:bg-red-800 sm:flex sm:px-6 sm:py-3"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-semibold sm:text-base">{COMPANY_INFO.phone}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="border-t border-gray-200 py-4">
                {NAVIGATION_LINKS.map((link) => {
                  const hasSubmenu = 'submenu' in link && link.submenu && link.submenu.length > 0
                  const isActive = pathname === link.href || (hasSubmenu && 'submenu' in link && link.submenu?.some(item => pathname === item.href))
                  
                  return (
                    <div key={link.href}>
                      {hasSubmenu ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setOpenDropdown(openDropdown === link.href ? null : link.href)}
                            className={`flex w-full items-center justify-between py-3 text-base font-semibold transition-colors hover:text-brand-primary ${
                              isActive ? 'text-brand-primary' : 'text-gray-700'
                            }`}
                          >
                            {link.label}
                            <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === link.href ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {openDropdown === link.href && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden pl-4"
                              >
                                {link.submenu?.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false)
                                      setOpenDropdown(null)
                                    }}
                                    className={`block py-2 text-sm font-semibold transition-colors hover:text-brand-primary ${
                                      pathname === item.href
                                        ? 'text-brand-primary'
                                        : 'text-gray-600'
                                    }`}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-3 text-base font-semibold transition-colors hover:text-brand-primary ${
                            pathname === link.href
                              ? 'text-brand-primary'
                              : 'text-gray-700'
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  )
                })}
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-4 py-3 text-white transition-colors hover:bg-red-800"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">{COMPANY_INFO.phone}</span>
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

