import { pageMetadata } from "@/lib/seo";

import { PageHero, CTA } from "@/components/ui";
import { ChapterDirectory } from "@/components/directories";
import { Network } from "@/components/network";
import { activeChapterCount } from "@/data/chapters";
export const metadata = pageMetadata("Find your chapter", "/chapters");
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="THE FUTURE FOUNDERS NETWORK"
        title="Find your chapter."
      >
        <p>
          A local community. A wider network. Find the students building
          something at your school.
        </p>
      </PageHero>
      <section className="container directory-section">
        <div className="directory-intro">
          <strong>
            {activeChapterCount}
            <span>Active Chapters</span>
          </strong>
          <p>
            High school and college chapters. <br />
            Built and led by students.
          </p>
        </div>
        <ChapterDirectory />
      </section>
      <section className="container section">
        <Network />
      </section>
      <CTA />
    </>
  );
}
