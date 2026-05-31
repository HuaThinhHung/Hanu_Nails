import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Chính sách bảo mật thông tin khách hàng của HANU Nails.",
};

const sections = [
  {
    title: "Thông tin HANU thu thập",
    text: "Khi đặt lịch, HANU có thể ghi nhận họ tên, số điện thoại, kênh liên hệ, dịch vụ quan tâm, ngày giờ mong muốn và ghi chú về mẫu nail.",
  },
  {
    title: "Mục đích sử dụng",
    text: "Thông tin được dùng để xác nhận lịch hẹn, tư vấn mẫu phù hợp, chuẩn bị artist và cải thiện trải nghiệm dịch vụ.",
  },
  {
    title: "Bảo mật dữ liệu",
    text: "HANU không bán hoặc chia sẻ thông tin cá nhân của khách hàng cho bên thứ ba khi chưa có sự đồng ý, trừ trường hợp pháp luật yêu cầu.",
  },
  {
    title: "Yêu cầu chỉnh sửa",
    text: "Khách hàng có thể liên hệ studio để yêu cầu cập nhật, chỉnh sửa hoặc xóa thông tin đặt lịch đã cung cấp.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-cream">
      <Container size="narrow" className="py-24 md:py-32">
        <Eyebrow>Policy</Eyebrow>
        <h1 className="mt-6 font-display text-[56px] font-light leading-none text-ink md:text-[88px]">
          Privacy Policy
        </h1>
        <p className="mt-6 text-[15px] font-light leading-[1.8] text-charcoal/70">
          Bản chính sách này là nội dung khởi tạo cho website. Khi triển khai thật,
          HANU có thể cập nhật theo hệ thống CRM, thanh toán và nền tảng đặt lịch thực tế.
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
