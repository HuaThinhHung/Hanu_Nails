import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { MoodboardImage } from "@/components/ui/MoodboardImage";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "Khóa học nail tại HANU Academy: foundation, gel art, luxury nail design và tư duy vận hành salon.",
};

const faqs = [
  {
    question: "Người mới hoàn toàn có học được không?",
    answer:
      "Có. Khóa Basic Nail Foundation bắt đầu từ vệ sinh dụng cụ, form móng, chăm sóc nền móng và sơn gel cơ bản.",
  },
  {
    question: "HANU có hỗ trợ portfolio sau khóa học không?",
    answer:
      "Có. Ở các khóa nâng cao, học viên được hướng dẫn bố cục collection, chụp portfolio và cách tư vấn mẫu cho khách.",
  },
  {
    question: "Lịch học có linh hoạt không?",
    answer:
      "Team HANU sẽ tư vấn lịch học theo slot studio và mục tiêu của học viên trước khi xác nhận đăng ký.",
  },
];

export default function AcademyPage() {
  return (
    <div className="bg-cream">
      <Container size="wide" className="grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-6">
          <Eyebrow>HANU Academy</Eyebrow>
          <h1 className="mt-6 font-display text-[58px] font-light leading-[0.98] tracking-tight text-ink md:text-[104px]">
            Learn the craft.
            <br />
            <span className="italic text-dark-brown">Build your taste.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[16px] font-light leading-[1.8] text-charcoal/70">
            Chương trình đào tạo tập trung vào kỹ thuật sạch, tư duy thẩm mỹ và
            khả năng tư vấn khách hàng. Học viên được luyện trên form thật, moodboard
            thật và quy trình vận hành studio.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <LuxuryButton href="#apply" variant="primary" size="md" withArrow>
              Đăng ký tư vấn
            </LuxuryButton>
            <LuxuryButton href="/gallery" variant="outline" size="md" withArrow>
              Xem portfolio
            </LuxuryButton>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="aspect-[4/5] overflow-hidden bg-beige md:aspect-[5/4]">
            <MoodboardImage crop="workspace" alt="Không gian đào tạo HANU Academy" className="h-full w-full" />
          </div>
        </div>
      </Container>

      <Container size="wide" className="pb-24 md:pb-36">
        <div className="grid gap-px bg-line md:grid-cols-2">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/academy/${course.id}`}
              className="group bg-soft-white p-8 transition-colors hover:bg-beige md:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <p className="font-display text-[42px] italic leading-none text-brown-dark/70">
                  {course.number}
                </p>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="text-dark-brown transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
              <h2 className="mt-8 font-display text-[40px] leading-none text-ink">
                {course.title}
              </h2>
              <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-dark-brown">
                {course.duration} / {course.level}
              </p>
              <p className="mt-5 text-[14px] font-light leading-[1.75] text-charcoal/70">
                {course.description}
              </p>
              <ul className="mt-7 space-y-3">
                {course.outcomes.slice(0, 3).map((outcome) => (
                  <li key={outcome} className="flex gap-3 text-[13.5px] text-charcoal/72">
                    <Check size={14} strokeWidth={1.5} className="mt-1 text-dark-brown" />
                    {outcome}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-display text-[28px] leading-none text-ink">
                {course.price}
              </p>
            </Link>
          ))}
        </div>

        <section id="apply" className="mt-12 bg-ink p-8 text-cream md:p-10">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="text-[11px] uppercase tracking-[0.24em] text-brown">
                Admission consult
              </p>
              <h2 className="mt-3 font-display text-[38px] font-light leading-tight md:text-[52px]">
                Chọn đúng khóa trước khi bắt đầu.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] font-light leading-[1.75] text-cream/70">
                HANU sẽ hỏi mục tiêu, nền tảng hiện tại và thời gian học của bạn để
                đề xuất lộ trình phù hợp.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <LuxuryButton href="/booking" variant="dark" size="md" withArrow>
                Đặt lịch tư vấn
              </LuxuryButton>
            </div>
          </div>
        </section>

        <section id="faq" className="mt-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 font-display text-[44px] font-light leading-none text-ink">
              Academy notes
            </h2>
          </div>
          <div className="divide-y divide-line border-y border-line md:col-span-8">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-[28px] leading-tight text-ink">
                  {faq.question}
                  <span className="text-[28px] leading-none text-dark-brown transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[15px] font-light leading-[1.8] text-charcoal/70">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
