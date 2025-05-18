import React, { useState } from "react";
import { motion } from "framer-motion";
import { allBlogPosts } from "./blogData"; // Your mock data
import BlogPostCard from "./BlogPostCard";
// We will remove the numbered Pagination component for "Load More" functionality
// import Pagination from "../../../components/Pagination/Pagination";
import { fadeIn, staggerContainer } from "../../../utils/animations";

const BlogSection = () => {
	const initialPostsToShow = 6; // Number of posts to show initially
	const postsToLoadMore = 6; // Number of posts to load each time "Load More" is clicked
	const [visiblePostsCount, setVisiblePostsCount] = useState(initialPostsToShow);

	// Get current posts
	const currentPosts = allBlogPosts.slice(0, visiblePostsCount);

	const handleLoadMore = () => {
		setVisiblePostsCount(
			(prevCount) => prevCount + postsToLoadMore
		);
	};

	return (
		<section
			id="blog-section"
			className="py-20 bg-slate-50"
			aria-labelledby="blog-section-heading">
			<div className="container mx-auto px-4">
				<motion.div
					variants={fadeIn}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					className="text-center mb-16">
					<h2 id="blog-section-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Latest From Our Blog
					</h2>
					<p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
						Stay updated with the latest news, tips, and insights from the mobile world.
					</p>
				</motion.div>

				<motion.div
					variants={staggerContainer}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{currentPosts.map((post) => (
						<motion.div key={post.id} variants={fadeIn}>
							<BlogPostCard post={post} />
						</motion.div>
					))}
				</motion.div>

				{visiblePostsCount < allBlogPosts.length && (
					<motion.div
						className="text-center mt-12"
						variants={fadeIn}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}>
						<button
							onClick={handleLoadMore}
							className="btn btn-primary px-8 py-3 text-lg font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300">
							Load More Posts
						</button>
					</motion.div>
				)}
			</div>
		</section>
	);
};

export default BlogSection;