import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaApple, FaAndroid, FaMobileAlt, FaPlusCircle } from "react-icons/fa"; // Example icons

// Animation Variants
const sectionFadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const staggerContainer = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const categoryItemVariant = {
	initial: { opacity: 0, scale: 0.9, y: 20 },
	animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const categoriesData = [
	{
		id: "apple",
		name: "Apple iPhones",
		icon: <FaApple className="w-12 h-12 mb-4 text-primary" />,
		description: "Explore the latest and classic iPhones.",
		linkTo: "/category/apple",
	},
	{
		id: "samsung",
		name: "Samsung Galaxy",
		icon: <FaAndroid className="w-12 h-12 mb-4 text-primary" />,
		description: "Discover a wide range of Samsung devices.",
		linkTo: "/category/samsung",
	},
	{
		id: "google",
		name: "Google Pixel",
		icon: <FaMobileAlt className="w-12 h-12 mb-4 text-primary" />,
		description: "Experience the best of Google's hardware.",
		linkTo: "/category/google",
	},
	{
		id: "oneplus",
		name: "OnePlus Phones",
		icon: <FaPlusCircle className="w-12 h-12 mb-4 text-primary" />, // Placeholder, change as needed
		description: "High-performance phones with great features.",
		linkTo: "/category/oneplus",
	},
];

const CategoriesSection = () => {
	return (
		<section className="py-16 md:py-24 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					variants={sectionFadeIn}
					initial="initial"
					whileInView="animate" // Animate when section comes into view
					viewport={{ once: true, amount: 0.3 }} // Trigger animation once, when 30% is visible
					className="text-center mb-12 md:mb-16">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
						Explore Our Categories
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Find the perfect used phone by browsing through our popular categories.
					</p>
				</motion.div>

				<motion.div
					variants={staggerContainer}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.2 }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
					{categoriesData.map((category) => (
						<motion.div key={category.id} variants={categoryItemVariant}>
							<Link
								to={category.linkTo}
								className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl 
                           transform hover:-translate-y-2 transition-all duration-300 
                           ease-in-out h-full flex flex-col items-center text-center group">
								{category.icon}
								<h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
									{category.name}
								</h3>
								<p className="text-sm text-gray-600 flex-grow">
									{category.description}
								</p>
							</Link>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default CategoriesSection;