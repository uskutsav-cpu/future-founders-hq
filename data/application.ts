export type Field = {
  id: string;
  label: string;
  type?: "email" | "tel" | "url" | "number" | "textarea" | "select";
  optional?: boolean;
  options?: string[];
  hint?: string;
  maxLength?: number;
  minLength?: number;
  autoComplete?: string;
};
export const applicationSteps: {
  name: string;
  title: string;
  description: string;
  fields: Field[];
}[] = [
  {
    name: "Personal",
    title: "First, a little about you.",
    description: "The person behind the next chapter.",
    fields: [
      { id: "firstName", label: "First name", autoComplete: "given-name" },
      { id: "lastName", label: "Last name", autoComplete: "family-name" },
      {
        id: "email",
        label: "Email address",
        type: "email",
        autoComplete: "email",
      },
      {
        id: "phone",
        label: "Phone number",
        type: "tel",
        optional: true,
        autoComplete: "tel",
      },
    ],
  },
  {
    name: "School",
    title: "Where will you build?",
    description: "Tell us about the community you want to bring together.",
    fields: [
      { id: "school", label: "School name", autoComplete: "organization" },
      { id: "city", label: "City", autoComplete: "address-level2" },
      { id: "state", label: "State / region", autoComplete: "address-level1" },
      { id: "country", label: "Country", autoComplete: "country-name" },
      {
        id: "schoolType",
        label: "School type",
        type: "select",
        options: ["High School", "College"],
      },
      {
        id: "graduationYear",
        label: "Expected graduation year",
        type: "number",
        hint: "Use a four-digit year, such as 2028.",
      },
    ],
  },
  {
    name: "Leadership",
    title: "How do you show up?",
    description:
      "There’s no single path to being a chapter leader. Tell us yours.",
    fields: [
      {
        id: "activities",
        label: "Current clubs and activities",
        type: "textarea",
        hint: "What do you spend time on inside or outside school?",
        maxLength: 1500,
      },
      {
        id: "experience",
        label: "Relevant leadership experience",
        type: "textarea",
        hint: "Formal titles aren’t required. Projects, teams, or initiatives count.",
        maxLength: 2000,
      },
    ],
  },
  {
    name: "Your chapter",
    title: "Tell us what you imagine.",
    description: "Specific ideas are more useful than perfect answers.",
    fields: [
      {
        id: "why",
        label: "Why do you want to start Future Founders?",
        type: "textarea",
        minLength: 30,
        maxLength: 2500,
      },
      {
        id: "vision",
        label: "What would your chapter look like?",
        type: "textarea",
        minLength: 30,
        maxLength: 2500,
      },
      {
        id: "recruitment",
        label: "How would you recruit your first 10 members?",
        type: "textarea",
        minLength: 30,
        maxLength: 2000,
      },
      {
        id: "advisor",
        label: "Does your school require a faculty advisor?",
        type: "select",
        options: ["Yes", "No", "I’m not sure yet"],
      },
      {
        id: "cofounders",
        label: "Do you already have potential co-founders?",
        type: "select",
        options: ["Yes", "Not yet", "I’m having conversations"],
      },
    ],
  },
  {
    name: "Links",
    title: "Anything else we should see?",
    description:
      "These links are optional. Your answers matter more than your online presence.",
    fields: [
      {
        id: "linkedin",
        label: "LinkedIn profile",
        type: "url",
        optional: true,
        hint: "Include https://",
      },
      {
        id: "website",
        label: "Personal website",
        type: "url",
        optional: true,
        hint: "Include https://",
      },
    ],
  },
  {
    name: "Review",
    title: "One last look.",
    description: "Review your answers before preparing your application.",
    fields: [],
  },
];
export function validateField(field: Field, value: string): string {
  const v = value.trim();
  if (!v) return field.optional ? "" : "Please complete this field.";
  if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
    return "Enter a valid email address.";
  if (field.type === "url") {
    try {
      const u = new URL(v);
      if (
        !["https:", "http:"].includes(u.protocol) ||
        !u.hostname.includes(".")
      )
        return "Enter a complete http:// or https:// website address.";
    } catch {
      return "Enter a complete website address, including https://.";
    }
  }
  if (field.type === "select" && !field.options?.includes(v))
    return "Choose an option from the list.";
  if (
    field.id === "graduationYear" &&
    (!/^\d{4}$/.test(v) ||
      Number(v) < new Date().getFullYear() ||
      Number(v) > new Date().getFullYear() + 15)
  )
    return "Enter a graduation year between this year and 15 years from now.";
  if (field.type === "tel" && !/^[+\d\s().-]{7,25}$/.test(v))
    return "Enter a valid phone number or leave this blank.";
  if (field.minLength && v.length < field.minLength)
    return `Please share a little more (at least ${field.minLength} characters).`;
  if (v.length > (field.maxLength || 200)) return "Please shorten this answer.";
  return "";
}
