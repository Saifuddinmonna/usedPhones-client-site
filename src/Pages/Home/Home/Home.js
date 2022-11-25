import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import CustomarReviews from "../Testimonial/CustomarReviews";

const Home = () => {
	return (
		<div className="mx-5">
			<Banner></Banner>
			{/* <InfoCards></InfoCards> */}
			<Services></Services>
			<MakeAppointment></MakeAppointment>
			<CustomarReviews></CustomarReviews>
		</div>
	);
};

export default Home;
