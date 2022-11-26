import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddPhone = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const imageHostKey = process.env.REACT_APP_imgbb_key;
	console.log(imageHostKey, "image key");

	const navigate = useNavigate();

	const { data: brands, isLoading } = useQuery({
		queryKey: ["brand"],
		queryFn: async () => {
			const res = await fetch("http://localhost:5000/brandname");
			const data = await res.json();
			return data;
		},
	});

	const handleAddPhone = (data) => {
		const image = data.image[0];
		const formData = new FormData();
		formData.append("image", image);
		const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((imgData) => {
				if (imgData.success) {
					console.log(imgData.data.url);
					const phone = {
						sellerName: data.name,
						sellerEmail: data.email,
						brand: data.brand,
						image: imgData.data.url,
						originalPrice: data.originalPrice,
						resalePrice: data.resalePrice,
						yearOfUse: data.yearOfUse,
						timeOfPost: new Date("2015-03-25"),
					};

					// save phone information to the database
					fetch("http://localhost:5000/phones", {
						method: "POST",
						headers: {
							"content-type": "application/json",
							authorization: `bearer ${localStorage.getItem(
								"accessToken",
							)}`,
						},
						body: JSON.stringify(phone),
					})
						.then((res) => res.json())
						.then((result) => {
							console.log(result);
							toast.success(`${data.name} is added successfully`);
							navigate("/dashboard/managedoctors");
						});
				}
			});
	};

	if (isLoading) {
		return <Loading></Loading>;
	}

	return (
		<div className="w-96 p-7">
			<h2 className="text-4xl">Add A Phone</h2>
			<form onSubmit={handleSubmit(handleAddPhone)}>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						{" "}
						<span className="label-text">Name</span>
					</label>
					<input
						type="text"
						{...register("name", {
							required: "Name is Required",
						})}
						className="input input-bordered w-full max-w-xs"
					/>
					{errors.name && (
						<p className="text-red-500">{errors.name.message}</p>
					)}
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						{" "}
						<span className="label-text">Email</span>
					</label>
					<input
						type="email"
						{...register("email", {
							required: true,
						})}
						className="input input-bordered w-full max-w-xs"
					/>
					{errors.email && (
						<p className="text-red-500">{errors.email.message}</p>
					)}
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						{" "}
						<span className="label-text">Original Price</span>
					</label>
					<input
						type="number"
						{...register("originalPrice", {
							required: true,
						})}
						className="input input-bordered w-full max-w-xs"
					/>
					{errors.email && (
						<p className="text-red-500">{errors.email.message}</p>
					)}
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						{" "}
						<span className="label-text">Resale Price</span>
					</label>
					<input
						type="number"
						{...register("resalePrice", {
							required: true,
						})}
						className="input input-bordered w-full max-w-xs"
					/>
					{errors.email && (
						<p className="text-red-500">{errors.email.message}</p>
					)}
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						{" "}
						<span className="label-text">Year of Use</span>
					</label>
					<input
						type="year"
						{...register("yearOfUse", {
							required: true,
						})}
						className="input input-bordered w-full max-w-xs"
					/>
					{errors.email && (
						<p className="text-red-500">{errors.email.message}</p>
					)}
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						{" "}
						<span className="label-text">brand</span>
					</label>
					<select
						{...register("brand")}
						className="select input-bordered w-full max-w-xs">
						{brands.map((brand) => (
							<option key={brand._id} value={brand.brand}>
								{brand.brand}
							</option>
						))}
					</select>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						{" "}
						<span className="label-text">Location</span>
					</label>
					<select
						{...register("location")}
						className="select input-bordered w-full max-w-xs">
						{brands.map((brand) => (
							<option key={brand._id} value={brand.brand}>
								{brand.brand}
							</option>
						))}
					</select>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						{" "}
						<span className="label-text">Photo</span>
					</label>
					<input
						type="file"
						{...register("image", {
							required: "Photo is Required",
						})}
						className="input input-bordered w-full max-w-xs"
					/>
					{errors.img && (
						<p className="text-red-500">{errors.img.message}</p>
					)}
				</div>
				<input
					className="btn btn-accent w-full mt-4"
					value="Add phone"
					type="submit"
				/>
			</form>
		</div>
	);
};

/**
 * Three places to store images
 * 1. Third party image hosting server
 * 2. File system of your server
 * 3. mongodb (database)
 */

export default AddPhone;
