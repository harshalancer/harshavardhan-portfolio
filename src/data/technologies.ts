export interface TechnologyGroup {
  categoryKey: 'frontend' | 'backend' | 'cloudDb' | 'aiAutomation' | 'tools';
  items: {
    name: string;
    description?: string;
  }[];
}

export const technologyStack: TechnologyGroup[] = [
  {
    categoryKey: 'frontend',
    items: [
      { name: 'HTML & CSS', description: 'Semantic structure, accessible layout & responsive design' },
      { name: 'JavaScript', description: 'Modern ES6+, interactive web features & DOM manipulation' },
      { name: 'React', description: 'Component-driven UI, state management & reactive apps' },
      { name: 'Next.js', description: 'Server rendering, static export & performant web applications' },
    ],
  },
  {
    categoryKey: 'backend',
    items: [
      { name: 'Python', description: 'Scripting, backend services, data logic & AI integrations' },
      { name: 'Node.js / Express', description: 'Lightweight REST APIs, microservices & backend servers' },
      { name: 'Flask / Django', description: 'Python web frameworks for robust APIs & web applications' },
    ],
  },
  {
    categoryKey: 'cloudDb',
    items: [
      { name: 'SQL / Databases', description: 'Relational data modeling, queries & database management' },
      { name: 'Firebase / Supabase', description: 'Real-time database, cloud functions & scalable storage' },
    ],
  },
  {
    categoryKey: 'aiAutomation',
    items: [
      { name: 'AI APIs (OpenAI & Gemini)', description: 'LLM integration, smart chatbots, structured output & text analysis' },
      { name: 'n8n / Make / Zapier', description: 'No-code and low-code workflow automation across business tools' },
    ],
  },
  {
    categoryKey: 'tools',
    items: [
      { name: 'Git / GitHub', description: 'Source control, code review, deployment workflows & collaboration' },
    ],
  },
];
