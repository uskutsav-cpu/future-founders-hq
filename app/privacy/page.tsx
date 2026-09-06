import { pageMetadata } from "@/lib/seo";
import { PageHero, TextLink } from "@/components/ui";
import { site } from "@/data/site";
export const metadata = pageMetadata("Privacy", "/privacy");
export default function Page() {
  return (
    <>
      <PageHero eyebrow="YOUR INFORMATION" title="Privacy, clearly." />
      <article className="container legal">
        <p>
          This page explains how information is handled by the current Future
          Founders website and the services it links to.
        </p>
        <h2>Chapter applications</h2>
        <p>
          Chapter applications are completed on Google Forms. This website links
          to the application and does not collect or store your answers. Review
          the information and privacy notices shown on the form before
          submitting.
        </p>
        <TextLink href={site.applicationUrl}>
          View the chapter application
        </TextLink>
        <h2>Social platforms</h2>
        <p>
          Instagram and TikTok links take you to external platforms. Information
          you share there is handled under their terms and privacy policies.
          This website does not embed social tracking widgets.
        </p>
        <h2>Website requests</h2>
        <p>
          This website does not include advertising or analytics trackers. The
          hosting provider may process technical request information to serve
          and protect the site. Fonts and images are served with the website.
        </p>
        <h2>Earlier saved drafts</h2>
        <p>
          If you saved a local application draft in an earlier version of this
          website, it remains in that browser until its site data is cleared.
          Earlier drafts were not sent to Future Founders. Clear this website’s
          data in your browser settings to remove them.
        </p>
        <h2>Questions</h2>
        <p>
          For questions about information shared with Future Founders, contact
          the organization through its Instagram profile. Organization-specific
          application retention details should be confirmed directly.
        </p>
        <TextLink href={site.socials.Instagram}>
          Contact Future Founders
        </TextLink>
      </article>
    </>
  );
}
