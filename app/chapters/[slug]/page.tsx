import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import Image from "next/image";
import { chapters } from "@/data/chapters";
import { events } from "@/data/events";
import {
  Breadcrumbs,
  PageHero,
  Button,
  TextLink,
  EmptyState,
} from "@/components/ui";
export function generateStaticParams() {
  return chapters.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = chapters.find((c) => c.slug === slug);
  return pageMetadata(
    c?.name || "Chapter not found",
    `/chapters/${slug}`,
    c?.description,
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = chapters.find((c) => c.slug === slug);
  if (!c) notFound();
  const meetings = events.filter(
    (e) => e.chapterSlug === slug && e.status !== "Past",
  );
  return (
    <>
      <Breadcrumbs current={c.name} />
      <PageHero
        eyebrow={`${c.type.toUpperCase()} / ${(c.city || c.country).toUpperCase()}`}
        title={c.name}
      >
        <p>
          {c.district && (
            <>
              {c.district}
              <br />
            </>
          )}
          {[c.city, c.state, c.country].filter(Boolean).join(", ")}
        </p>
      </PageHero>
      <section className="container chapter-profile">
        <div>
          {c.sample && (
            <p className="sample-notice">
              Development sample · This fictional chapter is not affiliated with
              a real school. Local joining and contact details are not
              available.
            </p>
          )}
          <div className="chapter-details">
            <span>
              <i className="status-dot" /> {c.status}
            </span>
            <span>{c.type}</span>
            {c.founded && <span>Founded {c.founded}</span>}
            {c.memberCount !== undefined && (
              <span>{c.memberCount} members</span>
            )}
          </div>
          <h2>
            A place to start. <br />
            People to build with.
          </h2>
          <p className="body-copy">{c.description}</p>
          {c.image && (
            <Image
              src={c.image}
              alt={`${c.name} members`}
              width={1200}
              height={800}
            />
          )}
          <div className="button-row">
            {!c.sample && (c.website || c.email) ? (
              <a className="button" href={c.website || `mailto:${c.email}`}>
                Join this chapter ↗
              </a>
            ) : (
              <Button
                href={`/contact?reason=Join%20an%20Existing%20Chapter&chapter=${c.slug}`}
              >
                Ask about joining
              </Button>
            )}
            <TextLink href="/chapters">Back to all chapters</TextLink>
          </div>
          {c.leadership && c.leadership.length > 0 && (
            <section className="section">
              <h2>Chapter leadership</h2>
              {c.leadership.map((p) => (
                <article key={p.name}>
                  <h3>{p.name}</h3>
                  <p>{p.role}</p>
                </article>
              ))}
            </section>
          )}
          {c.president && !c.leadership?.length && (
            <section className="section">
              <h3>Chapter president</h3>
              <p>{c.president}</p>
            </section>
          )}
          {c.achievements?.length && (
            <section className="section">
              <h2>What we’ve done</h2>
              <ul>
                {c.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </section>
          )}
          {c.photos?.length && (
            <div className="photo-grid">
              {c.photos.map((p) => (
                <Image
                  key={p.src}
                  {...p}
                  alt={p.alt}
                  width={900}
                  height={600}
                />
              ))}
            </div>
          )}
          {(c.instagram || c.email || c.website) && (
            <div className="button-row">
              {c.instagram && <a href={c.instagram}>Instagram ↗</a>}
              {c.email && <a href={`mailto:${c.email}`}>Contact chapter ↗</a>}
              {c.website && <a href={c.website}>Chapter website ↗</a>}
            </div>
          )}
        </div>
        <aside>
          <p className="eyebrow">ON THE CALENDAR</p>
          {meetings.length ? (
            meetings.map((e) => (
              <article className="event-card" key={e.id}>
                <h3>{e.name}</h3>
                <p>
                  {new Date(e.startsAt).toLocaleString("en-US", {
                    timeZone: e.timeZone,
                  })}{" "}
                  · {e.timeZone}
                </p>
                <p>{e.location}</p>
                {e.registrationUrl && (
                  <a href={e.registrationUrl}>Register ↗</a>
                )}
              </article>
            ))
          ) : (
            <EmptyState title="Next meeting, to come.">
              <p>
                There are no confirmed meetings published for this chapter yet.
              </p>
              <TextLink href="/events">Explore network events</TextLink>
            </EmptyState>
          )}
        </aside>
      </section>
    </>
  );
}
