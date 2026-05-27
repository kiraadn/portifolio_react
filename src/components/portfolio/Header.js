import { useCallback, useState } from 'react';
import { header } from '../../data/portfolioData';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

  return (
    <header id="header">
      <div className="container">
        <nav>
          <a href={header.logo.href} className="logo" onClick={closeMenu}>
            &lt;<span>{header.logo.accent}</span>/&gt;
          </a>
          <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
            {header.navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={toggleMenu}
          >
            <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} aria-hidden />
          </button>
        </nav>
      </div>
    </header>
  );
}
