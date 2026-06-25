import styles from "./page.module.css";
import PageIntro from "../components/PageIntro";
import { copy } from "../copy";
import { pageMetadata } from "../seo";
import ContactForm from "./ContactForm";

export const metadata = pageMetadata({
  title: "Контакти — резервирай видео будка | Пловдив",
  description:
    "Свържете се с Eterna Memories за видео будка под наем в Пловдив и региона. Проверете свободни дати — отговаряме на запитвания в рамките на 24 часа.",
  path: "/contact",
});

const { intro, info, form } = copy.contact;

export default function ContactPage() {
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
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
