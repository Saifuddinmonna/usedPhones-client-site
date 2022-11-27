import React from "react";

const ReviewAll = ({ review }) => {
	const { name, image, description, review: userReview, location } = review;
	console.log("review", review);
	return (
		<div className="card shadow-xl">
			<div className="card-body">
				<p>{description}</p>
				<div className="flex items-center mt-6">
					<div className="avatar mr-6">
						<div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={image} alt="" />
						</div>
					</div>
					<div>
						<h5 className="text-lg">{name}</h5>
						<p>{location}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewAll;
