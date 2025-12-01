# Insurance Claims CTA Component

## Overview

A reusable, compact component that promotes insurance claims services. Perfect for homepage, city pages, and service pages.

## Component Location

`/components/sections/InsuranceClaimsCTA.tsx`

## Usage

### Basic Usage (Default Variant)

```tsx
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'

<InsuranceClaimsCTA />
```

### Compact Variant (For City Pages)

```tsx
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'

<InsuranceClaimsCTA variant="compact" />
```

### Without Title

```tsx
<InsuranceClaimsCTA showTitle={false} />
```

## Variants

### 1. **Default Variant** (`variant="default"`)
**Best for**: Homepage, main service pages

**Features**:
- Full section with background
- Two-column layout
- Benefits list
- Stats/highlights (48-hour guarantee, 100% adjuster attendance, 30+ years)
- Two CTAs (Learn More, Get Free Inspection)

**Layout**:
- Left: Content + Benefits + CTAs
- Right: Stats cards

### 2. **Compact Variant** (`variant="compact"`)
**Best for**: City pages, sidebar, smaller sections

**Features**:
- Single-row card layout
- Condensed messaging
- Quick benefits summary
- Two CTAs (Learn More, Phone)

**Layout**:
- Horizontal flex layout
- Icon + Title + Description
- Two buttons side-by-side

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'compact'` | `'default'` | Component size/style variant |
| `showTitle` | `boolean` | `true` | Show/hide the main title |

## Where It's Currently Used

### ✅ Homepage (`/app/page.tsx`)
- **Variant**: Default
- **Position**: After "Why Choose Us", before "Service Areas"
- **Purpose**: Promote insurance claims services to all visitors

### ✅ City Service Area Pages (`/app/service-areas/[state]/[city]/page.tsx`)
- **Variant**: Compact
- **Position**: Before "Get Started Today" section
- **Purpose**: Remind city-specific visitors about insurance claim support

## Benefits Highlighted

1. Free storm damage inspection
2. Adjuster meeting representation
3. 48-hour inspection guarantee
4. Full claim support & documentation

## CTAs Included

### Default Variant:
- "Learn About Our Process" → Links to `/insurance-claims`
- "Get Free Inspection" → Links to `/contact`

### Compact Variant:
- "Learn More" → Links to `/insurance-claims`
- Phone button → Calls company phone number

## Design Features

- **Gradient Backgrounds**: Blue gradient for insurance theme
- **Icons**: Shield icon for trust/security
- **Stats Cards**: Visual highlights (48-hour, 100%, 30+)
- **Responsive**: Adapts to mobile/tablet/desktop
- **Animations**: Smooth fade-in on scroll

## Adding to Other Pages

### Example: Service Pages

```tsx
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'

export default function RoofingPage() {
  return (
    <PageLayout>
      <PageHero ... />
      <Section>
        {/* Service content */}
      </Section>
      <InsuranceClaimsCTA variant="compact" />
      {/* More content */}
    </PageLayout>
  )
}
```

### Example: About Page

```tsx
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'

export default function AboutPage() {
  return (
    <PageLayout>
      {/* About content */}
      <InsuranceClaimsCTA />
      {/* More content */}
    </PageLayout>
  )
}
```

## Customization

The component uses:
- Brand colors (`brand-primary`)
- Company phone from `COMPANY_INFO`
- Consistent styling with rest of site
- Reusable UI components (Card, Button, AnimatedDiv)

## SEO Benefits

- Internal linking to `/insurance-claims` page
- Keyword-rich content (storm damage, insurance claims)
- User engagement (keeps users on site)
- Conversion optimization (clear CTAs)

---

**Component is ready to use on any page!** 🚀

