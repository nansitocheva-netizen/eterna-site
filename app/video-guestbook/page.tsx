import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import ClosingCta from "../components/ClosingCta";
import { copy } from "../copy";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Видео будка с микрофон под наем — Video Guestbook | Пловдив",
  description:
    "Видео будка с външен микрофон под наем в Пловдив и цяла България. Ясен звук дори в оживена атмосфера, карти с въпроси и луксозен видео албум за спомен.",
  path: "/video-guestbook",
});

const {
  hero,
  occasions,
  howItWorks,
  cards,
  sound,
  voices,
  album,
  events,
  personalization,
  crossLinks,
  manifesto,
  closingCta,
} = copy.videoGuestbook;

export default function VideoGuestbookPage() {
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
            <button
              type="button"
              className={styles.heroCta}
              data-booking-trigger="true"
              data-booking-product="video-guestbook"
            >
              {hero.cta}
            </button>
          </div>
          <div className={styles.heroImageWrap}>
            <Image
              src="/vg-hero.png"
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      {/* ── OCCASIONS strip ── */}
      <section className={styles.occasions}>
        <div className={styles.occasionsInner}>
          <div className={styles.eyebrow}>{occasions.eyebrow}</div>
          <p className={styles.occasionsText}>{occasions.intro}</p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.split}>
        <div className={styles.splitInner}>
          <div className={styles.splitText}>
            <div className={styles.eyebrow}>{howItWorks.eyebrow}</div>
            <div className={styles.eyebrowLine} />
            <h2
              className={styles.splitHeading}
              style={{ whiteSpace: "pre-line" }}
            >
              {howItWorks.heading}
            </h2>
            <p
              className={styles.splitBody}
              style={{ whiteSpace: "pre-line" }}
            >
              {howItWorks.body}
            </p>
          </div>
          <div className={`${styles.splitImage} ${styles.splitImageTall}`}>
            <Image
              src="/vg-steps.png"
              alt={howItWorks.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.imgContain}
            />
          </div>
        </div>
      </section>

      {/* ── CARDS ── */}
      <section className={`${styles.split} ${styles.splitReverse} ${styles.splitAlt}`}>
        <div className={styles.splitInner}>
          <div className={styles.splitText}>
            <div className={styles.eyebrow}>{cards.eyebrow}</div>
            <div className={styles.eyebrowLine} />
            <h2
              className={styles.splitHeading}
              style={{ whiteSpace: "pre-line" }}
            >
              {cards.heading}
            </h2>
            <p className={styles.splitBody}>{cards.body}</p>
          </div>
          <div className={styles.cardsCollage}>
            <div className={styles.cardImg1}>
              <Image
                src="/vg-cards-logo.png"
                alt={cards.imageAlt1}
                fill
                sizes="(max-width: 900px) 90vw, 26vw"
                className={styles.imgContain}
              />
            </div>
            <div className={styles.cardImg2}>
              <Image
                src="/vg-cards-questions.png"
                alt={cards.imageAlt2}
                fill
                sizes="(max-width: 900px) 90vw, 26vw"
                className={styles.imgContain}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SOUND ── */}
      <section className={styles.split}>
        <div className={styles.splitInner}>
          <div className={styles.splitText}>
            <div className={styles.eyebrow}>{sound.eyebrow}</div>
            <div className={styles.eyebrowLine} />
            <h2
              className={styles.splitHeading}
              style={{ whiteSpace: "pre-line" }}
            >
              {sound.heading}
            </h2>
            <p
              className={styles.splitBody}
              style={{ whiteSpace: "pre-line" }}
            >
              {sound.body}
            </p>
          </div>
          <div className={`${styles.splitImage} ${styles.splitImagePortrait}`}>
            <Image
              src="/vg-microphone.png"
              alt={sound.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className={styles.imgContain}
            />
          </div>
        </div>
      </section>

      {/* ── VOICES ── */}
      <section className={styles.voices}>
        <div className={styles.voicesInner}>
          <div className={styles.eyebrow}>{voices.eyebrow}</div>
          <div className={styles.eyebrowLine} />
          <h2
            className={styles.voicesHeading}
            style={{ whiteSpace: "pre-line" }}
          >
            {voices.heading}
          </h2>
          <div className={styles.voicesList}>
            {voices.lines.map((line, i) => (
              <div key={i} className={styles.voiceLine}>
                {line}
              </div>
            ))}
          </div>
          <p className={styles.voicesClosing}>{voices.closing}</p>
        </div>
      </section>

      {/* ── ALBUM ── */}
      <section className={styles.album}>
        <div className={styles.albumInner}>
          <div className={styles.albumText}>
            <div className={styles.eyebrowDark}>{album.eyebrow}</div>
            <div className={styles.eyebrowLineDark} />
            <h2
              className={styles.albumHeading}
              style={{ whiteSpace: "pre-line" }}
            >
              {album.heading}
            </h2>
            <p
              className={styles.albumBody}
              style={{ whiteSpace: "pre-line" }}
            >
              {album.body}
            </p>
            <blockquote className={styles.albumQuote}>
              &ldquo;{album.quote}&rdquo;
            </blockquote>
            <Link href="/video-album" className={styles.albumLink}>
              {album.link}
            </Link>
          </div>
          <div className={styles.albumImage}>
            <Image
              src="/vg-album.png"
              alt={album.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.imgContain}
            />
          </div>
        </div>
      </section>

      {/* ── EVENTS list ── */}
      <section className={styles.eventsSection}>
        <div className={styles.eventsInner}>
          <div className={styles.eyebrow}>{events.eyebrow}</div>
          <div className={styles.eyebrowLine} />
          <h2 className={styles.eventsHeading}>{events.heading}</h2>
          <ul className={styles.eventsList}>
            {events.items.map((item) => (
              <li key={item} className={styles.eventsItem}>
                <span className={styles.eventsBullet} aria-hidden="true">
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PERSONALIZATION ── */}
      <section className={styles.personalization}>
        <div className={styles.personalizationInner}>
          <div className={styles.eyebrow}>{personalization.eyebrow}</div>
          <div className={styles.eyebrowLine} />
          <h2
            className={styles.personalizationHeading}
            style={{ whiteSpace: "pre-line" }}
          >
            {personalization.heading}
          </h2>
          <p
            className={styles.personalizationBody}
            style={{ whiteSpace: "pre-line" }}
          >
            {personalization.body}
          </p>
          <div className={styles.personalizationImage}>
            <Image
              src="/vg-detail-top.png"
              alt="Персонализиран екран на видео будката Eterna"
              fill
              sizes="(max-width: 900px) 90vw, 40vw"
              className={styles.imgContain}
            />
          </div>
        </div>
      </section>

      {/* ── CROSS LINKS ── */}
      <section className={styles.crossLinks}>
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>{crossLinks.eyebrow}</div>
          <div className={styles.eyebrowLine} />
          <h2
            className={styles.crossHeading}
            style={{ whiteSpace: "pre-line" }}
          >
            {crossLinks.heading}
          </h2>
          <p
            className={styles.crossBody}
            style={{ whiteSpace: "pre-line" }}
          >
            {crossLinks.body}
          </p>
        </div>
        <div className={styles.crossGrid}>
          {crossLinks.items.map((item) => {
            const isInternal = item.href.startsWith("/") && !item.href.startsWith("//");
            return (
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
                  {isInternal ? (
                    <Link href={item.href} className={styles.crossCta}>
                      {item.cta}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className={styles.crossCta}
                      data-booking-trigger="true"
                      data-booking-product={item.productKey}
                    >
                      {item.cta}
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className={styles.manifesto}>
        <div className={styles.manifestoInner}>
          <div className={styles.manifestoBrand}>{manifesto.brand}</div>
          <h2
            className={styles.manifestoHeading}
            style={{ whiteSpace: "pre-line" }}
          >
            {manifesto.heading}
          </h2>
          <div className={styles.manifestoLines}>
            {manifesto.lines.map((line, i) => (
              <div key={i} className={styles.manifestoLine}>
                {line}
              </div>
            ))}
          </div>
          <p className={styles.manifestoTagline}>{manifesto.tagline}</p>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <ClosingCta
        heading={closingCta.heading}
        subtext={closingCta.subtext}
        productKey="video-guestbook"
      />
    </main>
  );
}
