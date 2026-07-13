import { ReactNode } from "react";
import clsx from "clsx";
import Hero from "./Hero";

interface DepartmentHeroProps {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: ReactNode;
}

interface DepartmentPageLayoutProps {
  hero: DepartmentHeroProps;
  children: ReactNode;
}

/**
 * Shared shell for every department page: Hero + a stack of DepartmentSection
 * children. New departments only need a new content file and a page that
 * composes DepartmentSection blocks — no structural changes here.
 */
export default function DepartmentPageLayout({ hero, children }: DepartmentPageLayoutProps) {
  return (
    <>
      <Hero {...hero} />
      {children}
    </>
  );
}

interface DepartmentSectionProps {
  id?: string;
  tone?: "light" | "cream" | "navy";
  className?: string;
  children: ReactNode;
}

export function DepartmentSection({
  id,
  tone = "light",
  className,
  children,
}: DepartmentSectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "py-16 sm:py-24",
        tone === "light" && "bg-white",
        tone === "cream" && "bg-cream-100",
        tone === "navy" && "bg-navy-950 text-white",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
