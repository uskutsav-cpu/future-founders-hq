import Link from "next/link";
import Image from "next/image";
import { legalFooterLinks } from "@/data/legal-config";
import { site } from "@/data/site";
const groups = {
  "Future Founders": [
    ["About", "/about"],
    ["What We Do", "/what-we-do"],
    ["Leadership", "/leadership"],
  ],
  Chapters: [
    ["Find a Chapter", "/chapters"],
    ["Start a Chapter", "/start-a-chapter"],
    ["Chapter Resources", "/resources#chapter-leaders"],
  ],
  Opportunities: [
    ["Applications", "/applications"],
    ["Competitions", "/competitions"],
    ["Events", "/events"],
    ["Resources", "/resources"],
  ],
  Connect: [
    ["Contact", "/contact"],
    ["Join", "/join"],
  ],
};
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-manifesto">
            <Link href="/" className="footer-wordmark">
              <Image
                src="/resources/future-founders-logo.png"
                width={190}
                height={190}
                alt="Future Founders"
              />
            </Link>
            <p>
              Built by students who believe <br />
              ideas are meant to be tested.
            </p>
          </div>
          <div className="footer-links">
            {Object.entries(groups).map(([name, links]) => (
              <div key={name}>
                <h2>{name}</h2>
                {links.map(([label, href]) => (
                  <Link href={href} key={href}>
                    {label}
                  </Link>
                ))}
                {name === "Connect" &&
                  Object.entries(site.socials).map(([name, url]) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {name} ↗
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Future Founders</span>
          <span className="footer-motto">Ideas are just the beginning.</span>
          <nav className="footer-legal-links" aria-label="Legal and policies">
            {legalFooterLinks.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
