import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ service }) => {
	const { name, description, brand, img, _id: id } = service;
	
	return (
		<Link to={`category/${id}`} className="block group">
			<div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
				<figure className="relative h-48 overflow-hidden">
					<img
						src={img}
						alt={brand}
						className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</figure>
				<div className="card-body p-6">
					<h2 className="card-title text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
						{brand}
					</h2>
					<p className="text-gray-600 mt-2 line-clamp-2">
						{description || `Explore our collection of ${brand} products`}
					</p>
					<div className="mt-4">
						<span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
							View Products
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Brand;
