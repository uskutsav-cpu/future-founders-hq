import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui";
export const metadata = pageMetadata("Privacy", "/privacy");
export default function Page() {
  return (
    <>
      <PageHero eyebrow="YOUR INFORMATION" title="Privacy in this preview." />
      <article className="container legal">
        <p>
          This notice describes the current development website. A full privacy
          policy and verified contact details must be published before live
          applications or messages are accepted.
        </p>
        <h2>Application drafts</h2>
        <p>
          Application answers remain in your browser. If you choose “Save my
          draft on this device,” the site stores them in this browser’s local
          storage until you clear the draft, turn saving off, or clear your
          browser data. Anyone who can use this browser profile may be able to
          access that draft.
        </p>
        <h2>Messages and submissions</h2>
        <p>
          The application and contact forms are not connected to a submission
          service. Preparing an application or message does not send it to
          Future Founders. You can download a copy to your device. Contact form
          text is not saved across page reloads.
        </p>
        <h2>Website requests</h2>
        <p>
          The site does not include advertising or analytics trackers. The
          hosting provider may process ordinary technical request information to
          serve and protect the website. Photos and other page assets are served
          locally with the site.
        </p>
        <h2>Your choices</h2>
        <p>
          Use “Clear draft” on the application page to remove saved application
          information. Downloaded files remain on your device until you delete
          them. Avoid saving drafts on shared devices.
        </p>
        <h2>Before public launch</h2>
        <p>
          The organization must confirm its legal entity, privacy contact, data
          retention practices, hosting providers, and age-appropriate
          application process before enabling live collection.
        </p>
      </article>
    </>
  );
}
