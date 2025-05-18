import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaStar, FaUser, FaCalendarAlt, FaTag } from "react-icons/fa";
import { fadeIn } from "../../../utils/animations";

const ProductDetails = () => {
	const { id } = useParams();

	const { data: phone, isLoading } = useQuery({
		queryKey: ["phone", id],
		queryFn: async () => {
			const res = await fetch(
				`https://usedphonesserver-saifuddinmonna.vercel.app/allphones/${id}`
			);
			const data = await res.json();
			return data;
		},
	});

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="loading loading-spinner loading-lg text-primary"></div>
			</div>
		);
	}

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					variants={fadeIn}
					initial="initial"
					animate="animate"
					className="bg-white rounded-xl shadow-lg overflow-hidden">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
						{/* Product Image */}
						<div className="relative">
							<PhotoProvider>
								<PhotoView src={phone?.image}>
									<img
										src={phone?.image}
										alt={phone?.brand}
										className="w-full h-[500px] object-cover rounded-lg cursor-pointer"
									/>
								</PhotoView>
							</PhotoProvider>
							<div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
								{phone?.phonesCondition}
							</div>
						</div>

						{/* Product Info */}
						<div className="space-y-6">
							<div>
								<h1 className="text-3xl font-bold text-gray-900 mb-2">
									{phone?.brand} {phone?.phoneModel}
								</h1>
								<div className="flex items-center gap-2 text-yellow-400">
									{[...Array(5)].map((_, index) => (
										<FaStar key={index} className="w-5 h-5" />
									))}
									<span className="text-gray-600 ml-2">(5.0)</span>
								</div>
							</div>

							<div className="space-y-4">
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Resale Price:</span>
									<span className="text-2xl font-bold text-primary">
										TK {phone?.resalePrice}
									</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Original Price:</span>
									<span className="text-xl font-medium text-gray-900">
										TK {phone?.originalPrice}
									</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Year of Use:</span>
									<span className="text-lg font-medium text-gray-900">
										{phone?.yearOfUse} years
									</span>
								</div>
							</div>

							<div className="border-t border-gray-200 pt-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									Seller Information
								</h3>
								<div className="space-y-3">
									<div className="flex items-center gap-3">
										<FaUser className="w-5 h-5 text-primary" />
										<span className="text-gray-700">{phone?.sellerName}</span>
									</div>
									<div className="flex items-center gap-3">
										<FaCalendarAlt className="w-5 h-5 text-primary" />
										<span className="text-gray-700">
											Posted on {new Date(phone?.timeOfPost).toLocaleDateString()}
										</span>
									</div>
									<div className="flex items-center gap-3">
										<FaTag className="w-5 h-5 text-primary" />
										<span className="text-gray-700">{phone?.phonesCondition}</span>
									</div>
								</div>
							</div>

							<div className="border-t border-gray-200 pt-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									Description
								</h3>
								<p className="text-gray-700 leading-relaxed">
									{phone?.description}
								</p>
							</div>

							<div className="flex gap-4 pt-6">
								<button className="flex-1 btn btn-primary text-white">
									Book Now
								</button>
								<button className="flex-1 btn btn-outline btn-primary">
									Add to Wishlist
								</button>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ProductDetails; 