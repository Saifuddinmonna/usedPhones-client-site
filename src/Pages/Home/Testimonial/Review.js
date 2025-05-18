import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Review = ({ review }) => {
	const { Name, image, description, review: userReview, location } = review;
	
	return (
		<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
			<div className="flex items-center mb-4">
				<div className="avatar mr-4">
					<div className="w-16 h-16 rounded-full ring-2 ring-primary ring-offset-2">
						<img 
							src={image || "https://i.ibb.co/0jQ8X0J/default-avatar.png"} 
							alt={Name} 
							className="w-full h-full object-cover rounded-full"
						/>
					</div>
				</div>
				<div>
					<h5 className="text-lg font-semibold text-gray-900">{Name}</h5>
					<p className="text-sm text-gray-700">{location}</p>
				</div>
			</div>
			
			<div className="relative">
				<FaQuoteLeft className="text-primary/20 text-4xl absolute -top-2 -left-2" />
				<p className="text-gray-700 relative z-10 pl-6">{description}</p>
			</div>
			
			<div className="flex items-center mt-4">
				{[...Array(5)].map((_, index) => (
					<FaStar 
						key={index}
						className={`w-5 h-5 ${
							index < (userReview || 5) 
								? "text-yellow-400" 
								: "text-gray-300"
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Review;
