# Validation — September 6, 2026 final cleanup

- Hero classroom image removed; the replacement uses reference-sampled bright blue #0292DF and dark navy #0A2C55, with small, soft, repeated Future Founders logo marks. No oversized background logo remains.
- Supplied Instagram and TikTok URLs are centralized in `data/site.ts` and used across the site.
- Chapter application buttons lead directly to the supplied Google Form. The URL was followed read-only and returned HTTP 200 at Google Forms. No application was submitted during testing.
- `/apply` preserves older incoming links with a clear external application handoff. The obsolete local application form and contact draft form are removed. Contact now provides functioning application, chapter, Instagram, and TikTok paths; fake contact addresses and unavailable social links are gone.
- Fictional competitions removed from source data and homepage. The competitions route has a purposeful coming-soon announcement and social update links. The typed directory architecture remains ready for verified opportunities.
- Four configuration/data checks cover exact external links, absence of fake competition data, chapter route uniqueness, and missing country-only school details.
- Main routes and all six chapter profiles checked at 375px, with no horizontal overflow. Revised hero, competition announcement and application handoff visually inspected. Desktop hero and background pattern visually inspected at 1440px.
- Keyboard-accessible navigation and visible focus styles retained. Decorative background has no accessible content or motion. Poppins is local; body 300, headings 600, hero 800. Hero body is 24px to meet large-text contrast requirements on the supplied bright blue; smaller copy uses a deeper navy.
- Lint, TypeScript, tests, production build, and static page/asset/anchor validation run before publication.
- Privacy and website information updated to describe external applications and social channels accurately. Previously saved browser drafts are not transmitted or silently removed.

## Configuration that still requires organization input

Nepal and Azerbaijan school/city details, remaining chapter records, chapter contacts, leadership names, and confirmed opportunity/event information. The organization-wide total of 10 remains separate from the six supplied chapter listings. Owner-only access and noindex remain unchanged.

No Lighthouse score or official partnership is claimed.
