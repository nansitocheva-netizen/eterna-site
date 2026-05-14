"use client";

import { useState } from "react";
import styles from "./page.module.css";

const contactItems = [
  {
    label: "Телефон",
    value: "+359 888 887 763",
    href: "tel:+359888887763",
  },
  {
    label: "Имейл",
    value: "eternamemories.bg@gmail.com",
    href: "mailto:eternamemories.bg@gmail.com",
  },
  {
    label: "Instagram",
    value: "@eterna__memories",
    href: "https://instagram.com/eterna__memories",
    external: true,
  },
  {
    label: "TikTok",
    value: "@eterna.memories",
    href: "https://tiktok.com/@eterna.memories",
    external: true,
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value || "—",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      date: "—",
      eventType: "Общо запитване",
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Грешка при изпращане.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Нещо се обърка. Моля, опитайте отново.");
      setStatus("error");
    }
  }

  return (
    <main className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.eyebrow}>КОНТАКТИ</div>
        <div className={styles.eyebrowLine} />
        <h1 className={styles.heading}>Свържете се с нас</h1>
        <p className={styles.subtext}>
          Имате въпрос или искате да проверите свободни дати?
          <br />
          Ще се свържем с вас в рамките на 24 часа.
        </p>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className={styles.contactGrid}>

        {/* Contact info */}
        <div className={styles.infoCol}>
          <div className={styles.infoLabel}>НАМЕРЕТЕ НИ</div>
          <div className={styles.infoLabelLine} />
          <div className={styles.infoCards}>
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={styles.infoCard}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div className={styles.infoCardLabel}>{item.label}</div>
                <div className={styles.infoCardValue}>{item.value}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Inquiry form */}
        <div className={styles.formCol}>
          <div className={styles.infoLabel}>ИЗПРАТЕТЕ ЗАПИТВАНЕ</div>
          <div className={styles.infoLabelLine} />

          {status === "success" ? (
            <div className={styles.successBox}>
              <div className={styles.successTitle}>Съобщението е изпратено!</div>
              <p className={styles.successText}>
                Благодарим ви. Ще се свържем с вас в рамките на 24 часа.
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">Вашето име *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={styles.input}
                    placeholder="Иван Иванов"
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">Имейл *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={styles.input}
                    placeholder="ivan@example.com"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="phone">Телефон</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={styles.input}
                  placeholder="+359 ..."
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">Съобщение *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={styles.textarea}
                  placeholder="Разкажете ни за вашия повод, дата и всичко, което искате да знаем."
                />
              </div>

              {status === "error" && (
                <p className={styles.errorMsg}>{errorMsg}</p>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "loading"}
              >
                {status === "loading" ? "ИЗПРАЩАНЕ…" : "ИЗПРАТИ ЗАПИТВАНЕ"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
