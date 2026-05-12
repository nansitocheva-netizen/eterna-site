"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const BOOKING_TEXT_RE = /Запази[\s\S]*дата/i;
const EVENT_OPTIONS = [
  "Сватба",
  "Рожден ден",
  "Корпоративно събитие",
  "Промоция",
  "Друго",
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  date: "",
  eventType: "Сватба",
  message: "",
};

function formatEmailHtml(form: typeof initialForm) {
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
      <p style="margin-top: 24px; color: #61594f;">Това съобщение е изпратено от формата за резервиране на Eterna Memories.</p>
    </div>
  `;
}

function formatEmailText(form: typeof initialForm) {
  return `Ново запитване за дата\n\nИме: ${form.name}\nТелефон: ${form.phone}\nИмейл: ${form.email}\nДата на събитието: ${form.date}\nТип събитие: ${form.eventType}\nСъобщение: ${form.message || "(не е попълнено)"}\n\nИзпратено от Eterna Memories.`;
}

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      if (open) return;
      const target = (event.target as HTMLElement)?.closest("button, a, [role='button'], div");
      if (!target) return;
      if ((target as HTMLElement).dataset?.bookingTrigger === "true") {
        event.preventDefault();
        setOpen(true);
        return;
      }
      const text = target.textContent?.trim() || "";
      if (!BOOKING_TEXT_RE.test(text)) return;
      event.preventDefault();
      setOpen(true);
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setStatus("idle");
        setError(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  const handleFieldChange = (field: string, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setStatus("idle");
    setError(null);
  };

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    if (!form.name || !form.phone || !form.email || !form.date || !form.eventType) {
      setStatus("error");
      setError("Моля, попълнете всички задължителни полета.");
      return;
    }

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || "Грешка при изпращане.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Грешка при изпращане.");
    }
  };

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="booking-modal-overlay"
      role="dialog"
      aria-modal="true"
      onClick={(event) => {
        if (event.target === overlayRef.current) {
          handleClose();
        }
      }}
    >
      <div className="booking-modal-card">
        <button
          className="booking-modal-close"
          onClick={handleClose}
          aria-label="Затвори формата за резервация"
        >
          ✕
        </button>

        <div className="booking-modal-content">
          <div className="booking-modal-headline">
            <div className="booking-modal-tag">Запази дата</div>
            <h2>Резервация на видео будка</h2>
            <p>Попълнете формата и ние ще се свържем с вас възможно най-скоро.</p>
          </div>

          {status === "success" ? (
            <div className="booking-modal-success">
              <p>Благодарим ви! Ще се свържем с вас скоро.</p>
              <button className="booking-button" type="button" onClick={handleClose}>
                Затвори
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="booking-form-grid">
                <label className="booking-form-field">
                  Име
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) => handleFieldChange("name", event.target.value)}
                    placeholder="Вашето име"
                    required
                  />
                </label>

                <label className="booking-form-field">
                  Телефон
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(event) => handleFieldChange("phone", event.target.value)}
                    placeholder="+359 88 888 7763"
                    required
                  />
                </label>

                <label className="booking-form-field">
                  Имейл
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => handleFieldChange("email", event.target.value)}
                    placeholder="example@mail.com"
                    required
                  />
                </label>

                <label className="booking-form-field">
                  Дата на събитието
                  <input
                    type="date"
                    value={form.date}
                    onChange={(event) => handleFieldChange("date", event.target.value)}
                    required
                  />
                </label>

                <label className="booking-form-field">
                  Тип събитие
                  <select
                    value={form.eventType}
                    onChange={(event) => handleFieldChange("eventType", event.target.value)}
                    required
                  >
                    {EVENT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="booking-form-field booking-form-field--span">
                Съобщение
                <textarea
                  value={form.message}
                  onChange={(event) => handleFieldChange("message", event.target.value)}
                  placeholder="Напишете допълнителни детайли или въпроси..."
                  rows={4}
                />
              </label>

              {status === "error" && <p className="booking-form-error">{error}</p>}

              <button className="booking-button booking-button--full" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Изпращане..." : "Изпрати запитване"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
