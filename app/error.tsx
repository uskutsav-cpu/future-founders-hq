"use client";
export default function ErrorPage({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="container not-found">
      <p className="eyebrow">LET’S TRY THAT AGAIN</p>
      <h1>A small setback.</h1>
      <p>This page couldn’t load. Please try again.</p>
      <button className="button" onClick={reset}>
        Try again →
      </button>
    </section>
  );
}
