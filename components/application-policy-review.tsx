"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";
import { legalConfig } from "@/data/legal-config";
export function ApplicationPolicyReview() {
  const [reviewed, setReviewed] = useState(false);
  // No consent record is created here. Versioned acceptance must also be recorded
  // in the form/provider before finalized agreements are relied on.
  return (
    <div className="application-policy-review">
      <h3>Before continuing</h3>
      <p>
        Review the <Link href="/terms">Terms of Use</Link>,{" "}
        <Link href="/privacy">Privacy Policy</Link>, and{" "}
        <Link href="/code-of-conduct">Code of Conduct</Link>.
      </p>
      {!legalConfig.adopted && (
        <p className="legal-inline-note">
          These are drafts awaiting organization approval. The proposed online
          application age is {legalConfig.proposedMinimumAge}+. Users under 13
          should not submit personal information while child-privacy
          arrangements remain unconfirmed.
        </p>
      )}
      <label className="legal-checkbox">
        <input
          type="checkbox"
          checked={reviewed}
          onChange={(e) => setReviewed(e.target.checked)}
        />
        <span>
          {legalConfig.adopted
            ? "I have reviewed the linked policies."
            : "I have reviewed the draft notices and understand that they are not yet adopted."}
        </span>
      </label>
      {reviewed ? (
        <a className="button" href={site.applicationUrl}>
          Continue to Google Forms <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <button type="button" className="button" disabled>
          Continue to Google Forms <span aria-hidden="true">↗</span>
        </button>
      )}
      <p className="legal-small">
        This acknowledgment is not saved or sent. It is not a signed chapter
        agreement, parental consent, media permission, or recorded acceptance of
        finalized terms. You’ll enter and submit application information on
        Google Forms.
      </p>
    </div>
  );
}
