import { pageMetadata } from "@/lib/seo";
import { PageHero, Button, TextLink } from "@/components/ui";
import { site } from "@/data/site";
export const metadata = pageMetadata("Chapter application", "/apply");
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="START YOUR CHAPTER"
        title="Your next chapter starts here."
      >
        <p>
          Tell us about your school, your ideas, and the community you want to
          build.
        </p>
      </PageHero>
      <section className="container application-handoff">
        <div>
          <h2>Make the first move.</h2>
          <p>
            Complete the Future Founders chapter application on Google Forms.
            Share why you want to lead a chapter and how you’ll bring students
            together.
          </p>
          <Button href={site.applicationUrl}>Open Chapter Application</Button>
          <p className="handoff-note">
            You’ll continue to Google Forms to complete and submit your
            application.
          </p>
        </div>
        <aside>
          <span className="eyebrow">BEFORE YOU APPLY</span>
          <h3>
            A reason to start.
            <br />A willingness to build.
          </h3>
          <p>
            You don’t need a finished venture. Think about the people you’d
            bring together and what your first meeting could look like.
          </p>
          <TextLink href="/start-a-chapter#process">
            See the chapter launch process
          </TextLink>
        </aside>
      </section>
    </>
  );
}
