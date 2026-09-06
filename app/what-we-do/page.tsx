import { pageMetadata } from "@/lib/seo";
import { PageHero, CTA, ImagePanel, SectionHeader } from "@/components/ui";
import { pillars, month } from "@/data/programs";
export const metadata = pageMetadata("What we do", "/what-we-do");
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="LESS WATCHING. MORE DOING."
        title="Entrepreneurship isn’t learned by watching."
      >
        <p>
          It’s learned by asking a better question, making a first version, and
          putting it in front of someone. That’s what chapters are for.
        </p>
      </PageHero>
      <div className="container">
        <ImagePanel priority caption="Bring an idea. Leave with a next step." />
      </div>
      <section className="container section">
        {pillars.map((p, i) => (
          <article
            id={p.name.toLowerCase()}
            className="deep-pillar"
            key={p.name}
          >
            <p className="section-number">0{i + 1}</p>
            <h2>
              {p.name}
              <span className="brand-accent">.</span>
            </h2>
            <div>
              <h3>{p.line}</h3>
              <p>{p.description}</p>
              <p className="meeting-example">
                <strong>In a chapter meeting</strong>
                {p.example}
              </p>
            </div>
          </article>
        ))}
      </section>
      <section className="month-section section">
        <div className="container">
          <SectionHeader
            number="IN PRACTICE"
            title="A month inside Future Founders."
          />
          <p className="body-copy" style={{ color: "#b7baaf" }}>
            An example rhythm for a chapter. Each team builds a calendar that
            works for its students.
          </p>
          <div className="month-grid">
            {month.map(([n, t, d]) => (
              <article key={n}>
                <span>WEEK {n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
