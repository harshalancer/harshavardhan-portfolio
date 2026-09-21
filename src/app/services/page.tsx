'use client';

import React from 'react';
import Link from 'next/link';
import {
  Code2,
  Layout,
  Palette,
  Bot,
  Wrench,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const serviceIcons: Record<string, React.ElementType> = {
  'full-stack': Code2,
  frontend: Layout,
  'ui-ux': Palette,
  'ai-solutions': Bot,
  'redesign-bugfixing': Wrench,
};

const serviceTechStacks: Record<string, string[]> = {
  'full-stack': ['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL'],
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'HTML5/CSS'],
  'ui-ux': ['Design Systems', 'Wireframing', 'Tailwind Tokens', 'Component Architecture'],
  'ai-solutions': ['Gemini API', 'OpenAI API', 'Python', 'n8n', 'Node.js'],
  'redesign-bugfixing': ['Code Auditing', 'CSS Debugging', 'Performance Profiling', 'Refactoring'],
};

export default function ServicesPage() {
  const { translations } = useLanguage();

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
            {translations.services.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight mb-4">
            {translations.services.heading}
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            {translations.services.subheading}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {translations.services.items.map((service) => {
            const Icon = serviceIcons[service.id] || Code2;
            const isHighlighted = service.id === 'redesign-bugfixing';
            const techStack = serviceTechStacks[service.id] || ['Engineering', 'Architecture'];

            return (
              <div
                key={service.id}
                className={`p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group ${
                  isHighlighted
                    ? 'md:col-span-2 bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900 border border-cyan-400/40 shadow-card-hover'
                    : 'bg-graphite-900/80 border border-white/10 hover:border-cyan-400/40 shadow-card-dark hover:shadow-card-hover'
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isHighlighted
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                          : 'bg-white/5 text-cyan-400 border border-white/10 group-hover:border-cyan-400/30'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full ${
                        isHighlighted
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-bold'
                          : 'bg-white/5 text-slate-400 border border-white/10'
                      }`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* Deliverables List */}
                  <div className="mb-6 space-y-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
                      {translations.services.keyDeliverables}
                    </p>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Tags & Action */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 shrink-0"
                  >
                    <span>{translations.services.discussScope}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Scope & Engagement Standards */}
        <div className="p-8 rounded-3xl bg-graphite-900/60 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>{translations.services.scopingBadge}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {translations.services.scopingText}
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl shadow-glow-cyan transition-colors"
          >
            <span>{translations.services.requestQuote}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}