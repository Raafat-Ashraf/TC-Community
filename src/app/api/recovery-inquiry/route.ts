import { NextRequest, NextResponse } from "next/server";
import { recoveryInquirySchema } from "@/lib/schemas";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = recoveryInquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  await sendEmail({
    subject: `Recovery House inquiry (${parsed.data.inquiryType}) from ${parsed.data.name}`,
    data: parsed.data,
  });

  return NextResponse.json({ ok: true });
}
