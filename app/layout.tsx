import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import BookingModal from "./components/BookingModal";
import { BsTelephone } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Eterna Memories",
  description: "Видео будка за послания, която запазва емоциите от вашия специален ден.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bg"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
    >
      <body>
        <Navbar />
        {children}
        <BookingModal />

        <footer className={styles.footer}>
          <div className={styles.footerGrid}>
            {/* Logo */}
            <div className={styles.footerLogo}>
              <h1 className={styles.footerLogoName}>ETERNA</h1>
              <p className={styles.footerLogoSub}>MEMORIES</p>
            </div>

            {/* Navigation */}
            <div>
              <p className={styles.footerSectionTitle}>НАВИГАЦИЯ</p>
              <div className={styles.footerLinks}>
                <a href="/" className={styles.footerLink}>Начало</a>
                <a href="/video-booth" className={styles.footerLink}>Видео будка</a>
                <a href="/video-album" className={styles.footerLink}>Видео албум</a>
                <a href="/gallery" className={styles.footerLink}>Галерия</a>
                <a href="/contact" className={styles.footerLink}>Контакт</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className={styles.footerSectionTitle}>КОНТАКТИ</p>
              <div className={styles.footerLinks}>
                <a
                  href="tel:+359888887763"
                  className={`${styles.footerLink} ${styles.footerContactRow}`}
                >
                  <BsTelephone />
                  <span>+359888887763</span>
                </a>
                <a
                  href="mailto:eternamemories.bg@gmail.com"
                  className={`${styles.footerLink} ${styles.footerContactRow}`}
                >
                  <MdMailOutline />
                  <span>eternamemories.bg@gmail.com</span>
                </a>
                <a
                  href="https://instagram.com/eterna__memories"
                  className={`${styles.footerLink} ${styles.footerContactRow}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SiInstagram />
                  <span>@eterna__memories</span>
                </a>
                <a
                  href="https://tiktok.com/@eterna.memories"
                  className={`${styles.footerLink} ${styles.footerContactRow}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaTiktok />
                  <span>@eterna.memories</span>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className={styles.footerCopyright}>
              <div>© 2026 ETERNA</div>
              <div>All rights reserved.</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
