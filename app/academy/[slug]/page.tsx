import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { MoodboardImage } from "@/components/ui/MoodboardImage";
import { courses } from "@/data/courses";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((item) => item.id === slug);

  return course
    ? {
        title: course.title,
        description: course.description,
      }
    : {};
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((item) => item.id === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-cream">
      <Container size="wide" className="grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-6">
          <p className="font-display text-[72px] italic leading-none text-brown-dark/60">
            {course.number}
          </p>
          <h1 className="mt-6 font-display text-[58px] font-light leading-[0.95] tracking-tight text-ink md:text-[94px]">
            {course.title}
          </h1>
          <p className="mt-6 text-[11px] uppercase tracking-[0.26em] text-dark-brown">
            {course.duration} / {course.level}
          </p>
          <p className="mt-8 max-w-xl text-[16px] font-light leading-[1.85] text-charcoal/72">
            {course.description}
          </p>
          <p className="mt-8 font-display text-[34px] leading-none text-ink">
            {course.price}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <LuxuryButton href="/booking" variant="primary" size="md" withArrow>
              Đăng ký tư vấn
            </LuxuryButton>
            <LuxuryButton href="/academy" variant="outline" size="md" withArrow>
              Xem khóa khác
            </LuxuryButton>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="aspect-[4/5] overflow-hidden bg-beige">
            <MoodboardImage crop="workspace" alt={course.title} className="h-full w-full" />
          </div>
        </div>
      </Container>

      <Container size="wide" className="pb-24 md:pb-36">
        <section className="grid gap-8 border-t border-line pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-[44px] font-light leading-none text-ink">
              Sau khóa học
            </h2>
          </div>
          <div className="grid gap-4 md:col-span-8 md:grid-cols-2">
            {course.outcomes.map((outcome) => (
              <div key={outcome} className="flex gap-4 bg-soft-white p-5">
                <CheckCircle2
                  size={18}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-dark-brown"
                />
                <p className="text-[14px] leading-[1.7] text-charcoal/75">{outcome}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
