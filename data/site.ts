export const site = {
  name: "Future Founders",
  description:
    "Future Founders is a student-led entrepreneurship network connecting high school and college students through local chapters, workshops, competitions, projects, and leadership opportunities.",
  // Set NEXT_PUBLIC_SITE_URL only after the organization's canonical domain is verified.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://future-founders-network.utsavsresearch.chatgpt.site",
  development: true,
  emails: { general: null, chapters: null, partnerships: null } as Record<
    string,
    string | null
  >,
  socials: { instagram: null, linkedin: null } as Record<string, string | null>,
};
export const navigation = [
  ["About", "/about"],
  ["What We Do", "/what-we-do"],
  ["Chapters", "/chapters"],
  ["Competitions", "/competitions"],
  ["Resources", "/resources"],
  ["Contact", "/contact"],
];
export const images = {
  hero: {
    src: "/images/placeholder-student-collaboration-1400.webp",
    alt: "Three students working together around a laptop",
    width: 1400,
    height: 933,
  },
  presentation: {
    src: "/images/placeholder-student-presentation-1400.webp",
    alt: "A student presenting ideas to a group in a library",
    width: 1400,
    height: 933,
  },
};
