"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { ResourceCategory, ResourceItem } from "@/lib/types";
import SearchBox from "./SearchBox";

const categories: (ResourceCategory | "All")[] = [
  "All",
  "Guides",
  "PDFs",
  "Articles",
  "Videos",
  "Forms",
];

export default function ResourceGrid({ items }: { items: ResourceItem[] }) {
  const [activeCategory, setActiveCategory] = useState<(ResourceCategory | "All")>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return items
      .filter((item) => activeCategory === "All" || item.category === activeCategory)
      .filter((item) => {
        const q = query.trim().toLowerCase();
        if (!q) return true;
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
        );
      });
  }, [items, activeCategory, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                activeCategory === cat
                  ? "bg-navy-950 text-white"
                  : "bg-cream-100 text-navy-900 hover:bg-cream-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <SearchBox value={query} onChange={setQuery} placeholder="Search resources..." />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-charcoal-700">
          No results found. Try a different search or category.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex h-full flex-col rounded-2xl border border-cream-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="w-fit rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
                {item.fileType ?? item.category}
              </span>
              <h3 className="mt-3 font-bold text-navy-950">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm text-charcoal-700">{item.description}</p>
              <span className="mt-4 text-sm font-semibold text-gold-600">Access Resource &rarr;</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
