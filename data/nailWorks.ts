export type NailWorkSource = "collection" | "real";

export type NailWork = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  priceFrom: string;
  date: string;
  source: NailWorkSource;
  duration: string;
  finish: string;
  angleCount: number;
  image?: string;
  moodboardCrop: "nails" | "hand" | "hero-hand" | "marble" | "silk";
  isFeatured?: boolean;
};

export const nailSourceLabels: Record<NailWorkSource, string> = {
  collection: "Mẫu tham khảo",
  real: "Tác phẩm thật",
};

export const nailWorks: NailWork[] = [
  {
    id: "pearl-chrome-01",
    title: "Pearl chrome ánh ngọc",
    description:
      "Form dài thanh, nền trắng ngọc và hiệu ứng chrome nhẹ giúp tay sáng hơn. Phù hợp khách thích bộ nail sang nhưng không quá nặng.",
    tags: ["Chrome", "Pearl", "Đi tiệc"],
    priceFrom: "450K",
    date: "2026-06-01",
    source: "collection",
    duration: "120 - 150 phút",
    finish: "Chrome bóng",
    angleCount: 4,
    moodboardCrop: "nails",
    isFeatured: true,
  },
  {
    id: "brown-marble-01",
    title: "Brown marble thủ công",
    description:
      "Vân nâu marble vẽ tay, hợp phong cách tối giản nhưng vẫn có điểm nhấn. Có thể chỉnh tone sáng hoặc trầm theo da tay.",
    tags: ["Marble", "Nâu", "Custom"],
    priceFrom: "500K",
    date: "2026-06-01",
    source: "real",
    duration: "150 - 180 phút",
    finish: "Vân đá thủ công",
    angleCount: 5,
    moodboardCrop: "hero-hand",
    isFeatured: true,
  },
  {
    id: "crystal-nude-01",
    title: "Nude đính đá nhẹ",
    description:
      "Nền nude trong, đính đá vừa đủ để dùng được khi đi làm và đi tiệc. Mẫu này dễ phối với nhiều kiểu trang phục.",
    tags: ["Nude", "Đính đá", "Thanh lịch"],
    priceFrom: "380K",
    date: "2026-05-30",
    source: "real",
    duration: "90 - 120 phút",
    finish: "Nude trong",
    angleCount: 3,
    moodboardCrop: "hand",
  },
  {
    id: "silk-glass-01",
    title: "Glass nail trong nhẹ",
    description:
      "Hiệu ứng trong, mềm và sạch, phù hợp khách thích bộ nail nhẹ nhàng. Dễ chỉnh theo móng ngắn hoặc form dài.",
    tags: ["Glass", "Tối giản", "Hằng ngày"],
    priceFrom: "350K",
    date: "2026-05-28",
    source: "collection",
    duration: "90 - 120 phút",
    finish: "Glass trong",
    angleCount: 4,
    moodboardCrop: "silk",
  },
  {
    id: "marble-gold-01",
    title: "Marble phối ánh kim",
    description:
      "Vân marble kết hợp ánh kim nhỏ, phù hợp cô dâu hoặc sự kiện. Có thể giảm độ nổi bật nếu khách muốn dùng hằng ngày.",
    tags: ["Marble", "Ánh kim", "Cô dâu"],
    priceFrom: "600K",
    date: "2026-05-25",
    source: "collection",
    duration: "150 - 180 phút",
    finish: "Marble ánh kim",
    angleCount: 5,
    moodboardCrop: "marble",
  },
  {
    id: "soft-nude-01",
    title: "Nude mềm tự nhiên",
    description:
      "Tông nude sạch, dễ phối đồ, hợp khách thích bộ nail bền và ít kén dịp. Có thể làm bóng nhẹ hoặc lì tùy sở thích.",
    tags: ["Nude", "Tự nhiên", "Đi làm"],
    priceFrom: "300K",
    date: "2026-05-22",
    source: "real",
    duration: "75 - 100 phút",
    finish: "Nude bóng",
    angleCount: 3,
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
