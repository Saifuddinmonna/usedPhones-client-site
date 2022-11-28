import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const AllPhones = () => {
	const { data: phones = [], refetch } = useQuery({
		queryKey: ["phones"],
		queryFn: async () => {
			const res = await fetch(
				"https://usedphonesserver-saifuddinmonna.vercel.app/allphones/all",
			);
			const data = await res.json();
			return data;
		},
	});

	console.log(phones);

	return (
		<div>
			<h2>All Phones are Shown Here</h2>
			<div>
				<div className="grid grid-cols-3 gap-4 justify-content-between">
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
										NEW
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

export default AllPhones;
