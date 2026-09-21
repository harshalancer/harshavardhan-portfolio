import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';

export const metadata: Metadata = {
  title: 'Harshavardhan | Freelance Software Developer',
  description:
    'Big dreams shouldn’t have to wait for big budgets. Freelance software developer building modern websites, web applications, AI automations, chatbots, and practical business solutions.',
  keywords: [
    'Harshavardhan',
    'Freelance Software Developer',
    'Web Development',
    'AI Automation',
    'Chatbots',
    'Full Stack Web Applications',
    'React',
    'Next.js',
    'Python',
    'Affordable Web Development',
  ],
  authors: [{ name: 'Harshavardhan' }],
  creator: 'Harshavardhan',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Harshavardhan | Freelance Software Developer',
    description:
      'Big dreams shouldn’t have to wait for big budgets. Thoughtful, affordable digital solutions tailored to your business goals.',
    siteName: 'Harshavardhan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshavardhan | Freelance Software Developer',
    description:
      'Big dreams shouldn’t have to wait for big budgets. Thoughtful, affordable digital solutions tailored to your business goals.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#2563eb',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Sans+Malayalam:wght@400;500;600;700&family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-warm-50 text-charcoal-900 min-h-screen flex flex-col font-body selection:bg-electric-100 selection:text-charcoal-900">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
