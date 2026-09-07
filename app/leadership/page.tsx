import { pageMetadata } from "@/lib/seo";
import { PageHero, TextLink, CTA } from "@/components/ui";
import { FoundingTeam } from "@/components/founding-team";
import { PersonCard } from "@/components/person-card";
import { leadership } from "@/data/leadership";
import { chapters } from "@/data/chapters";
export const metadata = pageMetadata("Leadership", "/leadership");
export default function Page() {
  const chapterTeams = chapters.filter(
    (c) => c.leadership?.length && !c.pioneer,
  );
  return (
    <>
      <PageHero
        eyebrow="THE PEOPLE WHO MAKE IT HAPPEN"
        title="Leadership is a verb."
      >
        <p>
          Students build this network: organizing programs, supporting chapters,
          and making room for the next generation of founders.
        </p>
      </PageHero>
      <FoundingTeam />
      <div className="container">
        {Object.entries(leadership)
          .filter(([, people]) => people.length)
          .map(([group, people]) => (
            <section className="section" key={group}>
              <h2>
                {group === "national"
                  ? "National Executive Team"
                  : "Board & Advisors"}
              </h2>
              <div className="team-grid">
                {people.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </div>
            </section>
          ))}
        <section className="section chapter-team">
          <div className="section-heading">
            <p className="section-number">LOCAL LEADERSHIP</p>
            <h2>Chapter Presidents.</h2>
          </div>
          <div className="team-grid">
            {chapterTeams.map((c) => (
              <div key={c.id}>
                {c.leadership!.map((person) => (
                  <PersonCard
                    key={person.id}
                    person={person}
                    context={c.name}
                  />
                ))}
                <div className="team-chapter-link">
                  <TextLink href={`/chapters/${c.slug}`}>View chapter</TextLink>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <CTA />
    </>
  );
}
