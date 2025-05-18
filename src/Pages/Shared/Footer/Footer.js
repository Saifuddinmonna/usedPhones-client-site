import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/animations";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const footerLinks = [
		{
			title: "Company",
			links: [
				{ name: "About Us", path: "/about" },
				{ name: "Careers", path: "/careers" },
				{ name: "Blog", path: "/blog" },
				{ name: "Press", path: "/press" },
			],
		},
		{
			title: "Support",
			links: [
				{ name: "Help Center", path: "/help" },
				{ name: "Safety Center", path: "/safety" },
				{ name: "Community", path: "/community" },
				{ name: "Contact Us", path: "/contact" },
			],
		},
		{
			title: "Legal",
			links: [
				{ name: "Privacy Policy", path: "/privacy" },
				{ name: "Terms of Service", path: "/terms" },
				{ name: "Cookie Policy", path: "/cookies" },
				{ name: "Licenses", path: "/licenses" },
			],
		},
	];

	const socialLinks = [
		{ icon: <FaFacebook />, url: "https://facebook.com" },
		{ icon: <FaTwitter />, url: "https://twitter.com" },
		{ icon: <FaInstagram />, url: "https://instagram.com" },
		{ icon: <FaLinkedin />, url: "https://linkedin.com" },
	];

	return (
		<footer className="bg-gray-900 text-gray-300">
			<div className="container mx-auto px-4 py-16">
				<motion.div
					variants={staggerContainer}
					initial="initial"
					animate="animate"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
					{/* Brand Section */}
					<motion.div
						variants={fadeIn}
						className="lg:col-span-2">
						<Link to="/" className="inline-block">
							<h2 className="text-2xl font-bold text-white mb-4">
								UsedPhones
							</h2>
						</Link>
						<p className="text-gray-400 mb-6 max-w-md">
							Your trusted marketplace for buying and selling used phones. We provide a secure platform for all your mobile device needs.
						</p>
						<div className="flex space-x-4">
							{socialLinks.map((social, index) => (
								<motion.a
									key={index}
									variants={fadeIn}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white transition-colors duration-300 text-xl">
									{social.icon}
								</motion.a>
							))}
						</div>
					</motion.div>

					{/* Links Sections */}
					{footerLinks.map((section, index) => (
						<motion.div
							key={section.title}
							variants={fadeIn}
							className="space-y-4">
							<h3 className="text-lg font-semibold text-white">
								{section.title}
							</h3>
							<ul className="space-y-2">
								{section.links.map((link) => (
									<li key={link.name}>
										<Link
											to={link.path}
											className="text-gray-400 hover:text-white transition-colors duration-300">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom Section */}
				<motion.div
					variants={fadeIn}
					initial="initial"
					animate="animate"
					className="border-t border-gray-800 mt-12 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 text-sm">
							© {currentYear} UsedPhones. All rights reserved.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<Link
								to="/privacy"
								className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
								Privacy Policy
							</Link>
							<Link
								to="/terms"
								className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
								Terms of Service
							</Link>
							<Link
								to="/cookies"
								className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
								Cookie Policy
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;