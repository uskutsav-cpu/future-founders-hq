# Future Founders — Cloudflare production deployment

Canonical domain: **https://futurefoundershq.org**.

## Architecture and commands

- Next.js 16.3.4 App Router + React 19.2.8, TypeScript, Tailwind CSS 4.
- Static generation (`output: "export"`), including chapter and legal dynamic paths through `generateStaticParams`. No SSR, server actions, API routes, database, or application backend.
- npm with committed package-lock.json. Node 24.16.0 in `.nvmrc`; Node >=22 required by the pinned Wrangler 4.129.1 CLI (Next itself requires >=20.9).
- Install: `npm ci`.
- Build: `npm run build` (`next build --webpack`). Output: `out/`.
- Checks: `npm run lint`, `npm run typecheck`, `npm test`, `npm run check:export`, `npm run check:production`.
- Local Cloudflare runtime: `npm run preview:cloudflare`; in another terminal, `npm run check:routes`.
- Deploy after building: `npm run deploy` (`wrangler deploy`).
- Worker name: `future-founders-hq`. Production branch: `main`. Repository root: `/`.
- Required application/runtime environment variables: **none**. No API token belongs in source or `.env.example`. Wrangler login credentials stay in Wrangler's user configuration, outside Git.
- Static Assets serves `out` directly, with trailing-slash HTML handling and a real custom 404. SPA fallback is deliberately not enabled: a missing path must return 404, not the homepage.

Google Forms handles chapter applications and competition interest. Instagram, TikTok, LinkedIn and school websites are ordinary external links. Fonts, images, CSS and JavaScript are local. No third-party API keys, billing services or runtime data fetching are required. `PORT` is only for the optional local Node preview server.

GitHub repository: https://github.com/uskutsav-cpu/future-founders-hq (private). Existing project history is preserved on `main`.

## Current status

The official site is deployed at `https://futurefoundershq.org/` and the Worker preview is `https://future-founders-hq.uskutsav.workers.dev/`. The domain serves the production Worker. The source repository keeps canonical metadata pointed at the official domain.

## One-time authorization and automatic deployments

1. Sign in at https://dash.cloudflare.com/ using your existing Cloudflare account. Keep the account on Workers Free; do not enable paid plans or add-ons.
2. Open **Workers & Pages**, create/connect a Worker from **GitHub**, and authorize the Cloudflare GitHub integration for only this repository. If starting from an existing Worker, use **Settings → Builds → Connect**. Use the private repository linked in the final report. The Worker must be named `future-founders-hq`, matching `wrangler.jsonc`.
3. Set production branch **main**, root **/**, build command **npm run build**, deploy command **npm run deploy**. Cloudflare installs npm dependencies from the lockfile and reads `.nvmrc`; no application environment variables are needed. Keep non-production branch deployments disabled unless desired later.
4. Deploy and verify the actual workers.dev URL shown by Cloudflare. No workers.dev URL is pre-invented in this repository. Later main-branch pushes build and deploy through this native integration.

For direct deployment from this checkout instead, run `npx wrangler login` and approve Cloudflare's browser authorization, then `npm run build && npm run deploy`. Do not paste a token or password into chat. Native GitHub integration still needs the account's GitHub app authorization for automatic future deploys.

## Domain activation and Porkbun

1. In Cloudflare, add **futurefoundershq.org** on the **Free** plan (or open its existing zone). Review/import existing DNS records, including any mail records; preserve unrelated functionality.
2. Cloudflare will display the authoritative nameservers assigned to this exact zone. Copy **only those displayed values**. No assigned nameservers are known yet, so none are listed here.
3. In Porkbun **Domain Management → futurefoundershq.org → Details → Nameservers → Edit**, replace the registrar's current nameserver list with the exact Cloudflare-assigned list and save. This is a nameserver setting, not a made-up A record or Workers IP. No registrar transfer or hosting purchase is needed. The owner completes Porkbun sign-in; no Porkbun password is requested or used by this project.
4. Wait for Cloudflare's zone status to become **Active** and confirm existing DNS services still work. If an existing DNSSEC delegation is present, follow Cloudflare's onboarding instructions for that actual delegation; do not invent or blindly replace DS records.
5. Verify the workers.dev deployment before attaching the production domain. In Worker **Settings → Domains & Routes → Add → Custom Domain**, enter **futurefoundershq.org**. Cloudflare provisions the appropriate DNS and certificate. Review any existing conflicting hostname record before changing it.
6. The custom domain currently serves the Worker. If its Cloudflare binding is later recreated, add `"routes": [{ "pattern": "futurefoundershq.org", "custom_domain": true }]` to `wrangler.jsonc` after confirming the zone is active.

## Permanent www redirect

This static-only Worker cannot select redirects by hostname using `_redirects`. Configure a Cloudflare **Single Redirect Rule** in the active zone:

- Name: **WWW to canonical apex**.
- Match expression: `(http.host eq "www.futurefoundershq.org")`.
- Dynamic destination expression: `concat("https://futurefoundershq.org", http.request.uri.path)`.
- Status: **301**.
- **Preserve query string: enabled**.
- The www hostname must have a **proxied** DNS record for the rule to execute. Use Cloudflare's www-to-root template/onboarding to create or confirm that record; the account's actual DNS configuration has not yet been observed. Do not change mail or unrelated hostnames.

Expected result: `https://www.futurefoundershq.org/chapters/?source=school` → HTTP 301 with `Location: https://futurefoundershq.org/chapters/?source=school`. Confirm the redirect in Cloudflare before claiming the www host is active.

## Final live verification

Run `npm run check:routes -- https://future-founders-hq.uskutsav.workers.dev` and `npm run check:routes -- https://futurefoundershq.org`. Verify the homepage, chapter profiles, competitions, application acknowledgment, assets and fonts. No real forms should be submitted for QA.

Check `curl -I 'https://www.futurefoundershq.org/chapters/?source=school'` for the exact 301 destination. Check sitemap.xml, robots.txt and canonical/OG URLs. Worker preview pages have canonical links to the apex domain.

## Content preserved and remaining organization decisions

No layout, visible text, photos, fonts, animations or styles were redesigned for deployment. Production metadata now uses the requested domain and allows indexing. Existing legal notices remain visibly draft where applicable; operator/contact details and final competition rules remain the organization's outstanding launch decisions in `LEGAL-READINESS.md`. Deployment preparation does not adopt those policies or certify legal compliance.

## Official references

- [Cloudflare static generation and custom 404](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/)
- [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [Workers build image and Node version selection](https://developers.cloudflare.com/workers/ci-cd/builds/build-image/)
- [Worker Custom Domains and www redirects](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
- [Static asset pricing](https://developers.cloudflare.com/workers/platform/pricing/) — static asset requests are free and unlimited; no paid Worker runtime or paid service is configured here.
- [Porkbun nameserver instructions](https://kb.porkbun.com/article/22-how-to-change-nameservers)
