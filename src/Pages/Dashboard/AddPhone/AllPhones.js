import { useQuery } from "@tanstack/react-query";
import React from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const AllPhonesForLayout = () => {
	const { data: phones = [], refetch } = useQuery({
		queryKey: ["phones"],
		queryFn: async () => {
			const res = await fetch("http://localhost:5000/allphones/all");
			const data = await res.json();
			return data;
		},
	});
	//sellerName originalPrice  resalePrice sellerEmail sellerName timeOfPost yearOfUse

	console.log(phones);

	return (
		<div>
			<div>
				<h2>All Phones are Shown Here</h2>
			</div>
			<div>
				<div className="grid grid-cols-3 gap-4">
					{phones.map((phone) => (
						<div className="card bg-base-100 shadow-xl">
							<figure>
								<PhotoProvider>
									<PhotoView src={phone.image}>
										<img
											src={phone.image}
											alt="phone image"
										/>
									</PhotoView>
								</PhotoProvider>
							</figure>
							<div className="card-body">
								<h2 className="card-title">
									{phone.name} {phone.brand}
									<div className="badge badge-secondary">
										{phone.resalePrice}
									</div>
								</h2>
								<p>
									If a dog chews shoes whose shoes does he
									choose?
								</p>
								<div className="card-actions justify-end">
									<div className="badge badge-outline">
										Fashion
									</div>
									<div className="badge badge-outline">
										Products
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllPhonesForLayout;
