import Link from "next/link";
import { PageHero, TextLink } from "@/components/ui";
import { legalDocuments, documentHref } from "@/data/legal-documents";
import { legalConfig } from "@/data/legal-config";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Legal & Policies",
  "/legal",
  "Website notices, community standards, and chapter participation documents.",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="CLEAR EXPECTATIONS. SHARED RESPONSIBILITY."
        title="Legal & policies."
      >
        <p>The standards, notices, and agreements behind the network.</p>
      </PageHero>
      <div className="container legal-hub">
        {!legalConfig.adopted && (
          <aside className="legal-status" role="note">
            <strong>Prepared for review</strong>
            <p>
              These documents are drafts. Legal operator details, monitored
              contacts, the age policy and operational procedures still need
              confirmation. Agreements are templates, not signed permissions.
              Nothing here asserts nonprofit status or legal compliance.
            </p>
            <span>
              Prepared {legalConfig.preparedDate} · {legalConfig.version}
            </span>
          </aside>
        )}
        {(
          [
            "Website",
            "Chapters & participation",
            "Conditional policies",
          ] as const
        ).map((category, index) => (
          <section className="legal-category" key={category}>
            <div>
              <span className="section-number">0{index + 1}</span>
              <h2>{category}</h2>
              <p>
                {index === 0
                  ? "Understand the website and your choices."
                  : index === 1
                    ? "Documents to complete before approval or participation."
                    : "Requirements to resolve before introducing these activities."}
              </p>
            </div>
            <div className="legal-doc-list">
              {legalDocuments
                .filter((doc) => doc.category === category)
                .map((doc) => (
                  <Link href={documentHref(doc.slug)} key={doc.slug}>
                    <div>
                      <h3>{doc.title}</h3>
                      <p>{doc.description}</p>
                    </div>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
            </div>
          </section>
        ))}
        <section className="legal-choices-callout">
          <div>
            <h2>Your information. Your choices.</h2>
            <p>
              Clear an earlier browser draft, understand available controls, and
              find the route for a privacy request.
            </p>
          </div>
          <TextLink href="/privacy-choices">Privacy Choices</TextLink>
        </section>
      </div>
    </>
  );
}
