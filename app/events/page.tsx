import { pageMetadata } from "@/lib/seo";
import { PageHero, EmptyState, TextLink } from "@/components/ui";
import { events } from "@/data/events";
export const metadata = pageMetadata("Events", "/events");
export default function Page() {
  const upcoming = events
    .filter((e) => e.status !== "Past")
    .sort((a, b) => a.startsAt.localeCompare(b.startsAt));
  return (
    <>
      <PageHero
        eyebrow="COME WITH QUESTIONS. LEAVE WITH IDEAS."
        title="Get in the room."
      >
        <p>
          Chapter meetups, virtual workshops, founder conversations, and pitch
          nights. Find your next reason to show up.
        </p>
      </PageHero>
      <section className="container">
        {!upcoming.length ? (
          <EmptyState title="The next gathering is taking shape.">
            <p>
              No upcoming events have been announced yet. Local chapter meetings
              will appear on chapter pages as they’re confirmed.
            </p>
            <TextLink href="/chapters">Find your local chapter</TextLink>
          </EmptyState>
        ) : (
          <div className="section">
            {upcoming.map((e) => (
              <article className="event-card" key={e.id}>
                <p className="eyebrow">
                  {e.scope} · {e.kind}
                </p>
                <h2>{e.name}</h2>
                <p>
                  {new Date(e.startsAt).toLocaleString("en-US", {
                    timeZone: e.timeZone,
                  })}{" "}
                  · {e.timeZone}
                </p>
                <p>
                  {e.location} · {e.format} · {e.organizer}
                </p>
                <p>{e.status}</p>
                {e.registrationUrl && (
                  <a href={e.registrationUrl}>Register ↗</a>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
