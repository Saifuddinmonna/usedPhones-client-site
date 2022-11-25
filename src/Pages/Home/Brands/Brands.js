import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Brand from "./Brand";

const Brands = () => {
	const BrandsData = [
		{
			"brand": "One Plus",
			"name": "Fluoride Treatment",
			"description":
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
			"img": "https://unsplash.com/photos/ngqZrU2QG4M/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fG9uZSUyMHBsdXMlMjBwaG9uZXxlbnwwfHx8fDE2NjkzODMwMDk&force=true",
		},
		{
			brand: "Vivo",
			name: "Cavity Filling",
			description:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
			img: "https://unsplash.com/photos/hqQyF86Gqbc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mjd8fG1pJTIwcGhvbmV8ZW58MHx8fHwxNjY5MzgyOTIy&force=true",
		},
		{
			brand: "MI",
			name: "Teeth Whitening",
			description:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
			img: "https://unsplash.com/photos/0VGG7cqTwCo/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8c21hcnRwaG9uZXxlbnwwfHx8fDE2NjkzODI4NjE&force=true",
		},
		{
			brand: "HTC",
			name: "Teeth Whitening",
			description:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
			img: "https://unsplash.com/photos/hKTN9zl30eE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MzB8fHZpdm98ZW58MHx8fHwxNjY5MzgyNzc0&force=true",
		},
	];

	

	return (
		<div className="mt-16">
			<div className="text-center">
				<h3 className="text-xl font-bold text-primary uppercase">
					Our Brands
				</h3>
				<h2 className="text-3xl">Brands We Provide</h2>
			</div>
			<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{BrandsData.map((service) => (
					<Brand key={service.id} service={service}></Brand>
				))}
			</div>
		</div>
	);
};

export default Brands;
