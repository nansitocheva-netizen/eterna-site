import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import ClosingCta from "../components/ClosingCta";
import { copy } from "../copy";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Фото будка под наем в Пловдив — Photo Booth | Eterna Memories",
  description:
    "Фото будка под наем в Пловдив и цяла България — Canon камера, Godox светкавица, DNP печат на място, персонализирана рамка и неограничени снимки за вашето събитие.",
  path: "/photo-booth",
});

const {
  hero,
  equipment,
  occasions,
  location,
  crossLinks,
  closingCta,
} = copy.photoBooth;

export default function PhotoBoothPage() {
  return (
    <main className={styles.main}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.heroLabel}>{hero.label}</div>
            <div className={styles.heroLine} />
            <h1
              className={styles.heroHeading}
              style={{ whiteSpace: "pre-line" }}
            >
              {hero.heading}
            </h1>
            <p className={styles.heroBody}>{hero.body}</p>
            <p className={styles.heroSubBody}>{hero.subBody}</p>
            <button
              type="button"
              className={styles.heroCta}
              data-booking-trigger="true"
              data-booking-product="photo-booth"
            >
              {hero.cta}
            </button>
          </div>
          <div className={styles.heroImageWrap}>
            <Image
              src="/product-photo-booth.png"
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT ── */}
      <section className={styles.equipment}>
        <div className={styles.equipmentInner}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrow}>{equipment.eyebrow}</div>
            <div className={styles.eyebrowLine} />
            <h2
              className={styles.sectionHeading}
              style={{ whiteSpace: "pre-line" }}
            >
              {equipment.heading}
            </h2>
            <p className={styles.sectionIntro}>{equipment.intro}</p>
          </div>
          <div className={styles.equipmentGrid}>
            {equipment.items.map((item, i) => (
              <div key={item.title} className={styles.equipmentItem}>
                <div className={styles.equipmentNumber}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className={styles.equipmentBody}>
                  <div className={styles.equipmentTitle}>{item.title}</div>
                  <div className={styles.equipmentText}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OCCASIONS ── */}
      <section className={styles.occasions}>
        <div className={styles.occasionsInner}>
          <div className={styles.occasionsText}>
            <div className={styles.eyebrowDark}>{occasions.eyebrow}</div>
            <div className={styles.eyebrowLineDark} />
            <h2
              className={styles.occasionsHeading}
              style={{ whiteSpace: "pre-line" }}
            >
              {occasions.heading}
            </h2>
            <p className={styles.occasionsBody}>{occasions.body}</p>
            <p className={styles.occasionsBody}>{occasions.body2}</p>
            <p className={styles.occasionsBody}>{occasions.body3}</p>
          </div>
          <div className={styles.occasionsImage}>
            <Image
              src="/product-photo-booth.png"
              alt={occasions.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.imgContain}
            />
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className={styles.location}>
        <div className={styles.locationInner}>
          <div className={styles.eyebrow}>{location.eyebrow}</div>
          <div className={styles.eyebrowLine} />
          <h2
            className={styles.locationHeading}
            style={{ whiteSpace: "pre-line" }}
          >
            {location.heading}
          </h2>
          <p className={styles.locationBody}>{location.body}</p>
          <p className={styles.locationBody}>{location.body2}</p>
        </div>
      </section>

      {/* ── CROSS LINKS ── */}
      <section className={styles.crossLinks}>
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>{crossLinks.eyebrow}</div>
          <div className={styles.eyebrowLine} />
          <h2
            className={styles.sectionHeading}
            style={{ whiteSpace: "pre-line" }}
          >
            {crossLinks.heading}
          </h2>
          <p className={styles.sectionBody}>{crossLinks.body}</p>
        </div>
        <div className={styles.crossGrid}>
          {crossLinks.items.map((item) => (
            <article key={item.title} className={styles.crossCard}>
              <div className={styles.crossImageWrap}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  className={styles.imgContain}
                />
              </div>
              <div className={styles.crossCardBody}>
                <h3 className={styles.crossCardTitle}>{item.title}</h3>
                <p className={styles.crossCardText}>{item.text}</p>
                <Link href={item.href} className={styles.crossCta}>
                  {item.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <ClosingCta
        heading={closingCta.heading}
        subtext={closingCta.subtext}
        productKey="photo-booth"
      />
    </main>
  );
}
