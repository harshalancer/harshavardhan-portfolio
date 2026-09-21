export type Language = 'en' | 'ta' | 'ml' | 'hi';

export interface LanguageMeta {
  code: Language;
  name: string;
  nativeName: string;
  dir?: 'ltr' | 'rtl';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tag?: string;
  highlight?: boolean;
}

export interface WhyPoint {
  title: string;
  description: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    home: string;
    services: string;
    work: string;
    contact: string;
    ctaButton: string;
    selectLanguage: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    name: string;
    title: string;
    availability: string;
    headline: string;
    supporting: string;
    description: string;
    summaryPill: string;
    primaryCta: string;
    secondaryCta: string;
    visualCodeTitle: string;
  };
  services: {
    heading: string;
    subheading: string;
    disclaimer: string;
    customQuoteCta: string;
    items: ServiceItem[];
  };
  work: {
    heading: string;
    subheading: string;
    emptyTitle: string;
    emptyDescription: string;
    emptyCta: string;
  };
  technologies: {
    heading: string;
    subheading: string;
    categories: {
      frontend: string;
      backend: string;
      cloudDb: string;
      aiAutomation: string;
      tools: string;
    };
  };
  why: {
    heading: string;
    subheading: string;
    highlight: string;
    points: WhyPoint[];
  };
  contact: {
    heading: string;
    subheading: string;
    directTitle: string;
    whatsappLabel: string;
    phoneLabel: string;
    emailLabel: string;
    whatsappPrefill: string;
    chatOnWhatsapp: string;
    form: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      contactLabel: string;
      contactPlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      descLabel: string;
      descPlaceholder: string;
      submitButton: string;
      submitWhatsapp: string;
      submitEmail: string;
      privacyNote: string;
      errors: {
        nameRequired: string;
        contactRequired: string;
        serviceRequired: string;
        descRequired: string;
      };
      successHeading: string;
      successMessage: string;
      sendViaWhatsapp: string;
      sendViaEmail: string;
      reset: string;
    };
  };
  footer: {
    name: string;
    title: string;
    tagline: string;
    quickLinks: string;
    contactInfo: string;
    rights: string;
    backToTop: string;
  };
}
