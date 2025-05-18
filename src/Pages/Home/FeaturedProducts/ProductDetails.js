import React, { Suspense, useState, useContext, lazy } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaStar, FaUser, FaCalendarAlt, FaTag } from "react-icons/fa";
import { fadeIn } from "../../../utils/animations";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import useBuyer from "../../../hooks/useBuyer";
import Loading from "../../Shared/Loading/Loading";

// Lazy load the modal component
const PhoneOrderModal = lazy(() => import("../../Dashboard/MyOrders/PhoneOrderModal"));

// Lazy load the image component
const LazyImage = lazy(() => import("../../../components/LazyImage/LazyImage"));

const ProductDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);
	const [isBuyer] = useBuyer(user?.email);
	const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

	// Optimized data fetching with caching
	const { data: phone, isLoading, error } = useQuery({
		queryKey: ["phone", id],
		queryFn: async () => {
			try {
				const res = await fetch(
					`https://usedphonesserver-dbpt-p3grkdoxf-saifuddinmonnas-projects.vercel.app/allphones/${id}`,
					{
						headers: {
							'Cache-Control': 'max-age=300', // Cache for 5 minutes
						},
					}
				);
				if (!res.ok) {
					throw new Error('Failed to fetch product details');
				}
				const data = await res.json();
				if (!data) {
					throw new Error("Product not found");
				}
				return data;
			} catch (error) {
				toast.error(error.message || "Failed to load product details");
				throw error;
			}
		},
		staleTime: 5 * 60 * 1000, // 5 minutes
		cacheTime: 10 * 60 * 1000, // 10 minutes
		refetchOnWindowFocus: false, // Disable refetch on window focus
		retry: 1, // Only retry once on failure
	});

	const handleOpenBookingModal = () => {
		if (!user) {
			toast.error("Please login to book this product.");
			navigate("/login");
			return;
		}
		if (!isBuyer) {
			toast.error("Only buyers can book products. Please check your account type.");
			return;
		}
		setIsBookingModalOpen(true);
	};

	const handleCloseBookingModal = () => {
		setIsBookingModalOpen(false);
	};

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h2 className="text-2xl font-semibold text-gray-700 mb-4">
						{error.message || "Something went wrong"}
					</h2>
					<button
						onClick={() => navigate(-1)}
						className="btn btn-primary">
						Go Back
					</button>
				</div>
			</div>
		);
	}

	if (!phone) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h2 className="text-2xl font-semibold text-gray-700 mb-4">
						Product not found
					</h2>
					<button
						onClick={() => navigate(-1)}
						className="btn btn-primary">
						Go Back
					</button>
				</div>
			</div>
		);
	}

	return (
		<Suspense fallback={<Loading />}>
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
										<Suspense fallback={<div className="w-full h-[500px] bg-gray-200 animate-pulse" />}>
											<LazyImage
												src={phone?.image}
												alt={phone?.brand}
												className="w-full h-[500px] object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
											/>
										</Suspense>
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

								<div>
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
										{phone?.description || "No description available"}
									</p>
								</div>

								<div className="flex gap-4 pt-6">
									<button
										onClick={() => navigate(-1)}
										className="flex-1 btn btn-outline btn-primary hover:bg-primary hover:text-white transition-colors">
										Go Back
									</button>
									<button 
										onClick={handleOpenBookingModal}
										className={`flex-1 btn btn-primary hover:bg-primary-dark transition-colors ${
											!user || !isBuyer ? "btn-disabled" : ""
										}`}
										disabled={!user || !isBuyer}
									>
										{!user ? "Login to Book" : !isBuyer ? "Buyers Only" : "Book Now"}
									</button>
								</div>
							</div>
						</div>
					</motion.div>
					
					<Suspense fallback={<Loading />}>
						<PhoneOrderModal
							isOpen={isBookingModalOpen}
							closeModal={handleCloseBookingModal}
							onClickPhone={phone}
						/>
					</Suspense>
				</div>
			</section>
		</Suspense>
	);
};

export default ProductDetails; 