'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { technologyStack } from '../data/technologies';
import { Code2, Server, Database, BrainCircuit, GitFork } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  frontend: Code2,
  backend: Server,
  cloudDb: Database,
  aiAutomation: BrainCircuit,
  tools: GitFork,
};

export const Technologies: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section id="technologies" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-electric-600 mb-2 inline-block">
            Stack
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-charcoal-900 tracking-tight mb-4">
            {translations.technologies.heading}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            {translations.technologies.subheading}
          </p>
        </div>

        {/* Categorized Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologyStack.map((group) => {
            const Icon = categoryIcons[group.categoryKey] || Code2;
            const categoryTitle = translations.technologies.categories[group.categoryKey];

            return (
              <div
                key={group.categoryKey}
                className="bg-warm-50/70 rounded-2xl p-6 border border-slate-200/80 shadow-subtle hover:bg-white hover:border-slate-300 hover:shadow-card transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-electric-600 shadow-subtle">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-charcoal-900">
                    {categoryTitle}
                  </h3>
                </div>

                <div className="space-y-3">
                  {group.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-3 bg-white rounded-xl border border-slate-200/70 hover:border-electric-200 transition-colors"
                    >
                      <p className="text-sm font-semibold text-charcoal-900 mb-0.5">
                        {tech.name}
                      </p>
                      {tech.description && (
                        <p className="text-xs text-charcoal-500 leading-relaxed">
                          {tech.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
