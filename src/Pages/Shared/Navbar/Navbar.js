import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Switch } from "@headlessui/react";
import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import Example from "./LoginOption";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaBeer, FaUserCheck } from "react-icons/fa";
import { HiMenu, IconName } from "react-icons/hi";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const [enabled, setEnabled] = useState(false);

	const handleLogOut = () => {
		localStorage.removeItem("accessToken");
		localStorage.setItem("mytime", Date.now());
		console.log("ami singout paisi");
		logOut()
			.then(() => {})
			.catch((err) => console.log(err));
	};

	const links = [
		{ href: "/account-settings", label: "Account settings" },
		{ href: "/support", label: "Support" },
		{ href: "/license", label: "License" },
		{ href: "/sign-out", label: "Sign out" },
	];

	// function MyMenu() {
	// 	return (
	// 		<Menu>
	// 			<Menu.Button>Options</Menu.Button>
	// 			<Menu.Items>
	// 				{links.map((link) => (
	// 					/* Use the `active` state to conditionally style the active item. */
	// 					<Menu.Item key={link.href} as={Fragment}>
	// 						{({ active }) => (
	// 							<a
	// 								href={link.href}
	// 								className={`${
	// 									active
	// 										? "bg-blue-500 text-white"
	// 										: "bg-white text-black"
	// 								}`}>
	// 								{link.label}
	// 							</a>
	// 						)}
	// 					</Menu.Item>
	// 				))}
	// 			</Menu.Items>
	// 		</Menu>
	// 	);
	// }

	const menuItems = (
		<React.Fragment key="bg-teal-400 text-white flex justify-end ">
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/allphones">Phones' Category</NavLink>
			</li>
			<li>
				<NavLink to="/about">About</NavLink>
			</li>
			<li>
				<NavLink to="/blog">Blog</NavLink>
			</li>

			{!user?.uid ? (
				<>
					<li tabIndex={0}>
						<NavLink
							className=" text-decoration-none  rounded mx-2 px-2"
							to="/login">
							{" "}
							Login
						</NavLink>

						<a>
							SignUp
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24">
								<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
							</svg>
						</a>
						<ul className="p-2 text-black bg-base-100">
							<li>
								<NavLink to="/signup">SignUp For Buyer</NavLink>
							</li>
							<li>
								<NavLink to="/signupseller">SignUp For Seller</NavLink>
							</li>
						</ul>
					</li>
				</>
			) : (
				<>
					<>
						<li>
							<NavLink to="/dashboard">Dashboard</NavLink>
						</li>
						<li className="rounded-full ">
							<button onClick={handleLogOut}>Sign out</button>
						</li>
					</>

					<Link className=" p-1 text-center flex items-center text-xs  shadow rounded-full ml-2 ">
						{user?.displayName || user?.email}
					</Link>
					<div
						className="tooltipcustomhover  w-20 mask mask-hexagon"
						data-tip="hello">
						{user.photoURL ? (
							<PhotoProvider className="tooltipcustomhover">
								<PhotoView src={user?.photoURL}>
									<img
										className="tooltipcustomhover"
										src={user?.photoURL}
										alt=""
									/>
								</PhotoView>
							</PhotoProvider>
						) : (
							<FaUserCheck className="p-0 m-0 fs-3 inline-block"></FaUserCheck>
						)}
					</div>
				</>
			)}

			<div className="">
				<Switch
					checked={enabled}
					onChange={setEnabled}
					className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
					<span className="sr-only">Use setting</span>
					<span
						aria-hidden="true"
						className={`${
							enabled ? "translate-x-9" : "translate-x-0"
						}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
					/>
				</Switch>
			</div>
		</React.Fragment>
	);

	return (
		<div className="navbar bg-primary text-primary-content navbar bg-primary mx-3 px-3 border rounded-lg flex justify-between">
			{/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
			<div className=" ">
				<div className="navbar-start  flex justify-between">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<HiMenu></HiMenu>
						</label>
						<ul
							tabIndex={1}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							{menuItems}
						</ul>
					</div>
					<NavLink
						to="/"
						className="btn btn-ghost   invisible lg:visible normal-case text-xl">
						UsedPhones
					</NavLink>
				</div>
				<div className="navbar-center hidden lg:flex  flex justify-between">
					<ul className="menu menu-horizontal p-0 text-white border-l text-lg">
						{menuItems}
					</ul>
				</div>
				<label
					htmlFor="dashboard-drawer"
					tabIndex={2}
					className="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-1 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</label>
			</div>
		</div>
	);
};

export default Navbar;
