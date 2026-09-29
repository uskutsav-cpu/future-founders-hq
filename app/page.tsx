import Image from "next/image";
import { ApplicationNotice } from "@/components/application-opportunity";
import { competitions, formatDate } from "@/data/competitions";
import { pageMetadata } from "@/lib/seo";
import {
  Button,
  TextLink,
  Eyebrow,
  CTA,
  ResponsivePhoto,
} from "@/components/ui";
import Link from "next/link";
import { site, sponsors } from "@/data/site";
import { activeChapterCount } from "@/data/chapters";
import { Network } from "@/components/network";
import { FAQAccordion } from "@/components/faq";
import { pillars, programs, chapterSteps } from "@/data/programs";
export const metadata = {
  ...pageMetadata("Student Entrepreneurship Network", ""),
  title: { absolute: "Future Founders | Student Entrepreneurship Network" },
};
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-inner">
          <div className="home-hero-copy">
            <Eyebrow>THE STUDENT ENTREPRENEURSHIP NETWORK</Eyebrow>
            <h1>
              Build what’s <span>next.</span>
            </h1>
            <p>Find ambitious people. Build something together.</p>
            <div className="button-row">
              <Button href="/start-a-chapter">Start a Chapter</Button>
              <TextLink href="/chapters">Find Your Chapter</TextLink>
            </div>
            <div className="home-hero-note">
              <span>IDEAS ARE JUST THE BEGINNING.</span>
              <span>HIGH SCHOOL + COLLEGE</span>
            </div>
          </div>
          <figure className="home-hero-photo">
            <ResponsivePhoto
              kind="hero"
              priority
              sizes="(max-width: 767px) 100vw, (max-width: 1100px) 90vw, 52vw"
            />
            <figcaption>
              <span>Inside a chapter</span>
              <span>Students turning ideas into action</span>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="sponsors-band" aria-labelledby="sponsors-title">
        <div className="container sponsors-inner">
          <div className="sponsors-heading">
            <div>
              <p className="sponsors-label">SPONSORS &amp; PARTNERS</p>
              <h2 id="sponsors-title">Our partners<span>.</span></h2>
            </div>
            <p className="sponsors-intro">With support from</p>
          </div>
          <ul className="sponsors-list">
            {sponsors.map((sponsor) => (
              <li key={sponsor.name}>
                <a
                  className={`sponsor-card sponsor-card--${sponsor.mark}`}
                  href={sponsor.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="sponsor-logo-stage">
                    <Image
                      src={sponsor.logo}
                      alt=""
                      width={sponsor.width}
                      height={sponsor.height}
                      unoptimized
                      className="sponsor-logo"
                    />
                  </div>
                  <div className="sponsor-caption">
                    <div>
                      <span className="sponsor-name">{sponsor.name}</span>
                      {sponsor.detail && (
                        <span className="sponsor-detail">{sponsor.detail}</span>
                      )}
                    </div>
                    <span className="sponsor-arrow" aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ApplicationNotice />
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
              <Eyebrow>THE FUTURE FOUNDERS EXPERIENCE</Eyebrow>
              <h2>
                Build skills. <br />
                Put them to work.
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
                <p>Explore the Case Study Competition.</p>
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
      <section className="container section opportunity-announcement">
        <div>
          <Eyebrow>COMPETITIONS & OPPORTUNITIES</Eyebrow>
          <h2>
            Case Study
            <br />
            Competition.
          </h2>
        </div>
        <div>
          <p>
            Sign up by {formatDate(competitions[0]?.deadline)}. Competition
            date: to be announced.
          </p>
          <TextLink href="/competitions">View competition & sign up</TextLink>
        </div>
      </section>
      <section className="social-band">
        <div className="container">
          <div>
            <Eyebrow>FOLLOW THE PEOPLE BUILDING WHAT’S NEXT</Eyebrow>
            <h2>Stay in the loop.</h2>
          </div>
          <div>
            <a
              href={site.socials.Instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <span aria-hidden="true">↗</span>
            </a>
            <a
              href={site.socials.TikTok}
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      <CTA />
      <FAQAccordion />
    </>
  );
}
