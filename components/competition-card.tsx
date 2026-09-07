import {
  Competition,
  formatDate,
  competitionStatus,
} from "@/data/competitions";
export function CompetitionCard({
  c,
  today = "",
}: {
  c: Competition;
  today?: string;
}) {
  const status = competitionStatus(c, today);
  return (
    <article className="competition-listing" id={`competition-${c.id}`}>
      <div className="competition-top">
        <span className="category">{c.category} competition</span>
        <span className={`competition-status ${status.toLowerCase()}`}>
          <i />
          {status === "Closed"
            ? "Signup deadline passed"
            : "Upcoming competition"}
        </span>
      </div>
      <h3>{c.title}</h3>
      <p>{c.description}</p>
      <dl className="competition-dates">
        <div>
          <dt>Sign up deadline</dt>
          <dd>
            <time dateTime={c.deadline}>{formatDate(c.deadline)}</time>
          </dd>
        </div>
        <div>
          <dt>Competition date</dt>
          <dd>
            {c.date ? (
              <time dateTime={c.date}>{formatDate(c.date)}</time>
            ) : (
              "To be announced"
            )}
          </dd>
        </div>
      </dl>
      {(c.eligibility || c.format || c.participation) && (
        <div className="competition-meta">
          {c.eligibility && (
            <span>
              {c.eligibility === "Both"
                ? "High School + College"
                : c.eligibility}
            </span>
          )}
          {c.format && <span>{c.format}</span>}
          {c.participation && <span>{c.participation}</span>}
        </div>
      )}
      <div className="competition-signup">
        {c.url && !c.sample && (
          <a
            className="button"
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {status === "Closed" ? "View Interest Form" : "Sign Up"}
            <span aria-hidden="true">↗</span>
            <span className="sr-only"> for {c.title} (opens in a new tab)</span>
          </a>
        )}
        <span>{c.organizer}</span>
      </div>
      {c.registrationNote && (
        <p className="competition-note">{c.registrationNote}</p>
      )}
    </article>
  );
}
