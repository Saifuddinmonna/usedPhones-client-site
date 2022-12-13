import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
	const booking = useLoaderData({});
	const navigation = useNavigation();
	// const {
	// 	phone,
	// 	buyer,
	// 	price,
	// 	phoneName,
	// 	email,
	// 	productId,
	// 	orderingDate,
	// 	_id,
	// } = booking;
	console.log("from payment route", booking);
	if (navigation.state === "loading") {
		return <Loading></Loading>;
	}
	return (
		<div className="m-3 border border-3 p-3 bg-slate-50 rounded-xl">
			<h3 className="text-3xl">Payment for {booking?.phoneName}</h3>
			<p className="text-xl border rounded-xl p-3 m-3">
				Please pay <strong>${booking?.price}</strong> for your{" "}
				{booking?.phoneName} on {booking?.orderingDate} at id:{" "}
				{booking?._id}
			</p>
			<div className="w-96 my-12">
				<Elements stripe={stripePromise}>
					<CheckoutForm booking={booking}></CheckoutForm>
				</Elements>
			</div>
		</div>
	);
};

export default Payment;
