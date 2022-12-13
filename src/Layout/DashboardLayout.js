import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
	const { user } = useContext(AuthContext);
	const [isAdmin] = useAdmin(user?.email);
	const [isBuyer] = useBuyer(user?.email);
	const [isSeller] = useSeller(user?.email);
	console.log("seller check", isSeller, isBuyer);
	return (
		<div>
			<Navbar></Navbar>
			<div className="drawer drawer-mobile">
				<input
					id="dashboard-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content my-5 border shadow rounded rounded-5 p-1 ml-2 bg-base-100 ">
					<Outlet></Outlet>
				</div>
				<div className="drawer-side mt-6">
					<ul className="menu p-4 w-80 text-base-content">
						{isBuyer && (
							<>
								<li>
									<Link
										className="btn btn-primary mx-2 my-2"
										to="/dashboard/myorders">
										My Orders
									</Link>
								</li>
								<li>
									<Link
										className="btn btn-primary mx-2 my-2"
										to="/dashboard/">
										MyWish List
									</Link>
								</li>
							</>
						)}
						{isSeller && (
							<>
								<li>
									<Link
										className="btn btn-primary mx-2 my-2"
										to="/dashboard/addphone">
										Add Product
									</Link>
								</li>
								<li>
									<Link
										className="btn btn-primary mx-2 my-2"
										to="/dashboard/myproducts">
										My Products
									</Link>
								</li>
								<li>
									<Link
										className="btn btn-primary mx-2 my-2"
										to="/dashboard/mybuyers">
										My Buyers
									</Link>
								</li>
							</>
						)}
						{isAdmin && (
							<>
								<li>
									<Link
										className="btn btn-primary mx-2 my-2"
										to="/dashboard/allusers">
										All users
									</Link>
								</li>
								<li>
									{/* <Link
										className="btn btn-primary mx-2 my-2"
										to="/dashboard/addseller">
										Add a Seller
									</Link> */}
								</li>
								<li>
									<Link
										className="btn btn-primary mx-2 my-2"
										to="/dashboard/buyers">
										All Buyers
									</Link>
								</li>
								<li>
									<Link
										className="btn btn-primary mx-2 my-2"
										to="/dashboard/sellers">
										All Sellers
									</Link>
								</li>
							</>
						)}
						{/* <ul>
							<li>
								<NavLink
									className="btn btn-primary mx-2 my-2"
									to="/">
									Home
								</NavLink>
							</li>
						</ul> */}
					</ul>
				</div>
			</div>

			{/* <Outlet></Outlet> */}
		</div>
	);
};

export default DashboardLayout;
