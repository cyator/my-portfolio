import './App.scss';
import Card from './components/Card';
import Contact from './components/Contact';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import linkedin from './linkedin.svg';
import email from './email.svg';
// import FooterPortal from './components/FooterPortal';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<NavBar />
			<section className="landing container">
				<Hero />
			</section>
			<section className="projects">
				<div className="container px-4 py-5">
					<h2 className="pb-2 border-bottom border-dark">Projects</h2>
					<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
						<div className="col">
							<Card name="Yote fresh groceries" />
						</div>
						<div className="col">
							<Card name="JKUAT lab scheduler" />
						</div>
						<div className="col">
							<Card name="Random tree generator" />
						</div>
					</div>
				</div>
			</section>
			<section className="contacts">
				<div className="container px-4 py-5">
					<div className="pb-2 border-bottom border-dark row">
						<h2 className="col">Contacts</h2>

						<ul className="col justify-content-end list-unstyled d-flex m-0 align-items-center">
							<li className="ms-3">
								<a className="text-muted" href="/linked-in">
									<img src={linkedin} alt="brand" />
								</a>
							</li>
							<li className="ms-3">
								<a className="text-muted" href="/email">
									<img src={email} alt="brand" />
								</a>
							</li>
						</ul>
					</div>

					<Contact />
				</div>
				{/* <FooterPortal /> */}
				<Footer />
			</section>
		</div>
	);
}

export default App;
