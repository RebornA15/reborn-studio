import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Header.css';

const navLinks = [
  'Philosophy',
  'Services',
  'Work',
  'Process',
  'Studio',
  'Contact'
];

export default function Header() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver Scroll Spy to track active section
  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.toLowerCase()));
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger active state when section takes up the central viewport area
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.studioLenis) {
      window.studioLenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollTo = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const target = document.querySelector<HTMLElement>(sectionId);
    if (target) {
      if (window.studioLenis) {
        window.studioLenis.scrollTo(target, { duration: 1.2, offset: -80 });
      } else {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      // Close mobile menu if open
      if (menuOpen) setMenuOpen(false);
    }
  };

  return (
    <header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
    >
      <nav className="navbar">
        <div className="nav-left">
          <a href="#hero" onClick={scrollToHero} className="logo" aria-label="Reborn Studio ? Home">
            <span className="logo-name">REBORN</span>
            <span className="logo-descriptor">STUDIO</span>
          </a>
        </div>
        
        <ul className="nav-center">
          {navLinks.map((link) => {
            const isLinkActive = activeSection === link.toLowerCase();
            return (
              <li 
                key={link}
              >
                <a 
                  href={`#${link.toLowerCase()}`} 
                  onClick={(e) => handleScrollTo(e, `#${link.toLowerCase()}`)}
                  className={`nav-link ui-link ${isLinkActive ? 'active' : ''}`}
                >
                  {link}
                  {isLinkActive && (
                    <div
                      className="nav-active-underline"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="nav-right">
          <button onClick={(e) => handleScrollTo(e, '#contact')} className="cta-button ui-button">
            Start a Project <span className="cta-arrow ui-arrow">↗</span>
          </button>
          {/* Hamburger for mobile */}
          <button
            className="hamburger-button ui-control"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="2" rx="1" fill="currentColor" />
              <rect y="6" width="20" height="2" rx="1" fill="currentColor" />
              <rect y="12" width="20" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        </div>
        {/* Mobile menu overlay */}
        {menuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} />
            <motion.aside
              id="mobile-navigation"
              className="mobile-menu"
              initial={reduceMotion ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: reduceMotion ? 0 : 0.26, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="mobile-menu-inner">
                <button className="mobile-menu-close ui-control" onClick={() => setMenuOpen(false)} aria-label="Close menu">Close</button>
                <ul>
                  {navLinks.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        onClick={(e) => handleScrollTo(e, `#${link.toLowerCase()}`)}
                        className="mobile-nav-link ui-link"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mobile-project-action ui-button" onClick={(e) => handleScrollTo(e, '#contact')}>
                  Start a Project <span className="ui-arrow" aria-hidden="true">↗</span>
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
