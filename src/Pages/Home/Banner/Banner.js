import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
	return (
		<div className="z-0">
			<div
				className="hero h-80 p-1 rounded-lg my-3"
				style={{
					backgroundImage: `url("https://unsplash.com/photos/m1YdCuCQDvQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTJ8fGlwaG9uZSUyMDEyfGVufDB8fHx8MTY2OTU1MzM4Mw&force=true")`,
				}}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="z-0">
						<h1 className="mb-5 text-5xl font-bold z-0">
							Buy - Sell Your Used Product
						</h1>
						<p className="mb-5 z-1">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
			{/* <div className="carousel w-full h-80 shadow-lg border border-spacing-1">
				<div id="item1" className="carousel-item w-full">
					<img
						src="https://unsplash.com/photos/eikp2rTLahg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTJ8fG9uZSUyMHBsdXMlMjBwaG9uZXxlbnwwfHx8fDE2Njk0NjI1NzE&force=true"
						className="w-full"
					/>
				</div>
				<div id="item2" className="carousel-item w-full">
					<img
						src="https://placeimg.com/800/200/arch"
						className="w-full"
					/>
				</div>
				<div id="item3" className="carousel-item w-full">
					<img
						src="https://placeimg.com/800/200/arch"
						className="w-full"
					/>
				</div>
				<div id="item4" className="carousel-item w-full">
					<img
						src="https://placeimg.com/800/200/arch"
						className="w-full"
					/>
				</div>
			</div>
			<div className="flex justify-center w-full py-2 gap-2">
				<a href="#item1" className="btn btn-xs">
					1
				</a>
				<a href="#item2" className="btn btn-xs">
					2
				</a>
				<a href="#item3" className="btn btn-xs">
					3
				</a>
				<a href="#item4" className="btn btn-xs">
					4
				</a>
			</div> */}
		</div>
	);
};

export default Banner;
