# 🚀 HANU NAILS — AUTO PROJECT START CHECKLIST

> One-click project kickstart guide — follow this checklist to launch development immediately!

---

## ⚡ QUICK START (Choose Your Path)

### Path A: Start Development Server (5 minutes)

```bash
# Step 1: Navigate to project
cd c:\Users\Admin\Downloads\Hanu_Nails\web

# Step 2: Start dev server
npm run dev

# Step 3: Open browser
# Visit: http://localhost:3000
```

✅ **That's it!** You should see the HANU Nails website.

---

### Path B: Full Setup from Scratch (10 minutes)

```bash
# Step 1: Navigate to project
cd c:\Users\Admin\Downloads\Hanu_Nails\web

# Step 2: Clear old node_modules (if exists)
rm -r node_modules package-lock.json  # Or: rmdir /s node_modules on Windows

# Step 3: Fresh install
npm install

# Step 4: Start dev server
npm run dev

# Step 5: Open in browser
# Visit: http://localhost:3000
```

---

## 📋 PRE-LAUNCH VERIFICATION CHECKLIST

Before running the server, verify:

- [x] Node.js installed (v18+)

  ```bash
  node --version  # Should be v18 or higher
  ```

- [x] npm installed

  ```bash
  npm --version
  ```

- [x] Project folder exists

  ```bash
  cd c:\Users\Admin\Downloads\Hanu_Nails\web
  ls -la  # Should see package.json, next.config.ts, etc.
  ```

- [x] Required files present
  ```
  ✅ package.json
  ✅ next.config.ts
  ✅ tsconfig.json
  ✅ tailwind.config.ts
  ✅ postcss.config.mjs
  ✅ app/layout.tsx
  ✅ app/page.tsx
  ✅ components/
  ✅ data/
  ```

---

## 🎯 WHAT YOU'LL SEE ON LOCALHOST:3000

When you visit http://localhost:3000, you should see:

### ✅ Header

- Logo: "HANU NAILS"
- Navigation: Home, Collections, Gallery, Pricing, Academy
- CTA Button: "Book"
- Mobile menu toggle (hamburger)

### ✅ Home Page Sections

1. **Hero — The Living Hand**
   - Large text: "HANU NAILS"
   - Tagline: "Where Nails Become Art"
   - Two CTA buttons: "Explore Collections" + "Book Appointment"
   - 3D placeholder (will be replaced with actual 3D model)

2. **Featured Collections**
   - 5 collection cards (Aurora Chrome, Crystal Bloom, etc.)
   - Horizontal scroll on desktop, stacked on mobile
   - "View Collection" links

3. **Hall of Art / Gallery Preview**
   - Masonry grid of nail images
   - Filter buttons
   - "Book this design" CTAs on hover

4. **Services**
   - 4 service cards: Nail Design, Nail Care, Luxury Gel, Custom Design
   - Icon + description
   - Pricing info

5. **Pricing Preview**
   - 3 categories: Nail Care, Gel & Design, Luxury Art
   - Price list
   - "View Full Pricing" button

6. **Academy Preview**
   - "HANU Academy" section
   - Course descriptions
   - "Explore Courses" + "Apply for Course" buttons

7. **Testimonials**
   - Customer testimonial carousel
   - Auto-play with pause on hover
   - 5-star ratings

8. **Booking CTA**
   - "Begin Your Nail Experience" headline
   - Booking form
   - Name, phone, service, date fields
   - Submit button

### ✅ Footer

- Links to all pages
- Contact info
- Social media links
- Copyright

---

## 🔧 IF SOMETHING GOES WRONG

### Error: "Cannot find module 'next'"

```bash
# Solution: Reinstall dependencies
npm install
npm run dev
```

### Error: "Port 3000 already in use"

```bash
# Solution: Use different port
npm run dev -- -p 3001
# Visit: http://localhost:3001
```

### Error: "Tailwind CSS not loading"

```bash
# Solution: Clear cache and rebuild
rm -rf .next node_modules/.cache
npm run dev
```

### Error: "Module not found" (specific component)

```bash
# Check if file exists:
ls components/ui/Button.tsx
# If not, create from template
```

### Error: Images not loading

```bash
# Check public/images/ folder exists
ls public/images/

# If empty, create placeholder images or use Cloudinary
```

### 3D model not showing (expected, will fix later)

```bash
# This is normal for now.
# The 3D hand model will be added in Phase 3.
# Placeholder gray box is expected.
```

---

## 📊 WHAT'S READY VS. WHAT'S NOT

### ✅ READY (45% Complete)

- Project structure & layout
- All UI components
- Navigation & header
- Footer with links
- All 8 homepage sections (layout done)
- All data files (collections, gallery, services, pricing, courses)
- Responsive design (mobile, tablet, desktop)
- Design tokens & color system
- Typography setup
- Tailwind CSS fully configured

### 🔄 IN PROGRESS (30% - will do in Weeks 1-2)

- Real images for gallery, collections, services
- 3D hand model integration
- Scroll animations (GSAP)
- Parallax effects
- Detail pages (collections, gallery)

### ❌ NOT YET (25% - Weeks 3-7)

- Form submission handlers (email, Google Sheets)
- Advanced animations
- Filter & search functionality
- SEO metadata for all pages
- Cloudinary image optimization
- Analytics setup
- Performance optimization
- Accessibility audit (WCAG)

---

## 📁 PROJECT STRUCTURE (What's Where)

```
c:\Users\Admin\Downloads\Hanu_Nails\web\
│
├── 📄 BUILD_INSTRUCTIONS.md        ← Read this for detailed steps
├── 📄 IMPLEMENTATION_STATUS.md      ← Track project progress
├── 📄 PLAN_DETAILED.md            ← Full design & layout spec
├── 📄 HANU_NAILS_WEBSITE_SPEC.md   ← Original PRD
│
├── 🚀 app/
│   ├── layout.tsx                 ← Root layout (Header, Footer)
│   ├── page.tsx                   ← Home page (all 8 sections)
│   ├── globals.css                ← Tailwind + global styles
│   ├── collections/
│   ├── gallery/
│   ├── pricing/
│   ├── academy/
│   ├── booking/
│   └── about/ (not started yet)
│
├── 🎨 components/
│   ├── ui/                        ← Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Card.tsx
│   │   ├── SectionTitle.tsx
│   │   └── ... (9 components)
│   │
│   ├── layout/                    ← Header, Footer, MobileMenu
│   │
│   └── home/                      ← All 8 homepage sections
│       ├── HeroLivingHand.tsx
│       ├── FeaturedCollections.tsx
│       ├── HallOfArtPreview.tsx
│       ├── ServicesPreview.tsx
│       ├── PricingPreview.tsx
│       ├── AcademyPreview.tsx
│       ├── Testimonials.tsx
│       └── BookingCTA.tsx
│
├── 📊 data/
│   ├── collections.ts             ← 5 nail collections
│   ├── gallery.ts                 ← Gallery items
│   ├── services.ts                ← 4 services
│   ├── pricing.ts                 ← Pricing table
│   ├── courses.ts                 ← 4 academy courses
│   ├── testimonials.ts            ← Customer reviews
│   └── nav.ts                     ← Navigation structure
│
├── 🔧 lib/
│   ├── tokens.ts                  ← Design system (colors, spacing, fonts)
│   ├── utils.ts                   ← Utility functions
│   ├── cn.ts                      ← Tailwind class merger
│   └── types.ts                   ← TypeScript interfaces
│
├── 🎯 public/
│   ├── Hanu.png                   ← Moodboard reference
│   ├── images/                    ← (Add nail images here)
│   ├── 3d-models/                 ← (Add hand.glb here in Phase 3)
│   └── ...
│
├── ⚙️ Configuration files
│   ├── package.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── postcss.config.mjs
│   ├── eslint.config.mjs
│   └── .env.local                 ← (Create this for secrets)
```

---

## 🎬 NEXT IMMEDIATE ACTIONS

### TODAY (5 minutes)

1. **Start dev server:**

   ```bash
   cd c:\Users\Admin\Downloads\Hanu_Nails\web
   npm run dev
   ```

2. **Open browser:**

   ```
   http://localhost:3000
   ```

3. **Verify it works:**
   - See HANU NAILS logo?
   - See all 8 sections?
   - Try navigation?
   - Test on mobile view?

4. **Check console (F12):**
   - Any red errors?
   - Any warnings?
   - Note them down

5. **Read the docs:**
   - [ ] Read: PLAN_DETAILED.md (layout spec)
   - [ ] Read: BUILD_INSTRUCTIONS.md (detailed steps)
   - [ ] Read: IMPLEMENTATION_STATUS.md (progress tracking)

---

### THIS WEEK (Phases 1-2)

- [ ] Acquire 3D hand model (.glb file, < 5MB)
- [ ] Add real nail images (gallery, collections, services)
- [ ] Setup environment variables (.env.local)
- [ ] Complete all detail pages
- [ ] Test responsive design on all devices

---

### NEXT WEEK (Phase 3)

- [ ] Integrate 3D hand model
- [ ] Implement scroll animations (GSAP)
- [ ] Add parallax effects
- [ ] Test 3D on mobile performance

---

### WEEKS 3-7 (Phases 4-7)

- [ ] Form submission handlers
- [ ] Search & filter functionality
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Accessibility audit
- [ ] Deploy to Vercel

---

## 🎨 DESIGN REFERENCE

**Moodboard:** `public/Hanu.png`

- Luxury nail art studio aesthetic
- Colors: White, Gray, Beige, Brown, Nâu
- Modern, minimal, artistic
- Not trendy/playful — professional & elegant

**Typography:**

- Headings: Cormorant Garamond (serif, elegant)
- Body: Inter (clean, readable)

**Color Palette:**

```css
Primary: #1C1C1C (Charcoal)
Secondary: #7A685A (Dark Brown)
Accent: #C8B8A8 (Brown)
Light: #F8F7F4 (Soft White)
Border: #E6E6E6 (Gray)
```

---

## 📈 SUCCESS METRICS

After running the project, verify:

- ✅ Server starts without errors
- ✅ Home page loads in < 2 seconds
- ✅ All sections visible and responsive
- ✅ Navigation links work
- ✅ Mobile view looks good (test on phone or DevTools)
- ✅ No console errors (F12 → Console)
- ✅ Tailwind styles applied (colors, spacing, fonts)
- ✅ Images load (with placeholders)
- ✅ Forms are interactive (can type in fields)

---

## 🆘 QUICK TROUBLESHOOTING

| Issue               | Quick Fix                                          |
| ------------------- | -------------------------------------------------- |
| Port 3000 in use    | `npm run dev -- -p 3001`                           |
| Styles not showing  | `rm -rf .next && npm run dev`                      |
| Module not found    | Check file path in error message                   |
| Components gray     | Placeholder images expected, add real images later |
| Mobile looks broken | Check viewport in DevTools (F12 → Toggle device)   |
| 3D not showing      | Normal for Phase 3 (3D model will be added later)  |

---

## 📞 FILES TO READ (In Order)

1. **PLAN_DETAILED.md** — Understand the full design & layout
2. **BUILD_INSTRUCTIONS.md** — Detailed development workflow
3. **IMPLEMENTATION_STATUS.md** — Track your progress
4. **HANU_NAILS_WEBSITE_SPEC.md** — Original product requirements

---

## 🎉 YOU'RE READY!

**Command to start:**

```bash
npm run dev
```

**Expected output:**

```
> ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

**Open in browser:**

```
http://localhost:3000
```

---

**Good luck building HANU Nails! 🚀**

Questions? Check the docs or error console (F12).

---

**Last Updated:** May 31, 2026
**Status:** Ready to launch 🎊
