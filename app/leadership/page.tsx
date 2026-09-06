import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { PageHero, EmptyState, TextLink, CTA } from "@/components/ui";
import { leadership } from "@/data/leadership";
import { chapters } from "@/data/chapters";
export const metadata = pageMetadata("Leadership", "/leadership");
export default function Page() {
  const presidents = chapters.filter((c) => c.president);
  const hasPeople =
    Object.values(leadership).some((g) => g.length) || presidents.length;
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
      <div className="container">
        {!hasPeople && (
          <EmptyState title="Meet the team. Soon.">
            <p>
              Meet the students behind our chapters and national team.
              Leadership profiles will be added here soon.
            </p>
            <TextLink href="/contact">Get in touch</TextLink>
          </EmptyState>
        )}
        {Object.entries(leadership)
          .filter(([, people]) => people.length)
          .map(([group, people]) => (
            <section className="section" key={group}>
              <h2>
                {group === "national"
                  ? "National Executive Team"
                  : "Board & Advisors"}
              </h2>
              <div className="leadership-grid">
                {people.map((p) => (
                  <article className="person-card" key={p.id}>
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={600}
                        height={750}
                      />
                    )}
                    <h3>{p.name}</h3>
                    <p>{p.role}</p>
                    {p.bio && <p>{p.bio}</p>}
                    {p.linkedin && <a href={p.linkedin}>LinkedIn ↗</a>}
                  </article>
                ))}
              </div>
            </section>
          ))}
        {presidents.length > 0 && (
          <section className="section">
            <h2>Chapter Presidents</h2>
            <div className="leadership-grid">
              {presidents.map((c) => (
                <article className="person-card" key={c.id}>
                  <h3>{c.president}</h3>
                  <p>{c.name}</p>
                  <TextLink href={"/chapters/" + c.slug}>View chapter</TextLink>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
      <CTA />
    </>
  );
}
