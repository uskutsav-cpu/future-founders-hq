import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui";
export const metadata = pageMetadata("Website information", "/terms");
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="USING THIS WEBSITE"
        title="A few clear expectations."
      />
      <article className="container legal">
        <p>
          This website introduces Future Founders, its chapter network, and ways
          to get involved.
        </p>
        <h2>Chapter applications</h2>
        <p>
          Applications are submitted through the linked Google Form. Applying
          does not confirm chapter approval or membership. School organization
          requirements and chapter participation details should be confirmed
          with the relevant school and Future Founders.
        </p>
        <h2>Opportunities and events</h2>
        <p>
          Competition and event information will be published when available.
          External opportunities, when listed, do not imply a partnership or
          endorsement by their organizers.
        </p>
        <h2>Resources and brand assets</h2>
        <p>
          Resources are starting points for chapter planning. Adapt them to your
          school’s requirements. Use Future Founders branding in connection with
          authorized chapter activities and preserve the supplied logo’s
          proportions.
        </p>
        <h2>Photography</h2>
        <p>
          Meeting photographs and the logo were supplied by Future Founders.
          Individual photographs are not attributed to specific schools.
        </p>
        <h2>External services</h2>
        <p>
          Google Forms, Instagram, and TikTok are separate services with their
          own terms and privacy policies. Review those policies when using them.
        </p>
      </article>
    </>
  );
}
