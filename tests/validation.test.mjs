import { test } from "node:test";
import assert from "node:assert/strict";
import { chapters, activeChapterCount } from "../data/chapters.ts";
import { competitions } from "../data/competitions.ts";
import { site } from "../data/site.ts";
test("application and social links exactly match organization-supplied destinations", () => {
  assert.equal(site.applicationUrl, "https://forms.gle/y8jjNRrDRz276wGu7");
  assert.equal(
    site.socials.Instagram,
    "https://www.instagram.com/futurefoundershhs/",
  );
  assert.equal(
    site.socials.TikTok,
    "https://www.tiktok.com/@futuref254?lang=en",
  );
});
test("all fictional competitions have been removed", () =>
  assert.equal(competitions.length, 0));
test("six supplied chapter records retain unique routes without invented people or counts", () => {
  assert.equal(chapters.length, 6);
  assert.equal(new Set(chapters.map((c) => c.slug)).size, 6);
  assert.ok(
    chapters.every(
      (c) => !c.sample && !c.president && c.memberCount === undefined,
    ),
  );
  assert.equal(activeChapterCount, 10);
});
test("country-only chapters do not invent schools or cities", () => {
  for (const country of ["Nepal", "Azerbaijan"]) {
    const c = chapters.find((c) => c.country === country);
    assert.ok(c);
    assert.equal(c.school, undefined);
    assert.equal(c.city, undefined);
  }
});

import { legalDocuments, documentHref } from "../data/legal-documents.ts";
import { legalConfig, legalFooterLinks } from "../data/legal-config.ts";
test("legal documents have unique public routes, sections, and explicit review requirements", () => {
  assert.equal(legalDocuments.length, 13);
  assert.equal(
    new Set(legalDocuments.map((d) => documentHref(d.slug))).size,
    13,
  );
  for (const d of legalDocuments) {
    assert.ok(d.review.length > 0);
    assert.ok(d.sections.length > 0);
    assert.equal(
      new Set(d.sections.map((s) => s.title)).size,
      d.sections.length,
    );
    assert.ok(d.sections.every((s) => s.paragraphs?.length || s.items?.length));
  }
});
test("legal footer exposes all requested website notices and controls", () => {
  const paths = new Set(legalFooterLinks.map(([, href]) => href));
  for (const href of [
    "/privacy",
    "/terms",
    "/cookies",
    "/accessibility",
    "/code-of-conduct",
    "/privacy-choices",
    "/contact",
    "/legal",
  ])
    assert.ok(paths.has(href));
});
test("unconfirmed operator details cannot be mistaken for adopted legal policies", () => {
  assert.equal(legalConfig.adopted, false);
  assert.equal(legalConfig.effectiveDate, null);
  assert.equal(legalConfig.operatorName, null);
  assert.equal(legalConfig.formAcceptanceRecordingConfigured, false);
});

import { clearLegacyDraft, LEGACY_DRAFT_KEY } from "../lib/privacy-storage.ts";
test("privacy clearing removes only the legacy draft from disposable storage", () => {
  const values = new Map([
    [LEGACY_DRAFT_KEY, '{"firstName":"Test"}'],
    ["unrelated-data", "keep"],
  ]);
  const storage = {
    getItem: (key) => values.get(key) ?? null,
    removeItem: (key) => values.delete(key),
  };
  assert.equal(clearLegacyDraft(storage), "removed");
  assert.equal(values.has(LEGACY_DRAFT_KEY), false);
  assert.equal(values.get("unrelated-data"), "keep");
  assert.equal(clearLegacyDraft(storage), "absent");
});
test("blocked browser storage does not report successful deletion", () => {
  const storage = {
    getItem: () => {
      throw new Error("Storage denied");
    },
    removeItem: () => {
      throw new Error("Must not be called");
    },
  };
  assert.throws(() => clearLegacyDraft(storage), /Storage denied/);
});
