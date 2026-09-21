export interface TechnologyGroup {
  category: string;
  items: {
    name: string;
    description: string;
    highlight?: boolean;
  }[];
}

export const technologyStack: TechnologyGroup[] = [
  {
    category: 'Core Languages & Engineering',
    items: [
      { name: 'TypeScript', description: 'Type-safe architecture & strict client/server codebases' },
      { name: 'Python', description: 'AI pipelines, computer vision, data logic & backend systems' },
      { name: 'JavaScript (ES6+)', description: 'Modern asynchronous runtime, APIs & reactive UI' },
      { name: 'HTML5 & Modern CSS', description: 'Semantic structure, accessible layout & 3D styling' },
    ],
  },
  {
    category: 'Web Frameworks & Architecture',
    items: [
      { name: 'Next.js (App Router)', description: 'Server Components, hybrid rendering & edge optimization', highlight: true },
      { name: 'React', description: 'Component-driven UI, state hooks & micro-interactions' },
      { name: 'Tailwind CSS', description: 'Design tokens, dark obsidian theme & responsive layouts' },
      { name: 'Node.js / Express', description: 'High-throughput RESTful services & backend integration' },
    ],
  },
  {
    category: 'AI, Automation & Robotics',
    items: [
      { name: 'Gemini & OpenAI APIs', description: 'LLM agents, multi-turn reasoning & structured output', highlight: true },
      { name: 'OpenCV / Computer Vision', description: 'Image processing, feature extraction & defect analysis' },
      { name: 'n8n / Make / Zapier', description: 'Event-driven workflow orchestration across cloud tools' },
      { name: 'Sensor & IoT Interfacing', description: 'Serial communication, telemetry data logging & hardware control' },
    ],
  },
  {
    category: 'Databases & Infrastructure',
    items: [
      { name: 'PostgreSQL / SQL', description: 'Relational data modeling, indexing & performant queries' },
      { name: 'Firebase / Supabase', description: 'Real-time database, auth rules & serverless functions' },
      { name: 'Git & GitHub', description: 'Version control, automated CI/CD & code collaboration' },
      { name: 'Vercel & Edge CDN', description: 'Zero-config continuous deployment, global caching & SSL' },
    ],
  },
];