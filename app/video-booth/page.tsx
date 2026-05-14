import styles from "./page.module.css";

const steps = [
  {
    number: "01",
    title: "Гостите записват",
    text: "Всеки гост застава пред будката и записва своето послание — лично, искрено, без сценарий.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 21a8 8 0 0 0-16 0" />
        <circle cx="10" cy="8" r="5" />
        <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Ние се грижим за всичко",
    text: "Нашият екип настройва будката и е присъствен по време на цялото събитие — вие се наслаждавате на деня си.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
        <path d="M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Получавате своя албум",
    text: "След събитието получавате своя персонализиран физически албум с вградени видео послания, готов да го пазите цял живот.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
      </svg>
    ),
  },
];

const included = [
  "Лесно преносима видео будка",
  "Таблет за заснемане на видео послания",
  "Винтидж телефон като декоративен акцент",
  "Персонализиран стартов екран с вашите имена",
  "Персонализирани инициали и дизайн на албума",
  "Физически албум с вграден дигитален достъп",
  "Доставка на всички файлове на USB и в облака",
  "Присъствие на екип от началото до края",
];

export default function VideoBooth() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroLabel}>VIDEO BOOTH</div>
          <h1 className={styles.heroHeading}>
            Думите, казани
            <br />
            от сърце —
            <br />
            запазени завинаги
          </h1>
          <p className={styles.heroText}>
            Дайте на гостите си гласа, който заслужават. Лични видео послания,
            записани пред елегантна будка — и доставени в красив физически
            албум след вашето събитие.
          </p>
          <div className={styles.heroActions}>
            <button
              type="button"
              className={styles.ctaBtn}
              data-booking-trigger="true"
            >
              ЗАПАЗИ СВОЯТА ДАТА
            </button>
          </div>
        </div>

        <div className={styles.heroImage} />
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.howItWorks}>
        <div className={styles.sectionEyebrow}>
          <div className={styles.eyebrowText}>КАК РАБОТИ</div>
          <div className={styles.eyebrowLine} />
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepIcon}>{step.icon}</div>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className={styles.included}>
        <div className={styles.includedGrid}>
          <div>
            <div className={styles.includedLabel}>КАКВО ВКЛЮЧВА</div>
            <div className={styles.includedLabelLine} />
            <div className={styles.featureList}>
              {included.map((text) => (
                <div key={text} className={styles.featureItem}>
                  <div className={styles.featureCheck}>✓</div>
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.includedImageWrap}>
            <img src="/phone.png" alt="Vintage phone" />
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className={styles.closingCta}>
        <h2 className={styles.closingCtaHeading}>
          Готови ли сте да я включите
          <br />
          в своето събитие?
        </h2>
        <p className={styles.closingCtaText}>
          Свободните дати се запълват бързо. Свържете се с нас и запазете своята.
        </p>
        <button
          type="button"
          className={styles.ctaBtn}
          data-booking-trigger="true"
        >
          ПРОВЕРИ СВОБОДНИ ДАТИ
        </button>
      </section>
    </main>
  );
}
