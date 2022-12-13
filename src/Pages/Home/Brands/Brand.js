import React from "react";
import { Link, NavLink } from "react-router-dom";

const Brand = ({ service }) => {
	const { name, description, brand, img, _id: id } = service;
	// console.log("id from brand", id);
	return (
		<NavLink to={`category/${id}`}>
			<div className="card bg-base-100 shadow-xl">
				<figure className="px-10 pt-10">
					<img
						src={img}
						alt="image of brand"
						className="rounded-xl"
					/>
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title">{brand}</h2>
				</div>
				<div className="p-2 mx- bg-primary mb- w-full opacity-90 rounded-b-xl text-center">
					<Link
						className="   w-full  rounded-b-xl"
						to={`category/${id}`}>
						Click Category Route
					</Link>
				</div>
			</div>
		</NavLink>
	);
};

export default Brand;
