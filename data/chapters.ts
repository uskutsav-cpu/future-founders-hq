export type Chapter = {
  id: string;
  slug: string;
  name: string;
  school?: string;
  type: "High School" | "College";
  city: string;
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
  region: "West" | "Midwest" | "South" | "Northeast";
  sample: boolean;
};
// DEVELOPMENT SAMPLE DATA ONLY. Exactly 10 fictional chapter records.
// Schools, affiliations, locations and founding years MUST be verified before launch.
// No membership, president or achievement data has been invented.
export const chapters: Chapter[] = [
  {
    id: "demo-01",
    slug: "northline",
    name: "Northline Chapter",
    school: "Northline Learning Campus",
    type: "College",
    city: "Seattle",
    state: "Washington",
    country: "United States",
    region: "West",
    status: "Active",
    sample: true,
  },
  {
    id: "demo-02",
    slug: "pacific-workshop",
    name: "Pacific Workshop Chapter",
    school: "Pacific Workshop Campus",
    type: "College",
    city: "San Francisco",
    state: "California",
    country: "United States",
    region: "West",
    status: "Active",
    sample: true,
  },
  {
    id: "demo-03",
    slug: "sunridge",
    name: "Sunridge Chapter",
    school: "Sunridge Learning Campus",
    type: "High School",
    city: "Los Angeles",
    state: "California",
    country: "United States",
    region: "West",
    status: "Active",
    sample: true,
  },
  {
    id: "demo-04",
    slug: "frontier",
    name: "Frontier Chapter",
    school: "Frontier Learning Campus",
    type: "High School",
    city: "Denver",
    state: "Colorado",
    country: "United States",
    region: "West",
    status: "Active",
    sample: true,
  },
  {
    id: "demo-05",
    slug: "lakeside-builders",
    name: "Lakeside Builders Chapter",
    school: "Lakeside Builders Campus",
    type: "College",
    city: "Chicago",
    state: "Illinois",
    country: "United States",
    region: "Midwest",
    status: "Active",
    sample: true,
  },
  {
    id: "demo-06",
    slug: "oakfield",
    name: "Oakfield Chapter",
    school: "Oakfield Learning Campus",
    type: "High School",
    city: "Columbus",
    state: "Ohio",
    country: "United States",
    region: "Midwest",
    status: "Active",
    sample: true,
  },
  {
    id: "demo-07",
    slug: "redwood-studio",
    name: "Redwood Studio Chapter",
    school: "Redwood Studio Campus",
    type: "College",
    city: "Austin",
    state: "Texas",
    country: "United States",
    region: "South",
    status: "Active",
    sample: true,
  },
  {
    id: "demo-08",
    slug: "peachtree-builders",
    name: "Peachtree Builders Chapter",
    school: "Peachtree Builders Campus",
    type: "High School",
    city: "Atlanta",
    state: "Georgia",
    country: "United States",
    region: "South",
    status: "Active",
    sample: true,
  },
  {
    id: "demo-09",
    slug: "eastbridge",
    name: "Eastbridge Chapter",
    school: "Eastbridge Learning Campus",
    type: "College",
    city: "Boston",
    state: "Massachusetts",
    country: "United States",
    region: "Northeast",
    status: "Active",
    sample: true,
  },
  {
    id: "demo-10",
    slug: "harbor-studio",
    name: "Harbor Studio Chapter",
    school: "Harbor Studio Campus",
    type: "High School",
    city: "New York",
    state: "New York",
    country: "United States",
    region: "Northeast",
    status: "Active",
    sample: true,
  },
].map((c) => ({
  ...c,
  description:
    "A local space for students to test ideas, build projects, and learn together. Chapter members bring their curiosity, work in teams, and turn early experiments into something they can share.",
})) as Chapter[];
export const activeChapterCount = chapters.filter(
  (c) => c.status === "Active",
).length;
