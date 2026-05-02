import sharp from "sharp";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

await sharp(resolve(root, "public/og-image.svg"))
  .png({ quality: 95 })
  .resize(1200, 630)
  .toFile(resolve(root, "public/og-image.png"));

console.log("og-image.png generated at public/og-image.png");
