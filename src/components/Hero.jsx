import React from 'react';
import logo from './assets/logo.svg';
import { Link } from 'react-scroll';

function Hero() {
	return (
		<div className="px-4 py-5 my-5 text-center">
			<img
				className="d-block mx-auto mb-4"
				src={logo}
				alt=""
				width="72"
				height="57"
			/>
			<h1 className="display-5 fw-bold">Full-Stack software engineer</h1>
			<div className="col-lg-6 mx-auto">
				<p className="lead mb-4">
					Quickly design and customize responsive mobile-first sites with
					Bootstrap, the world’s most popular front-end open source toolkit,
					featuring Sass variables and mixins, responsive grid system, extensive
					prebuilt components, and powerful JavaScript plugins.
				</p>
				<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
					<Link
						to="projects"
						smooth
						duration={1000}
						className="btn btn-outline-primary btn-lg px-4"
					>
						Projects
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hero;
