import React from "react";
import AllPhonesForLayout from "../../Dashboard/AddPhone/AllPhones";
import Payment from "../../Dashboard/Payment/Payment";

import Banner from "../Banner/Banner";
import BnnerHero from "../Banner/BnnerHero";
import Brands from "../Brands/Brands";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";

import CustomarReviews from "../Testimonial/CustomarReviews";

const Home = () => {
	return (
		<div className="mx-5 z-0">
			<Banner></Banner>
			{/* <Payment></Payment> */}
			<div>
			<AllPhonesForLayout></AllPhonesForLayout>
			</div>
			<Brands></Brands>
			<BnnerHero></BnnerHero>
			<CustomarReviews></CustomarReviews>
		</div>
	);
};

export default Home;
