import React from 'react';
import logo from './logo.svg';

function Card() {
	return (
		<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
			<div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
				<h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
					MERN stack eccommerce site
				</h2>
				<ul className="d-flex list-unstyled mt-auto">
					<li className="me-auto">
						<img
							src={logo}
							alt="Bootstrap"
							width="32"
							height="32"
							className="rounded-circle border border-white"
						/>
					</li>
					<li className="d-flex align-items-center me-3">
						<button className="btn btn-outline-primary">View</button>
					</li>
					<li className="d-flex align-items-center">
						<button className="btn btn-outline-secondary">Source Code</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Card;
