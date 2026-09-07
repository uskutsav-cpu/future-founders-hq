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

## Legal section — September 6, 2026

- Added 13 structured draft legal notices/frameworks, legal hub, privacy choices and 8 footer legal/contact links; replaced the former brief privacy/terms pages.
- Lint, TypeScript, 9 automated tests and production build passed. Static export: 36 HTML pages, 1,931 local references checked, no missing pages/assets/anchors.
- Inspected desktop hub and anchored privacy document at 1440px. All 15 legal-area routes checked at 375px: one expected page title, no horizontal overflow, all 8 footer links present.
- Application checkbox starts unchecked; keyboard Space enables the exact supplied Google Forms destination, Tab reaches it with visible focus. No application submitted; external form not altered.
- Automatic approval review blocked clearing potentially real legacy data in the user's browser. Did not retry or bypass that control. Instead tested the production clear helper against disposable storage: removes only the legacy key, retains unrelated values, reports absent data correctly and propagates blocked-storage errors to the component's error handler.
- No browser console warnings/errors observed during reviewed legal/application pages. No new motion, trackers, cookies, databases or paid services introduced.
- Draft policy status and missing operator/contact/age/retention details remain explicit. Source-level unknowns are null, not fictitious live addresses. Legal review, name clearance, organization adoption and operational implementation remain outstanding; see LEGAL-READINESS.md.

## Chapter leadership update — September 7, 2026

- Added Heritage High School as the pioneer chapter, listed first in the directory/network. Its three Co-Presidents share records with the About and Leadership founding-team sections.
- Added the four supplied chapter presidents, six LinkedIn links and six actual profile portraits. Display names and portraits were read from each exact supplied profile in the browser; no similar-name search image was substituted. Sriram Subra has initials and no invented LinkedIn link.
- School websites are separately labeled, with accidental trailing commas removed. They are never used as chapter joining destinations.
- Nepal replaced by Bangladesh, including the dynamic route, directory/network, current source documentation and legal chapter-count context. Seven supplied listings remain distinct from the previously supplied organization-wide total of 10.
- Lint, TypeScript, 11 tests and production build passed. Export checker: 37 HTML pages, 2,004 local references, zero failures.
- Inspected the About founding-team section on desktop. Checked the Heritage mobile profile, the four president profiles and Bangladesh at 375px: correct names, portrait paths and school links, no horizontal overflow. Directory search finds Heritage with its pioneer label. No browser console warnings or errors observed.
- Portraits are local 600px WebP assets totaling approximately 234KB. No external image hotlinks or new dependencies.
