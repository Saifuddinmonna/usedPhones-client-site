import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const pageNumbers = [];

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	if (totalPages <= 1) {
		return null; // Don't render pagination if there's only one page or less
	}

	return (
		<nav aria-label="Page navigation" className="mt-12 flex justify-center">
			<ul className="inline-flex items-center -space-x-px">
				<li>
					<button
						onClick={() => onPageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed`}>
						Previous
					</button>
				</li>
				{pageNumbers.map((number) => (
					<li key={number}>
						<button
							onClick={() => onPageChange(number)}
							className={`px-3 py-2 leading-tight border border-gray-300 ${
								currentPage === number
									? "text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 font-semibold"
									: "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
							}`}>
							{number}
						</button>
					</li>
				))}
				<li>
					<button
						onClick={() => onPageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed`}>
						Next
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;