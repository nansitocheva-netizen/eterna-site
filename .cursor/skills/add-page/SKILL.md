---
name: add-page
description: Create and wire up a new page in the Eterna Memories Next.js project. Use when the user asks to add a page, create a new route, build a new section of the site, or says things like "I want a new page for X".
---

# Add a New Page — Eterna Memories

## Step 1: Ask the user these questions before writing any code

Use the AskQuestion tool to gather the following. Ask all questions at once.

1. **Page name / URL slug** — what should the URL be? (e.g. `/pricing`, `/about`, `/packages`)
2. **Purpose** — what is this page for? (e.g. pricing info, team intro, a specific service)
3. **Content to fill in now?** — should the page be built with real content, or a styled placeholder?
   - If real content: ask the user to provide the text, headings, bullet points, etc. before proceeding.
   - If placeholder: build the page with clearly labelled placeholder copy in `copy.ts`.
4. **Has a 3-step "how it works" section?** — yes / no
5. **Has a closing CTA booking button?** — yes / no (default: yes — include unless the user says no)
6. **Needs interactivity / browser state?** — yes / no (determines whether to use `"use client"`)
7. **Any images?** — yes / no. If yes, ask for the filename(s) the user will place in `public/`.

Only proceed to Step 2 once you have these answers.

---

## Step 2: Plan the page

Before creating any files, summarise back to the user:
- Route: `/app/<slug>/`
- Copy key: `copy.<camelCaseName>`
- Sections to build (derived from answers above)
- Whether it needs `"use client"`

---

## Step 3: Create the files

### 3a. Add copy to `app/copy.ts`

Add a new top-level key using camelCase of the page name. All user-facing strings go here — no inline text in the component.

```ts
/* ─── <PageName> page (/<slug>) ──────────────────────── */
myPage: {
  intro: {
    eyebrow: "EYEBROW LABEL",
    heading: "Page Heading",
    text: "Optional intro paragraph.",
  },
  // ...additional sections
  closingCta: {
    heading: "Your closing CTA heading",
  },
},
```

Use `\n` inside strings for intentional line breaks in headings.

### 3b. Create `app/<slug>/page.tsx`

Standard server component template (omit `"use client"` unless the user confirmed interactivity is needed):

```tsx
import type { Metadata } from "next";
import { copy } from "@/app/copy";
import PageIntro from "@/app/components/PageIntro";
import ClosingCta from "@/app/components/ClosingCta";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "<Page Title> | Eterna Memories",
  description: "<One-sentence description>",
};

export default function MyPage() {
  const c = copy.myPage;
  return (
    <main className={styles.main}>
      <PageIntro
        eyebrow={c.intro.eyebrow}
        heading={c.intro.heading}
        text={c.intro.text}
      />
      {/* sections here */}
      <ClosingCta heading={c.closingCta.heading} />
    </main>
  );
}
```

- Use `<HowItWorks steps={c.steps} eyebrow={copy.shared.howItWorksEyebrow} />` if a 3-step section was requested.
- Use `<Image>` from `next/image` for all images. Verify the file exists in `public/` with the correct casing.
- Buttons that open the booking modal: add `data-booking-trigger="true"` — never import `BookingModal` directly.

### 3c. Create `app/<slug>/page.module.css`

Minimum structure:

```css
.main {
  min-height: 100vh;
  background-color: var(--bg-base);
  display: flex;
  flex-direction: column;
  font-family: var(--font-cormorant), serif;
  width: 100%;
  overflow-x: hidden;
}
```

Add section styles following the conventions in `STYLE_GUIDE.md`:
- Alternate backgrounds: `--bg-base` → `--bg-section` → `--bg-warm` → `--bg-muted`
- Section padding (desktop): `120px 60px`; mobile (`max-width: 767px`): `70–90px 20–24px`
- Never use raw hex values — always use a CSS token from `app/globals.css`

### 3d. Add the route to `app/components/Navbar.tsx`

Add a `<Link>` in **both** places:
1. The desktop nav (`.desktopNavLeft` or `.desktopNavRight` group)
2. The mobile slide-in menu (`.menu`)

---

## Step 4: Verify the checklist

After creating the files, confirm each item:

- [ ] `app/<slug>/page.tsx` created
- [ ] `app/<slug>/page.module.css` created
- [ ] All copy added to `app/copy.ts` — no inline strings in the component
- [ ] Route added to `Navbar.tsx` (desktop + mobile)
- [ ] `<PageIntro>` used for the page header
- [ ] `<ClosingCta>` is the last section (unless user opted out)
- [ ] `<HowItWorks>` included if requested
- [ ] Section backgrounds use CSS tokens only
- [ ] Booking modal buttons use `data-booking-trigger="true"`
- [ ] `export const metadata` present with title and description
- [ ] Mobile layout uses `@media (max-width: 767px)` with reduced padding
- [ ] Images use `next/image` and file casing in `public/` is verified
