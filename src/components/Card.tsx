import Link from "next/link";
import { CardItem } from "@/lib/types";
import clsx from "clsx";

export default function Card({ title, description, href, ctaLabel, comingSoon }: CardItem) {
  const content = (
    <div
      className={clsx(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-cream-200 bg-white p-6 shadow-sm transition-all duration-300",
        !comingSoon && "hover:-translate-y-1 hover:shadow-xl hover:border-gold-300"
      )}
    >
      <span
        className={clsx(
          "absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-300",
          !comingSoon && "group-hover:scale-x-100"
        )}
        aria-hidden="true"
      />
      {comingSoon && (
        <span className="mb-3 inline-block w-fit rounded-full bg-cream-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-charcoal-700">
          Coming Soon
        </span>
      )}
      <h3 className="text-xl font-bold text-navy-950">{title}</h3>
      <p className="mt-2 flex-1 text-charcoal-700">{description}</p>
      {ctaLabel && (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 transition-all group-hover:gap-2">
          {ctaLabel}
          <span aria-hidden="true">&rarr;</span>
        </span>
      )}
    </div>
  );

  return (
    <Link
      href={href}
      className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
    >
      {content}
    </Link>
  );
}
