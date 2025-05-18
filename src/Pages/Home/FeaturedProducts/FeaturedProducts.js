import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AiOutlineStar } from "react-icons/ai";
import { fadeIn, staggerContainer } from "../../../utils/animations";

const FeaturedProducts = ({ phones }) => {
	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					variants={fadeIn}
					initial="initial"
					animate="animate"
					className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Featured Products
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Discover our handpicked selection of the best products available
					</p>
				</motion.div>

				<motion.div
					variants={staggerContainer}
					initial="initial"
					animate="animate"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{phones?.map((phone) => (
						<motion.div
							key={phone._id}
							variants={fadeIn}
							className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
							<figure className="relative h-64 overflow-hidden">
								<PhotoProvider>
									<PhotoView src={phone.image}>
										<img
											src={phone.image}
											alt={phone.brand}
											className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
										/>
									</PhotoView>
								</PhotoProvider>
								<div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
									{phone.phonesCondition}
								</div>
							</figure>

							<div className="p-6">
								<div className="flex justify-between items-start mb-4">
									<h3 className="text-2xl font-bold text-gray-900">
										{phone.brand} {phone.phoneModel}
									</h3>
									<div className="text-2xl font-bold text-primary">
										TK {phone.resalePrice}
									</div>
								</div>

								<div className="space-y-3 mb-6">
									<div className="flex justify-between text-gray-600">
										<span>Original Price:</span>
										<span className="font-medium">TK {phone.originalPrice}</span>
									</div>
									<div className="flex justify-between text-gray-600">
										<span>Year of Use:</span>
										<span className="font-medium">{phone.yearOfUse} years</span>
									</div>
									<div className="flex justify-between text-gray-600">
										<span>Seller:</span>
										<span className="font-medium">{phone.sellerName}</span>
									</div>
									<div className="flex justify-between text-gray-600">
										<span>Posted:</span>
										<span className="font-medium">
											{new Date(phone.timeOfPost).toLocaleDateString()}
										</span>
									</div>
								</div>

								<div className="flex gap-4">
									<Link
										to={`/phone/${phone._id}`}
										className="flex-1 btn btn-primary text-white">
										View Details
									</Link>
									<button
										className="flex-1 btn btn-outline btn-primary"
										onClick={() => document.getElementById("booking-modal").showModal()}>
										Book Now
									</button>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default FeaturedProducts; 