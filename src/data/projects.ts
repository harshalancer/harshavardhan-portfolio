export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  highlights?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const featuredProjects: ProjectItem[] = [
  {
    id: 'pipeline-inspection-robot',
    title: 'Pipeline Inspection Robot',
    description: 'An advanced robotic inspection prototype engineered to navigate restricted pipeline environments, capture internal visual telemetry, and detect structural defects or corrosion in real time.',
    category: 'Robotics & Computer Vision',
    technologies: ['Python', 'OpenCV', 'Embedded Hardware', 'Sensor Fusion', 'Real-time Telemetry'],
    highlights: [
      'Edge-based visual processing for surface defect and crack identification',
      'Compact locomotion chassis engineered for enclosed cylindrical geometries',
      'Telemetry logging for operational reliability and sensor-driven navigation',
    ],
    githubUrl: 'https://github.com/harshalancer',
    featured: true,
  },
  {
    id: 'ai-workflow-automation-system',
    title: 'Intelligent AI Workflow Automation',
    description: 'A multi-service automation framework that integrates LLM reasoning with business applications to eliminate repetitive operational bottlenecks and automate inquiry routing.',
    category: 'AI & Systems Automation',
    technologies: ['Python', 'OpenAI & Gemini APIs', 'n8n', 'Node.js', 'REST APIs'],
    highlights: [
      'Event-driven webhook pipelines triggering contextual AI workflows',
      'Automated semantic parsing, data transformation, and CRM synchronization',
      'Zero-human-in-the-loop triage for standard data validation workflows',
    ],
    githubUrl: 'https://github.com/harshalancer',
    featured: true,
  },
  {
    id: 'nextjs-fullstack-architecture',
    title: 'Modern Full-Stack Web Application',
    description: 'A high-performance, modular web platform designed with server-rendered UI, type-safe API communication, and scalable relational data architecture.',
    category: 'Full-Stack Web Development',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    highlights: [
      'Sub-second first contentful paint utilizing hybrid static & server rendering',
      'End-to-end type safety across client UI, server actions, and database schemas',
      'WCAG AA accessible interface with dynamic theme and localized UI support',
    ],
    githubUrl: 'https://github.com/harshalancer',
    featured: true,
  },
];