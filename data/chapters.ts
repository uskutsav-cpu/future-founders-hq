export type Chapter = {
  id: string;
  slug: string;
  name: string;
  school?: string;
  type: "High School" | "College";
  city?: string;
  district?: string;
  state?: string;
  country: string;
  founded?: number;
  status: "Active" | "Launching";
  president?: string;
  memberCount?: number;
  description?: string;
  image?: string;
  website?: string;
  instagram?: string;
  email?: string;
  leadership?: { name: string; role: string; image?: string }[];
  achievements?: string[];
  photos?: { src: string; alt: string }[];
  region: string;
  sample: boolean;
};
// Chapter affiliations supplied by the organization, September 6, 2026.
// School locations verified against school websites; these sources do not verify affiliation.
// Rock Hill: prosper-isd.net/o/rhhs/page/contact-us (Frisco, Prosper ISD).
// Emerson: friscoisd.org/o/ehs (McKinney, Frisco ISD).
// Coppell: coppellisd.com/o/chs. Amity: amityschooldubai.com/contact-us.
// Nepal and Azerbaijan school/city details have not yet been supplied. Never invent them.
export const chapters: Chapter[] = [
  {
    id: "rock-hill",
    slug: "rock-hill-high-school",
    name: "Rock Hill High School",
    school: "Rock Hill High School",
    district: "Prosper ISD",
    city: "Frisco",
    state: "Texas",
    country: "United States",
    region: "North America",
    type: "High School",
    status: "Active",
    sample: false,
  },
  {
    id: "amity-dubai",
    slug: "amity-school-dubai",
    name: "Amity School Dubai",
    school: "Amity School Dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    region: "Middle East",
    type: "High School",
    status: "Active",
    sample: false,
  },
  {
    id: "emerson",
    slug: "emerson-high-school",
    name: "Emerson High School",
    school: "Emerson High School",
    district: "Frisco ISD",
    city: "McKinney",
    state: "Texas",
    country: "United States",
    region: "North America",
    type: "High School",
    status: "Active",
    sample: false,
  },
  {
    id: "coppell",
    slug: "coppell-high-school",
    name: "Coppell High School",
    school: "Coppell High School",
    city: "Coppell",
    state: "Texas",
    country: "United States",
    region: "North America",
    type: "High School",
    status: "Active",
    sample: false,
  },
  {
    id: "nepal",
    slug: "nepal",
    name: "Nepal Chapter",
    country: "Nepal",
    region: "South Asia",
    type: "High School",
    status: "Active",
    sample: false,
  },
  {
    id: "azerbaijan",
    slug: "azerbaijan",
    name: "Azerbaijan Chapter",
    country: "Azerbaijan",
    region: "Caucasus",
    type: "High School",
    status: "Active",
    sample: false,
  },
].map((c) => ({
  ...c,
  description:
    "A student-led community for testing ideas, building projects, and learning together. Bring your curiosity, find collaborators, and start making something real.",
})) as Chapter[];
// Organization-wide total supplied in the original brief. Six chapter listings have been provided;
// the remaining four are intentionally not represented by invented school records.
export const activeChapterCount = 10;
