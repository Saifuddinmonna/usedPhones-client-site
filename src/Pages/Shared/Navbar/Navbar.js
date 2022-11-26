import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Switch } from "@headlessui/react";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const [enabled, setEnabled] = useState(false);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((err) => console.log(err));
	};

	const menuItems = (
		<React.Fragment className="bg-teal-400 text-white ">
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
			<li>
				<NavLink to="/myorders">My Orders</NavLink>
			</li>
			<li>
				<NavLink to="/addphone">Add Phone</NavLink>
			</li>
			<li>
				<NavLink to="/adminpanel">Admin Panel</NavLink>
			</li>

			{user?.uid ? (
				<>
					<li>
						<NavLink to="/dashboard">Dashboard</NavLink>
					</li>
					<li>
						<button onClick={handleLogOut}>Sign out</button>
					</li>
				</>
			) : (
				<li>
					<NavLink to="/login">Login</NavLink>
				</li>
			)}
			<div className="py-16">
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
							<NavLink
								to="/"
								className="btn btn-ghost normal-case text-xl">
								Menu
							</NavLink>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h- w-"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
								gggg
							</svg>
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
