export const site = {
  name: "Future Founders",
  description:
    "Future Founders is a student-led entrepreneurship network connecting high school and college students through local chapters, workshops, competitions, projects, and leadership opportunities.",
  // Canonical public origin supplied by the organization. No runtime secret required.
  url: "https://futurefounderhq.org",
  development: false,
  emails: { general: null, chapters: null, partnerships: null } as Record<
    string,
    string | null
  >,
  applicationUrl: "https://forms.gle/y8jjNRrDRz276wGu7",
  socials: {
    Instagram: "https://www.instagram.com/joinfuturefounders/",
    TikTok: "https://www.tiktok.com/@futuref254?lang=en",
  },
};
export const sponsors = [
  {
    name: "Unstop",
    detail: "",
    href: "https://unstop.com/",
    logo: "/images/sponsors/unstop.svg",
    width: 2000,
    height: 796,
    mark: "unstop",
  },
  {
    name: "Frisco RoughRiders",
    detail: "Minor League Baseball",
    href: "https://www.mlb.com/milb/frisco",
    logo: "/images/sponsors/frisco-roughriders.svg",
    width: 79,
    height: 72,
    mark: "roughriders",
  },
  {
    name: "XYZ Next Generation",
    detail: "",
    href: "https://gen.xyz/",
    logo: "/images/sponsors/xyz.svg",
    width: 85,
    height: 50,
    mark: "xyz",
  },
];
export const navigation = [
  ["About", "/about"],
  ["What We Do", "/what-we-do"],
  ["Chapters", "/chapters"],
  ["Competitions", "/competitions"],
  ["Resources", "/resources"],
  ["Contact", "/contact"],
];
// Real photography supplied by Future Founders. No school attribution is inferred.
export const images = {
  hero: {
    src: "/images/chapter-meeting-1400.webp",
    alt: "Future Founders students sharing ideas during a chapter meeting",
    width: 1400,
    height: 947,
  },
  presentation: {
    src: "/images/chapter-workshop-1400.webp",
    alt: "Students working through a minimum viable product workshop",
    width: 1400,
    height: 1040,
  },
  collaboration: {
    src: "/images/chapter-collaboration-1400.webp",
    alt: "Students gathering around tables with laptops during a chapter session",
    width: 1400,
    height: 1087,
  },
  deliverables: {
    src: "/images/chapter-deliverables-1400.webp",
    alt: "Chapter members discussing the next steps for their first product",
    width: 1400,
    height: 1173,
  },
};
