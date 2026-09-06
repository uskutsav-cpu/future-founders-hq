import { pageMetadata } from "@/lib/seo";
export const metadata = {
  ...pageMetadata("Student Entrepreneurship Network", ""),
  title: { absolute: "Future Founders | Student Entrepreneurship Network" },
};
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
export default function Home() {
  return (
    <>
      <section className="home-hero container">
        <div className="hero-topline">
          <Eyebrow>THE STUDENT ENTREPRENEURSHIP NETWORK</Eyebrow>
          <span className="edition">STUDENT-LED. FUTURE-FOCUSED.</span>
        </div>
        <h1>
          Build what’s{" "}
          <span>
            next<span className="hero-period">.</span>
            <svg viewBox="0 0 390 22" fill="none" aria-hidden="true">
              <path
                d="M4 15C104 2 272 1 383 9M12 19C131 10 246 12 350 13"
                stroke="currentColor"
                strokeWidth="5"
              />
            </svg>
          </span>
        </h1>
        <div className="hero-grid">
          <div className="hero-intro">
            <p>
              Find ambitious people.
              {" "}<br />
              Build something together.
            </p>
            <p className="body-copy">
              Future Founders brings students together to build companies,
              develop entrepreneurial skills, compete, and turn ideas into
              something real.
            </p>
            <div className="button-row">
              <Button href="/start-a-chapter">Start a Chapter</Button>
              <TextLink href="/chapters">Find Your Chapter</TextLink>
            </div>
            <div className="hero-stats">
              <div>
                <strong>
                  {activeChapterCount}
                  <span className="status-dot" />
                </strong>
                <span>Active Chapters</span>
              </div>
              <div>
                <strong>
                  High School
                  {" "}<br />+ College
                </strong>
                <span>One shared ambition</span>
              </div>
              <div>
                <strong>
                  Student
                  {" "}<br />
                  Led.
                </strong>
                <span>From day one</span>
              </div>
            </div>
          </div>
          <figure className="hero-photo">
            <ResponsivePhoto
              kind="hero"
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            <div className="photo-note">
              <span className="photo-note-symbol" aria-hidden="true">
                ↗
              </span>
              <span>
                GOOD IDEAS START
                {" "}<br />
                WITH GOOD COMPANY.
              </span>
            </div>
            <figcaption>
              <span>A place for people who make things happen.</span>
              <span>01 / THE BUILDERS</span>
            </figcaption>
          </figure>
        </div>
      </section>
      <div
        className="values-strip"
        aria-label="Build. Learn. Compete. Connect. Lead."
      >
        <div>
          {["BUILD", "LEARN", "COMPETE", "CONNECT", "LEAD"].map((x) => (
            <span key={x}>
              {x}
              <span aria-hidden="true">✳</span>
            </span>
          ))}
        </div>
      </div>
      <section className="container section network-preview">
        <div>
          <Eyebrow>01 / OUR CHAPTER NETWORK</Eyebrow>
          <h2>
            One network.
            {" "}<br />
            Built across
            {" "}<br />
            campuses<span className="red">.</span>
          </h2>
          <p className="body-copy">
            Big things start locally. Ten chapters, connected by a belief that
            students don’t need to wait to build something that matters.
          </p>
          <TextLink href="/chapters">Explore All Chapters</TextLink>
        </div>
        <Network />
      </section>
      <section className="container section" style={{ paddingTop: 0 }}>
        <div className="pillars-intro">
          <div>
            <Eyebrow>02 / WHAT WE DO</Eyebrow>
            <h2>Entrepreneurship isn’t learned by watching.</h2>
          </div>
          <p className="body-copy">
            You learn by making a first move. Around here, that takes a few
            different forms.
          </p>
        </div>
        <div className="pillar-list">
          {pillars.map((p, i) => (
            <Link
              className="pillar-row"
              href={"/what-we-do#" + p.name.toLowerCase()}
              key={p.name}
            >
              <span>0{i + 1}</span>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="program-section section">
        <div className="container">
          <div className="section-heading">
            <p className="section-number">03 / IN PRACTICE</p>
            <h2>
              Good company.
              {" "}<br />
              Real things to do.
            </h2>
            <TextLink href="/what-we-do">Inside a chapter</TextLink>
          </div>
          <div className="program-grid">
            {programs.map((p, i) => (
              <article className="program" key={p.name}>
                <span>0{i + 1}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="process-intro">
          <div>
            <Eyebrow>04 / A CHAPTER IN MOTION</Eyebrow>
            <h2 style={{ marginTop: 24 }}>
              Start small.
              {" "}<br />
              Keep showing up.
            </h2>
          </div>
          <TextLink href="/what-we-do">See what chapters do</TextLink>
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
      </section>
      <section className="container section" style={{ paddingTop: 0 }}>
        <div className="section-heading">
          <p className="section-number">05 / GO FURTHER</p>
          <h2>Upcoming competitions.</h2>
          <TextLink href="/competitions">See All Competitions</TextLink>
        </div>
        <p className="sample-notice">
          Demo opportunities · Fictional examples of competitions recommended to
          members. Registration is not available.
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
