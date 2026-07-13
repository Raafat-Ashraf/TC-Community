import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/schemas";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  await sendEmail({
    subject: `Newsletter signup: ${parsed.data.email}`,
    data: parsed.data,
  });

  return NextResponse.json({ ok: true });
}
