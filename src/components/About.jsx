import React from "react";
import { UserIcon, AcademicCapIcon, BoltIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import me from "../assets/images/me.png";

const About = () => {
	return (
		<section id="about" className="py-20 px-6 bg-[#0f0f17] text-white relative">
			{/* Simple background decoration */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 via-transparent to-[#ff007f]/5"></div>

			<div className="relative max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-20">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						About <span className="text-[#00f0ff]">Me</span>
					</h2>
					<div className="w-16 h-1 bg-[#00f0ff] mx-auto rounded-full"></div>
				</div>

				{/* Main Content */}
				<div className="grid lg:grid-cols-5 gap-16 items-start">
					{/* Profile Image - Takes 2 columns */}
					<div className="lg:col-span-2 flex justify-center">
						<div className="relative group">
							{/* Image container with natural aspect ratio */}
							<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00f0ff]/10 to-[#ff007f]/10 p-1">
								<div className="bg-[#0f0f17] rounded-3xl p-4">
									<img
										src={me}
										alt="Rashmi Joshi"
										className="w-full max-w-sm mx-auto rounded-2xl transition-all duration-500 hover:scale-105 shadow-2xl"
										style={{ aspectRatio: "auto" }}
									/>
								</div>
							</div>

							{/* Decorative elements */}
							<div className="absolute -top-4 -right-4 w-8 h-8 bg-[#00f0ff] rounded-full animate-pulse opacity-80"></div>
							<div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#ff007f] rounded-full animate-pulse animation-delay-1000 opacity-60"></div>
						</div>
					</div>

					{/* Content - Takes 3 columns */}
					<div className="lg:col-span-3 space-y-8">
						{/* Who am I */}
						<div className="group">
							<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#00f0ff]/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
								<div className="flex items-center gap-4 mb-6">
									<div className="p-3 bg-[#00f0ff]/10 rounded-full">
										<UserIcon className="w-6 h-6 text-[#00f0ff]" />
									</div>
									<h3 className="text-2xl font-semibold text-[#00f0ff]">Who am I?</h3>
								</div>
								<p className="text-gray-300 leading-relaxed text-base">
									I'm a passionate <span className="text-white font-semibold">Web Developer</span>{" "}
									focused on building clean, user-friendly websites and enjoy exploring new techniques
									to create impactful digital solutions.
								</p>
							</div>
						</div>

						{/* Education */}
						<div className="group">
							<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#ff007f]/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
								<div className="flex items-center gap-4 mb-6">
									<div className="p-3 bg-[#ff007f]/10 rounded-full">
										<AcademicCapIcon className="w-6 h-6 text-[#ff007f]" />
									</div>
									<h3 className="text-2xl font-semibold text-[#ff007f]">Education</h3>
								</div>
								<p className="text-gray-300 leading-relaxed text-base">
									I'm currently pursuing a{" "}
									<span className="text-white font-semibold">
										B.Tech in Computer Science and Engineering
									</span>{" "}
									to strengthen my technical foundation and apply my knowledge in practical settings.
								</p>
							</div>
						</div>

						{/* What Drives Me */}
						<div className="group">
							<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
								<div className="flex items-center gap-4 mb-6">
									<div className="p-3 bg-white/10 rounded-full">
										<BoltIcon className="w-6 h-6 text-white" />
									</div>
									<h3 className="text-2xl font-semibold text-white">What Drives Me</h3>
								</div>
								<p className="text-gray-300 leading-relaxed text-base">
									I'm driven by a love for learning, problem-solving, and creating solutions that make
									a real impact. I believe{" "}
									<span className="text-white font-semibold">
										technology has the power to transform lives
									</span>
									.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Skills/Technologies */}
				<div className="mt-20 text-center">
					<h3 className="text-2xl font-semibold mb-8 text-white">Technologies I work with</h3>
					<div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
						{["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Vite", "Git"].map((tech) => (
							<span
								key={tech}
								className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 transition-all duration-300 hover:transform hover:scale-105"
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<p className="text-gray-400 text-lg mb-6">Ready to collaborate on your next project?</p>
					<a
						href="#contact"
						className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00f0ff] to-[#44d2e1] text-black font-bold px-8 py-4 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
					>
						Get In Touch
						<ArrowRightIcon className="w-5 h-5" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
