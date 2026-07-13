"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { newsletterSchema, NewsletterValues } from "@/lib/schemas";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  const onSubmit = async (values: NewsletterValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor="newsletter-email" className="mb-2 block text-sm font-semibold text-white">
        Newsletter Signup
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email address"
          aria-invalid={!!errors.email}
          className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400"
          {...register("email")}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-gold-400 disabled:translate-y-0 disabled:opacity-60"
        >
          {isSubmitting && (
            <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          )}
          Subscribe
        </button>
      </div>
      {errors.email && <p className="mt-2 text-xs text-gold-300">{errors.email.message}</p>}
      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-xs text-gold-300"
        >
          ✓ Thanks for subscribing!
        </motion.p>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs text-red-300">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
