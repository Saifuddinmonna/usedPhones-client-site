import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import CustomarReviews from "../Testimonial/CustomarReviews";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const Home = () => {
	const { data: phones = [] } = useQuery({
		queryKey: ["phones"],
		queryFn: async () => {
			const res = await fetch(
				"https://usedphonesserver-saifuddinmonna.vercel.app/allphones/all"
			);
			const data = await res.json();
			return data;
		},
	});

	// Get featured phones (first 6 phones)
	const featuredPhones = phones.slice(0, 6);

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
			<section className="mb-16">
				<FeaturedProducts phones={featuredPhones} />
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
