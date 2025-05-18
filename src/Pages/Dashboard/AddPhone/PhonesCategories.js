import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { FaBeer } from "react-icons/fa";
import { AiOutlineStar, IconName } from "react-icons/ai";
import "./AllPhone.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import BookingModal from "../MyOrders/PhoneOrderModal";
import { useLoaderData } from "react-router-dom";
import useBuyer from "../../../hooks/useBuyer";
import { AuthContext } from "../../../contexts/AuthProvider";
import useSeller from "../../../hooks/useSeller";
import { motion } from "framer-motion";

const PhonesCategories = () => {
	const [onClickPhone, setOnClickPhone] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { user } = useContext(AuthContext);
	const [isBuyer] = useBuyer(user?.email);
	const [isSeller] = useSeller(user?.email);

	const phones = useLoaderData();

	const handleOpenModal = (phone) => {
		setOnClickPhone(phone);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setOnClickPhone(null);
	};

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut"
			}
		}
	};

	if (phones.length !== 0) {
		return (
			<>
				<div className="mt-14 rounded-lg">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12">
						<div className="inline-block border-b-2 border-primary pb-2">
							<h1 className="text-3xl md:text-4xl font-bold text-gray-800">All Advertised Items</h1>
						</div>
					</motion.div>
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="rounded-lg">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{phones?.map((phone, i) => (
								<motion.div
									key={phone._id}
									variants={itemVariants}
									className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
									<figure className="relative">
										<PhotoProvider>
											<PhotoView src={phone.image}>
												<img
													className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
													src={phone.image}
													alt="pic of phone"
												/>
											</PhotoView>
										</PhotoProvider>
										<div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
											{phone.phonesCondition}
										</div>
									</figure>
									<div className="p-6">
										<div className="flex justify-between items-start mb-4">
											<h2 className="text-xl font-semibold text-gray-800">
												{phone?.brand} {phone.phoneModel}
											</h2>
											<span className="text-lg font-bold text-primary">
												TK {phone.resalePrice}
											</span>
										</div>

										<div className="space-y-4">
											<div className="flex items-center justify-between">
												<div className="flex items-center space-x-2">
													<AiOutlineStar className="text-yellow-400 text-xl" />
													<AiOutlineStar className="text-yellow-400 text-xl" />
													<span className="text-gray-600">{phone.phonesCondition}</span>
												</div>
												<button className="btn btn-primary btn-sm opacity-80 hover:opacity-100 transition-opacity">
													Wish List
												</button>
											</div>

											<div className="grid grid-cols-2 gap-4">
												<div className="bg-gray-50 p-3 rounded-lg">
													<p className="text-sm text-gray-500">Original Price</p>
													<p className="font-semibold text-gray-800">TK {phone.originalPrice}</p>
												</div>
												<div className="bg-gray-50 p-3 rounded-lg">
													<p className="text-sm text-gray-500">Seller</p>
													<p className="font-semibold text-gray-800">{phone.sellerName}</p>
												</div>
											</div>

											<div className="grid grid-cols-2 gap-4">
												<div className="bg-gray-50 p-3 rounded-lg">
													<p className="text-sm text-gray-500">Year of Use</p>
													<p className="font-semibold text-gray-800">{phone?.yearOfUse}</p>
												</div>
												<div className="bg-gray-50 p-3 rounded-lg">
													<p className="text-sm text-gray-500">Buying Date</p>
													<p className="font-semibold text-gray-800">{phone.dateOfBuying}</p>
												</div>
											</div>

											<div className="bg-gray-50 p-3 rounded-lg">
												<p className="text-sm text-gray-500">Posted</p>
												<p className="font-semibold text-gray-800">{phone.timeOfPost}</p>
											</div>

											<div className="bg-gray-50 p-3 rounded-lg">
												<p className="text-sm text-gray-500">Description</p>
												<p className="text-gray-800 line-clamp-2">
													{phone?.description || "No description available"}
												</p>
											</div>
										</div>

										<div className="mt-6 space-y-3">
											<button className="w-full btn btn-outline btn-primary hover:bg-primary hover:text-white transition-colors">
												View Details
											</button>
											<button
												onClick={() => handleOpenModal(phone)}
												className="w-full btn btn-primary hover:bg-primary-dark transition-colors">
												{isBuyer ? "Book Now" : "Login First to Book"}
											</button>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
				<BookingModal
					isOpen={isModalOpen}
					closeModal={handleCloseModal}
					onClickPhone={onClickPhone}
				/>
			</>
		);
	} else {
		return (
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-center p-8">
				<h2 className="text-2xl font-semibold text-gray-700">No phones found in this category</h2>
			</motion.div>
		);
	}
};

export default PhonesCategories;

	