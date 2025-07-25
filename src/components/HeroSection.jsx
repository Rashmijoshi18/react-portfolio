import React, { useEffect, useState } from "react";
import My_resume from "../assets/me_resume.pdf";

const HeroSection = () => {
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
		<section
			id="home"
			className="relative h-screen px-6 flex justify-center items-center text-center bg-[radial-gradient(circle_at_center,#0f0f1f,#000)] text-white overflow-hidden"
		>
			{/* Background Grid Pattern */}
			<div
				className="absolute w-full h-full opacity-30 z-0"
				style={{
					backgroundImage: `
						linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.03) 75%, rgba(255,255,255,0.03)),
						linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.03) 75%, rgba(255,255,255,0.03))
					`,
					backgroundSize: "40px 40px",
				}}
			>
				{/* Radial Overlay */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_60%)] z-[1] pointer-events-none"></div>
			</div>

			{/* Main Content */}
			<div className="z-[2] max-w-4xl w-full pt-10 animate-fade-in">
				{/* Main Heading with Gradient */}
				<h1
					className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-4 leading-tight animate-pulse-subtle"
					style={{
						background: "linear-gradient(to right, #00f0ff, #ff00ff)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text",
						textShadow: "0 0 15px rgba(0, 255, 255, 0.3)",
						letterSpacing: "2px",
					}}
				>
					Hi, I'm <span className="font-black">Rashmi Joshi</span>
				</h1>

				{/* Typing Animation Line */}
				<h3
					className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 md:mb-8 text-white animate-bounce-subtle"
					style={{
						textShadow: "0 0 8px rgba(0, 255, 255, 0.4)",
					}}
				>
					<span className="opacity-90">I am a </span>
					<span className="text-[#00f0ff] font-bold">{text}</span>
					<span className="text-[#00f0ff] animate-pulse font-thin">|</span>
				</h3>

				{/* Subtitle */}
				<p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed font-medium px-4 md:px-0 animate-slide-up-delayed">
					Passionate about crafting engaging, user-friendly digital experiences.
				</p>

				{/* Buttons */}
				<div className="flex flex-wrap justify-center gap-4 animate-slide-up-more-delayed">
					<a
						href="#contact"
						className="bg-gradient-to-r from-[#24696e] to-[#0cbaf0] text-black px-8 py-3.5 rounded-full text-base font-extrabold border-none uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95 transform"
						style={{
							boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
						}}
					>
						Contact Me
					</a>
					<a
						href={My_resume}
						download
						target="_blank"
						rel="noopener noreferrer"
						className="bg-gradient-to-r from-[#24696e] to-[#0cbaf0] text-black px-8 py-3.5 rounded-full text-base font-extrabold border-none uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95 transform"
						style={{
							boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
						}}
					>
						Resume
					</a>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
