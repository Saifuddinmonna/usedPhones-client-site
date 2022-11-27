import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";

const AllPhonesLayout = () => {
	const { data: brands = [], refetch } = useQuery({
		queryKey: ["brands"],
		queryFn: async () => {
			const res = await fetch("http://localhost:5000/brandname");
			const data = await res.json();
			return data;
		},
	});

	console.log(brands);
	return (
		<div className="grid grid-cols-6 gap-4 justify-content-center mt-5">
			<div className="   border">
				<div>
					<h2> Phones' Categories </h2>
				</div>
				<div className="col-span-2">
					{brands?.map((brand) => (
						<div key={brand._id}>
							<button className="btn btn-primary btn-outline w-full my-1 ">
								{brand.brand}
							</button>
						</div>
					))}
				</div>
			</div>
			<div className="col-span-5 border">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default AllPhonesLayout;
