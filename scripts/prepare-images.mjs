// User-provided photography and logo, September 2026. Preserve original assets.
import sharp from "sharp";
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
const logo = await sharp("public/images/originals/future-founders-logo.png")
  .resize({ width: 500 })
  .toBuffer();
const photo = await sharp("public/images/originals/meeting.png")
  .resize({ width: 640, height: 630, fit: "cover" })
  .toBuffer();
await sharp({
  create: { width: 1200, height: 630, channels: 3, background: "#ffffff" },
})
  .composite([
    { input: logo, left: 30, top: 60 },
    { input: photo, left: 560, top: 0 },
  ])
  .png()
  .toFile("public/social-preview.png");
