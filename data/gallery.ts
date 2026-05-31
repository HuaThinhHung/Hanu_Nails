export type GalleryItem = {
  id: string;
  title: string;
  image: string;
  category: string[];
  collection?: string;
  priceFrom?: string;
  ratio: "portrait" | "landscape" | "square" | "tall";
  isFeatured?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g-01",
    title: "Pearl Chrome",
    image: "/images/gallery/g-01.jpg",
    category: ["Chrome", "Luxury"],
    collection: "aurora-chrome",
    priceFrom: "450K",
    ratio: "tall",
    isFeatured: true,
  },
  {
    id: "g-02",
    title: "Crystal Bouquet",
    image: "/images/gallery/g-02.jpg",
    category: ["Crystal", "3D Art"],
    collection: "crystal-bloom",
    priceFrom: "600K",
    ratio: "landscape",
  },
  {
    id: "g-03",
    title: "Glass Petal",
    image: "/images/gallery/g-03.jpg",
    category: ["Korean", "Minimal"],
    collection: "sakura-glass",
    priceFrom: "350K",
    ratio: "square",
  },
  {
    id: "g-04",
    title: "Nude Sculpture I",
    image: "/images/gallery/g-04.jpg",
    category: ["Nude", "Minimal"],
    collection: "nude-sculpture",
    priceFrom: "300K",
    ratio: "portrait",
  },
  {
    id: "g-05",
    title: "Marble Mocha",
    image: "/images/gallery/g-05.jpg",
    category: ["Marble", "Brown Nude"],
    collection: "brown-marble",
    priceFrom: "500K",
    ratio: "tall",
    isFeatured: true,
  },
  {
    id: "g-06",
    title: "French Whisper",
    image: "/images/gallery/g-06.jpg",
    category: ["French", "Minimal"],
    priceFrom: "300K",
    ratio: "landscape",
  },
  {
    id: "g-07",
    title: "Aurora Light",
    image: "/images/gallery/g-07.jpg",
    category: ["Chrome", "Cat Eye"],
    collection: "aurora-chrome",
    priceFrom: "450K",
    ratio: "square",
  },
  {
    id: "g-08",
    title: "Bridal Pearl",
    image: "/images/gallery/g-08.jpg",
    category: ["Bridal", "Crystal"],
    collection: "crystal-bloom",
    priceFrom: "600K",
    ratio: "portrait",
  },
  {
    id: "g-09",
    title: "Coffee Cream",
    image: "/images/gallery/g-09.jpg",
    category: ["Marble", "Luxury"],
    collection: "brown-marble",
    priceFrom: "500K",
    ratio: "landscape",
  },
  {
    id: "g-10",
    title: "Sakura Mist",
    image: "/images/gallery/g-10.jpg",
    category: ["Korean", "Minimal"],
    collection: "sakura-glass",
    priceFrom: "350K",
    ratio: "tall",
  },
  {
    id: "g-11",
    title: "Cat Eye Smoke",
    image: "/images/gallery/g-11.jpg",
    category: ["Cat Eye", "Chrome"],
    priceFrom: "380K",
    ratio: "square",
  },
  {
    id: "g-12",
    title: "Custom Art Set",
    image: "/images/gallery/g-12.jpg",
    category: ["3D Art", "Custom Art"],
    priceFrom: "Theo mẫu",
    ratio: "portrait",
  },
];

export const galleryFilters = [
  "All",
  "Luxury",
  "Chrome",
  "Cat Eye",
  "French",
  "Crystal",
  "Korean",
  "Marble",
  "Brown Nude",
  "Bridal",
  "3D Art",
  "Custom Art",
];
