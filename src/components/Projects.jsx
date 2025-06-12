import React from 'react';
import flipImg from '../assets/images/flip.png';
import travelImg from '../assets/images/travel-x.png';
import weatherImg from '../assets/images/weather.png';
import gameImg from '../assets/images/game.png';

const Projects = () => {

    const projects = [
        {
            title: "Weather check",
            description: "An application that provides real-time weather updates and forecasts based on user loaction.",
            image: weatherImg,
            link: "https://weather-check-beta.vercel.app/"
        },
        {
            title: "Travel-X",
            description: "Travel-X is a modern travel website with a beutiful UI for exploring destinations and booking trips.",
            image: travelImg,
            link: "https://travel-x-six.vercel.app/"
        },
        {
            title: "Tic Tac Toe",
            description: "A classic two-player game where players alternate placing Xs and Os to get three in a row.",
            image: gameImg,
            link: "https://game-ten-wheat.vercel.app/"
        },
        {
            title: "Flipkart Clone",
            description: "An e-commerce platform Flipkart's feature for searching and purchasing products online.",
            image: flipImg,
            link: "https://flipkart-clone-exxu.vercel.app/"
        }
    ];

    return (
        <section id="projects" className="section projects">
            <h1>Latest <span className="highlight">Projects</span></h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="card">
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;