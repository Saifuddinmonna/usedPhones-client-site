import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUpForBuyer = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { createUser, updateUser } = useContext(AuthContext);
	const [signUpError, setSignUPError] = useState("");
	const [createdUserEmail, setCreatedUserEmail] = useState("");
	const [token] = useToken(createdUserEmail);
	const navigate = useNavigate();
	const imageHostKey = process.env.REACT_APP_imgbb_key;
	console.log(imageHostKey, "image key");

	if (token) {
		navigate("/");
	}

	const handleSignUp = (data) => {
		setSignUPError("");
		createUser(data.email, data.password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast.success("User Created Successfully.");
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
							console.log(
								"from bb imag signup",
								imgData.data.url,
							);
							console.log(data.multipleImage, "images");
							console.log(data.image, "images");
							console.log("data", data);
							const userInfo = {
								displayName: data.name,
								photoURL: imgData.data.url,
							};

							updateUser(userInfo)
								.then(() => {
									saveUser(
										data.name,
										data.email,
										userInfo.photoURL,
									);
									console.log(
										"from save uder ",
										userInfo.photoURL,
									);
								})
								.catch((err) => console.log(err));
						}
					});
			})
			.catch((error) => {
				console.log(error);
				setSignUPError(error.message);
			});
	};
	const saveUser = (name, email, photoURL) => {
		console.log("from save uder ", photoURL);
		const user = { name, email, photoURL, role: "buyer" };
		fetch("https://usedphonesserver-saifuddinmonna.vercel.app/users", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				setCreatedUserEmail(email);
			});
	};

	return (
		<div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
				<h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Sign Up For Buyer</h2>
				<div className="flex justify-center gap-4 mb-8">
					<NavLink to="/signupbuyer">
						<button className="btn btn-primary px-6 py-2 rounded-lg font-semibold">
							Sign Up For Buyer
						</button>
					</NavLink>
					<NavLink to="/signupseller">
						<button className="btn btn-outline btn-primary px-6 py-2 rounded-lg font-semibold">
							Sign Up For Seller
						</button>
					</NavLink>
				</div>
				<form onSubmit={handleSubmit(handleSignUp)} className="space-y-6">
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text font-semibold text-gray-700">Name</span>
						</label>
						<input
							type="text"
							{...register("name", {
								required: "Name is Required",
							})}
							className="input input-bordered w-full text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary"
							placeholder="Enter your name"
						/>
						{errors.name && (
							<p className="text-red-600 text-sm mt-1">
								{errors.name.message}
							</p>
						)}
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text font-semibold text-gray-700">Email</span>
						</label>
						<input
							type="email"
							{...register("email", {
								required: "Email is required",
							})}
							className="input input-bordered w-full text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary"
							placeholder="Enter your email"
						/>
						{errors.email && (
							<p className="text-red-600 text-sm mt-1">
								{errors.email.message}
							</p>
						)}
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text font-semibold text-gray-700">Photo</span>
						</label>
						<input
							type="file"
							accept="image/*"
							{...register("image", {
								required: "Photo is Required",
							})}
							className="file-input file-input-bordered w-full text-gray-900 focus:ring-2 focus:ring-primary"
						/>
						{errors.img && (
							<p className="text-red-600 text-sm mt-1">{errors.img.message}</p>
						)}
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text font-semibold text-gray-700">Password</span>
						</label>
						<input
							type="password"
							{...register("password", {
								required: "Password is required",
								minLength: {
									value: 6,
									message: "Password must be 6 characters long",
								},
								pattern: {
									value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
									message: "Password must have uppercase, number and special characters",
								},
							})}
							className="input input-bordered w-full text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary"
							placeholder="Enter your password"
						/>
						{errors.password && (
							<p className="text-red-600 text-sm mt-1">
								{errors.password.message}
							</p>
						)}
					</div>
					<button
						className="btn btn-primary w-full text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300"
						type="submit">
						Sign Up For Buyer
					</button>
					{signUpError && (
						<p className="text-red-600 text-center">{signUpError}</p>
					)}
				</form>
				<p className="mt-6 text-center text-gray-600">
					Already have an account{" "}
					<Link className="text-primary font-semibold hover:text-primary-dark" to="/login">
						Please Login
					</Link>
				</p>
				<div className="divider text-gray-500">OR</div>
				<button className="btn btn-outline btn-primary w-full text-primary font-semibold hover:bg-gray-50 transition-colors duration-300">
					CONTINUE WITH GOOGLE
				</button>
			</div>
		</div>
	);
};

export default SignUpForBuyer;
