import styles from "./page.module.css";

export default function GalleryPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.eyebrow}>ГАЛЕРИЯ</div>
        <div className={styles.eyebrowLine} />
        <h1 className={styles.heading}>Скоро тук</h1>
        <p className={styles.text}>
          Подготвяме галерия с кадри от реални събития —
          <br />
          истински моменти, истински емоции.
        </p>
        <p className={styles.subtext}>
          Докато чакате, вижте нашите последни публикации в Instagram.
        </p>
        <a
          href="https://instagram.com/eterna__memories"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagramBtn}
        >
          @eterna__memories →
        </a>
      </section>
    </main>
  );
}
