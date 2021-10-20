import './App.scss';
import Card from './components/Card';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import linkedin from './linkedin.svg';
import email from './email.svg';

function App() {
	return (
		<div className="App">
			<NavBar />
			<section className="landing container">
				<Hero />
			</section>
			<section className="projects">
				<div class="container px-4 py-5">
					<h2 class="pb-2 border-bottom border-dark">Projects</h2>
					<div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
						<div class="col">
							<Card />
						</div>
						<div class="col">
							<Card />
						</div>
						<div class="col">
							<Card />
						</div>
					</div>
				</div>
			</section>
			<section className="contacts">
				<div class="container px-4 py-5">
					<div class="pb-2 border-bottom border-dark row">
						<h2 className="col">Contacts</h2>

						<ul class="col justify-content-end list-unstyled d-flex m-0 align-items-center">
							<li class="ms-3">
								<a class="text-muted" href="/linked-in">
									<img src={linkedin} alt="brand" />
								</a>
							</li>
							<li class="ms-3">
								<a class="text-muted" href="/email">
									<img src={email} alt="brand" />
								</a>
							</li>
						</ul>
					</div>

					<Contact />
				</div>
				<Footer />
			</section>
		</div>
	);
}

export default App;
