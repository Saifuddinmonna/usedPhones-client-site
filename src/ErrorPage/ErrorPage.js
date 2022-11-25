import React from 'react';
import { Helmet } from 'react-helmet';
import NavbarPage from '../NavbarPage/NavbarPage';

const ErrorPage = () => {
        return (
			<div>
				<Helmet>
					<meta charSet="utf-8" />
					<title>Error Page</title>
					<link rel="canonical" href="http://mysite.com/example" />
				</Helmet>
				<NavbarPage></NavbarPage>
				<h2 className='text-8xl text-danger  text-center border rounded-full d-inline-block p-4 mt-4 text-center m-4 bg-red-100 shadow-lg'>this is very common path error!! dont worry!! Just click the home button</h2>
			</div>
		);
};

export default ErrorPage;