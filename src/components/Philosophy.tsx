import './Philosophy.css';

const pillars = [
  {
    num: '01',
    title: 'Reduction',
    desc: 'Stripping away the noise until only the essential remains. We believe in high-contrast layouts, spacious grids, and deliberate absence.',
  },
  {
    num: '02',
    title: 'Coherence',
    desc: 'Harmonizing interaction, motion, and typography into a singular fluid narrative. Every component speaks the same visual language.',
  },
  {
    num: '03',
    title: 'Intention',
    desc: 'Every pixel, transition, and micro-interaction serves a precise purpose. We reject arbitrary decoration in pursuit of quiet utility.',
  },
];

export default function Philosophy() {
  return (
    <section className="philosophy-section" id="philosophy">
      <div className="container">
        <div className="philosophy-grid">
          {/* Left block - Editorial Intro */}
          <div className="philosophy-intro">
            <div className="header-label">
              
              <span className="label-text">Our Philosophy</span>
            </div>
            <h2 className="philosophy-title">
              The poetry of <br />
              <span className="italic-title">restraint</span> in code.
            </h2>
            <p className="philosophy-paragraph">
              We build quiet spaces on the web. In an era of constant sensory noise, we seek reduction as revelation, sculpting digital monoliths that command attention through restraint.
            </p>
          </div>

          {/* Right block - Pillars */}
          <div className="pillars-list">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="pillar-item"
              >
                <div className="pillar-num-wrapper">
                  <span className="pillar-num">{pillar.num}</span>
                  
                </div>
                <div className="pillar-content">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
