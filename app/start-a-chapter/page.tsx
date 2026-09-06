import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import {
  PageHero,
  Button,
  ImagePanel,
  SectionHeader,
  Eyebrow,
} from "@/components/ui";
import { launchSteps, leaderSupport } from "@/data/programs";
import { FAQAccordion } from "@/components/faq";
export const metadata = pageMetadata("Start a chapter", "/start-a-chapter");
export default function Page() {
  return (
    <>
      <section className="container launch-hero">
        <PageHero
          eyebrow="YOUR SCHOOL HAS BUILDERS. GIVE THEM A ROOM."
          title="Bring Future Founders to your school."
        >
          <p>
            Build a community of ambitious students, lead real programs, and
            join a growing network of student entrepreneurs.
          </p>
          <Button href={site.applicationUrl}>Start Your Application</Button>
        </PageHero>
        <ImagePanel
          priority
          kind="presentation"
          caption="Leadership starts with showing up."
        />
      </section>
      <section className="why-start section">
        <div className="container editorial-split">
          <div>
            <Eyebrow>BUILD SOMETHING THAT STAYS.</Eyebrow>
            <h2>
              More than a title. <br />
              Something you started.
            </h2>
            <p className="body-copy">
              A chapter is a chance to change what happens at your school. Bring
              the right people together and make it easier for the next student
              with an idea to begin.
            </p>
          </div>
          <ul className="benefits-list">
            {[
              "Build a community of people who care about making things.",
              "Organize workshops, pitch nights, and competition teams.",
              "Connect with chapter presidents across the network.",
              "Use shared resources, then contribute what you learn.",
              "Develop new leaders and leave something that lasts after graduation.",
            ].map((x) => (
              <li key={x}>
                <span aria-hidden="true">↗</span>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="container section" id="process">
        <SectionHeader
          number="THE PROCESS"
          title="From “what if” to your first meeting."
        />
        <p className="body-copy">
          You don’t need every answer on day one. You need a reason to start and
          a willingness to follow through.
        </p>
        <div className="launch-process">
          {launchSteps.map(([title, description], i) => (
            <article className="process-step" key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="support-section section">
        <div className="container editorial-split">
          <div>
            <Eyebrow>YOU BUILD IT. WE BACK YOU.</Eyebrow>
            <h2>
              A starting point. <br />
              And people to call.
            </h2>
            <p className="body-copy">
              Chapter leaders receive a shared foundation for launch and growth.
              Resources are being assembled for the first chapter teams;
              availability will be confirmed during onboarding.
            </p>
          </div>
          <ul className="support-list">
            {leaderSupport.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>
      <FAQAccordion indices={[3, 4, 5, 6, 8]} />
      <section className="chapter-cta">
        <div className="container">
          <Eyebrow>TAKE THE FIRST STEP</Eyebrow>
          <h2>It starts with you.</h2>
          <p>Tell us what you want to build at your school.</p>
          <div className="button-row">
            <Button href={site.applicationUrl}>Start Your Application</Button>
          </div>
        </div>
      </section>
    </>
  );
}
