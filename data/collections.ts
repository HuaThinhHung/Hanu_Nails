export type Collection = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  mood: string;
  colors: { name: string; hex: string }[];
  tags: string[];
  priceFrom: string;
  hero: string;
  gallery: string[];
};

export const collections: Collection[] = [
  {
    id: "aurora-chrome",
    number: "01",
    title: "Aurora Chrome",
    subtitle: "A reflection of future beauty",
    description:
      "Chrome, hologram và ánh bạc — bộ sưu tập dành cho những người yêu vẻ đẹp hiện đại, futuristic và phản chiếu.",
    longDescription:
      "Aurora Chrome lấy cảm hứng từ ánh sáng cực quang phản chiếu trên bề mặt kim loại lỏng. Mỗi đầu móng là một tấm gương nhỏ, đổi màu theo ánh sáng — từ bạc lạnh sang tím nhạt, qua xanh ngọc rồi trở lại trắng pearl.",
    mood: "Futuristic · Reflective · Cool",
    colors: [
      { name: "Silver", hex: "#D8D6D2" },
      { name: "Pearl", hex: "#EDE9E2" },
      { name: "Light Gray", hex: "#C6C4BF" },
      { name: "Glass", hex: "#F4F3F0" },
    ],
    tags: ["Chrome", "Luxury", "Hologram"],
    priceFrom: "450K",
    hero: "/images/collections/aurora-chrome.jpg",
    gallery: [
      "/images/gallery/g-01.jpg",
      "/images/gallery/g-02.jpg",
      "/images/gallery/g-03.jpg",
    ],
  },
  {
    id: "crystal-bloom",
    number: "02",
    title: "Crystal Bloom",
    subtitle: "Soft light, tiny crystals, delicate art",
    description:
      "Pha lê, hoa 3D và ánh sáng mềm — bộ sưu tập gợi liên tưởng đến những bông hoa đông cứng trong giọt thuỷ tinh.",
    longDescription:
      "Crystal Bloom hoà quyện đá pha lê được đính khéo léo với những hoa 3D thanh mảnh. Tông trong, sáng nhẹ, lý tưởng cho cô dâu hoặc những sự kiện cần vẻ đẹp tinh khôi.",
    mood: "Delicate · Bridal · Ethereal",
    colors: [
      { name: "White", hex: "#FBFAF7" },
      { name: "Clear", hex: "#F0EEE9" },
      { name: "Champagne", hex: "#E6D8C2" },
      { name: "Pearl", hex: "#EDE5D8" },
    ],
    tags: ["Crystal", "3D Flower", "Bridal"],
    priceFrom: "600K",
    hero: "/images/collections/crystal-bloom.jpg",
    gallery: [
      "/images/gallery/g-04.jpg",
      "/images/gallery/g-05.jpg",
      "/images/gallery/g-06.jpg",
    ],
  },
  {
    id: "sakura-glass",
    number: "03",
    title: "Sakura Glass",
    subtitle: "A gentle Korean-Japanese inspired nail story",
    description:
      "Trong trẻo, nhẹ nhàng, nữ tính — phong cách Korean glass nail với những lớp màu sương mờ và ánh hồng đào thật mỏng.",
    longDescription:
      "Sakura Glass mang đến vẻ đẹp tĩnh lặng của một ngày đầu xuân. Glass effect cho phép nhìn thấy nhiều lớp màu chồng nhau, tạo cảm giác móng phát sáng từ bên trong.",
    mood: "Soft · Korean · Serene",
    colors: [
      { name: "Soft Pink", hex: "#F2DCD0" },
      { name: "Milky White", hex: "#F6F1E8" },
      { name: "Nude", hex: "#E4D2BD" },
      { name: "Pearl", hex: "#EFE6D8" },
    ],
    tags: ["Korean", "Minimal", "Glass"],
    priceFrom: "350K",
    hero: "/images/collections/sakura-glass.jpg",
    gallery: [
      "/images/gallery/g-07.jpg",
      "/images/gallery/g-08.jpg",
      "/images/gallery/g-09.jpg",
    ],
  },
  {
    id: "nude-sculpture",
    number: "04",
    title: "Nude Sculpture",
    subtitle: "Minimal beauty with a sculptural touch",
    description:
      "Tối giản, sang, clean girl, luxury nude — dành cho khách yêu vẻ đẹp tinh tế, sạch và bền vững.",
    longDescription:
      "Nude Sculpture là bài học về sự kiềm chế. Form móng được điêu khắc kỹ lưỡng, bề mặt mịn mượt như đá, màu nude warm giữ được sự tinh tế qua từng buổi gặp.",
    mood: "Clean · Minimal · Sculptural",
    colors: [
      { name: "Beige", hex: "#E6D9C5" },
      { name: "Warm Gray", hex: "#C9C1B4" },
      { name: "Milk Tea", hex: "#D4BFA3" },
      { name: "Cream", hex: "#EEE4D2" },
    ],
    tags: ["Nude", "Minimal", "Luxury"],
    priceFrom: "300K",
    hero: "/images/collections/nude-sculpture.jpg",
    gallery: [
      "/images/gallery/g-10.jpg",
      "/images/gallery/g-11.jpg",
      "/images/gallery/g-12.jpg",
    ],
  },
  {
    id: "brown-marble",
    number: "05",
    title: "Brown Marble",
    subtitle: "Warm brown marble for a premium look",
    description:
      "Tông nâu be, marble và chút ánh kim — cảm giác trưởng thành, cao cấp, gợi nhớ đá marble nâu trong khách sạn boutique.",
    longDescription:
      "Brown Marble dệt nên các vệt nâu, kem và vàng kim chìm nổi như đá marble thật. Mỗi ngón tay là một mảnh đá độc nhất — không bộ nào giống bộ nào.",
    mood: "Warm · Premium · Mature",
    colors: [
      { name: "Brown", hex: "#9F8A75" },
      { name: "Cream", hex: "#EFE2D0" },
      { name: "Coffee", hex: "#7A5C46" },
      { name: "Gold", hex: "#C9A875" },
    ],
    tags: ["Brown", "Marble", "Luxury"],
    priceFrom: "500K",
    hero: "/images/collections/brown-marble.jpg",
    gallery: [
      "/images/gallery/g-13.jpg",
      "/images/gallery/g-14.jpg",
      "/images/gallery/g-15.jpg",
    ],
  },
];
