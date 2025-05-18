import { id } from "date-fns/locale";
import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import ProductDetails from "../../Pages/Home/FeaturedProducts/ProductDetails";

import AddPhone from "../../Pages/Dashboard/AddPhone/AddPhone";
import AllPhonesForLayout from "../../Pages/Dashboard/AddPhone/AllPhones";
import AllPhonesLayout from "../../Pages/Dashboard/AddPhone/AllPhonesLayout";
import MyBuyers from "../../Pages/Dashboard/AddPhone/MyBuyers";
import MyProductDelete from "../../Pages/Dashboard/AddPhone/MyProductDelete";
import MyProducts from "../../Pages/Dashboard/AddPhone/MyProducts";
import MyProductsDelete from "../../Pages/Dashboard/AddPhone/MyProductsDelete";
import PhonesCategories from "../../Pages/Dashboard/AddPhone/PhonesCategories";
import AllBuyers from "../../Pages/Dashboard/AllUsers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllUsers/AllSellers";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";

import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";

import Payment from "../../Pages/Dashboard/Payment/Payment";
import BrandsCategorys from "../../Pages/Home/Brands/BrandsCategorys";
import Home from "../../Pages/Home/Home/Home";
import CustomarReviewsAll from "../../Pages/Home/Testimonial/AllUserCommences";
import Login from "../../Pages/Login/Login";
import AllPhones from "../../Pages/PhonesCategories/AllPhones/AllPhones";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import SignUpForSeller from "../../Pages/SignUp/SignUpForSeller";
import SignUpForBuyer from "../../Pages/SignUp/SignUpForUser";
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
				path: "/signupbuyer",
				element: <SignUpForBuyer></SignUpForBuyer>,
			},
			{
				path: "/signupseller",
				element: <SignUpForSeller></SignUpForSeller>,
			},
			{
				path: "/allphones",
				element: <AllPhonesLayout></AllPhonesLayout>,
				children: [
					{
						path: "/allphones",
						element: (
							<PrivateRoute>
								<AllPhonesForLayout></AllPhonesForLayout>
							</PrivateRoute>
						),
					},
					{
						path: "/allphones/:brand",
						loader: async ({ params }) => {
							try {
								const response = await fetch(
									`https://usedphonesserver-saifuddinmonna.vercel.app/allphones/?brand=${params.brand}`,
									{
										headers: {
											'Cache-Control': 'max-age=300', // Cache for 5 minutes
										},
									}
								);
								
								if (!response.ok) {
									throw new Error('Failed to fetch phones');
								}
								
								const data = await response.json();
								return data;
							} catch (error) {
								console.error('Error loading phones:', error);
								throw new Error('Failed to load phones. Please try again later.');
							}
						},
						element: (
							<PrivateRoute>
								<PhonesCategories></PhonesCategories>
							</PrivateRoute>
						),
					},
					{
						path: "/allphones/*",
						element: <DisplayError></DisplayError>,
					},
				],
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
			{
				path: "/category/:id",
				loader: async ({ params }) => {
					console.log("from loader", params.id);
					return fetch(
						`https://usedphonesserver-saifuddinmonna.vercel.app/category/${params.id}`,
					);
				},
				element: (
					<PrivateRoute>
						{" "}
						<BrandsCategorys></BrandsCategorys>
					</PrivateRoute>
				),
			},
			{
				path: "/about",
				element: <About></About>,
			},
			{
				path: "/customarreviewsall",
				element: (
					<PrivateRoute>
						{" "}
						<CustomarReviewsAll></CustomarReviewsAll>
					</PrivateRoute>
				),
			},
			{
				path: "/product/:id",
				element: <ProductDetails></ProductDetails>,
			},
			{
				path: "/*",
				element: <DisplayError></DisplayError>,
			},
		],
	},
	{
		path: "/dashboard",
		element: <DashboardLayout></DashboardLayout>,
		errorElement: <DisplayError></DisplayError>,
		children: [
			{
				path: "/dashboard",

				element: <Dashboard></Dashboard>,
			},
			{
				path: "/dashboard/sellers",
				element: (
					<AdminRoute>
						<AllSellers></AllSellers>
					</AdminRoute>
				),
			},
			{
				path: "/dashboard/buyers",
				element: (
					<PrivateRoute>
						<AllBuyers></AllBuyers>
					</PrivateRoute>
				),
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
				path: "/dashboard/myorders",
				element: (
					<PrivateRoute>
						<MyOrders></MyOrders>
					</PrivateRoute>
				),
			},
			{
				path: "/dashboard/myproducts",
				element: (
					<PrivateRoute>
						<MyProducts></MyProducts>
					</PrivateRoute>
				),
			},
			{
				path: "/dashboard/myproducts/myproductdelete",
				element: (
					<PrivateRoute>
						<MyProductsDelete></MyProductsDelete>
					</PrivateRoute>
				),
			},
			{
				path: "/dashboard/mybuyers",
				element: (
					<PrivateRoute>
						<MyBuyers></MyBuyers>
					</PrivateRoute>
				),
			},
			{
				path: "/dashboard/addphone",
				element: (
					<PrivateRoute>
						<AddPhone></AddPhone>
					</PrivateRoute>
				),
			},
			
		
			{
				path: "/dashboard/payment/:id",
				element: <Payment></Payment>,
				loader: ({ params }) =>
					fetch(
						`https://usedphonesserver-saifuddinmonna.vercel.app/payment/${params.id}`,
					),
			},
			{
				path: "/dashboard/*",
				element: <DisplayError></DisplayError>,
			},
		],
	},
]);

export default router;
