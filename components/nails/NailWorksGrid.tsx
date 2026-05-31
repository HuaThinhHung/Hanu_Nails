"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { NailWorkCard } from "@/components/nails/NailWorkCard";
import { NailWorkModal } from "@/components/nails/NailWorkModal";
import {
  nailSourceLabels,
  nailWorkFilters,
  nailWorks,
  type NailWork,
  type NailWorkSource,
} from "@/data/nailWorks";

const sourceTabs: Array<{ value: "all" | NailWorkSource; label: string }> = [
  { value: "all", label: "Tất cả" },
  { value: "collection", label: nailSourceLabels.collection },
  { value: "real", label: nailSourceLabels.real },
];

export function NailWorksGrid() {
  const [source, setSource] = useState<"all" | NailWorkSource>("all");
  const [filter, setFilter] = useState("Tất cả");
  const [query, setQuery] = useState("");
  const [selectedWork, setSelectedWork] = useState<NailWork | null>(null);

  const works = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return nailWorks.filter((work) => {
      const matchesSource = source === "all" || work.source === source;
      const matchesFilter = filter === "Tất cả" || work.tags.includes(filter);
      const searchableText = [
        work.title,
        work.description,
        work.tags.join(" "),
        work.finish,
        nailSourceLabels[work.source],
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesSource && matchesFilter && matchesQuery;
    });
  }, [filter, query, source]);

  return (
    <div className="space-y-10">
      <div className="grid gap-6 border-y border-line py-6 lg:grid-cols-[1fr_360px] lg:items-end">
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {sourceTabs.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setSource(item.value)}
                className={`border px-4 py-2 text-[13px] font-extrabold uppercase tracking-[0.1em] transition-colors ${
                  source === item.value
                    ? "border-ink bg-ink text-cream"
                    : "border-line bg-soft-white text-charcoal/70 hover:border-dark-brown hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {nailWorkFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`border px-4 py-2 text-[13px] font-extrabold uppercase tracking-[0.1em] transition-colors ${
                  filter === item
                    ? "border-dark-brown bg-brown-100 text-ink"
                    : "border-line bg-cream text-charcoal/70 hover:border-dark-brown hover:text-ink"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <label className="flex min-h-12 w-full items-center gap-3 border-b border-charcoal/25 px-1">
          <Search size={18} strokeWidth={1.7} className="text-dark-brown" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Tìm tên mẫu, tag, chất liệu"
            className="w-full bg-transparent text-[16px] font-semibold text-ink placeholder:text-charcoal/40 focus:outline-none"
          />
        </label>
      </div>

      <div className="flex items-center justify-between gap-5">
        <p className="hanu-eyebrow">{works.length} mẫu đang hiển thị</p>
        <p className="hidden text-[15px] font-semibold text-charcoal/62 md:block">
          Mẫu tham khảo để chọn ý tưởng, tác phẩm thật để xem tay nghề thực tế.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work, index) => (
          <NailWorkCard
            key={work.id}
            work={work}
            priority={index < 2}
            onPreview={setSelectedWork}
          />
        ))}
      </div>

      {works.length === 0 && (
        <div className="border border-line bg-soft-white p-8 text-center">
          <p className="hanu-heading text-[32px]">Chưa có mẫu phù hợp.</p>
          <p className="mt-3 text-[16px] font-semibold text-charcoal/65">
            Hãy thử đổi bộ lọc hoặc tìm bằng từ khóa khác.
          </p>
        </div>
      )}

      <NailWorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
    </div>
  );
}
