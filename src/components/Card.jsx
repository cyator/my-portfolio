import React from 'react';
import logo from './assets/logo.svg';

function Card({ name, desc, view, code }) {
	return (
		<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
			<div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
				<h2 className="pt-2 mt-5 mb-4 display-6 lh-1 fw-bold">{name}</h2>
				<p>{desc}</p>
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
						<a
							target="_blank"
							rel="noreferrer"
							href={view}
							className={`btn btn-outline-secondary ${!view && 'disabled'}`}
						>
							View
						</a>
					</li>
					<li className="d-flex align-items-center">
						<a
							target="_blank"
							rel="noreferrer"
							href={code}
							className={`btn btn-outline-secondary ${!code && 'disabled'}`}
						>
							Source Code
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Card;
