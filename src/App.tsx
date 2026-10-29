import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Work from './components/Work';
import Process from './components/Process';
import Studio from './components/Studio';
import Services from './components/Services';
import Contact from './components/Contact';

import './index.css';
import './interactions.css';

function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9, // elegant slower speed
      touchMultiplier: 1.5,
    });

    // Expose lenis instance globally for smooth scrolling navigation
    window.studioLenis = lenis;

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      window.studioLenis = null;
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <>

      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Work />
        <Process />
        <Studio />
        <Contact />
      </main>
    </>
  );
}

export default App;
