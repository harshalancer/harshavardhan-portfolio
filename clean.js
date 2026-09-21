const fs = require('fs');
const path = require('path');

// 1. Fix MyWork.tsx
let myWork = fs.readFileSync('src/components/MyWork.tsx', 'utf8');
myWork = myWork.replace(/, Github/g, ', GitFork');
myWork = myWork.replace(/<Github /g, '<GitFork ');
fs.writeFileSync('src/components/MyWork.tsx', myWork, 'utf8');

// 2. Strip UTF-8 BOM from all files in src and configs
function cleanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.next') {
      cleanDir(fullPath);
    } else if (entry.isFile() && /\.(tsx?|css|mjs|json|md|svg)$/.test(entry.name)) {
      let content = fs.readFileSync(fullPath);
      if (content[0] === 0xEF && content[1] === 0xBB && content[2] === 0xBF) {
        content = content.slice(3);
        fs.writeFileSync(fullPath, content);
        console.log('Stripped BOM from:', fullPath);
      }
    }
  }
}

cleanDir('.');
console.log('BOM cleanup completed.');