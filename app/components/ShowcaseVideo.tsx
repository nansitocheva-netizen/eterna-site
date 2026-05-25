import styles from "./ShowcaseVideo.module.css";
import { copy } from "../copy";

const { showcase } = copy.videoAlbum;

export default function ShowcaseVideo() {
  return (
    <div className={styles.showcase}>
      <div className={styles.frame}>
        <div className={styles.videoViewport}>
          <video
            className={styles.video}
            src={showcase.src}
            controls
            playsInline
            preload="metadata"
            aria-label={showcase.ariaLabel}
          />
        </div>
      </div>
    </div>
  );
}
