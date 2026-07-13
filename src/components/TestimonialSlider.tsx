"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Testimonial } from "@/lib/types";

const AUTOPLAY_MS = 6000;

export default function TestimonialSlider({
  testimonials,
  light = false,
}: {
  testimonials: Testimonial[];
  light?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => setIndex((i + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused || testimonials.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, testimonials.length]);

  if (testimonials.length === 0) return null;

  const current = testimonials[index];

  return (
    <div
      className="mx-auto max-w-3xl text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative min-h-[220px]">
        <span
          className={
            "pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 text-6xl font-heading " +
            (light ? "text-white/10" : "text-navy-950/10")
          }
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <p
              className={
                "text-xl font-medium leading-relaxed sm:text-2xl " +
                (light ? "text-white" : "text-navy-950")
              }
            >
              &ldquo;{current.quote}&rdquo;
            </p>
            <footer className="mt-6">
              <p className={light ? "font-semibold text-gold-300" : "font-semibold text-gold-600"}>
                {current.name}
              </p>
              {current.role && (
                <p className={light ? "text-sm text-cream-100/80" : "text-sm text-charcoal-700"}>
                  {current.role}
                </p>
              )}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
      {testimonials.length > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
            className={
              "rounded-full border p-2 transition-colors " +
              (light
                ? "border-white/30 text-white hover:bg-white/10"
                : "border-navy-200 text-navy-900 hover:bg-navy-50")
            }
          >
            &larr;
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name + i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
                className={
                  "h-2.5 rounded-full transition-all duration-300 " +
                  (i === index
                    ? "w-6 bg-gold-500"
                    : light
                    ? "w-2.5 bg-white/30 hover:bg-white/50"
                    : "w-2.5 bg-navy-200 hover:bg-navy-300")
                }
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
            className={
              "rounded-full border p-2 transition-colors " +
              (light
                ? "border-white/30 text-white hover:bg-white/10"
                : "border-navy-200 text-navy-900 hover:bg-navy-50")
            }
          >
            &rarr;
          </button>
        </div>
      )}
    </div>
  );
}
