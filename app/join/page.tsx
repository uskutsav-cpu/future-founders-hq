import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { PageHero, TextLink } from "@/components/ui";
import { FAQAccordion } from "@/components/faq";
export const metadata = pageMetadata("Join", "/join");
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="THERE’S A PLACE FOR YOU HERE"
        title="How do you want to join?"
      >
        <p>Start with your school. We’ll help you find your next step.</p>
      </PageHero>
      <section className="container join-grid">
        <Link className="join-choice" href="/chapters">
          <p className="eyebrow">01 / JOIN YOUR PEOPLE</p>
          <h2>My school already has a chapter.</h2>
          <p>Find your local chapter and see how to get involved.</p>
          <span className="text-link">
            Find your chapter <span aria-hidden="true">→</span>
          </span>
        </Link>
        <Link className="join-choice" href="/start-a-chapter">
          <p className="eyebrow">02 / BRING THEM TOGETHER</p>
          <h2>My school doesn’t have a chapter.</h2>
          <p>
            Build the community you wish existed. Start a chapter at your
            school.
          </p>
          <span className="text-link">
            Start something <span aria-hidden="true">→</span>
          </span>
        </Link>
      </section>
      <section className="container small-callout section">
        <div>
          <h2>Still finding your way?</h2>
          <p>
            Tell us what you’re interested in and we’ll help you find a starting
            point.
          </p>
        </div>
        <TextLink href="/contact">Talk to us</TextLink>
      </section>
      <FAQAccordion indices={[1, 2, 7, 8]} />
    </>
  );
}
