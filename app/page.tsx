import Image from "next/image";
import Link from "next/link";
import { ApplicationNotice } from "@/components/application-opportunity";
import { competitions, formatDate } from "@/data/competitions";
import { pageMetadata } from "@/lib/seo";
import { Button, TextLink, Eyebrow, ResponsivePhoto } from "@/components/ui";
import { sponsors } from "@/data/site";
import { chapters, activeChapterCount } from "@/data/chapters";
import { FAQAccordion } from "@/components/faq";
import { programs } from "@/data/programs";

const countries = [...new Set(chapters.map((chapter) => chapter.country))];
const featuredChapters = ["heritage", "rock-hill", "walnut-grove", "amity-dubai"]
  .map((id) => chapters.find((chapter) => chapter.id === id))
  .filter((chapter) => chapter !== undefined);
const competition = competitions[0];

export const metadata = {
  ...pageMetadata("Student Entrepreneurship Network", "", "Future Founders brings high school and college students together to build projects, grow entrepreneurial skills, and find a local student-led chapter."),
  title: { absolute: "Future Founders | Student Entrepreneurship Network" },
};

export default function Home() {
  return (
    <>
      <section className="editorial-hero">
        <div className="container editorial-hero-grid">
          <div className="editorial-hero-copy">
            <Eyebrow>STUDENT ENTREPRENEURSHIP</Eyebrow>
            <h1>Where ideas<br /><em>find their people.</em></h1>
            <p>Future Founders connects high school and college students through local chapters, practical workshops, and competitions.</p>
            <div className="button-row">
              <Button href="/chapters">Find your chapter</Button>
              <TextLink href="/what-we-do">Explore the experience</TextLink>
            </div>
            <div className="hero-network-note"><span>High school &amp; college</span><span>{activeChapterCount} chapters · {countries.length} countries</span></div>
          </div>
          <figure className="editorial-hero-photo">
            <ResponsivePhoto kind="hero" priority sizes="(max-width: 767px) 100vw, 50vw" />
            <figcaption><span className="photo-caption-label">INSIDE FUTURE FOUNDERS</span><span>Student led. Built together.</span></figcaption>
          </figure>
        </div>
        {competition && <div className="hero-deadline"><div className="container"><span>ON THE CALENDAR</span><Link href="/competitions">Case Study Competition</Link><span>Interest closes {formatDate(competition.deadline)}</span><Link href="/competitions" className="deadline-action">View details</Link></div></div>}
      </section>

      <section className="sponsors-band" aria-labelledby="sponsors-title">
        <div className="container sponsors-inner">
          <div className="sponsors-heading"><h2 id="sponsors-title">Our partners.</h2><p className="sponsors-intro">With support from</p></div>
          <ul className="sponsors-list">
            {sponsors.map((sponsor) => <li key={sponsor.name}>
              <a className={`sponsor-card sponsor-card--${sponsor.mark}`} href={sponsor.href} target="_blank" rel="noopener noreferrer">
                <div className="sponsor-logo-stage"><Image src={sponsor.logo} alt="" width={sponsor.width} height={sponsor.height} unoptimized className="sponsor-logo" /></div>
                <div className="sponsor-caption"><div><span className="sponsor-name">{sponsor.name}</span>{sponsor.detail && <span className="sponsor-detail">{sponsor.detail}</span>}</div><span className="sr-only"> (opens in a new tab)</span></div>
              </a>
            </li>)}
          </ul>
        </div>
      </section>
      <ApplicationNotice />

      <section className="container section home-introduction">
        <div><Eyebrow>BUILT BY STUDENTS</Eyebrow><h2>A community<br /><em>for the work ahead.</em></h2></div>
        <div><p className="intro-lead">A chapter gives you a place to explore entrepreneurship with people who want to try.</p><p className="body-copy">Learn the fundamentals, test an idea, and find your next teammate. Our student-led network brings practical experience to schools and campuses, one meeting and one project at a time.</p><TextLink href="/about">Get to know Future Founders</TextLink></div>
      </section>

      <section className="home-pathways section">
        <div className="container">
          <div className="home-section-heading"><div><Eyebrow>THE FUTURE FOUNDERS EXPERIENCE</Eyebrow><h2>Find your<br /><em>starting point.</em></h2></div><p>Meet a chapter. Take on a case.<br />Make progress on an idea.</p></div>
          <div className="pathway-grid">
            <article className="pathway-card pathway-photo-card">
              <div className="pathway-photo"><ResponsivePhoto kind="collaboration" sizes="(max-width: 767px) 100vw, 33vw" /></div>
              <div className="pathway-body"><span className="pathway-category">01 / CHAPTERS</span><h3>Find your people.</h3><p>Build alongside students at your school, with the support of a wider network.</p><TextLink href="/chapters">Explore the chapters</TextLink></div>
            </article>
            <article className="pathway-card pathway-competition">
              <span className="pathway-category">02 / COMPETITIONS</span><span className="competition-edition">Future Founders · 2026</span><h3>Case Study<br /><em>Competition.</em></h3><p>Put your problem-solving and business thinking to work.</p>
              {competition && <div className="pathway-deadline"><span>Interest deadline</span><strong>{formatDate(competition.deadline)}</strong><span>Event date to be announced</span></div>}
              <TextLink href="/competitions">View the competition</TextLink>
            </article>
            <article className="pathway-card pathway-resources">
              <span className="pathway-category">03 / RESOURCES</span><h3>A head start<br />for your next idea.</h3><p>Practical notes and guides, ready to bring into your next chapter meeting.</p>
              <ul><li>Problem finding</li><li>Minimum viable products</li><li>Marketing fundamentals</li><li>Competition preparation</li></ul>
              <TextLink href="/resources">Open the resource library</TextLink>
            </article>
          </div>
        </div>
      </section>

      <section className="container section home-network">
        <div className="home-network-intro"><Eyebrow>LOCAL ROOTS. SHARED AMBITION.</Eyebrow><h2>Different campuses.<br /><em>The same possibility.</em></h2><p className="body-copy">From Texas to Dubai and beyond, students are building a community around the work they want to do.</p><div className="network-stats"><div><strong>{activeChapterCount}</strong><span>Active chapters</span></div><div><strong>{countries.length}</strong><span>Countries represented</span></div></div><TextLink href="/chapters">View the full chapter directory</TextLink></div>
        <div className="featured-campus-list">
          <p className="campus-list-label">MEET THE NETWORK</p>
          {featuredChapters.map((chapter) => <Link href={`/chapters/${chapter.slug}`} key={chapter.id} className="featured-campus"><div className="campus-mark">{chapter.logo && <Image src={chapter.logo} width={68} height={68} alt="" unoptimized />}</div><div><h3>{chapter.name}</h3><p>{[chapter.city, chapter.state || chapter.country].filter(Boolean).join(", ")}</p>{chapter.pioneer && <span className="campus-pioneer">Our pioneer chapter</span>}</div></Link>)}
          <div className="campus-reach">{countries.map((country) => <span key={country}>{country === "United Arab Emirates" ? "UAE" : country}</span>)}</div>
        </div>
      </section>

      <section className="home-practice section">
        <div className="container home-practice-grid">
          <figure><ResponsivePhoto kind="deliverables" sizes="(max-width: 767px) 100vw, 45vw" /><figcaption>Conversations that turn into next steps.</figcaption></figure>
          <div><Eyebrow>INSIDE A CHAPTER</Eyebrow><h2>Less waiting.<br /><em>More making.</em></h2><p className="body-copy">A regular place to ask better questions, learn something useful, and make progress together.</p><div className="practice-programs">{programs.map((program) => <article key={program.name}><h3>{program.name}</h3><p>{program.description}</p></article>)}</div><TextLink href="/what-we-do">See what chapters do</TextLink></div>
        </div>
      </section>
      <FAQAccordion />
    </>
  );
}
