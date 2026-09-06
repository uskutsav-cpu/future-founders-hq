import type { Metadata } from "next";
import { site } from "@/data/site";
export function pageMetadata(
  title: string,
  path: string,
  description = site.description,
): Metadata {
  return {
    title,
    description,
    ...(site.url ? { alternates: { canonical: site.url + path + "/" } } : {}),
    openGraph: {
      title: `${title} | Future Founders`,
      description,
      type: "website",
      images: [
        {
          url: "/social-preview.png",
          width: 1200,
          height: 630,
          alt: "Future Founders — Build what’s next.",
        },
      ],
      ...(site.url ? { url: site.url + path + "/" } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Future Founders`,
      description,
      images: ["/social-preview.png"],
    },
  };
}
