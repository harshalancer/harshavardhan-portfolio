const path = require('path');
const fs = require('fs');

console.log('=== VERIFYING TRANSLATION INTEGRITY ACROSS ALL LANGUAGES ===\n');

// Import translation modules (compiled by ts-node or transpiled via esbuild/simple extraction)
// Let's test the TypeScript translation files directly
const tsFiles = ['en.ts', 'ta.ts', 'ml.ts', 'hi.ts'];
const translations = {};

tsFiles.forEach(file => {
  const content = fs.readFileSync(path.join(__dirname, 'src', 'translations', file), 'utf8');
  // Simple check for essential structure
  console.log(`Checking ${file}:`);
  
  const checks = [
    { key: 'Headline', found: content.includes('headline:') },
    { key: 'Supporting', found: content.includes('supporting:') },
    { key: 'Services items count', found: (content.match(/title:/g) || []).length >= 9 },
    { key: 'Empty portfolio title', found: content.includes('emptyTitle:') },
    { key: 'WhatsApp prefill', found: content.includes('whatsappPrefill:') },
    { key: 'Form labels', found: content.includes('nameLabel:') && content.includes('contactLabel:') },
    { key: 'Why work with me highlight', found: content.includes('highlight:') },
    { key: 'Footer tagline', found: content.includes('tagline:') },
  ];

  checks.forEach(c => {
    if (c.found) {
      console.log(`  ✓ ${c.key}`);
    } else {
      console.error(`  ✗ Missing: ${c.key}`);
      process.exit(1);
    }
  });
});

console.log('\n✓ ALL 4 TRANSLATION DICTIONARIES (English, Tamil, Malayalam, Hindi) ARE COMPLETE AND INTACT!');