# Page Templates Overview

All pages now follow a consistent template structure with:
- **Header** (Navigation with logo and menu)
- **Hero Section** (Page-specific hero with title, description, and optional CTA)
- **Content Sections** (Page-specific content)
- **Footer** (Navigation links, contact info, legal links)

## ✅ Pages Updated with Hero Sections

### 1. **Home Page** (`/`)
- **Hero**: Full hero with badges and dual CTAs
- **Sections**: Services, Why Choose Us, Service Areas, Contact

### 2. **About Us** (`/about`)
- **Hero**: "About Advanced Roofing & Siding Inc."
- **Description**: "Three decades of excellence serving Minnesota and Wisconsin"
- **Background**: Roofing image
- **Content**: Company story + Why Choose Us cards

### 3. **Services Overview** (`/services`)
- **Hero**: "Our Services"
- **Description**: "Comprehensive exterior solutions backed by decades of expertise"
- **Background**: Siding/home exterior image
- **Content**: Grid of 4 service cards with links

### 4. **Premium Roofing** (`/services/roofing`)
- **Hero**: "Premium Roofing Services"
- **Description**: "GAF Master Elite certified installations with industry-leading warranties"
- **Background**: Roofing image
- **Content**: Service details + features list

### 5. **Siding Solutions** (`/services/siding`)
- **Hero**: "Siding Solutions"
- **Description**: "Transform your exterior with durable, weather-resistant siding systems"
- **Background**: Siding/home exterior image
- **Content**: Service details + features list

### 6. **Window Installation** (`/services/windows`)
- **Hero**: "Window Installation"
- **Description**: "Energy-efficient windows that reduce costs and enhance comfort"
- **Background**: Window/home image
- **Content**: Service details + features list

### 7. **Storm Restoration** (`/services/storm-restoration`)
- **Hero**: "Storm Restoration"
- **Description**: "Expert damage assessment and seamless insurance claim support"
- **Background**: Storm damage image
- **Content**: Service details + features list

### 8. **Service Areas** (`/service-areas`)
- **Hero**: "Service Areas"
- **Description**: "Proudly serving Minnesota and Wisconsin communities"
- **Background**: Map/location image
- **Content**: City listings for MN & WI

### 9. **Contact** (`/contact`)
- **Hero**: "Get Started Today"
- **Description**: "Schedule your free estimate with a Minnesota exterior specialist"
- **Background**: Roofing image
- **CTA**: Hidden (form is below)
- **Content**: Contact info + contact form

## 🎨 PageHero Component Features

The `PageHero` component is a reusable hero section with:

- **Customizable Title**: Large, bold heading
- **Optional Description**: Subtitle text
- **Background Image**: Optional background with overlay
- **CTA Button**: Optional call-to-action (defaults to "Get Free Estimate")
- **Custom CTA Text**: Customizable button text
- **Custom CTA Link**: Customizable button destination
- **Children Support**: Additional content can be passed
- **Animations**: Smooth fade-in animations with Framer Motion

## 📐 Template Structure

```tsx
import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
// ... other imports

export default function PageName() {
  return (
    <PageLayout>
      <PageHero
        title="Page Title"
        description="Page description"
        backgroundImage="optional-image-url"
        showCTA={true} // optional, defaults to true
        ctaText="Custom CTA" // optional
        ctaHref="/contact" // optional
      />
      <Section className="bg-white">
        {/* Page content here */}
      </Section>
    </PageLayout>
  )
}
```

## 🎯 Benefits

1. **Consistency**: All pages have the same header/footer structure
2. **Visual Hierarchy**: Hero sections create clear page introductions
3. **SEO**: Hero sections improve on-page SEO with prominent headings
4. **User Experience**: Clear navigation and consistent layout
5. **Maintainability**: Single source of truth for header/footer
6. **Flexibility**: PageHero component is highly customizable

## 🚀 Next Steps

All pages are now production-ready with:
- ✅ Consistent header navigation
- ✅ Professional hero sections
- ✅ Comprehensive footer navigation
- ✅ Responsive design
- ✅ Smooth animations
- ✅ SEO optimization

---

**All pages follow the template structure!** 🎉


