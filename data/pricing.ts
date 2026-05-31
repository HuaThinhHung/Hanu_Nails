export type PricingItem = {
  name: string;
  price: string;
  note?: string;
};

export type PricingCategory = {
  id: string;
  title: string;
  description: string;
  items: PricingItem[];
};

export const pricing: PricingCategory[] = [
  {
    id: "care",
    title: "Nail Care",
    description: "Chăm sóc nền tảng cho bộ móng khoẻ, sạch và đúng form.",
    items: [
      { name: "Basic Manicure", price: "150K", note: "Cắt da, làm form, dưỡng" },
      { name: "Spa Manicure", price: "250K", note: "Care + spa tay + mask" },
      { name: "Nail Repair", price: "50K", note: "Sửa móng gãy, nứt" },
      { name: "Soak-off Gel", price: "80K", note: "Tháo gel an toàn" },
    ],
  },
  {
    id: "gel-design",
    title: "Gel & Design",
    description: "Sơn gel cao cấp với mọi phong cách phổ biến nhất.",
    items: [
      { name: "Gel Polish", price: "250K", note: "1 màu, dáng chuẩn" },
      { name: "French Tip", price: "300K", note: "Classic / micro / colored" },
      { name: "Cat Eye", price: "350K", note: "Smoky · galaxy · velvet" },
      { name: "Chrome", price: "350K", note: "Silver · pearl · pink" },
      { name: "Ombre Gel", price: "320K", note: "Gradient mượt 2-3 tone" },
    ],
  },
  {
    id: "luxury",
    title: "Luxury Art",
    description: "Nail art nâng cao — đính đá, hoa 3D, custom design.",
    items: [
      { name: "Stone / Crystal Design", price: "500K", note: "Đá Swarovski hoặc tương đương" },
      { name: "3D Flower", price: "600K", note: "Hoa đắp 3D tỉ mỉ" },
      { name: "Custom Art Set", price: "Theo mẫu", note: "Báo giá sau khi xem mẫu" },
      { name: "Bridal Set", price: "800K", note: "Trọn bộ cho cô dâu" },
    ],
  },
];
