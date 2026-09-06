import { pageMetadata } from "@/lib/seo";
import { PageHero, TextLink, Button } from "@/components/ui";
import { site } from "@/data/site";
export const metadata = pageMetadata("Contact", "/contact");
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="GOOD THINGS START WITH A CONVERSATION"
        title="Let’s talk about what’s next."
      >
        <p>
          Interested in joining, starting a chapter, or connecting with Future
          Founders? Start here.
        </p>
      </PageHero>
      <section className="container contact-paths">
        <article>
          <span className="eyebrow">01 / BRING US TO YOUR SCHOOL</span>
          <h2>Start a chapter.</h2>
          <p>
            Tell us about your school and the community you want to build. Our
            chapter application is the place to begin.
          </p>
          <Button href={site.applicationUrl}>Apply to Start a Chapter</Button>
        </article>
        <article>
          <span className="eyebrow">02 / JOIN YOUR PEOPLE</span>
          <h2>Find your chapter.</h2>
          <p>
            Explore our network and find the students building something at your
            school.
          </p>
          <TextLink href="/chapters">Explore the chapter directory</TextLink>
        </article>
        <article>
          <span className="eyebrow">03 / GET IN TOUCH</span>
          <h2>Connect with us.</h2>
          <p>
            For general questions, collaborations, press, or opportunities,
            reach out through our Instagram profile.
          </p>
          <TextLink href={site.socials.Instagram}>Visit our Instagram</TextLink>
        </article>
        <article>
          <span className="eyebrow">04 / FOLLOW ALONG</span>
          <h2>See what’s happening.</h2>
          <p>
            Keep up with chapter life, student ideas, and what’s coming next.
          </p>
          <TextLink href={site.socials.TikTok}>
            Find Future Founders on TikTok
          </TextLink>
        </article>
      </section>
    </>
  );
}
