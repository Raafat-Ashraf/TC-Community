export function inputClass(hasError: boolean) {
  return [
    "w-full rounded-lg border px-4 py-3 transition-colors",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold-500",
    hasError ? "border-red-400 bg-red-50/50" : "border-cream-200 bg-white",
  ].join(" ");
}
