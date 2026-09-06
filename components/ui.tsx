import Link from "next/link";
import Image from "next/image";
import { images } from "@/data/site";
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span className="arrow" aria-hidden="true">
      {diagonal ? "↗" : "→"}
    </span>
  );
}
export function Button({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      className={`button ${secondary ? "button-secondary" : ""}`}
      href={href}
    >
      {children}
      <Arrow />
    </Link>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <Arrow />
    </Link>
  );
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero container">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1
        className={
          title.split(" ").some((word) => word.length > 15)
            ? "long-word-title"
            : undefined
        }
      >
        {title}
      </h1>
      {children && <div className="hero-description">{children}</div>}
    </section>
  );
}
export function SectionHeader({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="section-number">{number}</p>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
export function ResponsivePhoto({
  kind = "hero",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 60vw",
}: {
  kind: keyof typeof images;
  priority?: boolean;
  sizes?: string;
}) {
  const asset = images[kind];
  const base = asset.src.replace("-1400.webp", "");
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${base}-480.webp 480w, ${base}-800.webp 800w, ${base}-1400.webp 1400w`}
        sizes={sizes}
      />
      <Image
        {...asset}
        alt={asset.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        sizes={sizes}
      />
    </picture>
  );
}
export function ImagePanel({
  kind = "presentation",
  caption,
  priority = false,
}: {
  kind?: keyof typeof images;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="image-panel">
      <ResponsivePhoto kind={kind} priority={priority} />
      {caption && (
        <figcaption>
          {caption}
          <span>Future Founders / In practice</span>
        </figcaption>
      )}
    </figure>
  );
}
export function CTA() {
  return (
    <section className="chapter-cta">
      <div className="container cta-inner">
        <div>
          <Eyebrow>MAKE IT HAPPEN AT YOUR SCHOOL</Eyebrow>
          <h2>
            Your school
            {" "}<br />
            could be next<span>.</span>
          </h2>
          <p>
            Bring Future Founders to your high school or university. We’ll give
            you the structure and resources to build a chapter from the ground
            up.
          </p>
          <div className="button-row">
            <Button href="/start-a-chapter">Start a Chapter</Button>
            <TextLink href="/start-a-chapter#process">See the process</TextLink>
          </div>
        </div>
        <div className="cta-symbol" aria-hidden="true">
          ↗
        </div>
      </div>
    </section>
  );
}
export function EmptyState({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="empty-state">
      <span className="empty-symbol" aria-hidden="true">
        ↗
      </span>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb">
      <Link href="/chapters">All chapters</Link>
      <span aria-hidden="true">/</span>
      <span>{current}</span>
    </nav>
  );
}
