import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ onClickPhone, refetch }) => {
	const {
		brand,
		originalPrice,
		image,
		resalePrice,
		sellerEmail,
		sellerName,
		timeOfPost,
		yearOfUse,
		_id,
		phoneModel,
	} = onClickPhone;
	const date = format(new Date(), "PP");
	const { user } = useContext(AuthContext);
	console.log("modal data ", onClickPhone?.onClickPhone);
	console.log("modal data ", onClickPhone);
	const handleBooking = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const phone = form.phone.value;
		[3, 4, 5].map((value, i) => console.log(value));
		const ordering = {
			orderingDate: date,
			phoneName: brand,
			phoneModel: phoneModel,
			buyer: name,
			price: resalePrice,
			email,
			phone,
			productId: _id,
		};

		// TODO: send data to the server
		// and once data is saved then close the modal
		// and display success toast
		fetch("https://usedphonesserver-saifuddinmonna.vercel.app/ordering", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(ordering),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged) {
					// setTreatment(null);
					toast.success("Booking confirmed");
					refetch();
				} else {
					toast.error(data.message);
				}
			});
	};

	return (
		<>
			<input
				type="checkbox"
				id="ordering-modal"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="modal-box relative">
					<label
						htmlFor="ordering-modal"
						className="btn btn-md btn-circle btn-warning absolute right-2 top-2">
						✕
					</label>
					<h3 className="text-lg font-bold">{brand}</h3>
					<form
						onSubmit={handleBooking}
						className="grid grid-cols-1 gap-3 mt-10">
						<input
							type="text"
							disabled
							value={date}
							className="input w-full input-bordered "
						/>

						<input
							name="name"
							type="text"
							defaultValue={user?.displayName}
							disabled
							placeholder="Your Name"
							className="input w-full input-bordered"
						/>
						{/* <input
							name="name"
							type="text"
							defaultValue={brand }
							disabled
							placeholder="phone model"
							className="input w-full input-bordered"
						/> */}
						<input
							name="email"
							type="email"
							defaultValue={user?.email}
							disabled
							placeholder={user?.email}
							className="input w-full input-bordered"
						/>
						<input
							name="Location"
							type="text"
							placeholder="Your Location"
							className="input w-full input-bordered"
						/>
						<input
							name="phone"
							type="text"
							placeholder="Phone Number"
							className="input w-full input-bordered"
						/>
						<br />
						<input
							className="btn btn-primary w-full"
							type="submit"
							value="Submit"
						/>
					</form>
				</div>
			</div>
		</>
	);
};

export default BookingModal;
