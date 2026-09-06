# Future Founders

Next.js App Router, React, TypeScript, Tailwind CSS. Server-rendered static pages with small client components for navigation and searchable directories. Original blue/navy identity, Poppins typography, organization-supplied logo and photography.

## Develop and validate

```sh
npm install
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
node scripts/check-export.mjs
npm start
```

`npm run build` uses the supported Next.js webpack builder and exports to `out/`. Hosting is configured in `.openai/hosting.json`. All content changes require a fresh build.

## Content editing

- `data/site.ts`: Google Forms application URL, Instagram, TikTok, photography, metadata and indexing configuration.
- `data/chapters.ts`: six organization-supplied chapter listings. Nepal and Azerbaijan await school/city details. The organization-wide total of 10 comes from the original brief and is separate from the six supplied listings; add remaining records when available.
- `data/competitions.ts`: empty typed opportunity collection. No fictional competitions remain. The competitions page renders its announcement state until verified listings are added, then automatically enables the directory.
- `data/events.ts`: event records. Empty upcoming calendar is intentional.
- `data/leadership.ts`: national team and advisors. Missing sections remain hidden.
- `data/resources.ts`, `data/programs.ts`, `data/faqs.ts`: resources, chapter activities, and frequently asked questions.

Keep chapter slugs stable once published. Only add names, member counts, accomplishments, dates, and affiliations supplied or verified by the organization.

## Applications and contact

Application buttons link directly to the supplied Google Form: https://forms.gle/y8jjNRrDRz276wGu7. The `/apply` route remains a clear handoff page for older links. The obsolete local multi-step form and its submission adapter have been removed. No application responses are collected by this website.

Contact directs visitors to the application, chapter directory, Instagram, and TikTok. No fake email addresses, inactive contact form, or submission confirmation remains. Previous locally saved application drafts are not transmitted or silently deleted; the privacy page explains how to clear earlier browser site data.

## Assets and typography

Poppins WOFF2 files are self-hosted under `public/fonts` with the OFL license. Hero weight 800, headings 600, paragraphs 300 with .02em tracking.

Original logo and four meeting photos supplied September 6, 2026 are preserved in `public/images/originals/`. `data/site.ts` is the photo registry. `npm run prepare-images` regenerates responsive WebP photos, supplied logo crop, watermark, favicon, and social preview. Photography is not attributed to individual schools without supplied details.

The hero is a CSS bright-blue field (#0292DF) with dark navy accents (#0A2C55) with small, softly repeated versions of the supplied mark; the previous classroom hero has been removed. Fonts and imagery load locally without third-party widgets.

## Before wider publication

The Site remains an owner-only preview. Confirm the remaining chapter information, image permissions, and any organization policies. Set `site.development` to false when ready for search indexing. This flag controls crawler metadata, not visible placeholder notices. Configure a canonical domain through `NEXT_PUBLIC_SITE_URL` if changed from the existing Site URL.

Verify new opportunity URLs, dates, eligibility, and organizers before adding listings. External opportunities must never imply an unconfirmed partnership. No funding, sponsorship, acceptance rate, or membership claims have been invented.

## Legal content and launch readiness

The `/legal` hub contains 13 structured draft notices and agreement templates, plus `/privacy-choices` with a real control to clear the earlier `ff-application-v1` browser draft. Footer links make the policies available sitewide. `/apply` acknowledges review before the supplied Google Forms handoff; this acknowledgment is intentionally not represented as saved acceptance or parental consent.

Edit `data/legal-documents.ts` for document text and `data/legal-config.ts` for confirmed operator/contact facts. **Read `LEGAL-READINESS.md` before adoption:** it maps all 25 requested checklist items, records missing information, and gives Google Forms, vendor, retention, incident, media and international review steps. No legal entity, inbox, tax status, retention period, legal acceptance record or trademark registration has been fabricated. The Google Form itself has not been changed. Drafts require organization approval and qualified legal review; they are not a compliance certification. Conditional agreement templates need completion and signatures for each relevant activity.
