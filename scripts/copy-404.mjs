// scripts/copy-404.mjs
import { copyFile, mkdir } from "fs/promises";
import { dirname } from "path";

const src = "docs/index.html"; // built file
const dest = "docs/404.html"; // new fallback file

await mkdir(dirname(dest), { recursive: true });
await copyFile(src, dest);

console.log("✅ Copied docs/index.html → docs/404.html");
