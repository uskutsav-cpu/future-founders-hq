import { test } from "node:test";
import assert from "node:assert/strict";
import { chapters, activeChapterCount } from "../data/chapters.ts";
import {
  competitions,
  formatDate,
  calendarDays,
  shiftMonth,
  competitionStatus,
} from "../data/competitions.ts";
import { site } from "../data/site.ts";
test("application and social links exactly match organization-supplied destinations", () => {
  assert.equal(site.applicationUrl, "https://forms.gle/y8jjNRrDRz276wGu7");
  assert.equal(
    site.socials.Instagram,
    "https://www.instagram.com/joinfuturefounders/",
  );
  assert.equal(
    site.socials.TikTok,
    "https://www.tiktok.com/@futuref254?lang=en",
  );
});
test("only the announced competition is listed", () => {
  assert.equal(competitions.length, 1);
  assert.ok(competitions.every((c) => !c.sample));
});
test("eight supplied chapter records retain unique routes without invented member counts", () => {
  assert.equal(chapters.length, 8);
  assert.equal(new Set(chapters.map((c) => c.slug)).size, 8);
  assert.ok(
    chapters.every(
      (c) => !c.sample && !c.president && c.memberCount === undefined,
    ),
  );
  assert.equal(activeChapterCount, 10);
});
test("country-only chapters do not invent schools or cities", () => {
  for (const country of ["Bangladesh", "Azerbaijan"]) {
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

test("Heritage is the pioneer chapter and shares the three founding Co-Presidents", () => {
  const heritage = chapters.find((c) => c.slug === "heritage-high-school");
  assert.equal(chapters.filter((c) => c.pioneer).length, 1);
  assert.equal(heritage.pioneer, true);
  assert.deepEqual(
    heritage.leadership.map((p) => p.name),
    ["Utsav Sunil Kumar", "Akshay Datta Kolluru", "Sriram Subramanium"],
  );
  assert.ok(heritage.leadership.every((p) => p.role === "Co-President"));
  assert.equal(
    heritage.leadership.find((p) => p.name === "Sriram Subramanium").linkedin,
    undefined,
  );
});
test("school websites are separate from chapter joining destinations and have no pasted commas", () => {
  const expected = new Map([
    ["heritage-high-school", "https://www.friscoisd.org/o/hhs"],
    ["rock-hill-high-school", "https://www.prosper-isd.net/o/rhhs"],
    ["amity-school-dubai", "https://amityschooldubai.com/"],
    ["emerson-high-school", "https://www.friscoisd.org/o/ehs"],
    ["coppell-high-school", "https://www.coppellisd.com/o/chs"],
    ["melissa-high-school", "https://www.melissaisd.org/o/mhs"],
  ]);
  for (const [slug, url] of expected) {
    const chapter = chapters.find((c) => c.slug === slug);
    assert.equal(chapter.schoolWebsite, url);
    assert.notEqual(chapter.website, url);
  }
  assert.ok(!chapters.some((c) => c.country === "Nepal" || c.slug === "nepal"));
});

test("Case Study signup preserves the supplied deadline and does not invent an event date", () => {
  const c = competitions[0];
  assert.equal(c.title, "Future Founders Case Study Competition");
  assert.equal(c.deadline, "2026-09-15");
  assert.equal(c.url, "https://forms.gle/6bdRrYmCuqYPuePC6");
  assert.equal(c.date, undefined);
  assert.equal(formatDate(c.date), "To be announced");
  assert.equal(competitionStatus(c, "2026-09-15"), "Upcoming");
  assert.equal(competitionStatus(c, "2026-09-16"), "Closed");
});
test("calendar aligns September 15 correctly and handles leap years and year boundaries", () => {
  const september = calendarDays("2026-09");
  assert.equal(september.indexOf("2026-09-15") % 7, 2);
  assert.equal(september.filter(Boolean).length, 30);
  assert.equal(september.length % 7, 0);
  assert.ok(calendarDays("2028-02").includes("2028-02-29"));
  assert.equal(shiftMonth("2026-12", 1), "2027-01");
  assert.equal(shiftMonth("2026-01", -1), "2025-12");
});
test("Melissa has the supplied president, location and portrait", () => {
  const c = chapters.find((c) => c.slug === "melissa-high-school");
  assert.equal(c.city, "Melissa");
  assert.equal(c.state, "Texas");
  assert.equal(c.leadership[0].name, "Ahmed Dawood");
  assert.equal(
    c.leadership[0].linkedin,
    "https://www.linkedin.com/in/ahmed-dawood-a53a13382/",
  );
  assert.equal(c.leadership[0].image, "/images/leadership/ahmed-dawood.webp");
});

test("student role keeps the owner deadline and verified form details", async () => {
  const { opportunities, opportunityClosed } =
    await import("../data/opportunities.ts");
  const role = opportunities[0];
  assert.equal(role.title, "Social Media Intern");
  assert.equal(role.deadline, "2026-09-20");
  assert.equal(role.arrangement, "Remote");
  assert.equal(role.commitment, "1–3 hours per week");
  assert.equal(
    new URL(role.applicationUrl).pathname,
    "/forms/d/e/1FAIpQLSeH6bA2OlGV8Tt_F0qUtGCJNQJ7sz_C6Guw4vz-r0aQK2BUGg/viewform",
  );
  assert.equal(opportunityClosed(role, "2026-09-20"), false);
  assert.equal(opportunityClosed(role, "2026-09-21"), true);
});
