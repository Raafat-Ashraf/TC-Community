"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { NewsCategory, NewsItem } from "@/lib/types";
import SearchBox from "./SearchBox";

const categories: (NewsCategory | "All")[] = [
  "All",
  "News",
  "Events",
  "Workshops",
  "Conferences",
  "Articles",
];

export default function NewsGrid({ items }: { items: NewsItem[] }) {
  const [activeCategory, setActiveCategory] = useState<(NewsCategory | "All")>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return items
      .filter((item) => activeCategory === "All" || item.category === activeCategory)
      .filter((item) => {
        const q = query.trim().toLowerCase();
        if (!q) return true;
        return (
          item.title.toLowerCase().includes(q) || item.excerpt.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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
        <SearchBox value={query} onChange={setQuery} placeholder="Search news & events..." />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-charcoal-700">
          No results found. Try a different search or category.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="block h-full overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-44 w-full bg-cream-200">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                    {item.category}
                  </span>
                  <time className="text-xs text-charcoal-700/70" dateTime={item.date}>
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h3 className="mt-2 font-bold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal-700">{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
