import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const { signIn, user } = useContext(AuthContext);
	const [loginError, setLoginError] = useState("");
	const [loginUserEmail, setLoginUserEmail] = useState("");
	const [token] = useToken(loginUserEmail);
	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || "/";

	const handleLogin = (data) => {
		console.log(data);
		setLoginError("");
		signIn(data.email, data.password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				setLoginUserEmail(data.email);
			})
			.catch((error) => {
				console.log(error.message);
				setLoginError(error.message);
			});
	};

	useEffect(() => {
		if (token) {
			navigate(from, { replace: true });
		}
	}, [user, token, loginUserEmail]);

	return (
		<div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
				<h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Login</h2>
				<form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text font-semibold text-gray-700">Email</span>
						</label>
						<input
							type="text"
							{...register("email", {
								required: "Email Address is required",
							})}
							className="input input-bordered w-full text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary"
							placeholder="Enter your email"
						/>
						{errors.email && (
							<p className="text-red-600 text-sm mt-1">
								{errors.email?.message}
							</p>
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
									message: "Password must be 6 characters or longer",
								},
							})}
							className="input input-bordered w-full text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary"
							placeholder="Enter your password"
						/>
						<label className="label">
							<Link to="/forgot-password" className="label-text-alt text-primary hover:text-primary-dark">
								Forgot Password?
							</Link>
						</label>
						{errors.password && (
							<p className="text-red-600 text-sm mt-1">
								{errors.password?.message}
							</p>
						)}
					</div>
					<button
						className="btn btn-primary w-full text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300"
						type="submit">
						Login
					</button>
					<div>
						{loginError && (
							<p className="text-red-600 text-center">{loginError}</p>
						)}
					</div>
				</form>
				<p className="mt-6 text-center text-gray-600">
					New to Used Phone{" "}
					<Link className="text-primary font-semibold hover:text-primary-dark" to="/signupbuyer">
						Create new Account
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

export default Login;
