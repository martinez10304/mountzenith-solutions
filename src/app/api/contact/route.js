import { Resend } from "resend";

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
    console.error("Contact form is missing RESEND_API_KEY or CONTACT_EMAIL env vars");
    return Response.json({ error: "Contact form is not configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "MountZenith Solutions <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: `New project inquiry from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Failed to send message" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
