/**
 * Central SEO configuration — single source of truth for the domain,
 * brand name and shared metadata used across the site.
 *
 * Keep page-specific titles/descriptions next to each page (in its
 * `metadata` export). This file only holds site-wide constants.
 */

export const siteConfig = {
  /** Canonical production URL (no trailing slash). */
  url: "https://www.eterna-memories.com",
  /** Brand name, used in title template and Open Graph. */
  name: "Eterna Memories",
  /** Default/site-wide description (Bulgarian). */
  description:
    "Видео будка за послания под наем в цяла България. Гостите записват видео поздрави, които превръщаме в персонализиран физически албум.",
  /** Locale for Open Graph. */
  locale: "bg_BG",
  /** Default Open Graph / share image (1200×630). */
  ogImage: "/opengraph-image.png",
} as const;

import type { Metadata } from "next";

/**
 * Build per-page metadata with a unique title, description and canonical URL,
 * while keeping Open Graph / Twitter cards in sync with the rest of the site.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  /** Route path starting with "/" (e.g. "/video-booth"). */
  path: string;
}): Metadata {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  };
}

/** Keywords targeted across the site (Bulgarian). */
export const siteKeywords = [
  "видео будка",
  "видео будка под наем",
  "видео будка за сватба",
  "видео гостбук",
  "video guestbook",
  "видео послания за сватба",
  "видео албум",
  "спомен албум",
  "атракция за сватба",
  "атракция за събитие",
  "видео будка Пловдив",
  "видео будка под наем Пловдив",
  "Eterna Memories",
];
