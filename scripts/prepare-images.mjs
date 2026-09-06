// Run after replacing the original 1400 × 933 JPG placeholders.
import sharp from "sharp";
for (const name of ["collaboration", "presentation"]) {
  const source = `public/images/placeholder-student-${name}-1400x933.jpg`;
  for (const width of [480, 800, 1400])
    await sharp(source)
      .resize({ width })
      .webp({ quality: 82 })
      .toFile(`public/images/placeholder-student-${name}-${width}.webp`);
}
const og = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#f7f6f0"/><rect x="70" y="60" width="64" height="64" fill="#da3929"/><path d="M80 72h26v8H89v8h15v8H89v17h-9zm28 14h17v8h-9v7h8v8h-8v11h-8z" fill="#f7f6f0"/><text x="158" y="101" font-family="Arial" font-size="30" font-weight="700" fill="#20231f">Future Founders</text><text x="70" y="294" font-family="Arial" font-size="122" font-weight="700" letter-spacing="-8" fill="#20231f">Build what’s</text><text x="70" y="426" font-family="Arial" font-size="146" font-weight="700" letter-spacing="-8" fill="#da3929">next.</text><path d="M75 453Q225 440 371 448" stroke="#da3929" stroke-width="5" fill="none"/><text x="74" y="565" font-family="Arial" font-size="21" fill="#65675e">THE STUDENT ENTREPRENEURSHIP NETWORK</text><path d="M886 420l165-165m-153 0h153v153" fill="none" stroke="#da3929" stroke-width="22"/></svg>`;
await sharp(Buffer.from(og)).png().toFile("public/social-preview.png");
