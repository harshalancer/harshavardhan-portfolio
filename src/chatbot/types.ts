export type SupportedLanguage = 'en' | 'ta' | 'hi' | 'ml';

export interface ActionButton {
  label: Record<SupportedLanguage, string>;
  url: string;
  isExternal?: boolean;
}

export interface FAQItem {
  id: string;
  category:
    | 'about'
    | 'services'
    | 'pipeline_robot'
    | 'projects'
    | 'skills'
    | 'pricing'
    | 'contact'
    | 'workflow';
  // Multilingual answer text
  answer: Record<SupportedLanguage, string>;
  // Multilingual keywords and trigger phrases
  keywords: {
    en: string[];
    ta: string[];
    hi: string[];
    ml: string[];
  };
  // Optional button attached to the response (e.g., "Contact Page", "View Projects")
  action?: ActionButton;
  // Follow-up suggested question query strings (multilingual)
  followUps?: Record<SupportedLanguage, string[]>;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: number;
  action?: {
    label: string;
    url: string;
    isExternal?: boolean;
  };
  suggestions?: string[];
  isFallback?: boolean;
}

export interface MatchResult {
  faq: FAQItem | null;
  confidence: number;
  matchedCategory?: string;
}
