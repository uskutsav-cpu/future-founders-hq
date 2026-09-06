import { pageMetadata } from "@/lib/seo";
import {
  Button,
  TextLink,
  Eyebrow,
  CTA,
  ResponsivePhoto,
} from "@/components/ui";
import Link from "next/link";
import { activeChapterCount } from "@/data/chapters";
import { Network } from "@/components/network";
import { FAQAccordion } from "@/components/faq";
import { CompetitionCard } from "@/components/competition-card";
import { competitions } from "@/data/competitions";
import { pillars, programs, chapterSteps } from "@/data/programs";
export const metadata = {
  ...pageMetadata("Student Entrepreneurship Network", ""),
  title: { absolute: "Future Founders | Student Entrepreneurship Network" },
};
export default function Home() {
  return (
    <>
      <section className="founders-hero">
        <div className="founders-hero-photo">
          <ResponsivePhoto
            kind="hero"
            priority
            sizes="(max-width: 767px) 100vw, 65vw"
          />
          <div className="hero-photo-caption">
            <span>IDEAS BECOME REAL HERE.</span>
            <span>INSIDE FUTURE FOUNDERS ↗</span>
          </div>
        </div>
        <div className="founders-hero-content">
          <Eyebrow>THE STUDENT ENTREPRENEURSHIP NETWORK</Eyebrow>
          <h1>
            BUILD <br />
            WHAT’S <br />
            <span>NEXT.</span>
          </h1>
          <p>
            Find ambitious people. <br />
            Build something together.
          </p>
          <div className="button-row">
            <Button href="/start-a-chapter">Start a Chapter</Button>
            <TextLink href="/chapters">Find Your Chapter</TextLink>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          01 — THE NEXT CHAPTER STARTS WITH YOU
        </div>
      </section>
      <section className="network-proof" aria-label="Our network">
        <div className="container">
          <div>
            <strong>{activeChapterCount}</strong>
            <span>
              Active <br />
              Chapters
            </span>
          </div>
          <div>
            <strong>HS + COLLEGE</strong>
            <span>
              One network. <br />
              Many starting points.
            </span>
          </div>
          <div>
            <strong>STUDENT-LED</strong>
            <span>
              Your ideas. <br />
              Your community.
            </span>
          </div>
          <Link href="/join">
            Find your place <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="container section purpose-section">
        <Eyebrow>AMBITION NEEDS A PLACE TO GO.</Eyebrow>
        <div className="purpose-grid">
          <h2>
            Don’t just talk <br />
            about the future. <br />
            <span>Have a hand in it.</span>
          </h2>
          <div>
            <p className="display-copy">
              Future Founders brings high school and college students together
              to turn ideas into something real.
            </p>
            <p className="body-copy">
              Build a first product. Find your next teammate. Get up and pitch.
              Through local chapters, students develop entrepreneurial skills by
              actually putting them to work.
            </p>
            <TextLink href="/about">Get to know Future Founders</TextLink>
          </div>
        </div>
      </section>
      <section className="experience-section">
        <div className="container section">
          <div className="experience-heading">
            <div>
              <Eyebrow>THIS IS WHAT GETTING INVOLVED LOOKS LIKE</Eyebrow>
              <h2>
                Less sidelines. <br />
                More starting lines.
              </h2>
            </div>
            <TextLink href="/what-we-do">Explore the experience</TextLink>
          </div>
          <div className="experience-grid">
            <Link className="experience-feature" href="/what-we-do#build">
              <div className="experience-image">
                <ResponsivePhoto
                  kind="collaboration"
                  sizes="(max-width:767px) 100vw, 58vw"
                />
              </div>
              <div className="experience-caption">
                <span>01 / BUILD TOGETHER</span>
                <h3>
                  Your idea. <br />
                  Our kind of people.
                </h3>
                <span className="experience-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </Link>
            <div className="experience-stack">
              <Link className="experience-small" href="/what-we-do#learn">
                <div className="experience-image">
                  <ResponsivePhoto
                    kind="presentation"
                    sizes="(max-width:767px) 100vw, 35vw"
                  />
                </div>
                <div>
                  <span>02 / LEARN BY DOING</span>
                  <h3>
                    From “what if” to <br />
                    “here’s what we made.”
                  </h3>
                  <span aria-hidden="true">↗</span>
                </div>
              </Link>
              <Link className="experience-callout" href="/competitions">
                <span>03 / TEST YOUR THINKING</span>
                <h3>
                  Big ideas deserve <br />a bigger stage.
                </h3>
                <p>Find competitions worth building for.</p>
                <span className="experience-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>
          </div>
          <div className="pillar-links">
            {pillars.map((p, i) => (
              <Link href={`/what-we-do#${p.name.toLowerCase()}`} key={p.name}>
                <span>0{i + 1}</span>
                <strong>{p.name}</strong>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="container section global-section">
        <div className="global-intro">
          <Eyebrow>ONE NETWORK. BUILT ACROSS CAMPUSES.</Eyebrow>
          <h2>
            A local chapter. <br />A world of <br />
            <span>possibility.</span>
          </h2>
          <p className="body-copy">
            From Texas to Dubai and beyond, students are making room for the
            next generation of builders. Find your community, or create it.
          </p>
          <TextLink href="/chapters">Explore All Chapters</TextLink>
        </div>
        <Network />
      </section>
      <section className="chapter-life section">
        <div className="container">
          <div className="experience-heading">
            <div>
              <Eyebrow>INSIDE A CHAPTER</Eyebrow>
              <h2>
                Make a habit <br />
                of making things.
              </h2>
            </div>
            <p className="body-copy">
              A meeting is a starting point. What happens next is up to the
              people in the room.
            </p>
          </div>
          <div className="chapter-life-grid">
            <figure>
              <ResponsivePhoto
                kind="deliverables"
                sizes="(max-width:767px) 100vw, 42vw"
              />
              <figcaption>Real discussions. Real next steps.</figcaption>
            </figure>
            <div className="program-editorial">
              {programs.map((p, i) => (
                <article key={p.name}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="process-grid">
            {chapterSteps.map(([t, d], i) => (
              <article className="process-step" key={t}>
                <span>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <TextLink href="/what-we-do">See what chapters do</TextLink>
        </div>
      </section>
      <section className="container section">
        <div className="experience-heading">
          <div>
            <Eyebrow>OPPORTUNITIES RECOMMENDED TO MEMBERS</Eyebrow>
            <h2>Your next challenge.</h2>
          </div>
          <TextLink href="/competitions">See All Competitions</TextLink>
        </div>
        <p className="sample-notice">
          Demo opportunities · Fictional examples. Registration is not
          available.
        </p>
        <div className="competition-grid">
          {competitions
            .filter((c) => c.status !== "Closed")
            .slice(0, 3)
            .map((c) => (
              <CompetitionCard key={c.id} c={c} />
            ))}
        </div>
      </section>
      <CTA />
      <FAQAccordion />
    </>
  );
}
