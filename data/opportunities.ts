export type Opportunity = {
  id: string;
  title: string;
  category: string;
  arrangement: string;
  commitment: string;
  deadline: string;
  description: string;
  areas: string[];
  applicationUrl: string;
};
// Title, arrangement and commitment verified on the supplied form.
// September 20 overrides the form's older September 15 date per the owner.
// No closing time, compensation, eligibility or selection policy was supplied.
export const opportunities: Opportunity[] = [
  {
    id: "social-media-intern-2026",
    title: "Social Media Intern",
    category: "Student leadership position",
    arrangement: "Remote",
    commitment: "1–3 hours per week",
    deadline: "2026-09-20",
    description:
      "Help create content, grow our online presence, and connect more students with Future Founders.",
    areas: [
      "Short-form video & Reels",
      "Graphic design",
      "Copywriting & captions",
      "Social media strategy",
      "Community engagement",
      "Analytics & growth",
    ],
    applicationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSeH6bA2OlGV8Tt_F0qUtGCJNQJ7sz_C6Guw4vz-r0aQK2BUGg/viewform?usp=sharing&ouid=104674329554830051348",
  },
];
export function opportunityClosed(opportunity: Opportunity, today: string) {
  return Boolean(today && today > opportunity.deadline);
}
