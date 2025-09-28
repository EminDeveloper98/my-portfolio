import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode.jsx';
import './style.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="container nav-row">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <strong>My</strong> Portfolio
        </NavLink>

        <BtnDarkMode />

        {/* Гамбургер */}
        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-list ${menuOpen ? 'nav-list--open' : ''}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>

          <li className="nav-list__item">
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={closeMenu}
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <a
              href="/my-portfolio/certificate.pdf"
              download
              className={normalLink}
              onClick={closeMenu}
            >
              Certificate
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/%D1%8D%D0%BC%D0%B8%D0%BD-%D1%85%D0%B8%D0%B4%D0%B8%D1%80%D0%BE%D0%B2-4bb2182a3/"
              target="_blank"
              rel="noopener noreferrer"
              className={normalLink}
              onClick={closeMenu}
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/EminDeveloper98"
              target="_blank"
              rel="noopener noreferrer"
              className={normalLink}
              onClick={closeMenu}
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
