import { pageMetadata } from "@/lib/seo";
import { PageHero, TextLink, CTA } from "@/components/ui";
import { CompetitionDirectory } from "@/components/directories";
import { competitions } from "@/data/competitions";
import { site } from "@/data/site";
export const metadata = pageMetadata("Competitions", "/competitions");
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="COMPETITIONS & OPPORTUNITIES"
        title="Get ready for what’s next."
      >
        <p>
          A chance to test your ideas, work with a team, and take your thinking
          further.
        </p>
      </PageHero>
      <section className="container directory-section">
        {competitions.length ? (
          <CompetitionDirectory />
        ) : (
          <div className="announcement-panel">
            <div className="announcement-rule" aria-hidden="true" />
            <p className="eyebrow">MORE INFORMATION COMING SOON</p>
            <h2>
              The next challenge
              <br />
              is taking shape.
            </h2>
            <p>
              We’ll share competition details, eligibility, dates, and how to
              participate here when opportunities are announced. Follow Future
              Founders for updates.
            </p>
            <div className="button-row">
              <TextLink href={site.socials.Instagram}>
                Follow on Instagram
              </TextLink>
              <TextLink href={site.socials.TikTok}>Find us on TikTok</TextLink>
            </div>
          </div>
        )}
      </section>
      <section className="container section small-callout">
        <div>
          <h2>In the meantime, start building.</h2>
          <p>Find your chapter and put your next idea into motion.</p>
        </div>
        <TextLink href="/chapters">Find your chapter</TextLink>
      </section>
      <CTA />
    </>
  );
}
