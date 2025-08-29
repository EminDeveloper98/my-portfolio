import './style.css';

import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/twitter.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!" target="_blank" rel="noopener noreferrer">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.instagram.com/emin._developer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://github.com/eminkhidirov98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/%D1%8D%D0%BC%D0%B8%D0%BD-%D1%85%D0%B8%D0%B4%D0%B8%D1%80%D0%BE%D0%B2-4bb2182a3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="Link" />
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
	