'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import {
  LayoutDashboard,
  GitPullRequestArrow,
  Building2,
  Users,
  CalendarClock,
  Map,
  BarChart3,
  CloudLightning,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react'

interface Staff {
  id: string
  full_name: string
  email: string
  role: string
}

const NAV = [
  { icon: LayoutDashboard,     label: 'Dashboard',    href: '/admin',              enabled: true  },
  { icon: GitPullRequestArrow, label: 'Pipeline',     href: '/admin/pipeline',     enabled: true  },
  { icon: Building2,           label: 'Properties',   href: '/admin/properties',   enabled: true  },
  { icon: Users,               label: 'People',       href: '/admin/people',       enabled: true  },
  { icon: CalendarClock,       label: 'Milestones',   href: '/admin/milestones',   enabled: true  },
  { icon: Map,                 label: 'Map',          href: '/admin/map',          enabled: true  },
  { icon: CloudLightning,      label: 'Hail Reports', href: '/admin/hail-reports', enabled: true  },
  { icon: BarChart3,           label: 'API Usage',    href: '/admin/usage',        enabled: true  },
  { icon: FileText,            label: 'Estimates',    href: '/admin/estimates',    enabled: false },
  { icon: Settings,            label: 'Settings',     href: '/admin/settings',     enabled: false },
]

function NavContent({
  staff,
  onSignOut,
  onClose,
}: {
  staff: Staff
  onSignOut: () => void
  onClose?: () => void
}) {
  const pathname = usePathname()

  function isActive(href: string) {
    if (href === '/admin') return pathname === '/admin'
    return pathname?.startsWith(href) ?? false
  }

  return (
    <div className="flex h-full flex-col">
      {/* Brand */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Admin</p>
          <p className="mt-0.5 text-sm font-bold leading-tight text-gray-900">
            Advanced Roofing<br />& Siding
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-4">
        {NAV.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)

          if (!item.enabled) {
            return (
              <div
                key={item.label}
                className="flex w-full cursor-not-allowed items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-400 opacity-40"
              >
                <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
                {item.label}
              </div>
            )
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? 'bg-brand-primary text-white'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* User footer */}
      <div className="border-t border-gray-100 p-3">
        <div className="mb-2 rounded-lg px-3 py-2">
          <p className="truncate text-xs font-semibold text-gray-900">{staff.full_name}</p>
          <p className="truncate text-[11px] text-gray-400">{staff.email}</p>
          <span className="mt-1 inline-block rounded-full bg-brand-primary-light px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-primary">
            {staff.role}
          </span>
        </div>
        <button
          onClick={onSignOut}
          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600"
        >
          <LogOut className="h-4 w-4" strokeWidth={2} />
          Sign out
        </button>
      </div>
    </div>
  )
}

export function AdminShell({
  staff,
  children,
}: {
  staff: Staff
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Close drawer on navigation
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  const activeLabel = NAV.find((n) => {
    if (n.href === '/admin') return pathname === '/admin'
    return pathname?.startsWith(n.href)
  })?.label ?? ''

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* ── Desktop sidebar ─────────────────────────────── */}
      <aside className="hidden w-60 shrink-0 border-r border-gray-200 bg-white md:flex md:flex-col">
        <div className="sticky top-0 flex h-screen flex-col">
          <NavContent staff={staff} onSignOut={handleSignOut} />
        </div>
      </aside>

      {/* ── Mobile backdrop ──────────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Mobile drawer ────────────────────────────────── */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <NavContent
          staff={staff}
          onSignOut={handleSignOut}
          onClose={() => setMobileOpen(false)}
        />
      </aside>

      {/* ── Main column ──────────────────────────────────── */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Mobile top bar */}
        <header className="flex h-14 shrink-0 items-center gap-3 border-b border-gray-200 bg-white px-4 md:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-bold leading-tight text-gray-900">
              Advanced Roofing & Siding
            </p>
          </div>

          {activeLabel && (
            <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
              {activeLabel}
            </span>
          )}
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
