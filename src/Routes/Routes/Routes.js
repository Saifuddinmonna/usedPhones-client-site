import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";

import AddPhone from "../../Pages/Dashboard/AddPhone/AddPhone";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageSeller from "../../Pages/Dashboard/ManageSeller/ManageSeller";

import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AllPhones from "../../Pages/PhonesCategories/AllPhones/AllPhones";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <DisplayError></DisplayError>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/signup",
				element: <SignUp></SignUp>,
			},
			{
				path: "/allphones",
				element: <AllPhones></AllPhones>,
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
			{
				path: "/about",
				element: <About></About>,
			},
			// {
			// 	path: "/addphone",
			// 	element: <AddPhone></AddPhone>,
			// },
		],
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<DashboardLayout></DashboardLayout>
			</PrivateRoute>
		),
		errorElement: <DisplayError></DisplayError>,
		children: [
			{
				path: "/dashboard",
				element: <Dashboard></Dashboard>,
			},
			{
				path: "/dashboard/allusers",
				element: (
					<AdminRoute>
						<AllUsers></AllUsers>
					</AdminRoute>
				),
			},
			{
				path: "/dashboard/addphone",
				element: (
					<AdminRoute>
						<AddPhone></AddPhone>
					</AdminRoute>
				),
			},
			{
				path: "/dashboard/manageseller",
				element: (
					<AdminRoute>
						<ManageSeller></ManageSeller>
					</AdminRoute>
				),
			},
			{
				path: "/dashboard/payment/:id",
				element: <Payment></Payment>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/bookings/${params.id}`),
			},
		],
	},
]);

export default router;
