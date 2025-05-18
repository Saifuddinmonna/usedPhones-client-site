

//const PhonesCategories = () => {

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

const PhonesCategories = () => {
	const [onClickPhone, setOnClickPhone] = useState({});
	console.log("modal data allphones ", onClickPhone);
	const { user } = useContext(AuthContext);
	const [isBuyer] = useBuyer(user?.email);
	const [isSeller] = useSeller(user?.email);

	const phones = useLoaderData();
	//sellerName originalPrice  resalePrice sellerEmail sellerName timeOfPost yearOfUse
	const HandlesetOnClickPhone = (phone) => {
		// console.log("modal data allphones ", onClickPhone, phone);

		setOnClickPhone(phone);
		console.log("modal data allphones ", onClickPhone);
	};
	console.log("modal data allphones ", onClickPhone);
	console.log("phines length check", phones.length);
	if (phones.length !== 0) {
		return (
			<>
				<div className="mt-14 rounded-lg">
					<div>
						<div className="border rounded-full text-center shadow-xl p-4 m-6">
							<h1 className="text-4xl">All Advertised Items</h1>
						</div>
					</div>
					<div className="rounded-lg">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  gap-y-10 shadow-xl rounded-lg ">
							{phones?.map((phone, i) => (
								<div className="card bg-base-100 shadow-xl">
									<figure className="px-10 pt-10">
										<PhotoProvider>
											<PhotoView src={phone.image}>
												<img
													className="md:h-64 lg:h-72 minhight w-full object-cover rounded-t-3xl"
													src={phone.image}
													alt=" pic of phone "
												/>
											</PhotoView>
										</PhotoProvider>
									</figure>
									<div className=" bgColor card-body items-center text-center">
										<div className="flex flex-wrap mt-3 justify-around">
											<h2 className="text-2xl text-bolder text-primary">
												{phone?.brand}-
												{phone.phoneModel}-
											</h2>
											<div className="border rounded-full p-2 text-bolder text-bolder text-xl text-strong ">
												tk {phone.resalePrice}
											</div>
										</div>
										<div className=" text-black divider text divider-vertical"></div>
										<div className="shadow-sm rounded-lg ">
											<div className="flex justify-around my-3 ">
												<div className="border rounded-full mr-3 flex p-2 text-bolder  text-xl ">
													<AiOutlineStar className="d-inline-block text-center text-base text-red-300 text-bold"></AiOutlineStar>
													<AiOutlineStar className="d-inline-block text-center text-base text-red-400 text-bolder"></AiOutlineStar>{" "}
													{phone.phonesCondition}
												</div>
												<div>
													<button className="btn btn-primary opacity-80 d-block  shadow-md">
														{" "}
														Whish List
													</button>
												</div>
											</div>

											<div className="flex justify-around ">
												<div className=" text-lg border rounded-full p-2 text-bold text-bold ">
													Original Price-{" "}
													{phone.originalPrice}
												</div>
												<div className=" text-lg border rounded-full p-2 text-bold text-bold">
													Seller Name -{" "}
													{phone.sellerName}
												</div>
											</div>

											<div className="flex justify-around ">
												<div className=" text-lg border rounded-full p-2 text-bold text-bold">
													Year of Use -
													{phone?.yearOfUse}
												</div>

												<div className=" text-lg border rounded-full p-2 text-bold text-bold">
													Buying Date-
													{phone.dateOfBuying}
												</div>
											</div>

											<div className="flex justify-around ">
												<div className=" text-lg border rounded-full p-2 text-bold text-bold">
													Time fo Posting :{" "}
													{phone.timeOfPost}
												</div>
											</div>
										</div>
										<div className=" text-black text-justify divider divider-vertical"></div>
										<div className="px-3">
											<p>
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
												...
												{/* {`${details}`.slice(0, 7)} */}
											</p>
										</div>
									</div>
									<div className="flex flex-col justify-around">
										<div className="p-2 mx- block bg-primary mb- w-full opacity-90 mb-1 shadow text-center">
											View Details
										</div>
										<div className=" p-2 mx- bg-primary mb- w-full opacity-90 rounded-b-xl text-center">
											<label
												onClick={() =>
													HandlesetOnClickPhone(phone)
												}
												htmlFor="ordering-modal"
												className="">
												{/* {isBuyer
													? "Boock Now"
													: "login  First to Boock"} */}
											</label>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<BookingModal onClickPhone={onClickPhone}></BookingModal>
			</>
		);
	} else {
		return <></>;
	}
};

export default PhonesCategories;

	