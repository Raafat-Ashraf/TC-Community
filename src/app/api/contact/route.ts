import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  await sendEmail({
    subject: `New contact form submission from ${parsed.data.name}`,
    data: parsed.data,
  });

  return NextResponse.json({ ok: true });
}
