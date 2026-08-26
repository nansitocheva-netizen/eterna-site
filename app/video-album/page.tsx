import styles from "./page.module.css";
import ClosingCta from "../components/ClosingCta";
import { copy } from "../copy";
import AlbumShowcase from "../components/AlbumShowcase";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Видео албум със спомени и видео послания | Пловдив",
  description:
    "Персонализиран физически видео албум с вграден дигитален достъп до всички видео послания от вашите гости. Спомен за цял живот от Eterna Memories.",
  path: "/video-album",
});

const { hero, closingCta } = copy.videoAlbum;

export default function VideoAlbumPage() {
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
            >
              {hero.cta}
            </button>
          </div>
          <div className={styles.heroVisual}>
            <AlbumShowcase noCover compact />
          </div>
        </div>
      </section>

      <ClosingCta heading={closingCta.heading} size="sm" />
    </main>
  );
}
