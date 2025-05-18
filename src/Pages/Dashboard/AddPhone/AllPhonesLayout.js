import { useQuery } from "@tanstack/react-query";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AllPhonesLayout = () => {
	const {
		data: brands = [],
		refetch,
		id,
	} = useQuery({
		queryKey: ["brands"],
		queryFn: async () => {
			const res = await fetch(
				"https://usedphonesserver-saifuddinmonna.vercel.app/brandname",
			);
			const data = await res.json();
			return data;
		},
	});

	console.log(brands);
	return (
		<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-6 mt-8 mx-auto p-4">
			{/* Sidebar for Categories */}
			<div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 border border-gray-200 p-4 rounded-xl shadow-sm bg-white">
				<div className="p-3 my-2 rounded-lg shadow-md mb-6">
					<h2 className="text-2xl font-bold text-gray-800 text-center"> Phones' Categories </h2>
				</div>
				<div className="space-y-2">
					{brands?.map((brand, i) => (
						<div key={i}>
							<NavLink
								to={`/allphones/${brand.brand}`}
								className={({ isActive }) =>
									`btn w-full my-1 normal-case font-medium ${
										isActive
											? "btn-primary text-white"
											: "btn-outline btn-primary hover:text-white"
									}`
								}>
								{brand.brand}
							</NavLink>
						</div>
					))}
				</div>
			</div>
			{/* Main Content Area */}
			<div className="md:col-span-4 lg:col-span-5 xl:col-span-6 border border-gray-200 rounded-lg p-4 md:p-6 bg-white shadow-sm">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default AllPhonesLayout;
