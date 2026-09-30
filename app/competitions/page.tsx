import { pageMetadata } from "@/lib/seo";
import { PageHero, TextLink } from "@/components/ui";
import { CompetitionCalendar } from "@/components/competition-calendar";
import { competitions, formatDate } from "@/data/competitions";
const caseStudy = competitions.find(
  (competition) => competition.id === "case-study-2026",
);
export const metadata = pageMetadata(
  "Student Case Study Competition",
  "/competitions",
  caseStudy
    ? `Future Founders Case Study Competition for student problem-solvers. Express interest by ${formatDate(caseStudy.deadline)}; prizes include cash, gift cards and Frisco RoughRiders tickets. Event date and official rules to follow.`
    : "Explore upcoming Future Founders student entrepreneurship competitions, deadlines, and official event details.",
);
export default function Page() {
  return (
    <>
      <PageHero eyebrow="STUDENT ENTREPRENEURSHIP" title="Put ideas to the test.">
        <p>
          Explore the Future Founders Case Study Competition, its signup
          deadline, winner prizes, and the details as they are confirmed.
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
        <div className="competition-footer-links">
          <TextLink href="/legal/competition-rules">
            Review the rules framework
          </TextLink>
          <TextLink href="/contact">Questions? Get in touch</TextLink>
        </div>
      </section>
    </>
  );
}
