import { foundingTeam } from "@/data/leadership";
import { PersonCard } from "@/components/person-card";
import { Eyebrow, TextLink } from "@/components/ui";
export function FoundingTeam() {
  return (
    <section className="container section founding-team" id="founding-team">
      <div className="founding-heading">
        <div>
          <Eyebrow>THE FOUNDING TEAM</Eyebrow>
          <h2>
            Students who
            <br />
            started something.
          </h2>
        </div>
        <div>
          <p>
            Meet the Co-Presidents behind Future Founders and its pioneer
            chapter at Heritage High School.
          </p>
          <TextLink href="/chapters/heritage-high-school">
            Explore the pioneer chapter
          </TextLink>
        </div>
      </div>
      <div className="team-grid">
        {foundingTeam.map((person) => (
          <PersonCard
            person={person}
            context="Founding team · Heritage High School"
            key={person.id}
          />
        ))}
      </div>
    </section>
  );
}
