import { FaTelegramPlane, FaWhatsapp, FaPhone } from 'react-icons/fa';
import './style.css'; // подключаем CSS

const Contacts = () => {
  return (
    <main className="section contacts-section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <div className="contacts-row">
          <div className="contact-item">
            <div className="contact-circle telegram">
              <FaTelegramPlane />
            </div>
            <a
              href="https://t.me/EminDeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              @EminDeveloper
            </a>
          </div>

          <div className="contact-item">
            <div className="contact-circle whatsapp">
              <FaWhatsapp />
            </div>
            <a
              href="https://wa.me/994514136969"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              +994 51 413 69 69
            </a>
          </div>

          <div className="contact-item">
            <div className="contact-circle phone">
              <FaPhone />
            </div>
            <a href="tel:+994514136969" className="contact-link">
              +994 51 413 69 69
            </a>
          </div>
        </div>

        <div className="email-section">
          <h2 className="title-2">Email</h2>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=eminkhidirov98@gmail.com&su=Hello%20Emin&body=Hi%20Emin%2C%0A%0A"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            eminkhidirov98@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
