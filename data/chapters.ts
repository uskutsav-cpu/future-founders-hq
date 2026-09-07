import { people, foundingTeam } from "./leadership.ts";
import type { Person } from "./leadership.ts";
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
  schoolWebsite?: string;
  pioneer?: boolean;
  instagram?: string;
  email?: string;
  leadership?: Person[];
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
// Bangladesh and Azerbaijan school/city details have not yet been supplied. Never invent them.
export const chapters: Chapter[] = [
  {
    id: "heritage",
    slug: "heritage-high-school",
    name: "Heritage High School",
    school: "Heritage High School",
    district: "Frisco ISD",
    city: "Frisco",
    state: "Texas",
    country: "United States",
    region: "North America",
    type: "High School",
    status: "Active",
    sample: false,
    pioneer: true,
    schoolWebsite: "https://www.friscoisd.org/o/hhs",
    leadership: foundingTeam,
  },
  {
    id: "rock-hill",
    schoolWebsite: "https://www.prosper-isd.net/o/rhhs",
    leadership: [people.himangi],
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
    schoolWebsite: "https://amityschooldubai.com/",
    leadership: [people.maryam],
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
    schoolWebsite: "https://www.friscoisd.org/o/ehs",
    leadership: [people.dhaanya],
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
    schoolWebsite: "https://www.coppellisd.com/o/chs",
    leadership: [people.coppell],
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
    id: "bangladesh",
    slug: "bangladesh",
    name: "Bangladesh Chapter",
    country: "Bangladesh",
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
  description: c.pioneer
    ? "The pioneer chapter of Future Founders. Led by the founding team at Heritage High School, this is where our student-led network began. A local home for students to test ideas, build projects, and learn together."
    : "A student-led community for testing ideas, building projects, and learning together. Bring your curiosity, find collaborators, and start making something real.",
})) as Chapter[];
// Organization-wide total supplied in the original brief. Seven chapter listings have been provided;
// the remaining three are intentionally not represented by invented school records.
export const activeChapterCount = 10;
