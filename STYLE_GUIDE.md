# Eterna Memories — Style Guide

## Design philosophy

Warm, elegant, editorial. The palette evokes cream paper, aged gold, and dark espresso. Typography is light-weight (300–400) and generously spaced. Nothing should feel loud or cluttered.

---

## Colour tokens

All colours are defined as CSS variables in `app/globals.css`. **Never use raw hex values in components — always use a token.**

| Token | Hex | Usage |
|---|---|---|
| `--bg-base` | `#f6f1ec` | Default page background |
| `--bg-warm` | `#fcfaf7` | Navbar, card backgrounds |
| `--bg-section` | `#fbf7f2` | Alternate section backgrounds |
| `--bg-muted` | `#f3ece5` | Muted section backgrounds (events grid) |
| `--bg-icon` | `#f5eee7` | Icon circle backgrounds |
| `--text-heading` | `#2f2a28` | All headings, primary text |
| `--text-body` | `#5f5a55` | Body paragraphs, descriptions |
| `--text-nav` | `#3e352d` | Nav links |
| `--text-label` | `#9d8972` | Eyebrow labels, meta text |
| `--gold` | `#c7b28a` | Primary accent; dividers, CTA on dark backgrounds |
| `--gold-mid` | `#b59a78` | Icon colours, secondary accent |
| `--gold-border` | `#d8c7ad` | Subtle borders, dividers |
| `--cta-bg` | `#111111` | Primary CTA button background (light sections) |
| `--cta-text` | `#ffffff` | Primary CTA button text |
| `--footer-from` | `#1c140f` | Dark gradient start (footer, album section, ClosingCta) |
| `--footer-to` | `#2b1d16` | Dark gradient end |
| `--footer-text` | `#f5ede6` | Headings on dark backgrounds |
| `--footer-link` | `#d8cfc6` | Body text on dark backgrounds |
| `--footer-sub` | `#cbb9ad` | Subtle text on dark backgrounds |

**Dark section pattern:** `background: linear-gradient(135deg, var(--footer-from) 0%, var(--footer-to) 100%)` — used by `ClosingCta`, the album highlight section, and the footer.

---

## Typography

| Font | Variable | Usage |
|---|---|---|
| Cormorant Garamond | `var(--font-cormorant)` | Headings, `PageIntro`, page-level copy — the brand voice |
| Geist Sans | `var(--font-geist-sans)` | Body text, UI chrome, forms |
| Geist Mono | `var(--font-geist-mono)` | Not actively used; available |

**Rules:**
- Headings use `font-weight: 300` (light) — avoid bold headings; use letter-spacing instead to add weight.
- Eyebrow labels: `font-size: 11px`, `letter-spacing: 4px`, `text-transform: uppercase`, `color: var(--text-label)`, Cormorant Garamond.
- Section headings: `font-size: 52–60px` desktop / `34–38px` mobile, `font-weight: 300`, Cormorant Garamond.
- Body copy: `font-size: 18–20px`, `line-height: 2`, Cormorant Garamond or Geist Sans.

---

## Buttons

**Primary CTA (light sections):**
```css
background: var(--cta-bg);   /* #111 */
color: var(--cta-text);
border: none;
padding: 18px 42px;
border-radius: 999px;
font-size: 11px;
letter-spacing: 3px;
text-transform: uppercase;
font-weight: 500;
transition: opacity 180ms ease;
```
Hover: `opacity: 0.85`

**Primary CTA (dark sections — ClosingCta):**
```css
background: var(--gold);
color: var(--footer-from);
padding: 20px 52px;
/* same border-radius, letter-spacing, etc. */
```

---

## Decorative dividers

A thin gold line is used consistently as a section separator beneath eyebrow labels:
```css
width: 50px;
height: 1px;
background: var(--gold);
margin: 0 auto 56px;  /* adjust spacing as needed */
```

---

## Spacing & layout

- Section padding (desktop): `120px 60px` standard; `100px 40px` for feature-dense sections.
- Section padding (mobile, ≤767px): reduce to `70–90px 20–24px`.
- Max content width: `1280px` (grids), `800–820px` (text-heavy sections like FAQ, founder quote), `540–580px` (single-column body text).
- Mobile breakpoint: `@media (max-width: 767px)` / `@media (min-width: 768px)`.
- Cards use `border-radius: 20px`; pill buttons use `border-radius: 999px`; album/large visuals use `border-radius: 28px`.

---

## Component patterns

**Eyebrow + line + heading** is the standard section opening:
```jsx
<p className={styles.eyebrow}>SECTION LABEL</p>
<div className={styles.line} />   {/* gold divider */}
<h2 className={styles.heading}>Section Heading</h2>
```

Use `<PageIntro>` for page-level intros (handles this pattern automatically).

**Icon circles:** `width/height: 72–86px`, `border-radius: 999px`, `background: var(--bg-icon)`, icon colour `var(--gold-mid)`.

**Gold underline links (light backgrounds):**
```css
border-bottom: 1px solid var(--gold-border);
transition: border-color 200ms ease;
/* hover → border-color: var(--gold) */
```

**Gold underline links (dark backgrounds):**
```css
border-bottom: 1px solid rgba(199, 178, 138, 0.4);
/* hover → color: var(--footer-text); border-color: var(--footer-text) */
```
