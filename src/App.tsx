import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FemaleGroups from './components/FemaleGroups';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FemaleGroups />
        <Pricing />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
