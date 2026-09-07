export type Competition = {
  id: string;
  title: string;
  organizer?: string;
  date?: string;
  deadline: string;
  format?: "Online" | "In Person" | "Hybrid";
  participation?: "Individual" | "Team" | "Individual or Team";
  eligibility?: "High School" | "College" | "Both";
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
  registrationNote?: string;
  sample: boolean;
};
// Announced by the organization September 7, 2026. September 15 is interpreted
// as the upcoming September 15, 2026. No closing time or time zone was supplied.
// Name and interest-form purpose verified on the supplied form. Do not invent
// an event date, prizes, eligibility, format, team size or finalized rules.
export const competitions: Competition[] = [
  {
    id: "case-study-2026",
    title: "Future Founders Case Study Competition",
    organizer: "Future Founders",
    deadline: "2026-09-15",
    category: "Case",
    status: "Upcoming",
    url: "https://forms.gle/6bdRrYmCuqYPuePC6",
    description:
      "Put your problem-solving and business skills to the test. Sign up to express interest in the upcoming case study competition.",
    registrationNote:
      "This form registers your interest. Competition details, team formation, and next steps will be announced separately.",
    sample: false,
  },
];
export function formatDate(date?: string) {
  if (!date) return "To be announced";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date + "T12:00:00Z"));
}
export function competitionStatus(c: Competition, today: string) {
  return c.status === "Closed" || (today && c.deadline < today)
    ? "Closed"
    : c.status;
}
export function calendarDays(month: string): (string | null)[] {
  const [year, m] = month.split("-").map(Number);
  const offset = new Date(Date.UTC(year, m - 1, 1)).getUTCDay();
  const count = new Date(Date.UTC(year, m, 0)).getUTCDate();
  const cells: (string | null)[] = Array(offset).fill(null);
  for (let day = 1; day <= count; day++)
    cells.push(`${month}-${String(day).padStart(2, "0")}`);
  while (cells.length % 7) cells.push(null);
  return cells;
}
export function shiftMonth(month: string, offset: number) {
  const [y, m] = month.split("-").map(Number);
  const d = new Date(Date.UTC(y, m - 1 + offset, 1));
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}
