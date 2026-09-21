'use client';

import React from 'react';
import Link from 'next/link';
import {
  FolderGit2,
  ExternalLink,
  Cpu,
  Bot,
  Layers,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon } from '../../components/icons/GithubIcon';
import { useLanguage } from '../../context/LanguageContext';

const categoryIcons: Record<string, React.ElementType> = {
  'pipeline-inspection-robot': Cpu,
  'ai-workflow-automation-system': Bot,
  'nextjs-fullstack-architecture': Layers,
};

const projectTechStacks: Record<string, string[]> = {
  'pipeline-inspection-robot': ['Python', 'OpenCV', 'Embedded Hardware', 'Sensor Fusion', 'Real-time Telemetry'],
  'ai-workflow-automation-system': ['Python', 'OpenAI & Gemini APIs', 'n8n', 'Node.js', 'REST APIs'],
  'nextjs-fullstack-architecture': ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
};

export default function ProjectsPage() {
  const { translations } = useLanguage();

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
            {translations.projects.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight mb-4">
            {translations.projects.heading}
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            {translations.projects.subheading}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-10 mb-20">
          {translations.projects.items.map((project) => {
            const Icon = categoryIcons[project.id] || FolderGit2;
            const techStack = projectTechStacks[project.id] || ['Engineering', 'Software'];

            return (
              <div
                key={project.id}
                className="p-8 sm:p-10 rounded-3xl bg-graphite-900/90 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-card-dark hover:shadow-card-hover group relative overflow-hidden"
              >
                {/* Subtle top edge gradient highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left info column */}
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center border border-cyan-400/20">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">
                        {project.category}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-3xl">
                      {project.description}
                    </p>

                    {/* Key Technical Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-6 space-y-2">
                        <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
                          {translations.projects.architecturalHighlights}
                        </p>
                        {project.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Action column */}
                  <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end justify-start pt-2">
                    <a
                      href="https://github.com/harshalancer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-graphite-800 hover:bg-graphite-700 border border-white/15 rounded-xl transition-colors w-full sm:w-auto"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{translations.projects.sourceCode}</span>
                    </a>

                    <div className="mt-4 p-4 rounded-xl bg-obsidian-950/60 border border-white/5 text-[11px] font-mono text-slate-400 max-w-xs">
                      <span className="text-cyan-400 font-bold block mb-1">// {translations.projects.verifiedWork}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Expansion Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-graphite-900/60 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xl font-heading font-bold text-white mb-2">
              {translations.projects.collabHeading}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {translations.projects.collabText}
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl shadow-glow-cyan transition-colors"
          >
            <span>{translations.projects.startDiscussion}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}