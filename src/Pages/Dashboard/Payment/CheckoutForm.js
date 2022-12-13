import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const CheckoutForm = ({ booking }) => {
	const [cardError, setCardError] = useState("");
	const [success, setSuccess] = useState("");
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState("");
	const [clientSecret, setClientSecret] = useState("");

	const navigation = useNavigation();
	const stripe = useStripe();
	const elements = useElements();
	console.log("from checkout form route route", booking._id);
	const {
		phone,
		buyer,
		price,
		phoneName,
		email,
		productId,
		orderingDate,
		_id,
	} = booking;
	console.log(
		"from checkout form route route",
		booking._id,
		buyer,
		price,
		phoneName,
		email,
		productId,
		orderingDate,
		_id,
	);
	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch(
			"https://usedphonesserver-saifuddinmonna.vercel.app/create-payment-intent",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: `bearer ${localStorage.getItem(
						"accessToken",
					)}`,
				},
				body: JSON.stringify({ price }),
			},
		)
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, [price]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log("after handle click", event);
		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card === null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			console.log(error);
			setCardError(error.message);
		} else {
			setCardError("");
		}
		setSuccess("");
		setProcessing(true);
		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: buyer,
						email: email,
					},
				},
			});

		if (confirmError) {
			setCardError(confirmError.message);
			return;
		}
		if (paymentIntent.status === "succeeded") {
			console.log("card info", card);
			// store payment info in the database
			const payment = {
				price,
				transactionId: paymentIntent.id,
				email,
				bookingId: _id,
			};
			fetch(
				"https://usedphonesserver-saifuddinmonna.vercel.app/payments",
				{
					method: "POST",
					headers: {
						"content-type": "application/json",
						authorization: `bearer ${localStorage.getItem(
							"accessToken",
						)}`,
					},
					body: JSON.stringify(payment),
				},
			)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.insertedId) {
						setSuccess("Congrats! your payment completed");
						setTransactionId(paymentIntent.id);
					}
				});
		}
		setProcessing(false);
	};
	console.log("from payment route", booking);
	if (navigation.state === "loading") {
		return <Loading></Loading>;
	}

	return (
		<>
			<form className="border p-12 m rounded-xl" onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "18px",
								color: "#424770",
								"::placeholder": {
									color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				<button
					className="btn btn-sm mt-4 btn-primary"
					type="submit"
					// disabled={ !stripe || !clientSecret || processing }
				>
					Pay
				</button>
			</form>
			<p className="text-red-500">{cardError}</p>
			{success && (
				<div>
					<p className="text-green-500 text-lg">{success}</p>
					<p className=" text-lg">
						Your transactionId:{" "}
						<span className="font-bold">{transactionId}</span>
					</p>
				</div>
			)}
		</>
	);
};

export default CheckoutForm;
