import { LegalDocument } from "@/components/legal-document";
import { legalDocuments } from "@/data/legal-documents";
import { pageMetadata } from "@/lib/seo";
const document = legalDocuments.find((doc) => doc.slug === "code-of-conduct")!;
export const metadata = pageMetadata(
  document.title,
  "/code-of-conduct",
  document.description,
);
export default function Page() {
  return <LegalDocument document={document} />;
}
