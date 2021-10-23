import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

function Footer() {
	return (
		<footer className="py-3 mt-4 bg-dark">
			<ul className="nav justify-content-center border-bottom pb-3 mb-3 container">
				<li className="nav-item">
					<button
						className="btn btn-link nav-link px-2 text-white"
						onClick={() => scroll.scrollToTop()}
					>
						Home
					</button>
				</li>
				<li className="nav-item">
					<Link
						to="projects"
						smooth
						duration={1000}
						className="nav-link px-2 text-white"
					>
						Projects
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="contacts"
						smooth
						duration={1000}
						className="nav-link px-2 text-white"
					>
						Contacts
					</Link>
				</li>
			</ul>
			<p className="text-center text-white">&copy; 2021 Christian Yator</p>
		</footer>
	);
}

export default Footer;
