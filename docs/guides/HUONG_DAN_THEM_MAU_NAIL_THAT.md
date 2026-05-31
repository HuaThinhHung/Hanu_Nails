# Huong dan them mau nail chup that

Muc tieu: vo Hung co the chup mau nail that va dua len website o khu "Mau nail moi lam".

## 1. Thu muc anh

Them anh vao:

```text
public/images/works/
```

Neu chua co folder, tao:

```text
public/images/works
```

## 2. Dat ten file

Nen dat ten khong dau, viet thuong:

```text
nude-pearl-01.jpg
brown-marble-01.jpg
chrome-cat-eye-01.jpg
bridal-crystal-01.jpg
```

## 3. Them vao data

Mo file:

```text
data/nailWorks.ts
```

Them 1 item moi:

```ts
{
  id: "nude-pearl-02",
  title: "Nude pearl nhẹ nhàng",
  description: "Nền nude trong, điểm pearl nhẹ cho tay sáng và sạch.",
  tags: ["Nude", "Pearl", "Đi làm"],
  priceFrom: "350K",
  date: "2026-06-02",
  image: "/images/works/nude-pearl-02.jpg",
  moodboardCrop: "hand",
  isFeatured: true
}
```

Neu chua co anh that, co the bo dong `image`, website se tam dung anh moodboard.

## 4. Noi anh se hien thi

- Trang chu: section "Mau nail moi lam"
- Trang `/mau-nail`: tat ca mau nail da them

## 5. Ghi chu

Anh nen chup doc ti le 4:5 hoac 3:4 de len grid dep.
Nen chup ro form mong, anh sang mem, nen sach, khong de nhieu do vat gay roi.
