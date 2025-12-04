# Mobile Optimization Plan

## ✅ Completed: Homepage Sections

All homepage card sections have been optimized for mobile responsiveness:

1. **WhyChooseUs** - Compact 2x2 grid on mobile with smaller icons, text, and padding
2. **ServiceAreas** - Reduced padding, smaller icons, compact city badges on mobile
3. **InsuranceClaimsCTA** - Smaller text, icons, and stats cards on mobile
4. **ReviewsPreview** - Compact rating display, smaller buttons and text on mobile
5. **FAQ** - Reduced padding, smaller icons and text on mobile
6. **Stats** - Already optimized (3x3 grid, compact on mobile)
7. **Services** - Already optimized (2x2 grid on mobile)
8. **Process** - Already optimized (2x2 grid on mobile)
9. **ProjectGallery** - Already optimized (2x2 grid)
10. **ProgramsPreview** - Already optimized (2x2 grid)

## 📱 Pages Requiring Mobile Optimization

### Batch 1: Service Pages (8 pages)
**Priority: High** - These are key conversion pages

- `app/services/page.tsx` - Main services listing
- `app/services/roofing/page.tsx` - Roofing service page
- `app/services/siding/page.tsx` - Siding service page
- `app/services/windows/page.tsx` - Windows service page
- `app/services/storm-restoration/page.tsx` - Storm restoration page
- `app/services/winterization/page.tsx` - Winterization page
- `app/services/free-estimate/page.tsx` - Free estimate page
- `app/services/[service]/form/page.tsx` - Service form page

**Common Issues to Address:**
- Card grids should be 2x2 on mobile
- Reduce padding and spacing on mobile
- Smaller icons and text sizes
- Compact button sizes
- Responsive image sizing

### Batch 2: Who We Serve Pages (8 pages)
**Priority: Medium** - Important for targeting different markets

- `app/who-we-serve/page.tsx` - Main who we serve page
- `app/who-we-serve/residential/page.tsx` - Residential page
- `app/who-we-serve/commercial/page.tsx` - Commercial page
- `app/who-we-serve/municipal/page.tsx` - Municipal page
- `app/who-we-serve/professionals/page.tsx` - Professionals page
- `app/who-we-serve/property-manager/page.tsx` - Property manager page
- `app/who-we-serve/hoa/page.tsx` - HOA page
- `app/who-we-serve/agent/page.tsx` - Agent page

**Common Issues to Address:**
- Card layouts need mobile optimization
- Text sizing and spacing
- Button responsiveness
- Image optimization

### Batch 3: Resources Pages (17 pages)
**Priority: Medium** - Informational content pages

**Insurance Claims Subpages (8 pages):**
- `app/resources/insurance-claims/page.tsx` - Main insurance claims page
- `app/resources/insurance-claims/hail-damage/page.tsx`
- `app/resources/insurance-claims/hail-damage-claims/page.tsx`
- `app/resources/insurance-claims/wind-damage/page.tsx`
- `app/resources/insurance-claims/wind-damage-claims/page.tsx`
- `app/resources/insurance-claims/ice-dam-snow-damage-claims/page.tsx`
- `app/resources/insurance-claims/tree-damage/page.tsx`
- `app/resources/insurance-claims/old-roof/page.tsx`

**Other Resources Pages (9 pages):**
- `app/resources/page.tsx` - Main resources page
- `app/resources/programs/page.tsx`
- `app/resources/reviews/page.tsx`
- `app/resources/warranties/page.tsx`
- `app/resources/gaf-master-elite-contractor/page.tsx`
- `app/resources/project-gallery/page.tsx`
- `app/resources/videos/page.tsx`
- `app/resources/days-onsite/page.tsx`
- `app/resources/24-7-support/page.tsx`

**Common Issues to Address:**
- Long-form content needs better mobile typography
- Card layouts and grids
- Image galleries
- Form layouts

### Batch 4: Other Key Pages
**Priority: Low** - Still important but less critical

- `app/about/page.tsx` - About page
- `app/contact/page.tsx` - Contact page
- `app/service-areas/page.tsx` - Service areas main page
- `app/service-areas/[state]/[city]/page.tsx` - City-specific pages

## 🎯 Mobile Optimization Checklist

For each page, ensure:

- [ ] **Grid Layouts**: Use 2x2 or single column on mobile
- [ ] **Padding**: Reduce padding on mobile (p-3 to p-4 instead of p-6)
- [ ] **Icons**: Smaller icons on mobile (h-8 w-8 instead of h-12 w-12)
- [ ] **Text Sizes**: Smaller text on mobile (text-sm instead of text-base)
- [ ] **Buttons**: Full-width on mobile, auto-width on desktop
- [ ] **Spacing**: Tighter gaps on mobile (gap-2 to gap-3 instead of gap-6)
- [ ] **Images**: Proper aspect ratios and responsive sizing
- [ ] **Cards**: Compact padding and spacing on mobile
- [ ] **Typography**: Readable line heights and spacing

## 📊 Implementation Priority

1. **Batch 1 (Service Pages)** - Start here, highest conversion impact
2. **Batch 2 (Who We Serve)** - Important for market targeting
3. **Batch 3 (Resources)** - Informational, can be done in phases
4. **Batch 4 (Other Pages)** - Lower priority but still valuable

## 🔧 Common Patterns to Apply

### Card Grids
```tsx
// Mobile: 2x2, Desktop: varies
<div className="grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-3 lg:grid-cols-4">
```

### Compact Cards
```tsx
<Card className="p-3 md:p-6" variant="elevated">
  <div className="mb-2 flex h-8 w-8 items-center justify-center md:mb-4 md:h-12 md:w-12">
    <Icon className="h-4 w-4 md:h-6 md:w-6" />
  </div>
  <h3 className="text-sm font-bold md:text-lg">Title</h3>
  <p className="text-xs md:text-base">Description</p>
</Card>
```

### Responsive Buttons
```tsx
<Button variant="primary" size="md" className="w-full sm:w-auto">
  Action
</Button>
```


