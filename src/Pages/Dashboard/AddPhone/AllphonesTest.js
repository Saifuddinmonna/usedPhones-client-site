import { Link } from "react-router-dom";

<div className="card bg-base-100 shadow-xl">
				<figure className="px-10 pt-10">
					<img
						src={img}
						alt="image of brand"
						className="rounded-xl"
					/>
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title">{brand}</h2>
				</div>
				<div className="p-2 mx- bg-primary mb- w-full opacity-90 rounded-b-xl text-center">
					<Link
						className="   w-full  rounded-b-xl"
						to={`category/${id}`}>
						Click Category Route
					</Link>
				</div>
			</div>