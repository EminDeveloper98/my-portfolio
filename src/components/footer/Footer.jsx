import './style.css';

import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/twitter.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          {/* Меню навигации */}
          <ul className="footer__menu">
            <li>
              <NavLink to="/" className="footer__link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="footer__link">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className="footer__link">
                Contacts
              </NavLink>
            </li>
            <li>
              <a
                href="/my-portfolio/certificate.pdf"
                download
                className="footer__link"
              >
                Certificate
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/%D1%8D%D0%BC%D0%B8%D0%BD-%D1%85%D0%B8%D0%B4%D0%B8%D1%80%D0%BE%D0%B2-4bb2182a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/EminDeveloper98"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                GitHub
              </a>
            </li>
          </ul>

          {/* Соцсети */}
          <ul className="social">
            <li className="social__item">
              <a href="#!" target="_blank" rel="noopener noreferrer">
                <img src={vk} alt="VK" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.instagram.com/emin._developer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://github.com/EminDeveloper98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHub} alt="GitHub" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/%D1%8D%D0%BC%D0%B8%D0%BD-%D1%85%D0%B8%D0%B4%D0%B8%D1%80%D0%BE%D0%B2-4bb2182a3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="LinkedIn" />
              </a>
            </li>
          </ul>

          <div className="copyright">
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
