import { pageMetadata } from "@/lib/seo";
import { PageHero, TextLink } from "@/components/ui";
import { ApplicationOpportunities } from "@/components/application-opportunity";
export const metadata = pageMetadata(
  "Applications & Internships",
  "/applications",
  "Explore student roles with Future Founders. Apply for the remote Social Media Intern role by September 20, 2026.",
);
export default function ApplicationsPage() {
  return (
    <>
      <PageHero eyebrow="GET INVOLVED" title="Put your skills to work.">
        <p>
          Student roles. Real responsibility. Help build the network you’re part
          of.
        </p>
      </PageHero>
      <section
        className="container applications-section"
        aria-label="Applications and internships"
      >
        <ApplicationOpportunities />
      </section>
      <section className="container small-callout section">
        <div>
          <h2>Want to lead at your school?</h2>
          <p>
            Start a local chapter and bring students together on your campus.
          </p>
        </div>
        <TextLink href="/start-a-chapter">Start a chapter</TextLink>
      </section>
    </>
  );
}
