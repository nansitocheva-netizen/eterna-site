@AGENTS.md

## Project overview

**Eterna Memories** — a Bulgarian-language marketing and lead-generation website for a business that provides a video message booth at events (weddings, birthdays, corporate events, etc.). Guests record video messages at the booth; recordings are compiled and delivered as a personalized physical album with digital access.

**Language:** All UI copy is in Bulgarian. All user-facing strings live in `app/copy.ts` — always edit copy there, never inline.

**Business contact:** `eternamemories.bg@gmail.com`, `+359888887763`, Instagram `@eterna__memories`, TikTok `@eterna.memories`.

---

## Tech stack

| Layer     | Technology                                                                    |
| --------- | ----------------------------------------------------------------------------- |
| Framework | Next.js 16 (App Router, no `pages/` dir)                                      |
| UI        | React 19 + TypeScript 5 (strict)                                              |
| Styling   | Tailwind CSS v4 + CSS Modules per page/component                              |
| Fonts     | `next/font/google`: Geist + Cormorant Garamond (Cyrillic)                     |
| Animation | Framer Motion (album flip demo), Lucide React, react-icons                    |
| Email     | nodemailer → Gmail SMTP; requires `EMAIL_USER` + `EMAIL_PASS` in `.env.local` |

---

## Project structure

```
app/
  layout.tsx          # Root layout: Navbar, BookingModal, footer
  page.tsx            # Home page
  copy.ts             # ALL Bulgarian UI copy — single source of truth
  globals.css         # Tailwind import + CSS design tokens (variables)
  components/
    Navbar.tsx        # CSS-only hamburger nav + "ЗАПАЗИ ДАТА" CTA
    BookingModal.tsx  # Global booking form → POST /api/booking
    HowItWorks.tsx    # Reusable 3-step component
    PageIntro.tsx     # Eyebrow + heading intro block
    ClosingCta.tsx    # CTA section with booking trigger
  video-booth/        # Product page for the booth service
  video-album/        # Interactive album demo (Framer Motion flip)
  gallery/            # Placeholder ("Скоро тук") → links to Instagram
  contact/            # Contact cards + general inquiry form
  api/booking/
    route.ts          # POST handler: validates input, sends HTML email
public/               # Static assets
```

---

## Key conventions

- **BookingModal** is globally mounted in the root layout. Any element with `data-booking-trigger="true"` will open it — use this attribute instead of importing the modal elsewhere.
- **`/api/booking`** handles both the booking modal and the contact form. The contact page sends `date: "—"` and `eventType: "Общо запитване"` as synthetic values.
- CSS Modules (`.module.css`) are used per page and per component alongside Tailwind utility classes in `globals.css`.

## Known issues

- Public image files are committed with uppercase extensions (`logo.PNG`, `logo-bg.PNG`) but referenced in code as lowercase (`/logo.png`). This causes 404s on case-sensitive filesystems (Linux / production). Fix by renaming the files or updating references to match.
- The gallery page is a placeholder; real gallery content is pending.

---

## Style guide

See [`STYLE_GUIDE.md`](./STYLE_GUIDE.md) for the full style guide — colours, typography, buttons, spacing, and component patterns.

---
