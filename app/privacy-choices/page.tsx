import Link from "next/link";
import { PageHero } from "@/components/ui";
import { PrivacyControls } from "@/components/privacy-controls";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Privacy Choices",
  "/privacy-choices",
  "Manage earlier browser drafts and find privacy request information.",
);
export default function Page() {
  return (
    <>
      <PageHero eyebrow="PRIVACY & CONTROL" title="Your privacy choices.">
        <p>
          Understand what this website stores and how to take the next step.
        </p>
      </PageHero>
      <div className="container legal-hub">
        <PrivacyControls />
        <section className="legal-choices-callout">
          <div>
            <h2>About tracking choices</h2>
            <p>
              No optional analytics, advertising pixels or embedded social
              trackers are installed in the application code. There are no
              optional tracking categories to switch off here. Hosting and
              external sites may have their own cookies and controls.
            </p>
          </div>
          <div className="legal-related">
            <Link href="/cookies">Read the Cookie Policy →</Link>
            <Link href="/privacy">Read the Privacy Policy →</Link>
          </div>
        </section>
      </div>
    </>
  );
}
