

import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PhonesCategories = () => {
        return (
			<div>
				<div className="card w-96 bg-base-100 shadow-xl">
					<figure className="px-10 pt-10">
						<img
							src="https://placeimg.com/400/225/arch"
							alt="Shoes"
							className="rounded-xl"
						/>
						<PhotoProvider>
							<PhotoView src="/1.jpg">
								<img
									src="https://placeimg.com/400/225/arch"
									alt="Shoes"
									className="rounded-xl"
								/>
							</PhotoView>
						</PhotoProvider>
					</figure>
					<div className="card-body items-center text-center">
						<h2 className="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions">
							<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		);
};

export default PhonesCategories;