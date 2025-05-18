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

	// menuItems is now a function that accepts a context ('desktop' or 'mobile')
	// to apply context-specific styling for better contrast and appearance.
	const menuItems = (context = "desktop") => {
		const isDesktop = context === "desktop";

		// Base classes for NavLinks
		const navLinkBaseClasses = "font-medium text-[15px] tracking-wide transition-all duration-300";
		const navLinkDesktopDefault = "text-gray-200";
		const navLinkDesktopHover = "hover:text-white";
		const navLinkDesktopActive = "text-white font-semibold";
		const navLinkMobileDefault = "text-gray-700";
		const navLinkMobileHover = "hover:text-primary";
		const navLinkMobileActive = "text-primary font-semibold";

		// Base classes for Buttons
		const btnBaseClasses = "btn-xs rounded-full btn-outline transition-all duration-300 font-medium";
		const btnDesktopClasses = "border-white/70 text-white/90 hover:bg-white hover:text-primary";
		const btnMobileClasses = "border-primary text-primary hover:bg-primary hover:text-white";

		// User info text and avatar border classes
		const userInfoTextClasses = isDesktop ? "text-gray-200" : "text-gray-600";
		const avatarBorderClasses = isDesktop ? "border-gray-200" : "border-primary/40";

		const getNavLinkClasses = ({ isActive }) => {
			if (isDesktop) {
				return `${navLinkBaseClasses} ${navLinkDesktopHover} ${isActive ? navLinkDesktopActive : navLinkDesktopDefault}`;
			}
			return `${navLinkBaseClasses} ${navLinkMobileHover} ${isActive ? navLinkMobileActive : navLinkMobileDefault}`;
		};

		const getButtonClasses = () => {
			return `${btnBaseClasses} ${isDesktop ? btnDesktopClasses : btnMobileClasses}`;
		};

		return (
			<>
			<li>
				<NavLink 
					to="/" 
					className={getNavLinkClasses}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink 
					to="/allphones"
					className={getNavLinkClasses}>
					Categories
				</NavLink>
			</li>
			<li>
				<NavLink 
					to="/about"
					className={getNavLinkClasses}>
					About
				</NavLink>
			</li>
			<li>
				<NavLink 
					to="/blog"
					className={getNavLinkClasses}>
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
								className={getButtonClasses()}>
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
								className={getButtonClasses()}>
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
											to="/signupbuyer" // These links are always on a white dropdown, so their specific styling is fine
											className="block px-4 py-2.5 text-gray-800 hover:bg-gray-50 hover:text-primary transition-all duration-300 font-medium">
											Sign Up as Buyer
										</NavLink>
									</li>
									<li>
										<NavLink 
											to="/signupseller" // These links are always on a white dropdown
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
							className={getNavLinkClasses}>
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
								className={getButtonClasses()}>
								Sign Out
							</button>
						</motion.div>
					</li>
					<li className="flex items-center gap-3">
						<motion.span 
							variants={fadeIn}
							initial="initial"
							animate="animate"
							className={`text-sm ${userInfoTextClasses} font-medium`}>
							{user?.displayName || user?.email}
						</motion.span>
						<motion.div 
							variants={buttonHover}
							initial="initial"
							whileHover="hover"
							className={`w-10 h-10 rounded-full overflow-hidden border-2 ${avatarBorderClasses} shadow-md`}>
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
								<FaUserCheck className={`w-full h-full p-2 ${isDesktop ? 'text-gray-200' : 'text-primary/80'}`} />
							)}
						</motion.div>
					</li>
				</>
			)}
			</>
		);
	};

	return (
		<motion.div
			variants={slideDown}
			initial="initial"
			animate="animate"
			className="sticky top-0 z-50">
			<div className="navbar h-20 items-center bg-[rgb(38,168,224)] text-white px-4 md:px-8 shadow-xl">
				<div className="navbar-start">
					<div className="dropdown">
						<motion.label 
							variants={buttonHover}
							initial="initial"
							whileHover="hover"
							tabIndex={0} 
							className="btn btn-ghost lg:hidden"
							onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<HiMenu className="h-6 w-6 text-gray-200" />
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
									className="menu menu-compact dropdown-content mt-3 p-3 shadow-xl bg-white rounded-lg w-56 space-y-1">
									{menuItems("mobile")} 
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
							className="btn btn-ghost normal-case text-2xl font-bold text-white hover:text-white/90 transition-all duration-300">
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
						{menuItems("desktop")}
					</motion.ul>
				</div>
			</div>
		</motion.div>
	);
};

export default Navbar;
