import { pageMetadata } from "@/lib/seo";
import { PageHero, TextLink } from "@/components/ui";
import { CompetitionCalendar } from "@/components/competition-calendar";
export const metadata = pageMetadata(
  "Upcoming competitions",
  "/competitions",
  "Explore the Future Founders competition calendar. Sign up for the Case Study Competition by September 15, 2026. Competition date to be announced.",
);
export default function Page() {
  return (
    <>
      <PageHero eyebrow="TEST YOUR THINKING" title="Upcoming competitions.">
        <p>
          Find your next challenge. Keep track of deadlines. Take the first
          step.
        </p>
      </PageHero>
      <section className="container competition-section">
        <CompetitionCalendar />
      </section>
      <section className="container competition-footer-note">
        <p>
          Competition dates, eligibility, format, and full rules will be
          published as they are confirmed.
        </p>
        <TextLink href="/contact">Questions? Get in touch</TextLink>
      </section>
    </>
  );
}
