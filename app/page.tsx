import Link from "next/link";
import styles from "./page.module.css";

/* ---- Icons ---- */
const AlbumIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

const SparkleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 21a8 8 0 0 0-16 0" />
    <circle cx="10" cy="8" r="5" />
    <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
  </svg>
);

const SaveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
    <path d="M14 2v5a1 1 0 0 0 1 1h5" />
    <path d="M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z" />
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const WeddingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const GiftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M12 8v13" />
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

/* ---- Data ---- */
const features = [
  {
    title: "ФИЗИЧЕСКИ АЛБУМ",
    text: "Не само файлове — получавате красив физически продукт с вградени видео послания, персонализиран специално за вашето събитие.",
    Icon: AlbumIcon,
  },
  {
    title: "ПЕРСОНАЛИЗИРАНО",
    text: "Вашите имена, дата и дизайн. Всеки детайл е направен специално за вас — от стартовия екран до финалния албум.",
    Icon: SparkleIcon,
  },
  {
    title: "БЕЗ НИКАКВО УСИЛИЕ",
    text: "Нашият екип настройва всичко и е на място по време на цялото събитие. Гостите просто застават пред камерата.",
    Icon: CheckCircleIcon,
  },
];

const steps = [
  {
    number: "01",
    title: "Гостите записват",
    text: "Всеки гост застава пред будката и записва своето послание — лично, искрено, неповторимо.",
    Icon: UserIcon,
  },
  {
    number: "02",
    title: "Ние се грижим за всичко",
    text: "Нашият екип настройва будката и е присъствен по време на цялото събитие, за да осигури безупречно изживяване.",
    Icon: SaveIcon,
  },
  {
    number: "03",
    title: "Получавате своя албум",
    text: "След събитието получавате своя персонализиран физически албум с вградени видео послания, готов да го пазите цял живот.",
    Icon: HeartIcon,
  },
];

const events = [
  { title: "Сватби", Icon: WeddingIcon },
  { title: "Рождени дни", Icon: GiftIcon },
  { title: "Корпоративни събития", Icon: BriefcaseIcon },
  { title: "Baby Showers", Icon: StarIcon },
];

const faqs = [
  {
    q: "Как получавам видеата след събитието?",
    a: "Получавате своя персонализиран физически албум с вграден дигитален достъп до всички видео послания. Нищо не се губи.",
  },
  {
    q: "Нужен ли е интернет по време на събитието?",
    a: "Не — будката работи напълно офлайн. Нужна е само захранваща розетка.",
  },
  {
    q: "Нужно ли е гостите да инсталират приложение?",
    a: "Не. Просто застават пред камерата, натискат бутон и записват. Нищо повече.",
  },
  {
    q: "За какви поводи е подходяща будката?",
    a: "За всеки специален повод — сватби, рождени дни, корпоративни събития, baby showers и всякакви тържества.",
  },
  {
    q: "Как се осъществява резервацията?",
    a: "Изпратете ни запитване чрез бутона по-долу и ние ще се свържем с вас в рамките на 24 часа.",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            НЕ САМО СНИМКИ.
            <br />
            ГЛАСОВЕ. УСМИВКИ.
            <br />
            ЕМОЦИИ.
          </h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroText}>
            Видео будка за послания, която превръща
            <br />
            думите на вашите гости в незабравим
            <br />
            физически албум.
          </p>
          <button type="button" className={styles.heroCta} data-booking-trigger="true">
            ПРОВЕРИ СВОБОДНИ ДАТИ
          </button>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          {features.map((item) => (
            <div key={item.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <item.Icon />
              </div>
              <div className={styles.featureTitle}>
                {item.title}
                <div className={styles.featureDivider} />
              </div>
              <p className={styles.featureText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ALBUM HIGHLIGHT ── */}
      <section className={styles.albumSection}>
        <div className={styles.albumSectionInner}>
          <div className={styles.albumSectionText}>
            <div className={styles.albumEyebrow}>ВАШИЯТ АЛБУМ</div>
            <div className={styles.albumEyebrowLine} />
            <h2 className={styles.albumSectionHeading}>
              Физически.
              <br />
              Персонализиран.
              <br />
              Завинаги ваш.
            </h2>
            <p className={styles.albumSectionBody}>
              Не просто файлове на USB — получавате красив физически албум,
              персонализиран с имената ви и датата на събитието, с вграден
              дигитален достъп до всички видео послания от гостите ви.
            </p>
            <Link href="/video-album" className={styles.albumSectionLink}>
              Разгледай видео албума →
            </Link>
          </div>
          <div className={styles.albumSectionVisual} />
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.howItWorks}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>КАК РАБОТИ</div>
          <div className={styles.sectionEyebrowLine} />
        </div>
        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepIcon}>
                <step.Icon />
              </div>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section className={styles.events}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>ЗА ВСЕКИ СПЕЦИАЛЕН ПОВОД</div>
          <div className={styles.sectionEyebrowLine} />
          <h2 className={styles.eventsHeading}>
            Сватби. Рождени дни.
            <br />
            Корпоративни събития. Baby showers.
          </h2>
        </div>
        <div className={styles.eventsGrid}>
          {events.map((e) => (
            <div key={e.title} className={styles.eventCard}>
              <div className={styles.eventIcon}>
                <e.Icon />
              </div>
              <div className={styles.eventTitle}>{e.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className={styles.founder}>
        <div className={styles.founderInner}>
          <div className={styles.sectionEyebrow}>ЗА НАС</div>
          <div className={styles.sectionEyebrowLine} />
          <blockquote className={styles.founderQuote}>
            &ldquo;Присъствах на сватба на близки приятели и осъзнах, че след края на
            вечерта всичко казано — сълзите, смехът, думите от сърце — просто
            изчезна. Eterna Memories се роди от едно желание: да дадем на
            хората нещо, което да остане.&rdquo;
          </blockquote>
          <div className={styles.founderName}>— [ИМЕ НА ОСНОВАТЕЛЯ]</div>
        </div>
      </section>

      {/* ── INSTAGRAM TEASER ── */}
      <section className={styles.social}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>ВИЖТЕ НИ В ДЕЙСТВИЕ</div>
          <div className={styles.sectionEyebrowLine} />
          <p className={styles.socialText}>
            Истории от реални събития, зад кулисите и много повече —
            последвайте ни в Instagram.
          </p>
          <a
            href="https://instagram.com/eterna__memories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            @eterna__memories →
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faq}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>ВЪПРОСИ & ОТГОВОРИ</div>
          <div className={styles.sectionEyebrowLine} />
        </div>
        <div className={styles.faqList}>
          {faqs.map((item) => (
            <div key={item.q} className={styles.faqItem}>
              <div className={styles.faqQ}>{item.q}</div>
              <div className={styles.faqA}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.finalCta}>
        <h2 className={styles.finalCtaHeading}>
          Готови ли сте да запазите
          <br />
          своите спомени?
        </h2>
        <button
          type="button"
          className={styles.finalCtaBtn}
          data-booking-trigger="true"
        >
          ПРОВЕРИ СВОБОДНИ ДАТИ
        </button>
      </section>

    </main>
  );
}
