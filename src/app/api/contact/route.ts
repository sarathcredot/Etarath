import { NextResponse } from "next/server";
import { sendContactEmail, type ContactEmailPayload } from "@/lib/email";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePayload(body: unknown): ContactEmailPayload | null {
  if (!body || typeof body !== "object") return null;

  const { fullName, working_email, contact_number, subject, description } =
    body as Record<string, unknown>;

  if (
    typeof fullName !== "string" ||
    !fullName.trim() ||
    typeof working_email !== "string" ||
    !isValidEmail(working_email) ||
    typeof contact_number !== "string" ||
    !contact_number.trim() ||
    typeof subject !== "string" ||
    !subject.trim() ||
    typeof description !== "string" ||
    !description.trim()
  ) {
    return null;
  }

  return {
    fullName: fullName.trim(),
    working_email: working_email.trim(),
    contact_number: contact_number.trim(),
    subject: subject.trim(),
    description: description.trim(),
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = validatePayload(body);

    if (!payload) {
      return NextResponse.json(
        { message: "Invalid form data. Please check all fields." },
        { status: 400 },
      );
    }

    await sendContactEmail(payload);

    return NextResponse.json({
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    const message =
      error instanceof Error && error.message.includes("SMTP is not configured")
        ? "Email service is not configured. Please try again later."
        : "Failed to send your message. Please try again later.";

    return NextResponse.json({ message }, { status: 500 });
  }
}
