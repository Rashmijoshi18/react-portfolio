import React from 'react';
import linkedinIcon from '../assets/images/linkedin.jpg';
import githubIcon from '../assets/images/images.png';
import emailIcon from '../assets/images/email.png'; // after renaming

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Rashmi Joshi | Connect with me:</p>
            <div className="social-icons">
                <a
                    href="https://www.linkedin.com/in/rashmi-joshi-148850320/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <img src={linkedinIcon} alt="LinkedIn Icon" />
                </a>
                <a
                    href="https://github.com/Rashmijoshi18"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <img src={githubIcon} alt="GitHub Icon" />
                </a>
                <a
                    href="mailto:rashmijoshi3699@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email"
                >
                    <img src={emailIcon} alt="Email Icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
