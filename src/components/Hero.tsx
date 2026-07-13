"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import CTAButton from "./CTAButton";

interface HeroCta {
  label: string;
  href: string;
}

interface HeroProps {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  children?: ReactNode;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  size?: "lg" | "md";
  imageSrc?: string;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero({
  eyebrow,
  headline,
  subhead,
  children,
  primaryCta,
  secondaryCta,
  size = "lg",
  imageSrc,
}: HeroProps) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden bg-navy-950 text-white",
        size === "lg" ? "py-28 sm:py-36" : "py-16 sm:py-20"
      )}
    >
      {imageSrc && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${imageSrc})` }}
          aria-hidden="true"
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-800/90"
        aria-hidden="true"
      />

      {/* Decorative glow accents */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gold-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl"
        aria-hidden="true"
      />
      {/* Subtle dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      {/* Bottom edge fade into page */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-4xl px-4 text-center sm:px-6"
      >
        {eyebrow && (
          <motion.p
            variants={item}
            className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-300"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          variants={item}
          className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
        >
          {headline}
        </motion.h1>
        {subhead && (
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg text-cream-100/90 sm:text-xl"
          >
            {subhead}
          </motion.p>
        )}
        <motion.div variants={item}>{children}</motion.div>
        {(primaryCta || secondaryCta) && (
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            {primaryCta && (
              <CTAButton href={primaryCta.href} variant="primary" size="lg">
                {primaryCta.label}
              </CTAButton>
            )}
            {secondaryCta && (
              <CTAButton
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy-950"
              >
                {secondaryCta.label}
              </CTAButton>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
