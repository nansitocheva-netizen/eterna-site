<<<<<<< HEAD
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const recipient = "eternamemories.bg@gmail.com";

function formatEmailHtml(form: Record<string, string>) {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #2e2a27;">
      <h2 style="margin-bottom: 20px; color: #2b1d16;">Ново запитване за дата</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; font-weight: 600; width: 180px;">Име</td><td style="padding: 8px 0;">${form.name}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Телефон</td><td style="padding: 8px 0;">${form.phone}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Имейл</td><td style="padding: 8px 0;">${form.email}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Дата на събитието</td><td style="padding: 8px 0;">${form.date}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Тип събитие</td><td style="padding: 8px 0;">${form.eventType}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Съобщение</td><td style="padding: 8px 0;">${form.message || "(не е попълнено)"}</td></tr>
      </table>
      <p style="margin-top: 24px; color: #61594f;">Това е автоматично генериран имейл от формата за запазване на дата на Eterna Memories.</p>
    </div>
  `;
}

function formatEmailText(form: Record<string, string>) {
  return `Ново запитване за дата\n\nИме: ${form.name}\nТелефон: ${form.phone}\nИмейл: ${form.email}\nДата на събитието: ${form.date}\nТип събитие: ${form.eventType}\nСъобщение: ${form.message || "(не е попълнено)"}\n\nИзпратено от Eterna Memories.`;
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

  const smtpUser = process.env.EMAIL_USER;
  const smtpPass = process.env.EMAIL_PASS;

  if (!smtpUser || !smtpPass) {
    return NextResponse.json(
      { error: "SMTP credentials are not configured. Set EMAIL_USER and EMAIL_PASS in .env.local." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const html = formatEmailHtml(payload as Record<string, string>);
  const text = formatEmailText(payload as Record<string, string>);

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "no-reply@eternamemories.bg",
      to: recipient,
      subject: `Ново запитване за дата от ${name}`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: `Неуспешно изпращане на имейл: ${error instanceof Error ? error.message : "Грешка"}` }, { status: 500 });
  }
}
=======
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const recipient = "eternamemories.bg@gmail.com";

function formatEmailHtml(form: Record<string, string>) {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #2e2a27;">
      <h2 style="margin-bottom: 20px; color: #2b1d16;">Ново запитване за дата</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; font-weight: 600; width: 180px;">Име</td><td style="padding: 8px 0;">${form.name}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Телефон</td><td style="padding: 8px 0;">${form.phone}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Имейл</td><td style="padding: 8px 0;">${form.email}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Дата на събитието</td><td style="padding: 8px 0;">${form.date}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Тип събитие</td><td style="padding: 8px 0;">${form.eventType}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Съобщение</td><td style="padding: 8px 0;">${form.message || "(не е попълнено)"}</td></tr>
      </table>
      <p style="margin-top: 24px; color: #61594f;">Това е автоматично генериран имейл от формата за запазване на дата на Eterna Memories.</p>
    </div>
  `;
}

function formatEmailText(form: Record<string, string>) {
  return `Ново запитване за дата\n\nИме: ${form.name}\nТелефон: ${form.phone}\nИмейл: ${form.email}\nДата на събитието: ${form.date}\nТип събитие: ${form.eventType}\nСъобщение: ${form.message || "(не е попълнено)"}\n\nИзпратено от Eterna Memories.`;
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

  const smtpUser = process.env.EMAIL_USER;
  const smtpPass = process.env.EMAIL_PASS;

  if (!smtpUser || !smtpPass) {
    return NextResponse.json(
      { error: "SMTP credentials are not configured. Set EMAIL_USER and EMAIL_PASS in .env.local." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const html = formatEmailHtml(payload as Record<string, string>);
  const text = formatEmailText(payload as Record<string, string>);

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "no-reply@eternamemories.bg",
      to: recipient,
      subject: `Ново запитване за дата от ${name}`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: `Неуспешно изпращане на имейл: ${error instanceof Error ? error.message : "Грешка"}` }, { status: 500 });
  }
}
>>>>>>> e753749d09b6d79831e32b66ec42dfe6156011fa
