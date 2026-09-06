// User-provided photography and logo, September 2026. Preserve original assets.
import sharp from "sharp";
import fs from "node:fs";
for (const name of ["collaboration", "deliverables", "workshop", "meeting"]) {
  for (const width of [480, 800, 1400])
    await sharp(`public/images/originals/${name}.png`)
      .resize({ width })
      .webp({ quality: 84 })
      .toFile(`public/images/chapter-${name}-${width}.webp`);
}
await sharp("public/images/originals/future-founders-logo.png")
  .extract({ left: 435, top: 177, width: 444, height: 490 })
  .resize({ height: 160 })
  .png()
  .toFile("public/images/brand-mark.png");
await sharp("public/images/originals/future-founders-logo.png")
  .resize({ width: 900 })
  .png()
  .toFile("public/resources/future-founders-logo.png");
await sharp("public/images/brand-mark.png")
  .resize({ width: 64, height: 64, fit: "contain", background: "#ffffff" })
  .png()
  .toFile("app/icon.png");
const social = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#0292df"/><text x="65" y="90" font-family="Arial" font-size="24" font-weight="700" fill="white">FUTURE FOUNDERS</text><text x="65" y="275" font-family="Arial" font-size="100" font-weight="800" letter-spacing="-5" fill="white">BUILD WHAT’S</text><text x="65" y="390" font-family="Arial" font-size="130" font-weight="800" letter-spacing="-6" fill="white">NEXT.</text><text x="68" y="555" font-family="Arial" font-size="22" fill="white">THE STUDENT ENTREPRENEURSHIP NETWORK</text></svg>`,
);
await sharp(social).png().toFile("public/social-preview.png");

const patternLogo = fs
  .readFileSync("public/images/brand-mark.png")
  .toString("base64");
fs.writeFileSync(
  "public/images/brand-pattern.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240"><image href="data:image/png;base64,${patternLogo}" x="28" y="28" width="34" height="38"/><image href="data:image/png;base64,${patternLogo}" x="148" y="148" width="34" height="38"/></svg>`,
);
