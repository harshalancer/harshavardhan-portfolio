'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { matchQuery, getBotResponse } from '../chatbot/matcher';
import { CHATBOT_UI, FAQ_ITEMS } from '../chatbot/knowledgeBase';
import { ChatMessage, SupportedLanguage } from '../chatbot/types';
import {
  Bot,
  MessageSquare,
  X,
  Send,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Minimize2,
} from 'lucide-react';

const STORAGE_KEY = 'hv_portfolio_chat_v1';

export function Chatbot() {
  const { language } = useLanguage();
  const currentLang = (language as SupportedLanguage) || 'en';
  const ui = CHATBOT_UI[currentLang] || CHATBOT_UI.en;

  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTeaser, setShowTeaser] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Helper to generate the default welcome message
  const getWelcomeMessage = (lang: SupportedLanguage): ChatMessage => {
    const greetingFaq = FAQ_ITEMS.find((item) => item.id === 'greeting');
    const greetingText =
      greetingFaq?.answer[lang] ||
      greetingFaq?.answer.en ||
      "Hello! I am Harsha's interactive FAQ assistant. How can I help you today?";
    const starters = (CHATBOT_UI[lang] || CHATBOT_UI.en).starters;

    return {
      id: `welcome-${Date.now()}`,
      sender: 'bot',
      text: greetingText,
      timestamp: Date.now(),
      suggestions: starters,
    };
  };

  // Hydrate messages from sessionStorage on initial mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          setHasInteracted(true);
          return;
        }
      }
    } catch {
      // sessionStorage unavailable or invalid
    }

    // Default to welcome message
    setMessages([getWelcomeMessage(currentLang)]);
  }, []);

  // Save messages to sessionStorage
  useEffect(() => {
    if (messages.length > 0) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch {
        // storage quota or disabled
      }
    }
  }, [messages]);

  // Auto-scroll to bottom of messages container
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  // Keyboard escape listener to close chat
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle submitting a user query
  const handleSend = (queryToSend?: string) => {
    const text = (queryToSend || inputQuery).trim();
    if (!text || isTyping) return;

    setHasInteracted(true);
    setShowTeaser(false);
    setInputQuery('');

    // Append user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Natural brief delay for response delivery
    setTimeout(() => {
      const matchResult = matchQuery(text, currentLang);
      const response = getBotResponse(matchResult, currentLang);

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        timestamp: Date.now(),
        action: response.action,
        suggestions: response.suggestions,
        isFallback: response.isFallback,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  // Reset / Clear chat
  const handleClearChat = () => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setMessages([getWelcomeMessage(currentLang)]);
  };

  return (
    <aside aria-label="Interactive FAQ Assistant" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* 1. CHAT WINDOW / MODAL */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={ui.title}
          className="fixed inset-x-3 bottom-3 sm:inset-auto sm:relative w-auto sm:w-[410px] h-[520px] max-h-[85vh] bg-obsidian-950/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Top Header */}
          <div className="px-4 py-3 bg-graphite-900/80 border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              {/* Bot Avatar */}
              <div className="relative w-8 h-8 rounded-xl bg-graphite-950 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-glow-cyan">
                <Bot className="w-4 h-4" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-graphite-950 animate-pulse" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-heading font-bold text-white tracking-wide">
                    {ui.title}
                  </h3>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-mono">
                    {currentLang.toUpperCase()}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono truncate max-w-[200px]">
                  {ui.subtitle}
                </p>
              </div>
            </div>

            {/* Header Controls */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleClearChat}
                title={ui.clearChat}
                aria-label={ui.clearChat}
                className="p-1.5 text-slate-400 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title={ui.minimize}
                aria-label={ui.minimize}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title={ui.close}
                aria-label={ui.close}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm scrollbar-thin scrollbar-thumb-graphite-700 scrollbar-track-transparent"
            aria-live="polite"
          >
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl whitespace-pre-line leading-relaxed ${
                      isBot
                        ? 'bg-graphite-900/90 text-slate-200 border border-white/10 shadow-sm rounded-tl-sm'
                        : 'bg-gradient-to-r from-cyan-600/30 via-cyan-500/25 to-violet-600/30 text-white border border-cyan-400/40 shadow-sm rounded-tr-sm'
                    }`}
                  >
                    {msg.text}

                    {/* Attached Action Button */}
                    {isBot && msg.action && (
                      <div className="mt-3 pt-2.5 border-t border-white/10">
                        {msg.action.isExternal ? (
                          <a
                            href={msg.action.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/25 text-xs font-semibold transition-all group"
                          >
                            <span>{msg.action.label}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        ) : (
                          <Link
                            href={msg.action.url}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/25 text-xs font-semibold transition-all group"
                          >
                            <span>{msg.action.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Dynamic Suggestions Under Message */}
                  {isBot && msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[95%]">
                      {msg.suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSend(suggestion)}
                          className="px-2.5 py-1 rounded-full bg-graphite-900/70 border border-white/10 hover:border-cyan-400/50 hover:bg-graphite-800 text-[11px] text-slate-300 hover:text-cyan-300 transition-all text-left"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs py-1">
                <div className="w-6 h-6 rounded-lg bg-graphite-900 border border-white/10 flex items-center justify-center text-cyan-400">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-graphite-900/80 border border-white/10 text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="ml-1 text-[11px] font-mono text-slate-400">{ui.typing}</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Input Area */}
          <div className="p-3 bg-graphite-900/80 border-t border-white/10 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder={ui.placeholder}
                disabled={isTyping}
                className="flex-1 bg-graphite-950 border border-white/15 focus:border-cyan-400 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || isTyping}
                title={ui.send}
                aria-label={ui.send}
                className="p-2 sm:px-3 sm:py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-30 disabled:hover:bg-cyan-500 text-obsidian-950 font-bold transition-all shadow-glow-cyan flex items-center justify-center shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-2 text-center">
              <span className="text-[10px] text-slate-500 font-mono">
                {ui.disclaimer}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 2. FLOATING LAUNCHER BUTTON & TEASER */}
      <div className="flex items-center justify-end gap-3 mt-2">
        {/* Desktop Greeting Pill */}
        {!isOpen && showTeaser && (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-graphite-900/90 border border-cyan-400/30 text-xs text-slate-300 shadow-xl backdrop-blur-md animate-in fade-in duration-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-medium text-slate-200">{ui.title}</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowTeaser(false);
              }}
              aria-label="Dismiss hint"
              className="text-slate-500 hover:text-white ml-1"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Primary Floating Trigger Button */}
        <button
          type="button"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setShowTeaser(false);
          }}
          aria-expanded={isOpen}
          aria-label={isOpen ? ui.close : ui.expand}
          className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-graphite-900 via-obsidian-950 to-graphite-900 border border-cyan-400/40 hover:border-cyan-400 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-glow-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />

          {isOpen ? (
            <X className="w-6 h-6 text-cyan-300 transition-transform group-hover:rotate-90 duration-200" />
          ) : (
            <div className="relative">
              <Bot className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              {/* Unread / Active status dot */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-2 ring-obsidian-950 animate-pulse" />
            </div>
          )}
        </button>
      </div>
    </aside>
  );
}
