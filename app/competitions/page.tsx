import { pageMetadata } from "@/lib/seo";
import { PageHero, TextLink } from "@/components/ui";
import { CompetitionDirectory } from "@/components/directories";
export const metadata = pageMetadata("Competitions", "/competitions");
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="A REASON TO GO FURTHER"
        title="Opportunities worth building for."
      >
        <p>Find a challenge. Form your team. Put your ideas to the test.</p>
      </PageHero>
      <section className="container directory-section">
        <div className="sample-notice">
          <strong>Explore the demo database.</strong> All listings below are
          fictional development samples. Verified external competitions will
          appear as opportunities recommended to members, not Future Founders
          events or partnerships.
        </div>
        <CompetitionDirectory />
      </section>
      <section className="container section small-callout">
        <div>
          <h2>Know a good opportunity?</h2>
          <p>Help us build a useful competition list for student founders.</p>
        </div>
        <TextLink href="/contact?reason=Competitions">
          Share a competition
        </TextLink>
      </section>
    </>
  );
}
