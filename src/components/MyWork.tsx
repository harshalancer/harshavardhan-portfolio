'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { featuredProjects, ProjectItem } from '../data/projects';
import { FolderGit2, Sparkles, ArrowRight, ExternalLink, GitFork } from 'lucide-react';

export const MyWork: React.FC = () => {
  const { translations } = useLanguage();

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hasProjects = featuredProjects && featuredProjects.length > 0;

  return (
    <section id="work" className="py-20 md:py-28 bg-warm-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-electric-600 mb-2 inline-block">
            {translations.nav.work}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-charcoal-900 tracking-tight mb-4">
            {translations.work.heading}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            {translations.work.subheading}
          </p>
        </div>

        {/* Dynamic Project Display or Polished Honest Empty State */}
        {hasProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project: ProjectItem) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-charcoal-700">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-charcoal-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 bg-slate-50 border border-slate-200 text-charcoal-600 rounded-md font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-600 hover:text-electric-700"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Preview
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal-600 hover:text-charcoal-900"
                    >
                      <GitFork className="w-3.5 h-3.5" />
                      Code Repository
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Polished, honest empty state compliant with specification */
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-200/90 shadow-card text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-electric-50 border border-electric-100 text-electric-600 mx-auto flex items-center justify-center mb-6 shadow-subtle">
              <FolderGit2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-heading text-charcoal-900 mb-3">
              {translations.work.emptyTitle}
            </h3>

            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed max-w-xl mx-auto mb-8">
              {translations.work.emptyDescription}
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-electric-600 hover:bg-electric-700 rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600 active:scale-98"
              >
                <span>{translations.work.emptyCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-charcoal-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600"
              >
                <span>{translations.hero.secondaryCta}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
