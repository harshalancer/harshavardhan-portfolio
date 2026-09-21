'use client';

import React from 'react';
import Link from 'next/link';
import { Scene3D } from '../components/Scene3D';
import { useLanguage } from '../context/LanguageContext';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Bot,
  ChevronRight,
} from 'lucide-react';

export default function HomePage() {
  const { translations } = useLanguage();
  const topProjects = translations.projects.items.slice(0, 2);

  return (
    <div className="pt-24 pb-20 md:pt-32 md:pb-28">
      {/* 1. UNIQUE 3D HERO SECTION */}
      <section className="relative overflow-hidden min-h-[calc(100vh-6rem)] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Signature Typography & Intro */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-graphite-900 border border-white/10 shadow-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                <span className="text-xs font-mono font-medium text-slate-300 tracking-wider uppercase">
                  {translations.home.availability}
                </span>
              </div>

              {/* Name Prominence */}
              <div className="mb-4">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight text-white leading-[1.08]">
                  HAR
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-violet-400">
                    SHA
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 mt-2 font-heading tracking-wide">
                  {translations.home.title}
                </p>
              </div>

              {/* Short, Natural Introduction */}
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
                {translations.home.intro}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl shadow-glow-cyan transition-all duration-200 active:scale-95"
                >
                  <span>{translations.home.exploreWork}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-200 bg-graphite-900 hover:bg-graphite-800 hover:text-white border border-white/10 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <span>{translations.home.getInTouch}</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </Link>
              </div>

              {/* Quick Tech Badges */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-slate-500">{translations.home.coreFocus}</span>
                <span className="px-2.5 py-1 rounded bg-graphite-900/80 border border-white/10 text-cyan-300">
                  Full-Stack Next.js
                </span>
                <span className="px-2.5 py-1 rounded bg-graphite-900/80 border border-white/10 text-white">
                  Python & AI
                </span>
                <span className="px-2.5 py-1 rounded bg-graphite-900/80 border border-white/10 text-violet-300">
                  Computer Vision / Robotics
                </span>
              </div>
            </div>

            {/* Right Column: Interactive 3D Monogram Scene */}
            <div className="lg:col-span-5 w-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-violet-500/10 blur-3xl -z-10 rounded-full" />
              <div className="w-full max-w-lg aspect-square">
                <Scene3D />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SKILLS & PILLARS OVERVIEW */}
      <section className="py-20 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
                {translations.home.pillarsBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
                {translations.home.pillarsHeading}
              </h2>
            </div>
            <Link
              href="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>{translations.home.viewDetailedServices}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-graphite-900/70 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {translations.home.pillar1Title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {translations.home.pillar1Desc}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-graphite-900/70 border border-white/10 hover:border-violet-400/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-violet-500/15 text-violet-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-violet-300 transition-colors">
                {translations.home.pillar2Title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {translations.home.pillar2Desc}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-graphite-900/70 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {translations.home.pillar3Title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {translations.home.pillar3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED WORK PREVIEW */}
      <section className="py-20 border-t border-white/10 bg-obsidian-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
                {translations.home.featuredBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
                {translations.home.featuredHeading}
              </h2>
            </div>
            <Link
              href="/projects"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>{translations.home.exploreAllProjects}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topProjects.map((project) => (
              <div
                key={project.id}
                className="p-8 rounded-3xl bg-graphite-900/90 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group shadow-card-dark hover:shadow-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-400/20">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>{translations.home.inspectDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-graphite-900 via-graphite-800 to-graphite-900 border border-white/15 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
                {translations.home.collabBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
                {translations.home.collabTitle}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                {translations.home.collabDesc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl shadow-glow-cyan transition-all duration-200"
              >
                <span>{translations.home.startConversation}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}