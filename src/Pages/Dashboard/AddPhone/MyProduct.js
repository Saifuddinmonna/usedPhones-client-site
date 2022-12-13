import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyProductDelete from "./MyProductDelete";

const MyProduct = ({ service }) => {
	const { name, description, brand, image, _id } = service;
	const { user } = useContext(AuthContext);
	const [idClick, setIdClick] = useState();
	// console.log("id from brand", id);

	const HandleDelete = ({ _id }) => {
		console.log("id for delete", _id);
		setIdClick(_id);
		console.log(_id);
	};
	console.log(idClick);
	// console.log("from the url", url);

	const url = `http://localhost:5000/myproducts/delete/id/${idClick}/email/${user?.email}`;
	const HandleDeleteConfirm = () => {
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
	};
	return (
		<>
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
						<Link
							onClick={() => HandleDelete({ _id })}
							htmlFor="my-modal-3"
							to="/dashboard/myproducts/myproductdelete"
							className=" w-full  rounded-b-xl text-strong strong">
							Dlelete
						</Link>

						<Link
							className="   w-full  rounded-b-xl"
							to={`category/${_id}`}>
							Edit
						</Link>
						<ToastContainer />
					</div>
				</div>
			</>
		</>
	);
};

export default MyProduct;
