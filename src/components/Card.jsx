import React from 'react';
import logo from './logo.svg';

function Card({ name }) {
	return (
		<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
			<div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
				<h2 className="pt-2 mt-5 mb-4 display-6 lh-1 fw-bold">{name}</h2>
				<p>
					Paragraph of text beneath the heading to explain the heading. We'll
					add onto it with another sentence and probably just keep going until
					we run out of words.
				</p>
				<ul className="d-flex list-unstyled mt-auto">
					<li className="me-auto">
						<img
							src={logo}
							alt="Bootstrap"
							width="32"
							height="32"
							className="rounded-circle border border-white d-none d-sm-block"
						/>
					</li>
					<li className="d-flex align-items-center me-3">
						<button className="btn btn-outline-secondary">View</button>
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
