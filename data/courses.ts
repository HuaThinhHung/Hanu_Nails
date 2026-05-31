export type Course = {
  id: string;
  number: string;
  title: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Business";
  description: string;
  outcomes: string[];
  price: string;
};

export const courses: Course[] = [
  {
    id: "basic",
    number: "01",
    title: "Basic Nail Foundation",
    duration: "4–6 tuần",
    level: "Beginner",
    description:
      "Dành cho người mới — học nền tảng chăm sóc móng, sơn gel, form móng và vệ sinh dụng cụ.",
    outcomes: [
      "Thành thạo form móng cơ bản",
      "Quy trình vô trùng dụng cụ",
      "Sơn gel mượt, bền màu",
      "Tư duy phục vụ khách",
    ],
    price: "From 6.500.000 ₫",
  },
  {
    id: "advanced",
    number: "02",
    title: "Advanced Gel & Art",
    duration: "6–8 tuần",
    level: "Intermediate",
    description:
      "Nâng cấp kỹ thuật gel, ombre, cat eye, chrome, đính đá và bố cục thiết kế.",
    outcomes: [
      "8+ kỹ thuật gel art",
      "Bố cục đính đá pro",
      "Chuyển màu mượt mọi tone",
      "Định hướng phong cách cá nhân",
    ],
    price: "From 9.800.000 ₫",
  },
  {
    id: "luxury",
    number: "03",
    title: "Luxury Nail Design",
    duration: "8 tuần",
    level: "Advanced",
    description:
      "Tập trung vào nail art cao cấp, tư duy bộ sưu tập, phối màu và chụp portfolio.",
    outcomes: [
      "Tư duy collection-based design",
      "Hoa 3D, sculpture, crystal layout",
      "Studio photography portfolio",
      "Pricing tier cao cấp",
    ],
    price: "From 14.500.000 ₫",
  },
  {
    id: "business",
    number: "04",
    title: "Salon Business Mindset",
    duration: "Workshop · 2 ngày",
    level: "Business",
    description:
      "Định giá, tư vấn khách, xây thương hiệu cá nhân và vận hành dịch vụ nail.",
    outcomes: [
      "Pricing & service structure",
      "Branding & social presence",
      "Client retention playbook",
      "Vận hành studio nhỏ",
    ],
    price: "From 3.200.000 ₫",
  },
];
