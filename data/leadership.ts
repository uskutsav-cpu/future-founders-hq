export type Person = {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedin?: string;
};
// Leadership roles and profile URLs supplied by the organization September 7, 2026.
// Profile names and portraits read from the exact supplied LinkedIn URLs.
// Sriram has no supplied LinkedIn or portrait; keep his initials fallback.
export const people = {
  ahmed: {
    id: "ahmed-dawood",
    name: "Ahmed Dawood",
    role: "President",
    image: "/images/leadership/ahmed-dawood.webp",
    linkedin: "https://www.linkedin.com/in/ahmed-dawood-a53a13382/",
  },
  utsav: {
    id: "utsav-sunil-kumar",
    image: "/images/leadership/utsav-sunil-kumar.webp",
    name: "Utsav Sunil Kumar",
    role: "Co-President",
    linkedin: "https://www.linkedin.com/in/utsav-sunil-kumar-a81693372/",
  },
  akshay: {
    id: "akshay-kolluru",
    image: "/images/leadership/akshay-kolluru.webp",
    name: "Akshay Datta Kolluru",
    role: "Co-President",
    linkedin: "https://www.linkedin.com/in/akshay-kolluru/",
  },
  sriram: { id: "sriram-subra", name: "Sriram Subra", role: "Co-President" },
  himangi: {
    id: "himangi-joshi",
    image: "/images/leadership/himangi-joshi.webp",
    name: "Himangi Joshi",
    role: "President",
    linkedin: "https://www.linkedin.com/in/himangi-joshi-825202373/",
  },
  maryam: {
    id: "maryam-yaqub",
    image: "/images/leadership/maryam-yaqub.webp",
    name: "Maryam Yaqub",
    role: "President",
    linkedin: "https://www.linkedin.com/in/maryamyaqub/",
  },
  dhaanya: {
    id: "dhaanya-lakshmi-suresh",
    image: "/images/leadership/dhaanya-lakshmi-suresh.webp",
    name: "Dhaanya Lakshmi Suresh",
    role: "President",
    linkedin: "https://www.linkedin.com/in/dhaanya-lakshmi-suresh-6347aa417/",
  },
  coppell: {
    id: "coppell-president",
    name: "Iniyann Vivekanandan Kalavathy",
    role: "President",
    image: "/images/leadership/iniyann-vivekanandan-kalavathy.webp",
    linkedin: "https://www.linkedin.com/in/iniyannv/",
  },
} satisfies Record<string, Person>;
export const foundingTeam: Person[] = [
  people.utsav,
  people.akshay,
  people.sriram,
];
// Additional national roles and advisors have not been supplied.
export const leadership: Record<"national" | "advisors", Person[]> = {
  national: [],
  advisors: [],
};
