// import React from "react";
// import { ArrowRightIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
// import flipImg from "../assets/images/flip.png";
// import travelImg from "../assets/images/travel-x.png";
// import weatherImg from "../assets/images/weather.png";
// import gameImg from "../assets/images/game.png";
// import fitImg from "../assets/images/fit.png";

// const Projects = () => {
// 	const projects = [
// 		{
// 			id: "fitlife",
// 			title: "FitLife",
// 			description: "Modern fitness platform offering workout programs to support your healthy lifestyle.",
// 			image: fitImg,
// 			link: "https://fitlife-liart.vercel.app/",
// 			repo: "https://github.com/Rashmijoshi18/fitlife",
// 			tech: ["React", "Tailwind CSS ", "JavaScript"],
// 			category: "Web App",
// 		},
// 		{
// 			id: "weather-check",
// 			title: "Weather Check",
// 			description: "Real-time weather updates and forecasts based on user location with beautiful UI.",
// 			image: weatherImg,
// 			link: "https://weather-check-beta.vercel.app/",
// 			repo: "https://github.com/Rashmijoshi18/weather-check",
// 			tech: ["JavaScript", "API", "CSS3"],
// 			category: "Weather App",
// 		},
// 		{
// 			id: "travel-x",
// 			title: "Travel-X",
// 			description: "Modern travel website with beautiful UI for exploring destinations and booking trips.",
// 			image: travelImg,
// 			link: "https://travel-x-six.vercel.app/",
// 			repo: "https://github.com/Rashmijoshi18/travel-x",
// 			tech: ["HTML", "CSS3", "Vercel"],
// 			category: "Travel Site",
// 		},
// 		{
// 			id: "tic-tac-toe",
// 			title: "Tic Tac Toe",
// 			description: "Classic two-player game with modern design and smooth gameplay experience.",
// 			image: gameImg,
// 			link: "https://game-ten-wheat.vercel.app/",
// 			repo: "https://github.com/Rashmijoshi18/game",
// 			tech: ["JavaScript", "CSS3", "HTML5"],
// 			category: "Game",
// 		},
// 		{
// 			id: "flipkart-clone",
// 			title: "Flipkart Clone",
// 			description: "E-commerce platform with modern features for browsing and purchasing products.",
// 			image: flipImg,
// 			link: "https://flipkart-clone-exxu.vercel.app/",
// 			repo: "https://github.com/Rashmijoshi18/flipkart-clone",
// 			tech: ["HTML", "CSS3"],
// 			category: "E-commerce",
// 		},
// 	];

// 	return (
// 		<section id="projects" className="py-20 px-6 bg-gradient-to-r from-[#0f0f15] to-[#090912] text-white relative">
// 			{/* Simple background decoration */}
// 			<div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 via-transparent to-[#ff007f]/5"></div>

// 			<div className="relative max-w-7xl mx-auto">
// 				{/* Section Header */}
// 				<div className="text-center mb-20">
// 					<h2 className="text-4xl md:text-5xl font-bold mb-4">
// 						Latest <span className="text-[#00f0ff]">Projects</span>
// 					</h2>
// 					<div className="w-16 h-1 bg-[#00f0ff] mx-auto rounded-full"></div>
// 					<p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
// 						Showcasing innovative digital solutions built with modern technologies
// 					</p>
// 				</div>

// 				{/* Projects Grid */}
// 				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// 					{projects.map((project, index) => (
// 						<div key={project.id} className="group">
// 							<div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#00f0ff]/30 transition-all duration-300 hover:transform hover:scale-[1.02] h-full">
// 								{/* Image Container */}
// 								<div className="relative">
// 									<img
// 										src={project.image}
// 										alt={project.title}
// 										className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
// 									/>

// 									{/* Gradient Overlay */}
// 									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

// 									{/* Category Badge */}
// 									<div className="absolute top-4 right-4 px-3 py-1 bg-[#00f0ff] text-black text-xs font-semibold rounded-full">
// 										{project.category}
// 									</div>
// 								</div>

// 								{/* Content */}
// 								<div className="p-8">
// 									{/* Title */}
// 									<h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00f0ff] transition-colors duration-300">
// 										{project.title}
// 									</h3>

// 									{/* Description */}
// 									<p className="text-gray-400 leading-relaxed text-sm mb-6 min-h-[3rem]">
// 										{project.description}
// 									</p>

// 									{/* Tech Stack */}
// 									<div className="flex flex-wrap gap-2 mb-8">
// 										{project.tech.map((tech, techIndex) => (
// 											<span
// 												key={techIndex}
// 												className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full border border-white/20 hover:border-[#00f0ff]/40 hover:text-[#00f0ff] transition-colors duration-300"
// 											>
// 												{tech}
// 											</span>
// 										))}
// 									</div>

// 									{/* Action Links */}
// 									<div className="flex justify-between items-center">
// 										<div className="flex gap-3">
// 											{/* Live Demo Link */}
// 											<a
// 												href={project.link}
// 												target="_blank"
// 												rel="noopener noreferrer"
// 												className="flex items-center gap-2 px-4 py-2 bg-[#00f0ff] text-black text-sm font-semibold rounded-full hover:bg-[#00d4e6] transition-colors duration-300"
// 												title="View Live Demo"
// 											>
// 												<ArrowTopRightOnSquareIcon className="w-4 h-4" />
// 												Live Demo
// 											</a>

// 											{/* GitHub Repo Link */}
// 											<a
// 												href={project.repo}
// 												target="_blank"
// 												rel="noopener noreferrer"
// 												className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300"
// 												title="View GitHub Repository"
// 											>
// 												<CodeBracketIcon className="w-5 h-5" />
// 											</a>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>

// 				{/* Call to Action */}
// 				<div className="text-center">
// 					<p className="text-gray-400 text-lg mb-6">Want to see more of my work?</p>
// 					<a
// 						href="https://github.com/Rashmijoshi18"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00f0ff] to-[#44d2e1] text-black font-bold px-8 py-4 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
// 					>
// 						View All Projects
// 						<ArrowRightIcon className="w-5 h-5" />
// 					</a>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Projects;
import React from "react";
import { ArrowRightIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import flipImg from "../assets/images/flip.png";
import travelImg from "../assets/images/travel-x.png";
import weatherImg from "../assets/images/weather.png";
import gameImg from "../assets/images/game.png";
import fitImg from "../assets/images/fit.png";

const Projects = () => {
	const projects = [
		{
			id: "fitlife",
			title: "FitLife",
			description: "Modern fitness platform offering workout programs to support your healthy lifestyle.",
			image: fitImg,
			link: "https://fitlife-liart.vercel.app/",
			repo: "https://github.com/Rashmijoshi18/fitlife",
			tech: ["React", "Tailwind CSS", "JavaScript"],
			category: "Web App",
		},
		{
			id: "weather-check",
			title: "Weather Check",
			description: "Real-time weather updates and forecasts based on user location with beautiful UI.",
			image: weatherImg,
			link: "https://weather-check-beta.vercel.app/",
			repo: "https://github.com/Rashmijoshi18/weather-check",
			tech: ["JavaScript", "API", "CSS3"],
			category: "Weather App",
		},
		{
			id: "travel-x",
			title: "Travel-X",
			description: "Modern travel website with beautiful UI for exploring destinations and booking trips.",
			image: travelImg,
			link: "https://travel-x-six.vercel.app/",
			repo: "https://github.com/Rashmijoshi18/travel-x",
			tech: ["HTML", "CSS3", "Vercel"],
			category: "Travel Site",
		},
		{
			id: "tic-tac-toe",
			title: "Tic Tac Toe",
			description: "Classic two-player game with modern design and smooth gameplay experience.",
			image: gameImg,
			link: "https://game-ten-wheat.vercel.app/",
			repo: "https://github.com/Rashmijoshi18/game",
			tech: ["JavaScript", "CSS3", "HTML5"],
			category: "Game",
		},
		{
			id: "flipkart-clone",
			title: "Flipkart Clone",
			description: "E-commerce platform with modern features for browsing and purchasing products.",
			image: flipImg,
			link: "https://flipkart-clone-exxu.vercel.app/",
			repo: "https://github.com/Rashmijoshi18/flipkart-clone",
			tech: ["HTML", "CSS3"],
			category: "E-commerce",
		},
	];

	return (
		<section id="projects" className="py-28 px-8 bg-gradient-to-r from-[#0f0f15] to-[#090912] text-white relative">
			{/* Simple background decoration */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 via-transparent to-[#ff007f]/5"></div>

			<div className="relative max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-28">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Latest <span className="text-[#00f0ff]">Projects</span>
					</h2>
					<div className="w-16 h-1 bg-[#00f0ff] mx-auto rounded-full"></div>
					<p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
						Showcasing innovative digital solutions built with modern technologies
					</p>
				</div>

				{/* Projects Grid with better spacing */}
				<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-14 mb-28">
					{projects.map((project, index) => (
						<div key={project.id} className="group mb-12 max-w-md mx-auto">
							<div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#00f0ff]/30 transition-all duration-300 hover:transform hover:scale-[1.02] h-full max-h-[600px]">
								{/* Image Container */}
								<div className="relative">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
									/>

									{/* Gradient Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

									{/* Category Badge */}
									<div className="absolute top-4 right-4 px-3 py-1 bg-[#00f0ff] text-black text-xs font-semibold rounded-full">
										{project.category}
									</div>
								</div>

								{/* Content with better spacing */}
								<div className="p-6">
									{/* Title */}
									<h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#00f0ff] transition-colors duration-300">
										{project.title}
									</h3>

									{/* Description */}
									<p className="text-gray-400 leading-relaxed text-sm mb-6 min-h-[2.5rem]">
										{project.description}
									</p>

									{/* Tech Stack */}
									<div className="flex flex-wrap gap-2 mb-6">
										{project.tech.map((tech, techIndex) => (
											<span
												key={techIndex}
												className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full border border-white/20 hover:border-[#00f0ff]/40 hover:text-[#00f0ff] transition-colors duration-300"
											>
												{tech}
											</span>
										))}
									</div>

									{/* Action Links */}
									<div className="flex justify-between items-center">
										<div className="flex gap-3">
											{/* Live Demo Link */}
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 px-4 py-2 bg-[#00f0ff] text-black text-sm font-semibold rounded-full hover:bg-[#00d4e6] transition-colors duration-300"
												title="View Live Demo"
											>
												<ArrowTopRightOnSquareIcon className="w-4 h-4" />
												Demo
											</a>

											{/* GitHub Repo Link */}
											<a
												href={project.repo}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300"
												title="View GitHub Repository"
											>
												<CodeBracketIcon className="w-5 h-5" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div className="text-center">
					<p className="text-gray-400 text-lg mb-6">Want to see more of my work?</p>
					<a
						href="https://github.com/Rashmijoshi18"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00f0ff] to-[#44d2e1] text-black font-bold px-8 py-4 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
					>
						View All Projects
						<ArrowRightIcon className="w-5 h-5" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;