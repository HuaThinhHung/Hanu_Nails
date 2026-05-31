# PLAN DESIGN REDESIGN WEBSITE HANU NAILS

> Dựa trên moodboard `public/Hanu.png`.
> Mục tiêu: nâng website từ bản demo hiện tại thành trải nghiệm luxury minimal, đúng tinh thần HANU Nails: white / gray / beige / brown, modern, calm, editorial, art-focused.

---

## 1. Tinh thần thiết kế chính

### Direction

HANU Nails không nên đi theo kiểu website salon nail phổ thông nhiều màu, nhiều hiệu ứng, nhiều CTA. Website cần giống một studio nghệ thuật cao cấp:

- Ít màu, nhiều khoảng trắng
- Typography lớn, mảnh, sang nhưng không phô
- Hình ảnh bàn tay và nail là trung tâm
- Layout dạng editorial collage, không quá đều
- Đường kẻ mảnh, chia khối rõ
- Cảm giác studio: sạch, mềm, có ánh sáng, có texture

### Keywords

- Luxury
- Modern
- Minimal
- Editorial
- Calm
- Sculptural
- Art beyond beauty
- Where nails become art

---

## 2. Design System mới

### Color Palette

Theo moodboard:

| Token | Hex | Vai trò |
|---|---|---|
| White | `#FFFFFF` | Nền chính, khoảng thở |
| Gray | `#E6E6E6` | Border, surface phụ, background lạnh |
| Beige | `#F2EDE9` | Nền section mềm |
| Brown | `#CDBBAF` | Accent nhẹ, card, texture |
| Dark Brown | `#7A685A` | Text phụ, line, nút outline |
| Ink | `#111111` | Text chính, logo, CTA chính |

Lưu ý: moodboard thiên beige/cream, nhưng khi lên web cần cân bằng bằng trắng, xám và đen để tránh cảm giác một màu.

### Typography

Quyết định cập nhật:

- Font chính toàn website: `Quicksand`.
- Không dùng lại `Manrope`, `Plus Jakarta Sans`, `Nunito Sans` cho body vì cảm giác còn cứng so với ngành nails/beauty.
- Không dùng serif mảnh cho heading chính trong giai đoạn này vì dễ làm chữ Việt khó đọc trên mobile.
- `Quicksand` có nét bo tròn, mềm, thân thiện, hợp website nails hơn và vẫn rõ dấu tiếng Việt.
- Body mặc định nâng lên khoảng `18.5px`, line-height khoảng `1.82`.
- Các chữ nhỏ như menu, label, tag, CTA được nâng size để khách đọc dễ hơn trên điện thoại.
- Letter-spacing giảm lại, tránh kiểu chữ bị kéo quá rộng làm tiếng Việt khó nhìn.
- Đã thêm lớp typography/CTA dùng chung: `hanu-eyebrow`, `hanu-heading`, `hanu-copy`, `hanu-button`, `hanu-text-link`.
- Homepage, trang mẫu nail và booking đang được nâng theo hệ này để tránh mỗi component một kiểu chữ.

Moodboard dùng serif cao, mảnh, letter spacing rộng.

Đề xuất:

- Display / Logo / Heading: serif mảnh, kiểu Didot / Cormorant / Playfair
- Body: sans-serif gọn, nhẹ, dễ đọc
- Heading dùng chữ lớn nhưng ít chữ
- Caption dùng uppercase, letter spacing rộng

Scale:

- Hero logo: 96-160px desktop, 64-88px mobile
- Section heading: 56-96px desktop, 38-56px mobile
- Card title: 28-40px
- Body: 14-16px
- Caption: 10-12px uppercase

### Layout Rules

- Grid chính: 12 columns desktop
- Container max: 1440px
- Page padding desktop: 64-80px
- Mobile padding: 20-24px
- Section spacing: 96-144px desktop, 64-88px mobile
- Dùng line border `1px` để chia layout như moodboard
- Không dùng card bo tròn lớn; nếu có radius chỉ 0-4px
- Không dùng shadow mạnh
- Hạn chế gradient; ưu tiên ảnh, texture, nền trắng/beige thật

---

## 3. Asset Direction

### Ảnh cần có

Website cần thay placeholder bằng ảnh thật hoặc ảnh AI theo moodboard:

1. Hero hand image: bàn tay model, nail dài, tone nude/chrome/brown, nền sáng
2. Studio interior: quầy lễ tân, ghế nail, ánh sáng cong, tone trắng be
3. Nail close-up: marble, chrome, crystal, pearl
4. Texture set: silk, marble, plaster, pampas, wood
5. Academy image: bàn học nail, dụng cụ sạch, học viên/artist

### Style ảnh

- Ánh sáng mềm, high-key
- Nền trắng/beige/xám
- Không quá saturated
- Không filter hồng quá mạnh
- Nail phải rõ form, chất liệu, độ bóng
- Crop editorial: close-up tay, khoảng trắng lớn, không quá stock

---

## 4. Redesign Homepage

### 4.1 Header

Target:

- Header cực tối giản như moodboard
- Logo nhỏ trái: `HANU`
- Nav giữa hoặc phải: Home / Collection / About / Academy / Price / Booking
- Menu icon mảnh
- Nền trắng trong suốt nhẹ ở top, blur khi scroll

Nâng cấp:

- Giảm độ dày top bar hiện tại
- Có thể bỏ top bar để giống moodboard hơn
- CTA Booking không cần quá nổi; dùng text link hoặc outline button nhỏ
- Active link dùng line mảnh thay vì màu mạnh

### 4.2 Hero - The Living Hand

Moodboard hero có bố cục:

- Text trái: `THE / LIVING / HAND`
- Ảnh hand lớn bên phải
- Nav trên cùng nhỏ
- Nút Discover nhỏ, outline
- Số slide `01` góc phải dưới

Plan mới:

- Hero height: 100vh desktop, 86-92vh mobile
- Left: logo/title lớn, tagline ngắn
- Right: hand image/SVG/3D scene chiếm 55-60%
- Background trắng/beige rất nhẹ
- Có vertical line hoặc horizontal line mảnh
- CTA: `DISCOVER` và `BOOKING`
- Thêm slide number hoặc collection tag

Không nên:

- Dùng nhiều floating tag
- Dùng badge quá nhiều
- Dùng gradient nổi bật

### 4.3 Moodboard Strip

Thêm section ngay sau hero:

- 5 ô màu palette
- 4 texture: silk / marble / plaster / wood
- Quote nhỏ: `ART BEYOND BEAUTY`

Layout dạng collage ngang giống moodboard.

Mục tiêu:

- Cho khách cảm nhận gu HANU trong 3 giây
- Tạo khác biệt với salon nail phổ thông

### 4.4 Brand Quote

Giữ section `ART BEYOND BEAUTY`, nhưng redesign:

- Nền trắng xám texture nhẹ
- Text serif uppercase, letter spacing rộng
- Quote mark nhỏ, không quá trang trí
- Có 1 line vertical ở giữa

Copy:

```text
ART
BEYOND
BEAUTY

HANU không chỉ là nơi làm đẹp,
mà còn là nơi đôi tay được kể một câu chuyện thẩm mỹ riêng.
```

### 4.5 Collections

Hiện tại grid card đã có, nhưng cần nâng cấp theo moodboard:

- Layout collage không đều: 1 card lớn + 2 card nhỏ + 1 text block
- Card không bo tròn
- Ảnh chiếm 80%, text rất gọn
- Dùng số thứ tự 01 / 02 / 03
- Hover: ảnh zoom rất nhẹ, text underline

Collection nên có:

- Pearl Chrome
- Brown Marble
- Crystal Bloom
- Nude Sculpture
- Sakura Glass

### 4.6 Services

Moodboard có service icon rất minimal.

Nâng cấp:

- Section nền trắng
- 4 service chính trên desktop
- Icon line mảnh
- Có vertical dividers
- Text cực ngắn

Service nên gom:

1. Nail Design
2. Nail Care
3. Nail Training
4. Custom Design

### 4.7 Studio Section

Moodboard có ảnh interior rất mạnh. Trang hiện tại cần biến studio thành section quan trọng hơn.

Layout:

- Left: ảnh studio full-bleed trong grid
- Right: headline `LUXURY NAIL ART STUDIO & ACADEMY`
- Body ngắn
- CTA `LEARN MORE`

Nâng cấp:

- Dùng ảnh studio thật hoặc AI render
- Không đặt vào card
- Dùng line divider và caption nhỏ

### 4.8 Academy

Academy cần không giống course marketplace. Nên giống studio đào tạo cao cấp.

Layout:

- 1 ảnh học viên/artist
- 4 course dạng list editorial
- Mỗi course có number, duration, level
- CTA tư vấn

### 4.9 Booking CTA

Không nên quá dark overlay như hiện tại. Moodboard nhẹ, sạch hơn.

Plan:

- Background beige/white
- Ảnh hand close-up bên phải
- Form nhỏ bên trái hoặc modal booking
- CTA: `BOOK YOUR APPOINTMENT`

---

## 5. Redesign Pages

### Collections Page

Nâng cấp thành editorial catalog:

- Hero: `COLLECTION / 2026`
- Grid collage 5 collections
- Mỗi collection có mood, palette, giá từ
- Có CTA booking từng collection

### Collection Detail

Cấu trúc:

1. Hero split: text + image
2. Mood / Palette
3. Gallery detail
4. Suitable for
5. Price from
6. Booking CTA

### Gallery Page

Nâng cấp:

- Masonry thật
- Filter dạng text uppercase, không button quá dày
- Click ảnh mở modal fullscreen
- Có tag: Chrome / Crystal / Marble / Bridal

### Pricing Page

Nâng cấp:

- Không dùng pricing card kiểu SaaS
- Dùng bảng editorial có line mảnh
- Chia 3 nhóm:
  - Nail Care
  - Gel & Design
  - Luxury Art
- FAQ dưới cùng

### Academy Page

Nâng cấp:

- Hero có ảnh academy
- Course list dạng editorial
- Section `Who this is for`
- Section `What you will learn`
- FAQ
- CTA tư vấn

### About Page

Nâng cấp:

- Story ngắn
- Studio interior
- Artists
- Journal notes
- Trust elements

### Booking Page

Nâng cấp:

- Form 2 cột desktop, 1 cột mobile
- Step feeling:
  1. Chọn dịch vụ
  2. Chọn ngày giờ
  3. Để lại thông tin
- Sau submit show confirmation rõ
- Sau này nối Google Sheets/Zalo/email

---

## 6. Component Upgrade Plan

### Components cần tạo mới

```text
components/brand/MoodboardPalette.tsx
components/brand/TextureCollage.tsx
components/brand/EditorialQuote.tsx
components/home/HeroEditorial.tsx
components/home/MoodboardStrip.tsx
components/gallery/GalleryModal.tsx
components/booking/BookingWizard.tsx
components/ui/EditorialLine.tsx
components/ui/NumberLabel.tsx
components/ui/TextureBlock.tsx
```

### Components cần nâng cấp

```text
Header.tsx
Footer.tsx
HeroLivingHand.tsx
FeaturedCollections.tsx
ServicesPreview.tsx
PricingPreview.tsx
AcademyPreview.tsx
BookingCTA.tsx
PlaceholderImage.tsx
```

### Data cần bổ sung

```text
data/textures.ts
data/studio.ts
data/faqs.ts
data/bookingOptions.ts
```

---

## 7. Interaction Plan

Interactions phải nhẹ, sang, không lố:

- Page reveal: opacity + translateY 16px
- Image hover: scale 1.03, duration 900-1200ms
- Link hover: underline draw
- Header scroll: height giảm nhẹ, blur background
- Gallery modal: fade + scale nhỏ
- Booking form: inline validation, success state
- Cursor custom chỉ nên làm sau, không ưu tiên trước

Không dùng:

- Parallax quá mạnh
- Animation bounce
- Gradient orb
- Card shadow dày
- CTA nhiều màu

---

## 8. Responsive Plan

### Desktop

- Editorial 12-column
- Collage layout
- Ảnh lớn, chữ lớn, khoảng trắng rộng

### Tablet

- Grid 2 cột
- Header compact
- Hero split giữ được nhưng giảm kích thước ảnh

### Mobile

- Hero: text trước, ảnh sau hoặc ảnh làm background nhẹ
- Section padding 64-80px
- Collection card full width
- Services dạng 2 cột hoặc list
- Booking form 1 cột
- Typography không scale theo viewport, dùng breakpoint rõ

---

## 9. SEO & Conversion Plan

### SEO

- Metadata riêng từng page
- Schema LocalBusiness cho salon
- Schema Course cho academy
- Sitemap đã có, tiếp tục mở rộng khi thêm blog/journal
- Alt text cho ảnh thật

### Conversion

- Booking CTA xuất hiện ở:
  - Hero
  - Collection detail
  - Pricing
  - Academy
  - Footer
- Form booking ngắn, không hỏi quá nhiều
- Trust elements:
  - Vệ sinh dụng cụ
  - Artist tư vấn 1-1
  - Giá minh bạch
  - Studio tại TP.HCM

---

## 10. Implementation Roadmap

### Phase 1 - Design Foundation

- Chuẩn hóa token màu theo moodboard
- Chỉnh typography scale
- Làm lại Header/Footer theo minimal editorial
- Tạo component line/number/texture dùng chung

### Phase 2 - Homepage Redesign

- Làm lại Hero theo layout `THE LIVING HAND`
- Thêm Moodboard Strip
- Redesign Brand Quote
- Redesign Collections collage
- Redesign Services icon section
- Redesign Studio section

### Phase 3 - Inner Pages

- Redesign Collections
- Redesign Gallery + modal
- Redesign Pricing
- Redesign Academy
- Redesign Booking
- Redesign About

### Phase 4 - Assets

- Thay placeholder bằng ảnh thật/AI đúng moodboard
- Tạo bộ texture public:
  - silk
  - marble
  - plaster
  - wood
  - pampas
- Optimize image bằng `next/image`

### Phase 5 - Integration

- Booking form gửi Google Sheets / Email / Zalo
- Newsletter storage
- Analytics event cho CTA
- LocalBusiness schema

### Phase 6 - QA

- Kiểm tra mobile 390px
- Kiểm tra tablet 768px
- Kiểm tra desktop 1440px
- Kiểm tra Lighthouse
- Kiểm tra link chết
- Kiểm tra form validation

---

## 11. Ưu tiên code trước

Thứ tự nên làm ngay:

1. Redesign Header/Footer
2. Redesign Hero theo moodboard
3. Thêm Moodboard Strip
4. Redesign Services section
5. Redesign Studio section
6. Redesign Gallery page
7. Redesign Booking page
8. Thay ảnh placeholder bằng asset thật/AI

---

## 12. Definition of Done

Website được xem là hoàn thiện design khi:

- Nhìn trang đầu tiên đã nhận ra tinh thần moodboard HANU
- Không còn cảm giác template SaaS/card-heavy
- Hero có ảnh tay/nail làm tín hiệu chính
- Màu sắc giữ white/gray/beige/brown nhưng vẫn có contrast
- Mọi CTA booking rõ, không hard sell
- Mobile không vỡ text, không chồng layout
- Không còn link chết trong header/footer
- Lint và typecheck pass
- Build pass khi máy đủ RAM/pagefile
