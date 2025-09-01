import fs from "fs";
import path from "path";

// Copy all files from public/assets to dist/assets after build
const srcDir = path.resolve("./public/assets");
const destDir = path.resolve("./dist/assets");

if (fs.existsSync(srcDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
  }
}
