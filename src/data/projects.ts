/**
 * Project Showcase Data Structure
 * 
 * To add a new project to your portfolio in the future:
 * 1. Add an object to the `featuredProjects` array below.
 * 2. The portfolio will automatically render project cards when this array has items!
 * 3. While this array is empty, the website displays an honest, polished "Coming Soon" showcase state.
 */

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// Keep empty until Harshavardhan selects real projects to publish
export const featuredProjects: ProjectItem[] = [
  /* Example future project entry:
  {
    id: 'sample-project',
    title: 'Custom Inventory Management System',
    description: 'A responsive billing and stock management platform designed for retail shops.',
    category: 'Full-Stack Web App',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  */
];
