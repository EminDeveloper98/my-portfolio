import { FaTelegramPlane, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Contacts = () => {
  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px', // расстояние между контактами
    marginTop: '30px',
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column', // иконка сверху, текст снизу
    alignItems: 'center',
    gap: '8px',
    textAlign: 'center',
  };

  const circleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    color: 'white',
    fontSize: '22px',
  };

  return (
    <main className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 className="title-1">Contacts</h1>

        <div style={rowStyle}>
          <div style={itemStyle}>
            <div style={{ ...circleStyle, backgroundColor: '#0088cc' }}>
              <FaTelegramPlane />
            </div>
            <a
              href="https://t.me/EminDeveloper"
              target="_blank"
              rel="noopener noreferrer"
            >
              @EminDeveloper
            </a>
          </div>

          <div style={itemStyle}>
            <div style={{ ...circleStyle, backgroundColor: '#25D366' }}>
              <FaWhatsapp />
            </div>
            <a
              href="https://wa.me/994514136969"
              target="_blank"
              rel="noopener noreferrer"
            >
              +994 51 413 69 69
            </a>
          </div>

          <div style={itemStyle}>
            <div style={{ ...circleStyle, backgroundColor: '#555' }}>
              <FaPhone />
            </div>
            <a href="tel:+994514136969">+994 51 413 69 69</a>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h2 className="title-2">Email</h2>
          <a href="mailto:eminkhidirov98@gmail.com">eminkhidirov98@gmail.com</a>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
