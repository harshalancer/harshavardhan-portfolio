'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Globe,
  ShoppingCart,
  Layers,
  Bot,
  Cpu,
  CalendarCheck,
  Palette,
  PackageCheck,
  Wrench,
  ArrowRight,
  Info,
} from 'lucide-react';

const serviceIcons: Record<string, React.ElementType> = {
  'business-websites': Globe,
  ecommerce: ShoppingCart,
  'full-stack': Layers,
  'ai-chatbots': Bot,
  'workflow-automation': Cpu,
  'booking-systems': CalendarCheck,
  'ui-ux-design': Palette,
  'inventory-billing': PackageCheck,
  'redesign-bugfixing': Wrench,
};

export const Services: React.FC = () => {
  const { translations } = useLanguage();

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-electric-600 mb-2 inline-block">
            {translations.nav.services}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-charcoal-900 tracking-tight mb-4">
            {translations.services.heading}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            {translations.services.subheading}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {translations.services.items.map((service) => {
            const Icon = serviceIcons[service.id] || Globe;
            const isHighlighted = service.highlight;

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between ${
                  isHighlighted
                    ? 'bg-gradient-to-br from-electric-50/70 to-slate-50 border-2 border-electric-300 shadow-cardHover md:col-span-2 lg:col-span-3'
                    : 'bg-warm-50/70 hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-subtle hover:shadow-card'
                }`}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        isHighlighted
                          ? 'bg-electric-600 text-white shadow-sm'
                          : 'bg-white border border-slate-200 text-electric-600 shadow-subtle'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {service.tag && (
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          isHighlighted
                            ? 'bg-electric-600 text-white'
                            : 'bg-slate-100 text-charcoal-600 border border-slate-200/60'
                        }`}
                      >
                        {service.tag}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-heading font-bold text-charcoal-900 mb-2.5 ${
                      isHighlighted ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-charcoal-600 leading-relaxed ${
                      isHighlighted ? 'text-sm sm:text-base max-w-4xl' : 'text-sm'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Footer link to contact */}
                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <a
                    href="#contact"
                    onClick={handleScrollToContact}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-600 hover:text-electric-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600 rounded"
                  >
                    <span>Discuss requirement</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  {isHighlighted && (
                    <span className="text-xs text-charcoal-500 font-medium">
                      Fast turnaround & direct fixes
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Scope Note & Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-charcoal-500 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl leading-relaxed">
              {translations.services.disclaimer}
            </p>
          </div>

          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-charcoal-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl shadow-subtle transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600"
          >
            <span>{translations.services.customQuoteCta}</span>
            <ArrowRight className="w-4 h-4 text-electric-600" />
          </a>
        </div>
      </div>
    </section>
  );
};
