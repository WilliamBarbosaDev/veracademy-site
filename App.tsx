import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { PainPoints } from './components/PainPoints';
import { FeaturedCourse } from './components/FeaturedCourse';
import { KnowledgeAreas } from './components/KnowledgeAreas';
import { Methodology } from './components/Methodology';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { CallToAction } from './components/CallToAction';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-ver-dark text-slate-200 overflow-x-hidden selection:bg-ver-green selection:text-ver-dark">
      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <WhoWeAre />
        <PainPoints />
        <FeaturedCourse />
        <KnowledgeAreas />
        <Methodology />
        <Testimonials />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default App;