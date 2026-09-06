# Validation — September 6, 2026 redesign

- Original navy logo and four supplied meeting photos replace all previous sample branding and stock photography.
- Self-hosted Poppins: hero 800, headings 600, paragraphs 300 with .02em tracking.
- Six user-supplied chapter profiles replace ten fictional schools. The original organization-wide total remains 10; the directory explicitly explains six available listings. Nepal and Azerbaijan have country-level details only. No people, membership counts, or school-specific photograph attribution invented.
- Lint, TypeScript, eight validation/data tests, and production static build pass.
- Static export link/asset/anchor checker passes across all generated HTML pages.
- Browser checked all main routes at 375px and 1440px: no horizontal overflow or broken images. All six dynamic chapter profiles checked at desktop; Nepal country-only rendering also visually checked at 375px.
- Homepage checked at 375, 430, 768, 1024, 1440, and 1728px. Desktop and mobile hero, menu, chapter listing/profile, and application visually inspected.
- Mobile menu opens, closes with Escape, uses focus containment and inerts background content. Existing visible keyboard focus styles retained with the new palette.
- Chapter district search for Prosper returns Rock Hill; College filter shows its intended empty state; clear filters restores all six listings.
- Competition search returns one matching opportunity and the correct no-results state.
- Application checked for required-field validation and first-to-second-step progression on mobile. Existing multi-step summary, local save, download and contact adapter architecture unchanged; full original six-step browser QA and unit validation retained.
- Loading screen observed during navigation. Empty event, leadership, and chapter meeting states render without invented details. Reduced-motion rules cover new image hover effects and existing motion.
- Browser console: no errors. Fixed Next.js smooth-scroll attribute warning found during navigation.

## Launch configuration still required

Connect the application/contact backend; supply chapter contacts and leadership, missing school details, verified opportunities, approved policies and social links. Confirm the remaining chapter records and organization-wide count. The current site is intentionally an owner-only development preview with noindex.

No measured Lighthouse scores are claimed.
