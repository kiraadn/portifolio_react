import { about } from '../../data/portfolioData';
import { useInView } from '../../hooks/useInView';
import { Reveal } from './Reveal';

export function About() {
  const [textRef, textInView] = useInView(0.15);

  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-img">
            <img src={about.image.src} alt={about.image.alt} loading="lazy" />
          </Reveal>
          <div ref={textRef} className={`about-text reveal${textInView ? ' active' : ''}`}>
            <h2 className="section-title section-title--left">
              {about.sectionTitle.line} <span>{about.sectionTitle.highlight}</span>
            </h2>
            {about.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}

            <div className="skills-container">
              {about.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span>{skill.percent}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: textInView ? `${skill.percent}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="tech-tags">
              {about.techTags.map((tag) => (
                <div className="tech-tag" key={tag}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
