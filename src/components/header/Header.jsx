import { useState, useEffect } from 'react';
import './style.css';

const Header = () => {
  const introText = [
    'Hey there! Welcome to my site... 😎',
    'You probably want to see what I can do!',
  ];

  const mainText = [
    'Hi, my name is Emin.',
    "I'm a passionate, energetic junior frontend developer.",
    'I love building interactive websites.',
    'I hope you enjoy my portfolio!',
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [phase, setPhase] = useState(0); // 0 = intro, 1 = main
  const [charIndex, setCharIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [fixedText, setFixedText] = useState(''); // текст, который остаётся

  useEffect(() => {
    let textArray = phase === 0 ? introText : mainText;
    let currentLine = textArray[lineIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    let timeout;

    if (!isDeleting && charIndex <= currentLine.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentLine.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex > currentLine.length) {
      // конец строки
      if (phase === 0) {
        if (lineIndex < textArray.length - 1) {
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (lineIndex < textArray.length - 1) {
          setFixedText((prev) => prev + currentLine + '\n');
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }
      }
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentLine.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed / 2);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setPhase(1);
      setLineIndex(0);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, isDeleting, phase, introText, mainText]);

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <span className="fixed-text">{fixedText}</span>
          <span className="typing-text">{displayedText}</span>
          <span className="cursor">|</span>
        </h1>

        <div className="header__text">
          <a href="/my-portfolio/cv.pdf" className="btn" download>
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
