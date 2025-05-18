import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Review from "./Review";
import { fadeIn, staggerContainer } from "../../../utils/animations";
import toast from "react-hot-toast";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const CustomarReviews = () => {
	const { user } = useContext(AuthContext);
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const { data: userscommences = [] } = useQuery({
		queryKey: ["userscommences"],
		queryFn: async () => {
			const res = await fetch(
				"https://usedphonesserver-saifuddinmonna.vercel.app/userscommences"
			);
			const data = await res.json();
			return data;
		},
	});

	const { data: divisions = [] } = useQuery({
		queryKey: ["division"],
		queryFn: async () => {
			const res = await fetch(
				"https://usedphonesserver-saifuddinmonna.vercel.app/divisionsnameforreview"
			);
			const data = await res.json();
			return data;
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm();

	const openModal = () => {
		if (!user) {
			toast.error("Please login to add a review");
			navigate("/login");
			return;
		}
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
		reset();
	};

	const handleAddReview = async (data) => {
		try {
			const formData = new FormData();
			formData.append("image", data.image[0]);

			const imgRes = await fetch(
				`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`,
				{
					method: "POST",
					body: formData,
				}
			);
			const imgData = await imgRes.json();

			const reviewData = {
				Name: data.name,
				email: data.email,
				location: data.location,
				description: data.description,
				image: imgData.data.url,
				review: 5,
			};

			const res = await fetch(
				"https://usedphonesserver-saifuddinmonna.vercel.app/userscommences",
				{
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(reviewData),
				}
			);

			if (res.ok) {
				closeModal();
				toast.success("Review added successfully!");
			}
		} catch (error) {
			console.error(error);
			toast.error("Failed to add review");
		}
	};

	const handleViewAllReviews = () => {
		navigate("/customarreviewsall");
	};

	return (
		<section className="py-20 bg-slate-50">
			<div className="container mx-auto px-4">
				<motion.div
					variants={fadeIn}
					initial="initial"
					animate="animate"
					className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						What Our Customers Say
					</h2>
					<p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
						Read authentic reviews from our satisfied customers
					</p>
				</motion.div>

				<div className="flex justify-center gap-6 mb-16">
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={openModal}
						className="btn btn-primary rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300">
						Add Your Review
					</motion.button>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={handleViewAllReviews}
						className="btn btn-outline btn-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300">
						View All Reviews
					</motion.button>
				</div>

				<motion.div
					variants={staggerContainer}
					initial="initial"
					animate="animate"
					className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{userscommences?.slice(0, 6).map((review) => (
						<motion.div
							key={review._id}
							variants={fadeIn}
							whileHover={{ y: -5 }}
							className="transform transition-all duration-300">
							<Review review={review} />
						</motion.div>
					))}
				</motion.div>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95">
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 shadow-2xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-2xl font-semibold text-gray-800 mb-6">
										Share Your Experience
									</Dialog.Title>

									<form onSubmit={handleSubmit(handleAddReview)} className="space-y-6">
										<div className="form-control">
											<label className="label pb-1">
												<span className="label-text font-semibold text-gray-700">Name</span>
											</label>
											<input
												defaultValue={user?.displayName}
												type="text"
												{...register("name", {
													required: "Name is required",
												})}
												className="input input-bordered w-full focus:border-primary focus:ring-1 focus:ring-primary"
											/>
											{errors.name && (
												<p className="text-red-500 text-sm mt-1">
													{errors.name.message}
												</p>
											)}
										</div>

										<div className="form-control">
											<label className="label pb-1">
												<span className="label-text font-semibold text-gray-700">Email</span>
											</label>
											<input
												defaultValue={user?.email}
												type="email"
												{...register("email", {
													required: "Email is required",
												})}
												className="input input-bordered w-full focus:border-primary focus:ring-1 focus:ring-primary"
											/>
											{errors.email && (
												<p className="text-red-500 text-sm mt-1">
													{errors.email.message}
												</p>
											)}
										</div>

										<div className="form-control">
											<label className="label pb-1">
												<span className="label-text font-semibold text-gray-700">Location</span>
											</label>
											<select
												{...register("location", {
													required: "Location is required",
												})}
												className="select select-bordered w-full focus:border-primary focus:ring-1 focus:ring-primary">
												<option value="">Select Location</option>
												{divisions?.map((division) => (
													<option key={division._id} value={division.division}>
														{division.division}
													</option>
												))}
											</select>
											{errors.location && (
												<p className="text-red-500 text-sm mt-1">
													{errors.location.message}
												</p>
											)}
										</div>

										<div className="form-control">
											<label className="label pb-1">
												<span className="label-text font-semibold text-gray-700">Photo</span>
											</label>
											<input
												type="file"
												accept="image/*"
												{...register("image", {
													required: !user?.photoURL && "Photo is required",
												})}
												className="file-input file-input-bordered file-input-primary w-full focus:border-primary focus:ring-1 focus:ring-primary"
											/>
											{errors.image && (
												<p className="text-red-500 text-sm mt-1">
													{errors.image.message}
												</p>
											)}
										</div>

										<div className="form-control">
											<label className="label pb-1">
												<span className="label-text font-semibold text-gray-700">Your Review</span>
											</label>
											<textarea
												{...register("description", {
													required: "Review is required",
												})}
												className="textarea textarea-bordered h-32 focus:border-primary focus:ring-1 focus:ring-primary"
												placeholder="Share your experience with us..."
											/>
											{errors.description && (
												<p className="text-red-500 text-sm mt-1">
													{errors.description.message}
												</p>
											)}
										</div>

										<div className="flex justify-end gap-4 mt-8">
											<motion.button
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												type="button"
												onClick={closeModal}
												className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">
												Cancel
											</motion.button>
											<motion.button
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												type="submit"
												className="btn btn-primary rounded-lg font-medium shadow-md">
												Submit Review
											</motion.button>
										</div>
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</section>
	);
};

export default CustomarReviews;
