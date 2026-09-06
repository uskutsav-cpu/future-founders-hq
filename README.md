# Future Founders

A complete student entrepreneurship network website built with Next.js App Router, React, TypeScript, and Tailwind CSS. The visual system uses warm paper, ink, vermilion, and a small citrus accent; layouts are editorial and chapter-first.

## Run and maintain

Use Node.js 22.18 or newer (Node 24 recommended).

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

The production build is a static export in `out/`. `npm start` previews that export locally. The project uses Next.js's supported webpack build path to avoid a Turbopack process/port limitation in the development environment. All normal pages render at build time; only navigation, directories, and forms need client state.

## Editing content

| What to change | File |
| --- | --- |
| Chapter directory, profile content, status | `data/chapters.ts` |
| Competition dates, eligibility, URLs | `data/competitions.ts` |
| National and chapter events | `data/events.ts` |
| Executive team and advisors | `data/leadership.ts` |
| Programs, meeting rhythms, launch steps | `data/programs.ts` |
| FAQs and unresolved policies | `data/faqs.ts` |
| Download links and resource availability | `data/resources.ts` |
| Form steps and validation rules | `data/application.ts` |
| Photos, contact details, social links, preview mode | `data/site.ts` |
| Brand colors, typography, responsive layout | `app/globals.css` |

Each content file uses typed objects. Copy a record, update its fields, and give it a unique `id` and URL-friendly `slug`. Do not change a published slug without setting up a redirect at your host. Build again to publish changed content and generate new chapter pages.

The network preview groups chapters geographically and caps each group at four links with an additional-chapters link, so it stays compact as the directory grows. Optional profile fields (people, membership counts, images, achievements, social links) render only when supplied. Leadership groups remain hidden until populated. Event times require an explicit IANA time zone.

## Photography and brand assets

`data/site.ts` is the image replacement registry. Local JPG originals are clearly named `placeholder-...-1400x933.jpg`; their corresponding WebP sizes are 480, 800, and 1400 pixels wide. Replace both originals and run `npm run prepare-images` to regenerate the responsive variants and social preview.

The two real stock images are illustrative, not pictures of Future Founders members. Credits, source URLs, and licensing notes are in `public/images/PHOTO-CREDITS.md`. Replace them with permissioned organization photography before launch. The editable draft logo is `public/resources/future-founders-logo.svg`.

## Application and contact forms

This version has **no submission backend**. Both flows are explicit about that. The six-step application validates required fields, email, HTTP(S) URLs, graduation year, choices, and essay lengths; users can review and edit answers, optionally save a local draft, clear that draft, and download JSON copies. Local saving is opt-in, versioned, and restricted to recognized fields. Contact text stays in page state and can be downloaded after validation.

Connect `submitApplication` and `submitContact` in `lib/submissions.ts` to an API when ready. Validate all fields again on the server, handle errors, protect against spam, and return a real receipt before displaying success. Never put provider secrets in `NEXT_PUBLIC_*` variables. Enabling a same-origin Next.js API requires moving from static export to a supported server deployment; an external API can also be used with an appropriate configuration.

Review and update the preview-specific labels, confirmation text, privacy notice, and terms at the same time as connecting live submissions. The current notices describe the implemented preview accurately; they are not final organization policies.

## Launch checklist

- Replace all **10 fictional chapter records** with verified school names, locations, and authorized chapter information. Set each real record's `sample` to `false`.
- Replace fictional competitions with verified organizer, registration, date, and eligibility information. Set `sample: false` only on verified opportunities. External competitions must never imply partnership.
- Add approved leadership names and photos, actual chapter contacts, and confirmed events.
- Fill in the real email addresses and social URLs in `data/site.ts`; null entries are deliberately not live links.
- Replace illustrative photography and confirm permission to use actual student images.
- Confirm fees, advisor requirements, affiliation requirements, and other unresolved FAQs.
- Connect submission services and publish final privacy/terms content before collecting information.
- Set `NEXT_PUBLIC_SITE_URL` to the verified public origin (no trailing slash). The private preview's actual hosting origin is the default for share metadata and sitemap generation.
- Set `site.development` to `false` only after the sample directory notices and sample-specific copy have been replaced. This flag removes the global preview notice and allows indexing; directory-specific sample notices are intentionally explicit content that also needs review.
- Rebuild and recheck the production routes, keyboard interactions, forms, and mobile layouts.

## SEO and accessibility

Each page has a title, description, sharing metadata, and canonical URL. The app includes a generated sitemap, robots.txt, favicon, local social preview image, and Organization structured data. Development mode uses `noindex` and blocks crawlers.

Semantic landmarks, visible focus rings, a skip link, native form labels and controls, announced result counts, accessible validation, native FAQ disclosures, and keyboard menu handling are built in. Reduced-motion preferences disable CSS transitions and smooth form scrolling. The design is responsive from 375px to large desktop widths.

## Resource downloads

Six starter resources are available: launch checklist, first meeting guide, recruitment guide, experiment worksheet, naming guidelines, and SVG logo. These are editable planning drafts. Remaining resources are intentionally marked Coming Soon.
