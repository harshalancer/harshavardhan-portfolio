'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
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

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
  }, [pathname]);

  // Close on Escape
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
    { href: '/', label: translations.nav.home },
    { href: '/services', label: translations.nav.services },
    { href: '/projects', label: translations.nav.work },
    { href: '/contact', label: translations.nav.contact },
  ];

  const handleLanguageSelect = (code: Language) => {
    setLanguage(code);
    setLangDropdownOpen(false);
  };

  const currentLangMeta = availableLanguages.find((l) => l.code === language) || availableLanguages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian-950/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-obsidian-950/40 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Signature */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
          >
            {/* 3D Geometric Monogram Icon */}
            <div className="relative w-9 h-9 rounded-xl bg-graphite-900 border border-white/15 flex items-center justify-center overflow-hidden group-hover:border-cyan-400/60 transition-all duration-300 group-hover:shadow-glow-cyan shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-violet-500/15" />
              <span className="relative font-heading font-extrabold text-sm text-white tracking-wider group-hover:text-cyan-400 transition-colors">
                H
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-black text-base sm:text-lg tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                HARSHA
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                {translations.nav.softwareAndAi}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-graphite-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold tracking-wider transition-all duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm border border-cyan-400/40'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-glow-cyan" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Controls: Language Selector Dropdown & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Clearly Visible Language Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-200 bg-graphite-900/90 border border-white/15 rounded-xl hover:border-cyan-400/50 hover:bg-graphite-800 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-expanded={langDropdownOpen}
                aria-haspopup="listbox"
                aria-label={translations.nav.selectLanguage}
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-medium text-white">{currentLangMeta.nativeName}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-44 bg-graphite-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/15 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="listbox"
                  aria-label={translations.nav.selectLanguage}
                >
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      role="option"
                      aria-selected={language === lang.code}
                      className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between hover:bg-white/5 transition-colors ${
                        language === lang.code
                          ? 'text-cyan-300 font-bold bg-cyan-500/10 border-l-2 border-cyan-400'
                          : 'text-slate-300'
                      }`}
                    >
                      <span className="text-sm font-medium">{lang.nativeName}</span>
                      <span className="text-[10px] text-slate-500 font-mono uppercase">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow-glow-cyan transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>{translations.nav.discussProject}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Right Controls: Mobile Language Trigger & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Quick Mobile Language Toggle Button */}
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-white bg-graphite-900 border border-white/15 rounded-lg hover:border-cyan-400/40"
              aria-label={translations.nav.selectLanguage}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentLangMeta.nativeName}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-graphite-900 border border-white/10 text-slate-200 hover:text-white hover:border-cyan-400/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={mobileMenuOpen ? translations.nav.closeMenu : translations.nav.openMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Language Popover */}
        {langDropdownOpen && (
          <div className="md:hidden mt-3 p-2 bg-graphite-900/95 border border-white/15 rounded-2xl shadow-2xl backdrop-blur-xl grid grid-cols-2 gap-1.5 animate-in fade-in duration-150">
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`text-left px-3 py-2.5 text-xs rounded-xl transition-all flex items-center justify-between ${
                  language === lang.code
                    ? 'bg-cyan-500/15 text-cyan-300 font-bold border border-cyan-400/30'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                <span className="font-medium text-sm">{lang.nativeName}</span>
                <span className="text-[10px] text-slate-500 font-mono uppercase">{lang.code}</span>
              </button>
            ))}
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-obsidian-900/95 border border-white/15 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-wider transition-all ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-glow-cyan" />}
                  </Link>
                );
              })}
            </nav>

            {/* Language Selector Inside Mobile Menu */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                {translations.nav.selectLanguage}:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`px-3 py-2 text-xs rounded-xl flex items-center justify-between transition-all ${
                      language === lang.code
                        ? 'bg-cyan-600 text-white font-bold shadow-glow-cyan'
                        : 'bg-graphite-900 text-slate-300 hover:bg-graphite-800 border border-white/5'
                    }`}
                  >
                    <span className="text-sm font-medium">{lang.nativeName}</span>
                    <span className="text-[10px] font-mono opacity-60 uppercase">{lang.code}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 shadow-glow-cyan transition-colors"
              >
                <span>{translations.nav.discussProject}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};