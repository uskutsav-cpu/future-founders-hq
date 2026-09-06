export type Resource = {
  title: string;
  description: string;
  category: "Chapter Leaders" | "Members" | "Brand";
  href?: string;
  status: "Available" | "Coming Soon";
  format?: string;
};
export const resources: Resource[] = [
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
    description: "Primary wordmark and FF mark in editable vector format.",
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
];
