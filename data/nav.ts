export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Bộ sưu tập", href: "/collections" },
  { label: "Mẫu đã làm", href: "/mau-nail" },
  { label: "Đặt lịch", href: "/booking" },
];

export const footerNav = {
  studio: [
    { label: "Về HANU", href: "/about" },
    { label: "Không gian", href: "/about#studio" },
    { label: "Tác phẩm mới", href: "/mau-nail" },
    { label: "Đặt lịch", href: "/booking" },
  ],
  services: [
    { label: "Bộ sưu tập", href: "/collections" },
    { label: "Mẫu nail thật", href: "/mau-nail" },
    { label: "Bảng giá", href: "/pricing" },
    { label: "Chat Zalo", href: "https://zalo.me" },
  ],
  academy: [
    { label: "Khóa học", href: "/academy" },
    { label: "Tư vấn học nail", href: "/academy#apply" },
    { label: "FAQ", href: "/academy#faq" },
    { label: "Liên hệ", href: "/contact" },
  ],
  connect: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "Zalo", href: "https://zalo.me" },
    { label: "Email", href: "mailto:hello@hanunails.com" },
  ],
};
