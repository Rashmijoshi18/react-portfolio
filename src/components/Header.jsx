
import React, { useEffect, useState } from "react";
import My_resume from '../assets/me_resume.pdf';

const Header = () => {
  const [text, setText] = useState("");
  const words = ["Frontend Developer", "Web Designer", "Creative Thinker", "Problem Solver"];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const typeEffect = () => {
      const currentWord = words[wordIndex];
      setText((prevText) =>
        isDeleting
          ? currentWord.substring(0, prevText.length - 1)
          : currentWord.substring(0, prevText.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setIsDeleting(true);
        setTypingSpeed(1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 100 : 150);
      }
    };

    const timer = setTimeout(typeEffect, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, typingSpeed]);

  return (
    <header id="home" className="header">
      <div className="background-grid"></div>

      <div className="text-content">
        <h1 className="gradient-text">
          Hi, I'm <span className="bold-name">Rashmi Joshi</span>
        </h1>

        <h3 className="typing-line">
          <span className="type-prefix">I am a</span>
          <span className="typing-text">{text}</span>
          <span className="cursor">|</span>
        </h3>

        <p className="subtext">
          Passionate about crafting engaging, user-friendly digital experiences.
        </p>

        <div className="button-group">
          <a href="#contact" className="button">Contact Me</a>
          <a href={My_resume} download target="_blank" rel="noopener noreferrer" className="button">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
