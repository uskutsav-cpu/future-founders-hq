export type Event = {
  id: string;
  name: string;
  startsAt: string;
  endsAt?: string;
  timeZone: string;
  location: string;
  format: "Virtual" | "In Person" | "Hybrid";
  organizer: string;
  chapterSlug?: string;
  scope: "National" | "Chapter";
  kind:
    "Workshop" | "Speaker Session" | "Pitch Night" | "Build Session" | "Other";
  registrationUrl?: string;
  status: "Upcoming" | "Registration Open" | "Full" | "Past";
};
// Publish only confirmed events with verified time zones and registration URLs.
export const events: Event[] = [];
