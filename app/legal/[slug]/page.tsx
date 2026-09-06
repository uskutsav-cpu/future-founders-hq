import { notFound } from "next/navigation";
import { LegalDocument } from "@/components/legal-document";
import { legalDocuments, documentHref } from "@/data/legal-documents";
import { pageMetadata } from "@/lib/seo";
const documents = legalDocuments.filter((doc) =>
  documentHref(doc.slug).startsWith("/legal/"),
);
export const dynamicParams = false;
export function generateStaticParams() {
  return documents.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = documents.find((d) => d.slug === slug);
  return doc
    ? pageMetadata(doc.title, documentHref(slug), doc.description)
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = documents.find((d) => d.slug === slug);
  if (!doc) notFound();
  return <LegalDocument document={doc} />;
}
