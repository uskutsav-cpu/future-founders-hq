export type Person = {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedin?: string;
};
// Pending verified names and permissions. Empty groups are hidden automatically.
export const leadership: Record<"national" | "advisors", Person[]> = {
  national: [],
  advisors: [],
};
export const pendingLeadership = {
  nationalExecutiveTeam: "Awaiting verified names and bios",
  boardAdvisors: "Not supplied; do not publish placeholders",
};
