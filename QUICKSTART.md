# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Open Browser

Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Production build
npm run build

# Start production server
npm start
```

## 🎯 What's Included

✅ Fully responsive design  
✅ Smooth Framer Motion animations  
✅ Type-safe TypeScript codebase  
✅ Production-ready Next.js 14 setup  
✅ Tailwind CSS with custom design tokens  
✅ SEO optimized with metadata  
✅ All sections from original site  

## 📂 Key Files

- `app/page.tsx` - Main homepage
- `components/sections/*` - All page sections
- `components/ui/*` - Reusable UI components
- `lib/constants.ts` - Company info and data
- `tailwind.config.ts` - Design system configuration

## 🎨 Customization

### Update Company Info
Edit `/lib/constants.ts` to change:
- Company name, phone, email
- Services list
- Features/credentials
- Service area cities

### Modify Colors
Edit `/tailwind.config.ts` to update brand colors:
```typescript
colors: {
  brand: {
    primary: '#E63946',    // Main red color
    secondary: '#1D3557',  // Navy blue
    accent: '#F1FAEE',     // Light accent
    dark: '#14213D',       // Dark navy
  },
}
```

### Add/Remove Sections
Edit `/app/page.tsx` to reorder or remove sections.

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build for Production
```bash
npm run build
npm start
```

## 💡 Tips

- The site uses Unsplash images by default - replace with actual company photos
- All animations are optimized with Framer Motion's viewport detection
- Mobile menu can be added by extending the Header component
- Forms can be integrated with any backend or service (EmailJS, Formspree, etc.)

## 📞 Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Built with production-ready best practices** 🚀


