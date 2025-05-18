import React, { useContext, useState } from "react"; // Added useState
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { fadeIn, staggerContainer } from "../../../utils/animations";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";
import PhoneOrderModal from "../../Dashboard/MyOrders/PhoneOrderModal"; // Import the modal
import useBuyer from "../../../hooks/useBuyer"; // Import useBuyer hook

const FeaturedProducts = ({ phones }) => {
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);
	const [isBuyer] = useBuyer(user?.email); // Check if user is a buyer

	const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
	const [selectedPhoneForBooking, setSelectedPhoneForBooking] = useState(null);

	const handleOpenBookingModal = (phone) => {
		setSelectedPhoneForBooking(phone);
		if (!user) {
			toast.error("Please login to book this product");
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
		setSelectedPhoneForBooking(null); // Clear selected phone
	};

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					variants={staggerContainer}
					initial="initial"
					animate="animate"
					className="text-center mb-12">
					<motion.h2
						variants={fadeIn}
						className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Featured Products
					</motion.h2>
					<motion.p
						variants={fadeIn}
						className="text-gray-600 max-w-2xl mx-auto">
						Discover our handpicked selection of premium used phones, each
						carefully verified for quality and performance.
					</motion.p>
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
							<div className="relative">
								<PhotoProvider>
									<PhotoView src={phone.image}>
										<img
											src={phone.image}
											alt={phone.brand}
											className="w-full h-64 object-cover cursor-pointer"
										/>
									</PhotoView>
								</PhotoProvider>
								<div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
									{phone.phonesCondition}
								</div>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									{phone.brand} {phone.phoneModel}
								</h3>
								<div className="space-y-3 mb-4">
									<div className="flex justify-between items-center">
										<span className="text-gray-600">Resale Price:</span>
										<span className="text-xl font-bold text-primary">
											TK {phone.resalePrice}
										</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-gray-600">Original Price:</span>
										<span className="text-lg font-medium text-gray-900">
											TK {phone.originalPrice}
										</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-gray-600">Year of Use:</span>
										<span className="text-lg font-medium text-gray-900">
											{phone.yearOfUse} years
										</span>
									</div>
								</div>

								<div className="border-t border-gray-200 pt-4">
									<div className="flex justify-between items-center mb-4">
										<div className="flex items-center gap-2">
											<img
												src={phone.sellerImage}
												alt={phone.sellerName}
												className="w-8 h-8 rounded-full"
											/>
											<span className="text-gray-700">{phone.sellerName}</span>
										</div>
										<span className="text-sm text-gray-500">
											{new Date(phone.timeOfPost).toLocaleDateString()}
										</span>
									</div>

									<div className="flex gap-3">
										<Link
											to={`/product/${phone._id}`}
											className="flex-1 btn btn-primary text-white">
											View Details
										</Link>
										<button
											onClick={() => handleOpenBookingModal(phone)}
											className={`flex-1 btn btn-outline btn-primary ${
												!user || !isBuyer ? "btn-disabled" : ""
											}`}
											disabled={!user || !isBuyer}
										>
											Book Now
										</button>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
				{selectedPhoneForBooking && (
					<PhoneOrderModal
						isOpen={isBookingModalOpen}
						closeModal={handleCloseBookingModal}
						onClickPhone={selectedPhoneForBooking}
					/>
				)}
			</div>
		</section>
	);
};

export default FeaturedProducts; 