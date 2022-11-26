import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
             })
            .catch(err => console.log(err));
    }

    return (
		<div className="flex justify-center items-center  mx-auto my-auto  h-screen">
			<div className="card card-compact mx-auto my-auto w-96 bg-base-100 shadow-xl">
				<figure>
					<img
						src="https://unsplash.com/photos/JpTY4gUviJM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8NDA0JTIwZXJyb3J8ZW58MHx8fHwxNjY5NTAxMjYx&force=true"
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						{error.statusText || error.message}
					</h2>
					<div>
						<p className="text-red-500">Something went wrong!!!</p>
						<p className="text-red-400"></p>{" "}
						<h4 className="text-3xl">
							{" "}
							Please{" "}
							<button onClick={handleLogOut}>Sign out</button> and
							log back in
						</h4>
					</div>
					<div className="card-actions justify-end">
						<Link to="/">
							<button className="btn btn-primary">Go Home</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DisplayError;