import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Assuming you'll have blog detail pages later

const BlogPostCard = ({ post }) => {
	const { title, excerpt, imageUrl, date, author, category, slug } = post;

	return (
		<motion.div
			className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
			whileHover={{ y: -5 }}>
			<img
				src={imageUrl}
				alt={title}
				className="w-full h-48 object-cover"
			/>
			<div className="p-6 flex flex-col flex-grow">
				<span className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">{category}</span>
				<h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">{title}</h3>
				<p className="text-gray-600 text-sm mb-4 flex-grow">{excerpt.substring(0, 100)}...</p>
				<div className="text-xs text-gray-500 mb-4">
					<span>By {author}</span> | <span>{date}</span>
				</div>
				<Link to={`/blog/${slug}`} className="mt-auto text-primary hover:text-primary-dark font-medium self-start">
					Read More &rarr;
				</Link>
			</div>
		</motion.div>
	);
};

export default BlogPostCard;