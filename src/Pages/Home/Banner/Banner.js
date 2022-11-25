import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
		<div
			className="hero min-h-screen"
			style={{
				backgroundImage: `url("bnner-pic.jpg")`,
			}}>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="">
					<h1 className="mb-5 text-5xl font-bold">
						Buy - Sell Your Used Product
					</h1>
					<p className="mb-5">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut
						assumenda excepturi exercitationem quasi. In deleniti
						eaque aut repudiandae et a id nisi.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;