import nodemailer from "nodemailer";

export interface ContactEmailPayload {
  fullName: string;
  working_email: string;
  contact_number: string;
  subject: string;
  description: string;
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.");
  }

  return {
    host,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  };
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const to = process.env.CONTACT_TO_EMAIL || "support@etarath.ai";
  const from =
    process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || "noreply@etarath.ai";

  const transporter = nodemailer.createTransport(getSmtpConfig());

  const { fullName, working_email, contact_number, subject, description } =
    payload;

  await transporter.sendMail({
    from: `"Etarath Contact" <${from}>`,
    to,
    replyTo: working_email,
    subject: `[Contact Form] ${subject}`,
    text: [
      `Name: ${fullName}`,
      `Email: ${working_email}`,
      `Phone: ${contact_number}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      description,
    ].join("\n"),
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> <a href="mailto:${working_email}">${working_email}</a></p>
      <p><strong>Phone:</strong> ${contact_number}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${description.replace(/\n/g, "<br />")}</p>
    `,
  });
}
