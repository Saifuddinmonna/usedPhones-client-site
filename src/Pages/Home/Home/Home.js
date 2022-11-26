import React from "react";
import Banner from "../Banner/Banner";
import BnnerHero from "../Banner/BnnerHero";
import Brands from "../Brands/Brands";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";

import CustomarReviews from "../Testimonial/CustomarReviews";

const Home = () => {
	return (
		<div className="mx-5">
			<Banner></Banner>
			{/* <InfoCards></InfoCards> */}
			<Brands></Brands>
			<BnnerHero></BnnerHero>
			<CustomarReviews></CustomarReviews>
		</div>
	);
};

export default Home;
