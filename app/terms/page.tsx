import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui";
export const metadata = pageMetadata("Preview terms", "/terms");
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT THIS DEVELOPMENT SITE"
        title="A few clear expectations."
      />
      <article className="container legal">
        <p>
          This is a development preview of Future Founders. Formal organization
          terms and membership policies have not been supplied and will be
          published before public launch.
        </p>
        <h2>Sample content</h2>
        <p>
          Chapter names and meeting photographs were supplied by Future
          Founders. Competition names, organizers, deadlines, and formats are
          fictional examples. They do not establish partnerships or real
          registration opportunities.
        </p>
        <h2>Photography</h2>
        <p>
          Meeting photographs and the Future Founders logo were supplied by the
          organization. Individual photos are not attributed to a particular
          school.
        </p>
        <h2>Applications and messages</h2>
        <p>
          Forms in this preview prepare a local copy only. They do not submit an
          application, confirm membership, or create a commitment from Future
          Founders.
        </p>
        <h2>Resources</h2>
        <p>
          Available resources are introductory drafts for chapter planning.
          School approval requirements and organization policies must be
          confirmed directly. Resources marked “Coming Soon” are not available
          yet.
        </p>
      </article>
    </>
  );
}
