import { en } from './en';
import { ta } from './ta';
import { ml } from './ml';
import { hi } from './hi';
import { Language, LanguageMeta, Translations } from './types';

export * from './types';

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
];

export const translations: Record<Language, Translations> = {
  en,
  ta,
  ml,
  hi,
};

export const DEFAULT_LANGUAGE: Language = 'en';

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations[DEFAULT_LANGUAGE];
}
