import { useEffect, useState, useRef } from 'react';
import Header from './../components/header/Header.jsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Home.css';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [showSkills, setShowSkills] = useState(false);
  const editorRef = useRef(null);

  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Big Visual Page</title>
<style>
    body {
        margin: 0;
        font-family: 'Courier New', monospace;
        background: linear-gradient(135deg, #1e3c72, #2a5298);
        color: #fff;
        overflow-x: hidden;
    }

    header {
        text-align: center;
        padding: 60px 20px;
        font-size: 3em;
        color: #FFD700;
        text-shadow: 2px 2px 10px #000;
        animation: pulse 3s infinite alternate;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }

    .section {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 60px 20px;
    }

    .card {
        width: 250px;
        height: 250px;
        margin: 20px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
        color: #fff;
        background: linear-gradient(45deg, #ff6b6b, #fbc2eb);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .card:hover {
        transform: translateY(-15px) rotate(5deg);
        box-shadow: 0 20px 40px rgba(0,0,0,0.7);
    }

    footer {
        text-align: center;
        padding: 40px 20px;
        background: rgba(0,0,0,0.5);
        color: #FFD700;
        font-size: 1.5em;
    }

    .glow-text {
        text-shadow: 0 0 8px #ff6ec7, 0 0 15px #ff6ec7, 0 0 20px #ff6ec7;
    }

</style>
</head>
<body>

<header>🌟 Big Visual Page 🌟</header>

<section class="section">
    <div class="card">Block 1</div>
    <div class="card" style="background: linear-gradient(45deg,#6bffb3,#6b9eff);">Block 2</div>
    <div class="card" style="background: linear-gradient(45deg,#f6d365,#fda085);">Block 3</div>
    <div class="card" style="background: linear-gradient(45deg,#a1c4fd,#c2e9fb);">Block 4</div>
</section>

<section class="section">
    <div class="card" style="background: linear-gradient(45deg,#ffecd2,#fcb69f);">Block 5</div>
    <div class="card" style="background: linear-gradient(45deg,#fbc2eb,#a6c1ee);">Block 6</div>
    <div class="card" style="background: linear-gradient(45deg,#fad0c4,#ffd1ff);">Block 7</div>
    <div class="card" style="background: linear-gradient(45deg,#84fab0,#8fd3f4);">Block 8</div>
</section>

<section class="section">
    <div class="card glow-text">✨ Block 9 ✨</div>
    <div class="card glow-text" style="background: linear-gradient(45deg,#ff9a9e,#fecfef);">✨ Block 10 ✨</div>
    <div class="card glow-text" style="background: linear-gradient(45deg,#a18cd1,#fbc2eb);">✨ Block 11 ✨</div>
    <div class="card glow-text" style="background: linear-gradient(45deg,#fad0c4,#ffd1ff);">✨ Block 12 ✨</div>
</section>

<footer>🌈 Thank you for visiting! 🌈</footer>

</body>
</html>

`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(code.slice(0, i));
      i++;
      if (i > code.length) clearInterval(interval);
    }, 30);

    const skillsTimeout = setTimeout(() => setShowSkills(true), 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(skillsTimeout);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="home-section">
        <div className="editor-container" ref={editorRef}>
          <div className="editor-top-bar">
            <span className="circle red"></span>
            <span className="circle yellow"></span>
            <span className="circle green"></span>
          </div>
          <SyntaxHighlighter
            language="html"
            style={vscDarkPlus}
            showLineNumbers
            wrapLines
            wrapLongLines
            className="editor-content"
          >
            {displayText}
          </SyntaxHighlighter>
        </div>

        <div className={`skills-card ${showSkills ? 'skills-card--show' : ''}`}>
          <p className="skills-title">Skills:</p>
          <p className="skills-list">
            Figma,HTML, CSS, Tailwind CSS, JavaScript, React, Yarn, Vite, Git.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
