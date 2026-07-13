import { NextRequest, NextResponse } from "next/server";
import { leadersGetInvolvedSchema } from "@/lib/schemas";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = leadersGetInvolvedSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  await sendEmail({
    subject: `100 Leaders — Get Involved submission from ${parsed.data.firstName} ${parsed.data.lastName}`,
    data: parsed.data,
  });

  return NextResponse.json({ ok: true });
}
