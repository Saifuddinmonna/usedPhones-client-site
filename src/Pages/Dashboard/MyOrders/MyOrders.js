import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
	const { user } = useContext(AuthContext);

	const url = `https://usedphonesserver-saifuddinmonna.vercel.app/bookings?email=${user?.email}`;
	console.log(url);
	// const url = "https://usedphonesserver-saifuddinmonna.vercel.app/bookingsemail";

	const { data: bookings } = useQuery({
		queryKey: ["bookings", user?.email],
		queryFn: async () => {
			const res = await fetch(url, {
				headers: {
					authorization: `bearer ${localStorage.getItem(
						"accessToken",
					)}`,
				},
			});
			const data = await res.json();
			console.log("console log from my order", data);
			return data;
		},
	});
	console.log(bookings);
	return (
		<div>
			<h3 className="text-3xl mb-5">My Orders</h3>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Buyer Name</th>
							<th> Brand Name</th>
							<th>Phone Model</th>
							<th> Buying Date</th>

							<th>Price</th>
							<th>Payment</th>
						</tr>
					</thead>
					<tbody>
						{bookings &&
							bookings?.map((booking, i) => (
								<tr key={booking._id}>
									<th>{i + 1}</th>
									<td>{booking?.buyer}</td>
									<td>{booking?.phoneName}</td>
									<td>{booking?.phoneName}</td>
									<td>{booking?.orderingDate}</td>
									<td>{booking.price}</td>

									<td>
										{booking.price && !booking.paid && (
											<Link
												to={`/dashboard/payment/${booking._id}`}>
												<button className="btn btn-primary btn-sm">
													Pay
												</button>
											</Link>
										)}
										{booking.price && booking.paid && (
											<span className="text-green-500">
												Paid
											</span>
										)}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyOrders;
