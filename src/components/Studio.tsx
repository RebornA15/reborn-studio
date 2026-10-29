
import './Studio.css';

const stats = [
  { label: 'Founded', value: '2024' },
  { label: 'Location', value: 'Lagos / Digital' },
  { label: 'Discipline', value: 'Cinematic Web' },
  { label: 'Philosophy', value: 'Extreme Restraint' },
];


export default function Studio() {
  return (
    <section className="studio-section" id="studio">
      <div className="container">
        
        <div className="studio-grid">
          {/* Left Block: Text Details */}
          <div className="studio-details">
            <div className="header-label">
              
              <span className="label-text">The Studio</span>
            </div>
            <h2 className="studio-title">
              A collective of <br />
              <span className="italic-title">digital architects</span>.
            </h2>
            <p className="studio-paragraph">
              Operating at the intersection of architecture, typography, and creative technology, Reborn Studio crafts premium digital platforms for visionaries. We design from the ground up, blending meticulous layout systems with smooth, hardware-accelerated interactions.
            </p>
          </div>

          {/* Right Block: Stats and Coordinates */}
          <div className="studio-stats">
            <div className="studio-border-box">
              
              <div className="coordinates-tag">
                45.1090° N, 12.3120° E / ATELIER
              </div>

              <div className="stats-list">
                {stats.map((stat) => (
                  <div 
                    key={stat.label}
                    className="stat-row"
                  >
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-value">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
