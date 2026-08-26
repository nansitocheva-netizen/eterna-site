"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * The mobile hamburger toggle is driven entirely by CSS
 * (hidden checkbox + sibling selectors — no React state needed).
 *
 * closeMenu() is the only JS here: it unchecks the toggle after a
 * Link navigation so the menu doesn't stay open on client-side routing.
 *
 * The desktop "Продукти" dropdown is also pure CSS — it opens on
 * :hover / :focus-within, so it works with mouse and keyboard.
 */
function closeMenu() {
  const toggle = document.getElementById(
    "nav-toggle",
  ) as HTMLInputElement | null;
  if (toggle) toggle.checked = false;
}

/**
 * All product entries — used both by the desktop dropdown and the
 * mobile slide-in menu so the two stay in sync automatically.
 * `href` starting with "#booking" opens the modal (pre-set to the
 * given `productKey`). All others navigate normally.
 */
const PRODUCT_LINKS: Array<{
  label: string;
  href: string;
  productKey?: string;
}> = [
  { label: "Видео будка с микрофон",         href: "/video-guestbook" },
  { label: "Фото будка",                      href: "/photo-booth" },
  { label: "Video Guestbook с ретро телефон", href: "/video-booth" },
  { label: "Видео албум",                     href: "/video-album" },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      {/* Toggle must be first so ~ selectors reach all following siblings */}
      <input type="checkbox" id="nav-toggle" className={styles.toggle} />

      {/* Clicking the backdrop unchecks the toggle, closing the menu */}
      <label
        htmlFor="nav-toggle"
        className={styles.backdrop}
        aria-hidden="true"
      />

      {/* Slide-in menu panel (mobile) */}
      <div className={styles.menu} role="navigation" aria-label="Главно меню">
        <label
          htmlFor="nav-toggle"
          className={styles.closeBtn}
          aria-label="Затвори меню"
        >
          ✕
        </label>
        <Link href="/" className={styles.menuLink} onClick={closeMenu}>
          Начало
        </Link>

        <div className={styles.menuGroupLabel}>Продукти</div>
        {PRODUCT_LINKS.map((item) =>
          item.href.startsWith("#") ? (
            <button
              key={item.label}
              type="button"
              className={styles.menuSubLink}
              data-booking-trigger="true"
              data-booking-product={item.productKey}
              onClick={closeMenu}
            >
              {item.label}
            </button>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className={styles.menuSubLink}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ),
        )}

        <Link href="/gallery" className={styles.menuLink} onClick={closeMenu}>
          Галерия
        </Link>
        <Link href="/contact" className={styles.menuLink} onClick={closeMenu}>
          Контакти
        </Link>
      </div>

      {/* Visible bar */}
      <div className={styles.bar}>
        {/* Hamburger — mobile only */}
        <label
          htmlFor="nav-toggle"
          className={styles.hamburger}
          aria-label="Отвори меню"
        >
          ☰
        </label>

        {/* Desktop: left nav — Продукти dropdown + Галерия */}
        <nav className={styles.desktopNavLeft}>
          <div className={styles.dropdown}>
            <Link
              href="/#products"
              className={`${styles.desktopLink} ${styles.dropdownTrigger}`}
              aria-haspopup="true"
            >
              Продукти
              <span className={styles.chevron} aria-hidden="true">
                ▾
              </span>
            </Link>
            <div className={styles.dropdownPanel} role="menu">
              {PRODUCT_LINKS.map((item) =>
                item.href.startsWith("#") ? (
                  <button
                    key={item.label}
                    type="button"
                    className={styles.dropdownItem}
                    data-booking-trigger="true"
                    data-booking-product={item.productKey}
                    role="menuitem"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={styles.dropdownItem}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </div>
          <Link href="/gallery" className={styles.desktopLink}>
            Галерия
          </Link>
        </nav>

        {/* Logo — centered on both mobile and desktop */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          ETERNA MEMORIES
        </Link>

        {/* Desktop: right nav + CTA */}
        <div className={styles.desktopNavRight}>
          <nav className={styles.desktopNavRightLinks}>
            <Link href="/video-album" className={styles.desktopLink}>
              Видео албум
            </Link>
            <Link href="/contact" className={styles.desktopLink}>
              Контакти
            </Link>
          </nav>
          <button className={styles.ctaBtn} data-booking-trigger="true">
            ЗАПАЗИ ДАТА
          </button>
        </div>
      </div>
    </header>
  );
}
