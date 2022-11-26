import React from 'react';

const BnnerHero = () => {
        return (
			<div>
				<div className="hero  bg-base-200">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<img
							src="https://unsplash.com/photos/xdLXPic3Wfk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8aXBob25lfGVufDB8fHx8MTY2OTQ2MzMxNg&force=true"
							className="max-w-sm rounded-lg shadow-2xl"
						/>
						<div>
							<h1 className="text-5xl font-bold">
								Used Phone News
							</h1>
							<p className="py-6">
								Provident cupiditate voluptatem et in. Quaerat
								fugiat ut assumenda excepturi exercitationem
								quasi. In deleniti eaque aut repudiandae et a id
								nisi.
							</p>
							<button className="btn btn-primary">
								Get Started
							</button>
						</div>
					</div>
				</div>
			</div>
		);
};

export default BnnerHero;