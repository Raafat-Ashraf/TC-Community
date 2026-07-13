import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  department: z.string().min(1, "Please select a department"),
  message: z.string().min(10, "Please enter a message of at least 10 characters"),
});
export type ContactFormValues = z.infer<typeof contactSchema>;

export const leadersGetInvolvedSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please enter a message of at least 10 characters"),
  department: z.literal("100-leaders"),
});
export type LeadersGetInvolvedValues = z.infer<typeof leadersGetInvolvedSchema>;

export const recoveryInquirySchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  inquiryType: z.enum(["residency", "support", "partnership", "general"]),
  message: z.string().min(10, "Please enter a message of at least 10 characters"),
  department: z.literal("recovery"),
});
export type RecoveryInquiryValues = z.infer<typeof recoveryInquirySchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});
export type NewsletterValues = z.infer<typeof newsletterSchema>;
