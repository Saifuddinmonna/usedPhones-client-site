import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/animations";
import { FaApple, FaGoogle } from "react-icons/fa";
import { SiSamsung, SiXiaomi, SiOneplus } from "react-icons/si";

const Brands = () => {
	const brands = [
		{
			id: 1,
			name: "Apple",
			icon: <FaApple className="w-16 h-16" />,
			color: "text-gray-900",
		},
		{
			id: 2,
			name: "Samsung",
			icon: <SiSamsung className="w-16 h-16" />,
			color: "text-blue-600",
		},
		{
			id: 3,
			name: "Google",
			icon: <FaGoogle className="w-16 h-16" />,
			color: "text-red-500",
		},
		{
			id: 4,
			name: "Xiaomi",
			icon: <SiXiaomi className="w-16 h-16" />,
			color: "text-orange-500",
		},
		{
			id: 5,
			name: "OnePlus",
			icon: <SiOneplus className="w-16 h-16" />,
			color: "text-red-600",
		},
	];

	return (
		<section className="py-16 bg-gradient-to-b from-gray-50 to-white">
			<div className="container mx-auto px-4">
				<motion.div
					variants={fadeIn}
					initial="initial"
					animate="animate"
					className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Trusted Brands
					</h2>
					<p className="text-gray-700 max-w-2xl mx-auto text-lg">
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
							className="group">
							<div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center">
								<div className="relative w-32 h-32 mb-4 flex items-center justify-center">
									<div className={`${brand.color} group-hover:scale-110 transition-transform duration-300`}>
										{brand.icon}
									</div>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
									{brand.name}
								</h3>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Brands;
