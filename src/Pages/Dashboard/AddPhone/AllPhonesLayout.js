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
		<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-6 justify-content-center mt-5 ml-3 mx-auto my-auto">
			<div className=" col-span-1  md:col-span-1 lg:col-span-2 xl:col-span-2 border p-2 rounded-xl shadow">
				<div className="p-2 my-2 rounded-md shadow mt-16 text-4xl ">
					<h2> Phones' Categories </h2>
				</div>
				<div className="mt-10">
					{brands?.map((brand, i) => (
						<div key={i}>
							<NavLink to={`/allphones/${brand.brand}`}>
								<button
									// to="/allphones/brand"
									className="btn btn-primary btn-outline w-full my-1 ">
									{brand.brand}
								</button>
							</NavLink>
						</div>
					))}
				</div>
			</div>
			<div className="md:col-span-5  lg::col-span-5 xl:col-span-6 border rounded-lg mr-2">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default AllPhonesLayout;
