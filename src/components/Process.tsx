import './Process.css';

const steps = [
  {
    phase: 'Phase 01',
    title: 'Intuition & Analysis',
    desc: 'Deep discovery and research. We analyze the brand core, mapping out structural strategy and setting aesthetic directions.',
  },
  {
    phase: 'Phase 02',
    title: 'Aesthetic Blueprint',
    desc: 'Designing the architecture of the experience. We define type scale, layout grids, motion dynamics, and contrast states.',
  },
  {
    phase: 'Phase 03',
    title: 'Precision Craft',
    desc: 'Writing clean code and configuring layout structures. We integrate premium web technologies, custom shaders, and physics-based motion.',
  },
  {
    phase: 'Phase 04',
    title: 'Polish & Launch',
    desc: 'Fine-tuning animation timings, scrolling smoothness, and edge cases. We test across screens to ensure optimal frame rates.',
  },
];

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="container">
        
        {/* Section Header */}
        <div className="process-header">
          <div className="header-label">
            
            <span className="label-text">Our Process</span>
          </div>
          <h2 className="process-title">
            How we <br />
            <span className="italic-title">work</span>.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {steps.map((step) => (
            <div
              key={step.phase}
              className="step-card"
            >
              <span className="step-phase">{step.phase}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
