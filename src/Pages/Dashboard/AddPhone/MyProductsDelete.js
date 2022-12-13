import React, { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../contexts/AuthProvider";

import MyProductDelete from "./MyProductDelete";

const MyProductsDelete = () => {
	const { user } = useContext(AuthContext);
	const email = user?.email;

	// const url = `https://usedphonesserver-saifuddinmonna.vercel.app/dashboard/myproducts?email=${user?.email}`;
	// console.log(url);
	// const url = "https://usedphonesserver-saifuddinmonna.vercel.app/myproducts";

	const {
		data: Products,
		isFetching,
		isLoading,
		data,
		error,
		status,
	} = useQuery({
		queryKey: ["Products", user?.email],
		queryFn: async () => {
			const res = await fetch(
				`https://usedphonesserver-saifuddinmonna.vercel.app/dashboard/myproducts/${email}`,
				{
					headers: {
						authorization: `bearer ${localStorage.getItem(
							"accessToken",
						)}`,
					},
				},
			);
			const data = await res.json();
			console.log("console log from my order", email);
			return data;
		},
	});
	// console.log("products are shown", user);

	return status === "loading" ? (
		<span>Loading...</span>
	) : status === "error" ? (
		<span>Error: {error.message}</span>
	) : (
		<>
			{isFetching ? <div>Refreshing...</div> : null}
			<div className="mt-16 ml-3 pl-3">
				<div className="text-center border rounded-full text-center shadow-xl p-4 m-6">
					<h3 className="text-xl text-primary uppercase"></h3>
					<h2 className="text-3xl  font-bold">My added Products</h2>
				</div>
				<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-3">
					{Products?.map((service, i) => (
						<MyProductDelete key={i} service={service}></MyProductDelete>
					))}
				</div>
			</div>
			<h2>thid i s my product</h2>
		</>
	);
};

export default MyProductsDelete;
// return
// }
