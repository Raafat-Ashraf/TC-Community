"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  primaryNav,
  defaultUtilityCTAs,
  recoveryUtilityCTAs,
  leadersUtilityCTAs,
  siteConfig,
} from "@/content/site";
import CTAButton from "./CTAButton";
import MobileMenu from "./MobileMenu";

function getUtilityCTAs(pathname: string) {
  if (pathname.startsWith("/departments/recovery")) return recoveryUtilityCTAs;
  if (pathname.startsWith("/departments/100-leaders")) return leadersUtilityCTAs;
  return defaultUtilityCTAs;
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const utilityCTAs = getUtilityCTAs(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-gold-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-950"
      >
        Skip to content
      </a>

      {/* Utility bar */}
      <div
        className={clsx(
          "hidden overflow-hidden bg-navy-950 text-white transition-[max-height,opacity] duration-300 md:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-3 px-6 py-2 text-sm">
          {utilityCTAs.map((cta, i) => (
            <CTAButton
              key={cta.href + cta.label}
              href={cta.href}
              variant={i === 0 ? "primary" : "secondary"}
              size="sm"
            >
              {cta.label}
            </CTAButton>
          ))}
        </div>
      </div>

      {/* Primary nav */}
      <div
        className={clsx(
          "border-b bg-white/95 backdrop-blur transition-shadow duration-300",
          scrolled ? "border-transparent shadow-md" : "border-cream-200 shadow-none"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-heading text-xl font-bold text-navy-950">
            {siteConfig.shortName}
            <span className="text-gold-600"> Central</span>
          </Link>

          <nav className="hidden md:block" aria-label="Primary navigation">
            <ul className="flex items-center gap-8">
              {primaryNav.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.href} className="relative py-1">
                    <Link
                      href={link.href}
                      className={clsx(
                        "text-sm font-semibold uppercase tracking-wide transition-colors",
                        isActive ? "text-gold-600" : "text-navy-900 hover:text-gold-600"
                      )}
                    >
                      {link.label}
                    </Link>
                    <span
                      className={clsx(
                        "absolute -bottom-1 left-0 h-0.5 rounded-full bg-gold-500 transition-all duration-300",
                        isActive ? "w-full" : "w-0"
                      )}
                      aria-hidden="true"
                    />
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            className="rounded-lg p-2 text-navy-900 hover:bg-cream-100 md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={primaryNav}
        utilityCTAs={utilityCTAs}
      />
    </header>
  );
}
