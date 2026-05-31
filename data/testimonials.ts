export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Lê Phương Anh",
    role: "Stylist · Sài Gòn",
    quote:
      "Mình không nghĩ một bộ nail có thể tinh tế đến vậy. HANU làm việc như một studio thiết kế chứ không như tiệm nail thông thường.",
  },
  {
    id: "t2",
    name: "Mai Trang",
    role: "Founder · Brand Consultant",
    quote:
      "Không gian sạch, artist hiểu gu khách. Mình giữ bộ nail Brown Marble nguyên hơn 4 tuần — chưa cần dặm lại.",
  },
  {
    id: "t3",
    name: "Hà Vy",
    role: "Creative Director",
    quote:
      "Mỗi lần đến HANU là một lần được tư vấn. Họ không gợi ý random mà nghe insight và đề xuất collection phù hợp.",
  },
  {
    id: "t4",
    name: "Khánh Linh",
    role: "Bride · Tháng 4/2026",
    quote:
      "Bộ Bridal Set của HANU hoàn hảo cho ngày cưới. Photographer khen nail lên ảnh đẹp hơn cả nhẫn.",
  },
];
