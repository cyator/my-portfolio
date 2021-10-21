import React from 'react';

function Footer() {
	return (
		<footer className="py-3 mt-4 bg-dark">
			<ul className="nav justify-content-center border-bottom pb-3 mb-3 container">
				<li className="nav-item">
					<a href="#home" className="nav-link px-2 text-white">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a href="#projects" className="nav-link px-2 text-white">
						Projects
					</a>
				</li>
				<li className="nav-item">
					<a href="#contacts" className="nav-link px-2 text-white">
						Contacts
					</a>
				</li>
			</ul>
			<p className="text-center text-white">&copy; 2021 Christian Yator, Inc</p>
		</footer>
	);
}

export default Footer;
