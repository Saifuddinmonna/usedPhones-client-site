import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideIn, fadeIn, staggerContainer } from "../../../utils/animations";

const Banner = () => {
	return (
		<div className="hero min-h-[80vh] bg-gradient-to-r from-primary/10 to-primary/5">
			<div className="hero-content flex-col lg:flex-row-reverse items-center"> {/* Added items-center for better vertical alignment */}
				{/* Temporarily removed animation props from motion.div to test if animation is the issue */}
				<motion.div className="lg:w-1/2">
					<img
						src="https://i.ibb.co/0jQ8X0J/hero-image.png"
						className="w-full max-w-sm h-auto mx-auto rounded-lg shadow-2xl"
						alt="Hero"
					/>
				</motion.div>
				<motion.div
					variants={staggerContainer}
					initial="initial"
					animate="animate"
					className="lg:w-1/2">
					<motion.h1
						variants={fadeIn}
						className="text-5xl font-bold text-gray-900">
						Find Your Perfect Used Phone
					</motion.h1>
					<motion.p
						variants={fadeIn}
						className="py-6 text-gray-700">
						Discover a wide range of quality used phones at competitive prices. Buy and sell with confidence on our trusted platform.
					</motion.p>
					<motion.div
						variants={fadeIn}
						className="flex gap-4">
						<Link
							to="/allphones"
							className="btn btn-primary">
							Browse Phones
						</Link>
						<Link
							to="/signupseller"
							className="btn btn-outline btn-primary">
							Sell Your Phone
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default Banner;
