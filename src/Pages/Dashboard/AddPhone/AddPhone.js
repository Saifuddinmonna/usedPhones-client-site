import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
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

	const {
		data: brands,

		isLoading,
	} = useQuery({
		queryKey: ["brand"],
		queryFn: async () => {
			const res = await fetch("http://localhost:5000/brandname");
			const data = await res.json();
			console.log("data", data);
			return data;
		},

		
	});
	const {
		data: divisions,

		isLoading2,
	} = useQuery({
		queryKey: ["division"],
		queryFn: async () => {
			const res = await fetch("http://localhost:5000/divisionsname");
			const data = await res.json();
			console.log("data", data);
			return data;
		},

		
	});
	console.log(data.location);

	const handleAddPhone = (data) => {
		const image = data.image[0];
		const multipleImage = data.multipleImage;
		const images = [image, multipleImage];
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
					console.log(data.multipleImage, "images");
					console.log(data.image, "images");
					console.log("data", data);
					const phone = {
						sellerName: data.name,
						sellerEmail: data.email,
						brand: data.brand,
						image: imgData.data.url,
						originalPrice: data.originalPrice,
						resalePrice: data.resalePrice,
						yearOfUse: data.yearOfUse,
						dateOfBuying : data.dateOfBuying,
						timeOfPost: new Date("2015-03-25"),
						location : data.location,
						multipleImage: data.multipleImage
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
		<div className="flex flex-col justify-center items-center mt-5 ">
			<div className="px-7 ">
				<h2 className="text-4xl text-center">Add A Phone</h2>
			</div>
			<div className="flex flex-row justify-center items-center mx-5 my-6 ">
				<form
					className="text-center grid  justify-center items-center"
					onSubmit={handleSubmit(handleAddPhone)}>
					<div className="text-center grid gap-4 md:grid-cols-2 lg:grid-cols-2  justify-center items-center">
						<div className="form-control w-full max-w-xs">
							<label className="label">
								{" "}
								<span className="label-text">Seller Name</span>
							</label>
							<input
								type="text"
								{...register("name", {
									required: "Name is Required",
								})}
								className="input input-bordered w-full max-w-xs"
							/>
							{errors.name && (
								<p className="text-red-500">
									{errors.name.message}
								</p>
							)}
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								{" "}
								<span className="label-text">
									Condition Type
								</span>
							</label>
							<input
								type="text"
								{...register("condition", {
									required: "Name is Required",
								})}
								className="input input-bordered w-full max-w-xs"
							/>
							{errors.name && (
								<p className="text-red-500">
									{errors.name.message}
								</p>
							)}
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								{" "}
								<span className="label-text">Seller Email</span>
							</label>
							<input
								type="email"
								{...register("email", {
									required: true,
								})}
								className="input input-bordered w-full max-w-xs"
							/>
							{errors.email && (
								<p className="text-red-500">
									{errors.email.message}
								</p>
							)}
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								{" "}
								<span className="label-text">
									Original Price
								</span>
							</label>
							<input
								type="number"
								{...register("originalPrice", {
									required: true,
								})}
								className="input input-bordered w-full max-w-xs"
							/>
							{errors.email && (
								<p className="text-red-500">
									{errors.email.message}
								</p>
							)}
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								{" "}
								<span className="label-text">
									Mobile Number
								</span>
							</label>
							<input
								type="number"
								{...register("mobileNumber", {
									required: true,
								})}
								className="input input-bordered w-full max-w-xs"
							/>
							{errors.email && (
								<p className="text-red-500">
									{errors.email.message}
								</p>
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
								<p className="text-red-500">
									{errors.email.message}
								</p>
							)}
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								{" "}
								<span className="label-text">
									Date of buying
								</span>
							</label>
							<input
								type="date"
								{...register("dateOfBuying", {
									required: true,
								})}
								className="input input-bordered w-full max-w-xs"
							/>
							{errors.email && (
								<p className="text-red-500">
									{errors.email.message}
								</p>
							)}
							<label className="label">
								{" "}
								<span className="label-text">Year of Use</span>
							</label>
							<input
								type="number"
								{...register("yearOfUse", {
									required: true,
								})}
								className="input input-bordered w-full max-w-xs"
							/>
							{errors.email && (
								<p className="text-red-500">
									{errors.email.message}
								</p>
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
								{divisions.map((division) => (
									<option
										key={division._id}
										value={division.division}>
										{division.division}
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
								multiple
								accept="image/*"
								{...register("image", {
									required: "Photo is Required",
								})}
								className="input input-bordered w-full max-w-xs"
							/>

							{errors.img && (
								<p className="text-red-500">
									{errors.img.message}
								</p>
							)}
						</div>
						{/* <div className="form-control w-full max-w-xs">
					<label className="label">
						{" "}
						<span className="label-text">Photo</span>
					</label>
					<input
						type="file"
						id="fileElem"
						multiple
						accept="image/*"
						{...register("multipleImage", {
							required: "Photo is Required",
						})}
					/>
					<a href="#" id="fileSelect">
						Select some files
					</a>
					<div id="fileList">
						<p>No files selected!</p>
					</div>

					{errors.img && (
						<p className="text-red-500">{errors.img.message}</p>
					)}
				</div> */}
					</div>

					<div>
						<input
							className="btn btn-primary w-full  mt-4"
							value="Add phone"
							type="submit"
						/>
					</div>
				</form>
			</div>
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
