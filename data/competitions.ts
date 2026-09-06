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
// Publish only verified opportunities. No competitions have been announced yet.
export const competitions: Competition[] = [];
export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date + "T12:00:00Z"));
}
