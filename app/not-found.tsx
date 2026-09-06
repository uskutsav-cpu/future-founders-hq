import { Button, TextLink, Eyebrow } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="container not-found">
      <Eyebrow>404 / A DIFFERENT DIRECTION</Eyebrow>
      <h1>
        This page hasn’t
        {" "}<br />
        been built. Yet.
      </h1>
      <p>The link may have moved. There’s plenty to explore from here.</p>
      <div className="button-row">
        <Button href="/">Back to home</Button>
        <TextLink href="/chapters">Find your chapter</TextLink>
      </div>
    </section>
  );
}
