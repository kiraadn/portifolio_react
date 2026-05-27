import { projects } from '../../data/portfolioData';
import { Reveal } from './Reveal';

export function ProjectsSection() {
  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="section-title">
          {projects.sectionTitle.line} <span>{projects.sectionTitle.highlight}</span>
        </h2>
        <div className="portfolio-grid">
          {projects.items.map((project) => (
            <Reveal key={project.title} className="project-card">
              <div className="project-img">
                <img src={project.image.src} alt={project.image.alt} loading="lazy" />
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href} className="project-link">
                      <i className={link.iconClass} aria-hidden /> {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
