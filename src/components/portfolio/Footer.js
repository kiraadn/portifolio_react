import { footer, header } from '../../data/portfolioData';

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <a href={header.logo.href} className="logo">
            &lt;<span>{footer.logo.accent}</span>/&gt;
          </a>
          <div className="social-links">
            {footer.social.map((item) => (
              <a key={item.label} href={item.href} aria-label={item.label}>
                <i className={item.iconClass} aria-hidden />
              </a>
            ))}
          </div>
        </div>
        <div className="copyright">{footer.copyright}</div>
      </div>
    </footer>
  );
}
