import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
	return (
		<div>
			 <Navbar className="z-20"></Navbar>
			
			<Outlet className="z-0"></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;
