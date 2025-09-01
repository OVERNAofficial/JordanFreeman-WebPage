// Copy all static assets from public/assets to dist/assets after Vite build
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../public/assets');
const destDir = path.join(__dirname, '../dist/assets');

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach((item) => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyRecursiveSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

copyRecursiveSync(srcDir, destDir);
console.log('Assets copied from public/assets to dist/assets.');
