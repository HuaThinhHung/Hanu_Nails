import type { Metadata } from "next";
import { Award, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { MoodboardImage } from "@/components/ui/MoodboardImage";

export const metadata: Metadata = {
  title: "About",
  description:
    "HANU Nails là nail art studio & academy theo phong cách hiện đại, tối giản và chú trọng trải nghiệm.",
};

const values = [
  {
    icon: Sparkles,
    title: "Taste-led design",
    text: "Tư vấn theo mood, dịp sử dụng và gu cá nhân thay vì chọn mẫu ngẫu nhiên.",
  },
  {
    icon: ShieldCheck,
    title: "Clean process",
    text: "Quy trình vệ sinh dụng cụ rõ ràng, không gian làm nail sạch và thoải mái.",
  },
  {
    icon: Award,
    title: "Artist standard",
    text: "Mỗi bộ nail được xử lý như một thiết kế hoàn chỉnh: form, màu, chất liệu, chi tiết.",
  },
  {
    icon: Users,
    title: "Academy mindset",
    text: "Studio đồng thời là nơi đào tạo artist mới với nền tảng kỹ thuật và tư duy thẩm mỹ.",
  },
];

const artists = [
  {
    name: "Hana Le",
    role: "Lead Nail Artist",
    text: "Phụ trách luxury gel, crystal layout và tư vấn bridal set.",
  },
  {
    name: "Mina Tran",
    role: "Chrome & Cat Eye Specialist",
    text: "Tập trung vào hiệu ứng ánh sáng, chrome, velvet và glass nail.",
  },
  {
    name: "Linh Pham",
    role: "Academy Mentor",
    text: "Đào tạo foundation, vệ sinh dụng cụ và quy trình phục vụ khách.",
  },
];

const journal = [
  "Cách chọn form móng phù hợp với dáng tay",
  "Chrome, cat eye và glass nail khác nhau thế nào?",
  "Checklist chuẩn bị trước buổi bridal nail",
];

export default function AboutPage() {
  return (
    <div className="bg-cream">
      <Container size="wide" className="grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-6">
          <Eyebrow>About HANU</Eyebrow>
          <h1 className="mt-6 font-display text-[58px] font-light leading-[0.98] tracking-tight text-ink md:text-[104px]">
            Art beyond
            <br />
            <span className="italic text-dark-brown">beauty.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[16px] font-light leading-[1.85] text-charcoal/72">
            HANU Nails được xây dựng như một studio thiết kế thu nhỏ, nơi nail art
            không chỉ là dịch vụ làm đẹp mà là trải nghiệm cá nhân hóa cho đôi tay.
            Mỗi chi tiết được cân bằng giữa kỹ thuật, thẩm mỹ và khả năng ứng dụng.
          </p>
        </div>
        <div className="md:col-span-6">
          <div className="aspect-[4/5] overflow-hidden bg-beige md:aspect-[5/4]">
            <MoodboardImage crop="studio" alt="Studio HANU Nails" className="h-full w-full" />
          </div>
        </div>
      </Container>

      <section id="studio" className="bg-soft-white py-24 md:py-32">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Eyebrow>Our Space</Eyebrow>
              <h2 className="mt-6 font-display text-[48px] font-light leading-[1.02] text-ink md:text-[72px]">
                A calm studio
                <br />
                <span className="italic text-dark-brown">for detailed work.</span>
              </h2>
            </div>
            <div className="grid gap-px bg-line md:col-span-7 md:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article key={value.title} className="bg-cream p-7">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-beige">
                      <Icon size={19} strokeWidth={1.4} className="text-dark-brown" />
                    </div>
                    <h3 className="font-display text-[30px] leading-none text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-4 text-[14px] font-light leading-[1.75] text-charcoal/70">
                      {value.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section id="artists" className="bg-cream py-24 md:py-32">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Artists</Eyebrow>
              <h2 className="mt-6 font-display text-[48px] font-light leading-[1.02] text-ink md:text-[72px]">
                Hands behind
                <br />
                <span className="italic text-dark-brown">the art.</span>
              </h2>
            </div>
            <div className="grid gap-5 md:col-span-8 md:grid-cols-3">
              {artists.map((artist, index) => (
                <article key={artist.name} className="bg-soft-white p-6">
                  <div className="aspect-[4/5] overflow-hidden bg-beige">
                    <MoodboardImage
                      crop={index === 0 ? "hand" : index === 1 ? "nails" : "workspace"}
                      alt={artist.name}
                      className="h-full w-full"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-[30px] leading-none text-ink">
                    {artist.name}
                  </h3>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-dark-brown">
                    {artist.role}
                  </p>
                  <p className="mt-4 text-[14px] font-light leading-[1.7] text-charcoal/70">
                    {artist.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="journal" className="bg-soft-white py-24 md:py-32">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <Eyebrow>Journal</Eyebrow>
              <h2 className="mt-6 font-display text-[48px] font-light leading-[1.02] text-ink md:text-[72px]">
                Notes before
                <br />
                <span className="italic text-dark-brown">your appointment.</span>
              </h2>
            </div>
            <div className="divide-y divide-line border-y border-line md:col-span-7">
              {journal.map((title, index) => (
                <article key={title} className="flex items-center gap-8 py-7">
                  <span className="font-display text-[34px] italic leading-none text-brown-dark/65">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-[30px] leading-tight text-ink">
                    {title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Container size="wide" className="py-24 md:py-32">
        <div className="grid gap-8 bg-ink p-8 text-cream md:grid-cols-12 md:items-center md:p-10">
          <div className="md:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.24em] text-brown">
              Visit HANU
            </p>
            <h2 className="mt-3 font-display text-[38px] font-light leading-tight md:text-[54px]">
              Đến studio để được tư vấn form và collection phù hợp.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <LuxuryButton href="/booking" variant="dark" size="md" withArrow>
              Đặt lịch
            </LuxuryButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
