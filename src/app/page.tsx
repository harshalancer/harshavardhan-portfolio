import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { MyWork } from '../components/MyWork';
import { Technologies } from '../components/Technologies';
import { WhyWorkWithMe } from '../components/WhyWorkWithMe';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <>
      {/* Accessible skip link for keyboard/screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-electric-600 text-white font-semibold rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      {/* Persistent Navigation Bar */}
      <Navbar />

      {/* Main Single Page Content */}
      <main id="main-content" className="flex-1">
        <Hero />
        <Services />
        <MyWork />
        <Technologies />
        <WhyWorkWithMe />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
