import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Hand,
  Gem,
  Palette,
  Flower2,
  Wrench,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  priceFrom: string;
};

export const services: Service[] = [
  {
    id: "nail-design",
    title: "Nail Design",
    description:
      "Thiết kế nail theo phong cách riêng, từ tối giản đến luxury art — mỗi bộ là một bản phối duy nhất.",
    icon: Sparkles,
    priceFrom: "From 250K",
  },
  {
    id: "nail-care",
    title: "Nail Care",
    description:
      "Chăm sóc móng, da tay và form móng — sạch, an toàn, được vô trùng tuyệt đối.",
    icon: Hand,
    priceFrom: "From 150K",
  },
  {
    id: "luxury-gel",
    title: "Luxury Gel",
    description:
      "Sơn gel cao cấp với độ bóng sâu, bền màu và chuẩn nail tech editorial.",
    icon: Gem,
    priceFrom: "From 250K",
  },
  {
    id: "custom-design",
    title: "Custom Design",
    description:
      "Lên mẫu riêng theo outfit, sự kiện hoặc cá tính — tư vấn cùng artist 1-1.",
    icon: Palette,
    priceFrom: "Theo mẫu",
  },
  {
    id: "bridal-nails",
    title: "Bridal Nails",
    description:
      "Bộ nail cô dâu được lên cùng concept áo cưới, hoa cầm tay và trang sức.",
    icon: Flower2,
    priceFrom: "From 600K",
  },
  {
    id: "nail-repair",
    title: "Nail Repair",
    description:
      "Sửa nhẹ, đắp form, bù gel — giữ bộ nail của bạn nguyên vẹn lâu hơn.",
    icon: Wrench,
    priceFrom: "From 50K",
  },
];
