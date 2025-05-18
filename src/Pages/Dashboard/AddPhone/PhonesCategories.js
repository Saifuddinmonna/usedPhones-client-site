import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState, Suspense, lazy } from "react";
import { FaBeer } from "react-icons/fa";
import { AiOutlineStar, IconName } from "react-icons/ai";
import "./AllPhone.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useLoaderData, Link } from "react-router-dom";
import useBuyer from "../../../hooks/useBuyer";
import { AuthContext } from "../../../contexts/AuthProvider";
import useSeller from "../../../hooks/useSeller";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../../Shared/Loading/Loading";

// Lazy load the modal component
const BookingModal = lazy(() => import("../MyOrders/PhoneOrderModal"));

const PhonesCategories = () => {
	const [onClickPhone, setOnClickPhone] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;
	const { user } = useContext(AuthContext);
	const [isBuyer] = useBuyer(user?.email);
	const [isSeller] = useSeller(user?.email);

	const phones = useLoaderData();

	// Implement pagination
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = phones?.slice(indexOfFirstItem, indexOfLastItem);
	const totalPages = Math.ceil(phones?.length / itemsPerPage);

	const handleOpenModal = (phone) => {
		setOnClickPhone(phone);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setOnClickPhone(null);
	};

	// Enhanced animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1, // Reduced stagger time
				delayChildren: 0.1 // Reduced delay
			}
		}
	};

	const itemVariants = {
		hidden: { 
			opacity: 0,
			y: 20, // Reduced y offset
			scale: 0.98
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring",
				duration: 0.5, // Reduced duration
				bounce: 0.3
			}
		},
		hover: {
			scale: 1.01, // Reduced scale
			transition: {
				type: "spring",
				duration: 0.2
			}
		}
	};

	const titleVariants = {
		hidden: { 
			opacity: 0,
			y: -20
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				duration: 0.5,
				bounce: 0.3
			}
		}
	};

	const buttonVariants = {
		hover: {
			scale: 1.03,
			transition: {
				type: "spring",
				duration: 0.2
			}
		},
		tap: {
			scale: 0.97
		}
	};

	if (phones.length !== 0) {
		return (
			<>
				<div className="mt-14 rounded-lg">
					<motion.div
						variants={titleVariants}
						initial="hidden"
						animate="visible"
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
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
							<AnimatePresence>
								{currentItems?.map((phone) => (
									<motion.div
										key={phone._id}
										variants={itemVariants}
										initial="hidden"
										animate="visible"
										whileHover="hover"
										className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
										<figure className="relative h-80 overflow-hidden">
											<PhotoProvider>
												<PhotoView src={phone.image}>
													<motion.img
														whileHover={{ scale: 1.05 }}
														transition={{ duration: 0.2 }}
														className="w-full h-full object-cover cursor-pointer"
														src={phone.image}
														alt="pic of phone"
														loading="lazy"
													/>
												</PhotoView>
											</PhotoProvider>
											<motion.div 
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: 0.2 }}
												className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
												{phone.phonesCondition}
											</motion.div>
										</figure>
										<div className="p-6">
											<motion.div 
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: 0.1 }}
												className="flex justify-between items-start mb-4">
												<h2 className="text-2xl font-bold text-gray-800">
													{phone?.brand} {phone.phoneModel}
												</h2>
												<span className="text-2xl font-bold text-primary">
													TK {phone.resalePrice}
												</span>
											</motion.div>

											<motion.div 
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ delay: 0.2 }}
												className="space-y-4">
												<div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
													<div className="flex items-center space-x-2">
														<AiOutlineStar className="text-yellow-400 text-xl" />
														<AiOutlineStar className="text-yellow-400 text-xl" />
														<span className="text-gray-700 font-medium">{phone.phonesCondition}</span>
													</div>
													<motion.button 
														variants={buttonVariants}
														whileHover="hover"
														whileTap="tap"
														className="btn btn-primary btn-sm opacity-90 hover:opacity-100 transition-opacity">
														Wish List
													</motion.button>
												</div>

												<div className="grid grid-cols-2 gap-4">
													<motion.div 
														initial={{ opacity: 0, x: -10 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{ delay: 0.3 }}
														className="bg-gray-50 p-3 rounded-lg">
														<p className="text-sm text-gray-500 mb-1">Original Price</p>
														<p className="text-lg font-semibold text-gray-800">TK {phone.originalPrice}</p>
													</motion.div>
													<motion.div 
														initial={{ opacity: 0, x: 10 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{ delay: 0.4 }}
														className="bg-gray-50 p-3 rounded-lg">
														<p className="text-sm text-gray-500 mb-1">Seller</p>
														<p className="text-lg font-semibold text-gray-800">{phone.sellerName}</p>
													</motion.div>
												</div>

												<motion.div 
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.5 }}
													className="mt-4 space-y-3">
													<motion.div
														variants={buttonVariants}
														whileHover="hover"
														whileTap="tap">
														<Link
															to={`/product/${phone._id}`}
															className="w-full btn btn-outline btn-primary hover:bg-primary hover:text-white transition-colors text-lg py-2">
															View Details
														</Link>
													</motion.div>
													<motion.button
														variants={buttonVariants}
														whileHover="hover"
														whileTap="tap"
														onClick={() => handleOpenModal(phone)}
														className={`w-full btn btn-primary hover:bg-primary-dark transition-colors text-lg py-2 ${
															!user || !isBuyer ? "btn-disabled" : ""
														}`}
														disabled={!user || !isBuyer}
													>
														{!user ? "Login to Book" : !isBuyer ? "Buyers Only" : "Book Now"}
													</motion.button>
												</motion.div>
											</motion.div>
										</div>
									</motion.div>
								))}
							</AnimatePresence>
						</div>

						{/* Pagination */}
						<div className="flex justify-center mt-8 space-x-2">
							{Array.from({ length: totalPages }, (_, i) => (
								<motion.button
									key={i + 1}
									variants={buttonVariants}
									whileHover="hover"
									whileTap="tap"
									onClick={() => setCurrentPage(i + 1)}
									className={`btn btn-sm ${
										currentPage === i + 1 ? "btn-primary" : "btn-outline"
									}`}
								>
									{i + 1}
								</motion.button>
							))}
						</div>
					</motion.div>
				</div>

				<Suspense fallback={<Loading />}>
					<BookingModal
						isOpen={isModalOpen}
						closeModal={handleCloseModal}
						onClickPhone={onClickPhone}
					/>
				</Suspense>
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

	