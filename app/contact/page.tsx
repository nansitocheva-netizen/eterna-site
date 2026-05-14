"use client";

import { useState } from "react";
import styles from "./page.module.css";
import PageIntro from "../components/PageIntro";
import { copy } from "../copy";

const { intro, info, form, success, errors } = copy.contact;

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
      setErrorMsg(err instanceof Error ? err.message : errors.generic);
      setStatus("error");
    }
  }

  return (
    <main className={styles.main}>

      {/* ── HERO ── */}
      <PageIntro
        eyebrow={intro.eyebrow}
        heading={intro.heading}
        text={intro.text}
      />

      {/* ── CONTACT GRID ── */}
      <section className={styles.contactGrid}>

        {/* Contact info */}
        <div className={styles.infoCol}>
          <div className={styles.infoLabel}>{info.label}</div>
          <div className={styles.infoLabelLine} />
          <div className={styles.infoCards}>
            {info.items.map((item) => (
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
          <div className={styles.infoLabel}>{form.label}</div>
          <div className={styles.infoLabelLine} />

          {status === "success" ? (
            <div className={styles.successBox}>
              <div className={styles.successTitle}>{success.title}</div>
              <p className={styles.successText}>{success.text}</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">{form.nameLabel}</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={styles.input}
                    placeholder={form.namePlaceholder}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">{form.emailLabel}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={styles.input}
                    placeholder={form.emailPlaceholder}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="phone">{form.phoneLabel}</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={styles.input}
                  placeholder={form.phonePlaceholder}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">{form.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={styles.textarea}
                  placeholder={form.messagePlaceholder}
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
                {status === "loading" ? form.submittingBtn : form.submitBtn}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
