import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { FaBeer } from "react-icons/fa";
import { AiOutlineStar, IconName } from "react-icons/ai";
import "./AllPhone.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import BookingModal from "../MyOrders/PhoneOrderModal";
import { AuthContext } from "../../../contexts/AuthProvider";
import useBuyer from "../../../hooks/useBuyer";
import useSeller from "../../../hooks/useSeller";
import { TiTick } from "react-icons/ti";
import { useEffect } from "react";
const AllPhonesForLayout = () => {
	const [onClickPhone, setOnClickPhone] = useState(null); // Initialize with null
	const [isBookingModalOpen, setIsBookingModalOpen] = useState(false); // State for modal
	const { user } = useContext(AuthContext);
	const [isBuyer] = useBuyer(user?.email);
	const [isSeller] = useSeller(user?.email);
	
	// console.log("modal data allphones ", onClickPhone);

	const { data: phones = [], refetch } = useQuery({
		queryKey: ["phones"],
		queryFn: async () => {
			const res = await fetch(
				"https://usedphonesserver-saifuddinmonna.vercel.app/allphones/all",
			);
			const data = await res.json();
			return data;
		},
	});

	useEffect(() => {
		refetch();
		console.log(refetch);
	}, [user]);
	//sellerName originalPrice  resalePrice sellerEmail sellerName timeOfPost yearOfUse
	
	const HandlesetOnClickPhone = (phone) => {
		// console.log("modal data allphones ", onClickPhone, phone);
		setOnClickPhone(phone);
		if (isBuyer && user) {
			setIsBookingModalOpen(true);
		} else {
			if (!user) {
				// toast.error("Please login to book an item."); // Consider adding toast if not already handled
				console.log("User not logged in, cannot open modal.");
			} else if (isSeller) {
				// toast.error("Sellers cannot book items.");
				console.log("Seller cannot book, cannot open modal.");
			} else if (!isBuyer) {
				// toast.error("Only buyers can book items.");
				console.log("User is not a buyer, cannot open modal.");
			}
		}
	};

	const closeBookingModalHandler = () => setIsBookingModalOpen(false);
	// console.log("modal data allphones ", onClickPhone);
	// console.log("phines length check", phones.length);
	if (phones.length !== 0) {
		return (
			<>
				<div className="mt-14 rounded-lg">
					<div className="text-center mb-12">
						<div className="inline-block border-b-2 border-primary pb-2">
							<h1 className="text-3xl md:text-4xl font-bold text-gray-800">All Advertised Items</h1>
						</div>
					</div>
					<div className="rounded-lg">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{phones?.map((phone, i) => (
								<div key={phone._id} className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
									<figure className="relative">
										<PhotoProvider>
											<PhotoView src={phone.image}>
												<img
													className="w-full h-64 object-cover cursor-pointer"
													src={phone.image}
													alt=" pic of phone "
												/>
											</PhotoView>
										</PhotoProvider>
									</figure>
									<div className="p-6">
										<div className="flex justify-between items-start mb-3">
											<h2 className="text-xl font-semibold text-gray-800">
												{phone?.brand} {phone.phoneModel}
											</h2>
											<span className="text-lg font-bold text-primary">
												TK {phone.resalePrice}
											</span>
										</div>

										<div className="mb-4">
											<table className="w-full text-sm">
												<thead>
													<tr>
														<th className="pb-1 text-left font-medium text-gray-500">Seller</th>
														<th className="pb-1 text-right font-medium text-gray-500">
															{phone.sellerVerified && <TiTick className="inline-block text-green-500 text-xl border border-green-600 rounded-full p-0.5 mr-1" />}
															{phone.sellerName}
														</th>
													</tr>
												</thead>
												<tbody>
													<tr className="border-t border-gray-200">
														<td className="py-1 text-gray-600">
															Phones' Condition
														</td>
														<td className="py-1 text-right text-gray-700 font-medium">
															{
																phone.phonesCondition
															}
														</td>
													</tr>

													<tr className="border-t border-gray-200">
														<td className="py-1 text-gray-600">Original Price</td>
														<td className="py-1 text-right text-gray-700 font-medium">
															TK&nbsp;{phone.originalPrice}
														</td>
													</tr>
													<tr className="border-t border-gray-200">
														<td className="py-1 text-gray-600">Year of Use </td>
														<td className="py-1 text-right text-gray-700 font-medium">
															{phone?.yearOfUse}
														</td>
													</tr>
													<tr className="border-t border-gray-200">
														<td className="py-1 text-gray-600">Posted On</td>
														<td className="py-1 text-right text-gray-700 font-medium">
															{
																new Date(phone.timeOfPost).toLocaleDateString()
															}
														</td>
													</tr>
													<tr className="border-t border-gray-200">
														<td className="py-1 text-gray-600">Location</td>
														<td className="py-1 text-right text-gray-700 font-medium">
															{phone.location || "N/A"}
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										<div className="mt-4 pt-3 border-t border-gray-200">
											<p className="text-gray-600 text-sm leading-relaxed">
												{`${phone?.description}` ? (
													<>
														{`${phone?.description}`.slice(
															0,
															100,
														)}
													</>
												) : (
													<p>Not available</p>
												)}
												{phone?.description && phone.description.length > 100 && "..."}
											</p>
										</div>
									</div>
									<div className="p-4 border-t border-gray-200">
										<button className="btn btn-sm btn-outline btn-primary w-full mb-2">
											View Details
										</button>
										<label
											onClick={() => HandlesetOnClickPhone(phone)}
											className={`btn btn-sm btn-primary w-full cursor-pointer ${
												!(isBuyer && user) ? "btn-disabled" : ""
											}`}
										>
											{isBuyer && user
												? "Book Now"
												: isSeller 
													? "Sellers can't book"
													: "Login as Buyer to Book"
											}
										</label>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<BookingModal 
					isOpen={isBookingModalOpen} 
					closeModal={closeBookingModalHandler} 
					onClickPhone={onClickPhone}
				/>
			</>
		);
	} else {
		return <></>;
	}
};

export default AllPhonesForLayout;
