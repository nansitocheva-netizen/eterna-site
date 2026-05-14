import styles from "./page.module.css";

const features = [
  {
    title: "ВИДЕО ПОСЛАНИЯ",
    text: "Вашите гости оставят видео послания, пълни с емоции и пожелания.",
  },
  {
    title: "НЕЗАБРАВИМИ СПОМЕНИ",
    text: "Истински думи, смях и чувства, които ще съхранявате завинаги.",
  },
  {
    title: "ЛЕСНО И УДОБНО",
    text: "Получавате всички видео послания с високо качество след вашето събитие.",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            СЪЗДАВАМЕ
            <br />
            СПОМЕНИ.
          </h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroText}>
            Видео будка за послания,
            <br />
            която запазва емоциите
            <br />
            от вашия специален ден.
          </p>
          <button type="button" className={styles.heroCta} data-booking-trigger="true">
            ЗАПАЗИ ДАТА
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          {features.map((item) => (
            <div key={item.title} className={styles.featureCard}>
              <div className={styles.featureIcon} />
              <div className={styles.featureTitle}>
                {item.title}
                <div className={styles.featureDivider} />
              </div>
              <p className={styles.featureText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
