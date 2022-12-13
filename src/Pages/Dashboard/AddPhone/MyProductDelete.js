import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyProductDelete = ({ service }) => {
	const { description, brand, image, _id } = service;
	const { user } = useContext(AuthContext);
	// const [idClick, setIdClick] = useState();
	// console.log("id from brand", id);
	const navigate = useNavigate();
	const HandleDelete = ({ _id }) => {
		console.log("id for delete", _id);

		console.log(_id);
		const url = `https://usedphonesserver-saifuddinmonna.vercel.app/myproducts/delete/id/${_id}/email/${user?.email}`;
		console.log("from the url", url);
		fetch(url, { method: "DELETE" })
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast.success("phone is sucessfully deleted");
					console.log("from the url", url);
				}
			})
			.catch((error) => {
				toast(error);
				toast.error("eror , no match data is not  deleeted");
				console.log(
					"eror , no match data and phone is not sucessfully deleeted",
				);
			});
		navigate("/dashboard/myproducts");
	};

	// console.log("from the url", url);

	return (
		<>
			<div className="card bg-base-100 shadow-xl">
				<figure className="px-10 pt-10">
					<img
						src={image}
						alt="image of brand"
						className="rounded-xl"
					/>
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title">{brand}</h2>
					email {user.email} id: and : {_id}
				</div>
				<div className="p-2 mx- bg-primary flex mb- w-full opacity-90 rounded-b-xl text-center">
					<label
						onClick={() => HandleDelete({ _id })}
						htmlFor="my-modal-3"
						className=" w-full  rounded-b-xl text-strong strong">
						Confirme Dlelete
					</label>

					<ToastContainer />
				</div>
			</div>
		</>
	);
};

export default MyProductDelete;

// export default MyProductDelete;
