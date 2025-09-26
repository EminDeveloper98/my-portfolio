import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode.jsx';
import './style.css';

const Navbar = () => {
  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>My</strong> portfolio
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>

            {/* <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Projects
              </NavLink>
            </li> */}
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
            <li className="nav-list__item">
              <a
                href="/my-portfolio/certificate.pdf"
                download="certificate.pdf"
                className={normalLink} // или activeLink
              >
                Certificate
              </a>
            </li>

            <li className="nav-list__item">
              <a
                href="https://www.linkedin.com/in/%D1%8D%D0%BC%D0%B8%D0%BD-%D1%85%D0%B8%D0%B4%D0%B8%D1%80%D0%BE%D0%B2-4bb2182a3/"
                target="_blank"
                rel="noopener noreferrer"
                className={normalLink} // или activeLink, если хочешь стиль
              >
                Linkedin
              </a>
            </li>
            <li className="nav-list__item">
              <a
                href="https://github.com/EminDeveloper98"
                target="_blank"
                rel="noopener noreferrer"
                className={normalLink} // или activeLink, если хочешь стиль
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
