import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MoodboardImage } from "@/components/ui/MoodboardImage";
import { collections } from "@/data/collections";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Các bộ sưu tập nail art của HANU Nails: chrome, crystal, Korean glass, nude sculpture và marble.",
};

const crops = ["nails", "hand", "marble", "hero-hand", "silk"] as const;

export default function CollectionsPage() {
  return (
    <div className="bg-cream">
      <Container size="wide" className="py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow>Collections / 2026</Eyebrow>
            <h1 className="mt-6 font-display text-[56px] font-light leading-[0.98] tracking-tight text-ink md:text-[96px]">
              Nail stories
              <br />
              <span className="italic text-dark-brown">made wearable.</span>
            </h1>
          </div>
          <p className="text-[16px] font-light leading-[1.8] text-charcoal/70 md:col-span-4 md:col-start-9">
            Mỗi collection được xây dựng theo mood riêng, phù hợp cho từng dịp:
            đi làm, đi tiệc, cô dâu, look tối giản hoặc custom art nổi bật.
          </p>
        </div>
      </Container>

      <Container size="wide" className="pb-24 md:pb-36">
        <div className="grid gap-6 md:grid-cols-2">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.id}`}
              className="group grid overflow-hidden bg-soft-white lg:grid-cols-2"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <MoodboardImage
                  crop={crops[index % crops.length]}
                  alt={collection.title}
                  className="h-full w-full transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
                <span className="absolute left-5 top-5 font-display text-[54px] italic leading-none text-cream/90">
                  {collection.number}
                </span>
              </div>
              <div className="flex flex-col p-8 md:p-10">
                <p className="text-[11px] uppercase tracking-[0.24em] text-dark-brown">
                  From {collection.priceFrom}
                </p>
                <h2 className="mt-4 font-display text-[42px] leading-none text-ink">
                  {collection.title}
                </h2>
                <p className="mt-4 text-[14px] font-light leading-[1.75] text-charcoal/70">
                  {collection.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {collection.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-line px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-dark-brown"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between pt-8">
                  <div className="flex gap-1.5">
                    {collection.colors.map((color) => (
                      <span
                        key={color.name}
                        title={color.name}
                        className="h-3 w-3 rounded-full border border-charcoal/10"
                        style={{ background: color.hex }}
                      />
                    ))}
                  </div>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="text-dark-brown transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
