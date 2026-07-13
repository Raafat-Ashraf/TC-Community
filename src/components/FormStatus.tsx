import { motion } from "framer-motion";

interface FormStatusProps {
  status: "success" | "error";
  successMessage?: string;
  errorMessage?: string;
}

export default function FormStatus({ status, successMessage, errorMessage }: FormStatusProps) {
  const isSuccess = status === "success";

  return (
    <motion.p
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      className={
        "flex items-center gap-2 text-sm font-medium " +
        (isSuccess ? "text-green-700" : "text-red-600")
      }
      role="status"
    >
      <span
        className={
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs text-white " +
          (isSuccess ? "bg-green-600" : "bg-red-600")
        }
        aria-hidden="true"
      >
        {isSuccess ? "✓" : "!"}
      </span>
      {isSuccess
        ? successMessage ?? "Thank you! We'll be in touch soon."
        : errorMessage ?? "Something went wrong. Please try again."}
    </motion.p>
  );
}
