# Service Area Location Pages

## Overview

SEO-driven service area pages have been created for all 50 cities (44 Minnesota + 6 Wisconsin) that Advanced Roofing & Siding Inc. serves.

## URL Structure

Each city has its own dedicated page at:
```
/service-areas/[state]/[city]
```

### Examples:
- `/service-areas/mn/minneapolis` - Minneapolis, MN
- `/service-areas/mn/st-paul` - St. Paul, MN
- `/service-areas/wi/hudson` - Hudson, WI
- `/service-areas/mn/anoka` - Anoka, MN

## Page Components

Each location page includes:

### 1. **Location-Specific Hero**
- Title: "Roofing & Siding in [City], [State]"
- Description mentioning the city
- Background image
- CTA button

### 2. **Inline Contact Form**
- Prominent form above the fold
- Fields: Name, Email, Phone, Service, Message
- Hidden fields for city and state
- Contact information sidebar
- Why Choose Us quick facts

### 3. **About Us Section**
- Location-specific content
- Mentions serving the city since 1994
- Weather-specific messaging
- Company credentials

### 4. **Services Section**
- All 4 services displayed
- Service cards with icons
- Links to individual service pages
- Location context

### 5. **Get Started Today Section**
- Location-specific CTA
- Phone number button
- Free estimate button
- Gradient background

## SEO Features

### Metadata
- **Title**: "Roofing & Siding in [City], [State] | Advanced Roofing & Siding Inc."
- **Description**: Location-specific with city and state mentioned
- **Keywords**: City-specific keywords including:
  - `roofing [city]`
  - `siding [city]`
  - `[city] roofing contractor`
  - `[city] [state] roofing`
  - `exterior services [city]`

### OpenGraph Tags
- Location-specific titles and descriptions
- Proper social media sharing

### Static Generation
- All pages are statically generated at build time
- Fast page loads
- Better SEO indexing

## City Coverage

### Minnesota (44 cities)
- Albertville, Andover, Anoka, Apple Valley, Arden Hills
- Becker, Bethel, Big Lake, Blaine, Bloomington
- Brainerd, Brooklyn Center, Brooklyn Park, Buffalo, Burnsville
- Cambridge, Champlin, Chanhassen, Chaska, Circle Pines
- Cloquet, Coon Rapids, Crystal, Dayton, Eagan
- Eden Prairie, Edina, Elk River, Forest Lake, Fridley
- Golden Valley, Ham Lake, Hopkins, Lakeville, Maple Grove
- Minneapolis, Minnetonka, Plymouth, Ramsey, Rochester
- Rogers, St. Cloud, St. Paul, Woodbury

### Wisconsin (6 cities)
- Hudson, River Falls, Somerset, New Richmond, Prescott, St Croix Falls

## Technical Implementation

### Files Created
1. `/app/service-areas/[state]/[city]/page.tsx` - Dynamic route page
2. `/lib/city-utils.ts` - City data utilities

### Key Features
- **Dynamic Routing**: Next.js App Router dynamic segments
- **Static Generation**: `generateStaticParams()` creates all pages at build
- **Type Safety**: Full TypeScript support
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth Framer Motion animations
- **Form Ready**: Contact form structure (ready for backend integration)

## URL Examples

All cities follow this pattern:
- Multi-word cities use hyphens: `apple-valley`, `st-paul`, `brooklyn-center`
- Single-word cities: `anoka`, `blaine`, `hudson`
- State abbreviations: `mn` for Minnesota, `wi` for Wisconsin

## Content Customization

Each page dynamically includes:
- City name in hero title
- City name in all sections
- State abbreviation and full name
- Location-specific messaging
- City-specific form placeholders

## Next Steps

1. **Form Integration**: Connect form to email service or CRM
2. **Analytics**: Track page views per city
3. **Local Content**: Add city-specific testimonials or projects
4. **Schema Markup**: Add LocalBusiness schema with location data
5. **Internal Linking**: Link from main service areas page to city pages

## Benefits

✅ **SEO Optimization**: Each city has dedicated page with location-specific keywords
✅ **User Experience**: Location-specific content and CTAs
✅ **Conversion**: Prominent contact form on every page
✅ **Scalability**: Easy to add new cities
✅ **Performance**: Static generation for fast loads
✅ **Maintainability**: Single template for all cities

---

**Total Pages Created**: 50 location-specific service area pages 🎉


