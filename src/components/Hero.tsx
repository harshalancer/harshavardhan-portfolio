'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Sparkles, Terminal, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const { translations } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-warm-100 via-warm-50 to-warm-100"
    >
      {/* Subtle background atmospheric pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-subtle mb-6 animate-in fade-in duration-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-charcoal-700 tracking-tight">
                {translations.hero.availability}
              </span>
            </div>

            {/* Name and Professional Title */}
            <div className="mb-4">
              <p className="text-sm font-bold uppercase tracking-wider text-electric-600 mb-1">
                {translations.hero.name}
              </p>
              <p className="text-base sm:text-lg font-medium text-charcoal-600">
                {translations.hero.title}
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-charcoal-900 tracking-tight leading-[1.15] mb-5">
              {translations.hero.headline}
            </h1>

            {/* Supporting Message */}
            <p className="text-lg sm:text-xl font-medium text-charcoal-700 leading-relaxed mb-4">
              {translations.hero.supporting}
            </p>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed mb-6 max-w-2xl">
              {translations.hero.description}
            </p>

            {/* Concise Service Summary Pill */}
            <div className="inline-block px-3.5 py-1.5 bg-slate-100/90 border border-slate-200 text-charcoal-700 text-xs sm:text-sm font-medium rounded-lg mb-8">
              {translations.hero.summaryPill}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-electric-600 hover:bg-electric-700 rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600 focus-visible:ring-offset-2 active:scale-98"
              >
                <span>{translations.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, '#services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-charcoal-700 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-subtle transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600 active:scale-98"
              >
                <span>{translations.hero.secondaryCta}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Tasteful Visual Mockup */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-electric-100/60 to-slate-200/50 blur-xl -z-10" />

              {/* Window Container */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-cardHover overflow-hidden transition-all duration-300 hover:border-electric-200">
                {/* Browser Title Bar */}
                <div className="bg-slate-50/90 border-b border-slate-200/80 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-md text-[11px] text-charcoal-500 font-mono max-w-[200px] truncate">
                    <Terminal className="w-3 h-3 text-electric-600 shrink-0" />
                    <span>{translations.hero.visualCodeTitle}</span>
                  </div>
                  <div className="w-8" />
                </div>

                {/* Inner Window Mockup Content */}
                <div className="p-5 font-mono text-xs text-charcoal-700 space-y-4 bg-white">
                  {/* Code Snippet / Architectural Philosophy */}
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                    <p className="text-charcoal-400 text-[11px] mb-1.5">// Architectural Blueprint</p>
                    <p className="text-electric-600 font-semibold">
                      const <span className="text-charcoal-900">projectGoal</span> = &#123;
                    </p>
                    <div className="pl-4 space-y-1 my-1 text-charcoal-600 text-[11px]">
                      <p>performance: <span className="text-emerald-600">&apos;sub-second-load&apos;</span>,</p>
                      <p>accessibility: <span className="text-emerald-600">&apos;WCAG-compliant&apos;</span>,</p>
                      <p>budgetFriendly: <span className="text-electric-600">true</span>,</p>
                      <p>tailoredFor: <span className="text-amber-700">&apos;your-business-needs&apos;</span></p>
                    </div>
                    <p className="text-electric-600 font-semibold">&#125;;</p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                      <Zap className="w-4 h-4 text-electric-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] font-bold text-charcoal-800">Clean & Fast</p>
                        <p className="text-[10px] text-charcoal-500 font-sans">Optimized delivery</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] font-bold text-charcoal-800">Reliable Code</p>
                        <p className="text-[10px] text-charcoal-500 font-sans">Zero unnecessary bloat</p>
                      </div>
                    </div>
                  </div>

                  {/* Live Status Row */}
                  <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px] text-charcoal-500 font-sans">
                    <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Direct collaboration
                    </span>
                    <span className="text-charcoal-400">No agency overhead</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
