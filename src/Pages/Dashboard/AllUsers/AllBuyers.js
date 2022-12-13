import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
	const { data: buyers = [], refetch } = useQuery({
		queryKey: ["buyers"],
		queryFn: async () => {
			const res = await fetch(
				"https://usedphonesserver-saifuddinmonna.vercel.app/buyers",
			);
			const data = await res.json();
			return data;
		},
	});

	console.log("user id ffor token checj", buyers);
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
				<h2 className="text-3xl border rounded-full">All Buyers</h2>
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
							{buyers.map((buyer, i) => (
								<tr key={buyer._id}>
									<th>{i + 1}</th>
									<td>{buyer.name}</td>
									<td>{buyer.email}</td>
									<td>
										{buyer?.role !== "admin" && (
											<button
												onClick={() =>
													handleMakeAdmin(buyer._id)
												}
												className="btn btn-xs btn-primary">
												Make Admin
											</button>
										)}
									</td>
									<td>
										{buyer?.verification !== "verified" ? (
											<button
												onClick={() =>
													handleMakeVerify(buyer._id)
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
												handleDeleteUser(buyer._id)
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

			{/* //allbuyer start from here */}
		</div>
	);
};

export default AllBuyers;
