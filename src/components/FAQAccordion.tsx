"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQItem } from "@/lib/types";
import clsx from "clsx";

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-cream-200 rounded-2xl border border-cream-200 bg-white shadow-sm">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-cream-50"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-semibold text-navy-950">{item.question}</span>
              <span
                className={clsx(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream-100 text-lg text-gold-600 transition-transform duration-300",
                  isOpen && "rotate-45 bg-gold-500 text-white"
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-charcoal-700">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
