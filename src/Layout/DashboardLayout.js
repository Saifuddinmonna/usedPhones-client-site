import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
	const { user } = useContext(AuthContext);
	const [isAdmin] = useAdmin(user?.email);
	return (
		<div>
			<Navbar></Navbar>
			<div className="drawer drawer-mobile">
				<input
					id="dashboard-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content my-5 border shadow rounded rounded-5 p-1 bg-base-100 ">
					<Outlet></Outlet>
				</div>
				<div className="drawer-side mt-6">
					<label
						htmlFor="dashboard-drawer"
						className="drawer-overlay"></label>
					<ul className="menu p-4 w-80 text-base-content">
						<li>
							<Link
								className="btn btn-primary mx-2 my-2"
								to="/dashboard/myappointment">
								My Appointments
							</Link>
						</li>
						<li>
							<Link
								className="btn btn-primary mx-2 my-2"
								to="/dashboard/addphone">
								Add Phone
							</Link>
						</li>
						{
							// isAdmin &&
							<>
								<li>
									<Link
										className="btn btn-primary mx-2 my-2"
										to="/dashboard/allusers">
										All users
									</Link>
								</li>
								<li>
									<Link
										className="btn btn-primary mx-2 my-2"
										to="/dashboard/addseller">
										Add a Seller
									</Link>
								</li>
								<li>
									<Link
										className="btn btn-primary mx-2 my-2"
										to="/dashboard/manageseller">
										Manage seller
									</Link>
								</li>
							</>
						}
						<ul>
							<li>
								<NavLink
									className="btn btn-primary mx-2 my-2"
									to="/">
									Home
								</NavLink>
							</li>
						</ul>
					</ul>
				</div>
			</div>

			{/* <Outlet></Outlet> */}
		</div>
	);
};

export default DashboardLayout;
