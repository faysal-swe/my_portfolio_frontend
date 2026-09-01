import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import CallToAction from './components/CTA/CallToAction';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTop from './components/UI/BackToTop';
import './styles/index.css';

export default function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <CallToAction />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back To Top Floating Action */}
      <BackToTop />
    </div>
  );
}
