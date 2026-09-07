import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
const origin = "https://futurefounderhq.org";
const root = path.resolve("out");
const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? walk(path.join(dir, entry.name))
        : path.join(dir, entry.name),
    );
const files = walk(root);
const pages = files.filter((file) => file.endsWith(".html"));
let indexable = 0;
for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);
  if (
    relative === "404.html" ||
    relative.startsWith("404/") ||
    relative.startsWith("_not-found/")
  )
    continue;
  const route = "/" + relative.replace(/index\.html$/, "");
  assert.ok(
    html.includes(`rel="canonical" href="${origin}${route}"`),
    `Incorrect canonical: ${relative}`,
  );
  assert.ok(
    html.includes(`property="og:url" content="${origin}${route}"`),
    `Incorrect OG URL: ${relative}`,
  );
  assert.ok(
    html.includes(`content="${origin}/social-preview.png"`),
    `Incorrect social image: ${relative}`,
  );
  assert.ok(!html.includes("noindex"), `Unexpected noindex: ${relative}`);
  assert.ok(
    !/https?:\/\/(?:localhost|127\.0\.0\.1|future-founders-network\.utsavsresearch\.chatgpt\.site)/.test(
      html,
    ),
    `Development URL: ${relative}`,
  );
  indexable++;
}
const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
assert.ok(robots.includes("Allow: /"));
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
for (const [, url] of sitemap.matchAll(/<loc>(.*?)<\/loc>/g)) {
  assert.ok(url.startsWith(origin + "/"), `Wrong sitemap origin: ${url}`);
  assert.ok(
    fs.existsSync(path.join(root, new URL(url).pathname, "index.html")),
    `Missing sitemap route: ${url}`,
  );
}
assert.ok(fs.existsSync(path.join(root, "404.html")));
assert.ok(fs.existsSync(path.join(root, "_headers")));
const oversized = files.filter(
  (file) => fs.statSync(file).size > 25 * 1024 * 1024,
);
assert.equal(
  oversized.length,
  0,
  "Static asset exceeds Cloudflare 25 MiB limit",
);
console.log(
  `Production metadata, sitemap, robots and asset limits passed: ${indexable} indexable pages.`,
);
