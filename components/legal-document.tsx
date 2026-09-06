import Link from "next/link";
import { PageHero } from "@/components/ui";
import { legalConfig } from "@/data/legal-config";
import type { LegalDocument as Document } from "@/data/legal-documents";

export function LegalDocument({ document }: { document: Document }) {
  return (
    <>
      <PageHero eyebrow="LEGAL & POLICIES" title={document.title}>
        <p>{document.description}</p>
      </PageHero>
      <div className="container legal-document">
        <Link className="legal-back" href="/legal">
          ← All policies & agreements
        </Link>
        <div className="legal-status" role="note">
          <strong>
            {legalConfig.adopted
              ? "Published policy"
              : "Draft for review · Not yet adopted"}
          </strong>
          <p>
            Prepared {legalConfig.preparedDate}. Version {legalConfig.version}.
            {legalConfig.effectiveDate
              ? ` Effective ${legalConfig.effectiveDate}.`
              : " No effective date has been set."}
          </p>
          {!legalConfig.adopted && (
            <>
              <p>
                This material needs organization approval and qualified legal
                review before it is relied on as a final policy or agreement.
              </p>
              <ul>
                {document.review.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="legal-grid">
          <aside className="legal-index">
            <nav aria-label="On this page">
              <h2>On this page</h2>
              {document.sections.map((section, index) => (
                <a key={section.title} href={`#section-${index + 1}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>
          <article className="legal-copy">
            {document.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.title}>
                <span className="legal-section-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {section.items && (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <section className="legal-contact-block">
              <h2>Operator & contact details</h2>
              <dl>
                <dt>Legal operator</dt>
                <dd>{legalConfig.operatorName || "Not yet provided"}</dd>
                <dt>Organizational mailing address</dt>
                <dd>{legalConfig.mailingAddress || "Not yet provided"}</dd>
                {(
                  [
                    ["Privacy", legalConfig.privacyEmail],
                    ["Legal", legalConfig.legalEmail],
                    ["Safety", legalConfig.safetyEmail],
                    ["Accessibility", legalConfig.accessibilityEmail],
                  ] as const
                ).map(([label, email]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>
                      {email ? (
                        <a href={`mailto:${email}`}>{email}</a>
                      ) : (
                        "Monitored contact not yet provided"
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <p>
                For current inquiry pathways, visit{" "}
                <Link href="/contact">Contact</Link>. For browser-data controls
                and request routing, visit{" "}
                <Link href="/privacy-choices">Privacy Choices</Link>.
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
