
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <a href="#" className="logo">
        Movie<span>City</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir ou fechar menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
        <a href="#filmes" onClick={() => setMenuOpen(false)}>Filmes</a>
        <a href="#categorias" onClick={() => setMenuOpen(false)}>Categoria</a>
        <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
      </nav>

      <button className="login-button">Login</button>
    </header>
  );
}

export default Header;
