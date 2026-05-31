export type NailWork = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  priceFrom: string;
  date: string;
  image?: string;
  moodboardCrop: "nails" | "hand" | "hero-hand" | "marble" | "silk";
  isFeatured?: boolean;
};

export const nailWorks: NailWork[] = [
  {
    id: "pearl-chrome-01",
    title: "Pearl chrome ánh ngọc",
    description: "Form dài thanh, nền trắng ngọc và hiệu ứng chrome nhẹ cho tay sáng hơn.",
    tags: ["Chrome", "Pearl", "Đi tiệc"],
    priceFrom: "450K",
    date: "2026-06-01",
    moodboardCrop: "nails",
    isFeatured: true,
  },
  {
    id: "brown-marble-01",
    title: "Brown marble thủ công",
    description: "Vân nâu marble vẽ tay, hợp phong cách tối giản nhưng vẫn có điểm nhấn.",
    tags: ["Marble", "Nâu", "Custom"],
    priceFrom: "500K",
    date: "2026-06-01",
    moodboardCrop: "hero-hand",
    isFeatured: true,
  },
  {
    id: "crystal-nude-01",
    title: "Nude đính đá nhẹ",
    description: "Nền nude trong, đính đá vừa đủ để dùng được khi đi làm và đi tiệc.",
    tags: ["Nude", "Đính đá", "Thanh lịch"],
    priceFrom: "380K",
    date: "2026-05-30",
    moodboardCrop: "hand",
  },
  {
    id: "silk-glass-01",
    title: "Glass nail trong nhẹ",
    description: "Hiệu ứng trong, mềm và sạch, phù hợp khách thích bộ nail nhẹ nhàng.",
    tags: ["Glass", "Tối giản", "Hằng ngày"],
    priceFrom: "350K",
    date: "2026-05-28",
    moodboardCrop: "silk",
  },
  {
    id: "marble-gold-01",
    title: "Marble phối ánh kim",
    description: "Vân marble kết hợp ánh kim nhỏ, phù hợp cô dâu hoặc sự kiện.",
    tags: ["Marble", "Ánh kim", "Cô dâu"],
    priceFrom: "600K",
    date: "2026-05-25",
    moodboardCrop: "marble",
  },
  {
    id: "soft-nude-01",
    title: "Nude mềm tự nhiên",
    description: "Tông nude sạch, dễ phối đồ, hợp khách thích bộ nail bền và ít kén dịp.",
    tags: ["Nude", "Tự nhiên", "Đi làm"],
    priceFrom: "300K",
    date: "2026-05-22",
    moodboardCrop: "hand",
  },
];

export const nailWorkFilters = [
  "Tất cả",
  "Nude",
  "Chrome",
  "Marble",
  "Đính đá",
  "Cô dâu",
  "Custom",
  "Đi làm",
];
