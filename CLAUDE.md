# ARC 47 Solutions — Website Build

## What this is

A personal consulting/services website for Christopher Martinez, a solo
software consultant (Zenitharm Solutions, then MountZenith Solutions, were
working names during design; the final brand is **ARC 47 Solutions**). The
site advertises his services and shows real, deployed work as proof.

## Reference implementation — read this first

`mountzenith-homepage.jsx` in this repo root is a complete, working
single-file React prototype (built as a Claude.ai artifact). It already
contains the final copy, brand colors, fonts, data, and behavior, agreed
on through an extended design process. Treat it as the **canonical source
of truth** for all content, structure, and interaction design.

Your job is to restructure this into a proper Next.js (App Router) project
with idiomatic component boundaries, NOT to redesign it or rewrite the
copy. If something looks like a bug (see Known Issues below), fix it. If
something looks like a design decision, preserve it exactly, including
wording, spacing choices, and animation behavior.

## Tech stack

- Next.js (App Router), TypeScript optional but not required
- Tailwind CSS
- Deploy target: Vercel (matches Christopher's stack on his other projects)
- Mobile-first responsive — this is a hard requirement, not a nice-to-have

## Brand

- Name: **ARC 47 Solutions**
- Logo: "Circuit Peak" mark — a navy mountain silhouette with a teal
  circuit trace running through it and a gold dot at the apex. Implemented
  as the `CircuitPeakMark` component in the reference file. Extract it as
  a standalone, reusable component (also usable as a favicon source). This
  mark was originally a visual pun on "MountZenith" (mountain = zenith);
  after the rename to ARC 47 Solutions that pun no longer applies, but
  Christopher chose to keep the mark and colors unchanged rather than
  redesign the logo, so it stays as-is.
- Colors (exact hex, do not substitute Tailwind defaults):
  - Navy `#14213D` — primary text, dark sections
  - Teal `#2DD4BF` — accent, links, CTAs
  - Gold `#F2B705` — rare accent, "peak" moments only (apex dot, final
    career-timeline node, chart highlights)
  - Slate `#64748B` — secondary text
  - Off-white `#F8FAFC` — background
- Fonts: Space Grotesk (display/headings), IBM Plex Sans (body), IBM Plex
  Mono (labels, tags, eyebrows, nav)

## Site structure

1. **Nav** — sticky, mobile hamburger menu. Links: Services, Work, Career,
   Contact. CTA button: "Start a project."
2. **Hero** — headline + subhead, service tag badges, two CTAs, animated
   Circuit Peak mark (circuit trace draws in on load — respect
   `prefers-reduced-motion`).
3. **Services** — card grid. Order matters, it's intentionally led with
   what Christopher can fully build himself: Web Applications → Website
   Design & Development → Database Design → Automation → Data Analytics &
   Visualization → CRM Systems.
4. **Work** — two-tier portfolio:
   - **Projects**: real, linkable work with a mockup graphic, filterable
     by category (tabs generated from the data, not hardcoded). Cards with
     a `client` field show "Delivered for: [client]"; cards with a `link`
     are clickable through to the live site/repo.
   - **Systems & Client Work**: internal/proprietary client work, written
     as generic outcome-focused case studies, no links, no screenshots
     (confidentiality — do not add links or client names here beyond
     what's already in the reference file).
5. **Career** — animated timeline, three roles, connector line only
   animates the first time the section scrolls into view (IntersectionObserver
   pattern already implemented in the reference file — keep this, do not
   revert to a mount-triggered animation).
6. **About** — short bio paragraph.
7. **Contact** — form (name, email, message). Currently shows a
   client-side-only confirmation message. **This needs a real backend**
   (see To-Do).
8. **Footer** — logo mark, "© 2026 ARC 47 Solutions · Christopher
   Martinez, CEO," nav links.

## Hard constraints

- **No em dash characters anywhere** — not in copy, not in code comments,
  not in commit messages. This applies to everything you generate.
- Mobile-first. Every section must work cleanly down to a narrow phone
  viewport.
- Don't embed images as base64 in source. If/when Christopher provides
  real screenshots, they go in `/public` as normal image files referenced
  by path.

## Known issues / explicit to-dos

1. ~~Contact form has no backend.~~ Done — wired to Resend via a Next.js
   API route (`src/app/api/contact/route.js`). Needs `RESEND_API_KEY` and
   `CONTACT_EMAIL` env vars to actually send.
2. **Portfolio mockups are placeholder graphics**, not real screenshots
   (abstract SVG illustrations in brand colors, this was a deliberate
   choice over blurry embedded images — see the `AppMockup` component).
   Swap in real screenshots as Christopher provides them, same component
   structure, just conditionally render an `<img>` when a project has one.
   Each mockup variant now has its own scroll-triggered reveal animation
   (matching the pattern originally only used by the "game" variant),
   respecting `prefers-reduced-motion` — preserve this when swapping in
   real screenshots.
3. ~~Favicon~~ — done, generated from `CircuitPeakMark` as `src/app/icon.svg`.
4. ~~SEO metadata~~ — done, title/description/OpenGraph in
   `src/app/layout.js`, plus a dynamically generated OG image at
   `src/app/opengraph-image.js`.

## Deployment

Vercel, connected to whatever GitHub repo this ends up in. No environment
secrets needed except whatever the contact form's email service requires.
