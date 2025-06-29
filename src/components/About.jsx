

import React from 'react';
import me from '../assets/images/me.png';

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="about-heading">
               <span className='about1'> About</span> <span className="highlights">Me</span>
            </h2>
            <div className="about-container">
                <div className="about-image">
                    <img src={me} alt="Your profile" className="profile-image" />
                </div>
                <div className="about-text">
                    <h3 className="section-title">Who am I?</h3>
                    <p>
                        I'm a passionate <strong>Web Developer</strong> focused on building clean,
                        user-friendly websites and enjoy exploring new techniques
                        to create impactful digital solutions.
                    </p>
                    <h3 className="section-title">Education</h3>
                    <p>
                        I'm currently pursuing a <strong>B.Tech in Computer Science and Engineering</strong> to
                        strengthen my technical foundation
                        and to apply my knowledge in practical settings.
                    </p>
                    <h3 className="section-title">What Drives Me</h3>
                    <p>
                        I'm driven by a love for learning, problem-solving, and creating solutions that make a
                        real impact and believe technology has the power to transform lives.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;

