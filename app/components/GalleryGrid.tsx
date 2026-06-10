"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import styles from "./GalleryGrid.module.css";
import { copy } from "../copy";

const { images, lightbox } = copy.gallery;

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index - 1 + images.length) % images.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % images.length,
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, close, showNext, showPrevious]);

  return (
    <>
      <section className={styles.section} aria-label="Галерия със снимки">
        <div className={styles.masonry}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={styles.item}
              onClick={() => setActiveIndex(index)}
              aria-label={image.alt}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={1000}
                sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.image}
              />
            </button>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={images[activeIndex].alt}
          onClick={close}
        >
          <button
            type="button"
            className={styles.closeBtn}
            onClick={close}
            aria-label={lightbox.close}
          >
            <X size={22} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label={lightbox.previous}
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>

          <div
            className={styles.lightboxImageWrap}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              width={1600}
              height={2000}
              sizes="100vw"
              className={styles.lightboxImage}
              priority
            />
          </div>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label={lightbox.next}
          >
            <ChevronRight size={28} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </>
  );
}
