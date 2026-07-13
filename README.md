# The Community Central Website

A Next.js (App Router) + TypeScript + Tailwind CSS site for The Community (TC) — a unified
platform for TC's departments and ministries, including fully built-out **The Recovery House
(TRH)** and **100 Leaders** departments, plus Home, About, Departments, News & Events, Resources,
and Contact.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build (also runs next-sitemap via the postbuild script)
npm run start   # serve the production build
npm run lint    # ESLint
```

Copy `.env.example` to `.env.local` to configure Google Analytics (`NEXT_PUBLIC_GA_MEASUREMENT_ID`)
and the sitemap's `SITE_URL`. Both are optional — the site works fully with them unset (GA4 is a
no-op, and the sitemap falls back to the default site URL).

## Folder Structure

```
src/
  app/                      Routes (App Router). Each folder = a URL segment.
    departments/recovery/   The Recovery House: landing, about, program, recovery-in-action
    departments/100-leaders/  100 Leaders single-page department
    news/[slug]/            News & Events detail pages, statically generated from content/news.ts
    api/                    Form-handling API routes (contact, leaders-signup, recovery-inquiry,
                             newsletter) — each validates with Zod and calls the sendEmail stub
  components/                Reusable UI: Header/MobileMenu (two-tier nav), Hero, Card,
                              CTAButton, StatCounter, TestimonialSlider, FAQAccordion,
                              DepartmentPageLayout, Footer, Gallery (lightbox), VideoEmbed,
                              forms (ContactForm, LeadersGetInvolvedForm, RecoveryInquiryForm),
                              NewsGrid/ResourceGrid (client-side filter + search)
  content/                    All editable copy, typed as plain TS objects — see below
  lib/
    types.ts                  Shared content types
    schemas.ts                 Zod schemas backing every form
    sendEmail.ts                Email-send stub (see "Wiring up email" below)
```

## Editing Content

Every page pulls its copy from a typed object in `src/content/*.ts` — there is no content baked
directly into JSX beyond structural labels. To change what's on a page, edit the matching content
file; you do not need to touch components or route files for a copy change:

- `site.ts` — nav links, utility-bar CTAs per section, footer links, contact info, social links
- `home.ts` — Home page (hero, About summary, ministry area cards, stats, testimonials, news)
- `about.ts` — About Us (story, vision, mission, core values, leadership/team placeholders, partners)
- `departments.ts` — Departments index page cards
- `recovery.ts` — All Recovery House copy: hero, program phases, core values, FAQs, etc.
- `stories.ts` — Recovery in Action testimonies (add new entries here to add new stories)
- `leaders.ts` — 100 Leaders copy: Identify/Equip/Support/Hold Accountable, FAQs
- `news.ts` — News & Events items (add an object here to publish a new article/event)
- `resources.ts` — Downloadable/linkable resources by category

Several sections (About's leadership/team/partners, 100 Leaders' Courses/Events/Registration/
Success Stories) ship as clearly labeled `TODO:` placeholders where the source brief had no real
content yet — search each content file for `TODO` before launch.

## Adding a New Department

The five Areas of Ministry (Spiritual Formation, Emotional and Physical Empowerment, Work and
Faith, Leadership Development, Online Ministry) are seeded as "coming soon" cards on the Home and
Departments pages. To turn one into a full department page:

1. Add a content file, e.g. `src/content/work-and-faith.ts`, following the shape of `recovery.ts`
   or `leaders.ts`.
2. Add a route folder, e.g. `src/app/departments/work-and-faith/page.tsx`, composing `Hero` and
   `DepartmentSection` (from `components/DepartmentPageLayout.tsx`) around your content — the same
   pattern used by the Recovery and 100 Leaders pages.
3. Update the card in `departments.ts` (and `home.ts`) to point at the new route and drop the
   `comingSoon` flag.
4. If the department needs its own utility-bar CTAs (like Recovery's "Apply for Residency"), add
   an entry to the `getUtilityCTAs()` path-matcher in `src/components/Header.tsx`.

No changes to `Header`, `Footer`, or shared components are required.

## Forms & Email

Four forms (`Contact`, `100 Leaders — Get Involved`, `Recovery inquiry`, plus the footer
newsletter signup) use `react-hook-form` + `zod` and validate against the schemas in
`src/lib/schemas.ts`.

The three inquiry-style forms (`Contact`, `100 Leaders — Get Involved`, `Recovery inquiry`) send a
fire-and-forget POST to their matching route under `src/app/api/` for record-keeping (each route
calls `sendEmail()` in `src/lib/sendEmail.ts`, which currently only `console.log`s the submission),
then redirect the browser to `wa.me/<number>` (see `whatsappLink()` in `src/content/site.ts`) with
the form data pre-filled as the message text — that WhatsApp chat is the actual delivery channel
today. The newsletter form is unaffected and still relies solely on the `/api/newsletter` stub.

**To wire up real email** (in addition to or instead of the WhatsApp redirect), replace the body of
`sendEmail()` with a real provider call (Resend, SendGrid, SMTP via nodemailer, etc.) — the function
signature and every call site already pass through subject + structured data, so no route changes
are needed. To change the WhatsApp number, edit `siteConfig.whatsapp` in `src/content/site.ts`.

## CMS Migration Path

Content lives as plain typed objects, not JSX, specifically so it can be swapped for a CMS fetch
later without touching components: replace the static imports in each `app/**/page.tsx` with a
fetch to Sanity/Contentful/etc. that returns data matching the same TypeScript interfaces in
`src/lib/types.ts`, and the page/components need no further changes.

## SEO & Analytics

- Per-page `metadata` exports (title, description, Open Graph) on every route
- `next-sitemap` generates `sitemap.xml` and `robots.txt` on `npm run build` (config in
  `next-sitemap.config.js`)
- GA4 is wired via `@next/third-parties` in `src/app/layout.tsx`, gated on
  `NEXT_PUBLIC_GA_MEASUREMENT_ID` — unset means no script loads at all

## Images

No real photography was supplied for this build. `next/image` is used throughout (news cards,
detail pages, the Gallery lightbox) with `picsum.photos` placeholder URLs — swap the `image`/`src`
fields in the relevant content files for real asset paths or a DAM/CMS URL when photography is
available. `next.config.ts` already allow-lists `picsum.photos` and `images.unsplash.com` as
remote image sources; add your production image host there too.

## Notes

- Built against the current `create-next-app@latest` (Next.js 16, React 19, Tailwind v4) per the
  setup instructions this project was built from, rather than pinning to Next 14 — App Router,
  Server Components, and every pattern in this README apply the same way across both.
- Colors, type, and spacing are defined via Tailwind v4's CSS-first `@theme` in
  `src/app/globals.css` (navy/charcoal + gold/amber palette) rather than a `tailwind.config.js`.
# TC-Community
