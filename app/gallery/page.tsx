import PageIntro from "../components/PageIntro";
import GalleryGrid from "../components/GalleryGrid";
import styles from "./page.module.css";
import { copy } from "../copy";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Галерия — видео будка на реални събития | Пловдив",
  description:
    "Кадри от реални събития с видео будката Eterna Memories — гости пред будката, персонализирани детайли и спомени от сватби и тържества в Пловдив.",
  path: "/gallery",
});

const { intro, instagram } = copy.gallery;

export default function GalleryPage() {
  return (
    <main className={styles.main}>
      <PageIntro
        eyebrow={intro.eyebrow}
        heading={intro.heading}
        text={intro.text}
      />

      <GalleryGrid />

      <section className={styles.instagram}>
        <p className={styles.instagramText}>{instagram.text}</p>
        <a
          href="https://instagram.com/eterna__memories"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagramBtn}
        >
          {instagram.handle}
        </a>
      </section>
    </main>
  );
}
