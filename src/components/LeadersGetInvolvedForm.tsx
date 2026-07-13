"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadersGetInvolvedSchema, LeadersGetInvolvedValues } from "@/lib/schemas";
import { whatsappLink } from "@/content/site";
import SubmitButton from "./SubmitButton";
import FormStatus from "./FormStatus";
import { inputClass } from "./formStyles";

function buildWhatsAppMessage(values: LeadersGetInvolvedValues) {
  return [
    "100 Leaders — Get Involved",
    `Name: ${values.firstName} ${values.lastName}`,
    `Email: ${values.email}`,
    "",
    "Message:",
    values.message,
  ].join("\n");
}

export default function LeadersGetInvolvedForm() {
  const [status, setStatus] = useState<"idle" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadersGetInvolvedValues>({
    resolver: zodResolver(leadersGetInvolvedSchema),
    defaultValues: { department: "100-leaders" },
  });

  const onSubmit = async (values: LeadersGetInvolvedValues) => {
    setStatus("idle");
    try {
      fetch("/api/leaders-signup", {
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
      <input type="hidden" value="100-leaders" {...register("department")} />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1 block text-sm font-semibold text-navy-950">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            aria-invalid={!!errors.firstName}
            className={inputClass(!!errors.firstName)}
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1 block text-sm font-semibold text-navy-950">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            aria-invalid={!!errors.lastName}
            className={inputClass(!!errors.lastName)}
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="leaders-email" className="mb-1 block text-sm font-semibold text-navy-950">
          Email
        </label>
        <input
          id="leaders-email"
          type="email"
          aria-invalid={!!errors.email}
          className={inputClass(!!errors.email)}
          {...register("email")}
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="leaders-message" className="mb-1 block text-sm font-semibold text-navy-950">
          Message
        </label>
        <textarea
          id="leaders-message"
          rows={5}
          aria-invalid={!!errors.message}
          className={inputClass(!!errors.message)}
          {...register("message")}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <SubmitButton isSubmitting={isSubmitting}>
        {isSubmitting ? "Opening WhatsApp..." : "Get Involved"}
      </SubmitButton>
      <p className="text-xs text-charcoal-700/70">
        You&apos;ll be redirected to WhatsApp to send this directly to our team.
      </p>

      {status === "error" && <FormStatus status="error" />}
    </form>
  );
}
