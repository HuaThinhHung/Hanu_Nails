# HANU NAILS — WEBSITE SPEC / PRD
## The Living Hand — Luxury Nail Art Studio & Academy

> File này dùng để đưa trực tiếp cho Claude Code / Cursor / Antigravity để build toàn bộ website HANU Nails.
> Mục tiêu: xây website nails siêu hiện đại, luxury, trắng - xám - be - nâu, có trải nghiệm bàn tay 3D sống động, show mẫu nail, đặt lịch, bảng giá, khóa học.

---

# 1. Tổng Quan Dự Án

## 1.1 Tên thương hiệu

**HANU Nails**

Có thể hiển thị trên website:

```txt
HANU
NAILS
```

Hoặc:

```txt
HANU Nails
Nail Art Studio & Academy
```

## 1.2 Concept chính

**The Living Hand**

Website không đi theo kiểu salon truyền thống. Trang chủ là một trải nghiệm nghệ thuật:

- Một bàn tay người thật / 3D siêu thực xuất hiện giữa màn hình.
- Ngón tay có chuyển động nhẹ.
- Bộ nail đẹp, sang, hiện đại.
- Khi hover hoặc scroll, bàn tay xoay nhẹ.
- Khi click vào từng ngón / từng collection, camera zoom vào nail.
- Website tạo cảm giác như gallery nghệ thuật số, không phải website tiệm nail bình thường.

## 1.3 Mục tiêu website

Website cần phục vụ 4 mục tiêu chính:

1. **Show mẫu nail đẹp**
   - Gallery hình ảnh.
   - Bộ sưu tập nail.
   - Mẫu nổi bật.
   - Mẫu theo phong cách.

2. **Đặt lịch làm nail**
   - Form đặt lịch.
   - Gửi thông tin về Zalo / Email / Google Sheet.
   - Sau này có thể kết nối Google Calendar.

3. **Hiển thị bảng giá**
   - Dịch vụ nail.
   - Combo.
   - Add-on.
   - Dịch vụ cao cấp.

4. **Giới thiệu khóa học nail**
   - Khóa học cơ bản.
   - Khóa học nâng cao.
   - Khóa học nail art.
   - Form đăng ký học.

---

# 2. Định Hướng Thẩm Mỹ

## 2.1 Moodboard đã chốt

Style đã chốt:

```txt
White - Gray - Beige - Brown
Luxury - Modern - Minimal - Soft - Artistic
```

Website cần đi theo mood:

- Sạch.
- Sang.
- Nhẹ.
- Cao cấp.
- Không màu mè quá.
- Không giống salon nail truyền thống.
- Gần với showroom luxury / spa cao cấp / fashion editorial.

## 2.2 Bảng màu chính

```css
:root {
  --color-white: #FFFFFF;
  --color-soft-white: #F8F7F4;
  --color-gray: #E6E6E6;
  --color-warm-gray: #D8D2C8;
  --color-beige: #F2EDE9;
  --color-brown: #C8B8A8;
  --color-dark-brown: #7A685A;
  --color-charcoal: #1C1C1C;
  --color-black: #000000;
}
```

## 2.3 Cảm giác thiết kế

Website phải giống:

- Luxury nail art gallery.
- Digital art museum.
- Fashion beauty campaign.
- Apple product launch.
- High-end studio profile.

Không giống:

- Website salon phổ thông.
- Web spa màu hồng.
- Web quá nhiều icon hoạt hình.
- Web bán hàng rẻ tiền.

## 2.4 Typography

Ưu tiên font sang, mảnh, editorial.

Đề xuất:

```txt
Heading:
- Playfair Display
- Cormorant Garamond
- PP Editorial New nếu có license
- Canela nếu có license

Body:
- Inter
- Neue Montreal
- Helvetica Now
- Manrope
```

Nếu dùng Google Fonts:

```txt
Heading: Cormorant Garamond
Body: Inter
```

---

# 3. Tech Stack Chốt

## 3.1 Frontend

```txt
Next.js 15
TypeScript
Tailwind CSS
App Router
```

## 3.2 Animation

```txt
GSAP
ScrollTrigger
Framer Motion
```

## 3.3 3D

```txt
Three.js
React Three Fiber
Drei
GLTF / GLB model
```

## 3.4 CMS

Giai đoạn đầu có thể dùng local data JSON.

Giai đoạn sau dùng:

```txt
Sanity CMS
```

Quản lý:

- Collections.
- Gallery.
- Services.
- Pricing.
- Courses.
- Artists.
- Blog.
- Booking leads.

## 3.5 Media

```txt
Cloudinary
```

Dùng cho:

- Ảnh nail.
- Video hero.
- Ảnh khóa học.
- Ảnh gallery.
- Ảnh artist.

## 3.6 Deploy

```txt
Vercel
```

---

# 4. Cấu Trúc Sitemap

```txt
/
├── Home
├── Collections
│   ├── Aurora Chrome
│   ├── Crystal Bloom
│   ├── Sakura Glass
│   ├── Nude Sculpture
│   └── Brown Marble
├── Gallery
├── Pricing
├── Academy
├── Booking
├── About
├── Contact
└── Admin / CMS sau này
```

---

# 5. Cấu Trúc Trang Chủ

## 5.1 Section 1 — Hero: The Living Hand

Mục tiêu: khách vào 3 giây đầu phải wow.

### Visual

- Fullscreen.
- Nền trắng xám / be rất nhẹ.
- Một bàn tay 3D siêu thực ở trung tâm.
- Nail màu trắng marble, chrome nude, crystal, nâu be.
- Bàn tay có animation nhẹ:
  - Xoay cổ tay.
  - Ngón tay cử động nhẹ.
  - Nail bắt sáng.
  - Camera drift nhẹ theo chuột.

### Text

```txt
HANU NAILS

The Living Hand

Where Nails Become Art
```

Hoặc:

```txt
HANU

Nail Art Studio & Academy

Art Beyond Beauty
```

### CTA

```txt
Explore Collections
Book Appointment
```

### Interaction

- Mouse move: hand rotate 3-8 độ.
- Scroll: camera zoom vào nail.
- Hover từng ngón: hiện tên collection.
- Click collection: đi tới section collection.

---

## 5.2 Section 2 — Featured Collections

Hiển thị 5 collection chính.

```txt
01 Aurora Chrome
02 Crystal Bloom
03 Sakura Glass
04 Nude Sculpture
05 Brown Marble
```

Mỗi card gồm:

- Ảnh nail / render.
- Tên collection.
- Mood.
- Button: View Collection.

Layout:

- Desktop: 5 card dạng horizontal scroll hoặc asymmetric grid.
- Mobile: stacked cards.

---

## 5.3 Section 3 — Hall of Art / Gallery Preview

Không gọi là “Mẫu nail thường”, gọi là:

```txt
Hall of Art
```

Mô tả:

```txt
A curated gallery of nail works crafted like tiny pieces of wearable art.
```

Hiển thị:

- Masonry grid.
- Ảnh lớn nhỏ xen kẽ.
- Hover hiện tên mẫu.
- Click mở modal fullscreen.

Filter:

```txt
All
Luxury
Chrome
Cat Eye
French
Crystal
Korean
Minimal
Brown Nude
Marble
3D Art
```

---

## 5.4 Section 4 — Services Preview

Tiêu đề:

```txt
Our Services
```

Dịch vụ chính:

```txt
Nail Design
Nail Care
Luxury Gel
Custom Design
Bridal Nails
Nail Repair
```

Tone mô tả ngắn, sang.

Ví dụ:

```txt
Nail Design
Thiết kế nail theo phong cách riêng, từ tối giản đến luxury art.
```

---

## 5.5 Section 5 — Pricing Preview

Tiêu đề:

```txt
Pricing
```

Mục tiêu: rõ giá nhưng vẫn sang.

Bảng giá mẫu:

```txt
Basic Manicure — từ 150K
Gel Polish — từ 250K
Luxury Nail Art — từ 450K
Chrome / Cat Eye — từ 350K
Stone / Crystal Design — từ 500K
Custom Art Set — báo giá theo mẫu
```

CTA:

```txt
View Full Pricing
```

---

## 5.6 Section 6 — Academy Preview

Tiêu đề:

```txt
HANU Academy
```

Copy:

```txt
Không chỉ tạo ra những bộ nail đẹp, HANU còn đào tạo thế hệ nail artist mới — nơi kỹ thuật, gu thẩm mỹ và tư duy thương hiệu được phát triển cùng nhau.
```

Khóa học:

```txt
Basic Nail Foundation
Advanced Gel & Art
Luxury Nail Design
Salon Business Mindset
```

CTA:

```txt
Explore Courses
Apply for Course
```

---

## 5.7 Section 7 — Booking CTA

Tiêu đề:

```txt
Begin Your Nail Experience
```

CTA:

```txt
Book Appointment
Contact via Zalo
```

Form ngắn:

- Họ tên.
- Số điện thoại.
- Dịch vụ quan tâm.
- Ngày muốn đặt.
- Ghi chú mẫu nail.

---

# 6. Trang Collections

## 6.1 Mục tiêu

Show bộ sưu tập nail như fashion collection.

Không gọi mẫu nail số 1, số 2. Gọi theo tên nghệ thuật.

## 6.2 Collection đề xuất ban đầu

### 01 Aurora Chrome

Mood:

```txt
Hologram, ánh bạc, tương lai, phản chiếu.
```

Colors:

```txt
Silver
Pearl
Light gray
Transparent glass
```

### 02 Crystal Bloom

Mood:

```txt
Đá pha lê, hoa 3D, trong suốt, nữ tính.
```

Colors:

```txt
White
Beige
Clear
Champagne
```

### 03 Sakura Glass

Mood:

```txt
Nhẹ, trong, nữ tính, Japan/Korean style.
```

Colors:

```txt
Soft pink
Milky white
Nude
Pearl
```

### 04 Nude Sculpture

Mood:

```txt
Tối giản, sang, clean girl, luxury nude.
```

Colors:

```txt
Beige
Brown
Milk tea
Warm gray
```

### 05 Brown Marble

Mood:

```txt
Nâu đá marble, luxury, trưởng thành, premium.
```

Colors:

```txt
Brown
Cream
Coffee
Gold accent
```

## 6.3 Trang chi tiết collection

Mỗi collection có:

- Hero image / 3D render.
- Tên collection.
- Mood description.
- Gallery.
- Recommended style.
- Price range.
- CTA Book This Design.

---

# 7. Trang Gallery

## 7.1 Layout

Masonry grid luxury.

Yêu cầu:

- Ảnh không bị crop xấu.
- Có lazy loading.
- Có filter.
- Có search.
- Có modal fullscreen.
- Có nút “Book this design”.

## 7.2 Filter

```txt
All
New
Luxury
Minimal
Chrome
Cat Eye
French
Crystal
Marble
Brown Nude
Korean
Bridal
3D Flower
Custom Art
```

## 7.3 Gallery item schema

```ts
type GalleryItem = {
  id: string
  title: string
  slug: string
  image: string
  category: string[]
  collection?: string
  priceFrom?: number
  description?: string
  isFeatured?: boolean
}
```

---

# 8. Trang Pricing

## 8.1 Nguyên tắc

Bảng giá phải rõ nhưng không làm website bị rẻ tiền.

Dùng card tối giản, nhiều khoảng trắng.

## 8.2 Pricing data mẫu

```ts
export const pricing = [
  {
    category: "Nail Care",
    items: [
      { name: "Basic Manicure", price: "150K+" },
      { name: "Spa Manicure", price: "250K+" },
      { name: "Nail Repair", price: "50K+" }
    ]
  },
  {
    category: "Gel & Design",
    items: [
      { name: "Gel Polish", price: "250K+" },
      { name: "French Tip", price: "300K+" },
      { name: "Cat Eye", price: "350K+" },
      { name: "Chrome", price: "350K+" }
    ]
  },
  {
    category: "Luxury Art",
    items: [
      { name: "Stone / Crystal Design", price: "500K+" },
      { name: "3D Flower", price: "600K+" },
      { name: "Custom Art Set", price: "Theo mẫu" }
    ]
  }
]
```

---

# 9. Trang Academy

## 9.1 Mục tiêu

Giới thiệu khóa học nail một cách cao cấp, không giống trung tâm dạy nghề đại trà.

## 9.2 Headline

```txt
HANU Academy

Train Your Hands.
Shape Your Taste.
Build Your Nail Career.
```

## 9.3 Khóa học mẫu

```ts
export const courses = [
  {
    title: "Basic Nail Foundation",
    duration: "4-6 tuần",
    level: "Beginner",
    description: "Dành cho người mới bắt đầu, học nền tảng chăm sóc móng, sơn gel, form móng và vệ sinh dụng cụ."
  },
  {
    title: "Advanced Gel & Art",
    duration: "6-8 tuần",
    level: "Intermediate",
    description: "Nâng cấp kỹ thuật gel, ombre, cat eye, chrome, đính đá và bố cục thiết kế."
  },
  {
    title: "Luxury Nail Design",
    duration: "8 tuần",
    level: "Advanced",
    description: "Tập trung vào nail art cao cấp, tư duy bộ sưu tập, phối màu và chụp portfolio."
  },
  {
    title: "Salon Business Mindset",
    duration: "Workshop",
    level: "Business",
    description: "Định giá, tư vấn khách, xây thương hiệu cá nhân và vận hành dịch vụ nail."
  }
]
```

## 9.4 CTA

```txt
Apply for Course
Contact Academy
```

---

# 10. Trang Booking

## 10.1 Form đặt lịch

Fields:

```txt
Full name
Phone / Zalo
Service
Preferred date
Preferred time
Nail style
Reference image upload
Note
```

## 10.2 Dịch vụ chọn

```txt
Nail Care
Gel Polish
Luxury Nail Art
Custom Design
Bridal Nails
Academy Consultation
```

## 10.3 Sau khi submit

Thông báo:

```txt
Cảm ơn bạn đã gửi yêu cầu đặt lịch. HANU sẽ liên hệ xác nhận trong thời gian sớm nhất.
```

## 10.4 Giai đoạn đầu

Form gửi về:

- Email.
- Google Sheet.
- Zalo link.

Giai đoạn sau:

- Google Calendar.
- CRM.
- SMS / Zalo OA.

---

# 11. Trang About

## 11.1 Nội dung

HANU không chỉ là nơi làm nail, mà là nơi biến nail thành nghệ thuật.

Copy mẫu:

```txt
HANU Nails được tạo ra với niềm tin rằng mỗi bộ nail không chỉ là một dịch vụ làm đẹp, mà là một tác phẩm nhỏ có thể phản ánh cá tính, gu thẩm mỹ và câu chuyện của mỗi người.

Chúng tôi kết hợp kỹ thuật nail hiện đại, tư duy thiết kế và trải nghiệm dịch vụ tinh tế để tạo nên một không gian nơi vẻ đẹp được nhìn bằng cảm xúc và được hoàn thiện bằng đôi tay.
```

## 11.2 Sections

- Brand story.
- Philosophy.
- Studio space.
- Artists.
- Academy mission.

---

# 12. 3D Hand Experience

## 12.1 Mục tiêu kỹ thuật

Dựng component `LivingHandScene`.

Yêu cầu:

- Render bàn tay `.glb`.
- Render nails material.
- Có light studio.
- Có camera.
- Có scroll animation.
- Có mouse interaction.
- Có fallback image trên mobile yếu.

## 12.2 Model

Folder:

```txt
/public/models/hand.glb
/public/models/nails-aurora.glb
/public/models/nails-crystal.glb
/public/models/nails-brown.glb
```

Giai đoạn MVP chưa có model thật thì dùng placeholder:

- Video render bàn tay.
- Ảnh mockup.
- Model free tạm thời.
- Sau này thay bằng model custom từ Blender.

## 12.3 Component structure

```txt
/components/three/
├── LivingHandScene.tsx
├── HandModel.tsx
├── NailMaterial.tsx
├── CameraRig.tsx
├── Lighting.tsx
└── CollectionHotspots.tsx
```

## 12.4 Interaction

```txt
Mouse move:
- Rotate hand slightly.
- Light follow cursor.

Scroll:
- Zoom camera.
- Change pose.
- Reveal collection labels.

Hover finger:
- Glow nail.
- Show collection name.

Click finger:
- Navigate to collection.
```

## 12.5 Performance

- Use compressed GLB.
- Use Draco compression.
- Lazy load 3D scene.
- Show loading screen.
- Use fallback image on mobile.
- Keep model under 5-8MB if possible.

---

# 13. UI Components

## 13.1 Core components

```txt
Header
Footer
HeroLivingHand
CollectionCard
GalleryMasonry
PricingTable
CourseCard
BookingForm
ArtistCard
SectionTitle
LuxuryButton
ImageModal
FilterTabs
```

## 13.2 Header

Desktop:

```txt
HANU
Home
Collections
Gallery
Pricing
Academy
Booking
```

Mobile:

- Logo left.
- Menu icon right.
- Fullscreen menu.

Header style:

- Transparent lúc đầu.
- Khi scroll có background blur trắng.

## 13.3 Button style

```css
.luxury-button {
  border: 1px solid #1C1C1C;
  border-radius: 999px;
  padding: 12px 24px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
```

Hover:

- Background đen.
- Text trắng.
- Smooth transition.

---

# 14. Folder Structure Đề Xuất

```txt
hanu-nails/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── collections/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── academy/
│   │   └── page.tsx
│   ├── booking/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroLivingHand.tsx
│   │   ├── FeaturedCollections.tsx
│   │   ├── HallOfArtPreview.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── PricingPreview.tsx
│   │   ├── AcademyPreview.tsx
│   │   └── BookingCTA.tsx
│   ├── gallery/
│   │   ├── GalleryMasonry.tsx
│   │   ├── GalleryFilter.tsx
│   │   └── GalleryModal.tsx
│   ├── pricing/
│   │   └── PricingTable.tsx
│   ├── academy/
│   │   └── CourseCard.tsx
│   ├── booking/
│   │   └── BookingForm.tsx
│   ├── ui/
│   │   ├── LuxuryButton.tsx
│   │   ├── SectionTitle.tsx
│   │   └── Container.tsx
│   └── three/
│       ├── LivingHandScene.tsx
│       ├── HandModel.tsx
│       ├── Lighting.tsx
│       ├── CameraRig.tsx
│       └── CollectionHotspots.tsx
├── data/
│   ├── collections.ts
│   ├── gallery.ts
│   ├── pricing.ts
│   ├── courses.ts
│   └── services.ts
├── lib/
│   ├── utils.ts
│   ├── seo.ts
│   └── animations.ts
├── public/
│   ├── images/
│   ├── videos/
│   └── models/
├── styles/
│   └── globals.css
├── package.json
├── tailwind.config.ts
└── README.md
```

---

# 15. Data Mẫu

## 15.1 Collections

```ts
export const collections = [
  {
    id: "aurora-chrome",
    title: "Aurora Chrome",
    subtitle: "A reflection of future beauty",
    description: "Chrome, hologram và ánh bạc tạo nên bộ sưu tập dành cho những người yêu vẻ đẹp hiện đại.",
    image: "/images/collections/aurora-chrome.jpg",
    colors: ["Silver", "Pearl", "Light Gray"],
    tags: ["Chrome", "Luxury", "Hologram"]
  },
  {
    id: "crystal-bloom",
    title: "Crystal Bloom",
    subtitle: "Soft light, tiny crystals, delicate art",
    description: "Bộ sưu tập lấy cảm hứng từ pha lê, hoa 3D và ánh sáng mềm.",
    image: "/images/collections/crystal-bloom.jpg",
    colors: ["White", "Clear", "Champagne"],
    tags: ["Crystal", "3D Flower", "Bridal"]
  },
  {
    id: "sakura-glass",
    title: "Sakura Glass",
    subtitle: "A gentle Korean-Japanese inspired nail story",
    description: "Trong trẻo, nhẹ nhàng, nữ tính và thanh lịch.",
    image: "/images/collections/sakura-glass.jpg",
    colors: ["Soft Pink", "Milky White", "Nude"],
    tags: ["Korean", "Minimal", "Glass"]
  },
  {
    id: "nude-sculpture",
    title: "Nude Sculpture",
    subtitle: "Minimal beauty with a sculptural touch",
    description: "Dành cho khách yêu phong cách clean girl, tinh tế và sang.",
    image: "/images/collections/nude-sculpture.jpg",
    colors: ["Beige", "Warm Gray", "Milk Tea"],
    tags: ["Nude", "Minimal", "Luxury"]
  },
  {
    id: "brown-marble",
    title: "Brown Marble",
    subtitle: "Warm brown marble for a premium look",
    description: "Tông nâu be, marble và chút ánh kim tạo cảm giác trưởng thành, cao cấp.",
    image: "/images/collections/brown-marble.jpg",
    colors: ["Brown", "Cream", "Gold"],
    tags: ["Brown", "Marble", "Luxury"]
  }
]
```

## 15.2 Services

```ts
export const services = [
  {
    title: "Nail Design",
    description: "Thiết kế nail theo phong cách riêng, từ tối giản đến luxury art."
  },
  {
    title: "Nail Care",
    description: "Chăm sóc móng, da tay và form móng sạch đẹp, an toàn."
  },
  {
    title: "Luxury Gel",
    description: "Sơn gel cao cấp với độ bóng, độ bền và màu sắc tinh tế."
  },
  {
    title: "Custom Design",
    description: "Lên mẫu riêng theo outfit, sự kiện hoặc cá tính của khách."
  },
  {
    title: "Nail Training",
    description: "Đào tạo nền tảng và nâng cao cho học viên muốn theo nghề nail."
  }
]
```

---

# 16. SEO

## 16.1 Meta homepage

```txt
Title:
HANU Nails — Luxury Nail Art Studio & Academy

Description:
HANU Nails là nail art studio & academy theo phong cách luxury, hiện đại, chuyên thiết kế nail nghệ thuật, đặt lịch làm nail và đào tạo học viên nail.
```

## 16.2 Keywords

```txt
hanu nails
nail art studio
nail đẹp
nail luxury
mẫu nail đẹp
đặt lịch làm nail
khóa học nail
học nail
nail academy
nail design
```

## 16.3 Open Graph

Cần có ảnh OG:

```txt
/public/images/og-hanu-nails.jpg
```

Kích thước:

```txt
1200x630
```

---

# 17. Responsive

## Desktop

- Tập trung hiệu ứng 3D.
- Layout rộng.
- Typography lớn.

## Tablet

- Giữ hình ảnh lớn.
- Giảm animation 3D.

## Mobile

- Ưu tiên tốc độ.
- Hero có thể dùng video hoặc ảnh render thay vì WebGL nặng.
- CTA đặt lịch luôn dễ thấy.
- Gallery dễ lướt.

---

# 18. Accessibility

- Có alt text cho ảnh.
- Contrast đủ rõ.
- Button có focus state.
- Không phụ thuộc hoàn toàn vào hover.
- Có fallback khi WebGL không chạy.

---

# 19. Animation Direction

## Hero

- Fade in chậm.
- Hand reveal bằng blur / light.
- Text hiện từng dòng.
- Scroll zoom mượt.

## Gallery

- Image reveal nhẹ.
- Hover scale 1.03.
- Modal fade in.

## Collection

- Card parallax nhẹ.
- Image movement theo mouse.

## Booking

- Form clean, không animation quá nhiều.

---

# 20. MVP Roadmap

## Phase 1 — Luxury Website Base

Build:

- Next.js project.
- Tailwind theme.
- Header / footer.
- Home page.
- Gallery.
- Pricing.
- Academy.
- Booking.
- Responsive.

Chưa cần 3D thật. Có thể dùng ảnh / video placeholder.

## Phase 2 — 3D Living Hand

Build:

- LivingHandScene.
- Load GLB.
- Lighting.
- Mouse interaction.
- Scroll animation.
- Fallback mobile.

## Phase 3 — CMS

Build:

- Sanity schema.
- Collections CMS.
- Gallery CMS.
- Pricing CMS.
- Courses CMS.
- Booking leads.

## Phase 4 — Advanced Experience

Build:

- Change nail collection realtime.
- Finger hotspots.
- Camera zoom into nail.
- AI try-on architecture.
- Upload reference image.

---

# 21. Prompt Cho Claude Code Build Dự Án

Dùng prompt này sau khi tạo project:

```txt
You are building the HANU Nails website based on SPEC.md.

Goal:
Create a luxury modern nail art studio & academy website with a soft white-gray-beige-brown visual system and a future-ready 3D hand experience.

Tech stack:
- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- React Three Fiber
- Drei
- Local data first, Sanity CMS later

Build requirements:
1. Create the full folder structure described in SPEC.md.
2. Implement all main pages:
   - Home
   - Collections
   - Collection detail
   - Gallery
   - Pricing
   - Academy
   - Booking
   - About
   - Contact
3. Implement luxury UI system:
   - white/gray/beige/brown color palette
   - elegant typography
   - large spacing
   - editorial layout
   - smooth transitions
4. Implement homepage sections:
   - HeroLivingHand
   - FeaturedCollections
   - HallOfArtPreview
   - ServicesPreview
   - PricingPreview
   - AcademyPreview
   - BookingCTA
5. For the 3D hand:
   - Create a React Three Fiber scene component.
   - Use placeholder geometry/model if hand.glb is not available.
   - Make the structure ready to replace with /public/models/hand.glb.
   - Add mouse movement camera/hand rotation.
   - Add soft studio lighting.
   - Add fallback for mobile.
6. Use local TypeScript data files first:
   - collections.ts
   - gallery.ts
   - pricing.ts
   - courses.ts
   - services.ts
7. Create responsive mobile layout.
8. Add SEO metadata.
9. Keep code clean, modular, production-ready.
10. Do not make the site look like a cheap salon template. It must feel like a luxury digital nail gallery.

Important visual direction:
- Inspired by high-end beauty campaigns, digital galleries, Apple-like product launch pages, luxury fashion websites.
- Avoid pink salon style.
- Avoid crowded UI.
- Use minimal copy, strong imagery, refined typography.

Start by creating the project structure and implementing the homepage fully.
```

---

# 22. Prompt Cho Claude Khi Nâng Cấp 3D

```txt
Upgrade the HANU Nails homepage 3D hero.

Current goal:
Create "The Living Hand" experience.

Requirements:
1. Use React Three Fiber and Drei.
2. Load /public/models/hand.glb if available.
3. If model is missing, render an elegant placeholder hand-like composition and keep the code ready for GLB replacement.
4. Add soft white/beige studio lighting.
5. Add reflective nail materials:
   - pearl white
   - chrome silver
   - nude brown
   - glass crystal
6. Add mouse movement interaction:
   - hand rotates slightly with cursor
   - camera drifts subtly
7. Add scroll animation with GSAP ScrollTrigger:
   - initial full hand view
   - slow zoom into nails
   - reveal collection labels
8. Add performance fallback:
   - disable heavy 3D on small mobile
   - show static hero image or video instead
9. Code must be modular:
   - LivingHandScene.tsx
   - HandModel.tsx
   - NailMaterial.tsx
   - Lighting.tsx
   - CameraRig.tsx
   - CollectionHotspots.tsx
```

---

# 23. Prompt Cho Claude Khi Thêm CMS Sanity

```txt
Add Sanity CMS to the HANU Nails project.

Need schemas:
1. collection
2. galleryItem
3. service
4. pricingCategory
5. course
6. artist
7. bookingLead

Requirements:
- Keep local data fallback.
- Create lib/sanity.ts.
- Create GROQ queries.
- Replace pages gradually with CMS data.
- Add image optimization.
- Keep TypeScript types clean.
```

---

# 24. Checklist Hoàn Thành

## UI

- [ ] Đúng mood trắng / xám / be / nâu.
- [ ] Luxury, modern, minimal.
- [ ] Không giống template salon rẻ.
- [ ] Typography sang.
- [ ] Khoảng trắng đẹp.

## Pages

- [ ] Home.
- [ ] Collections.
- [ ] Collection detail.
- [ ] Gallery.
- [ ] Pricing.
- [ ] Academy.
- [ ] Booking.
- [ ] About.
- [ ] Contact.

## Features

- [ ] Gallery filter.
- [ ] Booking form.
- [ ] Pricing table.
- [ ] Course cards.
- [ ] Collection pages.
- [ ] 3D hand placeholder.
- [ ] 3D hand ready for GLB.
- [ ] Responsive mobile.
- [ ] SEO metadata.

## Future

- [ ] Sanity CMS.
- [ ] Cloudinary.
- [ ] Google Sheet booking.
- [ ] Google Calendar booking.
- [ ] Zalo integration.
- [ ] AI try-on nail.
- [ ] Nail collection configurator.

---

# 25. Ghi Chú Quan Trọng Cho Dev

1. Website này không phải salon template.
2. Hình ảnh là linh hồn của website.
3. Nếu chưa có ảnh thật, dùng placeholder đẹp nhưng giữ layout cao cấp.
4. Không dùng màu hồng truyền thống.
5. Không dùng icon quá cute.
6. Không dùng quá nhiều text.
7. Ưu tiên visual, spacing, motion.
8. 3D là điểm nhấn nhưng không được làm website chậm.
9. Mobile phải mượt.
10. Booking phải dễ dùng.

---

# 26. Định Nghĩa Thành Công

Website thành công khi người xem có cảm giác:

```txt
Đây không phải tiệm nail bình thường.
Đây là một thương hiệu nghệ thuật nail cao cấp.
```

3 giây đầu phải tạo được ấn tượng bằng:

- Bàn tay sống động.
- Nail đẹp.
- Màu trắng xám be nâu sang.
- Typography tối giản.
- Motion mượt.
- Không gian luxury.

---

# 27. Phiên Bản Ngắn Đưa Cho Team

```txt
Build HANU Nails as a luxury nail art studio & academy website.

Concept:
The Living Hand — a modern 3D hand hero experience where nails are presented as wearable art.

Style:
White, gray, beige, brown. Luxury, minimal, modern, soft, premium.

Main pages:
Home, Collections, Gallery, Pricing, Academy, Booking, About, Contact.

Main features:
3D hand hero, nail collections, gallery filter, pricing table, course page, booking form.

Tech:
Next.js 15, TypeScript, Tailwind, GSAP, Framer Motion, React Three Fiber, Drei, Sanity later, Vercel.

Important:
Do not make it look like a normal nail salon website. Make it feel like a digital art gallery / luxury beauty campaign.
```
