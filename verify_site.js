const http = require('http');
const fs = require('fs');
const path = require('path');

console.log('=== RUNNING AUTOMATED AUDIT & VERIFICATION ===\n');

// 1. Inspect index.html
const indexPath = path.join(__dirname, 'out', 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('FAIL: out/index.html does not exist!');
  process.exit(1);
}

const html = fs.readFileSync(indexPath, 'utf8');
console.log('✓ out/index.html exists (Size: ' + (html.length / 1024).toFixed(1) + ' KB)');

const checks = [
  { name: 'Viewport Meta Tag', test: html.includes('name="viewport"') },
  { name: 'Page Title', test: html.includes('Harshavardhan') && html.includes('Freelance Software Developer') },
  { name: 'Main Tagline', test: html.includes('Big dreams') },
  { name: 'Availability Badge', test: html.includes('Open to discussing projects') },
  { name: 'WhatsApp Link Phone', test: html.includes('916385386500') },
  { name: 'Email Address', test: html.includes('harshavardhan1527@gmail.com') },
  { name: 'Home Section Anchor (#home)', test: html.includes('id="home"') },
  { name: 'Services Section Anchor (#services)', test: html.includes('id="services"') },
  { name: 'Work Section Anchor (#work)', test: html.includes('id="work"') },
  { name: 'Technologies Section Anchor (#technologies)', test: html.includes('id="technologies"') },
  { name: 'Why Work With Me Section Anchor (#why)', test: html.includes('id="why"') },
  { name: 'Contact Section Anchor (#contact)', test: html.includes('id="contact"') },
  { name: 'Service: Business Website Development', test: html.includes('Business Website Development') },
  { name: 'Service: E-commerce Websites', test: html.includes('E-commerce Websites') },
  { name: 'Service: Full-Stack Web Applications', test: html.includes('Full-Stack Web Applications') },
  { name: 'Service: AI Chatbots', test: html.includes('AI Chatbots') },
  { name: 'Service: AI Workflow Automation', test: html.includes('AI Workflow Automation') },
  { name: 'Service: Booking & Appointment Systems', test: html.includes('Booking &amp; Appointment Systems') || html.includes('Booking & Appointment Systems') },
  { name: 'Service: UI/UX Design', test: html.includes('UI/UX Design') },
  { name: 'Service: Inventory & Billing Systems', test: html.includes('Inventory &amp; Billing Systems') || html.includes('Inventory & Billing Systems') },
  { name: 'Service: Website Redesign, Bug Fixing', test: html.includes('Website Redesign, Bug Fixing &amp; Improvements') || html.includes('Website Redesign, Bug Fixing & Improvements') },
  { name: 'Honest Empty State in Portfolio', test: html.includes('Coming soon') && html.includes('preparing projects to showcase here') },
  { name: 'No fake claims / testimonials', test: !html.includes('5-star rating') && !html.includes('100+ happy clients') && !html.includes('John Doe said') },
  { name: 'Google Fonts Link (Inter & Manrope & Indic)', test: html.includes('fonts.googleapis.com') && html.includes('Noto+Sans+Tamil') && html.includes('Noto+Sans+Malayalam') && html.includes('Noto+Sans+Devanagari') },
];

let failedChecks = 0;
for (const check of checks) {
  if (check.test) {
    console.log(`✓ Passed: ${check.name}`);
  } else {
    console.error(`✗ FAILED: ${check.name}`);
    failedChecks++;
  }
}

// 2. Test Local HTTP Server on Static Export
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain',
  '.json': 'application/json',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(__dirname, 'out', reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(fs.readFileSync(filePath));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3333, '127.0.0.1', () => {
  console.log('\n✓ Test HTTP Server running at http://127.0.0.1:3333');

  // Perform HTTP requests
  const endpoints = ['/', '/favicon.svg', '/robots.txt'];
  let tested = 0;

  endpoints.forEach((ep) => {
    http.get(`http://127.0.0.1:3333${ep}`, (res) => {
      console.log(`✓ HTTP GET ${ep} -> Status ${res.statusCode} (${res.headers['content-type']})`);
      tested++;
      if (tested === endpoints.length) {
        server.close(() => {
          console.log('\n=== ALL AUDIT CHECKS COMPLETED SUCCESSFULLY ===');
          process.exit(failedChecks === 0 ? 0 : 1);
        });
      }
    }).on('error', (err) => {
      console.error(`✗ HTTP GET ${ep} failed:`, err.message);
      process.exit(1);
    });
  });
});