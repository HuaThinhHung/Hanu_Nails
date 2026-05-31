# HANU NAILS — MASTER BUILD PLAN
## Bố cục chi tiết toàn website (Header → Hero → Sections → Footer)

> Tài liệu này bổ sung cho `HANU_NAILS_WEBSITE_SPEC.md`, đi sâu vào **bố cục chính xác từng pixel**, **microinteraction**, **state**, **responsive behavior**, và **thứ tự build**.
> Dựa trên moodboard `Hanu.png` (palette white/gray/beige/brown, editorial serif, pampas grass, marble texture, nail pearl/chrome).

---

## 0. NGUYÊN TẮC THIẾT KẾ XUYÊN SUỐT

### 0.1 Layout Grid System
- **Container max-width:** 1440px (desktop), padding 80px hai bên
- **Tablet (768–1024px):** padding 48px
- **Mobile (<768px):** padding 24px
- **Grid:** 12 columns, gutter 24px
- **Asymmetric layout:** ưu tiên lệch tâm, editorial style — KHÔNG center-everything

### 0.2 Spacing Scale (Tailwind custom)
```
4xs: 2px   |  xs: 8px   |  sm: 16px   |  md: 24px
lg: 40px   |  xl: 64px  |  2xl: 96px  |  3xl: 128px  |  4xl: 192px
```
Section padding dọc: **128px desktop / 80px mobile**.

### 0.3 Typography Scale
| Token | Desktop | Mobile | Font | Usage |
|---|---|---|---|---|
| display-xl | 144px / line 0.9 | 72px | Cormorant Garamond | Hero "HANU" wordmark |
| display-lg | 96px / line 1.0 | 56px | Cormorant Garamond | Section headlines |
| display-md | 64px / line 1.05 | 40px | Cormorant Garamond | Sub-headlines |
| heading-lg | 40px / line 1.2 | 28px | Cormorant Garamond | Card titles |
| heading-sm | 24px / line 1.3 | 20px | Cormorant Garamond | Mini titles |
| body-lg | 18px / line 1.6 | 16px | Inter | Lead paragraph |
| body | 15px / line 1.7 | 15px | Inter | Body text |
| caption | 12px / line 1.5 / tracking 0.18em | 11px | Inter UPPERCASE | Eyebrows, labels |

### 0.4 Color Tokens (mở rộng từ SPEC)
```css
--c-white: #FFFFFF;
--c-cream: #FAF7F2;          /* page background default */
--c-soft-white: #F8F7F4;
--c-gray-50: #EFEEEA;
--c-gray-100: #E6E4DE;
--c-warm-gray: #D8D2C8;
--c-beige: #F2EDE9;
--c-beige-dark: #E8DFD3;
--c-brown-100: #D9C9B8;
--c-brown: #C8B8A8;          /* accent brand */
--c-brown-dark: #9F8A75;
--c-dark-brown: #7A685A;
--c-charcoal: #1C1C1C;
--c-ink: #0E0E0D;            /* text default */
--c-line: #E0DCD3;           /* hairline borders */
```

### 0.5 Motion Tokens
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (luxury ease-out)
- **Duration:** instant 120ms · fast 240ms · base 480ms · slow 800ms · reveal 1200ms
- **Reveal pattern:** opacity 0 → 1 + translateY(24px → 0), stagger 80ms

### 0.6 Cursor
- Custom cursor: dot 8px charcoal + ring 32px outline
- Hover image/link → ring scale 1.5, dot scale 0
- Hover button → ring fill brown, text "View"

---

## 1. HEADER (chi tiết tới state)

### 1.1 Top Bar (h: 32px)
Background: `--c-ink`, text white, font Inter 11px tracking wide.
```
[ HCM Studio · 0909.xxx.xxx ] ............ [ Booking Hotline ] [ Zalo ] [ IG ]
```
Hidden trên mobile.

### 1.2 Main Nav (h: 80px → 64px khi scroll)
**State 1 — Top of page:**
- Background: transparent
- Text: charcoal
- Border-bottom: 1px hairline `--c-line` với opacity 30%

**State 2 — Scrolled >80px:**
- Background: `rgba(250, 247, 242, 0.82)` + `backdrop-filter: blur(20px) saturate(140%)`
- Height shrink xuống 64px (transition 320ms)
- Box-shadow: `0 1px 0 var(--c-line)`

**Layout (desktop):**
```
[ LOGO HANU ]        Home  Collections  Gallery  Pricing  Academy  About        [ BOOK NOW → ]
                     ─ navlink với underline animation fill từ trái ─                pill button
```

- **Logo:** wordmark "HANU" Cormorant 32px + "NAILS" Inter 9px tracking 0.35em below
- **Nav item:** Inter 13px tracking 0.18em UPPERCASE
  - Hover: underline draw từ left → right 280ms, color → brown
  - Active route: dot 4px dưới text, color brown
- **Mega menu** cho "Collections" (hover trigger):
  - Slide down panel 320px height
  - 2 cột: trái list 5 collections (Aurora Chrome, Crystal Bloom, Sakura Glass, Nude Sculpture, Brown Marble) + ảnh preview right
  - Hover collection → ảnh thay đổi với crossfade 400ms

**CTA "BOOK NOW":**
- Pill 999px, border 1px charcoal, padding 14×28
- Caret arrow → animation slide khi hover
- Hover: fill charcoal, text white

### 1.3 Mobile Nav (<1024px)
- Logo left, hamburger right (3 lines, animate → X khi open)
- Tap → fullscreen overlay với:
  - Background `--c-cream`
  - Nav items 36px Cormorant, stack dọc, stagger reveal 60ms
  - Bottom: CTA Book Now + social icons
  - Background ảnh bàn tay mờ opacity 8% bên phải
- Scroll lock body khi open

---

## 2. HERO — "THE LIVING HAND" (Section 1)

### 2.1 Layout (Fullscreen 100vh, min 720px)
Grid 12 col:
```
┌─────────────────────────────────────────────────────────────┐
│  [eyebrow caption col 1-3]                                  │
│                                                             │
│  HANU                                  │                    │
│  NAILS  (col 1-5)                      │   [3D HAND col 6-11]
│                                        │                    │
│  ─── divider 80px                      │                    │
│  Where Nails Become Art                │                    │
│  (display-md col 1-5)                  │                    │
│                                        │                    │
│  [ EXPLORE COLLECTIONS ] [ BOOK ↓ ]    │                    │
│                                                             │
│  ─────────── scroll indicator centered bottom ───────────  │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Background layers (z-index từ thấp tới cao)
1. **Base:** gradient mesh `from-cream via-beige to-warm-gray` 45deg
2. **Grain texture:** SVG noise 2% opacity (loại bỏ banding gradient)
3. **Pampas grass blur:** ảnh PNG cỏ pampas blur 40px góc dưới phải, opacity 30%
4. **Floating marble swatch:** absolute card 240×320 góc trên phải, parallax theo scroll, rotate -8deg
5. **3D Hand canvas:** Three.js fullbleed col 6-11, có vignette mềm

### 2.3 Text reveal sequence (Framer Motion)
```
t=0ms     →  eyebrow "LUXURY NAIL ART STUDIO & ACADEMY" fade-in
t=200ms   →  "HANU" letters stagger từng chữ H-A-N-U (clip-path reveal)
t=600ms   →  "NAILS" fade-in
t=900ms   →  divider draw left → right (scaleX)
t=1100ms  →  Tagline fade-up
t=1400ms  →  CTAs fade-up + scroll indicator pulse
```

### 2.4 3D Hand Interactions
| Trigger | Effect |
|---|---|
| Mouse move | Hand rotate ±6deg (rotateY), ±3deg (rotateX), lerp 0.08 |
| Mouse hover finger | Nail glow + tooltip "Aurora Chrome" appear |
| Click finger | Camera dolly forward + navigate /collections/[slug] |
| Scroll 0→50% | Camera FOV 35 → 22 (zoom into nails) |
| Scroll 50→100% | Hand fade out, next section reveals |
| Idle 3s | Subtle breathing animation (scale 1 ↔ 1.005) |

### 2.5 Fallback
- Mobile + WebGL disabled → ảnh static `hero-hand-fallback.jpg`
- Add `<noscript>` cùng ảnh

### 2.6 CTAs
- Primary: `EXPLORE COLLECTIONS` — pill outline charcoal, arrow
- Secondary: `BOOK APPOINTMENT` — text link với underline, calendar icon

### 2.7 Scroll Indicator (centered bottom)
- Text "SCROLL" caption + đường thẳng dọc 48px animate scale 0→1 lặp lại 2s
- Click → smooth scroll 100vh

---

## 3. SECTION 2 — BRAND QUOTE / MANIFESTO (mới thêm)

> Lấy cảm hứng trực tiếp từ moodboard: tile **"ART BEYOND BEAUTY"**.

Layout: 70vh, background `--c-soft-white`.
```
                    " 
              ART BEYOND BEAUTY
                    "

         Mỗi bộ nail tại HANU là một tác phẩm —
         được hoàn thiện bằng đôi tay, định hình
              bằng cảm xúc, sống cùng bạn
                  qua từng khoảnh khắc.

                  — HANU NAILS
```
- Quote mark giant 200px serif italic màu `--c-brown-100`, position absolute behind text
- Text body 18px Inter, max-width 580px center
- Scroll reveal: text mask gradient slide từ dưới lên (overflow hidden + translateY)
- Subtle pampas grass illustration line-art ở 2 góc

---

## 4. SECTION 3 — FEATURED COLLECTIONS

### 4.1 Layout — Asymmetric Horizontal Scroll
**Desktop:**
- Sticky title trái: "COLLECTIONS / 2026" + paragraph 320px
- Cards trượt ngang (snap scroll), 5 cards, mỗi card 460×620
- Mỗi card alternating height (offset Y nhau ±40px) để tạo nhịp editorial

**Card structure:**
```
┌──────────────────────┐
│                      │
│   [IMAGE 460×460]    │
│                      │
├──────────────────────┤
│  01                  │  ← số thứ tự Cormorant 64px italic
│  AURORA CHROME       │  ← title 28px tracking wide
│  Silver · Pearl ·    │  ← color dots row
│  Light Gray          │
│                      │
│  View Collection →   │  ← hover: arrow extends
└──────────────────────┘
```

### 4.2 Interaction
- Card hover: image scale 1.06, overlay caption fade-in từ dưới
- Click image: page transition curtain (đen từ phải sang) → /collections/[slug]
- Mỗi card có "hotspot dot" trên ảnh — hover → tooltip "Try this on hand"

### 4.3 Mobile: stacked vertical, full width, 80vh height each, snap-y

---

## 5. SECTION 4 — THE STUDIO (mới thêm, lấy từ moodboard)

> Moodboard có ảnh studio interior arch. Section này show không gian thật.

### 5.1 Layout split 50/50
- **Trái:** ảnh fullbleed studio (cao 720px), parallax tốc độ 0.85
- **Phải (sticky):**
  - Eyebrow "OUR SPACE"
  - Headline "A Sanctuary For Your Hands"
  - Body 3 đoạn
  - 3 micro-stats: `12 nail stations · 4 private rooms · 1 academy room`
  - CTA "Visit Our Studio →"

### 5.2 Image carousel
- Dưới có thumbnail strip 4 ảnh studio khác — click thay ảnh chính
- Crossfade 600ms

---

## 6. SECTION 5 — HALL OF ART (Gallery Preview)

### 6.1 Layout — Bento Masonry
```
┌────────┬─────────────────┬────────┐
│        │                 │        │
│  TALL  │      WIDE       │ SMALL  │
│  600   │      400        │  300   │
│        │                 │        │
│        ├────────┬────────┤        │
│        │ SMALL  │ MEDIUM │        │
│        │  300   │  400   │        │
└────────┴────────┴────────┴────────┘
```
- 7 items hỗn hợp ratio: 2:3, 3:2, 1:1, 3:4
- Image cover, border-radius 2px (rất sắc)
- Hover: filter brightness 1.05 + caption overlay từ dưới `Crystal Bloom — 2026`

### 6.2 Filter tabs (sticky top section)
```
ALL  ·  LUXURY  ·  CHROME  ·  CRYSTAL  ·  KOREAN  ·  MARBLE  ·  3D ART
```
- Tab active: underline brown + bold
- Click filter → masonry rearrange với FLIP animation 600ms

### 6.3 CTA cuối section: "Enter the Full Gallery →"

---

## 7. SECTION 6 — SERVICES

### 7.1 Layout — 6 icon cards grid (giống moodboard)
3 cột × 2 hàng desktop, 1 cột mobile.

Mỗi card:
```
┌──────────────────────┐
│      [ ICON 48px ]   │  ← line icon thanh mảnh
│                      │
│   NAIL DESIGN        │
│   ──── 40px line     │
│   Thiết kế nail theo │
│   phong cách riêng…  │
│                      │
│   From 250K          │
└──────────────────────┘
```
- Background card: `--c-soft-white`, padding 48px, hover lift -4px
- Icons: dùng custom SVG thanh mảnh (KHÔNG dùng cute icons)

### 7.2 6 dịch vụ
1. Nail Design
2. Nail Care  
3. Luxury Gel
4. Custom Design
5. Bridal Nails
6. Nail Repair

---

## 8. SECTION 7 — PRICING PREVIEW

### 8.1 Layout 3 columns "tiers" (visual hierarchy)
```
ESSENTIALS         SIGNATURE          BESPOKE
(Basic care)       (Luxury gel)       (Custom art)
From 150K          From 350K          From 600K
                                      
- Basic manicure   - Gel polish       - 3D Flower
- Nail repair      - Cat eye          - Crystal set
- Spa care         - Chrome           - Custom design
                   - French
                   
[ See pricing ]    [ See pricing ]    [ Consult ]
                   ← FEATURED ring brown
```
- Middle tier có ring border 1px brown + tag "MOST POPULAR"

### 8.2 CTA: "View Full Pricing →"

---

## 9. SECTION 8 — ACADEMY PREVIEW

### 9.1 Layout split, ảnh bên trái
- Ảnh "training session" 50% width
- Right: headline "Train Your Hands. Shape Your Taste."
- 4 course cards mini (horizontal list dưới)
- CTA "Explore Academy →"

---

## 10. SECTION 9 — TESTIMONIALS (mới thêm)

### 10.1 Layout slider
- 3 testimonials visible desktop (peek bên)
- Card: avatar tròn 56px + name + role + quote 4 dòng
- Autoplay 6s, pause on hover
- Dots indicator dưới, theme brown

---

## 11. SECTION 10 — INSTAGRAM / JOURNAL (mới thêm)

### 11.1 Layout
- Eyebrow "@HANU.NAILS"
- Grid 4 ảnh IG horizontal scroll
- Click → modal lightbox
- CTA "Follow on Instagram"

---

## 12. SECTION 11 — BOOKING CTA (Pre-footer)

### 12.1 Layout
Full-bleed background ảnh bàn tay với overlay tối 60%.
Centered text white:
```
        BEGIN YOUR
        NAIL EXPERIENCE

   Đặt lịch tại HANU Studio — chúng tôi
       sẽ tư vấn cùng bạn từ đầu.

[ BOOK APPOINTMENT ]   [ CONTACT VIA ZALO ]
```
- Height 70vh
- Parallax background (translateY scroll)

---

## 13. FOOTER

### 13.1 Pre-footer band (h: 96px)
Newsletter signup centered:
```
JOIN THE HANU LETTER
Subscribe để nhận lookbook mới mỗi tháng.

[ email@... ___________________ ] [ SUBSCRIBE → ]
```
Background: `--c-charcoal`, text white.

### 13.2 Main Footer (background `--c-cream`, padding 96px top)
5 columns desktop:
| Col 1 (logo) | Col 2 (Studio) | Col 3 (Services) | Col 4 (Academy) | Col 5 (Connect) |
|---|---|---|---|---|
| HANU NAILS wordmark + tagline + address | About · Studio · Artists · Journal | Nail Design · Nail Care · Bridal · Custom | Courses · Apply · FAQ · Contact Academy | IG · TikTok · Zalo · Email · Phone |

### 13.3 Bottom bar (h: 64px, top border hairline)
```
© 2026 HANU Nails. All rights reserved.        Privacy · Terms · Sitemap     [ Back to top ↑ ]
```

---

## 14. CÁC TRANG PHỤ — Layout breakdown

### 14.1 /collections (overview)
- Hero band 40vh với "Collections" headline + intro
- Full grid 5 collections (giant cards alternating left/right)
- Mỗi card: ảnh 60% + text panel 40% với mood + colors + CTA

### 14.2 /collections/[slug]
- Hero: ảnh fullscreen collection
- Sub-nav sticky: Overview · Gallery · Pricing · Book
- Sections: Mood paragraph · Color story strip · Gallery masonry · Price range · CTA Book

### 14.3 /gallery
- Hero band 30vh
- Sticky filter bar
- Masonry 3 cột, lazy loading, infinite scroll
- Click → modal fullscreen với swipe navigation

### 14.4 /pricing
- Hero band 30vh
- Accordion theo category (Nail Care, Gel & Design, Luxury Art)
- Mỗi item: name · description short · price · "Book" link
- FAQ section dưới

### 14.5 /academy
- Hero band 50vh với headline + ảnh academy
- 4 course cards full layout
- Curriculum breakdown timeline
- Instructor profiles
- Apply form

### 14.6 /booking
- Stepper 3 steps: Service → Date/Time → Info
- Right panel sticky summary
- Submit → confirmation screen với checkmark animation

### 14.7 /about
- Brand story narrative (long-form editorial layout)
- Philosophy section với pull-quotes
- Founder/Artists portraits grid
- Studio gallery

### 14.8 /contact
- Map left (Google Maps embed styled mono)
- Form right: name, phone, message
- Studio info card: address, hours, phone, social

---

## 15. MICROINTERACTIONS GLOBAL

| Element | Interaction |
|---|---|
| Page enter | Cream curtain peel from top, 800ms |
| Page exit | Curtain wipe down |
| Image lazy load | Blur-up + scale 1.04 → 1 |
| Button hover | Background fill from left, 320ms |
| Link hover | Underline draw left-to-right |
| Form input focus | Border bottom thicken + label float |
| Section enter viewport | Title clip-reveal + body stagger 80ms |
| Scroll | Slow parallax on hero images (0.85×) |
| Cursor on image | Custom cursor "VIEW" chip |

---

## 16. RESPONSIVE BREAKPOINTS

```
xs:  < 480px   — tinh chỉnh padding, single column
sm:  481–768   — 1 col, hero 80vh, hide 3D
md:  769–1024  — 2 col grids, simplified 3D
lg:  1025–1440 — full design
xl:  > 1440    — full design + larger type
```

---

## 17. TECH STACK CHỐT (chi tiết package)

```json
{
  "next": "15.x",
  "react": "19",
  "typescript": "5.x",
  "tailwindcss": "4.x",
  "framer-motion": "11.x",
  "gsap": "3.x",
  "@gsap/react": "2.x",
  "three": "0.16x",
  "@react-three/fiber": "9.x",
  "@react-three/drei": "10.x",
  "lucide-react": "latest",
  "clsx": "2.x",
  "tailwind-merge": "2.x"
}
```

Optional Phase 2: `@sanity/client`, `next-sanity`, `cloudinary`, `react-hook-form`, `zod`, `resend`.

---

## 18. FOLDER STRUCTURE (đã chốt)

```
hanu-nails/
├── app/
│   ├── layout.tsx                  ← root layout với Header/Footer
│   ├── page.tsx                    ← Homepage
│   ├── globals.css                 ← Tailwind + tokens
│   ├── collections/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── gallery/page.tsx
│   ├── pricing/page.tsx
│   ├── academy/page.tsx
│   ├── booking/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Footer.tsx
│   │   └── PageTransition.tsx
│   ├── home/
│   │   ├── HeroLivingHand.tsx
│   │   ├── BrandQuote.tsx
│   │   ├── FeaturedCollections.tsx
│   │   ├── TheStudio.tsx
│   │   ├── HallOfArtPreview.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── PricingPreview.tsx
│   │   ├── AcademyPreview.tsx
│   │   ├── Testimonials.tsx
│   │   ├── InstagramFeed.tsx
│   │   └── BookingCTA.tsx
│   ├── three/
│   │   ├── LivingHandScene.tsx
│   │   ├── HandModel.tsx
│   │   ├── NailMaterial.tsx
│   │   ├── Lighting.tsx
│   │   ├── CameraRig.tsx
│   │   └── HandFallback.tsx
│   ├── ui/
│   │   ├── Container.tsx
│   │   ├── LuxuryButton.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── Eyebrow.tsx
│   │   ├── Divider.tsx
│   │   ├── ImageReveal.tsx
│   │   ├── MarqueeText.tsx
│   │   └── ScrollIndicator.tsx
│   ├── gallery/
│   │   ├── GalleryMasonry.tsx
│   │   ├── GalleryFilter.tsx
│   │   └── GalleryModal.tsx
│   ├── pricing/PricingTable.tsx
│   ├── academy/CourseCard.tsx
│   └── booking/BookingForm.tsx
├── data/
│   ├── collections.ts
│   ├── gallery.ts
│   ├── services.ts
│   ├── pricing.ts
│   ├── courses.ts
│   ├── testimonials.ts
│   └── nav.ts
├── lib/
│   ├── utils.ts
│   ├── seo.ts
│   └── motion.ts
├── public/
│   ├── images/
│   │   ├── collections/
│   │   ├── gallery/
│   │   ├── studio/
│   │   └── og-hanu-nails.jpg
│   └── models/
│       └── hand.glb (placeholder later)
├── styles/
│   └── tokens.css
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 19. BUILD ORDER (thứ tự thực thi)

1. ✅ Init Next.js + cài deps
2. ✅ Setup Tailwind tokens + globals + fonts
3. ✅ Build `Container`, `LuxuryButton`, `SectionTitle`, `Eyebrow` (UI primitives)
4. ✅ Build `Header` + `MobileMenu` + `Footer`
5. ✅ Build root `layout.tsx`
6. ✅ Build data files
7. ✅ Build `HeroLivingHand` (với 3D placeholder + fallback)
8. ✅ Build từng section homepage (Brand Quote → Booking CTA)
9. ✅ Wire homepage `page.tsx`
10. ✅ Build các trang phụ (priority: collections, gallery, pricing, academy, booking, about, contact)
11. ✅ Page transitions + animations
12. ✅ SEO metadata + OG image
13. ✅ Responsive QA
14. ✅ Build production + test

---

## 20. DEFINITION OF DONE (cho phase 1)

- [ ] `npm run build` không lỗi
- [ ] Tất cả route trả 200
- [ ] Lighthouse Performance > 85, Accessibility > 95
- [ ] Mobile menu hoạt động mượt
- [ ] Hero có 3D placeholder + fallback
- [ ] Gallery filter hoạt động
- [ ] Booking form validate + submit (console.log mock)
- [ ] Header scroll behavior đúng
- [ ] Tất cả CTA dẫn đúng link
- [ ] Không có hardcoded text rời rạc — text dài đều từ data hoặc copy block riêng

---

**Hết PLAN. Bắt đầu build.**
