import { useLayoutEffect, useRef, useState } from 'react';
import './Hero.css';

const services = ['WEB DESIGN', 'DEVELOPMENT', 'CREATIVE DIRECTION', 'DIGITAL EXPERIENCES', 'BRAND WEBSITES'];

function ServicesTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(2);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const sequence = sequenceRef.current;
    if (!container || !track || !sequence) return;

    // Include the trailing separator gap in the exact loop distance.
    const measure = () => {
      const width = sequence.getBoundingClientRect().width;
      if (!width) return;
      track.style.setProperty('--ticker-distance', `${-width}px`);
      setCopies(Math.max(2, Math.ceil(container.clientWidth / width) + 1));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    observer.observe(sequence);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="service-ticker" aria-label={`Our services: ${services.join(', ')}`}>
      <div ref={trackRef} className="service-ticker-track" aria-hidden="true">
        {Array.from({ length: copies }, (_, copy) => (
          <div ref={copy === 0 ? sequenceRef : undefined} className="service-ticker-sequence" key={copy}>
            {services.map(service => <span className="service-ticker-item" key={service}>{service}<span className="ticker-star">&#10035;</span></span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const navigate = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    if (window.studioLenis) window.studioLenis.scrollTo(target, { duration: 1.2, offset: -80 });
    else target.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <section id="hero" className="hero-section" aria-labelledby="hero-heading">
        <div className="hero-content">
          <div className="hero-label">Independent digital studio</div>
          <h1 id="hero-heading" className="hero-typography"><span>Websites built to</span><span className="hero-gradient">stand apart.</span></h1>
          <p className="hero-copy">Distinctive websites for businesses, organizations, and people ready to make an impact online.</p>
          <div className="hero-cta-row">
            <button onClick={() => navigate('contact')} className="hero-btn-primary ui-button ui-gradient">Start a Project <span className="btn-arrow ui-arrow" aria-hidden="true">&#8599;</span></button>
            <button onClick={() => navigate('work')} className="hero-btn-secondary ui-button ui-text-action">Explore Our Work <span className="btn-arrow ui-arrow" aria-hidden="true">&#8599;</span></button>
          </div>
        </div>
        <div className="hero-footnote" aria-hidden="true"><span>Ideas with presence.</span><span>Design with purpose.</span></div>
      </section>
      <ServicesTicker />
    </>
  );
}
