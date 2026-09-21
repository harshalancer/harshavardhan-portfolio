'use client';

import React, { useState } from 'react';
import {
  MessageSquare,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import { GithubIcon } from '../../components/icons/GithubIcon';
import { useLanguage } from '../../context/LanguageContext';

interface FormState {
  name: string;
  contact: string;
  service: string;
  description: string;
}

interface FormErrors {
  name?: string;
  contact?: string;
  service?: string;
  description?: string;
}

export default function ContactPage() {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    contact: '',
    service: '',
    description: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const rawPhone = '916385386500';
  const displayPhone = '+91 6385386500';
  const emailAddress = 'harshavardhan1527@gmail.com';
  const githubUrl = 'https://github.com/harshalancer';

  const defaultWhatsappUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
    translations.contact.whatsappPrefill
  )}`;

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = translations.contact.errors.nameRequired;
    if (!formData.contact.trim()) errs.contact = translations.contact.errors.contactRequired;
    if (!formData.service) errs.service = translations.contact.errors.serviceRequired;
    if (!formData.description.trim()) errs.description = translations.contact.errors.descRequired;

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const formattedMessage = `Hi Harsha,\n\nI visited your website and would like to discuss a project:\n\n• Name: ${formData.name}\n• Contact: ${formData.contact}\n• Service: ${formData.service}\n• Project Details: ${formData.description}\n\nLooking forward to speaking with you.`;

  const getWhatsappUrl = () => {
    return `https://wa.me/${rawPhone}?text=${encodeURIComponent(formattedMessage)}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Discussion: ${formData.service} (${formData.name})`);
    const body = encodeURIComponent(formattedMessage);
    return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
            {translations.contact.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight mb-4">
            {translations.contact.heading}
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            {translations.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-base font-mono font-bold uppercase tracking-wider text-slate-300 mb-4">
              {translations.contact.channelsTitle}
            </h2>

            {/* WhatsApp Card */}
            <a
              href={defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-graphite-900/80 hover:bg-graphite-800 border border-emerald-500/30 hover:border-emerald-500/60 shadow-card-dark transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-whatsapp/20 text-whatsapp flex items-center justify-center shrink-0 border border-whatsapp/30 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                    {translations.contact.whatsappLabel}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
                </div>
                <p className="text-base font-bold text-white mt-0.5">{displayPhone}</p>
                <p className="text-xs text-slate-400 mt-1">{translations.contact.whatsappSub}</p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${emailAddress}`}
              className="p-5 rounded-2xl bg-graphite-900/80 hover:bg-graphite-800 border border-cyan-500/30 hover:border-cyan-500/60 shadow-card-dark transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                    {translations.contact.emailLabel}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                </div>
                <p className="text-base font-bold text-white mt-0.5 truncate">{emailAddress}</p>
                <p className="text-xs text-slate-400 mt-1">{translations.contact.emailSub}</p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${rawPhone}`}
              className="p-5 rounded-2xl bg-graphite-900/80 hover:bg-graphite-800 border border-violet-500/30 hover:border-violet-500/60 shadow-card-dark transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 text-violet-400 flex items-center justify-center shrink-0 border border-violet-500/30 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400">
                    {translations.contact.phoneLabel}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400" />
                </div>
                <p className="text-base font-bold text-white mt-0.5">{displayPhone}</p>
                <p className="text-xs text-slate-400 mt-1">{translations.contact.phoneSub}</p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-graphite-900/80 hover:bg-graphite-800 border border-white/10 hover:border-white/30 shadow-card-dark transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/15 group-hover:scale-105 transition-transform">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                    {translations.contact.githubLabel}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
                </div>
                <p className="text-base font-bold text-white mt-0.5">github.com/harshalancer</p>
                <p className="text-xs text-slate-400 mt-1">{translations.contact.githubSub}</p>
              </div>
            </a>

            <div className="p-4 rounded-xl bg-graphite-900/40 border border-white/5 text-xs text-slate-400 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{translations.contact.privacyNote}</span>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-graphite-900/90 border border-white/10 shadow-card-dark">
              <h2 className="text-xl font-heading font-bold text-white mb-2">
                {translations.contact.formTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                {translations.contact.formSub}
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      {translations.contact.nameLabel} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder={translations.contact.namePlaceholder}
                      className={`w-full px-4 py-3 text-sm bg-obsidian-950/80 rounded-xl border text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500/20'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-400/20'
                      }`}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email / Phone */}
                  <div>
                    <label htmlFor="contact-info" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      {translations.contact.contactLabel} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-info"
                      type="text"
                      value={formData.contact}
                      onChange={(e) => {
                        setFormData({ ...formData, contact: e.target.value });
                        if (errors.contact) setErrors({ ...errors, contact: undefined });
                      }}
                      placeholder={translations.contact.contactPlaceholder}
                      className={`w-full px-4 py-3 text-sm bg-obsidian-950/80 rounded-xl border text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 ${
                        errors.contact
                          ? 'border-rose-500 focus:ring-rose-500/20'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-400/20'
                      }`}
                      aria-invalid={!!errors.contact}
                    />
                    {errors.contact && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.contact}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      {translations.contact.serviceLabel} <span className="text-rose-400">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => {
                        setFormData({ ...formData, service: e.target.value });
                        if (errors.service) setErrors({ ...errors, service: undefined });
                      }}
                      className={`w-full px-4 py-3 text-sm bg-obsidian-950/80 rounded-xl border text-white focus:outline-none focus:ring-2 ${
                        errors.service
                          ? 'border-rose-500 focus:ring-rose-500/20'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-400/20'
                      }`}
                      aria-invalid={!!errors.service}
                    >
                      <option value="">{translations.contact.servicePlaceholder}</option>
                      <option value={translations.contact.serviceOptions.fullstack}>{translations.contact.serviceOptions.fullstack}</option>
                      <option value={translations.contact.serviceOptions.frontend}>{translations.contact.serviceOptions.frontend}</option>
                      <option value={translations.contact.serviceOptions.uiux}>{translations.contact.serviceOptions.uiux}</option>
                      <option value={translations.contact.serviceOptions.ai}>{translations.contact.serviceOptions.ai}</option>
                      <option value={translations.contact.serviceOptions.redesign}>{translations.contact.serviceOptions.redesign}</option>
                      <option value={translations.contact.serviceOptions.robotics}>{translations.contact.serviceOptions.robotics}</option>
                      <option value={translations.contact.serviceOptions.other}>{translations.contact.serviceOptions.other}</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      {translations.contact.descLabel} <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => {
                        setFormData({ ...formData, description: e.target.value });
                        if (errors.description) setErrors({ ...errors, description: undefined });
                      }}
                      placeholder={translations.contact.descPlaceholder}
                      className={`w-full px-4 py-3 text-sm bg-obsidian-950/80 rounded-xl border text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 ${
                        errors.description
                          ? 'border-rose-500 focus:ring-rose-500/20'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-400/20'
                      }`}
                      aria-invalid={!!errors.description}
                    />
                    {errors.description && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl shadow-glow-cyan transition-all active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>{translations.contact.submitButton}</span>
                    </button>
                    <p className="text-[11px] font-mono text-slate-500 text-center mt-2.5">
                      {translations.contact.directPrivacyNote}
                    </p>
                  </div>
                </form>
              ) : (
                /* Prepared message state */
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-white">
                        {translations.contact.successHeading}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {translations.contact.successMessage}
                      </p>
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl bg-obsidian-950 border border-white/10 text-xs font-mono text-slate-300 space-y-1">
                    <p><span className="text-slate-500">Name:</span> {formData.name}</p>
                    <p><span className="text-slate-500">Contact:</span> {formData.contact}</p>
                    <p><span className="text-slate-500">Service:</span> {formData.service}</p>
                    <p className="pt-1 text-slate-400 font-sans italic line-clamp-3">
                      &quot;{formData.description}&quot;
                    </p>
                  </div>

                  {/* Dispatch triggers */}
                  <div className="flex flex-col gap-3">
                    <a
                      href={getWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider text-white bg-whatsapp hover:bg-whatsapp-hover rounded-xl shadow-lg transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{translations.contact.sendViaWhatsapp}</span>
                    </a>

                    <a
                      href={getMailtoUrl()}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-200 bg-graphite-800 hover:bg-graphite-700 border border-white/10 rounded-xl transition-all"
                    >
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span>{translations.contact.sendViaEmail}</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-300 pt-2 transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{translations.contact.editDetails}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}