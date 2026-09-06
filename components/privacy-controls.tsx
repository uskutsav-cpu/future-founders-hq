"use client";
import { useState } from "react";
import { clearLegacyDraft } from "@/lib/privacy-storage";
import { legalConfig } from "@/data/legal-config";
const requests = [
  "Access my information",
  "Correct my information",
  "Delete my information",
  "Receive a copy",
  "Withdraw consent",
  "Object or opt out",
  "Appeal a decision",
];
export function PrivacyControls() {
  const [confirmed, setConfirmed] = useState(false);
  const [result, setResult] = useState("");
  const [request, setRequest] = useState(requests[0]);
  function clearDraft() {
    if (!confirmed) return;
    try {
      const outcome = clearLegacyDraft(localStorage);
      setResult(
        outcome === "removed"
          ? "The earlier Future Founders application draft was removed from this browser."
          : "No earlier Future Founders application draft was found in this browser.",
      );
      setConfirmed(false);
    } catch {
      setResult(
        "Browser storage is unavailable. Use your browser’s site-data settings to check or clear stored data.",
      );
    }
  }
  return (
    <div className="privacy-controls">
      <section>
        <span className="legal-section-number">01 / THIS BROWSER</span>
        <h2>Clear an earlier draft.</h2>
        <p>
          A previous version could save an unfinished application on this
          device. Clear it here if you used that version on this website
          address. This cannot clear data on a different address or device.
        </p>
        <label className="legal-checkbox">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
          />
          <span>Remove my earlier local draft. This cannot be undone.</span>
        </label>
        <button
          className="button"
          type="button"
          disabled={!confirmed}
          onClick={clearDraft}
        >
          Clear earlier application draft <span aria-hidden="true">→</span>
        </button>
        <p role="status" className="control-status">
          {result}
        </p>
        <p className="legal-small">
          This removes only the earlier application draft. It does not clear
          other browser data, sign you out, or delete submitted Google Forms
          responses.
        </p>
      </section>
      <section>
        <span className="legal-section-number">02 / INFORMATION REQUESTS</span>
        <h2>Make a privacy request.</h2>
        <p>
          Rights and available exceptions depend on applicable law. A request
          must reach the responsible operator through a monitored channel.
        </p>
        <label className="legal-field" htmlFor="privacy-request">
          What would you like to request?
        </label>
        <select
          id="privacy-request"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
        >
          {requests.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
        {legalConfig.privacyEmail ? (
          <>
            <a
              className="button"
              href={`mailto:${legalConfig.privacyEmail}?subject=${encodeURIComponent(`Privacy request: ${request}`)}`}
            >
              Draft an email <span aria-hidden="true">↗</span>
            </a>
            <p className="legal-small">
              This opens your email app. Nothing is submitted here; review and
              send the email yourself.
            </p>
          </>
        ) : (
          <div className="legal-inline-note">
            <strong>Privacy inbox awaiting confirmation</strong>
            <p>
              The organization has not yet supplied a monitored privacy email.
              The Contact page lists its official channels for asking where to
              send a request privately. Selecting a request above does not
              submit it. Do not post sensitive details in public comments.
            </p>
            <a href="/contact">Find current contact channels →</a>
          </div>
        )}
      </section>
    </div>
  );
}
