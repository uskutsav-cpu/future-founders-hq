export type Competition = {
  id: string;
  title: string;
  organizer: string;
  date: string;
  deadline: string;
  format: "Online" | "In Person" | "Hybrid";
  participation: "Individual" | "Team" | "Individual or Team";
  eligibility: "High School" | "College" | "Both";
  category:
    | "Pitch"
    | "Entrepreneurship"
    | "Investment"
    | "Case"
    | "Economics"
    | "Innovation"
    | "Business"
    | "Technology";
  status: "Open" | "Upcoming" | "Closed";
  url?: string;
  description: string;
  sample: boolean;
};
// DEVELOPMENT SAMPLES: every name and organizer is fictional, not a real opportunity.
// Replace with sourced, verified opportunities; never imply an external partnership.
export const competitions: Competition[] = [
  {
    id: "demo-c1",
    title: "Zero to One Pitch Challenge",
    organizer: "Sample Opportunity Studio",
    date: "2026-11-14",
    deadline: "2026-10-23",
    format: "Online",
    participation: "Team",
    eligibility: "Both",
    category: "Pitch",
    status: "Open",
    sample: true,
    description:
      "Turn an early idea into a five-minute pitch. Explain the problem, your first experiment, and what you learned.",
  },
  {
    id: "demo-c2",
    title: "The Campus Venture Sprint",
    organizer: "Sample Student Ventures",
    date: "2026-12-05",
    deadline: "2026-11-09",
    format: "Hybrid",
    participation: "Team",
    eligibility: "College",
    category: "Entrepreneurship",
    status: "Upcoming",
    sample: true,
    description:
      "Build and test a venture concept around a real campus problem. Bring evidence from your first customers.",
  },
  {
    id: "demo-c3",
    title: "Next Practice Case Invitational",
    organizer: "Sample Case Collective",
    date: "2026-11-21",
    deadline: "2026-10-30",
    format: "In Person",
    participation: "Team",
    eligibility: "High School",
    category: "Case",
    status: "Open",
    sample: true,
    description:
      "Work through a business challenge with your team and defend a clear, practical recommendation.",
  },
  {
    id: "demo-c4",
    title: "Small Bets Investment Lab",
    organizer: "Sample Finance Forum",
    date: "2027-01-16",
    deadline: "2026-12-12",
    format: "Online",
    participation: "Individual or Team",
    eligibility: "Both",
    category: "Investment",
    status: "Upcoming",
    sample: true,
    description:
      "Research a company and present an evidence-based investment thesis using a simulated portfolio.",
  },
  {
    id: "demo-c5",
    title: "Better Everyday Innovation Prize",
    organizer: "Sample Ideas Network",
    date: "2026-08-15",
    deadline: "2026-07-24",
    format: "Online",
    participation: "Individual",
    eligibility: "High School",
    category: "Innovation",
    status: "Closed",
    sample: true,
    description:
      "Prototype a small improvement to everyday life and document how it works for the people who use it.",
  },
  {
    id: "demo-c6",
    title: "Open Circuit Build Weekend",
    organizer: "Sample Maker Assembly",
    date: "2027-02-20",
    deadline: "2027-01-29",
    format: "In Person",
    participation: "Team",
    eligibility: "College",
    category: "Technology",
    status: "Upcoming",
    sample: true,
    description:
      "Create a working technology prototype over a weekend, then show the decisions behind your build.",
  },
];
export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date + "T12:00:00Z"));
}
