import { services } from '../../data/portfolioData';
import { Reveal } from './Reveal';

export function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title">
          {services.sectionTitle.line} <span>{services.sectionTitle.highlight}</span>
        </h2>
        <div className="services-grid">
          {services.items.map((item) => (
            <Reveal key={item.title} className="service-card">
              <div className="service-icon">
                <i className={item.iconClass} aria-hidden />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
