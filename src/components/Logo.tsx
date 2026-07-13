import clsx from "clsx";

interface LogoProps {
  /** "dark" = navy center star, for use on light backgrounds (default).
   *  "light" = white center star, for use on dark/navy backgrounds. */
  theme?: "dark" | "light";
  /** Show the "The Community Central" wordmark next to the mark. */
  withWordmark?: boolean;
  className?: string;
  markClassName?: string;
}

export function LogoMark({
  theme = "dark",
  className,
}: {
  theme?: "dark" | "light";
  className?: string;
}) {
  const centerFill = theme === "light" ? "#ffffff" : "var(--color-navy-950)";

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="TC — The Community Central logo"
    >
      <circle
        cx="24"
        cy="24"
        r="17"
        fill="none"
        stroke="var(--color-gold-500)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="80 106.8"
        strokeDashoffset="-8"
        transform="rotate(45 24 24)"
      />
      <rect x="15" y="14.5" width="18" height="5" rx="2.5" fill={centerFill} />
      <rect x="21.5" y="14.5" width="5" height="19" rx="2.5" fill={centerFill} />
    </svg>
  );
}

export default function Logo({
  theme = "dark",
  withWordmark = true,
  className,
  markClassName,
}: LogoProps) {
  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <LogoMark theme={theme} className={clsx("h-9 w-9 shrink-0", markClassName)} />
      {withWordmark && (
        <span
          className={clsx(
            "font-heading text-xl font-bold leading-tight",
            theme === "light" ? "text-white" : "text-navy-950"
          )}
        >
          The Community
          <span className="text-gold-500"> Central</span>
        </span>
      )}
    </span>
  );
}
