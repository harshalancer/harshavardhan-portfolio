'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, ArrowUp, Mail, MessageSquare, Phone } from 'lucide-react';
import { Language } from '../translations';

export const Footer: React.FC = () => {
  const { language, translations, setLanguage, availableLanguages } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-100 border-t border-slate-200/80 pt-16 pb-12 text-charcoal-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/70">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <span className="text-xl font-bold font-heading text-charcoal-900 tracking-tight block">
              {translations.footer.name}
            </span>
            <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mt-0.5 mb-3">
              {translations.footer.title}
            </span>
            <p className="text-sm text-charcoal-600 leading-relaxed max-w-sm mb-5">
              {translations.footer.tagline}
            </p>

            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-charcoal-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{translations.hero.availability}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-900 mb-4">
              {translations.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScrollTo(e, '#home')}
                  className="text-charcoal-600 hover:text-electric-600 transition-colors"
                >
                  {translations.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, '#services')}
                  className="text-charcoal-600 hover:text-electric-600 transition-colors"
                >
                  {translations.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => handleScrollTo(e, '#work')}
                  className="text-charcoal-600 hover:text-electric-600 transition-colors"
                >
                  {translations.nav.work}
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  onClick={(e) => handleScrollTo(e, '#technologies')}
                  className="text-charcoal-600 hover:text-electric-600 transition-colors"
                >
                  {translations.technologies.heading}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="text-charcoal-600 hover:text-electric-600 transition-colors"
                >
                  {translations.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Language Switcher & Contact Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-900 mb-4">
              {translations.nav.selectLanguage}
            </h4>

            {/* Language grid in footer */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {availableLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-2 text-xs rounded-xl text-left transition-all flex items-center justify-between border ${
                    language === lang.code
                      ? 'bg-white border-electric-600 text-electric-700 font-bold shadow-sm'
                      : 'bg-white/60 border-slate-200 text-charcoal-600 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <span>{lang.nativeName}</span>
                  <span className="text-[10px] text-charcoal-400 font-normal">
                    {lang.code.toUpperCase()}
                  </span>
                </button>
              ))}
            </div>

            {/* Contact quick links */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/916385386500"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-emerald-600 hover:text-emerald-700 hover:border-emerald-300 flex items-center justify-center transition-colors shadow-subtle"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:harshavardhan1527@gmail.com"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-charcoal-700 hover:text-electric-600 hover:border-electric-300 flex items-center justify-center transition-colors shadow-subtle"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:916385386500"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-charcoal-700 hover:text-electric-600 hover:border-electric-300 flex items-center justify-center transition-colors shadow-subtle"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
          <p>
            © {currentYear} Harshavardhan. {translations.footer.rights}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-charcoal-700 font-medium transition-colors shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600"
          >
            <span>{translations.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-electric-600" />
          </button>
        </div>
      </div>
    </footer>
  );
};
