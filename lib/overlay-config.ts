/**
 * Enterprise-grade overlay configuration
 * 
 * Determines which pages should show the loading overlay on first visit.
 * Uses a combination of route matching, component detection, and business logic.
 */

export type OverlayStrategy = 
  | 'always'           // Always show on first visit
  | 'never'            // Never show
  | 'auto'             // Auto-detect based on heavy assets
  | 'conversion-only'  // Only on high-value conversion pages

export interface OverlayPageConfig {
  /** Route pattern (supports wildcards like /services/*) */
  route: string | RegExp
  /** Strategy for this route */
  strategy: OverlayStrategy
  /** Reason for this configuration (documentation) */
  reason?: string
  /** Minimum asset size threshold in KB (for auto strategy) */
  assetThreshold?: number
}

/**
 * Page-specific overlay configuration
 * 
 * Priority order:
 * 1. Exact route matches
 * 2. Pattern matches (wildcards)
 * 3. Default strategy
 */
export const OVERLAY_CONFIG: OverlayPageConfig[] = [
  // Homepage - Always show (primary entry point with video)
  {
    route: '/',
    strategy: 'always',
    reason: 'Primary entry point with heavy video asset in Hero section',
  },

  // Key conversion pages - Always show
  {
    route: '/contact',
    strategy: 'always',
    reason: 'High-value conversion page - first impression critical',
  },
  {
    route: '/insurance-claims',
    strategy: 'always',
    reason: 'High-value conversion page - premium service entry point',
  },

  // Service pages - Always show (conversion-focused)
  {
    route: /^\/services\/(roofing|siding|windows|storm-restoration|winterization)$/,
    strategy: 'always',
    reason: 'Service detail pages - conversion-focused with rich content',
  },
  {
    route: '/services',
    strategy: 'always',
    reason: 'Services overview - key conversion funnel page',
  },

  // Pages with heavy media - Auto-detect
  {
    route: '/resources/videos',
    strategy: 'auto',
    reason: 'Contains YouTube embeds and video content',
    assetThreshold: 500, // KB
  },
  {
    route: '/about',
    strategy: 'auto',
    reason: 'May contain image galleries and rich media',
    assetThreshold: 300, // KB
  },

  // Service area city pages - Conversion-focused but lighter
  {
    route: /^\/service-areas\/[^/]+\/[^/]+$/,
    strategy: 'conversion-only',
    reason: 'Location-specific landing pages - conversion-focused but typically lighter assets',
  },

  // Form pages - Always show (conversion-critical)
  {
    route: /^\/services\/[^/]+\/form$/,
    strategy: 'always',
    reason: 'Lead generation forms - critical conversion point',
  },

  // Resource pages - Auto-detect (lighter content typically)
  {
    route: /^\/resources/,
    strategy: 'auto',
    reason: 'Resource pages - variable content weight',
    assetThreshold: 400, // KB
  },

  // Who We Serve pages - Auto-detect
  {
    route: /^\/who-we-serve/,
    strategy: 'auto',
    reason: 'Who We Serve pages - informational, variable asset weight',
    assetThreshold: 300, // KB
  },
]

/**
 * Default strategy for unmatched routes
 */
export const DEFAULT_STRATEGY: OverlayStrategy = 'never'

/**
 * Check if a route should show the overlay
 */
export function shouldShowOverlay(
  pathname: string,
  hasHeavyAssets: boolean = false,
  assetSizeKB: number = 0
): boolean {
  // Find matching config (exact match first, then pattern)
  const config = findMatchingConfig(pathname)
  
  if (!config) {
    return DEFAULT_STRATEGY === 'always'
  }

  switch (config.strategy) {
    case 'always':
      return true
    
    case 'never':
      return false
    
    case 'auto':
      // Auto-detect based on heavy assets
      const threshold = config.assetThreshold || 500
      return hasHeavyAssets && assetSizeKB >= threshold
    
    case 'conversion-only':
      // Only show if page has heavy assets (conversion pages but respect performance)
      return hasHeavyAssets && assetSizeKB >= 200
    
    default:
      return false
  }
}

/**
 * Find matching configuration for a route
 */
function findMatchingConfig(pathname: string): OverlayPageConfig | null {
  // First, try exact matches
  const exactMatch = OVERLAY_CONFIG.find(
    config => typeof config.route === 'string' && config.route === pathname
  )
  if (exactMatch) return exactMatch

  // Then, try pattern matches
  const patternMatch = OVERLAY_CONFIG.find(config => {
    if (typeof config.route === 'string') {
      // Convert wildcard pattern to regex
      const pattern = config.route
        .replace(/\*/g, '[^/]*')
        .replace(/\$/, '')
      const regex = new RegExp(`^${pattern}$`)
      return regex.test(pathname)
    } else if (config.route instanceof RegExp) {
      return config.route.test(pathname)
    }
    return false
  })

  return patternMatch || null
}

/**
 * Get configuration for a specific route (for debugging/admin)
 */
export function getOverlayConfig(pathname: string): {
  config: OverlayPageConfig | null
  shouldShow: boolean
  reason: string
} {
  const config = findMatchingConfig(pathname)
  const shouldShow = shouldShowOverlay(pathname, false, 0)
  
  return {
    config,
    shouldShow,
    reason: config?.reason || `Using default strategy: ${DEFAULT_STRATEGY}`,
  }
}

/**
 * Routes that should NEVER show overlay (even if matched)
 */
export const OVERLAY_BLACKLIST: string[] = [
  '/privacy-policy',
  '/terms-of-service',
  // Add any other pages that should never show overlay
]

/**
 * Check if route is blacklisted
 */
export function isBlacklisted(pathname: string): boolean {
  return OVERLAY_BLACKLIST.includes(pathname)
}

