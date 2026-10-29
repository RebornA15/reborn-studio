import { services } from '../data/services';
import type { Service } from '../data/services';
import './Services.css';

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={`service-card service-card--${service.id}`} aria-labelledby={`service-${service.id}`}>
      <div className="service-artwork" aria-hidden="true">
        <img src={service.artwork} alt="" width="600" height="440" loading="lazy" decoding="async" />
      </div>
      <div className="service-copy">
        <span className="service-number">{service.number}</span>
        <h3 id={`service-${service.id}`}>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="services-intro">
          <div>
            <div className="header-label"><span className="label-text">Our Expertise</span></div>
            <h2 id="services-title">What We Offer.</h2>
          </div>
          <p>Thoughtful design and development for businesses, organizations, and individuals ready to build something distinctive.</p>
        </div>
        <div className="services-grid">
          {services.map(service => <ServiceCard key={service.id} service={service} />)}
        </div>
      </div>
    </section>
  );
}
