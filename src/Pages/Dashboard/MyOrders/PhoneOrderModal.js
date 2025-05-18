import React, { Fragment, useContext, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const PhoneOrderModal = ({ isOpen, closeModal, onClickPhone }) => {
	const { user } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
	} = useForm();

	useEffect(() => {
		if (onClickPhone && user) {
			setValue("userName", user.displayName || "");
			setValue("userEmail", user.email || "");
			setValue("itemName", `${onClickPhone.brand} ${onClickPhone.phoneModel || onClickPhone.phoneModele}`);
			setValue("itemPrice", onClickPhone.resalePrice);
		}
	}, [onClickPhone, user, setValue]);

	const handleBookingSubmit = (data) => {
		const bookingData = {
			productId: onClickPhone._id,
			productName: data.itemName,
			productImage: onClickPhone.image,
			price: data.itemPrice,
			buyerName: data.userName,
			buyerEmail: data.userEmail,
			buyerPhone: data.userPhone,
			meetingLocation: data.meetingLocation,
			bookingDate: new Date(),
			paymentStatus: "pending", // Or handle payment integration
		};

		// Replace with your actual API call
		fetch("https://usedphonesserver-saifuddinmonna.vercel.app/bookings", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				authorization: `bearer ${localStorage.getItem("accessToken")}`,
			},
			body: JSON.stringify(bookingData),
		})
			.then(res => res.json())
			.then(result => {
				if (result.insertedId) {
					toast.success(`Booking for ${data.itemName} confirmed!`);
					closeModalAndReset();
				} else {
					toast.error(result.message || "Booking failed. Please try again.");
				}
			})
			.catch(err => {
				console.error("Booking error:", err);
				toast.error("An error occurred during booking.");
			});
	};

	const closeModalAndReset = () => {
		closeModal();
		reset();
	};

	if (!onClickPhone) return null;

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-50" onClose={closeModalAndReset}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 md:p-8 text-left align-middle shadow-xl transition-all">
								<Dialog.Title as="h3" className="text-xl md:text-2xl font-semibold leading-6 text-gray-900 mb-6">
									Book: {onClickPhone.brand} {onClickPhone.phoneModel || onClickPhone.phoneModele}
								</Dialog.Title>
								
								<form onSubmit={handleSubmit(handleBookingSubmit)} className="space-y-4">
									<div>
										<label className="block text-sm font-medium text-gray-700">Item Name</label>
										<input type="text" {...register("itemName")} readOnly className="mt-1 input input-bordered w-full bg-gray-100" />
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700">Price (TK)</label>
										<input type="number" {...register("itemPrice")} readOnly className="mt-1 input input-bordered w-full bg-gray-100" />
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700">Your Name</label>
										<input type="text" {...register("userName")} readOnly={!!user?.displayName} className={`mt-1 input input-bordered w-full ${user?.displayName ? 'bg-gray-100' : ''}`} />
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700">Your Email</label>
										<input type="email" {...register("userEmail")} readOnly={!!user?.email} className={`mt-1 input input-bordered w-full ${user?.email ? 'bg-gray-100' : ''}`} />
									</div>
									<div>
										<label htmlFor="userPhone" className="block text-sm font-medium text-gray-700">Your Phone Number</label>
										<input id="userPhone" type="tel" {...register("userPhone", { required: "Phone number is required" })} className="mt-1 input input-bordered w-full focus:border-primary focus:ring-1 focus:ring-primary" />
										{errors.userPhone && <p className="text-red-500 text-xs mt-1">{errors.userPhone.message}</p>}
									</div>
									<div>
										<label htmlFor="meetingLocation" className="block text-sm font-medium text-gray-700">Preferred Meeting Location</label>
										<input id="meetingLocation" type="text" {...register("meetingLocation", { required: "Meeting location is required" })} className="mt-1 input input-bordered w-full focus:border-primary focus:ring-1 focus:ring-primary" />
										{errors.meetingLocation && <p className="text-red-500 text-xs mt-1">{errors.meetingLocation.message}</p>}
									</div>

									<div className="mt-8 flex justify-end gap-4">
										<button type="button" onClick={closeModalAndReset} className="btn btn-ghost">
											Cancel
										</button>
										<button type="submit" className="btn btn-primary">
											Confirm Booking
										</button>
									</div>
								</form>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default PhoneOrderModal;