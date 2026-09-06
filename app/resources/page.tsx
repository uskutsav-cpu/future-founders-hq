import { pageMetadata } from "@/lib/seo";
import { PageHero, TextLink } from "@/components/ui";
import { resources } from "@/data/resources";
export const metadata = pageMetadata("Resources", "/resources");
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="A HEAD START FOR YOUR NEXT STEP"
        title="Less starting from scratch."
      >
        <p>
          Guides, tools, and shared resources for members and chapter leaders.
          Take what’s useful. Build on it.
        </p>
      </PageHero>
      <div className="container">
        {(["Chapter Leaders", "Members", "Brand"] as const).map((category) => (
          <section
            className="resource-group"
            id={category.toLowerCase().replace(" ", "-")}
            key={category}
          >
            <h2>
              {category}
              <span className="brand-accent">.</span>
            </h2>
            {resources
              .filter((r) => r.category === category)
              .map((r) => (
                <article className="resource-row" key={r.title}>
                  <h3>{r.title}</h3>
                  <p>{r.description}</p>
                  {r.href ? (
                    <a href={r.href} download={r.format ? true : undefined}>
                      {r.format ? `Download ${r.format}` : "Explore"}{" "}
                      <span aria-hidden="true">↗</span>
                      <span className="sr-only">: {r.title}</span>
                    </a>
                  ) : (
                    <span>Coming Soon</span>
                  )}
                </article>
              ))}
          </section>
        ))}
      </div>
      <section className="container section small-callout">
        <div>
          <h2>Made something useful?</h2>
          <p>Help the next chapter start a little further ahead.</p>
        </div>
        <TextLink href="/contact">Suggest a resource</TextLink>
      </section>
    </>
  );
}
