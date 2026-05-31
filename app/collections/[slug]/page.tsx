import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { MoodboardImage } from "@/components/ui/MoodboardImage";
import { collections } from "@/data/collections";

type Props = {
  params: Promise<{ slug: string }>;
};

const toneByCollection = {
  "aurora-chrome": "nails",
  "crystal-bloom": "hand",
  "sakura-glass": "silk",
  "nude-sculpture": "hero-hand",
  "brown-marble": "marble",
} as const;

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((item) => item.id === slug);

  if (!collection) {
    return {};
  }

  return {
    title: collection.title,
    description: collection.description,
  };
}

export default async function CollectionDetailPage({ params }: Props) {
  const { slug } = await params;
  const collection = collections.find((item) => item.id === slug);

  if (!collection) {
    notFound();
  }

  const tone = toneByCollection[collection.id as keyof typeof toneByCollection];

  return (
    <div className="bg-cream">
      <Container size="wide" className="grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <p className="font-display text-[72px] italic leading-none text-brown-dark/55">
            {collection.number}
          </p>
          <h1 className="mt-6 font-display text-[58px] font-light leading-[0.95] tracking-tight text-ink md:text-[104px]">
            {collection.title}
          </h1>
          <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-dark-brown">
            {collection.mood}
          </p>
          <p className="mt-8 text-[16px] font-light leading-[1.85] text-charcoal/72">
            {collection.longDescription}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <LuxuryButton href="/booking" variant="primary" size="md" withArrow>
              Đặt lịch tư vấn
            </LuxuryButton>
            <LuxuryButton href="/gallery" variant="outline" size="md" withArrow>
              Xem gallery
            </LuxuryButton>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="relative aspect-[5/6] overflow-hidden bg-beige md:aspect-[6/5]">
            <MoodboardImage crop={tone} alt={collection.title} className="h-full w-full" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-cream/50 pt-5 text-cream">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] opacity-75">
                  Price from
                </p>
                <p className="font-display text-[34px] leading-none">
                  {collection.priceFrom}
                </p>
              </div>
              <ArrowRight size={22} strokeWidth={1.3} />
            </div>
          </div>
        </div>
      </Container>

      <Container size="wide" className="pb-24 md:pb-36">
        <div className="grid gap-10 border-t border-line pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-[44px] font-light leading-none text-ink">
              Palette & details
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-5 md:grid-cols-2">
              {collection.colors.map((color) => (
                <div key={color.name} className="flex items-center gap-4 bg-soft-white p-5">
                  <span
                    className="h-12 w-12 rounded-full border border-charcoal/10"
                    style={{ background: color.hex }}
                  />
                  <div>
                    <p className="font-display text-[24px] leading-none text-ink">
                      {color.name}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-dark-brown">
                      {color.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {collection.gallery.map((image, index) => (
                <div key={image} className="aspect-[4/5] overflow-hidden bg-beige">
                  <MoodboardImage
                    crop={tone}
                    alt={`${collection.title} gallery ${index + 1}`}
                    className="h-full w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
