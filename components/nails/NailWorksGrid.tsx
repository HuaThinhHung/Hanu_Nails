"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { NailWorkCard } from "@/components/nails/NailWorkCard";
import { nailWorkFilters, nailWorks } from "@/data/nailWorks";

export function NailWorksGrid() {
  const [filter, setFilter] = useState("Tất cả");
  const [query, setQuery] = useState("");

  const works = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return nailWorks.filter((work) => {
      const matchesFilter = filter === "Tất cả" || work.tags.includes(filter);
      const matchesQuery =
        !normalizedQuery ||
        work.title.toLowerCase().includes(normalizedQuery) ||
        work.description.toLowerCase().includes(normalizedQuery) ||
        work.tags.join(" ").toLowerCase().includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {nailWorkFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                filter === item
                  ? "border-ink bg-ink text-cream"
                  : "border-line bg-cream text-charcoal/65 hover:border-dark-brown hover:text-ink"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <label className="flex min-h-12 w-full items-center gap-3 border-b border-charcoal/25 px-1 lg:w-[340px]">
          <Search size={17} strokeWidth={1.5} className="text-dark-brown" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Tìm theo tên mẫu hoặc tag"
            className="w-full bg-transparent text-[14px] text-ink placeholder:text-charcoal/40 focus:outline-none"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work, index) => (
          <NailWorkCard key={work.id} work={work} priority={index < 2} />
        ))}
      </div>
    </div>
  );
}
