'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { Language } from '../translations';

export const Navbar: React.FC = () => {
  const { language, translations, setLanguage, availableLanguages } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setLangDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { href: '#home', label: translations.nav.home },
    { href: '#services', label: translations.nav.services },
    { href: '#work', label: translations.nav.work },
    { href: '#contact', label: translations.nav.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (code: Language) => {
    setLanguage(code);
    setLangDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-slate-200/80 py-3'
          : 'bg-warm-50/90 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600 rounded-lg p-1"
          >
            <span className="text-xl font-bold font-heading text-charcoal-900 tracking-tight group-hover:text-electric-600 transition-colors">
              Harshavardhan
            </span>
            <span className="text-xs font-medium text-charcoal-500 tracking-normal">
              {translations.hero.title}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-charcoal-700 hover:text-electric-600 hover:bg-slate-100/70 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right: Language Selector & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-charcoal-700 bg-white border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600"
                aria-expanded={langDropdownOpen}
                aria-haspopup="listbox"
                aria-label={translations.nav.selectLanguage}
              >
                <Globe className="w-4 h-4 text-electric-600" />
                <span className="font-semibold text-charcoal-900">
                  {availableLanguages.find((l) => l.code === language)?.nativeName}
                </span>
                <span className="text-xs text-charcoal-400">▼</span>
              </button>

              {langDropdownOpen && (
                <div
                  className="absolute right-0 mt-1.5 w-44 bg-white rounded-xl shadow-cardHover border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="listbox"
                  aria-label={translations.nav.selectLanguage}
                >
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      role="option"
                      aria-selected={language === lang.code}
                      className={`w-full text-left px-3.5 py-2 text-sm flex items-center justify-between hover:bg-electric-50 transition-colors ${
                        language === lang.code
                          ? 'text-electric-600 font-semibold bg-electric-50/60'
                          : 'text-charcoal-700'
                      }`}
                    >
                      <span>{lang.nativeName}</span>
                      <span className="text-xs text-charcoal-400 font-normal">
                        {lang.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-electric-600 hover:bg-electric-700 rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600 focus-visible:ring-offset-2 active:scale-98"
            >
              <span>{translations.nav.ctaButton}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Right Controls: Mobile Language Button & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Quick Language Toggle on Mobile */}
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-charcoal-800 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600"
              aria-label={translations.nav.selectLanguage}
            >
              <Globe className="w-3.5 h-3.5 text-electric-600" />
              <span>{availableLanguages.find((l) => l.code === language)?.nativeName}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal-700 hover:text-charcoal-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? translations.nav.menuClose : translations.nav.menuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Language Popover if opened from mobile header */}
        {langDropdownOpen && (
          <div className="md:hidden mt-2 p-2 bg-white rounded-xl shadow-cardHover border border-slate-200 grid grid-cols-2 gap-1.5">
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`text-left px-3 py-2 text-xs rounded-lg transition-colors flex items-center justify-between ${
                  language === lang.code
                    ? 'bg-electric-50 text-electric-700 font-bold border border-electric-200'
                    : 'bg-slate-50 text-charcoal-700 hover:bg-slate-100'
                }`}
              >
                <span>{lang.nativeName}</span>
                <span className="text-[10px] text-charcoal-400">{lang.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-200 bg-white/95 rounded-2xl p-4 shadow-card border">
            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-base font-medium text-charcoal-800 hover:bg-slate-50 hover:text-electric-600 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2">
                {translations.nav.selectLanguage}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`px-3 py-2 text-xs rounded-lg text-left transition-colors flex items-center justify-between ${
                      language === lang.code
                        ? 'bg-electric-600 text-white font-semibold shadow-sm'
                        : 'bg-slate-100 text-charcoal-700 hover:bg-slate-200'
                    }`}
                  >
                    <span>{lang.nativeName}</span>
                    <span className={`text-[10px] ${language === lang.code ? 'text-electric-100' : 'text-charcoal-400'}`}>
                      {lang.code.toUpperCase()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-electric-600 hover:bg-electric-700 rounded-xl shadow-sm transition-colors"
              >
                <span>{translations.nav.ctaButton}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
