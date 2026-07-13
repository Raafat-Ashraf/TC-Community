"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, UtilityCTA } from "@/lib/types";
import CTAButton from "./CTAButton";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  utilityCTAs: UtilityCTA[];
}

export default function MobileMenu({ open, onClose, links, utilityCTAs }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-white p-6 shadow-2xl"
            aria-label="Mobile navigation"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-heading text-lg font-bold text-navy-950">Menu</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-full p-2 text-navy-900 hover:bg-cream-100"
              >
                &#10005;
              </button>
            </div>
            <ul className="flex flex-col gap-1">
              {links.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={
                        "block rounded-lg px-3 py-3 text-lg font-medium transition-colors " +
                        (isActive
                          ? "bg-cream-100 text-gold-600"
                          : "text-navy-900 hover:bg-cream-100")
                      }
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              {utilityCTAs.map((cta, i) => (
                <CTAButton
                  key={cta.href + cta.label}
                  href={cta.href}
                  variant={i === 0 ? "primary" : "secondary"}
                  size="md"
                  className="w-full"
                >
                  {cta.label}
                </CTAButton>
              ))}
            </div>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>
  );
}
