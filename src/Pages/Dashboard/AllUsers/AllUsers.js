import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
	const { data: users = [], refetch } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await fetch(
				"https://usedphonesserver-saifuddinmonna.vercel.app/users",
			);
			const data = await res.json();
			return data;
		},
	});
	console.log("user id ffor token checj", users);
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
			<h2 className="text-3xl">All Users</h2>
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
						{users.map((user, i) => (
							<tr key={user._id}>
								<th>{i + 1}</th>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>
									{user?.role !== "admin" && (
										<button
											onClick={() =>
												handleMakeAdmin(user._id)
											}
											className="btn btn-xs btn-primary">
											Make Admin
										</button>
									)}
								</td>
								<td>
									{user?.verification !== "verified" && (
										<button
											onClick={() =>
												handleMakeVerify(user._id)
											}
											className="btn btn-xs btn-primary">
											Verify
										</button>
									)}
								</td>
								<td>
									<button
										onClick={() =>
											handleDeleteUser(user._id)
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
	);
};

export default AllUsers;
