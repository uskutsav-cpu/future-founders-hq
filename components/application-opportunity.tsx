"use client";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { opportunities, opportunityClosed } from "@/data/opportunities";
import { formatDate } from "@/data/competitions";
function subscribe(callback: () => void) {
  const timer = setInterval(callback, 60000);
  return () => clearInterval(timer);
}
function currentDay() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function useToday() {
  return useSyncExternalStore(subscribe, currentDay, () => "");
}
export function ApplicationNotice() {
  const today = useToday();
  const role = opportunities[0];
  if (!role || opportunityClosed(role, today)) return null;
  return (
    <aside className="application-notice" aria-label="New student role">
      <div className="container application-notice-inner">
        <span className="application-notice-label">NEW OPPORTUNITY</span>
        <p>
          <strong>{role.title}</strong>
          <span>
            Apply by{" "}
            <time dateTime={role.deadline}>{formatDate(role.deadline)}</time>
          </span>
        </p>
        <Link className="text-link" href="/applications">
          View role <span aria-hidden="true">→</span>
        </Link>
      </div>
    </aside>
  );
}
export function ApplicationOpportunities() {
  const today = useToday();
  return (
    <div className="role-list">
      {opportunities.map((role) => {
        const closed = opportunityClosed(role, today);
        return (
          <article
            className="role-opening"
            key={role.id}
            aria-labelledby={role.id}
          >
            <div className="role-overview">
              <p className="eyebrow">
                {closed ? "APPLICATION WINDOW ENDED" : "NEW ROLE"} /{" "}
                {role.category}
              </p>
              <h2 id={role.id}>{role.title}</h2>
              <p className="role-summary">{role.description}</p>
              <dl className="role-facts">
                <div>
                  <dt>Location</dt>
                  <dd>{role.arrangement}</dd>
                </div>
                <div>
                  <dt>Time commitment</dt>
                  <dd>{role.commitment}</dd>
                </div>
              </dl>
              <h3>Where you can contribute</h3>
              <ul className="role-areas">
                {role.areas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
            <aside
              className="role-application"
              aria-label={`Apply for ${role.title}`}
            >
              <p className="eyebrow">APPLICATION DEADLINE</p>
              <time dateTime={role.deadline}>{formatDate(role.deadline)}</time>
              <p>
                {closed
                  ? "The published application deadline has passed. Follow Future Founders for future openings."
                  : "Tell us about your interests, your strengths, and one content idea you’d like to bring to life."}
              </p>
              <a
                className="button"
                href={role.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {closed ? "View application form" : "Apply for this role"}
                <span aria-hidden="true">↗</span>
                <span className="sr-only">
                  {" "}
                  (opens Google Forms in a new tab)
                </span>
              </a>
              <p className="role-form-note">
                Applications are completed on Google Forms. Please review our{" "}
                <Link href="/privacy">Privacy Policy</Link> before sharing
                personal information.
              </p>
            </aside>
          </article>
        );
      })}
    </div>
  );
}
