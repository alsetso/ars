import Link from 'next/link'

const DAMAGE_TYPES = [
  { label: 'Hail Damage', href: '/resources/insurance-claims/hail-damage', icon: '🌨️' },
  { label: 'Wind Damage', href: '/resources/insurance-claims/wind-damage', icon: '💨' },
  { label: 'Ice Dam & Snow', href: '/resources/insurance-claims/ice-dam-snow-damage-claims', icon: '❄️' },
  { label: 'Tree Damage', href: '/resources/insurance-claims/tree-damage', icon: '🌳' },
  { label: 'Old Roof', href: '/resources/insurance-claims/old-roof', icon: '🏠' },
]

interface ClaimSubNavProps {
  /** Pass the current page href to highlight the active item */
  current?: string
}

/**
 * Sub-navigation bar for the /resources/insurance-claims/* pages.
 * Provides internal linking between all damage-type guides.
 */
export function ClaimSubNav({ current }: ClaimSubNavProps) {
  return (
    <nav
      aria-label="Damage type guides"
      className="border-b border-gray-100 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
          <Link
            href="/resources/insurance-claims"
            className="mr-2 shrink-0 text-xs font-semibold text-gray-400 hover:text-gray-700 transition-colors"
          >
            ← All Claims
          </Link>
          <div className="mr-2 h-4 w-px bg-gray-200 shrink-0" />
          {DAMAGE_TYPES.map((item) => {
            const isActive = current === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-brand-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
