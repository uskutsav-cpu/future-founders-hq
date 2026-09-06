import { test } from "node:test";
import assert from "node:assert/strict";
import { applicationSteps, validateField } from "../data/application.ts";
import { chapters } from "../data/chapters.ts";
import { competitions } from "../data/competitions.ts";
const fields = applicationSteps.flatMap((s) => s.fields);
const f = (id) => fields.find((f) => f.id === id);
test("required names reject whitespace and optional URLs may be blank", () => {
  assert.ok(validateField(f("firstName"), "  "));
  assert.equal(validateField(f("website"), ""), "");
});
test("email validation rejects malformed and accepts ordinary student addresses", () => {
  for (const v of ["hello", "a@", "a b@example.com"])
    assert.ok(validateField(f("email"), v));
  assert.equal(validateField(f("email"), "student@example.com"), "");
});
test("URLs allow only complete web addresses", () => {
  for (const v of ["javascript:alert(1)", "file:///tmp/x", "not-a-url"])
    assert.ok(validateField(f("website"), v));
  assert.equal(validateField(f("website"), "https://example.com"), "");
});
test("graduation year boundaries", () => {
  const year = new Date().getFullYear();
  assert.ok(validateField(f("graduationYear"), String(year - 1)));
  assert.ok(validateField(f("graduationYear"), String(year + 16)));
  assert.ok(validateField(f("graduationYear"), "2028.5"));
  assert.equal(validateField(f("graduationYear"), String(year + 2)), "");
});
test("essay validation enforces useful minimum and bounded maximum", () => {
  assert.ok(validateField(f("why"), "short"));
  assert.ok(validateField(f("why"), "x".repeat(2501)));
  assert.equal(
    validateField(
      f("why"),
      "I want to create a useful place for students to build together.",
    ),
    "",
  );
});
test("select values must match configured choices", () => {
  assert.ok(validateField(f("schoolType"), "invented"));
  assert.equal(validateField(f("schoolType"), "College"), "");
});
test("development data has exactly ten unique sample chapters and no false people or membership claims", () => {
  assert.equal(chapters.length, 10);
  assert.equal(new Set(chapters.map((c) => c.slug)).size, 10);
  assert.ok(
    chapters.every(
      (c) =>
        c.sample &&
        c.status === "Active" &&
        !c.president &&
        c.memberCount === undefined,
    ),
  );
});
test("fictional competitions cannot lead to registration", () => {
  assert.ok(competitions.every((c) => c.sample && !c.url));
  for (const c of competitions) {
    assert.ok(c.deadline < c.date);
    assert.ok(!Number.isNaN(Date.parse(c.date)));
  }
});
