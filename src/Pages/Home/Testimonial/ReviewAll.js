import React from "react";

const ReviewAll = ({ review }) => {
	const { Name, image, description, review: userReview, location } = review;
	console.log("review all", review);
	return (
		<div className="card shadow-xl">
			<div className="card-body">
				<p className="text-gray-700">{description}</p>
				<div className="flex items-center mt-6">
					<div className="avatar mr-6">
						<div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={image} alt="" />
						</div>
					</div>
					<div className="flex-grow">
						<h5 className="text-lg font-semibold text-gray-800">{Name}</h5>
						<p className="text-sm text-gray-600">{location}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewAll;
