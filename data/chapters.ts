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
  logo?: string;
  logoShape?: "wide";
  mark?: string;
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
    logo: "/images/chapters/heritage-high-school.png",
    schoolWebsite: "https://www.friscoisd.org/o/hhs",
    leadership: foundingTeam,
  },
  {
    id: "rock-hill",
    schoolWebsite: "https://www.prosper-isd.net/o/rhhs",
    logo: "/images/chapters/rock-hill-high-school.png",
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
    logo: "/images/chapters/amity-school-dubai.svg",
    logoShape: "wide",
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
    logo: "/images/chapters/emerson-high-school.png",
    logoShape: "wide",
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
    logo: "/images/chapters/coppell-high-school.png",
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
    id: "melissa",
    slug: "melissa-high-school",
    name: "Melissa High School",
    school: "Melissa High School",
    district: "Melissa ISD",
    city: "Melissa",
    state: "Texas",
    country: "United States",
    region: "North America",
    type: "High School",
    status: "Active",
    sample: false,
    schoolWebsite: "https://www.melissaisd.org/o/mhs",
    logo: "/images/chapters/melissa-high-school.png",
    logoShape: "wide",
    leadership: [people.ahmed],
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
    mark: "BC",
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
    mark: "AC",
  },
  {
    id: "walnut-grove",
    slug: "walnut-grove-high-school",
    name: "Walnut Grove High School",
    school: "Walnut Grove High School",
    district: "Prosper ISD",
    city: "Prosper",
    state: "Texas",
    country: "United States",
    region: "North America",
    type: "High School",
    status: "Active",
    sample: false,
    schoolWebsite: "https://www.prosper-isd.net/o/wghs/",
    logo: "/images/chapters/walnut-grove-high-school.png",
    email: "saisha.badia@gmail.com",
  },
  {
    id: "university-of-semarang",
    slug: "university-of-semarang",
    name: "University of Semarang",
    school: "University of Semarang",
    city: "Semarang",
    country: "Indonesia",
    region: "Southeast Asia",
    type: "College",
    status: "Active",
    sample: false,
    mark: "USM",
    email: "adisuarno29@gmail.com",
  },
].map((c) => ({
  ...c,
  description: c.pioneer
    ? "The pioneer chapter of Future Founders. Led by the founding team at Heritage High School, this is where our student-led network began. A local home for students to test ideas, build projects, and learn together."
    : "A student-led community for testing ideas, building projects, and learning together. Bring your curiosity, find collaborators, and start making something real.",
})) as Chapter[];
// Organization-wide active chapter total.
export const activeChapterCount = 10;
