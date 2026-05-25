import styles from "./page.module.css";
import PageIntro from "../components/PageIntro";
import ClosingCta from "../components/ClosingCta";
import { copy } from "../copy";
import AlbumShowcase from "../components/AlbumShowcase";

const { intro, closingCta } = copy.videoAlbum;

export default function VideoAlbumPage() {
  return (
    <main className={styles.main}>
      <PageIntro
        eyebrow={intro.eyebrow}
        heading={intro.heading}
        text={intro.text}
      />

      <section className={styles.content}>
        {/* <ShowcaseVideo /> */}
        <AlbumShowcase noCover />
      </section>

      <ClosingCta heading={closingCta.heading} size="sm" />
    </main>
  );
}
