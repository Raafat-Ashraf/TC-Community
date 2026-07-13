import { ReactNode } from "react";
import clsx from "clsx";

interface SubmitButtonProps {
  isSubmitting: boolean;
  children: ReactNode;
  className?: string;
}

export default function SubmitButton({ isSubmitting, children, className }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={clsx(
        "inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-semibold text-navy-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20 disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-70 sm:w-auto",
        className
      )}
    >
      {isSubmitting && (
        <svg
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
