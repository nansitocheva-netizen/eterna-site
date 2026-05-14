import styles from "./page.module.css";
import HowItWorks from "../components/HowItWorks";
import ClosingCta from "../components/ClosingCta";
import { copy } from "../copy";

const { hero, steps: stepsData, included, closingCta } = copy.videoBooth;

const steps = [
  {
    ...stepsData[0],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 21a8 8 0 0 0-16 0" />
        <circle cx="10" cy="8" r="5" />
        <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
      </svg>
    ),
  },
  {
    ...stepsData[1],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
        <path d="M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z" />
      </svg>
    ),
  },
  {
    ...stepsData[2],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
      </svg>
    ),
  },
];

export default function VideoBooth() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroLabel}>{hero.label}</div>
          <h1 className={styles.heroHeading} style={{ whiteSpace: "pre-line" }}>
            {hero.heading}
          </h1>
          <p className={styles.heroText}>{hero.body}</p>
          <div className={styles.heroActions}>
            <button
              type="button"
              className={styles.ctaBtn}
              data-booking-trigger="true"
            >
              {hero.cta}
            </button>
          </div>
        </div>

        <div className={styles.heroImage} />
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks steps={steps} />

      {/* WHAT'S INCLUDED */}
      <section className={styles.included}>
        <div className={styles.includedGrid}>
          <div>
            <div className={styles.includedLabel}>{included.label}</div>
            <div className={styles.includedLabelLine} />
            <div className={styles.featureList}>
              {included.items.map((text) => (
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
      <ClosingCta
        heading={closingCta.heading}
        subtext={closingCta.subtext}
      />
    </main>
  );
}
