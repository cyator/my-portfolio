import React from 'react';
import './App.scss';

import NavBar from './components/NavBar';
import FooterPortal from './components/FooterPortal';
import Home from './components/Home';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Home />
			<FooterPortal />
		</div>
	);
}

export default App;
