import { NextResponse } from "next/server";

/**
 * POST body: { name, email, company }
 * Optional: set DEMO_REQUEST_WEBHOOK_URL to forward JSON to Zapier, Slack, etc.
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, company } = body ?? {};
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof company !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !company.trim()
  ) {
    return NextResponse.json(
      { error: "name, email, and company are required" },
      { status: 400 },
    );
  }

  const payload = {
    name: name.trim(),
    email: email.trim(),
    company: company.trim(),
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.DEMO_REQUEST_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const whRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!whRes.ok) {
        return NextResponse.json(
          { error: "Webhook request failed" },
          { status: 502 },
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Webhook request failed" },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
