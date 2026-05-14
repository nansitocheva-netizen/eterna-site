"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * The visual hamburger toggle is driven entirely by CSS
 * (hidden checkbox + sibling selectors — no React state needed).
 *
 * closeMenu() is the only JS here: it unchecks the toggle after a
 * Link navigation so the menu doesn't stay open on client-side routing.
 */
function closeMenu() {
  const toggle = document.getElementById("nav-toggle") as HTMLInputElement | null;
  if (toggle) toggle.checked = false;
}

export default function Navbar() {
  return (
    <header className={styles.header}>
      {/* Toggle must be first so ~ selectors reach all following siblings */}
      <input type="checkbox" id="nav-toggle" className={styles.toggle} />

      {/* Clicking the backdrop unchecks the toggle, closing the menu */}
      <label htmlFor="nav-toggle" className={styles.backdrop} aria-hidden="true" />

      {/* Slide-in menu panel */}
      <div className={styles.menu} role="navigation" aria-label="Главно меню">
        <label htmlFor="nav-toggle" className={styles.closeBtn} aria-label="Затвори меню">
          ✕
        </label>
        <Link href="/" className={styles.menuLink} onClick={closeMenu}>Начало</Link>
        <Link href="/video-booth" className={styles.menuLink} onClick={closeMenu}>Видео будка</Link>
        <Link href="/video-album" className={styles.menuLink} onClick={closeMenu}>Видео албум</Link>
        <Link href="/gallery" className={styles.menuLink} onClick={closeMenu}>Галерия</Link>
        <Link href="/contact" className={styles.menuLink} onClick={closeMenu}>Контакти</Link>
      </div>

      {/* Visible bar */}
      <div className={styles.bar}>
        <label htmlFor="nav-toggle" className={styles.hamburger} aria-label="Отвори меню">
          ☰
        </label>
        <Link href="/" className={styles.logo} onClick={closeMenu}>ETERNA MEMORIES</Link>
        <button className={styles.ctaBtn} data-booking-trigger="true">
          ЗАПАЗИ ДАТА →
        </button>
      </div>
    </header>
  );
}
