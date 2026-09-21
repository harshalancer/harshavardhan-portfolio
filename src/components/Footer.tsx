'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquare, Mail, Phone, ArrowUpRight, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { translations } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian-950 border-t border-white/10 pt-16 pb-12 text-slate-400 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Signature Column */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block group mb-3">
              <span className="font-heading font-black text-xl text-white tracking-wider group-hover:text-cyan-300 transition-colors">
                HARSHA
              </span>
              <span className="block text-xs uppercase font-mono tracking-widest text-cyan-400">
                {translations.footer.title}
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              {translations.footer.tagline}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-graphite-900 border border-white/10 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{translations.footer.availableBadge}</span>
            </div>
          </div>

          {/* Quick Pages Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4 font-mono">
              {translations.footer.navigationHeader}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-300 transition-colors">
                  {translations.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors">
                  {translations.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyan-300 transition-colors">
                  {translations.nav.work}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors">
                  {translations.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Communication Channels */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4 font-mono">
              {translations.footer.directReachHeader}
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`https://wa.me/916385386500?text=${encodeURIComponent(translations.contact.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-graphite-900/60 border border-white/5 hover:border-emerald-500/40 hover:bg-graphite-800 transition-all text-slate-300 hover:text-white group"
              >
                <div className="w-8 h-8 rounded-lg bg-whatsapp/15 text-whatsapp flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="block text-[11px] text-slate-500 font-mono">WHATSAPP</span>
                  <span className="font-semibold text-xs">+91 6385386500</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-whatsapp transition-colors" />
              </a>

              <a
                href="mailto:harshavardhan1527@gmail.com"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-graphite-900/60 border border-white/5 hover:border-cyan-500/40 hover:bg-graphite-800 transition-all text-slate-300 hover:text-white group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="block text-[11px] text-slate-500 font-mono">EMAIL</span>
                  <span className="font-semibold text-xs truncate">harshavardhan1527@gmail.com</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href="tel:916385386500"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-graphite-900/60 border border-white/5 hover:border-violet-500/40 hover:bg-graphite-800 transition-all text-slate-300 hover:text-white group"
              >
                <div className="w-8 h-8 rounded-lg bg-violet-500/15 text-violet-400 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="block text-[11px] text-slate-500 font-mono">PHONE</span>
                  <span className="font-semibold text-xs">+91 6385386500</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Harsha. {translations.footer.rights}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-graphite-900 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>{translations.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};