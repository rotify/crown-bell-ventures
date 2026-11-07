# Crown Bell Ventures — website

Front end for the Crown Bell Ventures real estate site, built with Next.js 16 (App Router), GSAP + ScrollTrigger and Lenis smooth scrolling.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts: `npm run build` (production build), `npm start` (serve the build), `npm run lint`.

## Where things live

```
src/
  app/
    layout.tsx        fonts, metadata, smooth scrolling
    page.tsx          the order of sections on the home page
    globals.css       colours, type scale, buttons, chips (design tokens at the top)
  content/
    site.ts           ALL copy, photos, developments and contact details
  lib/
    gsap.ts           GSAP + ScrollTrigger setup
    motion.ts         animations on/off, reduced motion, smooth scroll helpers
  components/
    Intro             opening sequence (logo draws, light sweep, curtain lifts)
    Header            fixed header, switches light/dark over sections, mobile menu
    Hero              scroll-scrubbed hero: photo frames in, day turns to night
    Company           01 · The company, with parallax images
    PhotoJourney      sticky scroll galleries (Interiors, Outdoors, Together)
    Perspective       the "cinema" chapter on a fluted-glass backdrop
    Essence           three rotating pillars
    Developments      02 · listings with filters and "Enquire" buttons
    Services          03 · services with cursor-following preview + process line
    Explore           04 · filterable scene gallery
    Lightbox          full-screen viewer with slideshow, keyboard and swipe
    Contact           enquiry form (front end only for now) + WhatsApp
    Footer, MotionToggle, Reveal, Parallax, Logo, Icons
```

## Changing content

Everything is in `src/content/site.ts`. Items marked **PLACEHOLDER** need real details: WhatsApp number, phone, email, office address, city, and the four sample developments.

### Photos

Placeholder photos come from Unsplash (allowed in `next.config.ts`). To use your own:

1. Put the files in `public/images/`, for example `public/images/hero.webp`.
2. In `site.ts`, replace the `unsplash("…")` value with `"/images/hero.webp"`.

## Theming

Colours and fonts are CSS variables at the top of `src/app/globals.css` (`--paper`, `--ink`, `--brass`, `--serif`, `--sans`). Each section's styles sit in its own `*.module.css` next to the component.

A section can set `data-theme="dark"` or `data-theme="light"`; the header reads this to choose its colours.

## Accessibility and motion

- The OS "reduce motion" setting turns off smooth scrolling and scroll-scrubbed effects.
- The floating **Animations** button pauses animations for anyone who prefers it.
- Every gallery works with keyboard (arrows, Esc) and touch swipe.

## Backend (next phase)

- `Contact.tsx` has a `TODO (backend)` where the form should POST to an API route (e.g. `src/app/api/enquiries/route.ts`).
- Developments are typed (`Development` in `site.ts`), ready to come from a CMS or database later.
