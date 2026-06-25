import styles from "./page.module.css";
import PageIntro from "../components/PageIntro";
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
