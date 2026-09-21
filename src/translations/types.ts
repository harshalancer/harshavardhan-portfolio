export type Language = 'en' | 'ta' | 'hi' | 'ml';

export interface LanguageMeta {
  code: Language;
  name: string;
  nativeName: string;
}

export interface ServiceDetailTranslation {
  id: string;
  title: string;
  tag: string;
  summary: string;
  deliverables: string[];
}

export interface ProjectDetailTranslation {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
}

export interface Translations {
  nav: {
    home: string;
    services: string;
    work: string;
    contact: string;
    discussProject: string;
    selectLanguage: string;
    openMenu: string;
    closeMenu: string;
    softwareAndAi: string;
  };
  home: {
    availability: string;
    title: string;
    intro: string;
    exploreWork: string;
    getInTouch: string;
    coreFocus: string;
    pillarsBadge: string;
    pillarsHeading: string;
    viewDetailedServices: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    featuredBadge: string;
    featuredHeading: string;
    exploreAllProjects: string;
    inspectDetails: string;
    collabBadge: string;
    collabTitle: string;
    collabDesc: string;
    startConversation: string;
  };
  services: {
    badge: string;
    heading: string;
    subheading: string;
    keyDeliverables: string;
    discussScope: string;
    scopingBadge: string;
    scopingText: string;
    requestQuote: string;
    items: ServiceDetailTranslation[];
  };
  projects: {
    badge: string;
    heading: string;
    subheading: string;
    architecturalHighlights: string;
    sourceCode: string;
    livePreview: string;
    verifiedWork: string;
    collabHeading: string;
    collabText: string;
    startDiscussion: string;
    items: ProjectDetailTranslation[];
  };
  contact: {
    badge: string;
    heading: string;
    subheading: string;
    channelsTitle: string;
    whatsappLabel: string;
    whatsappSub: string;
    emailLabel: string;
    emailSub: string;
    phoneLabel: string;
    phoneSub: string;
    githubLabel: string;
    githubSub: string;
    privacyNote: string;
    formTitle: string;
    formSub: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    descLabel: string;
    descPlaceholder: string;
    submitButton: string;
    directPrivacyNote: string;
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
    editDetails: string;
    whatsappPrefill: string;
    serviceOptions: {
      fullstack: string;
      frontend: string;
      uiux: string;
      ai: string;
      redesign: string;
      robotics: string;
      other: string;
    };
  };
  footer: {
    title: string;
    tagline: string;
    availableBadge: string;
    navigationHeader: string;
    directReachHeader: string;
    rights: string;
    backToTop: string;
  };
}