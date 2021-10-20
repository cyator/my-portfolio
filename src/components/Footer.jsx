import React from 'react';

function Footer() {
	return (
		<footer class="py-3 my-4 bg-dark">
			<ul class="nav justify-content-center border-bottom pb-3 mb-3 container">
				<li className="nav-item">
					<a href="/home" className="nav-link px-2 text-muted">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a href="/projects" className="nav-link px-2 text-muted">
						Projects
					</a>
				</li>
				<li className="nav-item">
					<a href="/contacts" className="nav-link px-2 text-muted">
						Contacts
					</a>
				</li>
				<li className="nav-item">
					<a href="/about" class="nav-link px-2 text-muted">
						About
					</a>
				</li>
			</ul>
			<p class="text-center text-muted">&copy; 2021 Christian Yator, Inc</p>
		</footer>
	);
}

export default Footer;
