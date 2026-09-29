export type Resource = {
  title: string;
  description: string;
  category:
    | "Chapter Leaders"
    | "Members"
    | "Brand"
    | "Workshops & Competitions";
  href?: string;
  status: "Available" | "Coming Soon";
  format?: string;
  pages?: number;
};
export const resources: Resource[] = [
  {
    title: "Blue Ocean competition guide",
    description:
      "Pitch requirements, recommended tools, a presentation template, and submission links. Confirm current dates and rules with Blue Ocean before applying.",
    category: "Workshops & Competitions",
    href: "/resources/blue-ocean-competition-guide.pdf",
    status: "Available",
    format: "PDF",
    pages: 10,
  },
  {
    title: "General competitions overview",
    description:
      "A starting point for entrepreneurship, finance, technology, social impact, and medical competitions. Check each organizer for current details.",
    category: "Workshops & Competitions",
    href: "/resources/general-competitions-guide.pdf",
    status: "Available",
    format: "PDF",
    pages: 11,
  },
  {
    title: "Finding a problem worth solving",
    description:
      "Workshop slides on finding a specific problem, gathering evidence, and learning from interviews and existing workarounds.",
    category: "Workshops & Competitions",
    href: "/resources/problem-finding-workshop.pdf",
    status: "Available",
    format: "PDF",
    pages: 7,
  },
  {
    title: "MVP planning notes",
    description:
      "A short guide to testing assumptions, choosing core features, and writing a clear value proposition.",
    category: "Workshops & Competitions",
    href: "/resources/mvp-planning-notes.pdf",
    status: "Available",
    format: "PDF",
    pages: 8,
  },
  {
    title: "Marketing workshop notes",
    description:
      "Notes on customer discovery, connecting with customers, and shaping a useful offer.",
    category: "Workshops & Competitions",
    href: "/resources/future-founders-marketing-notes.pdf",
    status: "Available",
    format: "PDF",
    pages: 7,
  },
  {
    title: "Chapter launch checklist",
    description: "From a founding team to your first meeting.",
    category: "Chapter Leaders",
    href: "/resources/chapter-launch-checklist.txt",
    status: "Available",
    format: "TXT",
  },
  {
    title: "First meeting guide",
    description: "A practical 60-minute agenda for getting started.",
    category: "Chapter Leaders",
    href: "/resources/first-meeting-guide.txt",
    status: "Available",
    format: "TXT",
  },
  {
    title: "Recruitment guide",
    description:
      "Find your first ten members and give them a reason to return.",
    category: "Chapter Leaders",
    href: "/resources/recruitment-guide.txt",
    status: "Available",
    format: "TXT",
  },
  {
    title: "Leadership structure",
    description: "Define responsibilities and plan a smooth handover.",
    category: "Chapter Leaders",
    status: "Coming Soon",
  },
  {
    title: "Meeting templates",
    description: "Repeatable formats for discussions, builds, and pitches.",
    category: "Chapter Leaders",
    status: "Coming Soon",
  },
  {
    title: "The first experiment",
    description: "A simple worksheet to turn an idea into a test.",
    category: "Members",
    href: "/resources/first-experiment.txt",
    status: "Available",
    format: "TXT",
  },
  {
    title: "Competition resources",
    description: "Explore opportunities and find a challenge for your team.",
    category: "Members",
    href: "/competitions",
    status: "Available",
  },
  {
    title: "Recommended reading",
    description: "A considered reading list for students who build.",
    category: "Members",
    status: "Coming Soon",
  },
  {
    title: "Startup tools",
    description: "Useful tools for testing, making, and sharing.",
    category: "Members",
    status: "Coming Soon",
  },
  {
    title: "Future Founders logo",
    description:
      "Supplied Future Founders logo. Use is subject to brand permission.",
    category: "Brand",
    href: "/resources/future-founders-logo.png",
    status: "Available",
    format: "PNG",
  },
  {
    title: "Chapter naming guidelines",
    description: "A consistent identity with room for your school.",
    category: "Brand",
    href: "/resources/chapter-naming-guidelines.txt",
    status: "Available",
    format: "TXT",
  },
  {
    title: "Presentation template",
    description: "A shared starting point for your next presentation.",
    category: "Brand",
    status: "Coming Soon",
  },
  {
    title: "Social graphics",
    description: "Announce a meeting, recruit members, and share your work.",
    category: "Brand",
    status: "Coming Soon",
  },
  {
    title: "Chapter agreements & consent",
    description:
      "Review affiliation, participation, and optional media-release templates before use.",
    category: "Chapter Leaders",
    href: "/legal",
    status: "Available",
  },
];
