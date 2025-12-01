# Compact & Flat Design System Guide

This guide outlines the compact, flat design system that has been implemented across the site. Use this as a reference when creating or updating pages to ensure consistency.

## 🎯 Design Principles

1. **Compact Spacing**: Reduced padding and margins throughout for a tighter, more efficient layout
2. **Flat Aesthetics**: Subtle shadows and minimal 3D effects while maintaining visual hierarchy
3. **Inline Alignment**: Elements are more aligned and inline, reducing vertical space
4. **Refined Shadows**: Softer, more subtle shadows that still provide depth

## 📐 Spacing System

### Section Padding
- **Before**: `py-20 md:py-28 lg:py-32` (80px / 112px / 128px)
- **After**: `py-12 md:py-16 lg:py-20` (48px / 64px / 80px)
- **Reduction**: ~40% less vertical space

### Section Headers
- **Margin Bottom**: `mb-16` → `mb-10`
- **Title Sizes**: `text-4xl/5xl/6xl` → `text-3xl/4xl/5xl`
- **Description Sizes**: `text-xl/2xl` → `text-lg/xl`

### Grid Gaps
- **Large Grids**: `gap-8` → `gap-3 md:gap-4`
- **Medium Grids**: `gap-6` → `gap-3 md:gap-4`
- **Small Grids**: `gap-4` → `gap-2 md:gap-3`

## 🎴 Card Component

### Padding
- **Before**: `p-6 md:p-8`
- **After**: `p-5 md:p-6`

### Border Radius
- **Before**: `rounded-2xl` (1rem)
- **After**: `rounded-xl` (0.75rem)

### Hover Effects
- **Lift**: `y: -6` → `y: -2`
- **Scale**: Removed (was `scale: 1.01`)
- **Transition**: `300ms` → `200ms`

### Shadow Variants
```css
/* Soft - Subtle elevation */
shadow-soft: '0 1px 8px -2px rgba(0, 0, 0, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.03)'

/* Medium - Card elevation */
shadow-medium: '0 2px 12px -3px rgba(0, 0, 0, 0.08), 0 6px 16px -3px rgba(0, 0, 0, 0.04)'

/* Large - Prominent elements */
shadow-large: '0 8px 24px -4px rgba(0, 0, 0, 0.12)'
```

## 🎨 Icon & Badge Sizes

### Icon Containers
- **Large**: `h-16 w-16` → `h-12 w-12 md:h-14 md:w-14`
- **Medium**: `h-14 w-14` → `h-10 w-10 md:h-12 md:w-12`
- **Small**: `h-12 w-12` → `h-8 w-8 md:h-10 md:w-10`

### Border Radius
- **Icons**: `rounded-2xl` → `rounded-xl`
- **Badges**: `rounded-full` (unchanged for pills)

### Icon Sizes
- **Large Icons**: `h-8 w-8` → `h-6 w-6 md:h-7 md:w-7`
- **Medium Icons**: `h-6 w-6` → `h-5 w-5 md:h-6 md:w-6`
- **Small Icons**: `h-4 w-4` (unchanged)

## 📝 Typography

### Headings
- **H1**: `text-4xl/5xl/6xl` → `text-3xl/4xl/5xl`
- **H2**: `text-3xl/4xl` → `text-2xl/3xl md:text-3xl`
- **H3**: `text-2xl/3xl` → `text-xl md:text-2xl`
- **H4**: `text-xl` → `text-lg md:text-xl`

### Body Text
- **Large**: `text-lg` → `text-base md:text-lg`
- **Base**: `text-base` → `text-sm md:text-base`
- **Small**: `text-sm` → `text-xs md:text-sm`

### Line Heights
- Maintain `leading-relaxed` for body text
- Use `leading-tight` for headings

## 🎬 Animation Updates

### Initial Values
- **Y Offset**: `y: 30` → `y: 15` or `y: 20`
- **Duration**: `0.6s` → `0.4s` or `0.5s`
- **Delay**: Reduce by ~50% (e.g., `0.1s` → `0.05s`)

### Button Hover
- **Scale**: `1.01` → `1.005`
- **Tap Scale**: `0.99` → `0.995`

## 📄 Page-Specific Components

### PageHero Component
- **Padding**: `py-16 lg:py-24` → `py-12 lg:py-16`
- **Title**: `text-4xl/5xl/6xl` → `text-3xl/4xl/5xl`
- **Description**: `text-lg/xl/2xl` → `text-base/lg/xl`
- **Margins**: `mb-8` → `mb-6`, `mb-4` → `mb-3`

### Section Component
- Uses updated `section-padding` utility
- Container padding unchanged: `px-4 sm:px-6 lg:px-8`

## ✅ Updated Components

### Core UI Components
- ✅ `Card.tsx` - Reduced padding, border radius, hover effects
- ✅ `Section.tsx` - Updated section header spacing and sizes
- ✅ `PageHero.tsx` - Compact padding and typography
- ✅ `Button.tsx` - Subtle hover effects

### Section Components
- ✅ `Hero.tsx` - Compact spacing and badges
- ✅ `Services.tsx` - Reduced gaps and image sizes
- ✅ `WhyChooseUs.tsx` - Smaller icons and spacing
- ✅ `ServiceAreas.tsx` - Compact layout and city pills
- ✅ `InsuranceClaimsCTA.tsx` - Tighter grid and spacing
- ✅ `Contact.tsx` - Reduced card sizes and gaps

### Page Components
- ✅ `app/page.tsx` (Home) - All sections updated
- ✅ `app/services/page.tsx` - Compact grid and cards
- ✅ `app/contact/page.tsx` - Reduced spacing throughout

## 🔄 Pages That Need Review

These pages use shared components but may have page-specific spacing that should be reviewed:

1. **Service Pages** (`/services/roofing`, `/services/siding`, etc.)
   - Check for custom spacing in prose content
   - Review card layouts and gaps

2. **About Page** (`/about`)
   - Review section spacing
   - Check feature card layouts

3. **Service Area Pages** (`/service-areas/[state]/[city]`)
   - Review form spacing
   - Check content card layouts

4. **Resource Pages** (`/gaf-master-elite-contractor`, `/24-7-support`, etc.)
   - Review section spacing
   - Check card padding and gaps

5. **Other Pages**
   - `/warranties`
   - `/insurance-claims`
   - `/cities-program`
   - `/privacy-policy`
   - `/terms-of-service`

## 📋 Checklist for New/Updated Pages

When creating or updating a page, ensure:

- [ ] Section padding uses `section-padding` utility (or `py-12 md:py-16 lg:py-20`)
- [ ] Section headers use `mb-10` margin
- [ ] Card padding is `p-5 md:p-6`
- [ ] Card border radius is `rounded-xl`
- [ ] Grid gaps are `gap-3 md:gap-4` or smaller
- [ ] Icon containers are `h-12 w-12 md:h-14 md:w-14` or smaller
- [ ] Icon border radius is `rounded-xl`
- [ ] Typography sizes follow the updated scale
- [ ] Animation durations are `0.4s` or `0.5s`
- [ ] Animation delays are reduced (~50% of original)
- [ ] Hover effects are subtle (`y: -2` max)

## 🎨 Design Tokens Reference

### Spacing Scale
```css
/* Section Padding */
.section-padding {
  padding-top: 3rem;      /* 48px */
  padding-bottom: 3rem;   /* 48px */
}

@media (min-width: 768px) {
  .section-padding {
    padding-top: 4rem;    /* 64px */
    padding-bottom: 4rem; /* 64px */
  }
}

@media (min-width: 1024px) {
  .section-padding {
    padding-top: 5rem;    /* 80px */
    padding-bottom: 5rem; /* 80px */
  }
}
```

### Shadow System
- **Soft**: Subtle elevation for default cards
- **Medium**: Standard elevation for elevated cards
- **Large**: Prominent elevation for CTAs and highlights

### Border Radius Scale
- **xl**: `0.75rem` (12px) - Cards, icon containers
- **2xl**: `1rem` (16px) - Large cards (rarely used)
- **full**: Pills, badges, circular elements

## 💡 Best Practices

1. **Consistency First**: Always use shared components when possible
2. **Mobile-First**: Design for mobile, then enhance for larger screens
3. **Subtle Animations**: Keep animations fast and subtle
4. **Visual Hierarchy**: Use spacing and shadows to create hierarchy, not size
5. **Content Density**: Balance compactness with readability

## 🔍 Quick Reference

### Common Patterns

**Card Grid:**
```tsx
<div className="grid gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-4">
  <Card>...</Card>
</div>
```

**Icon Container:**
```tsx
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 md:h-14 md:w-14">
  <Icon className="h-6 w-6 text-brand-primary md:h-7 md:w-7" />
</div>
```

**Section Header:**
```tsx
<SectionHeader
  title="Title"
  description="Description"
/>
```

**Animated Entry:**
```tsx
<AnimatedDiv
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
>
  ...
</AnimatedDiv>
```

---

**Last Updated**: Design system implemented across core components and homepage. Review individual pages for consistency.

