export default function Loading() {
  return (
    <div
      className="container loading-shell"
      role="status"
      aria-label="Loading page"
    >
      <p className="eyebrow">FUTURE FOUNDERS</p>
      <div className="loading-line" />
      <div className="loading-line short" />
      <span className="sr-only">Loading page…</span>
    </div>
  );
}
