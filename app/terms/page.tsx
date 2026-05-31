import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Điều khoản dịch vụ và đặt lịch tại HANU Nails.",
};

const sections = [
  {
    title: "Đặt lịch",
    text: "Lịch hẹn được xác nhận sau khi team HANU phản hồi qua kênh liên hệ khách hàng đã chọn. Một số dịch vụ custom art có thể cần gửi ảnh tham khảo trước.",
  },
  {
    title: "Thay đổi lịch",
    text: "Khách hàng nên báo trước nếu cần đổi giờ để studio sắp xếp artist và slot phù hợp. HANU sẽ hỗ trợ đổi lịch tùy theo tình trạng còn trống.",
  },
  {
    title: "Báo giá",
    text: "Giá hiển thị là mức tham khảo từ từng nhóm dịch vụ. Quote cuối cùng phụ thuộc vào độ dài móng, chất liệu, chi tiết đính đá và độ phức tạp của mẫu.",
  },
  {
    title: "Dịch vụ academy",
    text: "Thông tin khóa học trên website dùng để tham khảo. Lộ trình học, lịch khai giảng và học phí sẽ được xác nhận trong buổi tư vấn.",
  },
];

export default function TermsPage() {
  return (
    <div className="bg-cream">
      <Container size="narrow" className="py-24 md:py-32">
        <Eyebrow>Terms</Eyebrow>
        <h1 className="mt-6 font-display text-[56px] font-light leading-none text-ink md:text-[88px]">
          Terms of Service
        </h1>
        <p className="mt-6 text-[15px] font-light leading-[1.8] text-charcoal/70">
          Các điều khoản này giúp khách hàng hiểu rõ quy trình đặt lịch, tư vấn và
          sử dụng dịch vụ tại HANU Nails.
        </p>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {sections.map((section) => (
            <section key={section.title} className="py-8">
              <h2 className="font-display text-[32px] leading-none text-ink">
                {section.title}
              </h2>
              <p className="mt-4 text-[15px] font-light leading-[1.8] text-charcoal/72">
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
