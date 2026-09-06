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
