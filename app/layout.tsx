import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/data/site";
import "./globals.css";
import "./design.css";
export const metadata: Metadata = {
  title: {
    default: "Future Founders | Student Entrepreneurship Network",
    template: "%s | Future Founders",
  },
  description: site.description,
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  openGraph: {
    title: "Future Founders | Build what’s next.",
    description: site.description,
    type: "website",
    siteName: site.name,
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Future Founders — Build what’s next.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Founders | Build what’s next.",
    description: site.description,
    images: ["/social-preview.png"],
  },
  robots: site.development
    ? { index: false, follow: false }
    : { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {site.url && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": `${site.url}/#organization`,
                    name: site.name,
                    url: site.url,
                    description: site.description,
                    sameAs: [site.socials.Instagram, site.socials.TikTok],
                  },
                  {
                    "@type": "WebSite",
                    "@id": `${site.url}/#website`,
                    name: site.name,
                    url: site.url,
                    publisher: { "@id": `${site.url}/#organization` },
                  },
                ],
              }).replace(/</g, "\\u003c"),
            }}
          />
        )}
      </body>
    </html>
  );
}
