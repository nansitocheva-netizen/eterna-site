# Eterna Memories — Code Review & Improvement Log

---

## Part 1 — Initial Analysis

### What Was Done Well

#### Visual Design & Brand Identity
- The warm neutral color palette (`#f6f1ec`, `#fcfaf7`, muted golds) is cohesive and feels premium — appropriate for a luxury memories service.
- Cormorant Garamond is an excellent font choice: elegant, editorial, emotional.
- Thin gold divider lines used as section separators are a refined editorial touch.
- The dark gradient footer provides strong contrast and anchors the layout well.

#### BookingModal Architecture
- The global click delegation pattern is smart: any element containing "Запази дата" or marked with `data-booking-trigger="true"` opens the modal without manual wiring per page.
- All the right UX behaviors are in place: backdrop click to close, ESC key to close, body scroll lock while open.
- Client-side and server-side validation are both present.
- Success and error states are visually distinct and well-styled.
- The booking modal CSS in `globals.css` had clean animation keyframes and proper stacking.

#### Video Album Page
- The Framer Motion album open/close animation is creative and memorable.
- Using `AnimatePresence` with `mode="wait"` is correct and smooth.

---

### What Was Done Badly

#### Critical Bugs

**1. Three unresolved git merge conflicts**
`app/api/booking/route.ts`, `app/gallery/page.tsx`, and `app/contact/page.tsx` all contained raw `<<<<<<< HEAD` / `=======` / `>>>>>>>` conflict markers. The app could not build or run correctly.

**2. Gallery and Contact pages were empty stubs**
Both rendered nothing but a bare unstyled `<h1>`. Clicking those nav links delivered a page with no layout, no navbar, no footer — visually broken.

**3. Broken nav link — "Контакти" pointed to `/contacts`, page lives at `/contact`**
In the homepage menu, the contacts link was `href="/contacts"` but the file is `app/contact/page.tsx`. Every homepage visitor who clicked Contacts hit a 404.

---

#### Code Architecture

**4. Navbar copy-pasted across every page — four different implementations**
No shared `<Navbar>` component existed. Each page re-implemented the header with subtle inconsistencies:
- Homepage: full-screen overlay menu, mobile-responsive padding, no "Начало" link.
- `/video-booth`: side drawer 360 px wide, navigation via `window.location.href` (bypasses Next.js routing).
- `/video-album`: side drawer 320 px wide (different width), uses `<a>` tags, has "Начало".

**5. Footer had a hardcoded `marginTop: "120px"` in `layout.tsx`**
Applied to every page globally. Stub pages like Gallery and Contact showed a massive blank gap before the footer since they had no content.

**6. `isMobile` detection via JS state on the homepage**
Using `useState` + `window.innerWidth` to drive layout differences risks hydration mismatch and causes layout shift on load. CSS media queries solve this with zero JS.

**7. Typo in font size on homepage**
`fontSize: "8x"` — the `p` was missing. Should have been `"8px"`. The brand name in the navbar was essentially invisible on mobile.

---

#### Styling

**8. Hundreds of lines of inline styles with no abstraction**
Every page used `style={{}}` exclusively for all layout. Changes (e.g. updating section padding) required touching every page individually. Responsive design was nearly impossible to manage. Meaningful logic was buried in visual noise.

**9. `globals.css` had duplicate rules**
`html, body { overflow-x: hidden }`, `* { box-sizing: border-box }`, and `img { max-width: 100% }` were each defined twice. The dark-mode `prefers-color-scheme` variables were defined but never used — every page overrode background with inline styles.

**10. `/video-booth` had no mobile layout at all**
The hero used a hardcoded two-column grid with `padding: "40px 0 80px 90px"` and the right image had `height: "820px"` fixed. The global `@media` hack (`padding-left: 20px !important`) only patched the symptom.

**11. No color system**
Every shade was a raw hex literal scattered across files. Dozens of nearly-identical values (`#5f5a55`, `#5f5750`, `#5d5752`) with no shared reference, making brand consistency impossible to maintain.

---

#### UX

**12. The album media player buttons do nothing**
On `/video-album`, when the album is opened, Play / Skip / Volume buttons appear. They had no `onClick` handlers and no `aria-label`. Clickable-looking controls that do nothing violate user expectations and break accessibility.

**13. Clicking outside the side drawer didn't close it**
On `/video-booth` and `/video-album`, the drawer had no backdrop and no outside-click-to-close behavior. Users had to find and press ✕.

**14. No hover feedback on primary CTA buttons**
The hero "ЗАПАЗИ ДАТА" button and the navbar "ЗАПАЗИ ДАТА →" had no hover styles. Only the modal's submit button had a hover state. The main conversion buttons felt inert.

**15. Page metadata was the Next.js scaffold default**
`title: "Create Next App"` and `description: "Generated by create next app"` showed in browser tabs, bookmarks, and search results.

---

#### Accessibility

**16. Hamburger menu was a `<div>` with `onClick`**
Not keyboard-focusable, no `aria-label`. The "ЗАПАЗИ ДАТА →" in the navbar also relied entirely on BookingModal's global document listener — invisible to keyboard or assistive technology users.

**17. No `aria-label` on player control buttons**
Five icon-only buttons with no accessible names.

---

## Part 2 — Improvements Made

### New files added (7)

| File | Purpose |
|---|---|
| `app/components/Navbar.tsx` | Single shared navbar component used by every page via the layout |
| `app/components/Navbar.module.css` | All navbar styles — CSS-only hamburger toggle, responsive via media queries |
| `app/components/BookingModal.module.css` | All booking modal styles moved out of `globals.css` |
| `app/layout.module.css` | Footer styles (previously inline in `layout.tsx`) |
| `app/page.module.css` | Homepage styles |
| `app/video-booth/page.module.css` | Video booth styles including full mobile breakpoints |
| `app/video-album/page.module.css` | Video album styles |

---

### `app/globals.css`
- **Added 18 CSS custom properties** covering the complete color palette, grouped by purpose:
  - Backgrounds: `--bg-base`, `--bg-warm`, `--bg-section`, `--bg-muted`, `--bg-icon`
  - Text: `--text-heading`, `--text-body`, `--text-nav`, `--text-label`
  - Accent / Gold: `--gold`, `--gold-mid`, `--gold-border`
  - CTA: `--cta-bg`, `--cta-text`
  - Footer: `--footer-from`, `--footer-to`, `--footer-text`, `--footer-link`, `--footer-sub`
- **Removed all duplicate rules** — `box-sizing`, `overflow-x`, `img` reset rules each appeared twice; now defined once.
- **Removed unused dark-mode variables** that were overridden by inline styles everywhere.
- **Removed the `!important` global section padding hack** that was compensating for hardcoded inline padding on `/video-booth`.
- File went from 295 lines to 55 clean lines.

---

### `app/layout.tsx`
- **Added `<Navbar />`** — shared across all pages, replaces four separate copy-pasted implementations.
- **Loaded `Cormorant_Garamond` once** (with `variable: "--font-cormorant"`) so all pages share a single font instance instead of each page fetching independently.
- **Rewired footer** to `layout.module.css` classes using CSS variables — no more inline styles.
- **Removed `marginTop: "120px"`** from the footer. The hardcoded margin is gone; page content provides natural spacing.
- **Fixed nav link** `/contacts` → `/contact` throughout.
- **Fixed metadata** — title changed from `"Create Next App"` to `"Eterna Memories"`, description updated to the actual service description.
- **Fixed `lang="bg"`** — was `lang="en"` despite the site being entirely in Bulgarian.

---

### `app/components/Navbar.tsx` + `Navbar.module.css`
- **CSS-only hamburger toggle** using a hidden `<input type="checkbox">` and CSS sibling selectors (`input:checked ~ .menu`). No React state, no `useState`, no resize listeners.
- **Fully responsive via media queries** — font sizes, padding, and spacing adapt at `max-width: 767px` without any JavaScript.
- **Backdrop click to close** — a `<label>` overlaid behind the menu panel unchecks the toggle on click.
- **Proper semantics** — hamburger and close button are `<label>` elements associated with the checkbox; logo and CTA are proper `<a>` / `<button>` elements.
- **`closeMenu()`** — a single three-line function unchecks the toggle after a Next.js `<Link>` navigation so the menu doesn't remain open on client-side route changes.
- **Hover states** added to the CTA button and menu links.
- **Fixed "Контакти" link** — now correctly points to `/contact` everywhere.

---

### `app/components/BookingModal.tsx` + `BookingModal.module.css`
- All `className="booking-*"` global string references converted to `className={styles.*}` CSS module references.
- All hardcoded hex colors replaced with CSS variables (`var(--text-heading)`, `var(--text-label)`, `var(--cta-bg)`, etc.).
- `@keyframes` moved into the module file (scoped automatically by CSS Modules).
- No functional changes — behavior is identical.

---

### `app/page.tsx` + `app/page.module.css`
- **Removed `"use client"`** — homepage is now a pure Server Component (better performance, no hydration overhead).
- **Removed `useState(isMobile)` and `useEffect(checkMobile)`** — replaced entirely by CSS `@media (max-width: 767px)` rules.
- **Removed the local navbar** — handled by the shared layout.
- **Removed the typo** `fontSize: "8x"` — gone along with all inline styles.
- **Added `data-booking-trigger="true"`** to the hero CTA button for explicit BookingModal wiring.
- All inline styles replaced with CSS module classes using `var()` tokens throughout.

---

### `app/video-booth/page.tsx` + `app/video-booth/page.module.css`
- **Removed `"use client"` and `useState(menuOpen)`** — now a Server Component.
- **Removed local navbar.**
- **Added full mobile layout** — the two-column hero grid collapses to single-column, the hardcoded `height: "820px"` image adapts, section paddings adjust. All via CSS media queries.
- All inline styles replaced with CSS module classes and CSS variables.
- Navigation in the old menu used `window.location.href` — removed entirely.

---

### `app/video-album/page.tsx` + `app/video-album/page.module.css`
- **Removed `useState(menuOpen)` and local navbar.**
- **Added `aria-label`** to all five player control buttons (SkipBack, Play, SkipForward, Volume1, Volume2).
- All inline styles replaced with CSS module classes.

---

### Merge conflicts resolved
- `app/api/booking/route.ts` — conflict markers removed; clean single version retained.
- `app/gallery/page.tsx` — conflict markers removed.
- `app/contact/page.tsx` — conflict markers removed.

---

### Build result
```
✓ Compiled successfully
✓ TypeScript passed
✓ 9/9 static pages generated
0 errors, 0 linter warnings
```
