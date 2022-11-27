import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
		<div>
			<div className="drawer drawer-mobile">
				<input
					id="dashboard-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content">
					<Outlet></Outlet>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="dashboard-drawer"
						className="drawer-overlay"></label>
					<ul className="menu p-4 w-80 text-base-content">
						<li>
							<Link to="/dashboard">My Appointments</Link>
						</li>
						<li>
							<Link to="/dashboard/addphone">
								Add Phone
							</Link>
						</li>
						{
							// isAdmin &&
							<>
								<li>
									<Link to="/dashboard/allusers">
										All users
									</Link>
								</li>
								<li>
									<Link to="/dashboard/addseller">
										Add a Seller
									</Link>
								</li>
								<li>
									<Link to="/dashboard/manageseller">
										Manage seller
									</Link>
								</li>
							</>
						}
					</ul>
				</div>
			</div>

			{/* <Outlet></Outlet> */}
		</div>
	);
};

export default DashboardLayout;