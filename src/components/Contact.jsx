import { useState } from "react";
import { EnvelopeIcon, MapPinIcon, BriefcaseIcon, LinkIcon } from "@heroicons/react/24/outline";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email is invalid";
		}
		if (formData.phone && !/^\+?[\d\s\-()]+$/.test(formData.phone)) {
			newErrors.phone = "Phone number is invalid";
		}
		if (!formData.message.trim()) newErrors.message = "Message is required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			alert(`Thank you, ${formData.name}! Your message has been sent.`);
			setFormData({ name: "", email: "", phone: "", message: "" });
			setIsSubmitting(false);
		}, 1000);
	};

	const contactInfo = [
		{
			icon: <EnvelopeIcon className="w-6 h-6" />,
			label: "Email",
			value: "rashmijoshi3699@gmail.com",
			link: "mailto:rashmijoshi3699@gmail.com",
		},
		{
			icon: <LinkIcon className="w-6 h-6" />,
			label: "LinkedIn",
			value: "@rashmi3699",
			link: "https://www.linkedin.com/in/rashmi3699",
		},
		{
			icon: <MapPinIcon className="w-6 h-6" />,
			label: "Location",
			value: "Punjab, India",
		},
		{
			icon: <BriefcaseIcon className="w-6 h-6" />,
			label: "Work",
			value: "Available for opportunities",
		},
	];

	return (
		<section
			id="contact"
			className="py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#0d0d12] via-[#0d1218] to-[#0d0d17] text-white relative"
		>
			{/* Simple background decoration */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#ff007f]/5 via-transparent to-[#00f0ff]/5"></div>

			<div className="relative max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-12 md:mb-16 lg:mb-20">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
						Contact <span className="text-[#00f0ff]">Me</span>
					</h2>
					<div className="w-16 h-1 bg-[#00f0ff] mx-auto rounded-full"></div>
					<p className="text-base sm:text-lg text-gray-300 mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
						Ready to start your next project? Let's create something amazing together!
					</p>
				</div>

				{/* Contact Content */}
				<div className="flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-10 lg:gap-12">
					{/* Contact Information */}
					<div className="w-full lg:flex-1 lg:max-w-lg">
						<div className="mb-6 md:mb-8">
							<h3 className="text-xl sm:text-2xl font-semibold text-[#00f0ff] mb-3 md:mb-4">
								Get In Touch
							</h3>
							<p className="text-gray-300 leading-relaxed text-sm sm:text-base">
								I'd love to hear from you! Whether you have a project in mind, want to collaborate, or
								just want to say hello, don't hesitate to reach out.
							</p>
						</div>

						{/* Contact Details */}
						<div className="space-y-3 md:space-y-4">
							{contactInfo.map((info, index) => {
								const CardContent = () => (
									<div className="flex items-center gap-3 sm:gap-4">
										<div className="p-2 sm:p-3 bg-[#00f0ff]/10 rounded-2xl text-[#00f0ff] flex-shrink-0">
											{info.icon}
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mb-1">
												{info.label}
											</p>
											<p className="text-white font-medium text-sm sm:text-base break-words">
												{info.value}
											</p>
										</div>
									</div>
								);

								return (
									<div key={index}>
										{info.link ? (
											<a
												href={info.link}
												target="_blank"
												rel="noopener noreferrer"
												className="block bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-[#00f0ff]/30 hover:bg-white/8 transition-all duration-300 cursor-pointer"
											>
												<CardContent />
											</a>
										) : (
											<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-[#00f0ff]/30 transition-all duration-300">
												<CardContent />
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>

					{/* Contact Form */}
					<div className="w-full lg:flex-1 lg:max-w-lg">
						<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
							{/* Form Header */}
							<div className="mb-6 md:mb-8">
								<h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Send Message</h3>
								<p className="text-gray-400 text-sm sm:text-base">
									Fill out the form below and I'll get back to you soon!
								</p>
							</div>

							<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
								{/* Name Input */}
								<div>
									<input
										type="text"
										name="name"
										placeholder="Your Name*"
										value={formData.name}
										onChange={handleChange}
										className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/50 focus:border-[#00f0ff] text-sm sm:text-base ${
											errors.name ? "border-red-500" : ""
										}`}
									/>
									{errors.name && (
										<p className="text-red-400 text-xs sm:text-sm mt-1">{errors.name}</p>
									)}
								</div>

								{/* Email Input */}
								<div>
									<input
										type="email"
										name="email"
										placeholder="Email Address*"
										value={formData.email}
										onChange={handleChange}
										className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/50 focus:border-[#00f0ff] text-sm sm:text-base ${
											errors.email ? "border-red-500" : ""
										}`}
									/>
									{errors.email && (
										<p className="text-red-400 text-xs sm:text-sm mt-1">{errors.email}</p>
									)}
								</div>

								{/* Phone Input */}
								<div>
									<input
										type="tel"
										name="phone"
										placeholder="Phone Number"
										value={formData.phone}
										onChange={handleChange}
										className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/50 focus:border-[#00f0ff] text-sm sm:text-base ${
											errors.phone ? "border-red-500" : ""
										}`}
									/>
									{errors.phone && (
										<p className="text-red-400 text-xs sm:text-sm mt-1">{errors.phone}</p>
									)}
								</div>

								{/* Message Textarea */}
								<div>
									<textarea
										name="message"
										placeholder="Your Message*"
										value={formData.message}
										onChange={handleChange}
										rows="4"
										className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 resize-vertical transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/50 focus:border-[#00f0ff] text-sm sm:text-base ${
											errors.message ? "border-red-500" : ""
										}`}
									/>
									{errors.message && (
										<p className="text-red-400 text-xs sm:text-sm mt-1">{errors.message}</p>
									)}
								</div>

								{/* Submit Button */}
								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full py-3 sm:py-4 px-6 bg-gradient-to-r from-[#00f0ff] to-[#44d2e1] text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/50 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
								>
									{isSubmitting ? "Sending..." : "Send Message"}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
