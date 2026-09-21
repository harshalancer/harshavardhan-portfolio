'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  MessageSquare,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';

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

export const Contact: React.FC = () => {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    contact: '',
    service: '',
    description: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isPrepared, setIsPrepared] = useState(false);

  const rawPhone = '916385386500';
  const displayPhone = '+91 6385386500';
  const emailAddress = 'harshavardhan1527@gmail.com';

  const defaultWhatsappUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
    translations.contact.whatsappPrefill
  )}`;

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = translations.contact.form.errors.nameRequired;
    }
    if (!formData.contact.trim()) {
      errs.contact = translations.contact.form.errors.contactRequired;
    }
    if (!formData.service) {
      errs.service = translations.contact.form.errors.serviceRequired;
    }
    if (!formData.description.trim()) {
      errs.description = translations.contact.form.errors.descRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsPrepared(true);
    }
  };

  const getFormattedMessage = () => {
    return `Hi Harshavardhan,\n\nI visited your website and would like to discuss a project:\n\n• Name: ${formData.name}\n• Contact: ${formData.contact}\n• Service: ${formData.service}\n• Project Details: ${formData.description}\n\nLooking forward to speaking with you.`;
  };

  const getFormWhatsappUrl = () => {
    return `https://wa.me/${rawPhone}?text=${encodeURIComponent(getFormattedMessage())}`;
  };

  const getFormMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Enquiry: ${formData.service || 'Web Development'} - from ${formData.name}`);
    const body = encodeURIComponent(getFormattedMessage());
    return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-electric-600 mb-2 inline-block">
            {translations.nav.contact}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-charcoal-900 tracking-tight mb-4">
            {translations.contact.heading}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            {translations.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold font-heading text-charcoal-900 mb-4">
              {translations.contact.directTitle}
            </h3>

            {/* WhatsApp Card - Dedicated Green Styling */}
            <a
              href={defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-emerald-50/70 hover:bg-emerald-50 border border-emerald-200/90 shadow-subtle hover:shadow-card transition-all flex items-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <div className="w-12 h-12 rounded-xl bg-whatsapp text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    {translations.contact.whatsappLabel}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-700 opacity-60 group-hover:opacity-100" />
                </div>
                <p className="text-base font-bold text-charcoal-900 mt-0.5">{displayPhone}</p>
                <p className="text-xs text-emerald-700 mt-1 font-medium">
                  {translations.contact.chatOnWhatsapp}
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${emailAddress}`}
              className="group p-5 rounded-2xl bg-warm-50/80 hover:bg-white border border-slate-200/90 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all flex items-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-electric-600 flex items-center justify-center shrink-0 shadow-subtle group-hover:border-electric-300 group-hover:scale-105 transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500">
                    {translations.contact.emailLabel}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-charcoal-400 group-hover:text-electric-600" />
                </div>
                <p className="text-base font-bold text-charcoal-900 mt-0.5 truncate">
                  {emailAddress}
                </p>
                <p className="text-xs text-charcoal-500 mt-1">Direct inbox, answered promptly</p>
              </div>
            </a>

            {/* Phone Call Card */}
            <a
              href={`tel:${rawPhone}`}
              className="group p-5 rounded-2xl bg-warm-50/80 hover:bg-white border border-slate-200/90 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all flex items-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-electric-600 flex items-center justify-center shrink-0 shadow-subtle group-hover:border-electric-300 group-hover:scale-105 transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500">
                    {translations.contact.phoneLabel}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-charcoal-400 group-hover:text-electric-600" />
                </div>
                <p className="text-base font-bold text-charcoal-900 mt-0.5">{displayPhone}</p>
                <p className="text-xs text-charcoal-500 mt-1">Available for project calls</p>
              </div>
            </a>

            {/* Understated Note */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-charcoal-600 leading-relaxed flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                All inquiries reach Harshavardhan directly. No bots, sales agents, or automated marketing funnels.
              </span>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-warm-50/60 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
              <h3 className="text-xl font-bold font-heading text-charcoal-900 mb-2">
                {translations.contact.form.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 mb-6">
                Fill in your project requirements below to formulate an enquiry.
              </p>

              {!isPrepared ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5"
                    >
                      {translations.contact.form.nameLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder={translations.contact.form.namePlaceholder}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border transition-colors focus:outline-none focus:ring-2 text-charcoal-900 placeholder:text-charcoal-400 ${
                        errors.name
                          ? 'border-rose-400 focus:ring-rose-500/20'
                          : 'border-slate-200 focus:border-electric-600 focus:ring-electric-600/20'
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email / Phone Field */}
                  <div>
                    <label
                      htmlFor="form-contact"
                      className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5"
                    >
                      {translations.contact.form.contactLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-contact"
                      type="text"
                      value={formData.contact}
                      onChange={(e) => {
                        setFormData({ ...formData, contact: e.target.value });
                        if (errors.contact) setErrors({ ...errors, contact: undefined });
                      }}
                      placeholder={translations.contact.form.contactPlaceholder}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border transition-colors focus:outline-none focus:ring-2 text-charcoal-900 placeholder:text-charcoal-400 ${
                        errors.contact
                          ? 'border-rose-400 focus:ring-rose-500/20'
                          : 'border-slate-200 focus:border-electric-600 focus:ring-electric-600/20'
                      }`}
                      aria-invalid={!!errors.contact}
                      aria-describedby={errors.contact ? 'contact-error' : undefined}
                    />
                    {errors.contact && (
                      <p id="contact-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.contact}
                      </p>
                    )}
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label
                      htmlFor="form-service"
                      className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5"
                    >
                      {translations.contact.form.serviceLabel} <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="form-service"
                      value={formData.service}
                      onChange={(e) => {
                        setFormData({ ...formData, service: e.target.value });
                        if (errors.service) setErrors({ ...errors, service: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border transition-colors focus:outline-none focus:ring-2 text-charcoal-900 ${
                        errors.service
                          ? 'border-rose-400 focus:ring-rose-500/20'
                          : 'border-slate-200 focus:border-electric-600 focus:ring-electric-600/20'
                      }`}
                      aria-invalid={!!errors.service}
                      aria-describedby={errors.service ? 'service-error' : undefined}
                    >
                      <option value="">{translations.contact.form.servicePlaceholder}</option>
                      {translations.services.items.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                      <option value="Other / Custom Consultation">Other / General Consultation</option>
                    </select>
                    {errors.service && (
                      <p id="service-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Project Description Field */}
                  <div>
                    <label
                      htmlFor="form-desc"
                      className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5"
                    >
                      {translations.contact.form.descLabel} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="form-desc"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => {
                        setFormData({ ...formData, description: e.target.value });
                        if (errors.description) setErrors({ ...errors, description: undefined });
                      }}
                      placeholder={translations.contact.form.descPlaceholder}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border transition-colors focus:outline-none focus:ring-2 text-charcoal-900 placeholder:text-charcoal-400 ${
                        errors.description
                          ? 'border-rose-400 focus:ring-rose-500/20'
                          : 'border-slate-200 focus:border-electric-600 focus:ring-electric-600/20'
                      }`}
                      aria-invalid={!!errors.description}
                      aria-describedby={errors.description ? 'desc-error' : undefined}
                    />
                    {errors.description && (
                      <p id="desc-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-electric-600 hover:bg-electric-700 rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600 active:scale-98"
                    >
                      <Send className="w-4 h-4" />
                      <span>{translations.contact.form.submitButton}</span>
                    </button>
                    <p className="text-[11px] text-charcoal-400 text-center mt-2.5">
                      {translations.contact.form.privacyNote}
                    </p>
                  </div>
                </form>
              ) : (
                /* Honest prepared action state allowing direct send via WhatsApp or Email */
                <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-subtle space-y-5 animate-in fade-in duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-charcoal-900">
                        {translations.contact.form.successHeading}
                      </h4>
                      <p className="text-xs text-charcoal-500">
                        {translations.contact.form.successMessage}
                      </p>
                    </div>
                  </div>

                  {/* Formatted summary preview */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-charcoal-700 space-y-1 font-mono">
                    <p>
                      <span className="text-charcoal-400">Name:</span> {formData.name}
                    </p>
                    <p>
                      <span className="text-charcoal-400">Contact:</span> {formData.contact}
                    </p>
                    <p>
                      <span className="text-charcoal-400">Service:</span> {formData.service}
                    </p>
                    <p className="pt-1 text-charcoal-600 font-sans italic line-clamp-3">
                      &quot;{formData.description}&quot;
                    </p>
                  </div>

                  {/* Dispatch Options */}
                  <div className="flex flex-col gap-3">
                    <a
                      href={getFormWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-whatsapp hover:bg-whatsapp-hover rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{translations.contact.form.sendViaWhatsapp}</span>
                    </a>

                    <a
                      href={getFormMailtoUrl()}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-charcoal-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-600"
                    >
                      <Mail className="w-4 h-4 text-electric-600" />
                      <span>{translations.contact.form.sendViaEmail}</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsPrepared(false)}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs text-charcoal-500 hover:text-charcoal-800 pt-2 transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>{translations.contact.form.reset}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
