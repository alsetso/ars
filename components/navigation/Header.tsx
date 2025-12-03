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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-md shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 lg:py-3">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center flex-shrink-0 transition-opacity hover:opacity-90"
          >
            <Image
              src="/AFS-Logo900.png"
              alt="Advanced Roofing & Siding Inc."
              width={200}
              height={80}
              className="h-10 w-auto sm:h-14 lg:h-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8">
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
                      className={`relative flex items-center gap-1.5 text-sm font-semibold tracking-tight transition-all duration-200 hover:text-brand-primary ${
                        isActive 
                          ? 'text-brand-primary' 
                          : 'text-gray-800'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown 
                        className={`h-3.5 w-3.5 transition-all duration-200 ${
                          openDropdown === link.href ? 'rotate-180' : ''
                        }`} 
                      />
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary rounded-full"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative block text-sm font-semibold tracking-tight transition-all duration-200 hover:text-brand-primary ${
                        isActive 
                          ? 'text-brand-primary' 
                          : 'text-gray-800'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary rounded-full"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}
                  
                  {hasSubmenu && openDropdown === link.href && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute left-0 top-full pt-3 w-56 z-[60] pointer-events-auto"
                    >
                      <div className="rounded-xl bg-white shadow-xl border border-gray-100 py-1.5 pointer-events-auto overflow-hidden">
                        {link.submenu?.map((item, index) => (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.02 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setOpenDropdown(null)}
                              className={`block px-4 py-2.5 text-sm font-semibold tracking-tight transition-all duration-150 hover:bg-gray-50 hover:text-brand-primary cursor-pointer ${
                                pathname === item.href 
                                  ? 'text-brand-primary bg-red-50/50' 
                                  : 'text-gray-700'
                              }`}
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Desktop CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="hidden items-center gap-2 rounded-lg bg-brand-primary px-4 py-2 text-white text-sm font-semibold tracking-tight transition-all duration-200 hover:bg-red-800 hover:shadow-md active:scale-[0.98] sm:flex"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors hover:bg-gray-100 active:bg-gray-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-900" />
              ) : (
                <Menu className="h-5 w-5 text-gray-900" />
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
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden lg:hidden border-t border-gray-200/80"
            >
              <div className="py-3">
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
                            className={`flex w-full items-center justify-between py-2.5 px-1 text-sm font-semibold tracking-tight transition-colors hover:text-brand-primary ${
                              isActive ? 'text-brand-primary' : 'text-gray-800'
                            }`}
                          >
                            {link.label}
                            <ChevronDown 
                              className={`h-4 w-4 transition-transform duration-200 ${
                                openDropdown === link.href ? 'rotate-180' : ''
                              }`} 
                            />
                          </button>
                          <AnimatePresence>
                            {openDropdown === link.href && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.15 }}
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
                                    className={`block py-2 text-sm font-semibold tracking-tight transition-colors hover:text-brand-primary ${
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
                          className={`block py-2.5 px-1 text-sm font-semibold tracking-tight transition-colors hover:text-brand-primary ${
                            pathname === link.href
                              ? 'text-brand-primary'
                              : 'text-gray-800'
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
                  className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-4 py-2.5 text-white text-sm font-semibold tracking-tight transition-all duration-200 hover:bg-red-800 active:scale-[0.98]"
                >
                  <Phone className="h-4 w-4" />
                  <span>Contact</span>
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

