import React from 'react';
import brand from './assets/brand.svg';
import '../../node_modules/bootstrap/js/dist/collapse';

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container">
				<a href="/home" className="navbar-brand">
					<img
						src={brand}
						alt="brand"
						className="img-fluid d-none d-sm-block"
					/>
					<img
						src={brand}
						alt="brand"
						className="img-fluid d-sm-none"
						width={200}
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav  ms-auto mb-2 mb-lg-0 ">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#home">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="#projects">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contacts">
								Contacts
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
