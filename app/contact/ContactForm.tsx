"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { copy } from "../copy";

const { form, success, errors } = copy.contact;

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formEl = e.currentTarget;
    const data = {
      name: (formEl.elements.namedItem("name") as HTMLInputElement).value,
      email: (formEl.elements.namedItem("email") as HTMLInputElement).value,
      phone: (formEl.elements.namedItem("phone") as HTMLInputElement).value || "—",
      message: (formEl.elements.namedItem("message") as HTMLTextAreaElement).value,
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
      formEl.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : errors.generic);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.successBox}>
        <div className={styles.successTitle}>{success.title}</div>
        <p className={styles.successText}>{success.text}</p>
      </div>
    );
  }

  return (
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
  );
}
