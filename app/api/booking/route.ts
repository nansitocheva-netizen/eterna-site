import { Resend } from "resend";
import { NextResponse } from "next/server";
import { email } from "@/app/copy";

const recipient = process.env.EMAIL_RECIPIENT ?? email;

function formatEmailHtml(form: Record<string, string>) {
  const product = form.product || "(не е посочен)";
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #2e2a27;">
      <h2 style="margin-bottom: 20px; color: #2b1d16;">Ново запитване за дата</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; font-weight: 600; width: 180px;">Име</td><td style="padding: 8px 0;">${form.name}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Телефон</td><td style="padding: 8px 0;">${form.phone}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Имейл</td><td style="padding: 8px 0;">${form.email}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Дата на събитието</td><td style="padding: 8px 0;">${form.date}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Тип събитие</td><td style="padding: 8px 0;">${form.eventType}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Продукт</td><td style="padding: 8px 0;">${product}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Съобщение</td><td style="padding: 8px 0;">${form.message || "(не е попълнено)"}</td></tr>
      </table>
      <p style="margin-top: 24px; color: #61594f;">Това е автоматично генериран имейл от формата за запазване на дата на Eterna Memories.</p>
    </div>
  `;
}

function formatEmailText(form: Record<string, string>) {
  const product = form.product || "(не е посочен)";
  return `Ново запитване за дата\n\nИме: ${form.name}\nТелефон: ${form.phone}\nИмейл: ${form.email}\nДата на събитието: ${form.date}\nТип събитие: ${form.eventType}\nПродукт: ${product}\nСъобщение: ${form.message || "(не е попълнено)"}\n\nИзпратено от Eterna Memories.`;
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Невалидни данни." }, { status: 400 });
  }

  const { name, phone, email, date, eventType } = payload as Record<string, string>;
  if (!name || !phone || !email || !date || !eventType) {
    return NextResponse.json({ error: "Попълнете всички задължителни полета." }, { status: 400 });
  }

  const text = formatEmailText(payload as Record<string, string>);

  // Dev mode: no API key configured → print to terminal and return success
  if (!process.env.RESEND_API_KEY) {
    console.log("\n========== [BOOKING FORM — DEV MODE] ==========");
    console.log("No RESEND_API_KEY set — skipping real send.");
    console.log(`To: ${recipient}`);
    console.log(text);
    console.log("================================================\n");
    return NextResponse.json({ success: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const html = formatEmailHtml(payload as Record<string, string>);
  const from = process.env.EMAIL_FROM ?? "onboarding@resend.dev";

  try {
    const { error } = await resend.emails.send({
      from,
      to: recipient,
      subject: `Ново запитване за дата от ${name}`,
      text,
      html,
    });

    if (error) {
      return NextResponse.json(
        { error: `Неуспешно изпращане на имейл: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: `Неуспешно изпращане на имейл: ${err instanceof Error ? err.message : "Грешка"}` },
      { status: 500 }
    );
  }
}
