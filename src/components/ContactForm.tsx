"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "@/lib/schemas";
import { whatsappLink } from "@/content/site";
import SubmitButton from "./SubmitButton";
import FormStatus from "./FormStatus";
import { inputClass } from "./formStyles";

const departmentOptions = [
  { value: "", label: "Select a department" },
  { value: "general", label: "General Inquiry" },
  { value: "recovery", label: "The Recovery House" },
  { value: "100-leaders", label: "100 Leaders" },
  { value: "partnership", label: "Partnership" },
];

function buildWhatsAppMessage(values: ContactFormValues) {
  const department =
    departmentOptions.find((opt) => opt.value === values.department)?.label ?? values.department;

  return [
    "New Contact Form Submission",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.phone ? `Phone: ${values.phone}` : null,
    `Department: ${department}`,
    "",
    "Message:",
    values.message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    try {
      // Log the submission for our own records; the WhatsApp redirect below is
      // the actual delivery channel, so this call is fire-and-forget.
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).catch(() => {});

      window.location.assign(whatsappLink(buildWhatsAppMessage(values)));
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-semibold text-navy-950">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          aria-invalid={!!errors.name}
          className={inputClass(!!errors.name)}
          {...register("name")}
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold text-navy-950">
            Email
          </label>
          <input
            id="email"
            type="email"
            aria-invalid={!!errors.email}
            className={inputClass(!!errors.email)}
            {...register("email")}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-navy-950">
            Phone (optional)
          </label>
          <input
            id="phone"
            type="tel"
            className={inputClass(false)}
            {...register("phone")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="department" className="mb-1 block text-sm font-semibold text-navy-950">
          Department
        </label>
        <select
          id="department"
          aria-invalid={!!errors.department}
          className={inputClass(!!errors.department)}
          defaultValue=""
          {...register("department")}
        >
          {departmentOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.department && (
          <p className="mt-1 text-xs text-red-600">{errors.department.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold text-navy-950">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={!!errors.message}
          className={inputClass(!!errors.message)}
          {...register("message")}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <SubmitButton isSubmitting={isSubmitting}>
        {isSubmitting ? "Opening WhatsApp..." : "Send Message"}
      </SubmitButton>
      <p className="text-xs text-charcoal-700/70">
        You&apos;ll be redirected to WhatsApp to send this message directly to our team.
      </p>

      {status === "error" && <FormStatus status="error" />}
    </form>
  );
}
