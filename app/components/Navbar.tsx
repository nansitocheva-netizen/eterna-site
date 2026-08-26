"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { copy } from "../copy";

const { nav } = copy;

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
      <div
        className={styles.menu}
        role="navigation"
        aria-label={nav.ariaMainMenu}
      >
        <label
          htmlFor="nav-toggle"
          className={styles.closeBtn}
          aria-label={nav.ariaCloseMenu}
        >
          ✕
        </label>
        <Link
          href={nav.home.href}
          className={styles.menuLink}
          onClick={closeMenu}
        >
          {nav.home.label}
        </Link>

        <div className={styles.menuGroupLabel}>{nav.products.label}</div>
        {nav.products.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.menuSubLink}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href={nav.gallery.href}
          className={styles.menuLink}
          onClick={closeMenu}
        >
          {nav.gallery.label}
        </Link>
        <Link
          href={nav.contact.href}
          className={styles.menuLink}
          onClick={closeMenu}
        >
          {nav.contact.label}
        </Link>
      </div>

      {/* Visible bar */}
      <div className={styles.bar}>
        {/* Hamburger — mobile only */}
        <label
          htmlFor="nav-toggle"
          className={styles.hamburger}
          aria-label={nav.ariaOpenMenu}
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
              {nav.products.label}
              <span className={styles.chevron} aria-hidden="true">
                ▾
              </span>
            </Link>
            <div className={styles.dropdownPanel} role="menu">
              {nav.products.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.dropdownItem}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href={nav.gallery.href} className={styles.desktopLink}>
            {nav.gallery.label}
          </Link>
        </nav>

        {/* Logo — centered on both mobile and desktop */}
        <Link href={nav.home.href} className={styles.logo} onClick={closeMenu}>
          ETERNA MEMORIES
        </Link>

        {/* Desktop: right nav + CTA */}
        <div className={styles.desktopNavRight}>
          <nav className={styles.desktopNavRightLinks}>
            <Link href={nav.videoAlbum.href} className={styles.desktopLink}>
              {nav.videoAlbum.label}
            </Link>
            <Link href={nav.contact.href} className={styles.desktopLink}>
              {nav.contact.label}
            </Link>
          </nav>
          <button className={styles.ctaBtn} data-booking-trigger="true">
            {nav.cta}
          </button>
        </div>
      </div>
    </header>
  );
}
