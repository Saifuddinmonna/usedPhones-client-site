import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
	const { data: sellers = [], refetch } = useQuery({
		queryKey: ["sellers"],
		queryFn: async () => {
			const res = await fetch(
				"https://usedphonesserver-saifuddinmonna.vercel.app/sellers",
			);
			const data = await res.json();
			return data;
		},
	});

	console.log("user id ffor token checj", sellers);
	const handleMakeAdmin = (id) => {
		console.log("user id ffor token checj", id);
		fetch(
			`https://usedphonesserver-saifuddinmonna.vercel.app/users/admin/${id}`,
			{
				method: "PUT",
				headers: {
					authorization: `bearer ${localStorage.getItem(
						"accessToken",
					)}`,
				},
			},
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast.success("Make admin successful.");
					refetch();
				}
			});
	};
	const handleMakeVerify = (id) => {
		console.log("user id ffor token checj", id);
		fetch(
			`https://usedphonesserver-saifuddinmonna.vercel.app/users/verify/${id}`,
			{
				method: "PUT",
				headers: {
					authorization: `bearer ${localStorage.getItem(
						"accessToken",
					)}`,
				},
			},
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast.success("Make admin successful.");
					refetch();
				}
			});
	};
	const handleDeleteUser = (id) => {
		console.log("user id ffor token checj", id);
		fetch(
			`https://usedphonesserver-saifuddinmonna.vercel.app/users/${id}`,
			{
				method: "DELETE",
				headers: {
					authorization: `bearer ${localStorage.getItem(
						"accessToken",
					)}`,
				},
			},
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount === 1) {
					toast.success("Delete Process is successful.");
					refetch();
				}
			});
	};

	return (
		<div>
			<div>
				<h2 className="text-3xl">All Sellers</h2>
				<div className="overflow-x-auto">
					<table className="table w-full">
						<thead>
							<tr>
								<th></th>
								<th>Name</th>
								<th>Email</th>
								<th>Admin</th>
								<th>Verification</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{sellers.map((seller, i) => (
								<tr key={seller._id}>
									<th>{i + 1}</th>
									<td>{seller.name}</td>
									<td>{seller.email}</td>
									<td>
										{seller?.role !== "admin" && (
											<button
												onClick={() =>
													handleMakeAdmin(seller._id)
												}
												className="btn btn-xs btn-primary">
												Make Admin
											</button>
										)}
									</td>
									<td>
										{seller?.verification !== "verified" ? (
											<button
												onClick={() =>
													handleMakeVerify(seller._id)
												}
												className="btn btn-xs btn-red">
												Verify
											</button>
										) : (
											<p className="text-primary">
												Verification Passed
											</p>
										)}
									</td>
									<td>
										<button
											onClick={() =>
												handleDeleteUser(seller._id)
											}
											className="btn btn-xs btn-danger">
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AllSellers;
