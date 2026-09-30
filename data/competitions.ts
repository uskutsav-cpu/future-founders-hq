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
  prizes?: string[];
  sample: boolean;
};
// The organizer set October 6, 2026 as the interest deadline. The event date
// and detailed rules remain unannounced. Prize categories were supplied by the
// organizer; do not invent values, winner counts, eligibility or conditions.
export const competitions: Competition[] = [
  {
    id: "case-study-2026",
    title: "Future Founders Case Study Competition",
    organizer: "Future Founders",
    deadline: "2026-10-06",
    category: "Case",
    status: "Open",
    url: "https://forms.gle/6bdRrYmCuqYPuePC6",
    description:
      "A student case study competition focused on problem-solving and business thinking. Share your interest by October 6, 2026. The competition date and full official rules will be announced separately.",
    prizes: [
      "Cash award",
      "Gift cards",
      "Frisco RoughRiders game tickets",
    ],
    registrationNote:
      "This form records your interest. Award values, winner details, eligibility, judging, and final entry requirements will be published in the official rules.",
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
