import React from "react";
import { motion } from "framer-motion";
import AllPhonesForLayout from "../../Dashboard/AddPhone/AllPhones";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import CustomarReviews from "../Testimonial/CustomarReviews";

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="min-h-screen">
			{/* Hero Section */}
			<section className="mb-16">
				<Banner />
			</section>

			{/* Featured Products Section */}
			<section className="mb-16 px-4 md:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Featured Products
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Discover our handpicked selection of the best products available
					</p>
				</motion.div>
				<AllPhonesForLayout />
			</section>

			{/* Categories Section */}
			<section className="mb-16">
				<Brands />
			</section>

			{/* Testimonials Section */}
			<section className="mb-16 px-4 md:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						What Our Customers Say
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Read authentic reviews from our satisfied customers
					</p>
				</motion.div>
				<CustomarReviews />
			</section>
		</motion.div>
	);
};

export default Home;
