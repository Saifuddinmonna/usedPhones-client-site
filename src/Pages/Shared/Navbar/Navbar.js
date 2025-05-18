import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { HiMenu } from "react-icons/hi";
import { FaUserCheck } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { motion, AnimatePresence } from "framer-motion";
import { slideDown, fadeIn, buttonHover } from "../../../utils/animations";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleLogOut = () => {
		localStorage.setItem("mytime", Date.now());
		logOut()
			.then(() => {})
			.catch((err) => console.log(err));
	};

	const menuItems = (
		<>
			<li>
				<NavLink 
					to="/" 
					className={({ isActive }) =>
						`font-medium text-[15px] tracking-wide hover:text-primary/90 transition-all duration-300 ${
							isActive ? "text-primary font-semibold" : "text-gray-50"
						}`
					}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink 
					to="/allphones"
					className={({ isActive }) =>
						`font-medium text-[15px] tracking-wide hover:text-primary/90 transition-all duration-300 ${
							isActive ? "text-primary font-semibold" : "text-gray-50"
						}`
					}>
					Categories
				</NavLink>
			</li>
			<li>
				<NavLink 
					to="/about"
					className={({ isActive }) =>
						`font-medium text-[15px] tracking-wide hover:text-primary/90 transition-all duration-300 ${
							isActive ? "text-primary font-semibold" : "text-gray-50"
						}`
					}>
					About
				</NavLink>
			</li>
			<li>
				<NavLink 
					to="/blog"
					className={({ isActive }) =>
						`font-medium text-[15px] tracking-wide hover:text-primary/90 transition-all duration-300 ${
							isActive ? "text-primary font-semibold" : "text-gray-50"
						}`
					}>
					Blog
				</NavLink>
			</li>

			{!user?.uid ? (
				<>
					<li>
						<motion.div
							variants={buttonHover}
							initial="initial"
							whileHover="hover"
							className="relative">
							<NavLink 
								to="/login"
								className="btn btn-outline border-gray-50 text-gray-50 hover:bg-white hover:text-primary transition-all duration-300 font-medium">
								Login
							</NavLink>
						</motion.div>
					</li>
					<li className="relative">
						<motion.div
							variants={buttonHover}
							initial="initial"
							whileHover="hover"
							className="relative">
							<button
								onClick={() => setIsDropdownOpen(!isDropdownOpen)}
								className="btn btn-outline border-gray-50 text-gray-50 hover:bg-white hover:text-primary transition-all duration-300 font-medium">
								Sign Up
							</button>
						</motion.div>
						<AnimatePresence>
							{isDropdownOpen && (
								<motion.ul
									variants={{
										initial: { opacity: 0, y: -10 },
										animate: { opacity: 1, y: 0 },
										exit: { opacity: 0, y: -10 }
									}}
									initial="initial"
									animate="animate"
									exit="exit"
									transition={{ duration: 0.2 }}
									className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
									<li>
										<NavLink 
											to="/signupbuyer"
											className="block px-4 py-2.5 text-gray-800 hover:bg-gray-50 hover:text-primary transition-all duration-300 font-medium">
											Sign Up as Buyer
										</NavLink>
									</li>
									<li>
										<NavLink 
											to="/signupseller"
											className="block px-4 py-2.5 text-gray-800 hover:bg-gray-50 hover:text-primary transition-all duration-300 font-medium">
											Sign Up as Seller
										</NavLink>
									</li>
								</motion.ul>
							)}
						</AnimatePresence>
					</li>
				</>
			) : (
				<>
					<li>
						<NavLink 
							to="/dashboard"
							className={({ isActive }) =>
								`font-medium text-[15px] tracking-wide hover:text-primary/90 transition-all duration-300 ${
									isActive ? "text-primary font-semibold" : "text-gray-50"
								}`
							}>
							Dashboard
						</NavLink>
					</li>
					<li>
						<motion.div
							variants={buttonHover}
							initial="initial"
							whileHover="hover"
							className="relative">
							<button 
								onClick={handleLogOut}
								className="btn btn-outline border-gray-50 text-gray-50 hover:bg-white hover:text-primary transition-all duration-300 font-medium">
								Sign Out
							</button>
						</motion.div>
					</li>
					<li className="flex items-center gap-3">
						<motion.span 
							variants={fadeIn}
							initial="initial"
							animate="animate"
							className="text-sm text-gray-50 font-medium">
							{user?.displayName || user?.email}
						</motion.span>
						<motion.div 
							variants={buttonHover}
							initial="initial"
							whileHover="hover"
							className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-50 shadow-md">
							{user.photoURL ? (
								<PhotoProvider>
									<PhotoView src={user?.photoURL}>
										<img
											src={user?.photoURL}
											alt=""
											className="w-full h-full object-cover"
										/>
									</PhotoView>
								</PhotoProvider>
							) : (
								<FaUserCheck className="w-full h-full p-2 text-gray-50" />
							)}
						</motion.div>
					</li>
				</>
			)}
		</>
	);

	return (
		<motion.div
			variants={slideDown}
			initial="initial"
			animate="animate"
			className="sticky top-0 z-50">
			<div className="navbar bg-gradient-to-r from-primary to-primary/95 text-white px-4 md:px-8 shadow-xl">
				<div className="navbar-start">
					<div className="dropdown">
						<motion.label 
							variants={buttonHover}
							initial="initial"
							whileHover="hover"
							tabIndex={0} 
							className="btn btn-ghost lg:hidden"
							onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<HiMenu className="h-6 w-6 text-gray-50" />
						</motion.label>
						<AnimatePresence>
							{isMenuOpen && (
								<motion.ul 
									variants={{
										initial: { opacity: 0, y: -10 },
										animate: { opacity: 1, y: 0 },
										exit: { opacity: 0, y: -10 }
									}}
									initial="initial"
									animate="animate"
									exit="exit"
									transition={{ duration: 0.2 }}
									className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-white rounded-lg w-52">
									{menuItems}
								</motion.ul>
							)}
						</AnimatePresence>
					</div>
					<motion.div
						variants={fadeIn}
						initial="initial"
						animate="animate"
						className="relative">
						<NavLink 
							to="/" 
							className="btn btn-ghost normal-case text-2xl font-bold text-gray-50 hover:text-primary/90 transition-all duration-300">
							UsedPhones
						</NavLink>
					</motion.div>
				</div>
				
				<div className="navbar-center hidden lg:flex">
					<motion.ul 
						variants={fadeIn}
						initial="initial"
						animate="animate"
						className="menu menu-horizontal px-1 gap-8">
						{menuItems}
					</motion.ul>
				</div>
			</div>
		</motion.div>
	);
};

export default Navbar;
