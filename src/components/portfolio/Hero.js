import { hero } from '../../data/portfolioData';
import { useHeroCanvas } from '../../hooks/useHeroCanvas';
import { useTypewriter } from '../../hooks/useTypewriter';

export function Hero() {
  const canvasRef = useHeroCanvas();
  const typingText = useTypewriter(hero.typingRoles);

  return (
    <section id="hero">
      <canvas id="hero-canvas" ref={canvasRef} aria-hidden />
      <div className="hero-content">
        <span className="hero-subtitle">{hero.subtitle}</span>
        <h1 className="hero-title">
          {hero.titleLines.map((line, index) => (
            <span key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </h1>
        <div className="hero-typing">
          {hero.typingLabel} <span>{typingText}</span>
        </div>
        <a href={hero.cta.href} className="btn-neon">
          {hero.cta.label}
        </a>
      </div>
      <a href={hero.scrollTarget} className="scroll-down" aria-label="Rolar para sobre">
        <i className="fas fa-chevron-down" />
      </a>
    </section>
  );
}
