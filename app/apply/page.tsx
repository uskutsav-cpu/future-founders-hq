import { pageMetadata } from "@/lib/seo";
import { ApplicationForm } from "@/components/forms";
export const metadata = pageMetadata("Chapter application", "/apply");
export default function Page() {
  return <ApplicationForm />;
}
