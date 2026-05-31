"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { galleryFilters, galleryItems } from "@/data/gallery";
import { MoodboardImage } from "@/components/ui/MoodboardImage";

const crops = ["nails", "hand", "marble", "silk", "pampas", "hero-hand"] as const;

export function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();

    return galleryItems.filter((item) => {
      const matchesFilter = active === "All" || item.category.includes(active);
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.category.join(" ").toLowerCase().includes(q);

      return matchesFilter && matchesQuery;
    });
  }, [active, query]);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-xl flex-wrap gap-2">
          {galleryFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-[10.5px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                active === filter
                  ? "border-ink bg-ink text-cream"
                  : "border-line bg-cream text-charcoal/65 hover:border-dark-brown hover:text-ink"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <label className="flex min-h-12 w-full items-center gap-3 border-b border-charcoal/25 px-1 lg:w-[320px]">
          <Search size={17} strokeWidth={1.5} className="text-dark-brown" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Tìm mẫu nail"
            className="w-full bg-transparent text-[14px] text-ink placeholder:text-charcoal/40 focus:outline-none"
          />
        </label>
      </div>

      <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-dark-brown">
        <SlidersHorizontal size={14} strokeWidth={1.5} />
        {items.length} mẫu đang hiển thị
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const crop = crops[index % crops.length];
          const ratio =
            item.ratio === "landscape"
              ? "aspect-[4/3]"
              : item.ratio === "square"
                ? "aspect-square"
                : item.ratio === "tall"
                  ? "aspect-[3/4]"
                  : "aspect-[4/5]";

          return (
            <article
              id={item.id}
              key={item.id}
              className="group overflow-hidden bg-soft-white"
            >
              <div className={`relative overflow-hidden ${ratio}`}>
                <MoodboardImage
                  crop={crop}
                  alt={item.title}
                  className="h-full w-full transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
                {item.isFeatured && (
                  <span className="absolute left-4 top-4 bg-cream px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-ink">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-[28px] leading-none text-ink">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-dark-brown">
                      {item.category.join(" / ")}
                    </p>
                  </div>
                  {item.priceFrom && (
                    <p className="shrink-0 text-right font-display text-[22px] leading-none text-ink">
                      {item.priceFrom}
                    </p>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
