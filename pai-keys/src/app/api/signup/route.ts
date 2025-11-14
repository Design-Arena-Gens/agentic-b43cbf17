import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

interface SignupPayload {
  name: string;
  email: string;
  company?: string;
  useCase?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  const payload = (await request.json().catch(() => null)) as
    | SignupPayload
    | null;

  if (!payload || !payload.email || !payload.name) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json(
      { error: "Email address is invalid." },
      { status: 400 },
    );
  }

  const submissionId = randomUUID();

  console.log("Pai Keys waitlist submission", {
    submissionId,
    ...payload,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json(
    {
      ok: true,
      submissionId,
      message:
        "Thanks for requesting access. A member of the Pai Keys team will reach out shortly.",
    },
    { status: 201 },
  );
}
