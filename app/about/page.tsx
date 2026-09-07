import { FoundingTeam } from "@/components/founding-team";
import { pageMetadata } from "@/lib/seo";
import { PageHero, CTA, ImagePanel, Eyebrow, TextLink } from "@/components/ui";
export const metadata = pageMetadata("About", "/about");
const principles = [
  [
    "Build before you brag.",
    "Progress is something you can point to. Do the work, test the idea, and let what you make speak.",
  ],
  [
    "Make things real.",
    "A useful conversation ends with something to try. Small experiments count.",
  ],
  [
    "Give ambitious people a room to meet.",
    "Ideas move faster when you have people to challenge you, help you, and build alongside you.",
  ],
  [
    "Leadership means ownership.",
    "Take responsibility for the details. Follow through. Make it easier for someone else to contribute.",
  ],
  [
    "Share what you learn.",
    "A lesson becomes more useful when it travels. Leave good notes and help the next team start further ahead.",
  ],
];
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="WHY WE EXIST"
        title="Good ideas deserve a place to start."
      >
        <p>
          We help students move from being interested in entrepreneurship to
          actually doing it. One project, one chapter, one first step at a time.
        </p>
      </PageHero>
      <section
        className="container editorial-split section"
        style={{ paddingTop: 0 }}
      >
        <ImagePanel
          priority
          kind="hero"
          caption="Find your people. Make your first move."
        />
        <div>
          <Eyebrow>OUR MISSION</Eyebrow>
          <h2>
            Make building <br />a student habit.
          </h2>
          <p className="body-copy">
            Entrepreneurship often shows up as a class, a competition, or a
            one-off event. But ideas need somewhere to go the week after.
          </p>
          <p className="body-copy">
            Future Founders is that ongoing community: a local chapter where
            students meet regularly, learn useful skills, test ideas, and build
            with people who want to try.
          </p>
        </div>
      </section>
      <section className="program-section section">
        <div className="container editorial-split">
          <div>
            <Eyebrow>STUDENT-LED. FROM DAY ONE.</Eyebrow>
            <h2>
              The students <br />
              run the room.
            </h2>
          </div>
          <div>
            <p className="body-copy">
              Chapters are built and led by students at their own schools. They
              choose projects, organize programs, and develop the next set of
              leaders.
            </p>
            <p className="body-copy">
              The wider network connects those chapters, shares resources, and
              helps local ideas travel further.
            </p>
            <div className="button-row">
              <TextLink href="/leadership">Meet our chapter leaders</TextLink>
            </div>
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <p className="section-number">OUR PRINCIPLES</p>
          <h2>How we show up.</h2>
        </div>
        <div className="principles">
          {principles.map(([t, d]) => (
            <article className="principle" key={t}>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <FoundingTeam />
      <CTA />
    </>
  );
}
