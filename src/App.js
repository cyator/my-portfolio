import React from 'react';
import './App.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from './components/NavBar';
import FooterPortal from './components/FooterPortal';
import Home from './components/Home';
import Canvas from './components/Canvas';

function App() {
	return (
		<div className="App">
			{/* <Canvas /> */}
			<NavBar />
			<Home />
			<FooterPortal />
			<ToastContainer />
		</div>
	);
}

export default App;
