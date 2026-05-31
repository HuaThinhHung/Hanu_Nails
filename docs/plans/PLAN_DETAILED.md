# 🎨 HANU NAILS — WEBSITE LAYOUT PLAN (Chi Tiết Toàn Bộ)

> Plan này được lên dựa trên moodboard @Hanu.png, Spec file, & yêu cầu luxury aesthetic.
> Mục tiêu: Tạo website nail art studio sang trọng, hiện đại, có trải nghiệm 3D sống động như Digital Art Gallery.

---

## 📋 TOÀN BỘ WEBSITE STRUCTURE (SITEMAP)

```
/
├── index.tsx (Home)
│   ├── Header (Navigation)
│   ├── Section 1: Hero — The Living Hand (3D Interactive)
│   ├── Section 2: Featured Collections (Horizontal Scroll / Grid)
│   ├── Section 3: Hall of Art — Gallery Preview (Masonry)
│   ├── Section 4: Services (Icon Cards)
│   ├── Section 5: Pricing Preview (Minimalist Pricing)
│   ├── Section 6: HANU Academy Preview (CTA Focus)
│   ├── Section 7: Testimonials / Gallery Slider
│   ├── Section 8: Booking CTA (Brand Quote + Form)
│   └── Footer
├── collections/index.tsx
│   ├── Collections List (Grid / Carousel)
│   └── collections/[slug].tsx → Collection Detail Page
├── gallery/index.tsx
│   ├── Gallery Masonry (With Filter & Search)
│   └── gallery/[id].tsx → Gallery Modal / Detail
├── pricing/index.tsx (Full Pricing Table)
├── academy/index.tsx
│   ├── Academy Overview
│   └── academy/[slug].tsx → Course Detail
├── booking/index.tsx (Booking Form Page)
├── about/index.tsx (About Page)
├── contact/index.tsx (Contact Info + Social)
└── admin/ (CMS Dashboard — giai đoạn sau)
```

---

## 🎯 SECTION-BY-SECTION DETAILED LAYOUT

### **LAYOUT CHUNG: Header + Footer Fixed**

```
┌─────────────────────────────────────────────┐
│           HEADER (Fixed / Sticky)           │ h: 60-80px
├─────────────────────────────────────────────┤
│                                             │
│                 MAIN CONTENT                │ (scrollable)
│                                             │
├─────────────────────────────────────────────┤
│            FOOTER (Sticky Bottom)           │ h: 200-400px
└─────────────────────────────────────────────┘
```

---

## 1️⃣ HEADER (Navigation)

### Desktop Layout (≥1024px)

```
┌─────────────────────────────────────────────────────────────┐
│ HANU    HOME   COLLECTIONS   GALLERY   PRICING   ACADEMY   ☰ │
│ NAILS                                                   BOOK │
└─────────────────────────────────────────────────────────────┘
Height: 70px
Padding: 15px 40px
Background: White / Soft-white (#F8F7F4)
Border-bottom: 1px solid #E6E6E6
Sticky: Yes
Z-index: 1000
```

**Components:**

- Logo: "HANU NAILS" (serif, 20px)
- Nav links: 6 items (inter, 14px, letter-spacing 0.5px)
- CTA Button: "Book" (bordered, 12px, hover: bg fill)
- Mobile menu toggle: hidden

### Mobile Layout (<1024px)

```
┌────────────────────────────────────────┐
│ HANU ☰  (Right-side hamburger button) │
│ NAILS                                 │
└────────────────────────────────────────┘
Height: 60px

Mobile Menu (Overlay):
┌────────────────────────────────────────┐
│ ✕                                      │
│                                        │
│ Home                                   │
│ Collections                            │
│ Gallery                                │
│ Pricing                                │
│ Academy                                │
│ Book Appointment                       │
│                                        │
│ Contact: +84...                        │
│ Zalo / Instagram / TikTok              │
└────────────────────────────────────────┘
Z-index: 999
BG: White / Soft-white
Padding: 20px
```

---

## 2️⃣ HERO SECTION — "The Living Hand" (Full-Screen Interactive 3D)

### Layout Structure

```
┌─────────────────────────────────────┐
│                                     │
│    LEFT: TEXT          RIGHT: 3D    │ h: 100vh / calc(100vh - 70px)
│    (50%)                HAND (50%)   │
│                                     │
└─────────────────────────────────────┘

Mobile (<1024px):
┌──────────────────────────────────┐
│          3D HAND                 │ h: 60vh
│       (Full width)               │
├──────────────────────────────────┤
│                                  │
│         TEXT SECTION             │ h: 40vh
│                                  │
└──────────────────────────────────┘
```

### Desktop (1024px+)

```
LEFT COLUMN (50%):
├─ Padding: 80px 40px
├─ Text: "HANU NAILS"
│   Font: Serif (Cormorant Garamond), 72px
│   Weight: 300-400
│   Color: #1C1C1C
│   Margin-bottom: 30px
│
├─ Eyebrow: "The Living Hand"
│   Font: Inter, 12px
│   Letter-spacing: 2px
│   Color: #C8B8A8
│   Margin-bottom: 20px
│
├─ Tagline: "Where Nails Become Art"
│   Font: Inter, 18px / 24px (line-height)
│   Color: #7A685A
│   Max-width: 350px
│   Margin-bottom: 40px
│
└─ CTAs: 2 buttons side-by-side
   ├─ Button 1: "Explore Collections"
   │   Style: Filled (BG: #1C1C1C, Text: white)
   │   Hover: Opacity 0.8
   │
   └─ Button 2: "Book Appointment"
       Style: Outlined (Border: #1C1C1C)
       Hover: BG fill

RIGHT COLUMN (50%):
├─ Canvas / Three.js Container
├─ Background: Gradient from #F8F7F4 → #E6E6E6
├─ 3D Hand Model (GLB format)
└─ Interactions:
   ├─ Parallax: Follow mouse ±5-8 degrees
   ├─ Scroll: Camera zoom in → nail detail
   └─ Hover fingernail: Show collection name + tooltip
```

### Mobile (<1024px)

```
TOP (60vh):
├─ Canvas / 3D Hand
├─ Background: Gradient
└─ Parallax: Subtle (±2 degrees)

BOTTOM (40vh):
├─ Padding: 40px 20px
├─ Text: "HANU NAILS" (48px)
├─ Eyebrow (12px)
├─ Tagline (16px)
└─ Stacked CTAs (full-width buttons)
```

### 3D Hand Interactions

```
Mouse Move:
  → Hand rotates X: ±5°, Y: ±8°
  → Update in real-time (ThreeJS lookAt)

Scroll Event:
  → Camera.position.z decrease (zoom in on nail)
  → Transition smooth (0.3s)

Hover Fingernails:
  → Tooltip appears: Collection name + description
  → Nail highlights slightly (glow/outline)

Click Fingernail:
  → Navigate to /collections/[slug]

Mobile Parallax:
  → Touch move / Device tilt: ±2-3 degrees only
  → Prevents disorientation
```

---

## 3️⃣ SECTION — FEATURED COLLECTIONS (Section 2)

### Layout Options (Choose 1)

#### Option A: Horizontal Scroll (Desktop) + Stacked (Mobile)

```
DESKTOP (1024px+):
┌────────────────────────────────────────────┐
│ Featured Collections                       │
│                                            │
│ [Card 1] [Card 2] [Card 3] →→→ scroll     │
│ (Visible: 2.5 cards, overflow hidden)     │
└────────────────────────────────────────────┘

MOBILE:
┌────────────────┐
│ Featured       │
│ Collections    │
├────────────────┤
│ [Card 1]       │
├────────────────┤
│ [Card 2]       │
├────────────────┤
│ [Card 3]       │
└────────────────┘
```

#### Option B: Asymmetric Grid (Pinterest-like)

```
DESKTOP:
┌─────────┬─────────┬────────┐
│ Col 1   │ Col 2   │ Col 3  │ h: 300-400px
│ (large) │ (medium)│ (small)│
├─────────┼─────────┼────────┤
│ Col 4   │ Col 5   │ Col 6  │
│ (medium)│ (small) │ (large)│
└─────────┴─────────┴────────┘

MOBILE (Stack):
[Col 1]
[Col 2]
[Col 3]
...
```

### Card Design

```
┌─────────────────────────┐
│                         │
│    Collection Image     │ h: 280px
│    (Aspect ratio 4:3)   │
│                         │
├─────────────────────────┤
│ 01 Aurora Chrome        │ Title + number
│                         │ Font: Serif, 16px
│ Hologram, silver, ...   │ Description: 12px
│                         │
│ [View Collection] →     │ CTA: Link
└─────────────────────────┘
Width: 280-350px (responsive)
```

### Section Container

```
Section Padding: 80px 40px
Max-width: 1400px
Margin: 0 auto
Background: White
```

---

## 4️⃣ SECTION — HALL OF ART / GALLERY PREVIEW (Section 3)

### Layout Structure

```
DESKTOP (1024px+):
┌─────────────────────────────────────────┐
│ Hall of Art                            │
│ A curated gallery of nail works...     │
├─────────────────────────────────────────┤
│                                         │
│ Masonry Grid (3 columns)                │
│                                         │
│ [Img1: 300px]  [Img2: 200px]  [Img3]  │
│ [Img4: 200px]  [Img5: 300px]  [Img6]  │
│ [Img7: 250px]  [Img8: 250px]  [Img9]  │
│                                         │
└─────────────────────────────────────────┘

TABLET (768px+):
Masonry Grid (2 columns)

MOBILE (<768px):
Stacked single column
```

### Filter Bar

```
┌──────────────────────────────────────────┐
│ All | Luxury | Chrome | Cat Eye | French │ Scroll horizontal on mobile
│ Crystal | Korean | Minimal | ... [More] │
└──────────────────────────────────────────┘
Position: Above gallery
Sticky: On scroll (tablet+)
```

### Gallery Item (Hover Effect)

```
┌─────────────────────┐
│                     │
│    Image            │ Aspect ratio varies
│                     │
└─────────────────────┘
         ↓ Hover
┌─────────────────────┐
│  [Semi-dark overlay]│
│  Mẫu Chrome Luxury  │ Title + Category
│                     │
│  [View] [Book] →    │ CTAs: Links
└─────────────────────┘
Transition: 0.3s ease
Opacity on hover: 80%
```

---

## 5️⃣ SECTION — OUR SERVICES (Section 4)

### Layout

```
┌────────────────────────────────────────────┐
│ OUR SERVICES                               │
├────────────────────────────────────────────┤
│                                            │
│ [Icon] Nail Design   [Icon] Nail Care    │
│ Description...       Description...      │
│                                            │
│ [Icon] Luxury Gel    [Icon] Custom Desig │
│ Description...       Description...      │
│                                            │
└────────────────────────────────────────────┘

Desktop: 4 columns (equal width)
Tablet: 2 columns
Mobile: 1 column
```

### Card Component

```
┌──────────────────────┐
│   [Icon: 60px]       │
│                      │
│ Nail Design          │ Title: Serif, 16px
│                      │
│ Thiết kế nail theo   │ Description: 14px
│ phong cách riêng...  │ Line-height: 1.6
└──────────────────────┘

Padding: 40px 20px
Background: White
Border: 1px solid #E6E6E6
Hover: Shadow light
Transition: 0.2s
```

---

## 6️⃣ SECTION — PRICING PREVIEW (Section 5)

### Layout

```
┌────────────────────────────────────────────┐
│ Pricing                                    │
│ Rõ giá nhưng vẫn sang                      │
├────────────────────────────────────────────┤
│                                            │
│ Nail Care       Gel & Design   Luxury Art │
│ ─────────       ────────────   ───────────│
│ Basic Mac.. 150K    Gel Polish  250K      │
│ Spa Manic.. 250K    French Tip  300K      │
│ Nail Repai.. 50K    Cat Eye    350K      │
│                     Chrome     350K      │
│                     Stone..    500K      │
│                     Custom Art Báo giá    │
│                                            │
│ [View Full Pricing] →                      │
└────────────────────────────────────────────┘

Desktop: 3 columns side-by-side
Tablet: 2 columns → 1 column
Mobile: Stacked, scrollable
```

### Price Item

```
Basic Manicure
từ 150.000đ

Font: Inter, 14px
Color: #7A685A for label
Price: #1C1C1C, 16px, bold
Line-height: 1.8
```

---

## 7️⃣ SECTION — HANU ACADEMY PREVIEW (Section 6)

### Layout

```
┌─────────────────────────────────────────┐
│ HANU Academy                            │
│ Train Your Hands. Shape Your Taste.     │
│ Build Your Nail Career.                 │
├─────────────────────────────────────────┤
│                                         │
│ Long-form description (2-3 lines)       │
│                                         │
│ [Button: Explore Courses]               │
│ [Button: Apply for Course]              │
│                                         │
└─────────────────────────────────────────┘

OR Split Layout:
┌──────────┬──────────────────┐
│ Image /  │ Content:         │
│ Mockup   │ Title            │
│          │ Description      │
│          │ [CTAs]           │
└──────────┴──────────────────┘
```

---

## 8️⃣ SECTION — TESTIMONIALS / BRAND QUOTE (Section 7)

### Layout Option A: Full-width Quote

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│  "Mặc dù đa phần khách hàng đến để làm      │
│   nail, nhưng họ đi về với trải nghiệm      │
│   của một tác phẩm nghệ thuật."             │
│                                             │
│                     — Founder, HANU Nails   │
│                                             │
└─────────────────────────────────────────────┘

Font: Serif (Cormorant), 28px
Color: #1C1C1C
Padding: 60px 40px
Text-align: center
Line-height: 1.8
```

### Layout Option B: Testimonial Carousel

```
┌──────────────────────────────────────────┐
│ ⟨ [Customer 1] [Customer 2] [Customer 3] ⟩ │
│                                          │
│ "Beautiful experience..."                │
│ — Hôm, 28                                │
│                                          │
│ ⭐⭐⭐⭐⭐                               │
└──────────────────────────────────────────┘

Carousel: Auto-play, pause on hover
Items visible: 1 (mobile), 1 (tablet), 1-2 (desktop)
```

---

## 9️⃣ SECTION — BOOKING CTA / BRAND QUOTE + FORM (Section 8)

### Layout Option A: Side-by-side

```
LEFT (50%):
┌──────────────────────┐
│ "Begin Your Nail    │
│  Experience"        │
│                      │
│ Where artistry      │
│ meets care.         │
└──────────────────────┘

RIGHT (50%):
┌──────────────────────┐
│ [Quick Booking Form] │
│                      │
│ Full name            │
│ Phone                │
│ Service              │
│ Preferred date       │
│ [Submit] [Zalo]      │
└──────────────────────┘
```

### Layout Option B: Full-width Form

```
┌──────────────────────────────────┐
│ Begin Your Nail Experience      │
│                                 │
│ [Form below center]             │
│                                 │
│ Full name    Phone               │
│ Service      Preferred date      │
│ Nail style   [Upload ref image] │
│ Note                             │
│                                 │
│ [Submit]   [Chat Zalo]          │
└──────────────────────────────────┘

Padding: 80px 40px
Max-width: 600px (center aligned)
```

---

## 🔟 FOOTER (Global)

### Layout

```
┌──────────────────────────────────────────────┐
│                                              │
│ HANU          QUICK LINKS     CONTACT        │
│ NAILS         Home            +84 9xx xxx    │
│               Collections     email@hanu     │
│ The Living    Gallery         Zalo / Chat    │
│ Hand         Pricing                         │
│              Academy          ADDRESS        │
│              Blog             10B, Tôn Đức  │
│                               Thắng...       │
│              SOCIAL LINKS                    │
│              Facebook          Instagram     │
│              TikTok           Pinterest      │
│                                              │
├──────────────────────────────────────────────┤
│ © 2024 HANU Nails. All rights reserved.     │
│ Privacy Policy | Terms | Sitemap             │
└──────────────────────────────────────────────┘

DESKTOP (1024px+):
4 columns, padding: 60px 40px, row gap: 40px

TABLET (768px+):
2 columns, padding: 40px 20px

MOBILE (<768px):
1 column, padding: 30px 15px, stacked vertically
```

### Footer Sections

**Column 1: Brand**

```
HANU NAILS
logo (optional)
"The Living Hand"
Short tagline
```

**Column 2: Navigation**

```
QUICK LINKS
Home
Collections
Gallery
Pricing
Academy
Booking
Blog
About
Contact
```

**Column 3: Contact**

```
CONTACT
Phone: +84 ...
Email: hello@hanunails.com
Hours: 9AM-7PM (Mon-Sat)
        10AM-5PM (Sun)
```

**Column 4: Address**

```
STUDIO LOCATION
10B Tôn Đức Thắng
District 1, HCMC
Vietnam
```

**Bottom: Social Links**

```
Facebook | Instagram | TikTok | Pinterest
```

**Copyright**

```
© 2024 HANU Nails. All rights reserved.
Privacy Policy | Terms of Service | Sitemap
```

---

## 📱 RESPONSIVE BREAKPOINTS

```javascript
// Tailwind config
screens: {
  'sm': '640px',   // Mobile: Small phones
  'md': '768px',   // Tablet: iPad, small tablets
  'lg': '1024px',  // Tablet: iPad Pro, laptop
  'xl': '1280px',  // Desktop: Large screens
  '2xl': '1536px'  // Desktop: Ultra-wide
}

// Major breakpoints:
Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px+
```

### Responsive Rules

| Element          | Mobile            | Tablet | Desktop |
| ---------------- | ----------------- | ------ | ------- |
| Header height    | 60px              | 70px   | 70px    |
| Hero split       | Stacked (img top) | 50-50  | 50-50   |
| Collections grid | 1 col             | 2 cols | 3 cols  |
| Gallery masonry  | 1 col             | 2 cols | 3 cols  |
| Services grid    | 1 col             | 2 cols | 4 cols  |
| Pricing table    | 1 col             | 2 cols | 3 cols  |
| Footer columns   | 1 col             | 2 cols | 4 cols  |

---

## 🎬 ANIMATION GUIDELINES

### Global Animations

```javascript
// Scroll triggered animations
- Fade-in on scroll
- Slide-up on scroll
- Scale-up on scroll (GSAP ScrollTrigger)

// Interactive animations
- Hover: Opacity 0.8, Shadow light
- Click: Scale 0.95
- Transition: 0.2-0.3s

// Page transitions
- Fade: 0.3s (between pages)
```

### Section-Specific Animations

**Hero Section:**

- 3D hand parallax: Follow mouse
- Text fade-in: On load
- Buttons: Hover underline + shadow

**Collections:**

- Card scale: Hover 1.02x
- Image zoom: 1.1x on hover

**Gallery:**

- Masonry: Stagger fade-in (0.1s delay per item)
- Filter: Fade transition (0.3s)

**Pricing:**

- Price cards: Hover shadow + lift (transform: translateY(-5px))

---

## 🎨 COLOR PALETTE (Applied Across All Sections)

```css
/* Neutrals (Primary) */
--white: #ffffff;
--soft-white: #f8f7f4;
--light-gray: #f2ede9;
--gray: #e6e6e6;
--warm-gray: #d8d2c8;
--brown: #c8b8a8;
--dark-brown: #7a685a;
--charcoal: #1c1c1c;
--black: #000000;

/* Accents (Optional, very subtle) */
--gold-accent: #d4af37 (for special features) --blush: #f0e8e4 (soft pink)
  /* Semantic */ --text-primary: #1c1c1c (charcoal) --text-secondary: #7a685a
  (dark-brown) --text-light: #c8b8a8 (brown) --border-light: #e6e6e6 (gray)
  --bg-light: #f8f7f4 (soft-white);
```

---

## 📐 COMPONENT LIBRARY

### Reusable Components to Build

```
src/components/ui/
├── Button.tsx (Filled, Outlined, Ghost)
├── Container.tsx (Max-width wrapper)
├── SectionTitle.tsx (Heading + Subtitle)
├── Card.tsx (Generic card component)
├── Modal.tsx (Gallery modal, booking form modal)
├── Divider.tsx (Line separator, space divider)
├── Badge.tsx (Category tag, label)
├── Eyebrow.tsx (Small label above title)
├── Logo.tsx (Brand logo)
├── Form/
│   ├── Input.tsx
│   ├── Select.tsx
│   ├── Textarea.tsx
│   └── FileUpload.tsx
└── ...

src/components/home/
├── Hero.tsx
├── FeaturedCollections.tsx
├── HallOfArt.tsx
├── Services.tsx
├── Pricing.tsx
├── Academy.tsx
├── Testimonials.tsx
├── BookingCTA.tsx
└── ...

src/components/layout/
├── Header.tsx (Navigation)
├── MobileMenu.tsx
└── Footer.tsx
```

---

## 📊 DATA STRUCTURE (TypeScript)

### Collections Schema

```typescript
interface Collection {
  id: string;
  slug: string;
  number: number; // 01-05
  name: string; // "Aurora Chrome"
  mood: string; // "Hologram, ánh bạc..."
  description: string;
  colors: string[];
  imageUrl: string;
  galleryImages: string[];
  priceFrom: number;
  isActive: boolean;
}
```

### Gallery Item Schema

```typescript
interface GalleryItem {
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  thumbnailUrl: string;
  categories: string[];
  collectionId?: string;
  description: string;
  priceFrom?: number;
  isFeatured: boolean;
  createdAt: Date;
}
```

### Service Schema

```typescript
interface Service {
  id: string;
  name: string; // "Nail Design"
  description: string;
  icon: string; // SVG or icon name
  priceFrom: number;
  duration?: string; // "60 mins"
}
```

### Pricing Schema

```typescript
interface PricingCategory {
  id: string;
  name: string; // "Nail Care", "Gel & Design"
  items: PricingItem[];
}

interface PricingItem {
  id: string;
  name: string;
  priceFrom: number;
  priceDisplay: string; // "từ 150.000đ"
}
```

### Course Schema

```typescript
interface Course {
  id: string;
  slug: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Business";
  duration: string; // "4-6 tuần"
  description: string;
  image?: string;
  price?: number;
  priceDisplay?: string; // "Báo giá"
}
```

### Booking Form Schema

```typescript
interface BookingSubmission {
  fullName: string;
  phone: string;
  service: string;
  preferredDate: Date;
  preferredTime?: string;
  nailStyle?: string;
  referenceImageUrl?: string;
  note?: string;
}
```

---

## 🔧 BUILD ROADMAP (Priority Order)

### **Phase 1: Foundation (Week 1-2)**

- [ ] Setup Next.js project with Tailwind + TypeScript
- [ ] Create base layout (Header, Footer, Page wrapper)
- [ ] Create color system + design tokens
- [ ] Build reusable components (Button, Container, Card, SectionTitle)
- [ ] Setup data files (collections.ts, services.ts, pricing.ts, courses.ts)

### **Phase 2: Homepage Structure (Week 2-3)**

- [ ] Hero section layout (text side, 3D placeholder side)
- [ ] Featured Collections section
- [ ] Hall of Art / Gallery preview
- [ ] Services section
- [ ] Pricing preview section
- [ ] Academy preview section
- [ ] Booking CTA section
- [ ] Basic responsive design

### **Phase 3: 3D & Interactions (Week 3-4)**

- [ ] Import 3D hand model (GLB)
- [ ] Setup Three.js + React Three Fiber
- [ ] Implement parallax on 3D hand
- [ ] Add scroll-triggered animations (GSAP)
- [ ] Add hover interactions
- [ ] Test on mobile (touch interactions)

### **Phase 4: Secondary Pages (Week 4-5)**

- [ ] Collections listing page
- [ ] Collection detail page ([slug])
- [ ] Gallery page with filtering
- [ ] Gallery modal / detail view
- [ ] Pricing full page
- [ ] Academy page + course detail
- [ ] Booking form page
- [ ] About page

### **Phase 5: Advanced Features (Week 5-6)**

- [ ] Implement booking form submission (Email + Google Sheet)
- [ ] Add form validation
- [ ] Add image upload for reference
- [ ] Implement gallery lazy loading
- [ ] Add gallery search
- [ ] Add testimonials carousel
- [ ] Add blog section (optional)

### **Phase 6: Performance & Polish (Week 6-7)**

- [ ] Image optimization (Cloudinary integration)
- [ ] SEO optimization (meta tags, structured data)
- [ ] Performance audit (Lighthouse)
- [ ] Mobile testing across devices
- [ ] Accessibility audit (WCAG)
- [ ] Testing (unit + e2e)

### **Phase 7: Deployment & Maintenance (Week 7+)**

- [ ] Deploy to Vercel
- [ ] Setup analytics (Google Analytics, Hotjar)
- [ ] Monitor performance
- [ ] Setup CMS (Sanity) for content management
- [ ] Create admin dashboard

---

## 🎯 FILE STRUCTURE (Next.js App Router)

```
hanu-nails/
├── app/
│   ├── globals.css (Tailwind + global styles)
│   ├── layout.tsx (Root layout with Header/Footer)
│   ├── page.tsx (Home page)
│   ├── collections/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── gallery/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── academy/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── booking/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── ui/ (Reusable UI components)
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   ├── layout/ (Persistent layout)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── home/ (Home page sections)
│   │   ├── Hero.tsx
│   │   ├── FeaturedCollections.tsx
│   │   ├── HallOfArt.tsx
│   │   ├── Services.tsx
│   │   ├── Pricing.tsx
│   │   ├── Academy.tsx
│   │   ├── Testimonials.tsx
│   │   └── BookingCTA.tsx
│   └── sections/ (Reusable sections)
│
├── data/
│   ├── collections.ts
│   ├── gallery.ts
│   ├── services.ts
│   ├── pricing.ts
│   ├── courses.ts
│   ├── testimonials.ts
│   ├── nav.ts
│   └── site-config.ts
│
├── lib/
│   ├── utils.ts (Utility functions)
│   ├── cn.ts (Tailwind class merger)
│   ├── constants.ts
│   └── types.ts (TypeScript interfaces)
│
├── public/
│   ├── Hanu.png (Moodboard)
│   ├── images/
│   │   ├── collections/
│   │   ├── gallery/
│   │   ├── services/
│   │   └── academy/
│   └── 3d-models/
│       └── hand.glb
│
├── styles/
│   ├── tailwind.config.ts
│   └── globals.css
│
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── .eslintrc.json
└── README.md
```

---

## ⚡ PERFORMANCE TARGETS

| Metric                         | Target |
| ------------------------------ | ------ |
| First Contentful Paint (FCP)   | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS)  | < 0.1  |
| Time to Interactive (TTI)      | < 3.5s |
| Lighthouse Score               | 90+    |
| Mobile Performance             | 85+    |

---

## 🎨 VISUAL REFERENCES FROM MOODBOARD

Based on @Hanu.png:

- **Logo style:** Serif, minimal, elegant (e.g., "HANU NAILS")
- **Nail styles:** White marble, nude, chrome, crystal, brown
- **Photography:** Soft lighting, close-up hand shots, luxurious materials
- **Studio interior:** Minimal, light, with white/beige/gray palette
- **Taglines:** "Art Beyond Beauty", "Where Nails Become Art"
- **Aesthetic:** Fashion editorial + luxury gallery + modern spa

---

## ✅ CHECKLIST BEFORE START

- [x] Read HANU_NAILS_WEBSITE_SPEC.md
- [x] Analyzed @Hanu.png moodboard
- [x] Define sitemap
- [x] Define layout structure (header, sections, footer)
- [x] Define component library
- [x] Define data structures
- [x] Define build roadmap
- [ ] **READY TO START BUILDING!**

---

**Next Steps:**

1. Initialize Next.js project with templates
2. Setup Tailwind CSS + TypeScript
3. Create base layout (Header + Footer)
4. Build reusable components
5. Populate data files
6. Build homepage sections
7. Add 3D interactions
8. Build secondary pages
9. Deploy to Vercel

---

**Last Updated:** May 31, 2026
**Status:** Ready for Development
**Estimated Timeline:** 6-7 weeks (with experienced developer)
