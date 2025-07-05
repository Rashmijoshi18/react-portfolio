
import React from 'react';
import flipImg from '../assets/images/flip.png';
import travelImg from '../assets/images/travel-x.png';
import weatherImg from '../assets/images/weather.png';
import gameImg from '../assets/images/game.png';
import fitImg from '../assets/images/fit.png';

const Projects = () => {
  const projects = [
    {
      title: "FitLife",
      description: "FitLife is a modern fitness platform offering workout programs to support your healthy lifestyle..",
      image: fitImg,
      link: "https://fitlife-liart.vercel.app/",
      repo: "https://github.com/Rashmijoshi18/fitlife"
    },
    {
      title: "Weather check",
      description: "An application that provides real-time weather updates and forecasts based on user location.",
      image: weatherImg,
      link: "https://weather-check-beta.vercel.app/",
      repo: "https://github.com/Rashmijoshi18/weather-check"
    },
    {
      title: "Travel-X",
      description: "Travel-X is a modern travel website with a beautiful UI for exploring destinations and booking trips.",
      image: travelImg,
      link: "https://travel-x-six.vercel.app/",
      repo: "https://github.com/Rashmijoshi18/travel-x"
    },
    {
      title: "Tic Tac Toe",
      description: "A classic two-player game where players alternate placing Xs and Os to get three in a row.",
      image: gameImg,
      link: "https://game-ten-wheat.vercel.app/",
      repo: "https://github.com/Rashmijoshi18/game"
    },
    {
      title: "Flipkart Clone",
      description: "An e-commerce platform mimicking Flipkart's feature for searching and purchasing products online.",
      image: flipImg,
      link: "https://flipkart-clone-exxu.vercel.app/",
      repo: "https://github.com/Rashmijoshi18/flipkart-clone"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h1>
        Latest <span className="highlight">Projects</span>
      </h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="card-links">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                title="View Live Demo"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                title="View GitHub Repo"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
