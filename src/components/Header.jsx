
// import React, { useEffect, useState } from "react";
// import My_resume from '../assets/me_resume.pdf';

// const Header = () => {
//   const [text, setText] = useState("");
//   const words = ["Frontend Developer", "Web Designer", "Creative Thinker", "Problem Solver"];
//   const [wordIndex, setWordIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [typingSpeed, setTypingSpeed] = useState(150);

//   useEffect(() => {
//     const typeEffect = () => {
//       const currentWord = words[wordIndex];
//       setText((prevText) =>
//         isDeleting
//           ? currentWord.substring(0, prevText.length - 1)
//           : currentWord.substring(0, prevText.length + 1)
//       );

//       if (!isDeleting && text === currentWord) {
//         setIsDeleting(true);
//         setTypingSpeed(1000);
//       } else if (isDeleting && text === "") {
//         setIsDeleting(false);
//         setWordIndex((prev) => (prev + 1) % words.length);
//         setTypingSpeed(150);
//       } else {
//         setTypingSpeed(isDeleting ? 100 : 150);
//       }
//     };

//     const timer = setTimeout(typeEffect, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [text, wordIndex, isDeleting, typingSpeed]);

//   return (
//     <header id="home" className="header">
//       <div className="background-grid"></div>

//       <div className="text-content">
//         <h1 className="gradient-text">
//           Hi, I'm <span className="bold-name">Rashmi Joshi</span>
//         </h1>

//         <h3 className="typing-line">
//           <span className="type-prefix">I am a</span>
//           <span className="typing-text">{text}</span>
//           <span className="cursor">|</span>
//         </h3>

//         <p className="subtext">
//           Passionate about crafting engaging, user-friendly digital experiences.
//         </p>

//         <div className="button-group">
//           <a href="#contact" className="button">Contact Me</a>
//           <a href={My_resume} download target="_blank" rel="noopener noreferrer" className="button">
//             Resume
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useEffect, useState } from "react";
// import My_resume from '../assets/me_resume.pdf';
// // import './Header.css';

// const Header = () => {
//   const [text, setText] = useState("");
//   const words = ["Frontend Developer", "Web Designer", "Creative Thinker", "Problem Solver"];
//   const [wordIndex, setWordIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [typingSpeed, setTypingSpeed] = useState(150);

//   // Typing effect logic
//   useEffect(() => {
//     const typeEffect = () => {
//       const currentWord = words[wordIndex];
//       setText((prevText) =>
//         isDeleting
//           ? currentWord.substring(0, prevText.length - 1)
//           : currentWord.substring(0, prevText.length + 1)
//       );

//       if (!isDeleting && text === currentWord) {
//         setIsDeleting(true);
//         setTypingSpeed(1000);
//       } else if (isDeleting && text === "") {
//         setIsDeleting(false);
//         setWordIndex((prev) => (prev + 1) % words.length);
//         setTypingSpeed(150);
//       } else {
//         setTypingSpeed(isDeleting ? 100 : 150);
//       }
//     };

//     const timer = setTimeout(typeEffect, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [text, wordIndex, isDeleting, typingSpeed]);

//   // Re-trigger animation on tab revisit
//   useEffect(() => {
//     const el = document.querySelector('.animate-header');
//     const handleVisibilityChange = () => {
//       if (document.visibilityState === 'visible' && el) {
//         el.classList.remove('animate-header');
//         void el.offsetWidth;
//         el.classList.add('animate-header');
//       }
//     };
//     document.addEventListener('visibilitychange', handleVisibilityChange);
//     return () => {
//       document.removeEventListener('visibilitychange', handleVisibilityChange);
//     };
//   }, []);

//   return (
//     <header id="home" className="header">
//       <div className="background-grid"></div>

//       <div className="text-content animate-header">
//         <h1 className="gradient-text scale-pop">
//           Hi, I'm <span className="bold-name">Rashmi Joshi</span>
//         </h1>

//         <h3 className="typing-line slide-left">
//           <span className="type-prefix">I am a</span>
//           <span className="typing-text">{text}</span>
//           <span className="cursor">|</span>
//         </h3>

//         <p className="subtext fade-in-bottom">
//           Passionate about crafting engaging, user-friendly digital experiences.
//         </p>

//         <div className="button-group stagger-buttons">
//           <a href="#contact" className="button zoom-button">Contact Me</a>
//           <a
//             href={My_resume}
//             download
//             target="_blank"
//             rel="noopener noreferrer"
//             className="button zoom-button"
//           >
//             Resume
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import My_resume from '../assets/me_resume.pdf';
// import './Header.css'; // Make sure your CSS is imported

const Header = () => {
  const [text, setText] = useState("");
  const words = ["Frontend Developer", "Web Designer", "Creative Thinker", "Problem Solver"];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typing animation logic
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

  // Re-trigger animation when returning to tab
  useEffect(() => {
    const handleVisibilityChange = () => {
      const el = document.querySelector('.animate-on-load');
      if (document.visibilityState === 'visible' && el) {
        el.classList.remove('animate-on-load');
        void el.offsetWidth; // Force reflow
        el.classList.add('animate-on-load');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <header id="home" className="header">
      <div className="background-grid"></div>

      <div className="text-content animate-on-load">
        <h1 className="gradient-text animate-slide-down">
          Hi, I'm <span className="bold-name">Rashmi Joshi</span>
        </h1>

        <h3 className="typing-line animate-slide-up">
          <span className="type-prefix">I am a</span>
          <span className="typing-text">{text}</span>
          <span className="cursor">|</span>
        </h3>

        <p className="subtext animate-fade-late">
          Passionate about crafting engaging, user-friendly digital experiences.
        </p>

        <div className="button-group animate-zoom-in">
          <a href="#contact" className="button">Contact Me</a>
          <a
            href={My_resume}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
