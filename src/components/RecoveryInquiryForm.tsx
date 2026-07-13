"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { recoveryInquirySchema, RecoveryInquiryValues } from "@/lib/schemas";
import SubmitButton from "./SubmitButton";
import FormStatus from "./FormStatus";
import { inputClass } from "./formStyles";

const inquiryOptions: { value: RecoveryInquiryValues["inquiryType"]; label: string }[] = [
  { value: "residency", label: "Apply for Residency" },
  { value: "support", label: "I Want to Give Support" },
  { value: "partnership", label: "Partnership Opportunities" },
  { value: "general", label: "General Question" },
];

export default function RecoveryInquiryForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RecoveryInquiryValues>({
    resolver: zodResolver(recoveryInquirySchema),
    defaultValues: { department: "recovery", inquiryType: "residency" },
  });

  const onSubmit = async (values: RecoveryInquiryValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/recovery-inquiry", {
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <input type="hidden" value="recovery" {...register("department")} />
      <div>
        <label htmlFor="rh-name" className="mb-1 block text-sm font-semibold text-navy-950">
          Full Name
        </label>
        <input
          id="rh-name"
          type="text"
          aria-invalid={!!errors.name}
          className={inputClass(!!errors.name)}
          {...register("name")}
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="rh-email" className="mb-1 block text-sm font-semibold text-navy-950">
            Email
          </label>
          <input
            id="rh-email"
            type="email"
            aria-invalid={!!errors.email}
            className={inputClass(!!errors.email)}
            {...register("email")}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="rh-phone" className="mb-1 block text-sm font-semibold text-navy-950">
            Phone (optional)
          </label>
          <input
            id="rh-phone"
            type="tel"
            className={inputClass(false)}
            {...register("phone")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="rh-inquiry" className="mb-1 block text-sm font-semibold text-navy-950">
          I&apos;m Reaching Out About
        </label>
        <select
          id="rh-inquiry"
          className={inputClass(false)}
          {...register("inquiryType")}
        >
          {inquiryOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="rh-message" className="mb-1 block text-sm font-semibold text-navy-950">
          Message
        </label>
        <textarea
          id="rh-message"
          rows={5}
          aria-invalid={!!errors.message}
          className={inputClass(!!errors.message)}
          {...register("message")}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <SubmitButton isSubmitting={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit Inquiry"}
      </SubmitButton>

      {status === "success" && (
        <FormStatus
          status="success"
          successMessage="Thank you! Our team will be in touch soon."
        />
      )}
      {status === "error" && <FormStatus status="error" />}
    </form>
  );
}
