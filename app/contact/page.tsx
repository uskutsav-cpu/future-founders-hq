import { pageMetadata } from "@/lib/seo";
import { PageHero, TextLink } from "@/components/ui";
import { ContactForm } from "@/components/forms";
import { site } from "@/data/site";
export const metadata = pageMetadata("Contact", "/contact");
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="GOOD THINGS START WITH A CONVERSATION"
        title="Talk to us."
      >
        <p>
          Starting a chapter, sharing an opportunity, or just curious? Tell us
          what’s on your mind.
        </p>
      </PageHero>
      <section className="container contact-layout">
        <ContactForm />
        <aside>
          <h2>A direct line.</h2>
          <p>Official contact addresses will be published before launch.</p>
          {Object.entries(site.emails).map(([label, email]) => (
            <div className="contact-address" key={label}>
              <h3>
                {label === "general"
                  ? "General"
                  : label === "chapters"
                    ? "Chapters"
                    : "Partnerships"}
              </h3>
              {email ? (
                <a href={`mailto:${email}`}>{email}</a>
              ) : (
                <span>Address not yet configured</span>
              )}
            </div>
          ))}
          <div className="contact-chapter-note">
            <h3>Ready to start a chapter?</h3>
            <p>The application is the best place to tell us your plan.</p>
            <TextLink href="/apply">Start your application</TextLink>
          </div>
        </aside>
      </section>
    </>
  );
}
