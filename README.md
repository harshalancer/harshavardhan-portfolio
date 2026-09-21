# Harshavardhan — Personal Freelancer Portfolio Website

A fast, responsive, accessible, and multilingual personal portfolio website for **Harshavardhan**, Freelance Software Developer.

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**, pre-rendered as a 100% static site (`output: 'export'`) ready for free ₹0 hosting on GitHub Pages, Cloudflare Pages, or Vercel.

---

## 🌟 Key Features

- **Personal Brand & Voice**:
  - Dedicated personal portfolio — no company name, agency identity, or fictional claims.
  - Tagline: *“Big dreams shouldn't have to wait for big budgets.”*
  - Supporting message: *“We're here to help you turn your ideas into reality with affordable, thoughtful, and creative digital solutions.”*
  - Availability indicator: *“Open to discussing projects.”*

- **Multilingual Support (4 Languages)**:
  - English (`en`)
  - Tamil (`ta` — தமிழ்)
  - Malayalam (`ml` — മലയാളം)
  - Hindi (`hi` — हिन्दी)
  - Accessible language selector with native script names in the navigation bar and footer.
  - Client-side preference persistence in `localStorage` without page reloads.
  - Natural, high-quality human translations with proper Indic font support (`Noto Sans Tamil`, `Noto Sans Malayalam`, `Noto Sans Devanagari`).

- **Services Section**:
  - 9 structured service cards covering Web Development, E-commerce, Full-Stack Apps, AI Chatbots, AI Automations, Booking Systems, UI/UX, Inventory & Billing, and Website Redesign / Bug Fixing.
  - Transparent disclaimer that final scope depends on project requirements.
  - No fake discounts, hourly rates, or deceptive pricing.

- **Honest Portfolio Showcase**:
  - Polished empty state: *“Coming soon — I'm preparing projects to showcase here.”*
  - Ready for future projects: simply add entries to `src/data/projects.ts`.
  - Zero fake client reviews, testimonials, or artificial awards.

- **Tools & Technologies**:
  - Clean categorization of core technologies (HTML/CSS, JS, React, Next.js, Python, Node.js/Express, Flask/Django, SQL/Databases, Firebase/Supabase, OpenAI/Gemini APIs, n8n/Make/Zapier, Git/GitHub).

- **Direct, Transparent Contact**:
  - WhatsApp: `+91 6385386500` (prefilled with translated greetings based on selected language).
  - Phone: `+91 6385386500`.
  - Email: `harshavardhan1527@gmail.com`.
  - Project enquiry form with accessible labels, input validation, and direct WhatsApp / Email dispatch.

- **Performance & Accessibility**:
  - Static HTML export with zero server overhead.
  - Full keyboard accessibility, skip-to-content link, and clear focus indicators.
  - Respects `prefers-reduced-motion`.
  - Clean semantic HTML5 elements.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build Static Production Bundle
```bash
npm run build
```
This generates the optimized static website in the `out/` folder.

### 4. Preview the Production Build Locally
```bash
npx serve out
```

---

## 🌐 Free Hosting & Deployment (₹0 Budget)

This website is designed for **100% free hosting** using static site providers.

### Option 1: GitHub Pages (Recommended)
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Harshavardhan portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. The included workflow `.github/workflows/deploy.yml` will automatically build and publish your site at `https://<your-username>.github.io/<your-repo>/`.

### Option 2: Cloudflare Pages (Free Global CDN)
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/) and sign in with a free account.
2. Click **Create a project** > **Connect to Git**.
3. Select your repository and configure build settings:
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. Click **Save and Deploy**. Cloudflare provides unlimited bandwidth, instant global cache, and free SSL.

### Option 3: Vercel
1. Sign up for free at [Vercel](https://vercel.com/).
2. Import your GitHub repository.
3. Vercel automatically detects Next.js.
4. Click **Deploy**.

---

## 🛠️ How to Customize & Maintain

### 1. Updating Contact Details
- Direct links and phone numbers are located in:
  - `src/components/Contact.tsx`
  - `src/components/Footer.tsx`
  - `src/translations/en.ts` (and other language files)

### 2. Adding Portfolio Projects in the Future
Open `src/data/projects.ts` and add items to the `featuredProjects` array:
```ts
export const featuredProjects: ProjectItem[] = [
  {
    id: 'my-first-project',
    title: 'Custom Inventory Platform',
    description: 'A responsive billing and stock management web app built for local retail shops.',
    category: 'Full-Stack Web App',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
    featured: true,
  },
];
```
As soon as you add projects, the website automatically switches from the "Coming Soon" state to displaying your live projects grid!

### 3. Editing or Adding Language Translations
- All translations are located in `src/translations/`:
  - `en.ts` — English
  - `ta.ts` — Tamil (தமிழ்)
  - `ml.ts` — Malayalam (മലയാളം)
  - `hi.ts` — Hindi (हिन्दी)
- To add a new language (e.g. Kannada, Telugu, Bengali):
  1. Add the language code to `Language` type in `src/translations/types.ts`.
  2. Create a new file `src/translations/<code >.ts` copying the structure of `en.ts`.
  3. Register the new language in `SUPPORTED_LANGUAGES` inside `src/translations/index.ts`.

---

## 📂 Project Directory Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg           # Custom branded SVG favicon
│   └── robots.txt            # Search engine crawl permissions
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind CSS & accessible motion rules
│   │   ├── layout.tsx        # HTML wrapper, metadata, Google Fonts, LanguageProvider
│   │   └── page.tsx          # Single page layout connecting all sections
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky header with accessible language dropdown
│   │   ├── Hero.tsx          # Hero section with availability badge & architecture mockup
│   │   ├── Services.tsx      # Responsive 9-service grid with redesign highlight
│   │   ├── MyWork.tsx        # Honest portfolio showcase / future project cards
│   │   ├── Technologies.tsx  # Categorized tools & technologies badges
│   │   ├── WhyWorkWithMe.tsx # Core philosophy & genuine value points
│   │   ├── Contact.tsx       # WhatsApp, phone, email & transparent enquiry form
│   │   └── Footer.tsx        # Minimal footer with quick links & copyright
│   ├── context/
│   │   └── LanguageContext.tsx # React Context for i18n & localStorage persistence
│   ├── data/
│   │   ├── projects.ts       # Structured portfolio data file
│   │   └── technologies.ts   # Categorized technology stack
│   └── translations/
│       ├── types.ts          # Strictly typed dictionary interfaces
│       ├── en.ts             # English translations
│       ├── ta.ts             # Tamil translations
│       ├── ml.ts             # Malayalam translations
│       ├── hi.ts             # Hindi translations
│       └── index.ts          # Central export & language utilities
├── next.config.mjs           # Next.js static export config (output: 'export')
├── tailwind.config.ts        # Custom color palette & fonts
├── tsconfig.json             # TypeScript compiler settings
└── package.json              # Project scripts & dependencies
```

---

## 📄 License
© Harshavardhan. All rights reserved.