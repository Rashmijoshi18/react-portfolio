import { useState } from "react";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	// Navigation items data
	const navigationItems = [
		{ id: "home", label: "Home", href: "#home" },
		{ id: "about", label: "About", href: "#about" },
		{ id: "services", label: "Services", href: "#services" },
		{ id: "projects", label: "Projects", href: "#projects" },
		{ id: "contact", label: "Contact", href: "#contact" },
	];

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const closeMenu = () => {
		setShowMenu(false);
	};

	// Smooth scroll function
	const handleSmoothScroll = (e, targetId) => {
		e.preventDefault();
		const targetElement = document.querySelector(targetId);

		if (targetElement) {
			const offsetTop = targetElement.offsetTop - 50; // Account for sticky navbar height
			window.scrollTo({
				top: offsetTop,
				behavior: "smooth",
			});
		}

		// Close mobile menu if open
		closeMenu();
	};

	return (
		<nav className="sticky top-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-between px-8 py-4 z-[1000] shadow-lg backdrop-blur-sm">
			{/* Logo */}
			<div className="flex items-center gap-2">
				<a
					href="#home"
					onClick={(e) => handleSmoothScroll(e, "#home")}
					className="text-[#00f0ff] font-bold text-xl transition-colors duration-300 hover:text-[#00d4e6] cursor-pointer"
				>
					Rashmi Joshi
				</a>
			</div>

			{/* Menu Icon - Mobile Only */}
			<div
				className="text-3xl text-white cursor-pointer md:hidden hover:text-[#00f0ff] transition-colors duration-300"
				onClick={toggleMenu}
			>
				&#9776;
			</div>

			{/* Desktop Menu */}
			<ul className="hidden md:flex list-none gap-6 m-0 p-0">
				{navigationItems.map((item) => (
					<li key={item.id}>
						<a
							href={item.href}
							onClick={(e) => handleSmoothScroll(e, item.href)}
							className="text-white no-underline text-base font-bold hover:text-[#00f0ff] transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#00f0ff] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>

			{/* Mobile Sidebar */}
			<div
				className={`fixed top-0 w-56 h-screen bg-[rgba(0,0,0,0.95)] p-5 z-[1500] flex flex-col backdrop-blur-md transition-all duration-300 ease-out md:hidden ${
					showMenu ? "left-0 opacity-100" : "-left-56 opacity-0"
				}`}
			>
				{/* Close Button */}
				<span
					className="text-3xl text-white self-end cursor-pointer mb-5 hover:text-[#ff007f] transition-colors duration-300 hover:rotate-90 transform transition-transform"
					onClick={closeMenu}
				>
					&times;
				</span>

				{/* Mobile Navigation Links */}
				<ul className="flex flex-col gap-5 list-none m-0 p-0">
					{navigationItems.map((item) => (
						<li key={item.id}>
							<a
								href={item.href}
								onClick={(e) => handleSmoothScroll(e, item.href)}
								className="text-white text-lg no-underline font-bold hover:text-[#00f0ff] transition-all duration-300 block py-2 px-1 hover:pl-3 hover:bg-[rgba(0,240,255,0.1)] rounded cursor-pointer"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</div>

			{/* Backdrop/Overlay for mobile menu */}
			{showMenu && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-[1400] md:hidden backdrop-blur-sm"
					onClick={closeMenu}
				></div>
			)}
		</nav>
	);
};

export default Navbar;
