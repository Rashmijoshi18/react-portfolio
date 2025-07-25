import {
	CodeBracketIcon,
	Squares2X2Icon,
	GlobeAltIcon,
	MagnifyingGlassIcon,
	CheckBadgeIcon,
	ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Services = () => {
	const services = [
		{
			id: "frontend-dev",
			title: "Frontend Development",
			description:
				"I specialize in HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS to create responsive, modern websites.",
			icon: <CodeBracketIcon className="w-8 h-8" />,
			color: "text-[#00f0ff]",
			bgColor: "bg-[#00f0ff]/10",
			borderColor: "hover:border-[#00f0ff]/30",
		},
		{
			id: "graphic-design",
			title: "Graphic Design",
			description:
				"Designing intuitive logos and brochures using Figma and Canva to create compelling visual identities.",
			icon: <Squares2X2Icon className="w-8 h-8" />,
			color: "text-[#ff007f]",
			bgColor: "bg-[#ff007f]/10",
			borderColor: "hover:border-[#ff007f]/30",
		},
		{
			id: "website-creation",
			title: "Website Creation",
			description:
				"Build personal blogs, portfolios, or event-based websites tailored to individual needs and requirements.",
			icon: <GlobeAltIcon className="w-8 h-8" />,
			color: "text-[#00f0ff]",
			bgColor: "bg-[#00f0ff]/10",
			borderColor: "hover:border-[#00f0ff]/30",
		},
		{
			id: "uiux-audit",
			title: "UI/UX Audit",
			description:
				"Analyze and improve the usability, design flow, and overall user experience of your website or web application.",
			icon: <MagnifyingGlassIcon className="w-8 h-8" />,
			color: "text-[#ff007f]",
			bgColor: "bg-[#ff007f]/10",
			borderColor: "hover:border-[#ff007f]/30",
		},
	];

	const certifications = [
		"Python Programming – HackerRank",
		"C Programming – Great Learning",
		"Frontend Development – HackerRank",
		"Hack-a-Throne 1.0 – GeeksforGeeks",
	];

	return (
		<section id="services" className="py-20 px-6 bg-[#1e1e2f] text-white relative">
			{/* Simple background decoration */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 via-transparent to-[#ff007f]/5"></div>

			<div className="relative max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-20">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						My <span className="text-[#ff007f]">Services</span>
					</h2>
					<div className="w-16 h-1 bg-[#ff007f] mx-auto rounded-full"></div>
					<p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
						Transforming ideas into digital reality with modern technologies and creative solutions
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
					{services.map((service, index) => (
						<div key={service.id} className="group">
							<div
								className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 ${service.borderColor} transition-all duration-300 hover:transform hover:scale-[1.02] h-full`}
							>
								{/* Icon */}
								<div className="flex items-center gap-4 mb-6">
									<div className={`p-4 ${service.bgColor} rounded-2xl ${service.color}`}>
										{service.icon}
									</div>
									<h3 className={`text-2xl font-semibold ${service.color}`}>{service.title}</h3>
								</div>

								{/* Description */}
								<p className="text-gray-300 leading-relaxed text-base">{service.description}</p>
							</div>
						</div>
					))}
				</div>

				{/* Certifications Section */}
				<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 mb-16">
					<div className="flex items-center gap-4 mb-6">
						<div className="p-4 bg-yellow-400/10 rounded-2xl text-yellow-400">
							<CheckBadgeIcon className="w-8 h-8 text-yellow-400" />
						</div>
						<h3 className="text-2xl font-semibold text-yellow-400">Certifications</h3>
					</div>

					<p className="text-gray-300 leading-relaxed text-base mb-6">
						Professional certifications demonstrating expertise in various technologies:
					</p>

					<div className="grid md:grid-cols-2 gap-4">
						{certifications.map((cert, index) => (
							<div
								key={index}
								className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
							>
								<div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
								<span className="text-gray-300 text-sm">{cert}</span>
							</div>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center">
					<p className="text-gray-400 text-lg mb-6">Ready to bring your ideas to life?</p>
					<a
						href="#contact"
						className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00f0ff] to-[#44d2e1] text-black font-bold px-8 py-4 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
					>
						Let's Work Together
						<ArrowRightIcon className="w-5 h-5" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Services;
