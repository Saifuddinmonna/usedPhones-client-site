import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Review from "./Review";
import { fadeIn, staggerContainer } from "../../../utils/animations";
import toast from "react-hot-toast";

const CustomarReviews = () => {
	const { user } = useContext(AuthContext);
	const [isOpen, setIsOpen] = useState(false);

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

	const openModal = () => setIsOpen(true);
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

	return (
		<section className="py-16 bg-gradient-to-b from-gray-50 to-white">
			<div className="container mx-auto px-4">
				<motion.div
					variants={fadeIn}
					initial="initial"
					animate="animate"
					className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Customer Reviews
					</h2>
					<p className="text-gray-700 max-w-2xl mx-auto text-lg">
						What our customers say about our service
					</p>
				</motion.div>

				<div className="flex justify-center gap-4 mb-12">
					<button
						onClick={openModal}
						className="btn btn-primary px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
						Add Your Review
					</button>
					<Link
						to="/customarreviewsall"
						className="btn btn-outline px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
						View All Reviews
					</Link>
				</div>

				<motion.div
					variants={staggerContainer}
					initial="initial"
					animate="animate"
					className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{userscommences?.map((review) => (
						<motion.div key={review._id} variants={fadeIn}>
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
						<div className="fixed inset-0 bg-black bg-opacity-25" />
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
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-xl font-semibold text-gray-900 mb-4">
										Share Your Experience
									</Dialog.Title>

									<form onSubmit={handleSubmit(handleAddReview)} className="space-y-4">
										<div className="form-control">
											<label className="label">
												<span className="label-text font-medium">Name</span>
											</label>
											<input
												defaultValue={user?.displayName}
												type="text"
												{...register("name", {
													required: "Name is required",
												})}
												className="input input-bordered w-full"
											/>
											{errors.name && (
												<p className="text-red-500 text-sm mt-1">
													{errors.name.message}
												</p>
											)}
										</div>

										<div className="form-control">
											<label className="label">
												<span className="label-text font-medium">Email</span>
											</label>
											<input
												defaultValue={user?.email}
												type="email"
												{...register("email", {
													required: "Email is required",
												})}
												className="input input-bordered w-full"
											/>
											{errors.email && (
												<p className="text-red-500 text-sm mt-1">
													{errors.email.message}
												</p>
											)}
										</div>

										<div className="form-control">
											<label className="label">
												<span className="label-text font-medium">Location</span>
											</label>
											<select
												{...register("location", {
													required: "Location is required",
												})}
												className="select select-bordered w-full">
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
											<label className="label">
												<span className="label-text font-medium">Photo</span>
											</label>
											<input
												type="file"
												accept="image/*"
												{...register("image", {
													required: !user?.photoURL && "Photo is required",
												})}
												className="file-input file-input-bordered w-full"
											/>
											{errors.image && (
												<p className="text-red-500 text-sm mt-1">
													{errors.image.message}
												</p>
											)}
										</div>

										<div className="form-control">
											<label className="label">
												<span className="label-text font-medium">Your Review</span>
											</label>
											<textarea
												{...register("description", {
													required: "Review is required",
												})}
												className="textarea textarea-bordered h-24"
												placeholder="Share your experience with us..."
											/>
											{errors.description && (
												<p className="text-red-500 text-sm mt-1">
													{errors.description.message}
												</p>
											)}
										</div>

										<div className="flex justify-end gap-4 mt-6">
											<button
												type="button"
												onClick={closeModal}
												className="btn btn-outline">
												Cancel
											</button>
											<button type="submit" className="btn btn-primary">
												Submit Review
											</button>
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
