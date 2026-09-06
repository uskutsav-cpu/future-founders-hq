import { Competition, formatDate } from "@/data/competitions";
export function CompetitionCard({ c }: { c: Competition }) {
  return (
    <article className="competition-card">
      <div className="competition-top">
        <span className="category">{c.category}</span>
        <span className={"competition-status " + c.status.toLowerCase()}>
          <i />
          {c.status}
        </span>
      </div>
      <h3>{c.title}</h3>
      <p>{c.description}</p>
      <dl>
        <div>
          <dt>Registration deadline</dt>
          <dd>{formatDate(c.deadline)}</dd>
        </div>
        <div>
          <dt>Event date</dt>
          <dd>{formatDate(c.date)}</dd>
        </div>
      </dl>
      <div className="competition-meta">
        <span>
          {c.eligibility === "Both" ? "High School + College" : c.eligibility}
        </span>
        <span>{c.format}</span>
        <span>{c.participation}</span>
      </div>
      <div className="competition-bottom">
        <span>{c.organizer}</span>
        {c.url && !c.sample ? (
          <a href={c.url} target="_blank" rel="noreferrer">
            View opportunity ↗
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        ) : (
          <span className="sample-label">
            Fictional sample · No registration
          </span>
        )}
      </div>
    </article>
  );
}
