import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/animations";

const Brands = () => {
	const brands = [
		{
			id: 1,
			name: "Apple",
			logo: "https://i.ibb.co/0jQ8X0J/apple.png",
		},
		{
			id: 2,
			name: "Samsung",
			logo: "https://i.ibb.co/0jQ8X0J/samsung.png",
		},
		{
			id: 3,
			name: "Google",
			logo: "https://i.ibb.co/0jQ8X0J/google.png",
		},
		{
			id: 4,
			name: "Xiaomi",
			logo: "https://i.ibb.co/0jQ8X0J/xiaomi.png",
		},
		{
			id: 5,
			name: "OnePlus",
			logo: "https://i.ibb.co/0jQ8X0J/oneplus.png",
		},
	];

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					variants={fadeIn}
					initial="initial"
					animate="animate"
					className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Trusted Brands
					</h2>
					<p className="text-gray-600">
						We work with the most trusted brands in the industry
					</p>
				</motion.div>

				<motion.div
					variants={staggerContainer}
					initial="initial"
					animate="animate"
					className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{brands.map((brand) => (
						<motion.div
							key={brand.id}
							variants={fadeIn}
							className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
							<img
								src={brand.logo}
								alt={brand.name}
								className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Brands;
