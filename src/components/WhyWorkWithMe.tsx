'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Wallet,
  Target,
  MessageCircle,
  BookOpenCheck,
  Smartphone,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const pointIcons = [
  Wallet,
  Target,
  MessageCircle,
  BookOpenCheck,
  Smartphone,
  ShieldCheck,
];

export const WhyWorkWithMe: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section id="why" className="py-20 md:py-28 bg-warm-50/80 border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-electric-600 mb-2 inline-block">
            Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-charcoal-900 tracking-tight mb-4">
            {translations.why.heading}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            {translations.why.subheading}
          </p>
        </div>

        {/* Featured Banner with Quote */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-charcoal-900 to-charcoal-800 text-white shadow-card relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-electric-600/20 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-electric-400 mb-2">
              Core Promise
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold font-heading leading-snug">
              “{translations.why.highlight}”
            </p>
          </div>
        </div>

        {/* Grid of 6 Genuine Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {translations.why.points.map((point, index) => {
            const Icon = pointIcons[index % pointIcons.length];

            return (
              <div
                key={point.title}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 border border-electric-100/80 flex items-center justify-center mb-4 shadow-subtle">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-charcoal-900 mb-2.5">
                    {point.title}
                  </h3>

                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
