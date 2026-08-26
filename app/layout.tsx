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
import Link from "next/link";
import { siteConfig, siteKeywords } from "./seo";
import { copy } from "./copy";

const { footer, contactChannels } = copy;

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
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Видео будка под наем за сватби и събития в България | Eterna Memories",
    template: "%s | Eterna Memories",
  },
  description: siteConfig.description,
  keywords: siteKeywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "Видео будка под наем за сватби и събития в България | Eterna Memories",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Eterna Memories — видео будка за послания",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Видео будка под наем за сватби и събития в България | Eterna Memories",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
              <h1 className={styles.footerLogoName}>{footer.logoName}</h1>
              <p className={styles.footerLogoSub}>{footer.logoSub}</p>
            </div>

            {/* Navigation */}
            <div>
              <p className={styles.footerSectionTitle}>{footer.sectionNav}</p>
              <div className={styles.footerLinks}>
                {footer.navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={styles.footerLink}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className={styles.footerSectionTitle}>{footer.sectionContact}</p>
              <div className={styles.footerLinks}>
                <a
                  href={contactChannels.phone.href}
                  className={`${styles.footerLink} ${styles.footerContactRow}`}
                >
                  <BsTelephone />
                  <span>{contactChannels.phone.value}</span>
                </a>
                <a
                  href={contactChannels.email.href}
                  className={`${styles.footerLink} ${styles.footerContactRow}`}
                >
                  <MdMailOutline />
                  <span>{contactChannels.email.value}</span>
                </a>
                <a
                  href={contactChannels.instagram.href}
                  className={`${styles.footerLink} ${styles.footerContactRow}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SiInstagram />
                  <span>{contactChannels.instagram.value}</span>
                </a>
                <a
                  href={contactChannels.tiktok.href}
                  className={`${styles.footerLink} ${styles.footerContactRow}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaTiktok />
                  <span>{contactChannels.tiktok.value}</span>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className={styles.footerCopyright}>
              <div>{footer.copyright}</div>
              <div>{footer.rights}</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
