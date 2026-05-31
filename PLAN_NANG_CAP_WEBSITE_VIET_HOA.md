# PLAN NANG CAP WEBSITE HANU NAILS - BAN TIENG VIET DE SU DUNG

## 1. Muc tieu website

Website HANU Nails can phuc vu 3 viec chinh:

1. Khach vao xem nhanh mau nail dep.
2. Khach de hieu dich vu, gia tham khao va cach dat lich.
3. Vo Hung co the cap nhat hinh anh nail that, mau moi, bo suu tap moi mot cach don gian.

Huong uu tien: dep, sang, nhung khong kho dung. Website phai ro rang cho khach Viet Nam, dac biet tren dien thoai.

---

## 2. Hai loai noi dung hinh anh chinh

### Loai 1: Bo suu tap mau nails

Day la nhom mau duoc sap xep co chu de, dung de khach tham khao gu va chon phong cach.

Vi du:

- Nail nude thanh lich
- Nail chrome / cat eye
- Nail di tiec
- Nail co dau
- Nail marble
- Nail don gian hang ngay
- Nail dinh da / luxury art

Moi bo suu tap nen co:

- Ten bo suu tap
- Mo ta ngan bang tieng Viet
- 6-12 anh mau
- Gia tu
- Phong cach phu hop
- Nut "Dat lich lam mau nay"

### Loai 2: Mau nail thu cong chup that

Day la cac bo nail vo Hung lam that cho khach, chup len va hien len trang chu.

Muc dich:

- Tang do tin cay
- Cho khach thay tay nghe that
- Tao cam giac tiem dang hoat dong, co mau moi lien tuc
- Bien trang chu thanh noi cap nhat san pham moi

Moi bai/mau nail that nen co:

- Anh chinh
- Ten mau hoac mo ta ngan
- Phong cach: nude, chrome, co dau, dinh da, cat eye...
- Ngay dang
- Gia tham khao neu co
- Nut "Hoi mau nay"

---

## 3. Cau truc website de khach de dung

### Menu chinh

Nen dung tieng Viet:

- Trang chu
- Mau nail
- Bo suu tap
- Bang gia
- Khoa hoc
- Ve HANU
- Dat lich

Neu muon giu brand sang, co the dung song song:

- Mau nail
- Collections

Nhung voi khach Viet, uu tien tieng Viet.

---

## 4. Cau truc trang chu moi

### Section 1: Hero

Muc tieu: Vao la hieu day la tiem nail dep, co the xem mau va dat lich.

Noi dung de xuat:

```text
HANU NAILS
Nail art studio & academy

Mau nail thanh lich, hien dai va duoc thuc hien thu cong theo tung doi tay.
```

Nut:

- Xem mau nail
- Dat lich

Anh:

- Anh tay nail dep nhat, uu tien anh that cua tiem.

### Section 2: Mau nail moi lam

Day la section rat quan trong.

Tieu de:

```text
MAU NAIL MOI LAM
Nhung bo nail thu cong duoc HANU hoan thien gan day.
```

Layout:

- Desktop: masonry/grid 3-4 cot
- Mobile: 2 cot hoac 1 cot lon
- Moi anh co tag nho: Chrome, Nude, Co dau, Dinh da...
- Click vao anh de mo modal xem lon
- Nut "Hoi mau nay" / "Dat lich mau nay"

### Section 3: Bo suu tap noi bat

Tieu de:

```text
BO SUU TAP MAU NAIL
Chon nhanh phong cach phu hop voi ban.
```

Card:

- Nail nude thanh lich
- Nail chrome / cat eye
- Nail di tiec
- Nail co dau
- Nail marble
- Nail dinh da

Moi card co:

- Anh dai dien
- Ten bo suu tap
- Mo ta 1 dong
- Gia tu

### Section 4: Dich vu

Nen don gian, khach doc la hieu:

- Cham soc mong
- Son gel
- Ve nail / thiet ke theo mau
- Dinh da / hoa bot / 3D
- Nail co dau
- Dao tao hoc vien

### Section 5: Bang gia tom tat

Khong can qua dai tren trang chu.

Hien:

- Cham soc mong: tu 150K
- Son gel: tu 250K
- Cat eye / chrome: tu 350K
- Custom art: bao gia theo mau
- Bridal set: tu 800K

Nut:

- Xem bang gia day du

### Section 6: Khong gian / Uy tin

Noi dung:

- Dung cu sach
- Tu van mau theo form tay
- Lam ky, khong chay so luong
- Co dao tao hoc vien

### Section 7: Dat lich

Form don gian:

- Ho ten
- So dien thoai
- Dich vu muon lam
- Ngay gio mong muon
- Gui anh mau tham khao
- Ghi chu

Nut:

- Gui yeu cau dat lich
- Chat Zalo

---

## 5. Trang Mau Nail

Day la trang quan trong nhat sau trang chu.

Chuc nang:

- Hien tat ca mau nail that da lam
- Loc theo phong cach
- Tim kiem ten/tag
- Click xem anh lon
- Dat lich theo mau

Bo loc:

- Tat ca
- Nude
- Chrome
- Cat eye
- French
- Marble
- Co dau
- Dinh da
- Don gian
- Di tiec

Moi mau nail:

- Anh
- Tag phong cach
- Gia tham khao
- Nut "Hoi mau nay"

---

## 6. Trang Bo Suu Tap

Khac voi "Mau nail", trang nay gom cac nhom concept.

Vi du:

1. Nude Everyday
2. Pearl Chrome
3. Brown Marble
4. Crystal Bridal
5. Korean Glass
6. Luxury Party

Moi bo suu tap co trang chi tiet:

- Hero image
- Mo ta phong cach
- Ai phu hop
- Gallery anh
- Gia tu
- Nut dat lich

---

## 7. Quan ly du lieu de vo Hung cap nhat de

Giai phap ngan han:

Dung file data trong code:

```text
data/nail-works.ts
data/nail-collections.ts
```

Moi mau nail that:

```ts
{
  id: "nude-pearl-01",
  title: "Nude pearl nhẹ nhàng",
  image: "/images/works/nude-pearl-01.jpg",
  tags: ["Nude", "Pearl", "Đi làm"],
  priceFrom: "350K",
  date: "2026-06-01",
  isFeatured: true
}
```

Giai phap sau nay:

- Dung Google Sheet lam CMS don gian
- Hoac Sanity/Notion CMS
- Hoac upload anh qua folder public/images/works

Uu tien hien tai: lam data file de nhanh, de kiem soat.

---

## 8. Thu muc anh de de quan ly

Nen tao cau truc:

```text
public/images/
  works/
    nude-pearl-01.jpg
    chrome-cat-eye-01.jpg
  collections/
    nude-everyday.jpg
    pearl-chrome.jpg
  studio/
    studio-01.jpg
  academy/
    academy-01.jpg
```

Quy uoc dat ten:

- Viet thuong
- Khong dau
- Dung dau gach ngang
- Co so thu tu

Vi du:

```text
nude-pearl-01.jpg
brown-marble-02.jpg
bridal-crystal-01.jpg
```

---

## 9. Nang cap UX tieng Viet

Tat ca nut nen dung tieng Viet:

- Xem mau nail
- Xem bo suu tap
- Dat lich
- Hoi mau nay
- Xem bang gia
- Tu van khoa hoc
- Chat Zalo

Tranh dung qua nhieu tieng Anh nhu:

- Explore
- Discover
- Enter Gallery
- Book Appointment

Co the giu mot so cum brand:

- HANU Nails
- Nail Art Studio
- Academy

---

## 10. Ke hoach code nang cap

### Phase 1: Chuyen UX sang tieng Viet

- Doi menu sang tieng Viet
- Doi CTA sang tieng Viet
- Doi heading/body tren homepage sang tieng Viet
- Footer sang tieng Viet

### Phase 2: Them he thong "Mau nail moi lam"

- Tao `data/nail-works.ts`
- Tao component `LatestNailWorks.tsx`
- Hien section nay ngay sau hero
- Them tag/filter co ban
- Nut "Hoi mau nay"

### Phase 3: Tach "Mau nail" va "Bo suu tap"

- Tao route `/mau-nail`
- Giu `/collections` cho bo suu tap hoac doi sang `/bo-suu-tap`
- Gallery page co the chuyen thanh trang xem tat ca anh

### Phase 4: Nang cap dat lich

- Form co truong chon mau quan tam
- Cho phep paste/link anh tham khao
- Nut Zalo kem noi dung mau
- Sau submit hien thong bao tieng Viet ro rang

### Phase 5: Thay anh that

- Them anh nail that cua vo Hung vao `public/images/works`
- Them anh collection vao `public/images/collections`
- Dung `next/image`
- Viet alt text tieng Viet

### Phase 6: SEO local

- Tu khoa:
  - tiem nail dep
  - mau nail dep
  - nail art
  - dat lich lam nail
  - hoc nail
  - nail studio
- Them LocalBusiness schema
- Them metadata rieng cho tung bo suu tap

---

## 11. Thu tu uu tien nen lam ngay

1. Viet hoa toan bo website.
2. Them section "Mau nail moi lam" tren trang chu.
3. Tao trang `/mau-nail`.
4. Tao data nail works.
5. Doi CTA thanh "Hoi mau nay" va "Dat lich".
6. Tao cau truc anh that trong `public/images/works`.
7. Sau do moi toi gallery modal, filter nang cao, CMS.

---

## 12. Dinh nghia ban hoan thien

Website dat yeu cau khi:

- Khach vao mobile la biet bam dau de xem mau nail.
- Trang chu co anh nail that moi lam.
- Co bo suu tap mau nail ro rang.
- Co bang gia tham khao.
- Co nut dat lich/Chat Zalo o moi diem quan trong.
- Vo Hung co the them mau nail moi ma khong phai sua qua nhieu code.
- Giao dien van giu style HANU: trang, xam, beige, nau, toi gian, hien dai.
