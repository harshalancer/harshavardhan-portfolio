import { FAQ_ITEMS, FALLBACK_RESPONSES, CHATBOT_UI } from './knowledgeBase';
import { FAQItem, MatchResult, SupportedLanguage } from './types';

/**
 * Normalizes input string: lowercase, trims whitespace, removes non-letter/digit/space punctuation
 * Supports Indic Unicode blocks (Tamil \u0B80-\u0BFF, Devanagari \u0900-\u097F, Malayalam \u0D00-\u0D7F).
 */
export function normalizeQuery(query: string): string {
  return query
    .toLowerCase()
    .replace(/[^\w\s\u0B80-\u0BFF\u0900-\u097F\u0D00-\u0D7F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const STOP_WORDS = new Set([
  'what',
  'is',
  'the',
  'of',
  'in',
  'and',
  'a',
  'an',
  'to',
  'for',
  'on',
  'with',
  'at',
  'by',
  'do',
  'you',
  'can',
  'are',
  'i',
  'my',
  'me',
  'it',
  'this',
  'that',
  'how',
  'tell',
  'about',
  'there',
  'their',
  'your',
]);

/**
 * Splits query into word tokens (length >= 2, or single characters for Indic scripts)
 */
export function tokenize(text: string): string[] {
  return text.split(' ').filter((w) => w.length > 0);
}

/**
 * Matches a user query against the local knowledge base.
 * Evaluates exact phrase matches, token overlaps, and category intent boosts.
 */
export function matchQuery(query: string, lang: SupportedLanguage = 'en'): MatchResult {
  const normalized = normalizeQuery(query);
  if (!normalized) {
    return { faq: null, confidence: 0 };
  }

  const queryTokens = tokenize(normalized);

  let bestFaq: FAQItem | null = null;
  let highestScore = 0;

  for (const item of FAQ_ITEMS) {
    let score = 0;

    // Collect keywords from the current language (weighted higher) and other languages
    const primaryKeywords = item.keywords[lang] || [];
    const allKeywords = [
      ...primaryKeywords.map((k) => ({ kw: normalizeQuery(k), weight: 1.5 })),
      ...Object.entries(item.keywords)
        .filter(([l]) => l !== lang)
        .flatMap(([, list]) => list.map((k) => ({ kw: normalizeQuery(k), weight: 1.0 }))),
    ];

    for (const { kw, weight } of allKeywords) {
      if (!kw || STOP_WORDS.has(kw)) continue;

      // 1. Exact phrase match: Query contains whole keyword phrase
      if (normalized === kw) {
        score += 20 * weight;
      } else if (normalized.includes(kw) && kw.length >= 3) {
        score += 12 * weight;
      } else if (kw.includes(normalized) && normalized.length >= 5) {
        score += 8 * weight;
      } else {
        // 2. Token overlap: Individual non-stop-word matching
        const kwTokens = tokenize(kw);
        let overlapCount = 0;

        for (const qToken of queryTokens) {
          if (qToken.length <= 1 || STOP_WORDS.has(qToken)) continue;
          if (kwTokens.includes(qToken)) {
            overlapCount++;
          }
        }

        if (overlapCount > 0) {
          score += overlapCount * 4 * weight;
        }
      }
    }

    // Category-specific heuristic boosts for critical terms
    if (
      item.category === 'pipeline_robot' &&
      (normalized.includes('robot') ||
        normalized.includes('pipeline') ||
        normalized.includes('ரோபோ') ||
        normalized.includes('பைப்லைன்') ||
        normalized.includes('रोबोट') ||
        normalized.includes('पाइपलाइन') ||
        normalized.includes('റോബോട്ട്') ||
        normalized.includes('പൈപ്പ്'))
    ) {
      score += 15;
    }

    if (
      item.category === 'contact' &&
      (normalized.includes('whatsapp') ||
        normalized.includes('phone') ||
        normalized.includes('email') ||
        normalized.includes('call') ||
        normalized.includes('contact') ||
        normalized.includes('hire') ||
        normalized.includes('வாட்ஸ்அப்') ||
        normalized.includes('தொடர்பு') ||
        normalized.includes('व्हाट्सएप') ||
        normalized.includes('संपर्क') ||
        normalized.includes('ഫോൺ') ||
        normalized.includes('ബന്ധപ്പെട'))
    ) {
      score += 15;
    }

    if (
      item.category === 'pricing' &&
      (normalized.includes('cost') ||
        normalized.includes('price') ||
        normalized.includes('charge') ||
        normalized.includes('budget') ||
        normalized.includes('fee') ||
        normalized.includes('rate') ||
        normalized.includes('விலை') ||
        normalized.includes('கட்டணம்') ||
        normalized.includes('फीस') ||
        normalized.includes('कीमत') ||
        normalized.includes('ചെലവ്') ||
        normalized.includes('ചെലവാ'))
    ) {
      score += 15;
    }

    if (
      item.category === 'services' &&
      (normalized.includes('service') ||
        normalized.includes('services') ||
        normalized.includes('web development') ||
        normalized.includes('frontend') ||
        normalized.includes('backend') ||
        normalized.includes('சேவை') ||
        normalized.includes('சேவைகள்') ||
        normalized.includes('सेवाएं') ||
        normalized.includes('सर्फिस') ||
        normalized.includes('സേവനങ്ങൾ'))
    ) {
      score += 12;
    }

    if (score > highestScore) {
      highestScore = score;
      bestFaq = item;
    }
  }

  // Minimum confidence threshold to avoid false positives
  const MATCH_THRESHOLD = 5;

  if (bestFaq && highestScore >= MATCH_THRESHOLD) {
    return {
      faq: bestFaq,
      confidence: highestScore,
      matchedCategory: bestFaq.category,
    };
  }

  return {
    faq: null,
    confidence: highestScore,
  };
}

/**
 * Helper to get the response string and action for a match result
 */
export function getBotResponse(
  result: MatchResult,
  lang: SupportedLanguage = 'en'
): {
  text: string;
  action?: { label: string; url: string; isExternal?: boolean };
  suggestions: string[];
  isFallback: boolean;
} {
  if (result.faq) {
    const text = result.faq.answer[lang] || result.faq.answer.en;
    const action = result.faq.action
      ? {
          label: result.faq.action.label[lang] || result.faq.action.label.en,
          url: result.faq.action.url,
          isExternal: result.faq.action.isExternal,
        }
      : undefined;

    const suggestions =
      result.faq.followUps?.[lang] ||
      result.faq.followUps?.en ||
      CHATBOT_UI[lang].starters.slice(0, 3);

    return {
      text,
      action,
      suggestions,
      isFallback: false,
    };
  }

  // Fallback
  return {
    text: FALLBACK_RESPONSES[lang] || FALLBACK_RESPONSES.en,
    action: {
      label: CHATBOT_UI[lang].contactButton || CHATBOT_UI.en.contactButton,
      url: '/contact',
    },
    suggestions: CHATBOT_UI[lang].starters.slice(0, 3),
    isFallback: true,
  };
}
