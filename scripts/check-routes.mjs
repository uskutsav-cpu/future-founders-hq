import fs from "node:fs";
import path from "node:path";
const base = new URL(process.argv[2] || "http://localhost:8787");
const root = path.resolve("out");
const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? walk(path.join(dir, entry.name))
        : path.join(dir, entry.name),
    );
const files = walk(root).map((file) => "/" + path.relative(root, file));
const pages = files
  .filter(
    (file) =>
      file.endsWith("index.html") &&
      !file.startsWith("/_not-found/") &&
      !file.startsWith("/404/"),
  )
  .map((file) => file.replace(/index\.html$/, ""));
const failures = [];
let checked = 0;
async function check(route, expected = 200, redirect = "follow") {
  try {
    const response = await fetch(new URL(route, base), { redirect });
    if (response.status !== expected)
      failures.push({ route, expected, actual: response.status });
    if (
      expected === 200 &&
      route.endsWith("/") &&
      !response.headers.get("content-type")?.includes("text/html")
    )
      failures.push({ route, error: "Expected HTML" });
    checked++;
    return response;
  } catch (error) {
    failures.push({ route, error: error.message });
  }
}
for (const route of pages) {
  await check(route);
  await check(route + "?refresh-check=1");
  if (route !== "/") {
    const result = await check(route.slice(0, -1) + "?check=1", 307, "manual");
    if (
      result &&
      new URL(result.headers.get("location"), base).pathname !== route
    )
      failures.push({ route, error: "Incorrect trailing slash destination" });
    if (
      result &&
      new URL(result.headers.get("location"), base).search !== "?check=1"
    )
      failures.push({ route, error: "Query lost in redirect" });
  }
}
// Request every deployed asset, including Next's static RSC payloads.
for (const file of files.filter(
  (file) =>
    !file.endsWith(".html") &&
    !file.includes("/images/originals/") &&
    !file.endsWith(".md") &&
    !["/_headers", "/.assetsignore"].includes(file),
))
  await check(file);
await check("/this-route-does-not-exist/", 404);
console.log(
  JSON.stringify(
    { origin: base.origin, pages: pages.length, requests: checked, failures },
    null,
    2,
  ),
);
if (failures.length) process.exitCode = 1;
