import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Chatbot } from '../components/Chatbot';
import { LanguageProvider } from '../context/LanguageContext';

export const metadata: Metadata = {
  title: 'HARSHA | Software Developer & AI Enthusiast',
  description:
    'Distinctive, high-performance portfolio of Harsha. Specializing in full-stack web applications, AI automation, computer vision, and scalable digital architectures.',
  keywords: [
    'Harsha',
    'Software Developer',
    'AI Developer',
    'Next.js Full Stack',
    'Computer Vision',
    'Pipeline Inspection Robot',
    'AI Automation',
    'TypeScript',
    'Python',
  ],
  authors: [{ name: 'Harsha' }],
  creator: 'Harsha',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'HARSHA | Software Developer & AI Enthusiast',
    description:
      'Distinctive, high-performance portfolio of Harsha. Specializing in full-stack web applications, AI automation, and scalable digital architectures.',
    siteName: 'HARSHA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HARSHA | Software Developer & AI Enthusiast',
    description:
      'Distinctive, high-performance portfolio of Harsha. Specializing in full-stack web applications, AI automation, and scalable digital architectures.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#050508',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800;900&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Sans+Malayalam:wght@400;500;600;700&family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-obsidian-950 text-slate-100 min-h-screen flex flex-col font-body selection:bg-cyan-500/20 selection:text-white bg-cyber-glow subtle-grid">
        <LanguageProvider>
          {/* Accessible Skip Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-cyan-600 text-white font-semibold rounded-lg shadow-lg"
          >
            Skip to main content
          </a>

          {/* Global Navbar with Language Switcher */}
          <Navbar />

          {/* Main Content Area */}
          <main id="main-content" className="flex-1">
            {children}
          </main>

          {/* Global Footer with Language Switcher */}
          <Footer />

          {/* Interactive Multilingual FAQ Chatbot */}
          <Chatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}