import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Brand from "./Brand";
import { useQuery } from "@tanstack/react-query";

const Brands = () => {
	const url =
		"${https://usedphonesserver-saifuddinmonna.vercel.app}/categoriesWithBrands";
	console.log("url from env", url);

	const { data: Brands = [], refetch } = useQuery({
		queryKey: ["brands"],
		queryFn: async () => {
			const res = await fetch(
				"https://usedphonesserver-saifuddinmonna.vercel.app/categoriesWithBrands",
			);
			const data = await res.json();
			return data;
		},
	});

	return (
		<div className="mt-16 ml-3 pl-3">
			<div className="text-center border rounded-full text-center shadow-xl p-4 m-6">
				<h3 className="text-xl text-primary uppercase"></h3>
				<h2 className="text-3xl  font-bold">Categories Section</h2>
			</div>
			<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-3">
				{Brands.map((service, i) => (
					<Brand key={i} service={service}></Brand>
				))}
			</div>
		</div>
	);
};

export default Brands;
