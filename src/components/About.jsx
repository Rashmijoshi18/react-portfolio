import React from 'react';
import me from '../assets/images/me.png';

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="about-heading">About <span className="highlights">Me</span></h2>
            <div className="about-container">
                <div className="about-image">
                    <img src={me} alt="Rashmi Joshi" className="profile-image" />
                </div>
                <div className="about-text">
                    <p>
                        <b>👋<u> Who I am :</u></b><br />
                        I'm a passionate <strong>Web Developer</strong> focused on building clean,
                        user-friendly websites and applications.I enjoy exploring new tools and techniques to create impactful
                        digital solutions that make a difference.<br /><br />

                        <b>🎓<u> Education:</u></b><br />
                        I'm currently pursuing a <strong>B.Tech in Computer Science and Engineering </strong>to strengthen my technical
                        foundation. Alongside coursework, I actively engage in projects
                        and internships to apply my knowledge in
                        practical settings.<br /><br />

                        <b>🌱 <u>What Drives Me:</u></b><br />
                        I'm driven by a love for learning, problem-solving, and creating solutions that make a real impact.I
                        believe technology has the power to transform lives, and I am committed to do so.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
