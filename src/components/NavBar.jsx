import React from 'react';
import brand from './assets/brand.svg';
import '../../node_modules/bootstrap/js/dist/collapse';
import { Link, animateScroll as scroll } from 'react-scroll';

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container">
				<button
					type="button"
					onClick={() => scroll.scrollToTop()}
					className="navbar-brand btn btn-link"
				>
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
				</button>
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
							<button
								className="nav-link btn btn-link"
								aria-current="page"
								onClick={() => scroll.scrollToTop()}
							>
								Home
							</button>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								aria-current="page"
								smooth
								duration={1000}
								to="projects"
							>
								Projects
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" smooth duration={1000} to="contacts">
								Contacts
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
