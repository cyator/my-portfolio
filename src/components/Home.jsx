import React from 'react';

import Card from './Card';
import Contact from './Contact';
import Hero from './Hero';

import linkedin from './assets/linkedin.svg';
import email from './assets/email.svg';

function Home() {
	return (
		<div>
			<section className="landing container">
				<Hero />
			</section>
			<section id="projects" className="projects">
				<div className="container px-4 py-5">
					<h2 className="pb-2 border-bottom border-dark">Projects</h2>
					<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
						<div className="col">
							<Card
								name="Yote fresh groceries"
								desc="Paragraph of text beneath the heading to explain the heading. We'll
					add onto it with another sentence and probably just keep going until
					we run out of words."
								view={process.env.REACT_APP_YOTEFRESH_VIEW}
								code={process.env.REACT_APP_YOTEFRESH_CODE}
							/>
						</div>
						<div className="col">
							<Card
								name="JKUAT lab scheduler"
								desc="Paragraph of text beneath the heading to explain the heading. We'll
					add onto it with another sentence and probably just keep going until
					we run out of words."
								code={process.env.REACT_APP_JKLAB_CODE}
							/>
						</div>
						<div className="col">
							<Card
								name="Random tree generator"
								desc="Paragraph of text beneath the heading to explain the heading. We'll
					add onto it with another sentence and probably just keep going until
					we run out of words."
								view={process.env.REACT_APP_TREEGEN_VIEW}
								code={process.env.REACT_APP_TREEGEN_CODE}
							/>
						</div>
					</div>
				</div>
			</section>
			<section id="contacts" className="contacts">
				<div className="container px-4 py-5">
					<div className="pb-2 border-bottom border-dark row">
						<h2 className="col">Contacts</h2>

						<ul className="col justify-content-end list-unstyled d-flex m-0 align-items-center">
							<li className="ms-3">
								<a
									className="text-muted"
									href={process.env.LINKEDIN}
									target="_blank"
									rel="noreferrer"
								>
									<img src={linkedin} alt="linkedin" />
								</a>
							</li>
							<li className="ms-3">
								<a className="text-muted" href={`mailto:${process.env.EMAIL}`}>
									<img src={email} alt="email" />
								</a>
							</li>
						</ul>
					</div>
					<Contact />
				</div>
			</section>
		</div>
	);
}

export default Home;
