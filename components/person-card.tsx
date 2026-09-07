import Image from "next/image";
import type { Person } from "@/data/leadership";
export function PersonCard({
  person,
  context,
}: {
  person: Person;
  context?: string;
}) {
  const initials = person.name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 3)
    .join("");
  return (
    <article className="team-person">
      <div className="team-portrait">
        {person.image ? (
          <Image
            src={person.image}
            alt={`Portrait of ${person.name}`}
            width={600}
            height={600}
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          />
        ) : (
          <div className="team-initials" aria-hidden="true">
            <span>{initials}</span>
            <small>FUTURE FOUNDERS</small>
          </div>
        )}
      </div>
      <div className="team-person-info">
        <p className="team-role">{person.role}</p>
        <h3>{person.name}</h3>
        {context && <p className="team-context">{context}</p>}
        {person.bio && <p>{person.bio}</p>}
        {person.linkedin && (
          <a
            className="team-link"
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.name} on LinkedIn (opens in a new tab)`}
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
