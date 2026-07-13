import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-sm hover:shadow-lg hover:shadow-gold-500/20",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 shadow-sm hover:shadow-lg hover:shadow-navy-950/30",
  outline:
    "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white",
  ghost: "text-navy-900 hover:text-gold-600 underline underline-offset-4",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ease-out will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </Link>
  );
}
