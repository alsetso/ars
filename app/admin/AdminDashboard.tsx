'use client'

import Link from 'next/link'
import {
  GitPullRequestArrow, Building2, Users, Map,
  ChevronRight, TrendingUp, UserCheck, CalendarClock, ClipboardList,
} from 'lucide-react'

interface Staff {
  id: string
  email: string
  full_name: string
  role: string
}

interface Stats {
  openEstimates:    number
  activePeople:     number
  jobsThisMonth:    number
  pendingFollowUps: number
}

const QUICK_LINKS = [
  { icon: GitPullRequestArrow, label: 'Pipeline',   href: '/admin/pipeline',   desc: 'All active jobs' },
  { icon: Building2,           label: 'Properties', href: '/admin/properties', desc: 'Address records'  },
  { icon: Users,               label: 'People',     href: '/admin/people',     desc: 'Contacts'         },
  { icon: Map,                 label: 'Map',        href: '/admin/map',        desc: 'Prospect & scout' },
]

export default function AdminDashboard({ staff, stats }: { staff: Staff; stats: Stats }) {
  const statCards = [
    { icon: ClipboardList,  label: 'Open Estimates',     value: stats.openEstimates,    href: '/admin/pipeline' },
    { icon: UserCheck,      label: 'People',             value: stats.activePeople,     href: '/admin/people'   },
    { icon: TrendingUp,     label: 'New This Month',     value: stats.jobsThisMonth,    href: '/admin/pipeline' },
    { icon: CalendarClock,  label: 'Pending Follow-ups', value: stats.pendingFollowUps, href: '/admin/pipeline' },
  ]

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Welcome back, {staff.full_name.split(' ')[0]}
        </h1>
        <p className="mt-1 text-sm text-gray-500">Advanced Roofing & Siding</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {statCards.map(({ icon: Icon, label, value, href }) => (
          <Link
            key={label}
            href={href}
            className="group rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-brand-primary/30 hover:bg-brand-primary-light"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">{label}</p>
              <Icon className="h-4 w-4 text-gray-300 group-hover:text-brand-primary" strokeWidth={1.5} />
            </div>
            <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
          </Link>
        ))}
      </div>

      {/* Quick nav */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {QUICK_LINKS.map(({ icon: Icon, label, href, desc }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-brand-primary/30 hover:bg-brand-primary-light"
          >
            <Icon className="h-5 w-5 shrink-0 text-brand-primary" strokeWidth={1.5} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">{label}</p>
              <p className="text-xs text-gray-400">{desc}</p>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />
          </Link>
        ))}
      </div>
    </div>
  )
}
