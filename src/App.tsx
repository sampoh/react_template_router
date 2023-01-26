import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Fragment} from 'react'

import './App.css';

import Top from './components/top';
import PageA from './components/page_a';
import PageB from './components/page_b';
import PageC from './components/page_c';
import Links from './components/links';

function App() {
  return (
	<Fragment>

		<Router>
			<Routes>
				{/* <Route>で個々のルーティングを定義する */}
				<Route path="/" element={<Top />} />
				<Route path="/pagea" element={<PageA />} />
				<Route path="/pageb" element={<PageB />} />
				<Route path="/pagec" element={<PageC />} />
			</Routes>
		</Router>

		<Links />

	</Fragment>
  );
}

export default App;
