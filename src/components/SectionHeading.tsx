import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "mb-2 text-sm font-semibold uppercase tracking-widest",
            light ? "text-gold-300" : "text-gold-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "text-3xl font-bold sm:text-4xl",
          light ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-lg",
            light ? "text-cream-100/90" : "text-charcoal-700"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
