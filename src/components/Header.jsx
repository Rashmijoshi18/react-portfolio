import React, { useEffect, useState } from "react";
import My_resume from '../assets/me_resume.pdf'

const Header = () => {
    const [text, setText] = useState("");
    const words = ["Frontend Developer", "Web Designer", "Creative Thinker", "Problem Solver"];
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const typeEffect = () => {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                setText(currentWord.substring(0, text.length - 1));
            } else {
                setText(currentWord.substring(0, text.length + 1));
            }

            if (!isDeleting && text === currentWord) {
                setIsDeleting(true);
                setTypingSpeed(1000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
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
            <div className="intro">
                <h1 className="gradient-text">Hello, I'm Rashmi Joshi</h1>
                <h3>And I'm a <span className="typing-text">{text}</span></h3>
                <p>Let's connect and create something amazing together!</p>

                <div className="button-group">
                    <a href="#contact" className="button">Contact Me</a>

                    <a
                        href={My_resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
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

