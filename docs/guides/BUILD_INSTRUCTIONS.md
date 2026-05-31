# 🚀 HANU NAILS — AUTO BUILD INSTRUCTIONS

> This file is the master guide to start, develop, and deploy HANU Nails website automatically.

---

## 📦 QUICK START (5 minutes)

### 1. Install Dependencies

```bash
cd c:\Users\Admin\Downloads\Hanu_Nails\web
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Server will start at: **http://localhost:3000**

### 3. Open in Browser

Visit: http://localhost:3000

You should see the HANU Nails home page with:

- ✅ Hero section (3D hand placeholder)
- ✅ Featured Collections
- ✅ Hall of Art / Gallery preview
- ✅ Services section
- ✅ Pricing preview
- ✅ Academy preview
- ✅ Booking CTA
- ✅ Footer

---

## 🎯 DEVELOPMENT WORKFLOW

### File Structure Ready ✅

```
✅ components/ui/       — Reusable UI components (Button, Container, Card, etc.)
✅ components/layout/   — Header, Footer, MobileMenu
✅ components/home/     — All 8 home page sections
✅ data/                — Collections, Gallery, Services, Pricing, Courses, Testimonials
✅ lib/                 — Utilities, design tokens, types
✅ public/              — Assets, 3D models, images
```

### Component Status

| Component             | Status         | Notes                                     |
| --------------------- | -------------- | ----------------------------------------- |
| Header                | ✅ Done        | Navigation + sticky positioning           |
| Footer                | ✅ Done        | 4-column layout, responsive               |
| Hero (3D)             | 🔄 In Progress | Needs 3D model (.glb)                     |
| Featured Collections  | ✅ Done        | Horizontal scroll desktop, stacked mobile |
| Hall of Art / Gallery | ✅ Done        | Masonry grid with filter                  |
| Services              | ✅ Done        | 4-column grid (responsive)                |
| Pricing               | ✅ Done        | 3-category pricing table                  |
| Academy               | ✅ Done        | Course preview cards                      |
| Testimonials          | ✅ Done        | Carousel with auto-play                   |
| Booking CTA           | ✅ Done        | Form component                            |

---

## 🔧 NEXT STEPS (In Priority Order)

### Phase 1: Setup & Testing (Today)

- [x] Install dependencies
- [x] Verify project structure
- [x] Start dev server
- [ ] **Test all pages load correctly**
- [ ] **Check responsive design (mobile, tablet, desktop)**

**Action:**

```bash
npm run dev
# Open http://localhost:3000
# Check home page, collections, gallery, pricing pages
```

---

### Phase 2: 3D Hand Model Integration (Week 1)

#### Requirements:

1. Find or create 3D hand model (`.glb` format)
2. Place in `public/3d-models/hand.glb`
3. Update HeroLivingHand.tsx to load model

#### Steps:

**Option A: Use existing model (if available)**

```bash
# Place your .glb file here:
cp /path/to/hand.glb public/3d-models/hand.glb
```

**Option B: Create placeholder 3D geometry**

- Edit: `components/home/HeroLivingHand.tsx`
- Use React Three Fiber to create simple hand geometry

**Test:**

```bash
npm run dev
# Visit http://localhost:3000
# Check Hero section renders 3D element
```

---

### Phase 3: Image Optimization (Week 1)

#### Current Status:

- Gallery images: placeholder paths in `/public/images/`
- Need to add actual nail art images

#### Steps:

**Add real images:**

```bash
# Create directories if not exist:
mkdir -p public/images/collections
mkdir -p public/images/gallery
mkdir -p public/images/services
mkdir -p public/images/academy

# Place images:
public/images/collections/aurora-chrome.jpg
public/images/collections/crystal-bloom.jpg
... (5 collections)

public/images/gallery/gallery-01.jpg
... (15+ gallery images)

public/images/services/nail-design.jpg
... (4 service images)
```

**Or: Setup Cloudinary** (recommended for production)

1. Create account: https://cloudinary.com
2. Get API key
3. Update image URLs in data files
4. Use Cloudinary URL transformation

---

### Phase 4: Forms & Submissions (Week 2)

#### Booking Form Integration

**Current:** Form component in BookingCTA.tsx
**Next:** Add form submission handler

**Steps:**

1. **Email Submission:**

```bash
# Install email library:
npm install nodemailer
# Or use SendGrid, Resend, etc.
```

2. **Google Sheets Integration:**

```bash
# Install sheet.best API or Google Sheets API
npm install google-auth-library
```

3. **Create API route:**

```typescript
// app/api/booking/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Send to email, Google Sheets, or CRM
  return Response.json({ success: true });
}
```

---

### Phase 5: SEO & Metadata (Week 2)

#### Current:

- Basic meta tags in layout.tsx

#### Tasks:

1. **Update site config:**

```typescript
// lib/site-config.ts
export const siteConfig = {
  name: "HANU Nails",
  description: "Luxury nail art studio & academy — where nails become art",
  url: "https://hanunails.com",
  locale: "vi_VN",
};
```

2. **Add structured data (JSON-LD):**

```typescript
// Generate for home, collections, services pages
// Use: https://schema.org/LocalBusiness
```

3. **Open Graph images:**

- Create social preview images
- Place in `public/og-images/`

---

### Phase 6: Analytics & Monitoring (Week 3)

#### Install GA4:

```typescript
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      ...
    </>
  )
}
```

#### Track events:

```typescript
// components/home/BookingCTA.tsx
const handleBookingSubmit = (data) => {
  gtag.event("booking_submitted", {
    service: data.service,
    timestamp: new Date(),
  });
};
```

---

## 🎨 CUSTOMIZATION CHECKLIST

### Color System

- [x] Design tokens set (lib/tokens.ts)
- [ ] Verify Tailwind config matches colors
- [ ] Test color accessibility (WCAG AA)

### Typography

- [x] Font imports (Cormorant Garamond + Inter)
- [ ] Verify font loading performance
- [ ] Test readability on all devices

### Animations

- [x] GSAP + Framer Motion installed
- [ ] Implement scroll-triggered animations (GSAP ScrollTrigger)
- [ ] Add parallax to 3D hand
- [ ] Test animations on mobile (performance)

### Responsive Design

- [x] Tailwind breakpoints configured
- [ ] Mobile: Test iPhone 12, SE, Android
- [ ] Tablet: Test iPad Pro, iPad
- [ ] Desktop: Test at 1920px, 2560px
- [ ] Test touch interactions

---

## 📊 BUILD SCRIPTS

### Development

```bash
npm run dev          # Start dev server (port 3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Testing

```bash
npm run test         # Unit tests (if setup)
npm run e2e          # End-to-end tests (if setup)
```

### Performance Audit

```bash
# Use Lighthouse (built into Chrome DevTools)
# Or: npm install -g lighthouse
lighthouse http://localhost:3000 --view
```

---

## 🌍 ENVIRONMENT VARIABLES

Create `.env.local` file:

```env
# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=HANU Nails

# APIs (optional)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
SENDGRID_API_KEY=your_sendgrid_key
GOOGLE_SHEETS_API_KEY=your_api_key

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# CMS (optional, for later)
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
```

---

## 🚀 DEPLOYMENT (Ready for Vercel)

### 1. Push to GitHub

```bash
git remote add origin https://github.com/your-repo/hanu-nails.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect GitHub repo at: https://vercel.com/dashboard

### 3. Custom Domain

- Go to Vercel Dashboard
- Settings → Domains
- Add: hanunails.com

### 4. Environment Variables (Vercel)

- Go to Settings → Environment Variables
- Add all variables from `.env.local`

---

## 📈 PERFORMANCE OPTIMIZATION

### Current Targets:

- FCP: < 1.5s
- LCP: < 2.5s
- CLS: < 0.1
- Lighthouse Score: 90+

### Optimization Tips:

1. **Image Optimization:**

```bash
npm install next/image
# Use <Image> component with width, height
# Enable blur placeholder
```

2. **Font Optimization:**

```bash
# Font weight subsetting (remove unused)
# Use font-display: swap
```

3. **Code Splitting:**

```bash
# Dynamic imports for heavy components
const HeroLivingHand = dynamic(() => import('@/components/home/HeroLivingHand'), {
  loading: () => <div className="h-screen bg-gray" />,
});
```

4. **Lazy Loading:**

```bash
# Use Intersection Observer for sections
# Load images when scrolled into view
```

---

## 🔒 SECURITY CHECKLIST

- [ ] Remove sensitive data from code
- [ ] Use environment variables for secrets
- [ ] Enable CSRF protection on forms
- [ ] Validate form inputs (server-side)
- [ ] Rate limit API endpoints
- [ ] Enable HTTPS only
- [ ] Set security headers (CSP, X-Frame-Options, etc.)
- [ ] Regular security audit

---

## 📝 DOCUMENTATION

### Files to Reference:

- **PLAN_DETAILED.md** — Full layout & design specification
- **HANU_NAILS_WEBSITE_SPEC.md** — Original PRD
- **README.md** — Project overview
- **lib/tokens.ts** — Design system tokens
- **data/** — All data schemas

### Component Documentation:

Each component has JSDoc comments:

```typescript
/**
 * Hero Section — The Living Hand
 * Interactive 3D hand with parallax and collection linking
 * @component
 * @example
 * <HeroLivingHand />
 */
```

---

## 🆘 TROUBLESHOOTING

### Issue: Port 3000 already in use

```bash
# Use different port:
npm run dev -- -p 3001
```

### Issue: Tailwind styles not showing

```bash
# Rebuild Tailwind CSS:
rm -rf .next node_modules/.cache
npm run dev
```

### Issue: 3D model not loading

```bash
# Check file path: public/3d-models/hand.glb exists
# Check console for errors
# Verify file size < 5MB
```

### Issue: Images not showing

```bash
# Check paths in data files
# Verify images exist in public/images/
# Use next/image component
```

---

## 📞 QUICK CONTACTS

- **Frontend Issues:** Check console (F12)
- **Design Issues:** Reference PLAN_DETAILED.md + moodboard
- **Data Issues:** Update files in `data/` folder
- **3D Issues:** Check Three.js docs + React Three Fiber

---

## ✅ READY TO START!

**Next Command:**

```bash
cd c:\Users\Admin\Downloads\Hanu_Nails\web
npm run dev
```

Visit: **http://localhost:3000**

Enjoy building HANU Nails! 🎉

---

**Last Updated:** May 31, 2026
**Status:** Ready for Development
**Next Phase:** 3D Model Integration + Image Optimization
