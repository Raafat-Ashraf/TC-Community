// TODO: Wire up a real email provider (e.g. Resend, SendGrid, or SMTP via nodemailer).
// This stub only logs submissions server-side so the app is fully functional in dev/demo
// without requiring API keys. Replace the console.log below with a real send call, e.g.:
//
//   import { Resend } from "resend";
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({ from, to, subject, html });

export async function sendEmail(params: {
  subject: string;
  to?: string;
  data: Record<string, unknown>;
}) {
  console.log(`[email:stub] ${params.subject}`, params.data);
  return { ok: true };
}
