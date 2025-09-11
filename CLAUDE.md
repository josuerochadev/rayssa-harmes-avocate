# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev              # Start development server on localhost:3000
npm run build           # Build production bundle
npm run start           # Start production server
npm run lint            # Run ESLint
npm run type-check      # Run TypeScript type checking
```

## Project Architecture

This is a professional law firm website built with **Next.js 14 App Router**, Tailwind CSS, and TypeScript. The site targets local SEO for Strasbourg, France with multilingual support and GDPR compliance.

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom color palette (sienna/green theme)
- **Languages**: TypeScript, French content
- **Icons**: Lucide React
- **Third-party**: Calendly (appointments), Formspree (contact forms), Plausible (analytics)

### Architecture Overview

**App Router Structure (`/app`)**:
- Pages follow French naming (e.g., `témoignages/`, `a-propos/`)
- Nested routes for legal domains: `domaines/famille/`, `domaines/contrats/`
- Automatic metadata generation and SEO optimization
- Structured data (JSON-LD) for legal services

**Components (`/components`)**:
- `layout/` - Header/Footer with responsive navigation
- `ui/` - Reusable UI components (DomainCard, TestimonialCard, etc.)
- `sections/` - Page-specific sections (Hero, etc.)

### Key Features
- **SEO**: Local optimization for "avocat Strasbourg" with structured data
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Next.js Image optimization, lazy loading
- **GDPR**: Privacy policy, consent forms, cookie-free analytics

## Custom Color Palette

The design uses a warm sienna and green professional theme:

```css
primary: '#882D17'        /* Dark sienna */
secondary: '#F5F1EC'      /* Light cream */
accent: '#E35336'         /* Orange accent */
green.primary: '#2F5233'  /* Dark forest green */
green.light: '#98A869'    /* Light olive */
green.mint: '#ADEBB3'     /* Mint green */
cream: '#FDFBD4'          /* Light cream */
```

## Content Management

**Placeholders to Replace**:
- Search for `[PLACEHOLDER]` tags throughout the codebase
- Key items: lawyer name, contact info, SIRET number, address
- Professional photo and assets in `/public`

**Legal Content**:
- All text is professionally written for French legal practice
- Testimonials and case studies included but need personalization  
- GDPR-compliant privacy policy and legal notices included

## Environment Variables

Required for deployment (see `.env.example`):
```
NEXT_PUBLIC_SITE_URL          # Production URL
NEXT_PUBLIC_LAWYER_NAME       # Lawyer's name
NEXT_PUBLIC_PHONE/EMAIL       # Contact information
NEXT_PUBLIC_CALENDLY_URL      # Appointment booking
FORMSPREE_ENDPOINT           # Contact form handler
NEXT_PUBLIC_PLAUSIBLE_DOMAIN # Analytics domain
```

## Typography & Fonts

- **Headings**: Roboto Slab (serif) - loaded via Google Fonts  
- **Body text**: Inter (sans-serif) - loaded via Google Fonts
- **Base font size**: 16px minimum for accessibility

## Key Behavioral Notes

- Uses `@/` path mapping for imports (configured in `tsconfig.json`)
- French language content throughout (URLs, navigation, content)
- Professional tone appropriate for legal services
- No promises of legal outcomes (deontologically compliant)
- Mobile-first responsive design
- Image optimization via Next.js `Image` component